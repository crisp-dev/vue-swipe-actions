(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-swipe-actions"] = factory();
	else
		root["vue-swipe-actions"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "70ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8922":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeOut_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("70ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeOut_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeOut_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeOut_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"770cfbdb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeOut.vue?vue&type=template&id=55fd114a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swipeout",class:{'swipeout--transitioning' : _vm.isTransitioning, 'swipeout--disabled': _vm.disabled}},[(_vm.hasLeft)?_c('div',{ref:"left",staticClass:"swipeout-left"},[_vm._t("left",null,{"close":_vm.closeActions})],2):_vm._e(),(_vm.hasRight)?_c('div',{ref:"right",staticClass:"swipeout-right"},[_vm._t("right",null,{"close":_vm.closeActions})],2):_vm._e(),_c('div',{ref:"content",staticClass:"swipeout-content"},[_vm._t("default",null,{"close":_vm.closeActions,"revealRight":_vm.revealRight,"revealLeft":_vm.revealLeft})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SwipeOut.vue?vue&type=template&id=55fd114a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/tinygesture/TinyGesture.js
/**
 * TinyGesture.js
 *
 * This service uses passive listeners, so you can't call event.preventDefault()
 * on any of the events.
 *
 * Adapted from https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d
 * and https://github.com/uxitten/xwiper
 */
class TinyGesture {
  constructor (element, options) {
    options = Object.assign({}, TinyGesture.defaults, options);
    this.element = element;
    this.opts = options;
    this.touchStartX = null;
    this.touchStartY = null;
    this.touchEndX = null;
    this.touchEndY = null;
    this.velocityX = null;
    this.velocityY = null;
    this.longPressTimer = null;
    this.doubleTapWaiting = false;
    this.handlers = {
      'panstart': [],
      'panmove': [],
      'panend': [],
      'swipeleft': [],
      'swiperight': [],
      'swipeup': [],
      'swipedown': [],
      'tap': [],
      'doubletap': [],
      'longpress': []
    };

    this._onTouchStart = this.onTouchStart.bind(this);
    this._onTouchMove = this.onTouchMove.bind(this);
    this._onTouchEnd = this.onTouchEnd.bind(this);

    this.element.addEventListener('touchstart', this._onTouchStart, passiveIfSupported);
    this.element.addEventListener('touchmove', this._onTouchMove, passiveIfSupported);
    this.element.addEventListener('touchend', this._onTouchEnd, passiveIfSupported);

    if (this.opts.mouseSupport && !('ontouchstart' in window)) {
      this.element.addEventListener('mousedown', this._onTouchStart, passiveIfSupported);
      document.addEventListener('mousemove', this._onTouchMove, passiveIfSupported);
      document.addEventListener('mouseup', this._onTouchEnd, passiveIfSupported);
    }
  }

  destroy () {
    this.element.removeEventListener('touchstart', this._onTouchStart);
    this.element.removeEventListener('touchmove', this._onTouchMove);
    this.element.removeEventListener('touchend', this._onTouchEnd);
    this.element.removeEventListener('mousedown', this._onTouchStart);
    document.removeEventListener('mousemove', this._onTouchMove);
    document.removeEventListener('mouseup', this._onTouchEnd);
    clearTimeout(this.longPressTimer);
    clearTimeout(this.doubleTapTimer);
  }

  on (type, fn) {
    if (this.handlers[type]) {
      this.handlers[type].push(fn);
      return {
        type,
        fn,
        cancel: () => this.off(type, fn)
      };
    }
  }

  off (type, fn) {
    if (this.handlers[type]) {
      const idx = this.handlers[type].indexOf(fn);
      if (idx !== -1) {
        this.handlers[type].splice(idx, 1);
      }
    }
  }

  fire (type, event) {
    for (let i = 0; i < this.handlers[type].length; i++) {
      this.handlers[type][i](event);
    }
  }

  onTouchStart (event) {
    this.thresholdX = this.opts.threshold('x', this);
    this.thresholdY = this.opts.threshold('y', this);
    this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold('x', this);
    this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold('y', this);
    this.touchStartX = (event.type === 'mousedown' ? event.screenX : event.changedTouches[0].screenX);
    this.touchStartY = (event.type === 'mousedown' ? event.screenY : event.changedTouches[0].screenY);
    this.touchMoveX = null;
    this.touchMoveY = null;
    this.touchEndX = null;
    this.touchEndY = null;
    // Long press.
    this.longPressTimer = setTimeout(() => this.fire('longpress', event), this.opts.longPressTime);
    this.fire('panstart', event);
  }

  onTouchMove (event) {
    if (event.type === 'mousemove' && (!this.touchStartX || this.touchEndX !== null)) {
      return;
    }
    const touchMoveX = (event.type === 'mousemove' ? event.screenX : event.changedTouches[0].screenX) - this.touchStartX;
    this.velocityX = touchMoveX - this.touchMoveX;
    this.touchMoveX = touchMoveX;
    const touchMoveY = (event.type === 'mousemove' ? event.screenY : event.changedTouches[0].screenY) - this.touchStartY;
    this.velocityY = touchMoveY - this.touchMoveY;
    this.touchMoveY = touchMoveY;
    const absTouchMoveX = Math.abs(this.touchMoveX);
    const absTouchMoveY = Math.abs(this.touchMoveY);
    this.swipingHorizontal = absTouchMoveX > this.thresholdX;
    this.swipingVertical = absTouchMoveY > this.thresholdY;
    this.swipingDirection = absTouchMoveX > absTouchMoveY
      ? (this.swipingHorizontal ? 'horizontal' : 'pre-horizontal')
      : (this.swipingVertical ? 'vertical' : 'pre-vertical');
    if (Math.max(absTouchMoveX, absTouchMoveY) > this.opts.pressThreshold) {
      clearTimeout(this.longPressTimer);
    }
    this.fire('panmove', event);
  }

  onTouchEnd (event) {
    if (event.type === 'mouseup' && (!this.touchStartX || this.touchEndX !== null)) {
      return;
    }
    this.touchEndX = (event.type === 'mouseup' ? event.screenX : event.changedTouches[0].screenX);
    this.touchEndY = (event.type === 'mouseup' ? event.screenY : event.changedTouches[0].screenY);
    this.fire('panend', event);
    clearTimeout(this.longPressTimer);

    const x = this.touchEndX - this.touchStartX;
    const absX = Math.abs(x);
    const y = this.touchEndY - this.touchStartY;
    const absY = Math.abs(y);

    if (absX > this.thresholdX || absY > this.thresholdY) {
      this.swipedHorizontal = this.opts.diagonalSwipes ? Math.abs(x / y) <= this.opts.diagonalLimit : absX >= absY && absX > this.thresholdX;
      this.swipedVertical = this.opts.diagonalSwipes ? Math.abs(y / x) <= this.opts.diagonalLimit : absY > absX && absY > this.thresholdY;
      if (this.swipedHorizontal) {
        if (x < 0) {
          // Left swipe.
          if (this.velocityX < -this.opts.velocityThreshold || x < -this.disregardVelocityThresholdX) {
            this.fire('swipeleft', event);
          }
        } else {
          // Right swipe.
          if (this.velocityX > this.opts.velocityThreshold || x > this.disregardVelocityThresholdX) {
            this.fire('swiperight', event);
          }
        }
      }
      if (this.swipedVertical) {
        if (y < 0) {
          // Upward swipe.
          if (this.velocityY < -this.opts.velocityThreshold || y < -this.disregardVelocityThresholdY) {
            this.fire('swipeup', event);
          }
        } else {
          // Downward swipe.
          if (this.velocityY > this.opts.velocityThreshold || y > this.disregardVelocityThresholdY) {
            this.fire('swipedown', event);
          }
        }
      }
    } else if (absX < this.opts.pressThreshold && absY < this.opts.pressThreshold) {
      // Tap.
      if (this.doubleTapWaiting) {
        this.doubleTapWaiting = false;
        clearTimeout(this.doubleTapTimer);
        this.fire('doubletap', event);
      } else {
        this.doubleTapWaiting = true;
        this.doubleTapTimer = setTimeout(() => this.doubleTapWaiting = false, this.opts.doubleTapTime);
        this.fire('tap', event);
      }
    }
  }
}

TinyGesture.defaults = {
  threshold: (type, self) => Math.max(25, Math.floor(0.15 * (type === 'x' ? window.innerWidth || document.body.clientWidth : window.innerHeight || document.body.clientHeight))),
  velocityThreshold: 10,
  disregardVelocityThreshold: (type, self) => Math.floor(0.5 * (type === 'x' ? self.element.clientWidth : self.element.clientHeight)),
  pressThreshold: 8,
  diagonalSwipes: false,
  diagonalLimit: Math.tan(45 * 1.5 / 180 * Math.PI),
  longPressTime: 500,
  doubleTapTime: 300,
  mouseSupport: true
};

// Passive feature detection.
let passiveIfSupported = false;

try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', { get: function() { passiveIfSupported = { passive: true }; } }));
} catch(err) {}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeOut.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */


function reduceSwipe(x) {
  return Math.pow(x, 0.65); // eslint-disable-line
}

function translateX(x) {
  if (x === 0) return "";
  return "translate3d(".concat(x, "px, 0, 0)");
}

/* harmony default export */ var SwipeOutvue_type_script_lang_js_ = ({
  name: "swipe-item",
  data: function data() {
    return {
      startLeft: 0,
      startX: 0,
      isActive: false,
      closing: false,
      isTransitioning: false,
      direction: null,
      // hasLeft: true, //'left' in this.$slots || 'left' in this.$scopedSlots,
      // hasRight: 'right' in this.$slots,
      leftOpen: false,
      rightOpen: false,
      leftActionsWidth: 0,
      rightActionsWidth: 0
    };
  },
  computed: {
    hasLeft: function hasLeft() {
      return "left" in this.$slots || "left" in this.$scopedSlots;
    },
    hasRight: function hasRight() {
      return "right" in this.$slots || "right" in this.$scopedSlots;
    }
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    threshold: {
      type: Number,
      default: 45
    },

    /**
     * Is the item disabled
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (!this.hasLeft && !this.hasRight) return;

    this._createHammer();
  },
  beforeDestroy: function beforeDestroy() {
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
          right.children[0].style.transform = translateX(0, 0, 0);
          left.children[0].style.transform = translateX(0, 0, 0);
          _this.closing = false;
        });
      }, 100);
      this.leftOpen = false;
      this.rightOpen = false;
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
    _createHammer: function _createHammer() {
      this.gesture = new TinyGesture(this.$el);
      this.gesture.on("panstart", this._startListener);
      this.gesture.on("panmove", this._swipeListener);
      this.gesture.on("panend", this._stopListener);
    },
    _distanceSwiped: function _distanceSwiped() {
      var contentRect = this.$refs.content.getBoundingClientRect();
      var elementRect = this.$el.getBoundingClientRect();
      return contentRect.left - elementRect.left - this.$el.clientLeft;
    },
    _startListener: function _startListener(event) {
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

      if (this.direction === null) {
        if (newX > 0) {
          this.direction = "ltr";
        } else {
          this.direction = "rtl";
        }
      } // attempting to reveal the right actions after revealing the left actions


      if (this.startLeft === 0 && this.direction === "ltr" && newX < 0) {
        return this._animateSlide(-reduceSwipe(-newX));
      } // attempting to reveal the left actions after revealing the right actions


      if (this.startLeft === 0 && this.direction === "rtl" && newX > 0) {
        return this._animateSlide(reduceSwipe(newX));
      } // attempting to reveal the right actions after starting with the left actions revealed


      if (this.startLeft < 0 && newX > 0) return this._animateSlide(reduceSwipe(newX)); // attempting to reveal the left actions after starting with the right actions revealed

      if (this.startLeft > 0 && newX < 0) return this._animateSlide(-reduceSwipe(-newX)); // overswiping left-to-right

      if (newX < -this.rightActionsWidth) return this._animateSlide(-(this.rightActionsWidth + reduceSwipe(Math.abs(newX + this.rightActionsWidth))));
      if (newX > this.leftActionsWidth) return this._animateSlide(+(this.leftActionsWidth + reduceSwipe(newX - this.leftActionsWidth)));
      return this._animateSlide(newX);
    },
    _stopListener: function _stopListener(event) {
      if (!this.isActive || this.disabled || this.closing) return null;
      var oldLeft = this.$refs.content.getBoundingClientRect().left;
      this.isActive = false; // close left actions

      if (this.startLeft > 0 && this.gesture.touchMoveX <= -this.threshold) return this.closeActions(); // _animateSlide(0, oldLeft);
      // close right actions

      if (this.startLeft < 0 && this.gesture.touchMoveX >= this.threshold) return this.closeActions(); // this._animateSlide(0, oldLeft);

      var currentLeft = this.startLeft + this.gesture.touchMoveX; // reveal left actions

      if (this.direction === "ltr" && currentLeft >= this.threshold) {
        this.$emit("swipeout:reveal", {
          direction: this.direction,
          item: this.item,
          close: this.closeActions
        });
      } // reveal right actions


      if (this.direction === "rtl" && currentLeft <= -this.threshold) {
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
    _shiftLeftActions: function _shiftLeftActions(newX) {
      if (!this.hasLeft || newX < 0) return;
      if (this.closing) return;
      var actions = this.$refs.left;
      var actionsWidth = this.leftActionsWidth;
      var progress = 1 - Math.min(newX / actionsWidth, 1);
      var deltaX = Math.min(newX, actionsWidth);
      var children = actions.children;
      var length = children.length;

      for (var i = 0; i < length; i++) {
        var child = children[i];
        var offsetLeft = actionsWidth - child.offsetLeft - child.offsetWidth;
        child.style.transform = translateX(deltaX + offsetLeft * progress);
        if (length > 1) child.style.zIndex = "".concat(length - i);
      }
    },
    _shiftRightActions: function _shiftRightActions(newX) {
      if (!this.hasRight || newX > 0) return;
      if (this.closing) return;
      var actions = this.$refs.right;
      var actionsWidth = this.rightActionsWidth;
      var progress = 1 + Math.max(newX / actionsWidth, -1);
      var deltaX = Math.max(newX, -actionsWidth);
      var children = actions.children;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.style.transform = translateX(deltaX - child.offsetLeft * progress);
      }
    },
    _animateSlide: function _animateSlide(to, from) {
      var _this2 = this;

      if (this.closing) return;

      if (from) {
        if (to - from === 0) return;
        this.isTransitioning = true;
      }

      window.requestAnimationFrame(function () {
        _this2.$refs.content.style.transform = translateX(to);

        _this2._shiftLeftActions(to, _this2.leftActionsWidth);

        _this2._shiftRightActions(to, _this2.rightActionsWidth);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/SwipeOut.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SwipeOutvue_type_script_lang_js_ = (SwipeOutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SwipeOut.vue?vue&type=style&index=0&lang=css&
var SwipeOutvue_type_style_index_0_lang_css_ = __webpack_require__("8922");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/SwipeOut.vue






/* normalize component */

var component = normalizeComponent(
  components_SwipeOutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SwipeOut = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"770cfbdb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeList.vue?vue&type=template&id=3ca1d55a&
var SwipeListvue_type_template_id_3ca1d55a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swipeout-list",class:{'swipeout--disabled': _vm.disabled}},[_vm._l((_vm.items),function(item,index){return _c('swipe-out',{key:item[_vm.transitionKey] || index,ref:("list-item-" + index),refInFor:true,class:_vm._getClass(item),attrs:{"disabled":_vm.disabled,"threshold":_vm.threshold},on:{"swipeout:reveal":function($event){return _vm._emitReveal($event, item)}},scopedSlots:_vm._u([{key:"left",fn:function(ref){
var close = ref.close;
return [_vm._t("left",null,{"close":close,"item":item})]}},{key:"default",fn:function(ref){
var close = ref.close;
var revealRight = ref.revealRight;
var revealLeft = ref.revealLeft;
return [_vm._t("default",null,{"item":item,"index":index,"close":close,"revealRight":revealRight,"revealLeft":revealLeft})]}},{key:"right",fn:function(ref){
var close = ref.close;
return [_vm._t("right",null,{"close":close,"item":item})]}}],null,true)})}),(!_vm.items.length)?[_vm._t("empty",[_vm._v("No results !")])]:_vm._e()],2)}
var SwipeListvue_type_template_id_3ca1d55a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SwipeList.vue?vue&type=template&id=3ca1d55a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeList.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */

