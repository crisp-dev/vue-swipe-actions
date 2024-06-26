<template>
  <div
    class="swipeout"
    :class="{'swipeout--transitioning' : isTransitioning, 'swipeout--disabled': disabled}"
  >
    <div v-if="hasLeft" ref="left" class="swipeout-left">
      <slot :close="closeActions" :reached="leftReached" name="left"></slot>
    </div>
    <div v-if="hasRight" ref="right" class="swipeout-right">
      <slot :close="closeActions" :reached="rightReached" name="right"></slot>
    </div>
    <div class="swipeout-content" ref="content">
      <slot :close="closeActions" :revealRight="revealRight" :revealLeft="revealLeft"></slot>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import TinyGesture from 'tinygesture';

function reduceSwipe(x) {
  return Math.pow(x, 0.65); // eslint-disable-line
}

function translateX(x) {
  if (x === 0) return "";

  return `translate3d(${x}px, 0, 0)`;
}

export default {
  name: "swipe-item",
  data() {
    return {
      startLeft: 0,
      startX: 0,
      isActive: false,
      closing: false,
      isTransitioning: false,
      direction: null,
      leftOpen: false,
      rightOpen: false,
      leftReached: false,
      rightReached: false,
      leftActionsWidth: 0,
      rightActionsWidth: 0,

      hideLeftActionsScheduler: null,
      hideRightActionsScheduler: null
    };
  },
  computed: {
    hasLeft() {
      return this.$slots["left"] ? true : false;
    },
    hasRight() {
      return this.$slots["right"] ? true : false;
    }
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    margin: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: "translate"
    },
    threshold: {
      type: Number,
      default: 45
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.hasLeft && !this.hasRight) return;
    this._bind();
  },
  beforeUnmount() {
    if (this.hammer) this.hammer.destroy();
    this.hammer = null;
  },
  methods: {
    // public
    closeActions() {
      if (this.isActive) return;

      const content = this.$refs.content;
      const left = this.$refs.left;
      const right = this.$refs.right;

      this.closing = true;

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          content.style.transform = translateX(0, 0, 0);

          if (this.mode === "width") {
            if (this.hasRight) {
              right.style.visibility = "hidden";
              right.style.opacity = "0";
              right.children[0].style.width = "0px";
            }

            if (this.hasLeft) {
              left.style.visibility = "hidden";
              left.style.opacity = "0";
              left.children[0].style.width = "0px";
            }
          } else {
            right.children[0].style.transform = translateX(0, 0, 0);
            left.children[0].style.transform = translateX(0, 0, 0);
          }

          this.closing = false;
        });
      }, 100);

      this.leftOpen = false;
      this.rightOpen = false;
      this.leftReached = false;
      this.rightReached = false;
      this.startLeft = 0;
    },
    revealLeft() {
      if (this.isActive || this.closing) return;

      const oldLeft = this.$refs.content.getBoundingClientRect().left;
      this.leftOpen = true;
      this._animateSlide(this.leftActionsWidth, oldLeft);
    },
    revealRight() {
      if (this.isActive || this.closing) return;

      const oldLeft = this.$refs.content.getBoundingClientRect().left;
      this.rightOpen = true;
      this._animateSlide(-this.rightActionsWidth, oldLeft);
    },
    // private
    _bind() {
      // Disable default drag behavior on Firefox
      this.$el.addEventListener("dragstart", function (e) {
        e.preventDefault();
      });

      this.gesture = new TinyGesture(this.$el);

      this.gesture.on("panstart", this._startListener);
      this.gesture.on("panmove", this._swipeListener);
      this.gesture.on("panend", this._stopListener);

      if (this.mode === "width") {
        if (this.hasRight) {
          this.$refs.right.style.transform = "none";
          this.$refs.right.style.visibility = "hidden";
          this.$refs.right.style.opacity = "0";
          this.$refs.right.style.justifyContent = "end";
        }
        if (this.hasLeft) {
          this.$refs.left.style.transform = "none";
          this.$refs.left.style.visibility = "hidden";
          this.$refs.left.style.opacity = "0";
          this.$refs.left.style.justifyContent = "start";
        }
      }
    },
    _distanceSwiped() {
      const contentRect = this.$refs.content.getBoundingClientRect();
      const elementRect = this.$el.getBoundingClientRect();
      return contentRect.left - elementRect.left - this.$el.clientLeft;
    },
    _startListener(event) {
      // If it's not a left click
      if (event.which !== 1) return null;

      if (this.disabled || this.closing) return null;

      this.isTransitioning = false;

      if (this.gesture.touchMoveY >= -5 && this.gesture.touchMoveY <= 5) {
        this.leftActionsWidth = this.$refs.left
          ? this.$refs.left.clientWidth
          : 0;

        this.rightActionsWidth = this.$refs.right
          ? this.$refs.right.clientWidth
          : 0;

        this.startLeft = this._distanceSwiped();

        this.isActive = true;

        this.startX = this.gesture.touchStartX;
      }
      this.closeActions();
    },
    _swipeListener(event) {
      if (!this.isActive || this.disabled || this.closing) return null;

      const newX = this.startLeft + this.gesture.touchMoveX;

      if (this.direction === null && this.gesture.velocityX !== 0) {
        if (this.gesture.velocityX > 0) {
          this.direction = "ltr";
        } else {
          this.direction = "rtl";
        }
      }

      // assign reached markers
      this.leftReached = (this.direction === "ltr" && newX >= this.threshold);
      this.rightReached = (this.direction === "rtl" && newX <= -this.threshold);

      // attempting to reveal the right actions after revealing the left actions
      if (this.startLeft === 0 && this.direction === "ltr" && newX < 0) {
        return this._animateSlide(-reduceSwipe(-newX));
      }

      // attempting to reveal the left actions after revealing the right actions
      if (this.startLeft === 0 && this.direction === "rtl" && newX > 0) {
        return this._animateSlide(reduceSwipe(newX));
      }

      // attempting to reveal the right actions after starting with the left actions revealed
      if (this.startLeft < 0 && newX > 0) {
        return this._animateSlide(reduceSwipe(newX));
      }

      // attempting to reveal the left actions after starting with the right actions revealed
      if (this.startLeft > 0 && newX < 0) {
        return this._animateSlide(-reduceSwipe(-newX));
      }

      // overswiping left-to-right
      if (newX < -this.rightActionsWidth) {
        return this._animateSlide(
          -(
            this.rightActionsWidth +
            reduceSwipe(Math.abs(newX + this.rightActionsWidth))
          )
        );
      }

      if (newX > this.leftActionsWidth) {
        return this._animateSlide(
          +(this.leftActionsWidth + reduceSwipe(newX - this.leftActionsWidth))
        );
      }

      return this._animateSlide(newX);
    },
    _stopListener(event) {
      if (!this.isActive || this.disabled || this.closing) return null;

      const oldLeft = this.$refs.content.getBoundingClientRect().left;

      this.isActive = false;

      // close left actions
      if (this.startLeft > 0 && this.gesture.touchMoveX <= -this.threshold)
        return this.closeActions(); // _animateSlide(0, oldLeft);

      // close right actions
      if (this.startLeft < 0 && this.gesture.touchMoveX >= this.threshold)
        return this.closeActions(); // this._animateSlide(0, oldLeft);

      const currentLeft = this.startLeft + this.gesture.touchMoveX;
      // reveal left actions
      if (
        this.direction === "ltr" &&
        currentLeft >= this.threshold
      ) {
        this.$emit("swipeout:reveal", {
          direction: this.direction,
          item: this.item,
          close: this.closeActions
        });
      }

      // reveal right actions
      if (
        this.direction === "rtl" &&
        currentLeft <= -this.threshold
      ) {
        this.$emit("swipeout:reveal", {
          direction: this.direction,
          item: this.item,
          close: this.closeActions
        });
      }

      this.direction = null;

      return this._animateSlide(this.startLeft, oldLeft);
    },
    // shift actions
    _shiftLeftActions(newX) {
      if (!this.hasLeft || newX < 0) return;
      if (this.closing) return;

      const actions = this.$refs.left;
      const actionsWidth = this.leftActionsWidth;

      const progress = 1 - Math.min(newX / actionsWidth, 1);
      const deltaX = Math.min(newX, actionsWidth);

      const children = actions.children;
      const length = children.length;

      if (this.mode === "width") {
        if (deltaX) {
          clearTimeout(this.hideLeftActionsScheduler);

          actions.style.visibility = "visible";
          actions.style.opacity = "1";
        } else {
          // Closing action?
          if (newX === 0) {
            // Hide after a delay, in case there is a transition via CSS
            this.hideLeftActionsScheduler = setTimeout(() => {
              this.hideLeftActionsScheduler = null;

              actions.style.visibility = "hidden";
              actions.style.opacity = "0";
            }, 500);
          } else {
            // Hide now
            actions.style.visibility = "hidden";
            actions.style.opacity = "0";
          }
        }
      }

      for (let i = 0; i < length; i++) {
        const child = children[i];
        const offsetLeft = actionsWidth - child.offsetLeft - child.offsetWidth;

        if (this.mode === "width") {
          if (this.margin) {
            if (newX - this.margin >= 0) {
              child.style.width = newX - this.margin + "px";
            } else {
              child.style.width = "0px";
            }
          } else {
            child.style.width = newX + "px";
          }
        } else {
          child.style.transform = translateX(deltaX + offsetLeft * progress);
        }

        if (length > 1) child.style.zIndex = `${length - i}`;
      }
    },
    _shiftRightActions(newX) {
      if (!this.hasRight || newX > 0) return;
      if (this.closing) return;

      const actions = this.$refs.right;

      const actionsWidth = this.rightActionsWidth;

      const progress = 1 + Math.max(newX / actionsWidth, -1);
      const deltaX = Math.max(newX, -actionsWidth);
      const children = actions.children;

      if (this.mode === "width") {
        if (deltaX) {
          clearTimeout(this.hideRightActionsScheduler);

          actions.style.visibility = "visible";
          actions.style.opacity = "1";
        } else {
          // Closing action?
          if (newX === 0) {
            // Hide after a delay, in case there is a transition via CSS
            this.hideRightActionsScheduler = setTimeout(() => {
              this.hideRightActionsScheduler = null;

              actions.style.visibility = "hidden";
              actions.style.opacity = "0";
            }, 500);
          } else {
            // Hide now
            actions.style.visibility = "hidden";
            actions.style.opacity = "0";
          }
        }
      }

      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (this.mode === "width") {
          if (this.margin) {
            if (-newX - this.margin >= 0) {
              child.style.width = -newX - this.margin + "px";
            } else {
              child.style.width = "0px";
            }
          } else {
            child.style.width = -newX + "px";
          }
        } else {
          child.style.transform = translateX(
            deltaX - child.offsetLeft * progress
          );
        }
      }
    },

    _animateSlide(to, from) {
      if (this.closing) return;
      if (from) {
        if (to - from === 0) return;
        this.isTransitioning = true;
      }

      window.requestAnimationFrame(() => {
        this.$refs.content.style.transform = translateX(to);
        this._shiftLeftActions(to, this.leftActionsWidth);
        this._shiftRightActions(to, this.rightActionsWidth);
      });
    }
  }
};
</script>
<style>
.swipeout {
  position: relative;
  overflow: hidden;
  user-select: none;
  display: flex;
}

.swipeout.swipeout--disabled {
  user-select: auto;
}

.swipeout .swipeout-left,
.swipeout .swipeout-right {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 1;
}

.swipeout.swipeout--transitioning .swipeout-content,
.swipeout.swipeout--transitioning .swipeout-action {
  transition: transform 300ms;
}
.swipeout .swipeout-content {
  width: 100%;
}
.swipeout .swipeout-content,
.swipeout .swipeout-action {
  will-change: transform;
}

.swipeout .swipeout-left {
  left: 0;
  transform: translateX(-100%);
}

.swipeout .swipeout-right {
  right: 0;
  transform: translateX(100%);
}
.swipeout-list-item {
  outline: none;
}
</style>
