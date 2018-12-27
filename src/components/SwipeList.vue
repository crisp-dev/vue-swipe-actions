<template>
  <div :class="{'swipeout--disabled': disabled}" class="swipeout-list">
    <swipe-out
      v-for="(item, index) in items"
      :key="item[transitionKey] || index"
      :ref="`list-item-${index}`"
      :disabled="disabled"
      :threshold="threshold"
      :class="_getClass(item)"
      @swipeout:reveal="_emitReveal($event, item)"
    >
      <template slot="left" slot-scope="{ close }">
        <slot :close="close" :item="item" name="left"/>
      </template>
      <template slot-scope="{ close, revealRight, revealLeft }">
        <slot
          :item="item"
          :index="index"
          :close="close"
          :revealRight="revealRight"
          :revealLeft="revealLeft"
        />
      </template>
      <template slot="right" slot-scope="{ close }">
        <slot :close="close" :item="item" name="right"/>
      </template>
    </swipe-out>
    <template v-if="!items.length">
      <slot name="empty">No results !</slot>
    </template>
  </div>
</template>
<script>
/* eslint-disable */
import SwipeOut from "./SwipeOut.vue";
export default {
  name: "vue-swipe-list",
  props: {
    items: {
      type: Array,
      required: true
    },
    transitionKey: {
      type: String,
      default: "id"
    },
    threshold: {
      type: Number,
      default: 45
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isNew: {
      type: Function,
      default: function() {}
    },
    isNewClass: {
      type: String,
      default: ""
    },
    onReveal: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    _getClass(item) {
      let _class = "swipeout-list-item";

      if (this.isNew(item)) {
        _class += " " + this.isNewClass;
      }

      return _class;
    },
    _emitReveal(event, item) {
      this.onReveal(event.direction, item, () => {
        event.close();
      });
    }
  },
  components: {
    SwipeOut
  }
};
</script>