/* harmony default export */ var SwipeListvue_type_script_lang_js_ = ({
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
      default: function _default() {}
    },
    isNewClass: {
      type: String,
      default: ""
    },
    onReveal: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    _getClass: function _getClass(item) {
      var _class = "swipeout-list-item";

      if (this.isNew(item)) {
        _class += " " + this.isNewClass;
      }

      return _class;
    },
    _emitReveal: function _emitReveal(event, item) {
      this.onReveal(event.direction, item, function () {
        event.close();
      });
    }
  },
  components: {
    SwipeOut: SwipeOut
  }
});
// CONCATENATED MODULE: ./src/components/SwipeList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SwipeListvue_type_script_lang_js_ = (SwipeListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SwipeList.vue





/* normalize component */

var SwipeList_component = normalizeComponent(
  components_SwipeListvue_type_script_lang_js_,
  SwipeListvue_type_template_id_3ca1d55a_render,
  SwipeListvue_type_template_id_3ca1d55a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SwipeList = (SwipeList_component.exports);
// CONCATENATED MODULE: ./src/components/index.js



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport SwipeOut */__webpack_require__.d(__webpack_exports__, "SwipeOut", function() { return SwipeOut; });
/* concated harmony reexport SwipeList */__webpack_require__.d(__webpack_exports__, "SwipeList", function() { return SwipeList; });




/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=vue-swipe-actions.umd.js.map