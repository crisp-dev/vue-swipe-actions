(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-swipe-actions"] = factory(require("vue"));
	else
		root["vue-swipe-actions"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__9274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5003:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 6262:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 9274:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9274__;

/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 3506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(4576);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var userAgent = __webpack_require__(9392);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8727:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 4475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(4576);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var setPrototypeOf = __webpack_require__(2967);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(8622);
var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4901:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3925:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 6395:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 9167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);

module.exports = global;


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4475);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 3802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var requireObjectCoercible = __webpack_require__(7750);
var toString = __webpack_require__(655);
var whitespaces = __webpack_require__(7452);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7388);
var fails = __webpack_require__(9039);
var global = __webpack_require__(4475);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1240:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7452:
/***/ (function(module) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2892:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var IS_PURE = __webpack_require__(6395);
var DESCRIPTORS = __webpack_require__(3724);
var global = __webpack_require__(4475);
var path = __webpack_require__(9167);
var uncurryThis = __webpack_require__(9504);
var isForced = __webpack_require__(2796);
var hasOwn = __webpack_require__(9297);
var inheritIfRequired = __webpack_require__(3167);
var isPrototypeOf = __webpack_require__(1625);
var isSymbol = __webpack_require__(757);
var toPrimitive = __webpack_require__(2777);
var fails = __webpack_require__(9039);
var getOwnPropertyNames = (__webpack_require__(8480).f);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var defineProperty = (__webpack_require__(4913).f);
var thisNumberValue = __webpack_require__(1240);
var trim = (__webpack_require__(3802).trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SwipeOut: function() { return /* reexport */ SwipeOut; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(5003)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(9274);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SwipeOut.vue?vue&type=template&id=32890e32

var _hoisted_1 = {
  key: 0,
  ref: "left",
  class: "swipeout-left"
};
var _hoisted_2 = {
  key: 1,
  ref: "right",
  class: "swipeout-right"
};
var _hoisted_3 = {
  class: "swipeout-content",
  ref: "content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["swipeout", {
      'swipeout--transitioning': $data.isTransitioning,
      'swipeout--disabled': $props.disabled
    }])
  }, [$options.hasLeft ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "left", {
    close: $options.closeActions,
    reached: $data.leftReached
  })], 512)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), $options.hasRight ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "right", {
    close: $options.closeActions,
    reached: $data.rightReached
  })], 512)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default", {
    close: $options.closeActions,
    revealRight: $options.revealRight,
    revealLeft: $options.revealLeft
  })], 512)], 2);
}
;// CONCATENATED MODULE: ./src/components/SwipeOut.vue?vue&type=template&id=32890e32

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/tinygesture/dist/TinyGesture.js
class TinyGesture {
    constructor(element, options) {
        this.element = element;
        this.touch1 = null;
        this.touch2 = null;
        this.touchStartX = null;
        this.touchStartY = null;
        this.touchEndX = null;
        this.touchEndY = null;
        this.touchMove1 = null;
        this.touchMove2 = null;
        this.touchMoveX = null;
        this.touchMoveY = null;
        this.velocityX = null;
        this.velocityY = null;
        this.longPressTimer = null;
        this.doubleTapTimer = null;
        this.doubleTapWaiting = false;
        this.thresholdX = 0;
        this.thresholdY = 0;
        this.disregardVelocityThresholdX = 0;
        this.disregardVelocityThresholdY = 0;
        this.swipingHorizontal = false;
        this.swipingVertical = false;
        this.swipingDirection = null;
        this.swipedHorizontal = false;
        this.swipedVertical = false;
        this.originalDistance = null;
        this.newDistance = null;
        this.scale = null;
        this.originalAngle = null;
        this.newAngle = null;
        this.rotation = null;
        this.handlers = {
            panstart: [],
            panmove: [],
            panend: [],
            swipeleft: [],
            swiperight: [],
            swipeup: [],
            swipedown: [],
            tap: [],
            doubletap: [],
            longpress: [],
            pinch: [],
            pinchend: [],
            rotate: [],
            rotateend: [],
        };
        this._onTouchStart = this.onTouchStart.bind(this);
        this._onTouchMove = this.onTouchMove.bind(this);
        this._onTouchEnd = this.onTouchEnd.bind(this);
        this.opts = Object.assign({}, TinyGesture.defaults, options);
        this.element.addEventListener('touchstart', this._onTouchStart, passiveIfSupported);
        this.element.addEventListener('touchmove', this._onTouchMove, passiveIfSupported);
        this.element.addEventListener('touchend', this._onTouchEnd, passiveIfSupported);
        if (this.opts.mouseSupport && !('ontouchstart' in window)) {
            this.element.addEventListener('mousedown', this._onTouchStart, passiveIfSupported);
            document.addEventListener('mousemove', this._onTouchMove, passiveIfSupported);
            document.addEventListener('mouseup', this._onTouchEnd, passiveIfSupported);
        }
    }
    destroy() {
        var _a, _b;
        this.element.removeEventListener('touchstart', this._onTouchStart);
        this.element.removeEventListener('touchmove', this._onTouchMove);
        this.element.removeEventListener('touchend', this._onTouchEnd);
        this.element.removeEventListener('mousedown', this._onTouchStart);
        document.removeEventListener('mousemove', this._onTouchMove);
        document.removeEventListener('mouseup', this._onTouchEnd);
        clearTimeout((_a = this.longPressTimer) !== null && _a !== void 0 ? _a : undefined);
        clearTimeout((_b = this.doubleTapTimer) !== null && _b !== void 0 ? _b : undefined);
    }
    on(type, fn) {
        if (this.handlers[type]) {
            this.handlers[type].push(fn);
            return {
                type,
                fn,
                cancel: () => this.off(type, fn),
            };
        }
    }
    off(type, fn) {
        if (this.handlers[type]) {
            const idx = this.handlers[type].indexOf(fn);
            if (idx !== -1) {
                this.handlers[type].splice(idx, 1);
            }
        }
    }
    fire(type, event) {
        for (let i = 0; i < this.handlers[type].length; i++) {
            this.handlers[type][i](event);
        }
    }
    onTouchStart(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        let didTouch1 = false;
        let didTouch2 = false;
        if (event.type !== 'mousedown') {
            if (!this.touch1) {
                this.touch1 = event.changedTouches[0];
                didTouch1 = true;
            }
            if (((didTouch1 && event.changedTouches.length > 1) || !didTouch1) && !this.touch2) {
                this.touch2 =
                    [...event.changedTouches].find((touch) => { var _a; return touch.identifier !== ((_a = this.touch1) === null || _a === void 0 ? void 0 : _a.identifier); }) ||
                        null;
                this.originalDistance = Math.sqrt(Math.pow(((_b = (_a = this.touch2) === null || _a === void 0 ? void 0 : _a.screenX) !== null && _b !== void 0 ? _b : 0) - ((_f = (_d = (_c = this.touchMove1) === null || _c === void 0 ? void 0 : _c.screenX) !== null && _d !== void 0 ? _d : (_e = this.touch1) === null || _e === void 0 ? void 0 : _e.screenX) !== null && _f !== void 0 ? _f : 0), 2) +
                    Math.pow(((_h = (_g = this.touch2) === null || _g === void 0 ? void 0 : _g.screenY) !== null && _h !== void 0 ? _h : 0) - ((_m = (_k = (_j = this.touchMove1) === null || _j === void 0 ? void 0 : _j.screenY) !== null && _k !== void 0 ? _k : (_l = this.touch1) === null || _l === void 0 ? void 0 : _l.screenY) !== null && _m !== void 0 ? _m : 0), 2));
                this.originalAngle =
                    Math.atan2(((_p = (_o = this.touch2) === null || _o === void 0 ? void 0 : _o.screenY) !== null && _p !== void 0 ? _p : 0) - ((_t = (_r = (_q = this.touchMove1) === null || _q === void 0 ? void 0 : _q.screenY) !== null && _r !== void 0 ? _r : (_s = this.touch1) === null || _s === void 0 ? void 0 : _s.screenY) !== null && _t !== void 0 ? _t : 0), ((_v = (_u = this.touch2) === null || _u === void 0 ? void 0 : _u.screenX) !== null && _v !== void 0 ? _v : 0) - ((_z = (_x = (_w = this.touchMove1) === null || _w === void 0 ? void 0 : _w.screenX) !== null && _x !== void 0 ? _x : (_y = this.touch1) === null || _y === void 0 ? void 0 : _y.screenX) !== null && _z !== void 0 ? _z : 0)) /
                        (Math.PI / 180);
                return;
            }
            if (!didTouch1 && !didTouch2) {
                return;
            }
        }
        if (didTouch1 || event.type === 'mousedown') {
            this.thresholdX = this.opts.threshold('x', this);
            this.thresholdY = this.opts.threshold('y', this);
            this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold('x', this);
            this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold('y', this);
            this.touchStartX = event.type === 'mousedown' ? event.screenX : ((_0 = this.touch1) === null || _0 === void 0 ? void 0 : _0.screenX) || 0;
            this.touchStartY = event.type === 'mousedown' ? event.screenY : ((_1 = this.touch1) === null || _1 === void 0 ? void 0 : _1.screenY) || 0;
            this.touchMoveX = null;
            this.touchMoveY = null;
            this.touchEndX = null;
            this.touchEndY = null;
            this.swipingDirection = null;
            this.longPressTimer = setTimeout(() => this.fire('longpress', event), this.opts.longPressTime);
            this.scale = 1;
            this.rotation = 0;
            this.fire('panstart', event);
        }
    }
    onTouchMove(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (event.type === 'mousemove' && (!this.touchStartX || this.touchEndX !== null)) {
            return;
        }
        let touch1 = undefined;
        let touch2 = undefined;
        if (event.type !== 'mousemove') {
            touch1 = [...event.changedTouches].find((touch) => { var _a; return touch.identifier === ((_a = this.touch1) === null || _a === void 0 ? void 0 : _a.identifier); });
            this.touchMove1 = touch1 || this.touchMove1;
            touch2 = [...event.changedTouches].find((touch) => { var _a; return touch.identifier === ((_a = this.touch2) === null || _a === void 0 ? void 0 : _a.identifier); });
            this.touchMove2 = touch2 || this.touchMove2;
        }
        if (event.type === 'mousemove' || touch1) {
            const touchMoveX = (event.type === 'mousemove' ? event.screenX : (_a = touch1 === null || touch1 === void 0 ? void 0 : touch1.screenX) !== null && _a !== void 0 ? _a : 0) - ((_b = this.touchStartX) !== null && _b !== void 0 ? _b : 0);
            this.velocityX = touchMoveX - ((_c = this.touchMoveX) !== null && _c !== void 0 ? _c : 0);
            this.touchMoveX = touchMoveX;
            const touchMoveY = (event.type === 'mousemove' ? event.screenY : (_d = touch1 === null || touch1 === void 0 ? void 0 : touch1.screenY) !== null && _d !== void 0 ? _d : 0) - ((_e = this.touchStartY) !== null && _e !== void 0 ? _e : 0);
            this.velocityY = touchMoveY - ((_f = this.touchMoveY) !== null && _f !== void 0 ? _f : 0);
            this.touchMoveY = touchMoveY;
            const absTouchMoveX = Math.abs(this.touchMoveX);
            const absTouchMoveY = Math.abs(this.touchMoveY);
            this.swipingHorizontal = absTouchMoveX > this.thresholdX;
            this.swipingVertical = absTouchMoveY > this.thresholdY;
            this.swipingDirection =
                absTouchMoveX > absTouchMoveY
                    ? this.swipingHorizontal
                        ? 'horizontal'
                        : 'pre-horizontal'
                    : this.swipingVertical
                        ? 'vertical'
                        : 'pre-vertical';
            if (Math.max(absTouchMoveX, absTouchMoveY) > this.opts.pressThreshold) {
                clearTimeout((_g = this.longPressTimer) !== null && _g !== void 0 ? _g : undefined);
            }
            this.fire('panmove', event);
        }
        if (event.type !== 'mousemove' && this.touchMove1 != null && this.touchMove2 != null) {
            this.newDistance = Math.sqrt(Math.pow(this.touchMove2.screenX - this.touchMove1.screenX, 2) +
                Math.pow(this.touchMove2.screenY - this.touchMove1.screenY, 2));
            this.scale = this.newDistance / ((_h = this.originalDistance) !== null && _h !== void 0 ? _h : 0);
            this.fire('pinch', event);
            this.newAngle =
                Math.atan2(((_j = this.touchMove2.screenY) !== null && _j !== void 0 ? _j : 0) - ((_k = this.touchMove1.screenY) !== null && _k !== void 0 ? _k : 0), ((_l = this.touchMove2.screenX) !== null && _l !== void 0 ? _l : 0) - ((_m = this.touchMove1.screenX) !== null && _m !== void 0 ? _m : 0)) /
                    (Math.PI / 180);
            this.rotation = this.newAngle - ((_o = this.originalAngle) !== null && _o !== void 0 ? _o : 0);
            this.fire('rotate', event);
        }
    }
    onTouchEnd(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let touch1 = undefined;
        if (event.type !== 'mouseup') {
            touch1 = [...event.changedTouches].find((touch) => { var _a; return touch.identifier === ((_a = this.touch1) === null || _a === void 0 ? void 0 : _a.identifier); });
            if (![...event.touches].find((touch) => { var _a; return touch.identifier === ((_a = this.touch1) === null || _a === void 0 ? void 0 : _a.identifier); })) {
                this.touch1 = null;
                this.touchMove1 = null;
            }
            if (![...event.touches].find((touch) => { var _a; return touch.identifier === ((_a = this.touch2) === null || _a === void 0 ? void 0 : _a.identifier); })) {
                this.touch2 = null;
                this.touchMove2 = null;
            }
        }
        if (event.type === 'mouseup' && (!this.touchStartX || this.touchEndX !== null)) {
            return;
        }
        if (event.type === 'mouseup' || touch1) {
            this.touchEndX = event.type === 'mouseup' ? event.screenX : (_a = touch1 === null || touch1 === void 0 ? void 0 : touch1.screenX) !== null && _a !== void 0 ? _a : 0;
            this.touchEndY = event.type === 'mouseup' ? event.screenY : (_b = touch1 === null || touch1 === void 0 ? void 0 : touch1.screenY) !== null && _b !== void 0 ? _b : 0;
            this.fire('panend', event);
            clearTimeout((_c = this.longPressTimer) !== null && _c !== void 0 ? _c : undefined);
            const x = this.touchEndX - ((_d = this.touchStartX) !== null && _d !== void 0 ? _d : 0);
            const absX = Math.abs(x);
            const y = this.touchEndY - ((_e = this.touchStartY) !== null && _e !== void 0 ? _e : 0);
            const absY = Math.abs(y);
            const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            const absDistance = Math.abs(distance);
            const diagonal = absY / absX;
            if (absX > this.thresholdX ||
                absY > this.thresholdY ||
                (this.opts.diagonalSwipes && (absDistance > this.thresholdX || absDistance > this.thresholdY))) {
                this.swipedHorizontal = absX > this.thresholdX || (this.opts.diagonalSwipes && absDistance > this.thresholdX);
                this.swipedVertical = absY > this.thresholdY || (this.opts.diagonalSwipes && absDistance > this.thresholdY);
                if (!this.opts.diagonalSwipes ||
                    diagonal < Math.tan(((45 - this.opts.diagonalLimit) * Math.PI) / 180) ||
                    diagonal > Math.tan(((45 + this.opts.diagonalLimit) * Math.PI) / 180)) {
                    if (absX >= absY) {
                        this.swipedVertical = false;
                    }
                    if (absY > absX) {
                        this.swipedHorizontal = false;
                    }
                }
                if (this.swipedHorizontal) {
                    if (x < 0) {
                        if (((_f = this.velocityX) !== null && _f !== void 0 ? _f : 0) < -this.opts.velocityThreshold || distance < -this.disregardVelocityThresholdX) {
                            this.fire('swipeleft', event);
                        }
                    }
                    else {
                        if (((_g = this.velocityX) !== null && _g !== void 0 ? _g : 0) > this.opts.velocityThreshold || distance > this.disregardVelocityThresholdX) {
                            this.fire('swiperight', event);
                        }
                    }
                }
                if (this.swipedVertical) {
                    if (y < 0) {
                        if (((_h = this.velocityY) !== null && _h !== void 0 ? _h : 0) < -this.opts.velocityThreshold || distance < -this.disregardVelocityThresholdY) {
                            this.fire('swipeup', event);
                        }
                    }
                    else {
                        if (((_j = this.velocityY) !== null && _j !== void 0 ? _j : 0) > this.opts.velocityThreshold || distance > this.disregardVelocityThresholdY) {
                            this.fire('swipedown', event);
                        }
                    }
                }
            }
            else if (absX < this.opts.pressThreshold && absY < this.opts.pressThreshold) {
                if (this.doubleTapWaiting) {
                    this.doubleTapWaiting = false;
                    clearTimeout((_k = this.doubleTapTimer) !== null && _k !== void 0 ? _k : undefined);
                    this.fire('doubletap', event);
                }
                else {
                    this.doubleTapWaiting = true;
                    this.doubleTapTimer = setTimeout(() => (this.doubleTapWaiting = false), this.opts.doubleTapTime);
                    this.fire('tap', event);
                }
            }
        }
        if (!this.touch1 && !this.touch2) {
            this.fire('pinchend', event);
            this.fire('rotateend', event);
            this.originalDistance = null;
            this.newDistance = null;
            this.scale = null;
            this.originalAngle = null;
            this.newAngle = null;
            this.rotation = null;
        }
    }
}
TinyGesture.defaults = {
    threshold: (type, _self) => Math.max(25, Math.floor(0.15 *
        (type === 'x'
            ? window.innerWidth || document.body.clientWidth
            : window.innerHeight || document.body.clientHeight))),
    velocityThreshold: 10,
    disregardVelocityThreshold: (type, self) => Math.floor(0.5 * (type === 'x' ? self.element.clientWidth : self.element.clientHeight)),
    pressThreshold: 8,
    diagonalSwipes: false,
    diagonalLimit: 15,
    longPressTime: 500,
    doubleTapTime: 300,
    mouseSupport: true,
};
/* harmony default export */ var dist_TinyGesture = (TinyGesture);
let passiveIfSupported = false;
try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: function () {
            passiveIfSupported = { passive: true };
        },
    }));
}
catch (err) { }
//# sourceMappingURL=TinyGesture.js.map
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SwipeOut.vue?vue&type=script&lang=js

/* eslint-disable */

function reduceSwipe(x) {
  return Math.pow(x, 0.65); // eslint-disable-line
}
function translateX(x) {
  if (x === 0) return "";
  return "translate3d(".concat(x, "px, 0, 0)");
}
/* harmony default export */ var SwipeOutvue_type_script_lang_js = ({
  name: "swipe-item",
  data: function data() {
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
    hasLeft: function hasLeft() {
      return this.$slots["left"] ? true : false;
    },
    hasRight: function hasRight() {
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
  mounted: function mounted() {
    if (!this.hasLeft && !this.hasRight) return;
    this._bind();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.hammer) this.hammer.destroy();
    this.hammer = null;
  },
  methods: {
    // public
    closeActions: function closeActions() {
      var _this = this;
      if (this.isActive) return;
      var content = this.$refs.content;
      var left = this.$refs.left;
      var right = this.$refs.right;
      this.closing = true;
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          content.style.transform = translateX(0, 0, 0);
          if (_this.mode === "width") {
            if (_this.hasRight) {
              right.style.visibility = "hidden";
              right.style.opacity = "0";
              right.children[0].style.width = "0px";
            }
            if (_this.hasLeft) {
              left.style.visibility = "hidden";
              left.style.opacity = "0";
              left.children[0].style.width = "0px";
            }
          } else {
            right.children[0].style.transform = translateX(0, 0, 0);
            left.children[0].style.transform = translateX(0, 0, 0);
          }
          _this.closing = false;
        });
      }, 100);
      this.leftOpen = false;
      this.rightOpen = false;
      this.leftReached = false;
      this.rightReached = false;
      this.startLeft = 0;
    },
    revealLeft: function revealLeft() {
      if (this.isActive || this.closing) return;
      var oldLeft = this.$refs.content.getBoundingClientRect().left;
      this.leftOpen = true;
      this._animateSlide(this.leftActionsWidth, oldLeft);
    },
    revealRight: function revealRight() {
      if (this.isActive || this.closing) return;
      var oldLeft = this.$refs.content.getBoundingClientRect().left;
      this.rightOpen = true;
      this._animateSlide(-this.rightActionsWidth, oldLeft);
    },
    // private
    _bind: function _bind() {
      // Disable default drag behavior on Firefox
      this.$el.addEventListener("dragstart", function (e) {
        e.preventDefault();
      });
      this.gesture = new dist_TinyGesture(this.$el);
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
    _distanceSwiped: function _distanceSwiped() {
      var contentRect = this.$refs.content.getBoundingClientRect();
      var elementRect = this.$el.getBoundingClientRect();
      return contentRect.left - elementRect.left - this.$el.clientLeft;
    },
    _startListener: function _startListener(event) {
      // If it's not a left click
      if (event.which !== 1) return null;
      if (this.disabled || this.closing) return null;
      this.isTransitioning = false;
      if (this.gesture.touchMoveY >= -5 && this.gesture.touchMoveY <= 5) {
        this.leftActionsWidth = this.$refs.left ? this.$refs.left.clientWidth : 0;
        this.rightActionsWidth = this.$refs.right ? this.$refs.right.clientWidth : 0;
        this.startLeft = this._distanceSwiped();
        this.isActive = true;
        this.startX = this.gesture.touchStartX;
      }
      this.closeActions();
    },
    _swipeListener: function _swipeListener(event) {
      if (!this.isActive || this.disabled || this.closing) return null;
      var newX = this.startLeft + this.gesture.touchMoveX;
      if (this.direction === null && this.gesture.velocityX !== 0) {
        if (this.gesture.velocityX > 0) {
          this.direction = "ltr";
        } else {
          this.direction = "rtl";
        }
      }

      // assign reached markers
      this.leftReached = this.direction === "ltr" && newX >= this.threshold;
      this.rightReached = this.direction === "rtl" && newX <= -this.threshold;

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
        return this._animateSlide(-(this.rightActionsWidth + reduceSwipe(Math.abs(newX + this.rightActionsWidth))));
      }
      if (newX > this.leftActionsWidth) {
        return this._animateSlide(+(this.leftActionsWidth + reduceSwipe(newX - this.leftActionsWidth)));
      }
      return this._animateSlide(newX);
    },
    _stopListener: function _stopListener(event) {
      if (!this.isActive || this.disabled || this.closing) return null;
      if (this.$refs.content) {
        var oldLeft = this.$refs.content.getBoundingClientRect().left;
        this.isActive = false;

        // close left actions
        if (this.startLeft > 0 && this.gesture.touchMoveX <= -this.threshold) return this.closeActions(); // _animateSlide(0, oldLeft);

        // close right actions
        if (this.startLeft < 0 && this.gesture.touchMoveX >= this.threshold) return this.closeActions(); // this._animateSlide(0, oldLeft);

        var currentLeft = this.startLeft + this.gesture.touchMoveX;
        // reveal left actions
        if (this.direction === "ltr" && currentLeft >= this.threshold) {
          this.$emit("swipeout:reveal", {
            direction: this.direction,
            item: this.item,
            close: this.closeActions
          });
        }

        // reveal right actions
        if (this.direction === "rtl" && currentLeft <= -this.threshold) {
          this.$emit("swipeout:reveal", {
            direction: this.direction,
            item: this.item,
            close: this.closeActions
          });
        }
        this.direction = null;
        return this._animateSlide(this.startLeft, oldLeft);
      }
      return;
    },
    // shift actions
    _shiftLeftActions: function _shiftLeftActions(newX) {
      var _this2 = this;
      if (!this.hasLeft || newX < 0) return;
      if (this.closing) return;
      var actions = this.$refs.left;
      var actionsWidth = this.leftActionsWidth;
      var progress = 1 - Math.min(newX / actionsWidth, 1);
      var deltaX = Math.min(newX, actionsWidth);
      var children = actions.children;
      var length = children.length;
      if (this.mode === "width") {
        if (deltaX) {
          clearTimeout(this.hideLeftActionsScheduler);
          actions.style.visibility = "visible";
          actions.style.opacity = "1";
        } else {
          // Closing action?
          if (newX === 0) {
            // Hide after a delay, in case there is a transition via CSS
            this.hideLeftActionsScheduler = setTimeout(function () {
              _this2.hideLeftActionsScheduler = null;
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
      for (var i = 0; i < length; i++) {
        var child = children[i];
        var offsetLeft = actionsWidth - child.offsetLeft - child.offsetWidth;
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
        if (length > 1) child.style.zIndex = "".concat(length - i);
      }
    },
    _shiftRightActions: function _shiftRightActions(newX) {
      var _this3 = this;
      if (!this.hasRight || newX > 0) return;
      if (this.closing) return;
      var actions = this.$refs.right;
      var actionsWidth = this.rightActionsWidth;
      var progress = 1 + Math.max(newX / actionsWidth, -1);
      var deltaX = Math.max(newX, -actionsWidth);
      var children = actions.children;
      if (this.mode === "width") {
        if (deltaX) {
          clearTimeout(this.hideRightActionsScheduler);
          actions.style.visibility = "visible";
          actions.style.opacity = "1";
        } else {
          // Closing action?
          if (newX === 0) {
            // Hide after a delay, in case there is a transition via CSS
            this.hideRightActionsScheduler = setTimeout(function () {
              _this3.hideRightActionsScheduler = null;
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
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
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
          child.style.transform = translateX(deltaX - child.offsetLeft * progress);
        }
      }
    },
    _animateSlide: function _animateSlide(to, from) {
      var _this4 = this;
      if (this.closing) return;
      if (from) {
        if (to - from === 0) return;
        this.isTransitioning = true;
      }
      window.requestAnimationFrame(function () {
        _this4.$refs.content.style.transform = translateX(to);
        _this4._shiftLeftActions(to, _this4.leftActionsWidth);
        _this4._shiftRightActions(to, _this4.rightActionsWidth);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SwipeOut.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SwipeOut.vue?vue&type=style&index=0&id=32890e32&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/SwipeOut.vue?vue&type=style&index=0&id=32890e32&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(6262);
;// CONCATENATED MODULE: ./src/components/SwipeOut.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SwipeOutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var SwipeOut = (__exports__);
;// CONCATENATED MODULE: ./src/components/index.js


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-swipe-actions.umd.js.map