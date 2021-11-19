(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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


/***/ }),
/* 12 */
/*!********************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 13));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 14));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 18));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 19));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 23));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 24));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 25));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 26));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 27));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 28));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 29));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 16));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 15));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 30));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 17));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 31));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 32));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 33));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 34));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 35));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 36);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 37));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 38));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 39));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!*******************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/request/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 15));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 15 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/deepMerge.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 16 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/deepClone.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 17 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/test.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 18 */
/*!****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/queryParams.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 19 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/route.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 22);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 22 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 23 */
/*!***************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/timeFormat.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 24 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/timeFrom.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 25 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 26 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/guid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 27 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/color.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 28 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/type2icon.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 29 */
/*!****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/randomArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 30 */
/*!************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/addUnit.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 31 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/random.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 32 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/trim.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 33 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/toast.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 34 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/getParent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 35 */
/*!************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/$parent.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 36 */
/*!********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/sys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 37 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/debounce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 38 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/function/throttle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 39 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/config/config.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-03-17
var version = '1.8.4';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 40 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 41 */
/*!**************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/request/request.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ 42));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var service = _axios.default.create({
  baseURL: 'https://eatpig.top',
  timeout: 6000,
  crossDomain: true });



service.interceptors.request.use(
function (config) {
  var token = uni.getStorageSync("loginToken");
  if (token) {
    config.headers["AUTHORIZATION"] = token;
  }
  config.headers["FIX"] = '0854';
  return config;
},
function (error) {
  console.log(error);
  return Promise.reject(error);
});


//配置成功后的拦截器
service.interceptors.response.use(function (res) {
  var httpStatus = res.status;
  if (httpStatus == 200) {
    var code = res.data.code;
    if (code === "10" || code === "11" || code === "12" || code === "4" || code === "6") {
      uni.navigateTo({
        url: "/pages/self/login" });

    } else if (code === "14") {
      uni.redirectTo({
        url: "/pages/self/servererror" });

    } else if (code === "2") {
      uni.showToast({
        title: "请求失败",
        icon: "error" });

    } else if (code === "9") {
      uni.showToast({
        title: "登录失败，请稍后再试",
        icon: "none" });

    }

    return res;
  } else {
    return Promise.reject(res.errMsg);
  }
}, function (error) {
  var code = error.response.status;
  if (code === 429) {
    uni.showToast({
      title: "操作太快啦，休息一下吧",
      icon: "none",
      success: function success() {
        setTimeout(function () {
          uni.navigateBack({});
        }, 2000);
      } });

  } else if (code === 404) {

  } else {
    uni.redirectTo({
      url: "/pages/self/servererror" });

  }
  return Promise.reject(error);
});


// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
_axios.default.defaults.adapter = function (config) {
  return new Promise(function (resolve, reject) {
    var settle = __webpack_require__(/*! axios/lib/core/settle */ 57);
    var buildURL = __webpack_require__(/*! axios/lib/helpers/buildURL */ 47);
    uni.request({
      method: config.method.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config };


        settle(resolve, reject, response);
      } });

  });
};var _default =


service;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 42 */
/*!******************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 43);

/***/ }),
/* 43 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/axios.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 44);
var bind = __webpack_require__(/*! ./helpers/bind */ 45);
var Axios = __webpack_require__(/*! ./core/Axios */ 46);
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ 67);
var defaults = __webpack_require__(/*! ./defaults */ 51);

/**
                                       * Create an instance of Axios
                                       *
                                       * @param {Object} defaultConfig The default config for the instance
                                       * @return {Axios} A new instance of Axios
                                       */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 65);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 70);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 66);
axios.VERSION = __webpack_require__(/*! ./env/data */ 69).version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 71);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ 72);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 44 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/utils.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 45);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
                                           * Determine if a value is an Array
                                           *
                                           * @param {Object} val The value to test
                                           * @returns {boolean} True if value is an Array, otherwise false
                                           */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) &&
  typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
function isString(val) {
  return typeof val === 'string';
}

/**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
function isNumber(val) {
  return typeof val === 'number';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
  navigator.product === 'NativeScript' ||
  navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined');

}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM };

/***/ }),
/* 45 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/bind.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 46 */
/*!***************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/Axios.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ 47);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 48);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 49);
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ 67);
var validator = __webpack_require__(/*! ../helpers/validator */ 68);

var validators = validator.validators;
/**
                                        * Create a new instance of Axios
                                        *
                                        * @param {Object} instanceConfig The default config for the instance
                                        */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager() };

}

/**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean) },
    false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data }));

  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data }));

  };
});

module.exports = Axios;

/***/ }),
/* 47 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/buildURL.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);

function encode(val) {
  return encodeURIComponent(val).
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 48 */
/*!****************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/InterceptorManager.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 49 */
/*!*************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);
var transformData = __webpack_require__(/*! ./transformData */ 50);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 66);
var defaults = __webpack_require__(/*! ../defaults */ 51);
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ 65);

/**
                                           * Throws a `Cancel` if cancellation has been requested.
                                           */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
  config,
  config.data,
  config.headers,
  config.transformRequest);


  // Flatten headers
  config.headers = utils.merge(
  config.headers.common || {},
  config.headers[config.method] || {},
  config.headers);


  utils.forEach(
  ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  function cleanHeaderConfig(method) {
    delete config.headers[method];
  });


  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
    config,
    response.data,
    response.headers,
    config.transformResponse);


    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
        config,
        reason.response.data,
        reason.response.headers,
        config.transformResponse);

      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 50 */
/*!***********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/transformData.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);
var defaults = __webpack_require__(/*! ./../defaults */ 51);

/**
                                          * Transform the data for a request or a response
                                          *
                                          * @param {Object|String} data The data to be transformed
                                          * @param {Array} headers The headers for the request or response
                                          * @param {Array|Function} fns A single function or Array of functions
                                          * @returns {*} The resulting transformed data
                                          */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

/***/ }),
/* 51 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/defaults.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 44);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 54);
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ 55);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded' };


function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 56);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 56);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false },


  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isFile(data) ||
    utils.isBlob(data))
    {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*' } } };




utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../HBuilderX.2.9.8.20201110.full/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 52)))

/***/ }),
/* 52 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 53);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 53 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 52)))

/***/ }),
/* 54 */
/*!********************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 44);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 55 */
/*!**********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/enhanceError.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null };

  };
  return error;
};

/***/ }),
/* 56 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/adapters/xhr.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);
var settle = __webpack_require__(/*! ./../core/settle */ 57);
var cookies = __webpack_require__(/*! ./../helpers/cookies */ 59);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 47);
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ 60);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 63);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 64);
var createError = __webpack_require__(/*! ../core/createError */ 58);
var defaults = __webpack_require__(/*! ../defaults */ 51);
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ 65);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ?
      request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request };


      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
      timeoutErrorMessage,
      config,
      transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
      request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
      cookies.read(config.xsrfCookieName) :
      undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 57 */
/*!****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/settle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 58);

/**
                                             * Resolve or reject a Promise based on response status.
                                             *
                                             * @param {Function} resolve A function that resolves the promise.
                                             * @param {Function} reject A function that rejects the promise.
                                             * @param {object} response The response.
                                             */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
    'Request failed with status code ' + response.status,
    response.config,
    null,
    response.request,
    response));

  }
};

/***/ }),
/* 58 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/createError.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 55);

/**
                                               * Create an Error with the specified message, config, error code, request and response.
                                               *
                                               * @param {string} message The error message.
                                               * @param {Object} config The config.
                                               * @param {string} [code] The error code (for example, 'ECONNABORTED').
                                               * @param {Object} [request] The request.
                                               * @param {Object} [response] The response.
                                               * @returns {Error} The created error.
                                               */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 59 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/cookies.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    } };

}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {return null;},
    remove: function remove() {} };

}();

/***/ }),
/* 60 */
/*!***********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/buildFullPath.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ 61);
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ 62);

/**
                                                      * Creates a new URL by combining the baseURL with the requestedURL,
                                                      * only when the requestedURL is not already an absolute URL.
                                                      * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                      *
                                                      * @param {string} baseURL The base URL
                                                      * @param {string} requestedURL Absolute or relative URL to combine
                                                      * @returns {string} The combined full path
                                                      */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),
/* 61 */
/*!**************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),
/* 62 */
/*!************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/combineURLs.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ?
  baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
  baseURL;
};

/***/ }),
/* 63 */
/*!*************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
'age', 'authorization', 'content-length', 'content-type', 'etag',
'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
'last-modified', 'location', 'max-forwards', 'proxy-authorization',
'referer', 'retry-after', 'user-agent'];


/**
                                          * Parse headers into an object
                                          *
                                          * ```
                                          * Date: Wed, 27 Aug 2014 08:58:49 GMT
                                          * Content-Type: application/json
                                          * Connection: keep-alive
                                          * Transfer-Encoding: chunked
                                          * ```
                                          *
                                          * @param {String} headers Headers needing to be parsed
                                          * @returns {Object} Headers parsed into an object
                                          */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {return parsed;}

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 64 */
/*!****************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 44);

module.exports =
utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
                 * Parse a URL to discover it's components
                 *
                 * @param {String} url The URL to be parsed
                 * @returns {Object}
                 */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ?
      urlParsingNode.pathname :
      '/' + urlParsingNode.pathname };

  }

  originURL = resolveURL(window.location.href);

  /**
                                                * Determine if a URL shares the same origin as the current location
                                                *
                                                * @param {String} requestURL The URL to test
                                                * @returns {boolean} True if URL shares the same origin, otherwise false
                                                */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol &&
    parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 65 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/cancel/Cancel.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 66 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/cancel/isCancel.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 67 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/core/mergeConfig.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 44);

/**
                                  * Config-specific merge-function which creates a new config-object
                                  * by merging two configuration objects together.
                                  *
                                  * @param {Object} config1
                                  * @param {Object} config2
                                  * @returns {Object} New object resulting from merging config2 to config1
                                  */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys };


  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });

  return config;
};

/***/ }),
/* 68 */
/*!**********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/validator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VERSION = __webpack_require__(/*! ../env/data */ 69).version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
                              * Transitional option validator
                              * @param {function|boolean?} validator - set to false if the transitional option has been removed
                              * @param {string?} version - deprecated version / removed since version
                              * @param {string?} message - some message with additional info
                              * @returns {function}
                              */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
      formatMessage(
      opt,
      ' has been deprecated since v' + version + ' and will be removed in the near future'));


    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
    * Assert object's properties type
    * @param {object} options
    * @param {object} schema
    * @param {boolean?} allowUnknown
    */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators };

/***/ }),
/* 69 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/env/data.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "version": "0.22.0" };

/***/ }),
/* 70 */
/*!***********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 65);

/**
                                   * A `CancelToken` is an object that can be used to request cancellation of an operation.
                                   *
                                   * @class
                                   * @param {Function} executor The executor function.
                                   */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function (cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function (onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function (resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
   * Throws a `Cancel` if cancellation has been requested.
   */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
    * Subscribe to the cancel signal
    */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
    * Unsubscribe from the cancel signal
    */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
    * Returns an object that contains a new `CancelToken` and a function that, when called,
    * cancels the `CancelToken`.
    */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel };

};

module.exports = CancelToken;

/***/ }),
/* 71 */
/*!*******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/spread.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 72 */
/*!*************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the payload is an error thrown by Axios
               *
               * @param {*} payload The value to test
               * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
               */
module.exports = function isAxiosError(payload) {
  return typeof payload === 'object' && payload.isAxiosError === true;
};

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // mescroll-body 和 mescroll-uni 通用
var MescrollMixin = {
  data: function data() {
    return {
      mescroll: null //mescroll实例对象
    };
  },
  // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  onPullDownRefresh: function onPullDownRefresh() {
    this.mescroll && this.mescroll.onPullDownRefresh();
  },
  // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onPageScroll: function onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e);
  },
  // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onReachBottom: function onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom();
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
      this.mescrollInitByRef(); // 兼容字节跳动小程序
    },
    // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序)
    mescrollInitByRef: function mescrollInitByRef() {
      if (!this.mescroll || !this.mescroll.resetUpScroll) {
        var mescrollRef = this.$refs.mescrollRef;
        if (mescrollRef) this.mescroll = mescrollRef.mescroll;
      }
    },
    // 下拉刷新的回调 (mixin默认resetUpScroll)
    downCallback: function downCallback() {var _this = this;
      if (this.mescroll.optUp.use) {
        this.mescroll.resetUpScroll();
      } else {
        setTimeout(function () {
          _this.mescroll.endSuccess();
        }, 500);
      }
    },
    // 上拉加载的回调
    upCallback: function upCallback() {var _this2 = this;
      // mixin默认延时500自动结束加载
      setTimeout(function () {
        _this2.mescroll.endErr();
      }, 500);
    } },

  mounted: function mounted() {
    this.mescrollInitByRef(); // 兼容字节跳动小程序, 避免未设置@init或@init此时未能取到ref的情况
  } };var _default =



MescrollMixin;exports.default = _default;

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/*!********************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/checkAuth.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.getLocationFail = getLocationFail;exports.getUserInfoFail = getUserInfoFail;function getLocationFail() {
  uni.showToast({
    title: "获取定位失败",
    icon: "error" });

  uni.navigateTo({
    url: '/pages/openauth/openauth' });

}

function getUserInfoFail() {
  uni.showToast({
    title: "获取授权信息失败",
    icon: "error" });

  uni.navigateTo({
    url: '/pages/openauth/openauth' });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/*!**************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/api.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.wantEatUrl = exports.approvalUrl = exports.userDataUrl = exports.revertPushDomain = exports.commentPushDomain = exports.shortCommentPushDomain = exports.discussPushDomain = exports.photoDomain = exports.photoTokenUrl = exports.foodPushUrl = void 0; // 美食发布
var foodPushUrl = "/eat/food_info";
// 图片上传接口
exports.foodPushUrl = foodPushUrl;var photoTokenUrl = "/upload";

// 上传的图片前缀
exports.photoTokenUrl = photoTokenUrl;var photoDomain = "https://hotschool.ltd/";

// 讨论发布url
exports.photoDomain = photoDomain;var discussPushDomain = "/eat/discuss_info";

// 短评发布url
exports.discussPushDomain = discussPushDomain;var shortCommentPushDomain = "/eat/short_comment";

// 评论发布url
exports.shortCommentPushDomain = shortCommentPushDomain;var commentPushDomain = "/eat/comment";

// 回复发布url
exports.commentPushDomain = commentPushDomain;var revertPushDomain = "/eat/revert";

// 我的页面数据展示
exports.revertPushDomain = revertPushDomain;var userDataUrl = "/user/self_data";

// 点赞url
exports.userDataUrl = userDataUrl;var approvalUrl = "/op/approval";

// 想吃url
exports.approvalUrl = approvalUrl;var wantEatUrl = "/op/want_eat";exports.wantEatUrl = wantEatUrl;

/***/ }),
/* 89 */
/*!**************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/encrypt/encrypt.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.encrypt = encrypt;var CryptoJS = __webpack_require__(/*! crypto-js */ 90);

// 加密post请求数据
function encrypt(data) {
  var iv = CryptoJS.enc.Utf8.parse("\x01\x02\x03\x04\x05\x06\x07\x08\x01\x02\x03\x04\x05\x06\x07\x08");
  var key = CryptoJS.enc.Utf8.parse("ytUQ7l2ZZu8mLvJZ");
  var encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7 });

  var encRes = encrypt.toString();
  var res = {
    "body_string": encRes };

  return res;
}

/***/ }),
/* 90 */
/*!**********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./x64-core */ 93), __webpack_require__(/*! ./lib-typedarrays */ 94), __webpack_require__(/*! ./enc-utf16 */ 95), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./enc-base64url */ 97), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./sha1 */ 99), __webpack_require__(/*! ./sha256 */ 100), __webpack_require__(/*! ./sha224 */ 101), __webpack_require__(/*! ./sha512 */ 102), __webpack_require__(/*! ./sha384 */ 103), __webpack_require__(/*! ./sha3 */ 104), __webpack_require__(/*! ./ripemd160 */ 105), __webpack_require__(/*! ./hmac */ 106), __webpack_require__(/*! ./pbkdf2 */ 107), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109), __webpack_require__(/*! ./mode-cfb */ 110), __webpack_require__(/*! ./mode-ctr */ 111), __webpack_require__(/*! ./mode-ctr-gladman */ 112), __webpack_require__(/*! ./mode-ofb */ 113), __webpack_require__(/*! ./mode-ecb */ 114), __webpack_require__(/*! ./pad-ansix923 */ 115), __webpack_require__(/*! ./pad-iso10126 */ 116), __webpack_require__(/*! ./pad-iso97971 */ 117), __webpack_require__(/*! ./pad-zeropadding */ 118), __webpack_require__(/*! ./pad-nopadding */ 119), __webpack_require__(/*! ./format-hex */ 120), __webpack_require__(/*! ./aes */ 121), __webpack_require__(/*! ./tripledes */ 122), __webpack_require__(/*! ./rc4 */ 123), __webpack_require__(/*! ./rabbit */ 124), __webpack_require__(/*! ./rabbit-legacy */ 125));
  } else
  {}
})(this, function (CryptoJS) {

  return CryptoJS;

});

/***/ }),
/* 91 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/core.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory();
  } else
  {}
})(this, function () {

  /*globals window, global, require*/

  /**
                                       * CryptoJS core components.
                                       */
  var CryptoJS = CryptoJS || function (Math, undefined) {

    var crypto;

    // Native crypto from window (Browser)
    if (typeof window !== 'undefined' && window.crypto) {
      crypto = window.crypto;
    }

    // Native crypto in web worker (Browser)
    if (typeof self !== 'undefined' && self.crypto) {
      crypto = self.crypto;
    }

    // Native crypto from worker
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      crypto = globalThis.crypto;
    }

    // Native (experimental IE 11) crypto from window (Browser)
    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
      crypto = window.msCrypto;
    }

    // Native crypto from global (NodeJS)
    if (!crypto && typeof global !== 'undefined' && global.crypto) {
      crypto = global.crypto;
    }

    // Native crypto import via require (NodeJS)
    if (!crypto && "function" === 'function') {
      try {
        crypto = __webpack_require__(/*! crypto */ 92);
      } catch (err) {}
    }

    /*
       * Cryptographically secure pseudorandom number generator
       *
       * As Math.random() is cryptographically not safe to use
       */
    var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
      if (crypto) {
        // Use getRandomValues method (Browser)
        if (typeof crypto.getRandomValues === 'function') {
          try {
            return crypto.getRandomValues(new Uint32Array(1))[0];
          } catch (err) {}
        }

        // Use randomBytes method (NodeJS)
        if (typeof crypto.randomBytes === 'function') {
          try {
            return crypto.randomBytes(4).readInt32LE();
          } catch (err) {}
        }
      }

      throw new Error('Native crypto module could not be used to get secure random number.');
    };

    /*
        * Local polyfill of Object.create
         */

    var create = Object.create || function () {
      function F() {}

      return function (obj) {
        var subtype;

        F.prototype = obj;

        subtype = new F();

        F.prototype = null;

        return subtype;
      };
    }();

    /**
          * CryptoJS namespace.
          */
    var C = {};

    /**
                 * Library namespace.
                 */
    var C_lib = C.lib = {};

    /**
                             * Base object for prototypal inheritance.
                             */
    var Base = C_lib.Base = function () {


      return {
        /**
                * Creates a new object that inherits from this object.
                *
                * @param {Object} overrides Properties to copy into the new object.
                *
                * @return {Object} The new object.
                *
                * @static
                *
                * @example
                *
                *     var MyType = CryptoJS.lib.Base.extend({
                *         field: 'value',
                *
                *         method: function () {
                *         }
                *     });
                */
        extend: function extend(overrides) {
          // Spawn
          var subtype = create(this);

          // Augment
          if (overrides) {
            subtype.mixIn(overrides);
          }

          // Create default initializer
          if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
            subtype.init = function () {
              subtype.$super.init.apply(this, arguments);
            };
          }

          // Initializer's prototype is the subtype object
          subtype.init.prototype = subtype;

          // Reference supertype
          subtype.$super = this;

          return subtype;
        },

        /**
            * Extends this object and runs the init method.
            * Arguments to create() will be passed to init().
            *
            * @return {Object} The new object.
            *
            * @static
            *
            * @example
            *
            *     var instance = MyType.create();
            */
        create: function create() {
          var instance = this.extend();
          instance.init.apply(instance, arguments);

          return instance;
        },

        /**
            * Initializes a newly created object.
            * Override this method to add some logic when your objects are created.
            *
            * @example
            *
            *     var MyType = CryptoJS.lib.Base.extend({
            *         init: function () {
            *             // ...
            *         }
            *     });
            */
        init: function init() {
        },

        /**
            * Copies properties into this object.
            *
            * @param {Object} properties The properties to mix in.
            *
            * @example
            *
            *     MyType.mixIn({
            *         field: 'value'
            *     });
            */
        mixIn: function mixIn(properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          }

          // IE won't copy toString using the loop above
          if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
          }
        },

        /**
            * Creates a copy of this object.
            *
            * @return {Object} The clone.
            *
            * @example
            *
            *     var clone = instance.clone();
            */
        clone: function clone() {
          return this.init.prototype.extend(this);
        } };

    }();

    /**
          * An array of 32-bit words.
          *
          * @property {Array} words The array of 32-bit words.
          * @property {number} sigBytes The number of significant bytes in this word array.
          */
    var WordArray = C_lib.WordArray = Base.extend({
      /**
                                                     * Initializes a newly created word array.
                                                     *
                                                     * @param {Array} words (Optional) An array of 32-bit words.
                                                     * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                                                     *
                                                     * @example
                                                     *
                                                     *     var wordArray = CryptoJS.lib.WordArray.create();
                                                     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                                                     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                                                     */
      init: function init(words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      },

      /**
          * Converts this word array to a string.
          *
          * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
          *
          * @return {string} The stringified word array.
          *
          * @example
          *
          *     var string = wordArray + '';
          *     var string = wordArray.toString();
          *     var string = wordArray.toString(CryptoJS.enc.Utf8);
          */
      toString: function toString(encoder) {
        return (encoder || Hex).stringify(this);
      },

      /**
          * Concatenates a word array to this word array.
          *
          * @param {WordArray} wordArray The word array to append.
          *
          * @return {WordArray} This word array.
          *
          * @example
          *
          *     wordArray1.concat(wordArray2);
          */
      concat: function concat(wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;

        // Clamp excess bits
        this.clamp();

        // Concat
        if (thisSigBytes % 4) {
          // Copy one byte at a time
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          // Copy one word at a time
          for (var j = 0; j < thatSigBytes; j += 4) {
            thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
          }
        }
        this.sigBytes += thatSigBytes;

        // Chainable
        return this;
      },

      /**
          * Removes insignificant bits.
          *
          * @example
          *
          *     wordArray.clamp();
          */
      clamp: function clamp() {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes;

        // Clamp
        words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      },

      /**
          * Creates a copy of this word array.
          *
          * @return {WordArray} The clone.
          *
          * @example
          *
          *     var clone = wordArray.clone();
          */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);

        return clone;
      },

      /**
          * Creates a word array filled with random bytes.
          *
          * @param {number} nBytes The number of random bytes to generate.
          *
          * @return {WordArray} The random word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.lib.WordArray.random(16);
          */
      random: function random(nBytes) {
        var words = [];

        for (var i = 0; i < nBytes; i += 4) {
          words.push(cryptoSecureRandomInt());
        }

        return new WordArray.init(words, nBytes);
      } });


    /**
             * Encoder namespace.
             */
    var C_enc = C.enc = {};

    /**
                             * Hex encoding strategy.
                             */
    var Hex = C_enc.Hex = {
      /**
                             * Converts a word array to a hex string.
                             *
                             * @param {WordArray} wordArray The word array.
                             *
                             * @return {string} The hex string.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                             */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 0x0f).toString(16));
        }

        return hexChars.join('');
      },

      /**
          * Converts a hex string to a word array.
          *
          * @param {string} hexStr The hex string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
          */
      parse: function parse(hexStr) {
        // Shortcut
        var hexStrLength = hexStr.length;

        // Convert
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }

        return new WordArray.init(words, hexStrLength / 2);
      } };


    /**
            * Latin1 encoding strategy.
            */
    var Latin1 = C_enc.Latin1 = {
      /**
                                   * Converts a word array to a Latin1 string.
                                   *
                                   * @param {WordArray} wordArray The word array.
                                   *
                                   * @return {string} The Latin1 string.
                                   *
                                   * @static
                                   *
                                   * @example
                                   *
                                   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
                                   */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          latin1Chars.push(String.fromCharCode(bite));
        }

        return latin1Chars.join('');
      },

      /**
          * Converts a Latin1 string to a word array.
          *
          * @param {string} latin1Str The Latin1 string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
          */
      parse: function parse(latin1Str) {
        // Shortcut
        var latin1StrLength = latin1Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
        }

        return new WordArray.init(words, latin1StrLength);
      } };


    /**
            * UTF-8 encoding strategy.
            */
    var Utf8 = C_enc.Utf8 = {
      /**
                               * Converts a word array to a UTF-8 string.
                               *
                               * @param {WordArray} wordArray The word array.
                               *
                               * @return {string} The UTF-8 string.
                               *
                               * @static
                               *
                               * @example
                               *
                               *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
                               */
      stringify: function stringify(wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error('Malformed UTF-8 data');
        }
      },

      /**
          * Converts a UTF-8 string to a word array.
          *
          * @param {string} utf8Str The UTF-8 string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
          */
      parse: function parse(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      } };


    /**
            * Abstract buffered block algorithm template.
            *
            * The property blockSize must be implemented in a concrete subtype.
            *
            * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
            */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
      /**
                                                                               * Resets this block algorithm's data buffer to its initial state.
                                                                               *
                                                                               * @example
                                                                               *
                                                                               *     bufferedBlockAlgorithm.reset();
                                                                               */
      reset: function reset() {
        // Initial values
        this._data = new WordArray.init();
        this._nDataBytes = 0;
      },

      /**
          * Adds new data to this block algorithm's buffer.
          *
          * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
          *
          * @example
          *
          *     bufferedBlockAlgorithm._append('data');
          *     bufferedBlockAlgorithm._append(wordArray);
          */
      _append: function _append(data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data == 'string') {
          data = Utf8.parse(data);
        }

        // Append
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
      },

      /**
          * Processes available data blocks.
          *
          * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
          *
          * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
          *
          * @return {WordArray} The processed data.
          *
          * @example
          *
          *     var processedData = bufferedBlockAlgorithm._process();
          *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
          */
      _process: function _process(doFlush) {
        var processedWords;

        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;

        // Count blocks ready
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
          // Round up to include partial blocks
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          // Round down to include only full blocks,
          // less the number of blocks that must remain in the buffer
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }

        // Count words ready
        var nWordsReady = nBlocksReady * blockSize;

        // Count bytes ready
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

        // Process blocks
        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            // Perform concrete-algorithm logic
            this._doProcessBlock(dataWords, offset);
          }

          // Remove processed words
          processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        }

        // Return processed words
        return new WordArray.init(processedWords, nBytesReady);
      },

      /**
          * Creates a copy of this object.
          *
          * @return {Object} The clone.
          *
          * @example
          *
          *     var clone = bufferedBlockAlgorithm.clone();
          */
      clone: function clone() {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();

        return clone;
      },

      _minBufferSize: 0 });


    /**
                             * Abstract hasher template.
                             *
                             * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
                             */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
      /**
                                                                 * Configuration options.
                                                                 */
      cfg: Base.extend(),

      /**
                           * Initializes a newly created hasher.
                           *
                           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
                           *
                           * @example
                           *
                           *     var hasher = CryptoJS.algo.SHA256.create();
                           */
      init: function init(cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Set initial values
        this.reset();
      },

      /**
          * Resets this hasher to its initial state.
          *
          * @example
          *
          *     hasher.reset();
          */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-hasher logic
        this._doReset();
      },

      /**
          * Updates this hasher with a message.
          *
          * @param {WordArray|string} messageUpdate The message to append.
          *
          * @return {Hasher} This hasher.
          *
          * @example
          *
          *     hasher.update('message');
          *     hasher.update(wordArray);
          */
      update: function update(messageUpdate) {
        // Append
        this._append(messageUpdate);

        // Update the hash
        this._process();

        // Chainable
        return this;
      },

      /**
          * Finalizes the hash computation.
          * Note that the finalize operation is effectively a destructive, read-once operation.
          *
          * @param {WordArray|string} messageUpdate (Optional) A final message update.
          *
          * @return {WordArray} The hash.
          *
          * @example
          *
          *     var hash = hasher.finalize();
          *     var hash = hasher.finalize('message');
          *     var hash = hasher.finalize(wordArray);
          */
      finalize: function finalize(messageUpdate) {
        // Final message update
        if (messageUpdate) {
          this._append(messageUpdate);
        }

        // Perform concrete-hasher logic
        var hash = this._doFinalize();

        return hash;
      },

      blockSize: 512 / 32,

      /**
                            * Creates a shortcut function to a hasher's object interface.
                            *
                            * @param {Hasher} hasher The hasher to create a helper for.
                            *
                            * @return {Function} The shortcut function.
                            *
                            * @static
                            *
                            * @example
                            *
                            *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                            */
      _createHelper: function _createHelper(hasher) {
        return function (message, cfg) {
          return new hasher.init(cfg).finalize(message);
        };
      },

      /**
          * Creates a shortcut function to the HMAC's object interface.
          *
          * @param {Hasher} hasher The hasher to use in this HMAC helper.
          *
          * @return {Function} The shortcut function.
          *
          * @static
          *
          * @example
          *
          *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
          */
      _createHmacHelper: function _createHmacHelper(hasher) {
        return function (message, key) {
          return new C_algo.HMAC.init(hasher, key).finalize(message);
        };
      } });


    /**
             * Algorithm namespace.
             */
    var C_algo = C.algo = {};

    return C;
  }(Math);


  return CryptoJS;

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../HBuilderX.2.9.8.20201110.full/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 2)))

/***/ }),
/* 92 */
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 93 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/x64-core.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;

    /**
                                         * x64 namespace.
                                         */
    var C_x64 = C.x64 = {};

    /**
                             * A 64-bit word.
                             */
    var X64Word = C_x64.Word = Base.extend({
      /**
                                              * Initializes a newly created 64-bit word.
                                              *
                                              * @param {number} high The high 32 bits.
                                              * @param {number} low The low 32 bits.
                                              *
                                              * @example
                                              *
                                              *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                                              */
      init: function init(high, low) {
        this.high = high;
        this.low = low;
      }

      /**
         * Bitwise NOTs this word.
         *
         * @return {X64Word} A new x64-Word object after negating.
         *
         * @example
         *
         *     var negated = x64Word.not();
         */
      // not: function () {
      // var high = ~this.high;
      // var low = ~this.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ANDs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to AND with this word.
       *
       * @return {X64Word} A new x64-Word object after ANDing.
       *
       * @example
       *
       *     var anded = x64Word.and(anotherX64Word);
       */
      // and: function (word) {
      // var high = this.high & word.high;
      // var low = this.low & word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise ORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to OR with this word.
       *
       * @return {X64Word} A new x64-Word object after ORing.
       *
       * @example
       *
       *     var ored = x64Word.or(anotherX64Word);
       */
      // or: function (word) {
      // var high = this.high | word.high;
      // var low = this.low | word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Bitwise XORs this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to XOR with this word.
       *
       * @return {X64Word} A new x64-Word object after XORing.
       *
       * @example
       *
       *     var xored = x64Word.xor(anotherX64Word);
       */
      // xor: function (word) {
      // var high = this.high ^ word.high;
      // var low = this.low ^ word.low;

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the left.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftL(25);
       */
      // shiftL: function (n) {
      // if (n < 32) {
      // var high = (this.high << n) | (this.low >>> (32 - n));
      // var low = this.low << n;
      // } else {
      // var high = this.low << (n - 32);
      // var low = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Shifts this word n bits to the right.
       *
       * @param {number} n The number of bits to shift.
       *
       * @return {X64Word} A new x64-Word object after shifting.
       *
       * @example
       *
       *     var shifted = x64Word.shiftR(7);
       */
      // shiftR: function (n) {
      // if (n < 32) {
      // var low = (this.low >>> n) | (this.high << (32 - n));
      // var high = this.high >>> n;
      // } else {
      // var low = this.high >>> (n - 32);
      // var high = 0;
      // }

      // return X64Word.create(high, low);
      // },

      /**
       * Rotates this word n bits to the left.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotL(25);
       */
      // rotL: function (n) {
      // return this.shiftL(n).or(this.shiftR(64 - n));
      // },

      /**
       * Rotates this word n bits to the right.
       *
       * @param {number} n The number of bits to rotate.
       *
       * @return {X64Word} A new x64-Word object after rotating.
       *
       * @example
       *
       *     var rotated = x64Word.rotR(7);
       */
      // rotR: function (n) {
      // return this.shiftR(n).or(this.shiftL(64 - n));
      // },

      /**
       * Adds this word with the passed word.
       *
       * @param {X64Word} word The x64-Word to add with this word.
       *
       * @return {X64Word} A new x64-Word object after adding.
       *
       * @example
       *
       *     var added = x64Word.add(anotherX64Word);
       */
      // add: function (word) {
      // var low = (this.low + word.low) | 0;
      // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
      // var high = (this.high + word.high + carry) | 0;

      // return X64Word.create(high, low);
      // }
    });

    /**
         * An array of 64-bit words.
         *
         * @property {Array} words The array of CryptoJS.x64.Word objects.
         * @property {number} sigBytes The number of significant bytes in this word array.
         */
    var X64WordArray = C_x64.WordArray = Base.extend({
      /**
                                                        * Initializes a newly created word array.
                                                        *
                                                        * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
                                                        * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                                                        *
                                                        * @example
                                                        *
                                                        *     var wordArray = CryptoJS.x64.WordArray.create();
                                                        *
                                                        *     var wordArray = CryptoJS.x64.WordArray.create([
                                                        *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                                                        *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                                                        *     ]);
                                                        *
                                                        *     var wordArray = CryptoJS.x64.WordArray.create([
                                                        *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                                                        *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                                                        *     ], 10);
                                                        */
      init: function init(words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 8;
        }
      },

      /**
          * Converts this 64-bit word array to a 32-bit word array.
          *
          * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
          *
          * @example
          *
          *     var x32WordArray = x64WordArray.toX32();
          */
      toX32: function toX32() {
        // Shortcuts
        var x64Words = this.words;
        var x64WordsLength = x64Words.length;

        // Convert
        var x32Words = [];
        for (var i = 0; i < x64WordsLength; i++) {
          var x64Word = x64Words[i];
          x32Words.push(x64Word.high);
          x32Words.push(x64Word.low);
        }

        return X32WordArray.create(x32Words, this.sigBytes);
      },

      /**
          * Creates a copy of this word array.
          *
          * @return {X64WordArray} The clone.
          *
          * @example
          *
          *     var clone = x64WordArray.clone();
          */
      clone: function clone() {
        var clone = Base.clone.call(this);

        // Clone "words" array
        var words = clone.words = this.words.slice(0);

        // Clone each X64Word object
        var wordsLength = words.length;
        for (var i = 0; i < wordsLength; i++) {
          words[i] = words[i].clone();
        }

        return clone;
      } });

  })();


  return CryptoJS;

});

/***/ }),
/* 94 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/lib-typedarrays.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Check if typed arrays are supported
    if (typeof ArrayBuffer != 'function') {
      return;
    }

    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;

    // Reference original init
    var superInit = WordArray.init;

    // Augment WordArray.init to handle typed arrays
    var subInit = WordArray.init = function (typedArray) {
      // Convert buffers to uint8
      if (typedArray instanceof ArrayBuffer) {
        typedArray = new Uint8Array(typedArray);
      }

      // Convert other array views to uint8
      if (
      typedArray instanceof Int8Array ||
      typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray ||
      typedArray instanceof Int16Array ||
      typedArray instanceof Uint16Array ||
      typedArray instanceof Int32Array ||
      typedArray instanceof Uint32Array ||
      typedArray instanceof Float32Array ||
      typedArray instanceof Float64Array)
      {
        typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      }

      // Handle Uint8Array
      if (typedArray instanceof Uint8Array) {
        // Shortcut
        var typedArrayByteLength = typedArray.byteLength;

        // Extract bytes
        var words = [];
        for (var i = 0; i < typedArrayByteLength; i++) {
          words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
        }

        // Initialize this word array
        superInit.call(this, words, typedArrayByteLength);
      } else {
        // Else call normal init
        superInit.apply(this, arguments);
      }
    };

    subInit.prototype = WordArray;
  })();


  return CryptoJS.lib.WordArray;

});

/***/ }),
/* 95 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/enc-utf16.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
                        * UTF-16 BE encoding strategy.
                        */
    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
      /**
                                                   * Converts a word array to a UTF-16 BE string.
                                                   *
                                                   * @param {WordArray} wordArray The word array.
                                                   *
                                                   * @return {string} The UTF-16 BE string.
                                                   *
                                                   * @static
                                                   *
                                                   * @example
                                                   *
                                                   *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
                                                   */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
          utf16Chars.push(String.fromCharCode(codePoint));
        }

        return utf16Chars.join('');
      },

      /**
          * Converts a UTF-16 BE string to a word array.
          *
          * @param {string} utf16Str The UTF-16 BE string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
          */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
        }

        return WordArray.create(words, utf16StrLength * 2);
      } };


    /**
            * UTF-16 LE encoding strategy.
            */
    C_enc.Utf16LE = {
      /**
                       * Converts a word array to a UTF-16 LE string.
                       *
                       * @param {WordArray} wordArray The word array.
                       *
                       * @return {string} The UTF-16 LE string.
                       *
                       * @static
                       *
                       * @example
                       *
                       *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
                       */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
          utf16Chars.push(String.fromCharCode(codePoint));
        }

        return utf16Chars.join('');
      },

      /**
          * Converts a UTF-16 LE string to a word array.
          *
          * @param {string} utf16Str The UTF-16 LE string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
          */
      parse: function parse(utf16Str) {
        // Shortcut
        var utf16StrLength = utf16Str.length;

        // Convert
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
        }

        return WordArray.create(words, utf16StrLength * 2);
      } };


    function swapEndian(word) {
      return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
    }
  })();


  return CryptoJS.enc.Utf16;

});

/***/ }),
/* 96 */
/*!***************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/enc-base64.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
                        * Base64 encoding strategy.
                        */
    var Base64 = C_enc.Base64 = {
      /**
                                   * Converts a word array to a Base64 string.
                                   *
                                   * @param {WordArray} wordArray The word array.
                                   *
                                   * @return {string} The Base64 string.
                                   *
                                   * @static
                                   *
                                   * @example
                                   *
                                   *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
                                   */
      stringify: function stringify(wordArray) {
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;

          var triplet = byte1 << 16 | byte2 << 8 | byte3;

          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }

        return base64Chars.join('');
      },

      /**
          * Converts a Base64 string to a word array.
          *
          * @param {string} base64Str The Base64 string.
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
          */
      parse: function parse(base64Str) {
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;

        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);

      },

      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' };


    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();


  return CryptoJS.enc.Base64;

});

/***/ }),
/* 97 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/enc-base64url.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
                        * Base64url encoding strategy.
                        */
    var Base64url = C_enc.Base64url = {
      /**
                                         * Converts a word array to a Base64url string.
                                         *
                                         * @param {WordArray} wordArray The word array.
                                         *
                                         * @param {boolean} urlSafe Whether to use url safe
                                         *
                                         * @return {string} The Base64url string.
                                         *
                                         * @static
                                         *
                                         * @example
                                         *
                                         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
                                         */
      stringify: function stringify(wordArray) {var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Shortcuts
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = urlSafe ? this._safe_map : this._map;

        // Clamp excess bits
        wordArray.clamp();

        // Convert
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;

          var triplet = byte1 << 16 | byte2 << 8 | byte3;

          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
          }
        }

        // Add padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }

        return base64Chars.join('');
      },

      /**
          * Converts a Base64url string to a word array.
          *
          * @param {string} base64Str The Base64url string.
          *
          * @param {boolean} urlSafe Whether to use url safe
          *
          * @return {WordArray} The word array.
          *
          * @static
          *
          * @example
          *
          *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
          */
      parse: function parse(base64Str) {var urlSafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Shortcuts
        var base64StrLength = base64Str.length;
        var map = urlSafe ? this._safe_map : this._map;
        var reverseMap = this._reverseMap;

        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }

        // Ignore padding
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }

        // Convert
        return parseLoop(base64Str, base64StrLength, reverseMap);

      },

      _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' };


    function parseLoop(base64Str, base64StrLength, reverseMap) {
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
          var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
          var bitsCombined = bits1 | bits2;
          words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    }
  })();

  return CryptoJS.enc.Base64url;

});

/***/ }),
/* 98 */
/*!********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/md5.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var T = [];

    // Compute constants
    (function () {
      for (var i = 0; i < 64; i++) {
        T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
      }
    })();

    /**
           * MD5 hash algorithm.
           */
    var MD5 = C_algo.MD5 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([
        0x67452301, 0xefcdab89,
        0x98badcfe, 0x10325476]);

      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];

          M[offset_i] =
          (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff |
          (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;

        }

        // Shortcuts
        var H = this._hash.words;

        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15];

        // Working varialbes
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];

        // Computation
        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);

        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);

        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);

        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]);

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;

        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;

        var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] =
        (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff |
        (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;

        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] =
        (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff |
        (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;


        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          // Shortcut
          var H_i = H[i];

          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff |
          (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();

        return clone;
      } });


    function FF(a, b, c, d, x, s, t) {
      var n = a + (b & c | ~b & d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function GG(a, b, c, d, x, s, t) {
      var n = a + (b & d | c & ~d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function HH(a, b, c, d, x, s, t) {
      var n = a + (b ^ c ^ d) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    function II(a, b, c, d, x, s, t) {
      var n = a + (c ^ (b | ~d)) + x + t;
      return (n << s | n >>> 32 - s) + b;
    }

    /**
       * Shortcut function to the hasher's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       *
       * @return {WordArray} The hash.
       *
       * @static
       *
       * @example
       *
       *     var hash = CryptoJS.MD5('message');
       *     var hash = CryptoJS.MD5(wordArray);
       */
    C.MD5 = Hasher._createHelper(MD5);

    /**
                                        * Shortcut function to the HMAC's object interface.
                                        *
                                        * @param {WordArray|string} message The message to hash.
                                        * @param {WordArray|string} key The secret key.
                                        *
                                        * @return {WordArray} The HMAC.
                                        *
                                        * @static
                                        *
                                        * @example
                                        *
                                        *     var hmac = CryptoJS.HmacMD5(message, key);
                                        */
    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  })(Math);


  return CryptoJS.MD5;

});

/***/ }),
/* 99 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha1.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Reusable object
    var W = [];

    /**
                 * SHA-1 hash algorithm.
                 */
    var SHA1 = C_algo.SHA1 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([
        0x67452301, 0xefcdab89,
        0x98badcfe, 0x10325476,
        0xc3d2e1f0]);

      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        // Computation
        for (var i = 0; i < 80; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = n << 1 | n >>> 31;
          }

          var t = (a << 5 | a >>> 27) + e + W[i];
          if (i < 20) {
            t += (b & c | ~b & d) + 0x5a827999;
          } else if (i < 40) {
            t += (b ^ c ^ d) + 0x6ed9eba1;
          } else if (i < 60) {
            t += (b & c | b & d | c & d) - 0x70e44324;
          } else /* if (i < 80) */{
              t += (b ^ c ^ d) - 0x359d3e2a;
            }

          e = d;
          d = c;
          c = b << 30 | b >>> 2;
          b = a;
          a = t;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;

        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();

        return clone;
      } });


    /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA1('message');
             *     var hash = CryptoJS.SHA1(wordArray);
             */
    C.SHA1 = Hasher._createHelper(SHA1);

    /**
                                          * Shortcut function to the HMAC's object interface.
                                          *
                                          * @param {WordArray|string} message The message to hash.
                                          * @param {WordArray|string} key The secret key.
                                          *
                                          * @return {WordArray} The HMAC.
                                          *
                                          * @static
                                          *
                                          * @example
                                          *
                                          *     var hmac = CryptoJS.HmacSHA1(message, key);
                                          */
    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
  })();


  return CryptoJS.SHA1;

});

/***/ }),
/* 100 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha256.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
      function isPrime(n) {
        var sqrtN = Math.sqrt(n);
        for (var factor = 2; factor <= sqrtN; factor++) {
          if (!(n % factor)) {
            return false;
          }
        }

        return true;
      }

      function getFractionalBits(n) {
        return (n - (n | 0)) * 0x100000000 | 0;
      }

      var n = 2;
      var nPrime = 0;
      while (nPrime < 64) {
        if (isPrime(n)) {
          if (nPrime < 8) {
            H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
          }
          K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

          nPrime++;
        }

        n++;
      }
    })();

    // Reusable object
    var W = [];

    /**
                 * SHA-256 hash algorithm.
                 */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init(H.slice(0));
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var H = this._hash.words;

        // Working variables
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7];

        // Computation
        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (
            gamma0x << 14 | gamma0x >>> 18) ^
            gamma0x >>> 3;

            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (
            gamma1x << 13 | gamma1x >>> 19) ^
            gamma1x >>> 10;

            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }

          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;

          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);

          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;

          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        }

        // Intermediate hash value
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;

        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Return final computed hash
        return this._hash;
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();

        return clone;
      } });


    /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA256('message');
             *     var hash = CryptoJS.SHA256(wordArray);
             */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
                                              * Shortcut function to the HMAC's object interface.
                                              *
                                              * @param {WordArray|string} message The message to hash.
                                              * @param {WordArray|string} key The secret key.
                                              *
                                              * @return {WordArray} The HMAC.
                                              *
                                              * @static
                                              *
                                              * @example
                                              *
                                              *     var hmac = CryptoJS.HmacSHA256(message, key);
                                              */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  })(Math);


  return CryptoJS.SHA256;

});

/***/ }),
/* 101 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha224.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./sha256 */ 100));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA256 = C_algo.SHA256;

    /**
                                 * SHA-224 hash algorithm.
                                 */
    var SHA224 = C_algo.SHA224 = SHA256.extend({
      _doReset: function _doReset() {
        this._hash = new WordArray.init([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
        0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);

      },

      _doFinalize: function _doFinalize() {
        var hash = SHA256._doFinalize.call(this);

        hash.sigBytes -= 4;

        return hash;
      } });


    /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA224('message');
             *     var hash = CryptoJS.SHA224(wordArray);
             */
    C.SHA224 = SHA256._createHelper(SHA224);

    /**
                                              * Shortcut function to the HMAC's object interface.
                                              *
                                              * @param {WordArray|string} message The message to hash.
                                              * @param {WordArray|string} key The secret key.
                                              *
                                              * @return {WordArray} The HMAC.
                                              *
                                              * @static
                                              *
                                              * @example
                                              *
                                              *     var hmac = CryptoJS.HmacSHA224(message, key);
                                              */
    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
  })();


  return CryptoJS.SHA224;

});

/***/ }),
/* 102 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha512.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./x64-core */ 93));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;

    function X64Word_create() {
      return X64Word.create.apply(X64Word, arguments);
    }

    // Constants
    var K = [
    X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
    X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
    X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
    X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
    X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
    X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
    X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
    X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
    X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
    X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
    X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
    X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
    X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
    X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
    X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
    X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
    X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
    X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
    X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
    X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
    X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
    X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
    X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
    X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
    X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
    X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
    X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
    X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
    X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
    X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
    X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
    X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
    X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
    X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
    X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
    X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
    X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
    X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
    X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
    X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];


    // Reusable objects
    var W = [];
    (function () {
      for (var i = 0; i < 80; i++) {
        W[i] = X64Word_create();
      }
    })();

    /**
           * SHA-512 hash algorithm.
           */
    var SHA512 = C_algo.SHA512 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([
        new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
        new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
        new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
        new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);

      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var H = this._hash.words;

        var H0 = H[0];
        var H1 = H[1];
        var H2 = H[2];
        var H3 = H[3];
        var H4 = H[4];
        var H5 = H[5];
        var H6 = H[6];
        var H7 = H[7];

        var H0h = H0.high;
        var H0l = H0.low;
        var H1h = H1.high;
        var H1l = H1.low;
        var H2h = H2.high;
        var H2l = H2.low;
        var H3h = H3.high;
        var H3l = H3.low;
        var H4h = H4.high;
        var H4l = H4.low;
        var H5h = H5.high;
        var H5l = H5.low;
        var H6h = H6.high;
        var H6l = H6.low;
        var H7h = H7.high;
        var H7l = H7.low;

        // Working variables
        var ah = H0h;
        var al = H0l;
        var bh = H1h;
        var bl = H1l;
        var ch = H2h;
        var cl = H2l;
        var dh = H3h;
        var dl = H3l;
        var eh = H4h;
        var el = H4l;
        var fh = H5h;
        var fl = H5l;
        var gh = H6h;
        var gl = H6l;
        var hh = H7h;
        var hl = H7l;

        // Rounds
        for (var i = 0; i < 80; i++) {
          var Wil;
          var Wih;

          // Shortcut
          var Wi = W[i];

          // Extend message
          if (i < 16) {
            Wih = Wi.high = M[offset + i * 2] | 0;
            Wil = Wi.low = M[offset + i * 2 + 1] | 0;
          } else {
            // Gamma0
            var gamma0x = W[i - 15];
            var gamma0xh = gamma0x.high;
            var gamma0xl = gamma0x.low;
            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);

            // Gamma1
            var gamma1x = W[i - 2];
            var gamma1xh = gamma1x.high;
            var gamma1xl = gamma1x.low;
            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);

            // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
            var Wi7 = W[i - 7];
            var Wi7h = Wi7.high;
            var Wi7l = Wi7.low;

            var Wi16 = W[i - 16];
            var Wi16h = Wi16.high;
            var Wi16l = Wi16.low;

            Wil = gamma0l + Wi7l;
            Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
            Wil = Wil + gamma1l;
            Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
            Wil = Wil + Wi16l;
            Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);

            Wi.high = Wih;
            Wi.low = Wil;
          }

          var chh = eh & fh ^ ~eh & gh;
          var chl = el & fl ^ ~el & gl;
          var majh = ah & bh ^ ah & ch ^ bh & ch;
          var majl = al & bl ^ al & cl ^ bl & cl;

          var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
          var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
          var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
          var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);

          // t1 = h + sigma1 + ch + K[i] + W[i]
          var Ki = K[i];
          var Kih = Ki.high;
          var Kil = Ki.low;

          var t1l = hl + sigma1l;
          var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
          var t1l = t1l + chl;
          var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
          var t1l = t1l + Kil;
          var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
          var t1l = t1l + Wil;
          var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);

          // t2 = sigma0 + maj
          var t2l = sigma0l + majl;
          var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);

          // Update working variables
          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        }

        // Intermediate hash value
        H0l = H0.low = H0l + al;
        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
        H1l = H1.low = H1l + bl;
        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
        H2l = H2.low = H2l + cl;
        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
        H3l = H3.low = H3l + dl;
        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
        H4l = H4.low = H4l + el;
        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
        H5l = H5.low = H5l + fl;
        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
        H6l = H6.low = H6l + gl;
        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
        H7l = H7.low = H7l + hl;
        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;

        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Convert hash to 32-bit word array before returning
        var hash = this._hash.toX32();

        // Return final computed hash
        return hash;
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();

        return clone;
      },

      blockSize: 1024 / 32 });


    /**
                                * Shortcut function to the hasher's object interface.
                                *
                                * @param {WordArray|string} message The message to hash.
                                *
                                * @return {WordArray} The hash.
                                *
                                * @static
                                *
                                * @example
                                *
                                *     var hash = CryptoJS.SHA512('message');
                                *     var hash = CryptoJS.SHA512(wordArray);
                                */
    C.SHA512 = Hasher._createHelper(SHA512);

    /**
                                              * Shortcut function to the HMAC's object interface.
                                              *
                                              * @param {WordArray|string} message The message to hash.
                                              * @param {WordArray|string} key The secret key.
                                              *
                                              * @return {WordArray} The HMAC.
                                              *
                                              * @static
                                              *
                                              * @example
                                              *
                                              *     var hmac = CryptoJS.HmacSHA512(message, key);
                                              */
    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
  })();


  return CryptoJS.SHA512;

});

/***/ }),
/* 103 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha384.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./x64-core */ 93), __webpack_require__(/*! ./sha512 */ 102));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;
    var SHA512 = C_algo.SHA512;

    /**
                                 * SHA-384 hash algorithm.
                                 */
    var SHA384 = C_algo.SHA384 = SHA512.extend({
      _doReset: function _doReset() {
        this._hash = new X64WordArray.init([
        new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
        new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
        new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
        new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);

      },

      _doFinalize: function _doFinalize() {
        var hash = SHA512._doFinalize.call(this);

        hash.sigBytes -= 16;

        return hash;
      } });


    /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA384('message');
             *     var hash = CryptoJS.SHA384(wordArray);
             */
    C.SHA384 = SHA512._createHelper(SHA384);

    /**
                                              * Shortcut function to the HMAC's object interface.
                                              *
                                              * @param {WordArray|string} message The message to hash.
                                              * @param {WordArray|string} key The secret key.
                                              *
                                              * @return {WordArray} The HMAC.
                                              *
                                              * @static
                                              *
                                              * @example
                                              *
                                              *     var hmac = CryptoJS.HmacSHA384(message, key);
                                              */
    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
  })();


  return CryptoJS.SHA384;

});

/***/ }),
/* 104 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/sha3.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./x64-core */ 93));
  } else
  {}
})(this, function (CryptoJS) {

  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var C_algo = C.algo;

    // Constants tables
    var RHO_OFFSETS = [];
    var PI_INDEXES = [];
    var ROUND_CONSTANTS = [];

    // Compute Constants
    (function () {
      // Compute rho offset constants
      var x = 1,y = 0;
      for (var t = 0; t < 24; t++) {
        RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;

        var newX = y % 5;
        var newY = (2 * x + 3 * y) % 5;
        x = newX;
        y = newY;
      }

      // Compute pi index constants
      for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 5; y++) {
          PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
        }
      }

      // Compute round constants
      var LFSR = 0x01;
      for (var i = 0; i < 24; i++) {
        var roundConstantMsw = 0;
        var roundConstantLsw = 0;

        for (var j = 0; j < 7; j++) {
          if (LFSR & 0x01) {
            var bitPosition = (1 << j) - 1;
            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else /* if (bitPosition >= 32) */{
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
          }

          // Compute next LFSR
          if (LFSR & 0x80) {
            // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
            LFSR = LFSR << 1 ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }

        ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
      }
    })();

    // Reusable objects for temporary values
    var T = [];
    (function () {
      for (var i = 0; i < 25; i++) {
        T[i] = X64Word.create();
      }
    })();

    /**
           * SHA-3 hash algorithm.
           */
    var SHA3 = C_algo.SHA3 = Hasher.extend({
      /**
                                              * Configuration options.
                                              *
                                              * @property {number} outputLength
                                              *   The desired number of bits in the output hash.
                                              *   Only values permitted are: 224, 256, 384, 512.
                                              *   Default: 512
                                              */
      cfg: Hasher.cfg.extend({
        outputLength: 512 }),


      _doReset: function _doReset() {
        var state = this._state = [];
        for (var i = 0; i < 25; i++) {
          state[i] = new X64Word.init();
        }

        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcuts
        var state = this._state;
        var nBlockSizeLanes = this.blockSize / 2;

        // Absorb
        for (var i = 0; i < nBlockSizeLanes; i++) {
          // Shortcuts
          var M2i = M[offset + 2 * i];
          var M2i1 = M[offset + 2 * i + 1];

          // Swap endian
          M2i =
          (M2i << 8 | M2i >>> 24) & 0x00ff00ff |
          (M2i << 24 | M2i >>> 8) & 0xff00ff00;

          M2i1 =
          (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff |
          (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;


          // Absorb message into state
          var lane = state[i];
          lane.high ^= M2i1;
          lane.low ^= M2i;
        }

        // Rounds
        for (var round = 0; round < 24; round++) {
          // Theta
          for (var x = 0; x < 5; x++) {
            // Mix column lanes
            var tMsw = 0,tLsw = 0;
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              tMsw ^= lane.high;
              tLsw ^= lane.low;
            }

            // Temporary values
            var Tx = T[x];
            Tx.high = tMsw;
            Tx.low = tLsw;
          }
          for (var x = 0; x < 5; x++) {
            // Shortcuts
            var Tx4 = T[(x + 4) % 5];
            var Tx1 = T[(x + 1) % 5];
            var Tx1Msw = Tx1.high;
            var Tx1Lsw = Tx1.low;

            // Mix surrounding columns
            var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              lane.high ^= tMsw;
              lane.low ^= tLsw;
            }
          }

          // Rho Pi
          for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
            var tMsw;
            var tLsw;

            // Shortcuts
            var lane = state[laneIndex];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            var rhoOffset = RHO_OFFSETS[laneIndex];

            // Rotate lanes
            if (rhoOffset < 32) {
              tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
              tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
            } else /* if (rhoOffset >= 32) */{
                tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
              }

            // Transpose lanes
            var TPiLane = T[PI_INDEXES[laneIndex]];
            TPiLane.high = tMsw;
            TPiLane.low = tLsw;
          }

          // Rho pi at x = y = 0
          var T0 = T[0];
          var state0 = state[0];
          T0.high = state0.high;
          T0.low = state0.low;

          // Chi
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              // Shortcuts
              var laneIndex = x + 5 * y;
              var lane = state[laneIndex];
              var TLane = T[laneIndex];
              var Tx1Lane = T[(x + 1) % 5 + 5 * y];
              var Tx2Lane = T[(x + 2) % 5 + 5 * y];

              // Mix rows
              lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
              lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
            }
          }

          // Iota
          var lane = state[0];
          var roundConstant = ROUND_CONSTANTS[round];
          lane.high ^= roundConstant.high;
          lane.low ^= roundConstant.low;
        }
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        var blockSizeBits = this.blockSize * 32;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
        dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
        data.sigBytes = dataWords.length * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var state = this._state;
        var outputLengthBytes = this.cfg.outputLength / 8;
        var outputLengthLanes = outputLengthBytes / 8;

        // Squeeze
        var hashWords = [];
        for (var i = 0; i < outputLengthLanes; i++) {
          // Shortcuts
          var lane = state[i];
          var laneMsw = lane.high;
          var laneLsw = lane.low;

          // Swap endian
          laneMsw =
          (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff |
          (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;

          laneLsw =
          (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff |
          (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;


          // Squeeze state to retrieve hash
          hashWords.push(laneLsw);
          hashWords.push(laneMsw);
        }

        // Return final computed hash
        return new WordArray.init(hashWords, outputLengthBytes);
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);

        var state = clone._state = this._state.slice(0);
        for (var i = 0; i < 25; i++) {
          state[i] = state[i].clone();
        }

        return clone;
      } });


    /**
             * Shortcut function to the hasher's object interface.
             *
             * @param {WordArray|string} message The message to hash.
             *
             * @return {WordArray} The hash.
             *
             * @static
             *
             * @example
             *
             *     var hash = CryptoJS.SHA3('message');
             *     var hash = CryptoJS.SHA3(wordArray);
             */
    C.SHA3 = Hasher._createHelper(SHA3);

    /**
                                          * Shortcut function to the HMAC's object interface.
                                          *
                                          * @param {WordArray|string} message The message to hash.
                                          * @param {WordArray|string} key The secret key.
                                          *
                                          * @return {WordArray} The HMAC.
                                          *
                                          * @static
                                          *
                                          * @example
                                          *
                                          *     var hmac = CryptoJS.HmacSHA3(message, key);
                                          */
    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
  })(Math);


  return CryptoJS.SHA3;

});

/***/ }),
/* 105 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/ripemd160.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  /** @preserve
                              (c) 2012 by Cédric Mesnil. All rights reserved.
                              	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                              	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                  - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                              	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                              */




  (function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Constants table
    var _zl = WordArray.create([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
    3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
    1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
    4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
    var _zr = WordArray.create([
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
    6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
    15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
    8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
    12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
    var _sl = WordArray.create([
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
    7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
    11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
    11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
    9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
    var _sr = WordArray.create([
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
    9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
    9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
    15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
    8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

    var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    /**
                                                                                               * RIPEMD160 hash algorithm.
                                                                                               */
    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
      _doReset: function _doReset() {
        this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {

        // Swap endian
        for (var i = 0; i < 16; i++) {
          // Shortcuts
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];

          // Swap
          M[offset_i] =
          (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff |
          (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;

        }
        // Shortcut
        var H = this._hash.words;
        var hl = _hl.words;
        var hr = _hr.words;
        var zl = _zl.words;
        var zr = _zr.words;
        var sl = _sl.words;
        var sr = _sr.words;

        // Working variables
        var al, bl, cl, dl, el;
        var ar, br, cr, dr, er;

        ar = al = H[0];
        br = bl = H[1];
        cr = cl = H[2];
        dr = dl = H[3];
        er = el = H[4];
        // Computation
        var t;
        for (var i = 0; i < 80; i += 1) {
          t = al + M[offset + zl[i]] | 0;
          if (i < 16) {
            t += f1(bl, cl, dl) + hl[0];
          } else if (i < 32) {
            t += f2(bl, cl, dl) + hl[1];
          } else if (i < 48) {
            t += f3(bl, cl, dl) + hl[2];
          } else if (i < 64) {
            t += f4(bl, cl, dl) + hl[3];
          } else {// if (i<80) {
            t += f5(bl, cl, dl) + hl[4];
          }
          t = t | 0;
          t = rotl(t, sl[i]);
          t = t + el | 0;
          al = el;
          el = dl;
          dl = rotl(cl, 10);
          cl = bl;
          bl = t;

          t = ar + M[offset + zr[i]] | 0;
          if (i < 16) {
            t += f5(br, cr, dr) + hr[0];
          } else if (i < 32) {
            t += f4(br, cr, dr) + hr[1];
          } else if (i < 48) {
            t += f3(br, cr, dr) + hr[2];
          } else if (i < 64) {
            t += f2(br, cr, dr) + hr[3];
          } else {// if (i<80) {
            t += f1(br, cr, dr) + hr[4];
          }
          t = t | 0;
          t = rotl(t, sr[i]);
          t = t + er | 0;
          ar = er;
          er = dr;
          dr = rotl(cr, 10);
          cr = br;
          br = t;
        }
        // Intermediate hash value
        t = H[1] + cl + dr | 0;
        H[1] = H[2] + dl + er | 0;
        H[2] = H[3] + el + ar | 0;
        H[3] = H[4] + al + br | 0;
        H[4] = H[0] + bl + cr | 0;
        H[0] = t;
      },

      _doFinalize: function _doFinalize() {
        // Shortcuts
        var data = this._data;
        var dataWords = data.words;

        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;

        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] =
        (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff |
        (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;

        data.sigBytes = (dataWords.length + 1) * 4;

        // Hash final blocks
        this._process();

        // Shortcuts
        var hash = this._hash;
        var H = hash.words;

        // Swap endian
        for (var i = 0; i < 5; i++) {
          // Shortcut
          var H_i = H[i];

          // Swap
          H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff |
          (H_i << 24 | H_i >>> 8) & 0xff00ff00;
        }

        // Return final computed hash
        return hash;
      },

      clone: function clone() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();

        return clone;
      } });



    function f1(x, y, z) {
      return x ^ y ^ z;

    }

    function f2(x, y, z) {
      return x & y | ~x & z;
    }

    function f3(x, y, z) {
      return (x | ~y) ^ z;
    }

    function f4(x, y, z) {
      return x & z | y & ~z;
    }

    function f5(x, y, z) {
      return x ^ (y | ~z);

    }

    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }


    /**
       * Shortcut function to the hasher's object interface.
       *
       * @param {WordArray|string} message The message to hash.
       *
       * @return {WordArray} The hash.
       *
       * @static
       *
       * @example
       *
       *     var hash = CryptoJS.RIPEMD160('message');
       *     var hash = CryptoJS.RIPEMD160(wordArray);
       */
    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    /**
                                                    * Shortcut function to the HMAC's object interface.
                                                    *
                                                    * @param {WordArray|string} message The message to hash.
                                                    * @param {WordArray|string} key The secret key.
                                                    *
                                                    * @return {WordArray} The HMAC.
                                                    *
                                                    * @static
                                                    *
                                                    * @example
                                                    *
                                                    *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
                                                    */
    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
  })(Math);


  return CryptoJS.RIPEMD160;

});

/***/ }),
/* 106 */
/*!*********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/hmac.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
                          * HMAC algorithm.
                          */
    var HMAC = C_algo.HMAC = Base.extend({
      /**
                                            * Initializes a newly created HMAC.
                                            *
                                            * @param {Hasher} hasher The hash algorithm to use.
                                            * @param {WordArray|string} key The secret key.
                                            *
                                            * @example
                                            *
                                            *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                                            */
      init: function init(hasher, key) {
        // Init hasher
        hasher = this._hasher = new hasher.init();

        // Convert string to WordArray, else assume WordArray already
        if (typeof key == 'string') {
          key = Utf8.parse(key);
        }

        // Shortcuts
        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4;

        // Allow arbitrary length keys
        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        }

        // Clamp excess bits
        key.clamp();

        // Clone key for inner and outer pads
        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone();

        // Shortcuts
        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words;

        // XOR keys with pad constants
        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 0x5c5c5c5c;
          iKeyWords[i] ^= 0x36363636;
        }
        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

        // Set initial values
        this.reset();
      },

      /**
          * Resets this HMAC to its initial state.
          *
          * @example
          *
          *     hmacHasher.reset();
          */
      reset: function reset() {
        // Shortcut
        var hasher = this._hasher;

        // Reset
        hasher.reset();
        hasher.update(this._iKey);
      },

      /**
          * Updates this HMAC with a message.
          *
          * @param {WordArray|string} messageUpdate The message to append.
          *
          * @return {HMAC} This HMAC instance.
          *
          * @example
          *
          *     hmacHasher.update('message');
          *     hmacHasher.update(wordArray);
          */
      update: function update(messageUpdate) {
        this._hasher.update(messageUpdate);

        // Chainable
        return this;
      },

      /**
          * Finalizes the HMAC computation.
          * Note that the finalize operation is effectively a destructive, read-once operation.
          *
          * @param {WordArray|string} messageUpdate (Optional) A final message update.
          *
          * @return {WordArray} The HMAC.
          *
          * @example
          *
          *     var hmac = hmacHasher.finalize();
          *     var hmac = hmacHasher.finalize('message');
          *     var hmac = hmacHasher.finalize(wordArray);
          */
      finalize: function finalize(messageUpdate) {
        // Shortcut
        var hasher = this._hasher;

        // Compute HMAC
        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

        return hmac;
      } });

  })();


});

/***/ }),
/* 107 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pbkdf2.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./sha1 */ 99), __webpack_require__(/*! ./hmac */ 106));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA1 = C_algo.SHA1;
    var HMAC = C_algo.HMAC;

    /**
                             * Password-Based Key Derivation Function 2 algorithm.
                             */
    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
      /**
                                                * Configuration options.
                                                *
                                                * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                                                * @property {Hasher} hasher The hasher to use. Default: SHA1
                                                * @property {number} iterations The number of iterations to perform. Default: 1
                                                */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: SHA1,
        iterations: 1 }),


      /**
                           * Initializes a newly created key derivation function.
                           *
                           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                           *
                           * @example
                           *
                           *     var kdf = CryptoJS.algo.PBKDF2.create();
                           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
                           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
                           */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },

      /**
          * Computes the Password-Based Key Derivation Function 2.
          *
          * @param {WordArray|string} password The password.
          * @param {WordArray|string} salt A salt.
          *
          * @return {WordArray} The derived key.
          *
          * @example
          *
          *     var key = kdf.compute(password, salt);
          */
      compute: function compute(password, salt) {
        // Shortcut
        var cfg = this.cfg;

        // Init HMAC
        var hmac = HMAC.create(cfg.hasher, password);

        // Initial values
        var derivedKey = WordArray.create();
        var blockIndex = WordArray.create([0x00000001]);

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var blockIndexWords = blockIndex.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          var block = hmac.update(salt).finalize(blockIndex);
          hmac.reset();

          // Shortcuts
          var blockWords = block.words;
          var blockWordsLength = blockWords.length;

          // Iterations
          var intermediate = block;
          for (var i = 1; i < iterations; i++) {
            intermediate = hmac.finalize(intermediate);
            hmac.reset();

            // Shortcut
            var intermediateWords = intermediate.words;

            // XOR intermediate with block
            for (var j = 0; j < blockWordsLength; j++) {
              blockWords[j] ^= intermediateWords[j];
            }
          }

          derivedKey.concat(block);
          blockIndexWords[0]++;
        }
        derivedKey.sigBytes = keySize * 4;

        return derivedKey;
      } });


    /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             * @param {Object} cfg (Optional) The configuration options to use for this computation.
             *
             * @return {WordArray} The derived key.
             *
             * @static
             *
             * @example
             *
             *     var key = CryptoJS.PBKDF2(password, salt);
             *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
             *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
             */
    C.PBKDF2 = function (password, salt, cfg) {
      return PBKDF2.create(cfg).compute(password, salt);
    };
  })();


  return CryptoJS.PBKDF2;

});

/***/ }),
/* 108 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/evpkdf.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./sha1 */ 99), __webpack_require__(/*! ./hmac */ 106));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var MD5 = C_algo.MD5;

    /**
                           * This key derivation function is meant to conform with EVP_BytesToKey.
                           * www.openssl.org/docs/crypto/EVP_BytesToKey.html
                           */
    var EvpKDF = C_algo.EvpKDF = Base.extend({
      /**
                                                * Configuration options.
                                                *
                                                * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                                                * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                                                * @property {number} iterations The number of iterations to perform. Default: 1
                                                */
      cfg: Base.extend({
        keySize: 128 / 32,
        hasher: MD5,
        iterations: 1 }),


      /**
                           * Initializes a newly created key derivation function.
                           *
                           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                           *
                           * @example
                           *
                           *     var kdf = CryptoJS.algo.EvpKDF.create();
                           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                           */
      init: function init(cfg) {
        this.cfg = this.cfg.extend(cfg);
      },

      /**
          * Derives a key from a password.
          *
          * @param {WordArray|string} password The password.
          * @param {WordArray|string} salt A salt.
          *
          * @return {WordArray} The derived key.
          *
          * @example
          *
          *     var key = kdf.compute(password, salt);
          */
      compute: function compute(password, salt) {
        var block;

        // Shortcut
        var cfg = this.cfg;

        // Init hasher
        var hasher = cfg.hasher.create();

        // Initial values
        var derivedKey = WordArray.create();

        // Shortcuts
        var derivedKeyWords = derivedKey.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;

        // Generate key
        while (derivedKeyWords.length < keySize) {
          if (block) {
            hasher.update(block);
          }
          block = hasher.update(password).finalize(salt);
          hasher.reset();

          // Iterations
          for (var i = 1; i < iterations; i++) {
            block = hasher.finalize(block);
            hasher.reset();
          }

          derivedKey.concat(block);
        }
        derivedKey.sigBytes = keySize * 4;

        return derivedKey;
      } });


    /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             * @param {Object} cfg (Optional) The configuration options to use for this computation.
             *
             * @return {WordArray} The derived key.
             *
             * @static
             *
             * @example
             *
             *     var key = CryptoJS.EvpKDF(password, salt);
             *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
             *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
             */
    C.EvpKDF = function (password, salt, cfg) {
      return EvpKDF.create(cfg).compute(password, salt);
    };
  })();


  return CryptoJS.EvpKDF;

});

/***/ }),
/* 109 */
/*!****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/cipher-core.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./evpkdf */ 108));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Cipher core components.
                               */
  CryptoJS.lib.Cipher || function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
                                 * Abstract base cipher template.
                                 *
                                 * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
                                 * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
                                 * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
                                 * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
                                 */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
      /**
                                                                 * Configuration options.
                                                                 *
                                                                 * @property {WordArray} iv The IV to use for this operation.
                                                                 */
      cfg: Base.extend(),

      /**
                           * Creates this cipher in encryption mode.
                           *
                           * @param {WordArray} key The key.
                           * @param {Object} cfg (Optional) The configuration options to use for this operation.
                           *
                           * @return {Cipher} A cipher instance.
                           *
                           * @static
                           *
                           * @example
                           *
                           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
                           */
      createEncryptor: function createEncryptor(key, cfg) {
        return this.create(this._ENC_XFORM_MODE, key, cfg);
      },

      /**
          * Creates this cipher in decryption mode.
          *
          * @param {WordArray} key The key.
          * @param {Object} cfg (Optional) The configuration options to use for this operation.
          *
          * @return {Cipher} A cipher instance.
          *
          * @static
          *
          * @example
          *
          *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
          */
      createDecryptor: function createDecryptor(key, cfg) {
        return this.create(this._DEC_XFORM_MODE, key, cfg);
      },

      /**
          * Initializes a newly created cipher.
          *
          * @param {number} xformMode Either the encryption or decryption transormation mode constant.
          * @param {WordArray} key The key.
          * @param {Object} cfg (Optional) The configuration options to use for this operation.
          *
          * @example
          *
          *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
          */
      init: function init(xformMode, key, cfg) {
        // Apply config defaults
        this.cfg = this.cfg.extend(cfg);

        // Store transform mode and key
        this._xformMode = xformMode;
        this._key = key;

        // Set initial values
        this.reset();
      },

      /**
          * Resets this cipher to its initial state.
          *
          * @example
          *
          *     cipher.reset();
          */
      reset: function reset() {
        // Reset data buffer
        BufferedBlockAlgorithm.reset.call(this);

        // Perform concrete-cipher logic
        this._doReset();
      },

      /**
          * Adds data to be encrypted or decrypted.
          *
          * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
          *
          * @return {WordArray} The data after processing.
          *
          * @example
          *
          *     var encrypted = cipher.process('data');
          *     var encrypted = cipher.process(wordArray);
          */
      process: function process(dataUpdate) {
        // Append
        this._append(dataUpdate);

        // Process available blocks
        return this._process();
      },

      /**
          * Finalizes the encryption or decryption process.
          * Note that the finalize operation is effectively a destructive, read-once operation.
          *
          * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
          *
          * @return {WordArray} The data after final processing.
          *
          * @example
          *
          *     var encrypted = cipher.finalize();
          *     var encrypted = cipher.finalize('data');
          *     var encrypted = cipher.finalize(wordArray);
          */
      finalize: function finalize(dataUpdate) {
        // Final data update
        if (dataUpdate) {
          this._append(dataUpdate);
        }

        // Perform concrete-cipher logic
        var finalProcessedData = this._doFinalize();

        return finalProcessedData;
      },

      keySize: 128 / 32,

      ivSize: 128 / 32,

      _ENC_XFORM_MODE: 1,

      _DEC_XFORM_MODE: 2,

      /**
                           * Creates shortcut functions to a cipher's object interface.
                           *
                           * @param {Cipher} cipher The cipher to create a helper for.
                           *
                           * @return {Object} An object with encrypt and decrypt shortcut functions.
                           *
                           * @static
                           *
                           * @example
                           *
                           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                           */
      _createHelper: function () {
        function selectCipherStrategy(key) {
          if (typeof key == 'string') {
            return PasswordBasedCipher;
          } else {
            return SerializableCipher;
          }
        }

        return function (cipher) {
          return {
            encrypt: function encrypt(message, key, cfg) {
              return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
            },

            decrypt: function decrypt(ciphertext, key, cfg) {
              return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
            } };

        };
      }() });


    /**
               * Abstract base stream cipher template.
               *
               * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
               */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
      _doFinalize: function _doFinalize() {
        // Process partial blocks
        var finalProcessedBlocks = this._process(!!'flush');

        return finalProcessedBlocks;
      },

      blockSize: 1 });


    /**
                        * Mode namespace.
                        */
    var C_mode = C.mode = {};

    /**
                               * Abstract base block cipher mode template.
                               */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
      /**
                                                                 * Creates this mode for encryption.
                                                                 *
                                                                 * @param {Cipher} cipher A block cipher instance.
                                                                 * @param {Array} iv The IV words.
                                                                 *
                                                                 * @static
                                                                 *
                                                                 * @example
                                                                 *
                                                                 *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
                                                                 */
      createEncryptor: function createEncryptor(cipher, iv) {
        return this.Encryptor.create(cipher, iv);
      },

      /**
          * Creates this mode for decryption.
          *
          * @param {Cipher} cipher A block cipher instance.
          * @param {Array} iv The IV words.
          *
          * @static
          *
          * @example
          *
          *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
          */
      createDecryptor: function createDecryptor(cipher, iv) {
        return this.Decryptor.create(cipher, iv);
      },

      /**
          * Initializes a newly created mode.
          *
          * @param {Cipher} cipher A block cipher instance.
          * @param {Array} iv The IV words.
          *
          * @example
          *
          *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
          */
      init: function init(cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
      } });


    /**
             * Cipher Block Chaining mode.
             */
    var CBC = C_mode.CBC = function () {
      /**
                                         * Abstract base CBC mode.
                                         */
      var CBC = BlockCipherMode.extend();

      /**
                                           * CBC encryptor.
                                           */
      CBC.Encryptor = CBC.extend({
        /**
                                    * Processes the data block at offset.
                                    *
                                    * @param {Array} words The data words to operate on.
                                    * @param {number} offset The offset where the block starts.
                                    *
                                    * @example
                                    *
                                    *     mode.processBlock(data.words, offset);
                                    */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // XOR and encrypt
          xorBlock.call(this, words, offset, blockSize);
          cipher.encryptBlock(words, offset);

          // Remember this block to use with next block
          this._prevBlock = words.slice(offset, offset + blockSize);
        } });


      /**
               * CBC decryptor.
               */
      CBC.Decryptor = CBC.extend({
        /**
                                    * Processes the data block at offset.
                                    *
                                    * @param {Array} words The data words to operate on.
                                    * @param {number} offset The offset where the block starts.
                                    *
                                    * @example
                                    *
                                    *     mode.processBlock(data.words, offset);
                                    */
        processBlock: function processBlock(words, offset) {
          // Shortcuts
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;

          // Remember this block to use with next block
          var thisBlock = words.slice(offset, offset + blockSize);

          // Decrypt and XOR
          cipher.decryptBlock(words, offset);
          xorBlock.call(this, words, offset, blockSize);

          // This block becomes the previous block
          this._prevBlock = thisBlock;
        } });


      function xorBlock(words, offset, blockSize) {
        var block;

        // Shortcut
        var iv = this._iv;

        // Choose mixing block
        if (iv) {
          block = iv;

          // Remove IV for subsequent blocks
          this._iv = undefined;
        } else {
          block = this._prevBlock;
        }

        // XOR blocks
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= block[i];
        }
      }

      return CBC;
    }();

    /**
          * Padding namespace.
          */
    var C_pad = C.pad = {};

    /**
                             * PKCS #5/7 padding strategy.
                             */
    var Pkcs7 = C_pad.Pkcs7 = {
      /**
                                 * Pads data using the algorithm defined in PKCS #5/7.
                                 *
                                 * @param {WordArray} data The data to pad.
                                 * @param {number} blockSize The multiple that the data should be padded to.
                                 *
                                 * @static
                                 *
                                 * @example
                                 *
                                 *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
                                 */
      pad: function pad(data, blockSize) {
        // Shortcut
        var blockSizeBytes = blockSize * 4;

        // Count padding bytes
        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

        // Create padding word
        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;

        // Create padding
        var paddingWords = [];
        for (var i = 0; i < nPaddingBytes; i += 4) {
          paddingWords.push(paddingWord);
        }
        var padding = WordArray.create(paddingWords, nPaddingBytes);

        // Add padding
        data.concat(padding);
      },

      /**
          * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
          *
          * @param {WordArray} data The data to unpad.
          *
          * @static
          *
          * @example
          *
          *     CryptoJS.pad.Pkcs7.unpad(wordArray);
          */
      unpad: function unpad(data) {
        // Get number of padding bytes from last byte
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

        // Remove padding
        data.sigBytes -= nPaddingBytes;
      } };


    /**
            * Abstract base block cipher template.
            *
            * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
            */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
      /**
                                                           * Configuration options.
                                                           *
                                                           * @property {Mode} mode The block mode to use. Default: CBC
                                                           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                                                           */
      cfg: Cipher.cfg.extend({
        mode: CBC,
        padding: Pkcs7 }),


      reset: function reset() {
        var modeCreator;

        // Reset cipher
        Cipher.reset.call(this);

        // Shortcuts
        var cfg = this.cfg;
        var iv = cfg.iv;
        var mode = cfg.mode;

        // Reset block mode
        if (this._xformMode == this._ENC_XFORM_MODE) {
          modeCreator = mode.createEncryptor;
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            modeCreator = mode.createDecryptor;
            // Keep at least one block in the buffer for unpadding
            this._minBufferSize = 1;
          }

        if (this._mode && this._mode.__creator == modeCreator) {
          this._mode.init(this, iv && iv.words);
        } else {
          this._mode = modeCreator.call(mode, this, iv && iv.words);
          this._mode.__creator = modeCreator;
        }
      },

      _doProcessBlock: function _doProcessBlock(words, offset) {
        this._mode.processBlock(words, offset);
      },

      _doFinalize: function _doFinalize() {
        var finalProcessedBlocks;

        // Shortcut
        var padding = this.cfg.padding;

        // Finalize
        if (this._xformMode == this._ENC_XFORM_MODE) {
          // Pad data
          padding.pad(this._data, this.blockSize);

          // Process final blocks
          finalProcessedBlocks = this._process(!!'flush');
        } else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
            // Process final blocks
            finalProcessedBlocks = this._process(!!'flush');

            // Unpad data
            padding.unpad(finalProcessedBlocks);
          }

        return finalProcessedBlocks;
      },

      blockSize: 128 / 32 });


    /**
                               * A collection of cipher parameters.
                               *
                               * @property {WordArray} ciphertext The raw ciphertext.
                               * @property {WordArray} key The key to this ciphertext.
                               * @property {WordArray} iv The IV used in the ciphering operation.
                               * @property {WordArray} salt The salt used with a key derivation function.
                               * @property {Cipher} algorithm The cipher algorithm.
                               * @property {Mode} mode The block mode used in the ciphering operation.
                               * @property {Padding} padding The padding scheme used in the ciphering operation.
                               * @property {number} blockSize The block size of the cipher.
                               * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
                               */
    var CipherParams = C_lib.CipherParams = Base.extend({
      /**
                                                           * Initializes a newly created cipher params object.
                                                           *
                                                           * @param {Object} cipherParams An object with any of the possible cipher parameters.
                                                           *
                                                           * @example
                                                           *
                                                           *     var cipherParams = CryptoJS.lib.CipherParams.create({
                                                           *         ciphertext: ciphertextWordArray,
                                                           *         key: keyWordArray,
                                                           *         iv: ivWordArray,
                                                           *         salt: saltWordArray,
                                                           *         algorithm: CryptoJS.algo.AES,
                                                           *         mode: CryptoJS.mode.CBC,
                                                           *         padding: CryptoJS.pad.PKCS7,
                                                           *         blockSize: 4,
                                                           *         formatter: CryptoJS.format.OpenSSL
                                                           *     });
                                                           */
      init: function init(cipherParams) {
        this.mixIn(cipherParams);
      },

      /**
          * Converts this cipher params object to a string.
          *
          * @param {Format} formatter (Optional) The formatting strategy to use.
          *
          * @return {string} The stringified cipher params.
          *
          * @throws Error If neither the formatter nor the default formatter is set.
          *
          * @example
          *
          *     var string = cipherParams + '';
          *     var string = cipherParams.toString();
          *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
          */
      toString: function toString(formatter) {
        return (formatter || this.formatter).stringify(this);
      } });


    /**
             * Format namespace.
             */
    var C_format = C.format = {};

    /**
                                   * OpenSSL formatting strategy.
                                   */
    var OpenSSLFormatter = C_format.OpenSSL = {
      /**
                                                 * Converts a cipher params object to an OpenSSL-compatible string.
                                                 *
                                                 * @param {CipherParams} cipherParams The cipher params object.
                                                 *
                                                 * @return {string} The OpenSSL-compatible string.
                                                 *
                                                 * @static
                                                 *
                                                 * @example
                                                 *
                                                 *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
                                                 */
      stringify: function stringify(cipherParams) {
        var wordArray;

        // Shortcuts
        var ciphertext = cipherParams.ciphertext;
        var salt = cipherParams.salt;

        // Format
        if (salt) {
          wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
        } else {
          wordArray = ciphertext;
        }

        return wordArray.toString(Base64);
      },

      /**
          * Converts an OpenSSL-compatible string to a cipher params object.
          *
          * @param {string} openSSLStr The OpenSSL-compatible string.
          *
          * @return {CipherParams} The cipher params object.
          *
          * @static
          *
          * @example
          *
          *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
          */
      parse: function parse(openSSLStr) {
        var salt;

        // Parse base64
        var ciphertext = Base64.parse(openSSLStr);

        // Shortcut
        var ciphertextWords = ciphertext.words;

        // Test for salt
        if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
          // Extract salt
          salt = WordArray.create(ciphertextWords.slice(2, 4));

          // Remove salt from ciphertext
          ciphertextWords.splice(0, 4);
          ciphertext.sigBytes -= 16;
        }

        return CipherParams.create({ ciphertext: ciphertext, salt: salt });
      } };


    /**
            * A cipher wrapper that returns ciphertext as a serializable cipher params object.
            */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
      /**
                                                                       * Configuration options.
                                                                       *
                                                                       * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                                                                       */
      cfg: Base.extend({
        format: OpenSSLFormatter }),


      /**
                                      * Encrypts a message.
                                      *
                                      * @param {Cipher} cipher The cipher algorithm to use.
                                      * @param {WordArray|string} message The message to encrypt.
                                      * @param {WordArray} key The key.
                                      * @param {Object} cfg (Optional) The configuration options to use for this operation.
                                      *
                                      * @return {CipherParams} A cipher params object.
                                      *
                                      * @static
                                      *
                                      * @example
                                      *
                                      *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                                      *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                                      *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                                      */
      encrypt: function encrypt(cipher, message, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Encrypt
        var encryptor = cipher.createEncryptor(key, cfg);
        var ciphertext = encryptor.finalize(message);

        // Shortcut
        var cipherCfg = encryptor.cfg;

        // Create and return serializable cipher params
        return CipherParams.create({
          ciphertext: ciphertext,
          key: key,
          iv: cipherCfg.iv,
          algorithm: cipher,
          mode: cipherCfg.mode,
          padding: cipherCfg.padding,
          blockSize: cipher.blockSize,
          formatter: cfg.format });

      },

      /**
          * Decrypts serialized ciphertext.
          *
          * @param {Cipher} cipher The cipher algorithm to use.
          * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
          * @param {WordArray} key The key.
          * @param {Object} cfg (Optional) The configuration options to use for this operation.
          *
          * @return {WordArray} The plaintext.
          *
          * @static
          *
          * @example
          *
          *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
          *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
          */
      decrypt: function decrypt(cipher, ciphertext, key, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Decrypt
        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

        return plaintext;
      },

      /**
          * Converts serialized ciphertext to CipherParams,
          * else assumed CipherParams already and returns ciphertext unchanged.
          *
          * @param {CipherParams|string} ciphertext The ciphertext.
          * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
          *
          * @return {CipherParams} The unserialized ciphertext.
          *
          * @static
          *
          * @example
          *
          *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
          */
      _parse: function _parse(ciphertext, format) {
        if (typeof ciphertext == 'string') {
          return format.parse(ciphertext, this);
        } else {
          return ciphertext;
        }
      } });


    /**
             * Key derivation function namespace.
             */
    var C_kdf = C.kdf = {};

    /**
                             * OpenSSL key derivation function.
                             */
    var OpenSSLKdf = C_kdf.OpenSSL = {
      /**
                                        * Derives a key and IV from a password.
                                        *
                                        * @param {string} password The password to derive from.
                                        * @param {number} keySize The size in words of the key to generate.
                                        * @param {number} ivSize The size in words of the IV to generate.
                                        * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                                        *
                                        * @return {CipherParams} A cipher params object with the key, IV, and salt.
                                        *
                                        * @static
                                        *
                                        * @example
                                        *
                                        *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                                        *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                                        */
      execute: function execute(password, keySize, ivSize, salt) {
        // Generate random salt
        if (!salt) {
          salt = WordArray.random(64 / 8);
        }

        // Derive key and IV
        var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

        // Separate key and IV
        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4;

        // Return params
        return CipherParams.create({ key: key, iv: iv, salt: salt });
      } };


    /**
            * A serializable cipher wrapper that derives the key from a password,
            * and returns ciphertext as a serializable cipher params object.
            */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
      /**
                                                                                       * Configuration options.
                                                                                       *
                                                                                       * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                                                                                       */
      cfg: SerializableCipher.cfg.extend({
        kdf: OpenSSLKdf }),


      /**
                             * Encrypts a message using a password.
                             *
                             * @param {Cipher} cipher The cipher algorithm to use.
                             * @param {WordArray|string} message The message to encrypt.
                             * @param {string} password The password.
                             * @param {Object} cfg (Optional) The configuration options to use for this operation.
                             *
                             * @return {CipherParams} A cipher params object.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                             */
      encrypt: function encrypt(cipher, message, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Encrypt
        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

        // Mix in derived params
        ciphertext.mixIn(derivedParams);

        return ciphertext;
      },

      /**
          * Decrypts serialized ciphertext using a password.
          *
          * @param {Cipher} cipher The cipher algorithm to use.
          * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
          * @param {string} password The password.
          * @param {Object} cfg (Optional) The configuration options to use for this operation.
          *
          * @return {WordArray} The plaintext.
          *
          * @static
          *
          * @example
          *
          *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
          *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
          */
      decrypt: function decrypt(cipher, ciphertext, password, cfg) {
        // Apply config defaults
        cfg = this.cfg.extend(cfg);

        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);

        // Derive key and other params
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

        // Add IV to config
        cfg.iv = derivedParams.iv;

        // Decrypt
        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

        return plaintext;
      } });

  }();


});

/***/ }),
/* 110 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/mode-cfb.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Cipher Feedback block mode.
                               */
  CryptoJS.mode.CFB = function () {
    var CFB = CryptoJS.lib.BlockCipherMode.extend();

    CFB.Encryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;

        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // Remember this block to use with next block
        this._prevBlock = words.slice(offset, offset + blockSize);
      } });


    CFB.Decryptor = CFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;

        // Remember this block to use with next block
        var thisBlock = words.slice(offset, offset + blockSize);

        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

        // This block becomes the previous block
        this._prevBlock = thisBlock;
      } });


    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
      var keystream;

      // Shortcut
      var iv = this._iv;

      // Generate keystream
      if (iv) {
        keystream = iv.slice(0);

        // Remove IV for subsequent blocks
        this._iv = undefined;
      } else {
        keystream = this._prevBlock;
      }
      cipher.encryptBlock(keystream, 0);

      // Encrypt
      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= keystream[i];
      }
    }

    return CFB;
  }();


  return CryptoJS.mode.CFB;

});

/***/ }),
/* 111 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/mode-ctr.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Counter block mode.
                               */
  CryptoJS.mode.CTR = function () {
    var CTR = CryptoJS.lib.BlockCipherMode.extend();

    var Encryptor = CTR.Encryptor = CTR.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Increment counter
        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      } });


    CTR.Decryptor = Encryptor;

    return CTR;
  }();


  return CryptoJS.mode.CTR;

});

/***/ }),
/* 112 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/mode-ctr-gladman.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /** @preserve
                               * Counter block mode compatible with  Dr Brian Gladman fileenc.c
                               * derived from CryptoJS.mode.CTR
                               * Jan Hruby jhruby.web@gmail.com
                               */
  CryptoJS.mode.CTRGladman = function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

    function incWord(word)
    {
      if ((word >> 24 & 0xff) === 0xff) {//overflow
        var b1 = word >> 16 & 0xff;
        var b2 = word >> 8 & 0xff;
        var b3 = word & 0xff;

        if (b1 === 0xff) // overflow b1
          {
            b1 = 0;
            if (b2 === 0xff)
            {
              b2 = 0;
              if (b3 === 0xff)
              {
                b3 = 0;
              } else

              {
                ++b3;
              }
            } else

            {
              ++b2;
            }
          } else

        {
          ++b1;
        }

        word = 0;
        word += b1 << 16;
        word += b2 << 8;
        word += b3;
      } else

      {
        word += 0x01 << 24;
      }
      return word;
    }

    function incCounter(counter)
    {
      if ((counter[0] = incWord(counter[0])) === 0)
      {
        // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
        counter[1] = incWord(counter[1]);
      }
      return counter;
    }

    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;

        // Generate keystream
        if (iv) {
          counter = this._counter = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }

        incCounter(counter);

        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      } });


    CTRGladman.Decryptor = Encryptor;

    return CTRGladman;
  }();




  return CryptoJS.mode.CTRGladman;

});

/***/ }),
/* 113 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/mode-ofb.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Output Feedback block mode.
                               */
  CryptoJS.mode.OFB = function () {
    var OFB = CryptoJS.lib.BlockCipherMode.extend();

    var Encryptor = OFB.Encryptor = OFB.extend({
      processBlock: function processBlock(words, offset) {
        // Shortcuts
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream;

        // Generate keystream
        if (iv) {
          keystream = this._keystream = iv.slice(0);

          // Remove IV for subsequent blocks
          this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);

        // Encrypt
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      } });


    OFB.Decryptor = Encryptor;

    return OFB;
  }();


  return CryptoJS.mode.OFB;

});

/***/ }),
/* 114 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/mode-ecb.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Electronic Codebook block mode.
                               */
  CryptoJS.mode.ECB = function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();

    ECB.Encryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.encryptBlock(words, offset);
      } });


    ECB.Decryptor = ECB.extend({
      processBlock: function processBlock(words, offset) {
        this._cipher.decryptBlock(words, offset);
      } });


    return ECB;
  }();


  return CryptoJS.mode.ECB;

});

/***/ }),
/* 115 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pad-ansix923.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * ANSI X.923 padding strategy.
                               */
  CryptoJS.pad.AnsiX923 = {
    pad: function pad(data, blockSize) {
      // Shortcuts
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

      // Compute last byte position
      var lastBytePos = dataSigBytes + nPaddingBytes - 1;

      // Pad
      data.clamp();
      data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
      data.sigBytes += nPaddingBytes;
    },

    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    } };



  return CryptoJS.pad.Ansix923;

});

/***/ }),
/* 116 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pad-iso10126.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * ISO 10126 padding strategy.
                               */
  CryptoJS.pad.Iso10126 = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Count padding bytes
      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

      // Pad
      data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
      concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    },

    unpad: function unpad(data) {
      // Get number of padding bytes from last byte
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

      // Remove padding
      data.sigBytes -= nPaddingBytes;
    } };



  return CryptoJS.pad.Iso10126;

});

/***/ }),
/* 117 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pad-iso97971.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * ISO/IEC 9797-1 Padding Method 2.
                               */
  CryptoJS.pad.Iso97971 = {
    pad: function pad(data, blockSize) {
      // Add 0x80 byte
      data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

      // Zero pad the rest
      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    },

    unpad: function unpad(data) {
      // Remove zero padding
      CryptoJS.pad.ZeroPadding.unpad(data);

      // Remove one more byte -- the 0x80 byte
      data.sigBytes--;
    } };



  return CryptoJS.pad.Iso97971;

});

/***/ }),
/* 118 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pad-zeropadding.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * Zero padding strategy.
                               */
  CryptoJS.pad.ZeroPadding = {
    pad: function pad(data, blockSize) {
      // Shortcut
      var blockSizeBytes = blockSize * 4;

      // Pad
      data.clamp();
      data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    },

    unpad: function unpad(data) {
      // Shortcut
      var dataWords = data.words;

      // Unpad
      var i = data.sigBytes - 1;
      for (var i = data.sigBytes - 1; i >= 0; i--) {
        if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff) {
          data.sigBytes = i + 1;
          break;
        }
      }
    } };



  return CryptoJS.pad.ZeroPadding;

});

/***/ }),
/* 119 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/pad-nopadding.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  /**
                               * A noop padding strategy.
                               */
  CryptoJS.pad.NoPadding = {
    pad: function pad() {
    },

    unpad: function unpad() {
    } };



  return CryptoJS.pad.NoPadding;

});

/***/ }),
/* 120 */
/*!***************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/format-hex.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var CipherParams = C_lib.CipherParams;
    var C_enc = C.enc;
    var Hex = C_enc.Hex;
    var C_format = C.format;

    var HexFormatter = C_format.Hex = {
      /**
                                         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
                                         *
                                         * @param {CipherParams} cipherParams The cipher params object.
                                         *
                                         * @return {string} The hexadecimally encoded string.
                                         *
                                         * @static
                                         *
                                         * @example
                                         *
                                         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
                                         */
      stringify: function stringify(cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      },

      /**
          * Converts a hexadecimally encoded ciphertext string to a cipher params object.
          *
          * @param {string} input The hexadecimally encoded string.
          *
          * @return {CipherParams} The cipher params object.
          *
          * @static
          *
          * @example
          *
          *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
          */
      parse: function parse(input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({ ciphertext: ciphertext });
      } };

  })();


  return CryptoJS.format.Hex;

});

/***/ }),
/* 121 */
/*!********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/aes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
      // Compute double table
      var d = [];
      for (var i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      }

      // Walk GF(2^8)
      var x = 0;
      var xi = 0;
      for (var i = 0; i < 256; i++) {
        // Compute sbox
        var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x;

        // Compute multiplication
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];

        // Compute sub bytes, mix columns tables
        var t = d[sx] * 0x101 ^ sx * 0x1010100;
        SUB_MIX_0[x] = t << 24 | t >>> 8;
        SUB_MIX_1[x] = t << 16 | t >>> 16;
        SUB_MIX_2[x] = t << 8 | t >>> 24;
        SUB_MIX_3[x] = t;

        // Compute inv sub bytes, inv mix columns tables
        var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
        INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
        INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
        INV_SUB_MIX_3[sx] = t;

        // Compute next counter
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    })();

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
                                                                                    * AES block cipher algorithm.
                                                                                    */
    var AES = C_algo.AES = BlockCipher.extend({
      _doReset: function _doReset() {
        var t;

        // Skip reset of nRounds has been set before and key did not change
        if (this._nRounds && this._keyPriorReset === this._key) {
          return;
        }

        // Shortcuts
        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;

        // Compute number of rounds
        var nRounds = this._nRounds = keySize + 6;

        // Compute number of key schedule rows
        var ksRows = (nRounds + 1) * 4;

        // Compute key schedule
        var keySchedule = this._keySchedule = [];
        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            t = keySchedule[ksRow - 1];

            if (!(ksRow % keySize)) {
              // Rot word
              t = t << 8 | t >>> 24;

              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];

              // Mix Rcon
              t ^= RCON[ksRow / keySize | 0] << 24;
            } else if (keySize > 6 && ksRow % keySize == 4) {
              // Sub word
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
            }

            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        }

        // Compute inv key schedule
        var invKeySchedule = this._invKeySchedule = [];
        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;

          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }

          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^
            INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
          }
        }
      },

      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
      },

      decryptBlock: function decryptBlock(M, offset) {
        // Swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;

        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

        // Inv swap 2nd and 4th rows
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      },

      _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
        // Shortcut
        var nRounds = this._nRounds;

        // Get input, add round key
        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3];

        // Key schedule row counter
        var ksRow = 4;

        // Rounds
        for (var round = 1; round < nRounds; round++) {
          // Shift rows, sub bytes, mix columns, add round key
          var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
          var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
          var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
          var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

          // Update state
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        }

        // Shift rows, sub bytes, add round key
        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
        var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
        var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
        var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

        // Set output
        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      },

      keySize: 256 / 32 });


    /**
                             * Shortcut functions to the cipher's object interface.
                             *
                             * @example
                             *
                             *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
                             *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
                             */
    C.AES = BlockCipher._createHelper(AES);
  })();


  return CryptoJS.AES;

});

/***/ }),
/* 122 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/tripledes.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Permuted Choice 1 constants
    var PC1 = [
    57, 49, 41, 33, 25, 17, 9, 1,
    58, 50, 42, 34, 26, 18, 10, 2,
    59, 51, 43, 35, 27, 19, 11, 3,
    60, 52, 44, 36, 63, 55, 47, 39,
    31, 23, 15, 7, 62, 54, 46, 38,
    30, 22, 14, 6, 61, 53, 45, 37,
    29, 21, 13, 5, 28, 20, 12, 4];


    // Permuted Choice 2 constants
    var PC2 = [
    14, 17, 11, 24, 1, 5,
    3, 28, 15, 6, 21, 10,
    23, 19, 12, 4, 26, 8,
    16, 7, 27, 20, 13, 2,
    41, 52, 31, 37, 47, 55,
    30, 40, 51, 45, 33, 48,
    44, 49, 39, 56, 34, 53,
    46, 42, 50, 36, 29, 32];


    // Cumulative bit shift constants
    var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    // SBOXes and round permutation constants
    var SBOX_P = [
    {
      0x0: 0x808200,
      0x10000000: 0x8000,
      0x20000000: 0x808002,
      0x30000000: 0x2,
      0x40000000: 0x200,
      0x50000000: 0x808202,
      0x60000000: 0x800202,
      0x70000000: 0x800000,
      0x80000000: 0x202,
      0x90000000: 0x800200,
      0xa0000000: 0x8200,
      0xb0000000: 0x808000,
      0xc0000000: 0x8002,
      0xd0000000: 0x800002,
      0xe0000000: 0x0,
      0xf0000000: 0x8202,
      0x8000000: 0x0,
      0x18000000: 0x808202,
      0x28000000: 0x8202,
      0x38000000: 0x8000,
      0x48000000: 0x808200,
      0x58000000: 0x200,
      0x68000000: 0x808002,
      0x78000000: 0x2,
      0x88000000: 0x800200,
      0x98000000: 0x8200,
      0xa8000000: 0x808000,
      0xb8000000: 0x800202,
      0xc8000000: 0x800002,
      0xd8000000: 0x8002,
      0xe8000000: 0x202,
      0xf8000000: 0x800000,
      0x1: 0x8000,
      0x10000001: 0x2,
      0x20000001: 0x808200,
      0x30000001: 0x800000,
      0x40000001: 0x808002,
      0x50000001: 0x8200,
      0x60000001: 0x200,
      0x70000001: 0x800202,
      0x80000001: 0x808202,
      0x90000001: 0x808000,
      0xa0000001: 0x800002,
      0xb0000001: 0x8202,
      0xc0000001: 0x202,
      0xd0000001: 0x800200,
      0xe0000001: 0x8002,
      0xf0000001: 0x0,
      0x8000001: 0x808202,
      0x18000001: 0x808000,
      0x28000001: 0x800000,
      0x38000001: 0x200,
      0x48000001: 0x8000,
      0x58000001: 0x800002,
      0x68000001: 0x2,
      0x78000001: 0x8202,
      0x88000001: 0x8002,
      0x98000001: 0x800202,
      0xa8000001: 0x202,
      0xb8000001: 0x808200,
      0xc8000001: 0x800200,
      0xd8000001: 0x0,
      0xe8000001: 0x8200,
      0xf8000001: 0x808002 },

    {
      0x0: 0x40084010,
      0x1000000: 0x4000,
      0x2000000: 0x80000,
      0x3000000: 0x40080010,
      0x4000000: 0x40000010,
      0x5000000: 0x40084000,
      0x6000000: 0x40004000,
      0x7000000: 0x10,
      0x8000000: 0x84000,
      0x9000000: 0x40004010,
      0xa000000: 0x40000000,
      0xb000000: 0x84010,
      0xc000000: 0x80010,
      0xd000000: 0x0,
      0xe000000: 0x4010,
      0xf000000: 0x40080000,
      0x800000: 0x40004000,
      0x1800000: 0x84010,
      0x2800000: 0x10,
      0x3800000: 0x40004010,
      0x4800000: 0x40084010,
      0x5800000: 0x40000000,
      0x6800000: 0x80000,
      0x7800000: 0x40080010,
      0x8800000: 0x80010,
      0x9800000: 0x0,
      0xa800000: 0x4000,
      0xb800000: 0x40080000,
      0xc800000: 0x40000010,
      0xd800000: 0x84000,
      0xe800000: 0x40084000,
      0xf800000: 0x4010,
      0x10000000: 0x0,
      0x11000000: 0x40080010,
      0x12000000: 0x40004010,
      0x13000000: 0x40084000,
      0x14000000: 0x40080000,
      0x15000000: 0x10,
      0x16000000: 0x84010,
      0x17000000: 0x4000,
      0x18000000: 0x4010,
      0x19000000: 0x80000,
      0x1a000000: 0x80010,
      0x1b000000: 0x40000010,
      0x1c000000: 0x84000,
      0x1d000000: 0x40004000,
      0x1e000000: 0x40000000,
      0x1f000000: 0x40084010,
      0x10800000: 0x84010,
      0x11800000: 0x80000,
      0x12800000: 0x40080000,
      0x13800000: 0x4000,
      0x14800000: 0x40004000,
      0x15800000: 0x40084010,
      0x16800000: 0x10,
      0x17800000: 0x40000000,
      0x18800000: 0x40084000,
      0x19800000: 0x40000010,
      0x1a800000: 0x40004010,
      0x1b800000: 0x80010,
      0x1c800000: 0x0,
      0x1d800000: 0x4010,
      0x1e800000: 0x40080010,
      0x1f800000: 0x84000 },

    {
      0x0: 0x104,
      0x100000: 0x0,
      0x200000: 0x4000100,
      0x300000: 0x10104,
      0x400000: 0x10004,
      0x500000: 0x4000004,
      0x600000: 0x4010104,
      0x700000: 0x4010000,
      0x800000: 0x4000000,
      0x900000: 0x4010100,
      0xa00000: 0x10100,
      0xb00000: 0x4010004,
      0xc00000: 0x4000104,
      0xd00000: 0x10000,
      0xe00000: 0x4,
      0xf00000: 0x100,
      0x80000: 0x4010100,
      0x180000: 0x4010004,
      0x280000: 0x0,
      0x380000: 0x4000100,
      0x480000: 0x4000004,
      0x580000: 0x10000,
      0x680000: 0x10004,
      0x780000: 0x104,
      0x880000: 0x4,
      0x980000: 0x100,
      0xa80000: 0x4010000,
      0xb80000: 0x10104,
      0xc80000: 0x10100,
      0xd80000: 0x4000104,
      0xe80000: 0x4010104,
      0xf80000: 0x4000000,
      0x1000000: 0x4010100,
      0x1100000: 0x10004,
      0x1200000: 0x10000,
      0x1300000: 0x4000100,
      0x1400000: 0x100,
      0x1500000: 0x4010104,
      0x1600000: 0x4000004,
      0x1700000: 0x0,
      0x1800000: 0x4000104,
      0x1900000: 0x4000000,
      0x1a00000: 0x4,
      0x1b00000: 0x10100,
      0x1c00000: 0x4010000,
      0x1d00000: 0x104,
      0x1e00000: 0x10104,
      0x1f00000: 0x4010004,
      0x1080000: 0x4000000,
      0x1180000: 0x104,
      0x1280000: 0x4010100,
      0x1380000: 0x0,
      0x1480000: 0x10004,
      0x1580000: 0x4000100,
      0x1680000: 0x100,
      0x1780000: 0x4010004,
      0x1880000: 0x10000,
      0x1980000: 0x4010104,
      0x1a80000: 0x10104,
      0x1b80000: 0x4000004,
      0x1c80000: 0x4000104,
      0x1d80000: 0x4010000,
      0x1e80000: 0x4,
      0x1f80000: 0x10100 },

    {
      0x0: 0x80401000,
      0x10000: 0x80001040,
      0x20000: 0x401040,
      0x30000: 0x80400000,
      0x40000: 0x0,
      0x50000: 0x401000,
      0x60000: 0x80000040,
      0x70000: 0x400040,
      0x80000: 0x80000000,
      0x90000: 0x400000,
      0xa0000: 0x40,
      0xb0000: 0x80001000,
      0xc0000: 0x80400040,
      0xd0000: 0x1040,
      0xe0000: 0x1000,
      0xf0000: 0x80401040,
      0x8000: 0x80001040,
      0x18000: 0x40,
      0x28000: 0x80400040,
      0x38000: 0x80001000,
      0x48000: 0x401000,
      0x58000: 0x80401040,
      0x68000: 0x0,
      0x78000: 0x80400000,
      0x88000: 0x1000,
      0x98000: 0x80401000,
      0xa8000: 0x400000,
      0xb8000: 0x1040,
      0xc8000: 0x80000000,
      0xd8000: 0x400040,
      0xe8000: 0x401040,
      0xf8000: 0x80000040,
      0x100000: 0x400040,
      0x110000: 0x401000,
      0x120000: 0x80000040,
      0x130000: 0x0,
      0x140000: 0x1040,
      0x150000: 0x80400040,
      0x160000: 0x80401000,
      0x170000: 0x80001040,
      0x180000: 0x80401040,
      0x190000: 0x80000000,
      0x1a0000: 0x80400000,
      0x1b0000: 0x401040,
      0x1c0000: 0x80001000,
      0x1d0000: 0x400000,
      0x1e0000: 0x40,
      0x1f0000: 0x1000,
      0x108000: 0x80400000,
      0x118000: 0x80401040,
      0x128000: 0x0,
      0x138000: 0x401000,
      0x148000: 0x400040,
      0x158000: 0x80000000,
      0x168000: 0x80001040,
      0x178000: 0x40,
      0x188000: 0x80000040,
      0x198000: 0x1000,
      0x1a8000: 0x80001000,
      0x1b8000: 0x80400040,
      0x1c8000: 0x1040,
      0x1d8000: 0x80401000,
      0x1e8000: 0x400000,
      0x1f8000: 0x401040 },

    {
      0x0: 0x80,
      0x1000: 0x1040000,
      0x2000: 0x40000,
      0x3000: 0x20000000,
      0x4000: 0x20040080,
      0x5000: 0x1000080,
      0x6000: 0x21000080,
      0x7000: 0x40080,
      0x8000: 0x1000000,
      0x9000: 0x20040000,
      0xa000: 0x20000080,
      0xb000: 0x21040080,
      0xc000: 0x21040000,
      0xd000: 0x0,
      0xe000: 0x1040080,
      0xf000: 0x21000000,
      0x800: 0x1040080,
      0x1800: 0x21000080,
      0x2800: 0x80,
      0x3800: 0x1040000,
      0x4800: 0x40000,
      0x5800: 0x20040080,
      0x6800: 0x21040000,
      0x7800: 0x20000000,
      0x8800: 0x20040000,
      0x9800: 0x0,
      0xa800: 0x21040080,
      0xb800: 0x1000080,
      0xc800: 0x20000080,
      0xd800: 0x21000000,
      0xe800: 0x1000000,
      0xf800: 0x40080,
      0x10000: 0x40000,
      0x11000: 0x80,
      0x12000: 0x20000000,
      0x13000: 0x21000080,
      0x14000: 0x1000080,
      0x15000: 0x21040000,
      0x16000: 0x20040080,
      0x17000: 0x1000000,
      0x18000: 0x21040080,
      0x19000: 0x21000000,
      0x1a000: 0x1040000,
      0x1b000: 0x20040000,
      0x1c000: 0x40080,
      0x1d000: 0x20000080,
      0x1e000: 0x0,
      0x1f000: 0x1040080,
      0x10800: 0x21000080,
      0x11800: 0x1000000,
      0x12800: 0x1040000,
      0x13800: 0x20040080,
      0x14800: 0x20000000,
      0x15800: 0x1040080,
      0x16800: 0x80,
      0x17800: 0x21040000,
      0x18800: 0x40080,
      0x19800: 0x21040080,
      0x1a800: 0x0,
      0x1b800: 0x21000000,
      0x1c800: 0x1000080,
      0x1d800: 0x40000,
      0x1e800: 0x20040000,
      0x1f800: 0x20000080 },

    {
      0x0: 0x10000008,
      0x100: 0x2000,
      0x200: 0x10200000,
      0x300: 0x10202008,
      0x400: 0x10002000,
      0x500: 0x200000,
      0x600: 0x200008,
      0x700: 0x10000000,
      0x800: 0x0,
      0x900: 0x10002008,
      0xa00: 0x202000,
      0xb00: 0x8,
      0xc00: 0x10200008,
      0xd00: 0x202008,
      0xe00: 0x2008,
      0xf00: 0x10202000,
      0x80: 0x10200000,
      0x180: 0x10202008,
      0x280: 0x8,
      0x380: 0x200000,
      0x480: 0x202008,
      0x580: 0x10000008,
      0x680: 0x10002000,
      0x780: 0x2008,
      0x880: 0x200008,
      0x980: 0x2000,
      0xa80: 0x10002008,
      0xb80: 0x10200008,
      0xc80: 0x0,
      0xd80: 0x10202000,
      0xe80: 0x202000,
      0xf80: 0x10000000,
      0x1000: 0x10002000,
      0x1100: 0x10200008,
      0x1200: 0x10202008,
      0x1300: 0x2008,
      0x1400: 0x200000,
      0x1500: 0x10000000,
      0x1600: 0x10000008,
      0x1700: 0x202000,
      0x1800: 0x202008,
      0x1900: 0x0,
      0x1a00: 0x8,
      0x1b00: 0x10200000,
      0x1c00: 0x2000,
      0x1d00: 0x10002008,
      0x1e00: 0x10202000,
      0x1f00: 0x200008,
      0x1080: 0x8,
      0x1180: 0x202000,
      0x1280: 0x200000,
      0x1380: 0x10000008,
      0x1480: 0x10002000,
      0x1580: 0x2008,
      0x1680: 0x10202008,
      0x1780: 0x10200000,
      0x1880: 0x10202000,
      0x1980: 0x10200008,
      0x1a80: 0x2000,
      0x1b80: 0x202008,
      0x1c80: 0x200008,
      0x1d80: 0x0,
      0x1e80: 0x10000000,
      0x1f80: 0x10002008 },

    {
      0x0: 0x100000,
      0x10: 0x2000401,
      0x20: 0x400,
      0x30: 0x100401,
      0x40: 0x2100401,
      0x50: 0x0,
      0x60: 0x1,
      0x70: 0x2100001,
      0x80: 0x2000400,
      0x90: 0x100001,
      0xa0: 0x2000001,
      0xb0: 0x2100400,
      0xc0: 0x2100000,
      0xd0: 0x401,
      0xe0: 0x100400,
      0xf0: 0x2000000,
      0x8: 0x2100001,
      0x18: 0x0,
      0x28: 0x2000401,
      0x38: 0x2100400,
      0x48: 0x100000,
      0x58: 0x2000001,
      0x68: 0x2000000,
      0x78: 0x401,
      0x88: 0x100401,
      0x98: 0x2000400,
      0xa8: 0x2100000,
      0xb8: 0x100001,
      0xc8: 0x400,
      0xd8: 0x2100401,
      0xe8: 0x1,
      0xf8: 0x100400,
      0x100: 0x2000000,
      0x110: 0x100000,
      0x120: 0x2000401,
      0x130: 0x2100001,
      0x140: 0x100001,
      0x150: 0x2000400,
      0x160: 0x2100400,
      0x170: 0x100401,
      0x180: 0x401,
      0x190: 0x2100401,
      0x1a0: 0x100400,
      0x1b0: 0x1,
      0x1c0: 0x0,
      0x1d0: 0x2100000,
      0x1e0: 0x2000001,
      0x1f0: 0x400,
      0x108: 0x100400,
      0x118: 0x2000401,
      0x128: 0x2100001,
      0x138: 0x1,
      0x148: 0x2000000,
      0x158: 0x100000,
      0x168: 0x401,
      0x178: 0x2100400,
      0x188: 0x2000001,
      0x198: 0x2100000,
      0x1a8: 0x0,
      0x1b8: 0x2100401,
      0x1c8: 0x100401,
      0x1d8: 0x400,
      0x1e8: 0x2000400,
      0x1f8: 0x100001 },

    {
      0x0: 0x8000820,
      0x1: 0x20000,
      0x2: 0x8000000,
      0x3: 0x20,
      0x4: 0x20020,
      0x5: 0x8020820,
      0x6: 0x8020800,
      0x7: 0x800,
      0x8: 0x8020000,
      0x9: 0x8000800,
      0xa: 0x20800,
      0xb: 0x8020020,
      0xc: 0x820,
      0xd: 0x0,
      0xe: 0x8000020,
      0xf: 0x20820,
      0x80000000: 0x800,
      0x80000001: 0x8020820,
      0x80000002: 0x8000820,
      0x80000003: 0x8000000,
      0x80000004: 0x8020000,
      0x80000005: 0x20800,
      0x80000006: 0x20820,
      0x80000007: 0x20,
      0x80000008: 0x8000020,
      0x80000009: 0x820,
      0x8000000a: 0x20020,
      0x8000000b: 0x8020800,
      0x8000000c: 0x0,
      0x8000000d: 0x8020020,
      0x8000000e: 0x8000800,
      0x8000000f: 0x20000,
      0x10: 0x20820,
      0x11: 0x8020800,
      0x12: 0x20,
      0x13: 0x800,
      0x14: 0x8000800,
      0x15: 0x8000020,
      0x16: 0x8020020,
      0x17: 0x20000,
      0x18: 0x0,
      0x19: 0x20020,
      0x1a: 0x8020000,
      0x1b: 0x8000820,
      0x1c: 0x8020820,
      0x1d: 0x20800,
      0x1e: 0x820,
      0x1f: 0x8000000,
      0x80000010: 0x20000,
      0x80000011: 0x800,
      0x80000012: 0x8020020,
      0x80000013: 0x20820,
      0x80000014: 0x20,
      0x80000015: 0x8020000,
      0x80000016: 0x8000000,
      0x80000017: 0x8000820,
      0x80000018: 0x8020820,
      0x80000019: 0x8000020,
      0x8000001a: 0x8000800,
      0x8000001b: 0x0,
      0x8000001c: 0x20800,
      0x8000001d: 0x820,
      0x8000001e: 0x20020,
      0x8000001f: 0x8020800 }];



    // Masks that select the SBOX input
    var SBOX_MASK = [
    0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
    0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];


    /**
                                                      * DES block cipher algorithm.
                                                      */
    var DES = C_algo.DES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;

        // Select 56 bits according to PC1
        var keyBits = [];
        for (var i = 0; i < 56; i++) {
          var keyBitPos = PC1[i] - 1;
          keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
        }

        // Assemble 16 subkeys
        var subKeys = this._subKeys = [];
        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
          // Create subkey
          var subKey = subKeys[nSubKey] = [];

          // Shortcut
          var bitShift = BIT_SHIFTS[nSubKey];

          // Select 48 bits according to PC2
          for (var i = 0; i < 24; i++) {
            // Select from the left 28 key bits
            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;

            // Select from the right 28 key bits
            subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
          }

          // Since each subkey is applied to an expanded 32-bit input,
          // the subkey can be broken into 8 values scaled to 32-bits,
          // which allows the key to be used without expansion
          subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
          for (var i = 1; i < 7; i++) {
            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
          }
          subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
        }

        // Compute inverse subkeys
        var invSubKeys = this._invSubKeys = [];
        for (var i = 0; i < 16; i++) {
          invSubKeys[i] = subKeys[15 - i];
        }
      },

      encryptBlock: function encryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._subKeys);
      },

      decryptBlock: function decryptBlock(M, offset) {
        this._doCryptBlock(M, offset, this._invSubKeys);
      },

      _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
        // Get input
        this._lBlock = M[offset];
        this._rBlock = M[offset + 1];

        // Initial permutation
        exchangeLR.call(this, 4, 0x0f0f0f0f);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeLR.call(this, 1, 0x55555555);

        // Rounds
        for (var round = 0; round < 16; round++) {
          // Shortcuts
          var subKey = subKeys[round];
          var lBlock = this._lBlock;
          var rBlock = this._rBlock;

          // Feistel function
          var f = 0;
          for (var i = 0; i < 8; i++) {
            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
          }
          this._lBlock = rBlock;
          this._rBlock = lBlock ^ f;
        }

        // Undo swap from last round
        var t = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = t;

        // Final permutation
        exchangeLR.call(this, 1, 0x55555555);
        exchangeRL.call(this, 8, 0x00ff00ff);
        exchangeRL.call(this, 2, 0x33333333);
        exchangeLR.call(this, 16, 0x0000ffff);
        exchangeLR.call(this, 4, 0x0f0f0f0f);

        // Set output
        M[offset] = this._lBlock;
        M[offset + 1] = this._rBlock;
      },

      keySize: 64 / 32,

      ivSize: 64 / 32,

      blockSize: 64 / 32 });


    // Swap bits across the left and right words
    function exchangeLR(offset, mask) {
      var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
      this._rBlock ^= t;
      this._lBlock ^= t << offset;
    }

    function exchangeRL(offset, mask) {
      var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
      this._lBlock ^= t;
      this._rBlock ^= t << offset;
    }

    /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
       */
    C.DES = BlockCipher._createHelper(DES);

    /**
                                             * Triple-DES block cipher algorithm.
                                             */
    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        // Make sure the key length is valid (64, 128 or >= 192 bit)
        if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
          throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
        }

        // Extend the key according to the keying options defined in 3DES standard
        var key1 = keyWords.slice(0, 2);
        var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
        var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

        // Create DES instances
        this._des1 = DES.createEncryptor(WordArray.create(key1));
        this._des2 = DES.createEncryptor(WordArray.create(key2));
        this._des3 = DES.createEncryptor(WordArray.create(key3));
      },

      encryptBlock: function encryptBlock(M, offset) {
        this._des1.encryptBlock(M, offset);
        this._des2.decryptBlock(M, offset);
        this._des3.encryptBlock(M, offset);
      },

      decryptBlock: function decryptBlock(M, offset) {
        this._des3.decryptBlock(M, offset);
        this._des2.encryptBlock(M, offset);
        this._des1.decryptBlock(M, offset);
      },

      keySize: 192 / 32,

      ivSize: 64 / 32,

      blockSize: 64 / 32 });


    /**
                              * Shortcut functions to the cipher's object interface.
                              *
                              * @example
                              *
                              *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
                              *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
                              */
    C.TripleDES = BlockCipher._createHelper(TripleDES);
  })();


  return CryptoJS.TripleDES;

});

/***/ }),
/* 123 */
/*!********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/rc4.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    /**
                          * RC4 stream cipher algorithm.
                          */
    var RC4 = C_algo.RC4 = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var key = this._key;
        var keyWords = key.words;
        var keySigBytes = key.sigBytes;

        // Init sbox
        var S = this._S = [];
        for (var i = 0; i < 256; i++) {
          S[i] = i;
        }

        // Key setup
        for (var i = 0, j = 0; i < 256; i++) {
          var keyByteIndex = i % keySigBytes;
          var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;

          j = (j + S[i] + keyByte) % 256;

          // Swap
          var t = S[i];
          S[i] = S[j];
          S[j] = t;
        }

        // Counters
        this._i = this._j = 0;
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        M[offset] ^= generateKeystreamWord.call(this);
      },

      keySize: 256 / 32,

      ivSize: 0 });


    function generateKeystreamWord() {
      // Shortcuts
      var S = this._S;
      var i = this._i;
      var j = this._j;

      // Generate keystream word
      var keystreamWord = 0;
      for (var n = 0; n < 4; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;

        // Swap
        var t = S[i];
        S[i] = S[j];
        S[j] = t;

        keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
      }

      // Update counters
      this._i = i;
      this._j = j;

      return keystreamWord;
    }

    /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
       */
    C.RC4 = StreamCipher._createHelper(RC4);

    /**
                                              * Modified RC4 stream cipher algorithm.
                                              */
    var RC4Drop = C_algo.RC4Drop = RC4.extend({
      /**
                                                 * Configuration options.
                                                 *
                                                 * @property {number} drop The number of keystream words to drop. Default 192
                                                 */
      cfg: RC4.cfg.extend({
        drop: 192 }),


      _doReset: function _doReset() {
        RC4._doReset.call(this);

        // Drop
        for (var i = this.cfg.drop; i > 0; i--) {
          generateKeystreamWord.call(this);
        }
      } });


    /**
             * Shortcut functions to the cipher's object interface.
             *
             * @example
             *
             *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
             *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
             */
    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
  })();


  return CryptoJS.RC4;

});

/***/ }),
/* 124 */
/*!***********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/rabbit.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
                 * Rabbit stream cipher algorithm
                 */
    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Swap endian
        for (var i = 0; i < 4; i++) {
          K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff |
          (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
        }

        // Generate initial state values
        var X = this._X = [
        K[0], K[3] << 16 | K[2] >>> 16,
        K[1], K[0] << 16 | K[3] >>> 16,
        K[2], K[1] << 16 | K[0] >>> 16,
        K[3], K[2] << 16 | K[1] >>> 16];


        // Generate initial counter values
        var C = this._C = [
        K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff,
        K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff,
        K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff,
        K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];


        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff |
          (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },

      blockSize: 128 / 32,

      ivSize: 64 / 32 });


    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
       */
    C.Rabbit = StreamCipher._createHelper(Rabbit);
  })();


  return CryptoJS.Rabbit;

});

/***/ }),
/* 125 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/crypto-js/rabbit-legacy.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
  if (true) {
    // CommonJS
    module.exports = exports = factory(__webpack_require__(/*! ./core */ 91), __webpack_require__(/*! ./enc-base64 */ 96), __webpack_require__(/*! ./md5 */ 98), __webpack_require__(/*! ./evpkdf */ 108), __webpack_require__(/*! ./cipher-core */ 109));
  } else
  {}
})(this, function (CryptoJS) {

  (function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var StreamCipher = C_lib.StreamCipher;
    var C_algo = C.algo;

    // Reusable objects
    var S = [];
    var C_ = [];
    var G = [];

    /**
                 * Rabbit stream cipher algorithm.
                 *
                 * This is a legacy version that neglected to convert the key to little-endian.
                 * This error doesn't affect the cipher's security,
                 * but it does affect its compatibility with other implementations.
                 */
    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
      _doReset: function _doReset() {
        // Shortcuts
        var K = this._key.words;
        var iv = this.cfg.iv;

        // Generate initial state values
        var X = this._X = [
        K[0], K[3] << 16 | K[2] >>> 16,
        K[1], K[0] << 16 | K[3] >>> 16,
        K[2], K[1] << 16 | K[0] >>> 16,
        K[3], K[2] << 16 | K[1] >>> 16];


        // Generate initial counter values
        var C = this._C = [
        K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff,
        K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff,
        K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff,
        K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];


        // Carry bit
        this._b = 0;

        // Iterate the system four times
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }

        // Modify the counters
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }

        // IV setup
        if (iv) {
          // Shortcuts
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];

          // Generate four subvectors
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
          var i1 = i0 >>> 16 | i2 & 0xffff0000;
          var i3 = i2 << 16 | i0 & 0x0000ffff;

          // Modify counter values
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;

          // Iterate the system four times
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      },

      _doProcessBlock: function _doProcessBlock(M, offset) {
        // Shortcut
        var X = this._X;

        // Iterate the system
        nextState.call(this);

        // Generate four keystream words
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

        for (var i = 0; i < 4; i++) {
          // Swap endian
          S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff |
          (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

          // Encrypt
          M[offset + i] ^= S[i];
        }
      },

      blockSize: 128 / 32,

      ivSize: 64 / 32 });


    function nextState() {
      // Shortcuts
      var X = this._X;
      var C = this._C;

      // Save old counter values
      for (var i = 0; i < 8; i++) {
        C_[i] = C[i];
      }

      // Calculate new counter values
      C[0] = C[0] + 0x4d34d34d + this._b | 0;
      C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
      C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
      C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
      C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
      C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
      C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
      C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
      this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var i = 0; i < 8; i++) {
        var gx = X[i] + C[i];

        // Construct high and low argument for squaring
        var ga = gx & 0xffff;
        var gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
        var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

        // High XOR low
        G[i] = gh ^ gl;
      }

      // Calculate new state values
      X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
      X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
      X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
      X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
      X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
      X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
      X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
      X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
    }

    /**
       * Shortcut functions to the cipher's object interface.
       *
       * @example
       *
       *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
       *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
       */
    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  })();


  return CryptoJS.RabbitLegacy;

});

/***/ }),
/* 126 */
/*!*********************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/checkLogin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.checkLogin = checkLogin;
// 检查是否登录，未登录就跳转
function checkLogin(dontNeedGoto) {
  var token = uni.getStorageSync("loginToken");
  if (token) {
    return true;
  } else {
    if (!dontNeedGoto) {
      uni.navigateTo({
        url: '/pages/self/login' });

      return false;
    } else {
      return false;
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/*!*************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/async-validator/dist-web/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true } });


    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"VUE_APP_NAME":"吃小猪","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;}

    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField };

  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
    *  Rule for validating whitespace.
    *
    *  @param rule The validation rule.
    *  @param value The value of the field on the source object.
    *  @param source The source object being validated.
    *  @param errors An array of errors that this rule may add
    *  validation errors to.
    *  @param options The validation options.
    *  @param options.messages The validation messages.
    */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i };

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(pattern$2.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  } };


var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1 };


var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any };


function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid' },

    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s' },

    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters' },

    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s' },

    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length' },

    pattern: {
      mismatch: '%s value %s does not match pattern %s' },

    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    } };

}
var messages = newMessages();

/**
                               *  Encapsulates a validation schema.
                               *
                               *  @param descriptor An object declaring validation rules
                               *  for this schema.
                               */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule };

        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z });

      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key] });

      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();exports.default = Schema;

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../HBuilderX.2.9.8.20201110.full/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 52)))

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/*!*************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/request/upload.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getUploadToken = getUploadToken;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));

var _api = __webpack_require__(/*! ../api.js */ 88);
var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var qiniu = __webpack_require__(/*! qiniu-js */ 191);

// 获取上传 token
function getUploadToken() {return _getUploadToken.apply(this, arguments);}





// 执行上传
function _getUploadToken() {_getUploadToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$axios$get, res, token;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return _request.default.get(_api.photoTokenUrl);case 2:_yield$axios$get = _context.sent;res = _yield$axios$get.data;token = res.data.uptoken;return _context.abrupt("return", token);case 6:case "end":return _context.stop();}}}, _callee);}));return _getUploadToken.apply(this, arguments);}function upLoadPhoto(_x, _x2, _x3) {return _upLoadPhoto.apply(this, arguments);}function _upLoadPhoto() {_upLoadPhoto = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(img, token, key) {var options, observer, observable;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

            options = {
              quality: 0.80,
              noCompressIfLarger: true };


            observer = {
              error: function error(err) {

              },
              complete: function complete(res) {

              } };_context2.next = 4;return (


              qiniu.compressImage(img, options));case 4:data = _context2.sent;
            observable = qiniu.upload(data.dist, key, token);case 6:case "end":return _context2.stop();}}}, _callee2);}));return _upLoadPhoto.apply(this, arguments);}

/***/ }),
/* 191 */
/*!*************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "QiniuErrorName", { enumerable: true, get: function get() {return _errors.QiniuErrorName;} });Object.defineProperty(exports, "QiniuError", { enumerable: true, get: function get() {return _errors.QiniuError;} });Object.defineProperty(exports, "QiniuRequestError", { enumerable: true, get: function get() {return _errors.QiniuRequestError;} });Object.defineProperty(exports, "QiniuNetworkError", { enumerable: true, get: function get() {return _errors.QiniuNetworkError;} });Object.defineProperty(exports, "imageMogr2", { enumerable: true, get: function get() {return _image.imageMogr2;} });Object.defineProperty(exports, "watermark", { enumerable: true, get: function get() {return _image.watermark;} });Object.defineProperty(exports, "imageInfo", { enumerable: true, get: function get() {return _image.imageInfo;} });Object.defineProperty(exports, "exif", { enumerable: true, get: function get() {return _image.exif;} });Object.defineProperty(exports, "pipeline", { enumerable: true, get: function get() {return _image.pipeline;} });Object.defineProperty(exports, "deleteUploadedChunks", { enumerable: true, get: function get() {return _api.deleteUploadedChunks;} });Object.defineProperty(exports, "getUploadUrl", { enumerable: true, get: function get() {return _api.getUploadUrl;} });Object.defineProperty(exports, "upload", { enumerable: true, get: function get() {return _upload.default;} });Object.defineProperty(exports, "region", { enumerable: true, get: function get() {return _config.region;} });Object.defineProperty(exports, "compressImage", { enumerable: true, get: function get() {return _utils.compressImage;} });Object.defineProperty(exports, "urlSafeBase64Encode", { enumerable: true, get: function get() {return _utils.urlSafeBase64Encode;} });Object.defineProperty(exports, "urlSafeBase64Decode", { enumerable: true, get: function get() {return _utils.urlSafeBase64Decode;} });Object.defineProperty(exports, "getHeadersForMkFile", { enumerable: true, get: function get() {return _utils.getHeadersForMkFile;} });Object.defineProperty(exports, "getHeadersForChunkUpload", { enumerable: true, get: function get() {return _utils.getHeadersForChunkUpload;} });var _errors = __webpack_require__(/*! ./errors */ 192);
var _image = __webpack_require__(/*! ./image */ 193);
var _api = __webpack_require__(/*! ./api */ 205);
var _upload = _interopRequireDefault(__webpack_require__(/*! ./upload */ 203));
var _config = __webpack_require__(/*! ./config */ 201);
var _utils = __webpack_require__(/*! ./utils */ 194);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 192 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/errors/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.QiniuNetworkError = exports.QiniuRequestError = exports.QiniuError = exports.QiniuErrorName = void 0;var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
    function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};
    return _extendStatics(d, b);
  };
  return function (d, b) {
    _extendStatics(d, b);
    function __() {this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var QiniuErrorName;exports.QiniuErrorName = QiniuErrorName;
(function (QiniuErrorName) {
  // 输入错误
  QiniuErrorName["InvalidFile"] = "InvalidFile";
  QiniuErrorName["InvalidToken"] = "InvalidToken";
  QiniuErrorName["InvalidMetadata"] = "InvalidMetadata";
  QiniuErrorName["InvalidChunkSize"] = "InvalidChunkSize";
  QiniuErrorName["InvalidCustomVars"] = "InvalidCustomVars";
  QiniuErrorName["NotAvailableUploadHost"] = "NotAvailableUploadHost";
  // 缓存相关
  QiniuErrorName["ReadCacheFailed"] = "ReadCacheFailed";
  QiniuErrorName["InvalidCacheData"] = "InvalidCacheData";
  QiniuErrorName["WriteCacheFailed"] = "WriteCacheFailed";
  QiniuErrorName["RemoveCacheFailed"] = "RemoveCacheFailed";
  // 图片压缩模块相关
  QiniuErrorName["GetCanvasContextFailed"] = "GetCanvasContextFailed";
  QiniuErrorName["UnsupportedFileType"] = "UnsupportedFileType";
  // 运行环境相关
  QiniuErrorName["FileReaderReadFailed"] = "FileReaderReadFailed";
  QiniuErrorName["NotAvailableXMLHttpRequest"] = "NotAvailableXMLHttpRequest";
  QiniuErrorName["InvalidProgressEventTarget"] = "InvalidProgressEventTarget";
  // 请求错误
  QiniuErrorName["RequestError"] = "RequestError";
})(QiniuErrorName || (exports.QiniuErrorName = QiniuErrorName = {}));
var QiniuError = /** @class */function () {
  function QiniuError(name, message) {
    this.name = name;
    this.message = message;
    this.stack = new Error().stack;
  }
  return QiniuError;
}();exports.QiniuError = QiniuError;

var QiniuRequestError = /** @class */function (_super) {
  __extends(QiniuRequestError, _super);
  function QiniuRequestError(code, reqId, message, data) {
    var _this = _super.call(this, QiniuErrorName.RequestError, message) || this;
    _this.code = code;
    _this.reqId = reqId;
    /**
                          * @description 标记当前的 error 类型是一个 QiniuRequestError
                          * @deprecated 下一个大版本将会移除，不推荐使用，推荐直接使用 instanceof 进行判断
                          */
    _this.isRequestError = true;
    _this.data = data;
    return _this;
  }
  return QiniuRequestError;
}(QiniuError);exports.QiniuRequestError = QiniuRequestError;

/**
                                                              * @description 由于跨域、证书错误、断网、host 解析失败、系统拦截等原因导致的错误
                                                              */
var QiniuNetworkError = /** @class */function (_super) {
  __extends(QiniuNetworkError, _super);
  function QiniuNetworkError(message, reqId) {
    if (reqId === void 0) {reqId = '';}
    return _super.call(this, 0, reqId, message) || this;
  }
  return QiniuNetworkError;
}(QiniuRequestError);exports.QiniuNetworkError = QiniuNetworkError;

/***/ }),
/* 193 */
/*!*******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/image/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.imageView2 = imageView2;exports.imageMogr2 = imageMogr2;exports.watermark = watermark;exports.imageInfo = imageInfo;exports.exif = exif;exports.pipeline = pipeline;var _utils = __webpack_require__(/*! ../utils */ 194);
function getImageUrl(key, domain) {
  key = encodeURIComponent(key);
  if (domain.slice(domain.length - 1) !== '/') {
    domain += '/';
  }
  return domain + key;
}
function imageView2(op, key, domain) {
  if (!/^\d$/.test(String(op.mode))) {
    throw 'mode should be number in imageView2';
  }
  var mode = op.mode,w = op.w,h = op.h,q = op.q,format = op.format;
  if (!w && !h) {
    throw 'param w and h is empty in imageView2';
  }
  var imageUrl = 'imageView2/' + encodeURIComponent(mode);
  imageUrl += w ? '/w/' + encodeURIComponent(w) : '';
  imageUrl += h ? '/h/' + encodeURIComponent(h) : '';
  imageUrl += q ? '/q/' + encodeURIComponent(q) : '';
  imageUrl += format ? '/format/' + encodeURIComponent(format) : '';
  if (key && domain) {
    imageUrl = getImageUrl(key, domain) + '?' + imageUrl;
  }
  return imageUrl;
}
// invoke the imageMogr2 api of Qiniu
function imageMogr2(op, key, domain) {
  var autoOrient = op['auto-orient'];
  var thumbnail = op.thumbnail,strip = op.strip,gravity = op.gravity,crop = op.crop,quality = op.quality,rotate = op.rotate,format = op.format,blur = op.blur;
  var imageUrl = 'imageMogr2';
  imageUrl += autoOrient ? '/auto-orient' : '';
  imageUrl += thumbnail ? '/thumbnail/' + encodeURIComponent(thumbnail) : '';
  imageUrl += strip ? '/strip' : '';
  imageUrl += gravity ? '/gravity/' + encodeURIComponent(gravity) : '';
  imageUrl += quality ? '/quality/' + encodeURIComponent(quality) : '';
  imageUrl += crop ? '/crop/' + encodeURIComponent(crop) : '';
  imageUrl += rotate ? '/rotate/' + encodeURIComponent(rotate) : '';
  imageUrl += format ? '/format/' + encodeURIComponent(format) : '';
  imageUrl += blur ? '/blur/' + encodeURIComponent(blur) : '';
  if (key && domain) {
    imageUrl = getImageUrl(key, domain) + '?' + imageUrl;
  }
  return imageUrl;
}
// invoke the watermark api of Qiniu
function watermark(op, key, domain) {
  var mode = op.mode;
  if (!mode) {
    throw "mode can't be empty in watermark";
  }
  var imageUrl = 'watermark/' + mode;
  if (mode !== 1 && mode !== 2) {
    throw 'mode is wrong';
  }
  if (mode === 1) {
    var image = op.image;
    if (!image) {
      throw "image can't be empty in watermark";
    }
    imageUrl += image ? '/image/' + (0, _utils.urlSafeBase64Encode)(image) : '';
  }
  if (mode === 2) {
    var text = op.text,font = op.font,fontsize = op.fontsize,fill = op.fill;
    if (!text) {
      throw "text can't be empty in watermark";
    }
    imageUrl += text ? '/text/' + (0, _utils.urlSafeBase64Encode)(text) : '';
    imageUrl += font ? '/font/' + (0, _utils.urlSafeBase64Encode)(font) : '';
    imageUrl += fontsize ? '/fontsize/' + fontsize : '';
    imageUrl += fill ? '/fill/' + (0, _utils.urlSafeBase64Encode)(fill) : '';
  }
  var dissolve = op.dissolve,gravity = op.gravity,dx = op.dx,dy = op.dy;
  imageUrl += dissolve ? '/dissolve/' + encodeURIComponent(dissolve) : '';
  imageUrl += gravity ? '/gravity/' + encodeURIComponent(gravity) : '';
  imageUrl += dx ? '/dx/' + encodeURIComponent(dx) : '';
  imageUrl += dy ? '/dy/' + encodeURIComponent(dy) : '';
  if (key && domain) {
    imageUrl = getImageUrl(key, domain) + '?' + imageUrl;
  }
  return imageUrl;
}
// invoke the imageInfo api of Qiniu
function imageInfo(key, domain) {
  var url = getImageUrl(key, domain) + '?imageInfo';
  return (0, _utils.request)(url, { method: 'GET' });
}
// invoke the exif api of Qiniu
function exif(key, domain) {
  var url = getImageUrl(key, domain) + '?exif';
  return (0, _utils.request)(url, { method: 'GET' });
}
function pipeline(arr, key, domain) {
  var isArray = Object.prototype.toString.call(arr) === '[object Array]';
  var option;
  var errOp = false;
  var imageUrl = '';
  if (isArray) {
    for (var i = 0, len = arr.length; i < len; i++) {
      option = arr[i];
      if (!option.fop) {
        throw "fop can't be empty in pipeline";
      }
      switch (option.fop) {
        case 'watermark':
          imageUrl += watermark(option) + '|';
          break;
        case 'imageView2':
          imageUrl += imageView2(option) + '|';
          break;
        case 'imageMogr2':
          imageUrl += imageMogr2(option) + '|';
          break;
        default:
          errOp = true;
          break;}

      if (errOp) {
        throw 'fop is wrong in pipeline';
      }
    }
    if (key && domain) {
      imageUrl = getImageUrl(key, domain) + '?' + imageUrl;
      var length_1 = imageUrl.length;
      if (imageUrl.slice(length_1 - 1) === '|') {
        imageUrl = imageUrl.slice(0, length_1 - 1);
      }
    }
    return imageUrl;
  }
  throw "pipeline's first param should be array";
}

/***/ }),
/* 194 */
/*!*******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { compressImage: true };Object.defineProperty(exports, "compressImage", { enumerable: true, get: function get() {return _compress.default;} });var _pool = __webpack_require__(/*! ./pool */ 195);Object.keys(_pool).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _pool[key];} });});
var _observable = __webpack_require__(/*! ./observable */ 196);Object.keys(_observable).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _observable[key];} });});
var _base = __webpack_require__(/*! ./base64 */ 197);Object.keys(_base).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _base[key];} });});
var _helper = __webpack_require__(/*! ./helper */ 198);Object.keys(_helper).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _helper[key];} });});
var _config = __webpack_require__(/*! ./config */ 200);Object.keys(_config).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _config[key];} });});
var _compress = _interopRequireDefault(__webpack_require__(/*! ./compress */ 215));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/***/ }),
/* 195 */
/*!******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/pool.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Pool = void 0;var Pool = /** @class */function () {
  function Pool(runTask, limit) {
    this.runTask = runTask;
    this.limit = limit;
    this.queue = [];
    this.processing = [];
  }
  Pool.prototype.enqueue = function (task) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.queue.push({
        task: task,
        resolve: resolve,
        reject: reject });

      _this.check();
    });
  };
  Pool.prototype.run = function (item) {
    var _this = this;
    this.queue = this.queue.filter(function (v) {return v !== item;});
    this.processing.push(item);
    this.runTask(item.task).then(function () {
      _this.processing = _this.processing.filter(function (v) {return v !== item;});
      item.resolve();
      _this.check();
    }, function (err) {return item.reject(err);});
  };
  Pool.prototype.check = function () {
    var _this = this;
    var processingNum = this.processing.length;
    var availableNum = this.limit - processingNum;
    this.queue.slice(0, availableNum).forEach(function (item) {
      _this.run(item);
    });
  };
  return Pool;
}();exports.Pool = Pool;

/***/ }),
/* 196 */
/*!************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/observable.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Observable = exports.Subscriber = void 0;var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
    function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};
    return _extendStatics(d, b);
  };
  return function (d, b) {
    _extendStatics(d, b);
    function __() {this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];}
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
/** 表示可清理的资源，比如 Observable 的执行 */
var Subscription = /** @class */function () {
  function Subscription() {
    /** 用来标示该 Subscription 是否被取消订阅的标示位 */
    this.closed = false;
  }
  /** 取消 observer 的订阅 */
  Subscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }
    this.closed = true;
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  };
  /** 添加一个 tear down 在该 Subscription 的 unsubscribe() 期间调用 */
  Subscription.prototype.add = function (teardown) {
    this._unsubscribe = teardown;
  };
  return Subscription;
}();
/**
      * 实现 Observer 接口并且继承 Subscription 类，Observer 是消费 Observable 值的公有 API
      * 所有 Observers 都转化成了 Subscriber，以便提供类似 Subscription 的能力，比如 unsubscribe
     */
var Subscriber = /** @class */function (_super) {
  __extends(Subscriber, _super);
  function Subscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (observerOrNext && typeof observerOrNext === 'object') {
      _this.destination = observerOrNext;
    } else
    {
      _this.destination = __assign(__assign(__assign({}, observerOrNext && { next: observerOrNext }), error && { error: error }), complete && { complete: complete });
    }
    return _this;
  }
  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }
    this.isStopped = true;
    _super.prototype.unsubscribe.call(this);
  };
  Subscriber.prototype.next = function (value) {
    if (!this.isStopped && this.destination.next) {
      this.destination.next(value);
    }
  };
  Subscriber.prototype.error = function (err) {
    if (!this.isStopped && this.destination.error) {
      this.isStopped = true;
      this.destination.error(err);
    }
  };
  Subscriber.prototype.complete = function (result) {
    if (!this.isStopped && this.destination.complete) {
      this.isStopped = true;
      this.destination.complete(result);
    }
  };
  return Subscriber;
}(Subscription);exports.Subscriber = Subscriber;

/** 可观察对象，当前的上传事件的集合 */
var Observable = /** @class */function () {
  function Observable(_subscribe) {
    this._subscribe = _subscribe;
  }
  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var sink = new Subscriber(observerOrNext, error, complete);
    sink.add(this._subscribe(sink));
    return sink;
  };
  return Observable;
}();exports.Observable = Observable;

/***/ }),
/* 197 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/base64.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.urlSafeBase64Encode = urlSafeBase64Encode;exports.urlSafeBase64Decode = urlSafeBase64Decode; /* eslint-disable */
// https://github.com/locutusjs/locutus/blob/master/src/php/xml/utf8_encode.js
function utf8Encode(argString) {
  // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: sowberry
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   improved by: Yves Sucaet
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Ulrich
  // +   bugfixed by: Rafal Kukawski
  // +   improved by: kirilloid
  // +   bugfixed by: kirilloid
  // *     example 1: this.utf8Encode('Kevin van Zonneveld')
  // *     returns 1: 'Kevin van Zonneveld'
  if (argString === null || typeof argString === 'undefined') {
    return '';
  }
  var string = argString + ''; // .replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  var utftext = '',start,end,stringl = 0;
  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;
    if (c1 < 128) {
      end++;
    } else
    if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else
    if ((c1 & 0xf800 ^ 0xd800) > 0) {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    } else
    {
      // surrogate pairs
      if ((c1 & 0xfc00 ^ 0xd800) > 0) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xfc00 ^ 0xdc00) > 0) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3ff) << 10) + (c2 & 0x3ff) + 0x10000;
      enc = String.fromCharCode(c1 >> 18 | 240, c1 >> 12 & 63 | 128, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }
  if (end > start) {
    utftext += string.slice(start, stringl);
  }
  return utftext;
}
// https://github.com/locutusjs/locutus/blob/master/src/php/xml/utf8_decode.js
function utf8Decode(strData) {
  // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/utf8_decode/
  // original by: Webtoolkit.info (https://www.webtoolkit.info/)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (https://brett-zamir.me)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Norman "zEh" Fuchs
  // bugfixed by: hitwork
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: kirilloid
  // bugfixed by: w35l3y (https://www.wesley.eti.br)
  //   example 1: utf8_decode('Kevin van Zonneveld')
  //   returns 1: 'Kevin van Zonneveld'
  var tmpArr = [];
  var i = 0;
  var c1 = 0;
  var seqlen = 0;
  strData += '';
  while (i < strData.length) {
    c1 = strData.charCodeAt(i) & 0xFF;
    seqlen = 0;
    // https://en.wikipedia.org/wiki/UTF-8#Codepage_layout
    if (c1 <= 0xBF) {
      c1 = c1 & 0x7F;
      seqlen = 1;
    } else
    if (c1 <= 0xDF) {
      c1 = c1 & 0x1F;
      seqlen = 2;
    } else
    if (c1 <= 0xEF) {
      c1 = c1 & 0x0F;
      seqlen = 3;
    } else
    {
      c1 = c1 & 0x07;
      seqlen = 4;
    }
    for (var ai = 1; ai < seqlen; ++ai) {
      c1 = c1 << 0x06 | strData.charCodeAt(ai + i) & 0x3F;
    }
    if (seqlen === 4) {
      c1 -= 0x10000;
      tmpArr.push(String.fromCharCode(0xD800 | c1 >> 10 & 0x3FF));
      tmpArr.push(String.fromCharCode(0xDC00 | c1 & 0x3FF));
    } else
    {
      tmpArr.push(String.fromCharCode(c1));
    }
    i += seqlen;
  }
  return tmpArr.join('');
}
function base64Encode(data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Bayron Guevara
  // +   improved by: Thunder.m
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // -    depends on: this.utf8Encode
  // *     example 1: this.base64Encode('Kevin van Zonneveld')
  // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  // if (typeof this.window['atob'] == 'function') {
  //    return atob(data)
  // }
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1,o2,o3,h1,h2,h3,h4,bits,i = 0,ac = 0,enc = '',tmp_arr = [];
  if (!data) {
    return data;
  }
  data = utf8Encode(data + '');
  do {
    // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;
    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] =
    b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);
  enc = tmp_arr.join('');
  switch (data.length % 3) {
    case 1:
      enc = enc.slice(0, -2) + '==';
      break;
    case 2:
      enc = enc.slice(0, -1) + '=';
      break;}

  return enc;
}
function base64Decode(data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==')
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  // if (typeof this.window['atob'] == 'function') {
  //    return atob(data)
  // }
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1,o2,o3,h1,h2,h3,h4,bits,i = 0,ac = 0,dec = '',tmp_arr = [];
  if (!data) {
    return data;
  }
  data += '';
  do {// unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;
    if (h3 === 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else
    if (h4 === 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else
    {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);
  dec = tmp_arr.join('');
  return utf8Decode(dec);
}
function urlSafeBase64Encode(v) {
  v = base64Encode(v);
  // 参考 https://tools.ietf.org/html/rfc4648#section-5
  return v.replace(/\//g, '_').replace(/\+/g, '-');
}
function urlSafeBase64Decode(v) {
  v = v.replace(/_/g, '/').replace(/-/g, '+');
  return base64Decode(v);
}

/***/ }),
/* 198 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/helper.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getChunks = getChunks;exports.isMetaDataValid = isMetaDataValid;exports.isCustomVarsValid = isCustomVarsValid;exports.sum = sum;exports.setLocalFileInfo = setLocalFileInfo;exports.createLocalKey = createLocalKey;exports.removeLocalFileInfo = removeLocalFileInfo;exports.getLocalFileInfo = getLocalFileInfo;exports.getAuthHeaders = getAuthHeaders;exports.getHeadersForChunkUpload = getHeadersForChunkUpload;exports.getHeadersForMkFile = getHeadersForMkFile;exports.createXHR = createXHR;exports.computeMd5 = computeMd5;exports.readAsArrayBuffer = readAsArrayBuffer;exports.request = request;exports.getPortFromUrl = getPortFromUrl;exports.getDomainFromUrl = getDomainFromUrl;exports.getPutPolicy = getPutPolicy;exports.createObjectURL = createObjectURL;exports.MB = void 0;














































var _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ 199));
var _errors = __webpack_require__(/*! ../errors */ 192);
var _base = __webpack_require__(/*! ./base64 */ 197);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};
var MB = Math.pow(1024, 2);
// 文件分块
exports.MB = MB;function getChunks(file, blockSize) {
  var chunkByteSize = blockSize * MB; // 转换为字节
  // 如果 chunkByteSize 比文件大，则直接取文件的大小
  if (chunkByteSize > file.size) {
    chunkByteSize = file.size;
  } else
  {
    // 因为最多 10000 chunk，所以如果 chunkSize 不符合则把每片 chunk 大小扩大两倍
    while (file.size > chunkByteSize * 10000) {
      chunkByteSize *= 2;
    }
  }
  var chunks = [];
  var count = Math.ceil(file.size / chunkByteSize);
  for (var i = 0; i < count; i++) {
    var chunk = file.slice(chunkByteSize * i, i === count - 1 ? file.size : chunkByteSize * (i + 1));
    chunks.push(chunk);
  }
  return chunks;
}
function isMetaDataValid(params) {
  return Object.keys(params).every(function (key) {return key.indexOf('x-qn-meta-') === 0;});
}
function isCustomVarsValid(params) {
  return Object.keys(params).every(function (key) {return key.indexOf('x:') === 0;});
}
function sum(list) {
  return list.reduce(function (data, loaded) {return data + loaded;}, 0);
}
function setLocalFileInfo(localKey, info, logger) {
  try {
    localStorage.setItem(localKey, JSON.stringify(info));
  }
  catch (err) {
    logger.warn(new _errors.QiniuError(_errors.QiniuErrorName.WriteCacheFailed, "setLocalFileInfo failed: " + localKey));
  }
}
function createLocalKey(name, key, size) {
  var localKey = key == null ? '_' : "_key_" + key + "_";
  return "qiniu_js_sdk_upload_file_name_" + name + localKey + "size_" + size;
}
function removeLocalFileInfo(localKey, logger) {
  try {
    localStorage.removeItem(localKey);
  }
  catch (err) {
    logger.warn(new _errors.QiniuError(_errors.QiniuErrorName.RemoveCacheFailed, "removeLocalFileInfo failed. key: " + localKey));
  }
}
function getLocalFileInfo(localKey, logger) {
  var localInfoString = null;
  try {
    localInfoString = localStorage.getItem(localKey);
  }
  catch (_a) {
    logger.warn(new _errors.QiniuError(_errors.QiniuErrorName.ReadCacheFailed, "getLocalFileInfo failed. key: " + localKey));
  }
  if (localInfoString == null) {
    return null;
  }
  var localInfo = null;
  try {
    localInfo = JSON.parse(localInfoString);
  }
  catch (_b) {
    // 本地信息已被破坏，直接删除
    removeLocalFileInfo(localKey, logger);
    logger.warn(new _errors.QiniuError(_errors.QiniuErrorName.InvalidCacheData, "getLocalFileInfo failed to parse. key: " + localKey));
  }
  return localInfo;
}
function getAuthHeaders(token) {
  var auth = 'UpToken ' + token;
  return { Authorization: auth };
}
function getHeadersForChunkUpload(token) {
  var header = getAuthHeaders(token);
  return __assign({ 'content-type': 'application/octet-stream' }, header);
}
function getHeadersForMkFile(token) {
  var header = getAuthHeaders(token);
  return __assign({ 'content-type': 'application/json' }, header);
}
function createXHR() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject) {
    return new window.ActiveXObject('Microsoft.XMLHTTP');
  }
  throw new _errors.QiniuError(_errors.QiniuErrorName.NotAvailableXMLHttpRequest, 'the current environment does not support.');
}
function computeMd5(data) {
  return __awaiter(this, void 0, void 0, function () {
    var buffer, spark;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:return [4 /*yield*/, readAsArrayBuffer(data)];
        case 1:
          buffer = _a.sent();
          spark = new _sparkMd.default.ArrayBuffer();
          spark.append(buffer);
          return [2 /*return*/, spark.end()];}

    });
  });
}
function readAsArrayBuffer(data) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    // evt 类型目前存在问题 https://github.com/Microsoft/TypeScript/issues/4163
    reader.onload = function (evt) {
      if (evt.target) {
        var body = evt.target.result;
        resolve(body);
      } else
      {
        reject(new _errors.QiniuError(_errors.QiniuErrorName.InvalidProgressEventTarget, 'progress event target is undefined'));
      }
    };
    reader.onerror = function () {
      reject(new _errors.QiniuError(_errors.QiniuErrorName.FileReaderReadFailed, 'fileReader read failed'));
    };
    reader.readAsArrayBuffer(data);
  });
}
function request(url, options) {
  return new Promise(function (resolve, reject) {
    var xhr = createXHR();
    xhr.open(options.method, url);
    if (options.onCreate) {
      options.onCreate(xhr);
    }
    if (options.headers) {
      var headers_1 = options.headers;
      Object.keys(headers_1).forEach(function (k) {
        xhr.setRequestHeader(k, headers_1[k]);
      });
    }
    xhr.upload.addEventListener('progress', function (evt) {
      if (evt.lengthComputable && options.onProgress) {
        options.onProgress({
          loaded: evt.loaded,
          total: evt.total });

      }
    });
    xhr.onreadystatechange = function () {
      var responseText = xhr.responseText;
      if (xhr.readyState !== 4) {
        return;
      }
      var reqId = xhr.getResponseHeader('x-reqId') || '';
      if (xhr.status === 0) {
        // 发生 0 基本都是网络错误，常见的比如跨域、断网、host 解析失败、系统拦截等等
        reject(new _errors.QiniuNetworkError('network error.', reqId));
        return;
      }
      if (xhr.status !== 200) {
        var message = "xhr request failed, code: " + xhr.status;
        if (responseText) {
          message += " response: " + responseText;
        }
        var data = void 0;
        try {
          data = JSON.parse(responseText);
        }
        catch (_a) {
          // 无需处理该错误、可能拿到非 json 格式的响应是预期的
        }
        reject(new _errors.QiniuRequestError(xhr.status, reqId, message, data));
        return;
      }
      try {
        resolve({
          data: JSON.parse(responseText),
          reqId: reqId });

      }
      catch (err) {
        reject(err);
      }
    };
    xhr.send(options.body);
  });
}
function getPortFromUrl(url) {
  if (url && url.match) {
    var groups = url.match(/(^https?)/);
    if (!groups) {
      return '';
    }
    var type = groups[1];
    groups = url.match(/^https?:\/\/([^:^/]*):(\d*)/);
    if (groups) {
      return groups[2];
    }
    if (type === 'http') {
      return '80';
    }
    return '443';
  }
  return '';
}
function getDomainFromUrl(url) {
  if (url && url.match) {
    var groups = url.match(/^https?:\/\/([^:^/]*)/);
    return groups ? groups[1] : '';
  }
  return '';
}
function getPutPolicy(token) {
  if (!token)
  throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'invalid token.');
  var segments = token.split(':');
  if (segments.length === 1)
  throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'invalid token segments.');
  // token 构造的差异参考：https://github.com/qbox/product/blob/master/kodo/auths/UpToken.md#admin-uptoken-authorization
  var assessKey = segments.length > 3 ? segments[1] : segments[0];
  if (!assessKey)
  throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'missing assess key field.');
  var putPolicy = null;
  try {
    putPolicy = JSON.parse((0, _base.urlSafeBase64Decode)(segments[segments.length - 1]));
  }
  catch (error) {
    throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'token parse failed.');
  }
  if (putPolicy == null) {
    throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'putPolicy is null.');
  }
  if (putPolicy.scope == null) {
    throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'scope field is null.');
  }
  var bucketName = putPolicy.scope.split(':')[0];
  if (!bucketName) {
    throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidToken, 'resolve bucketName failed.');
  }
  return { assessKey: assessKey, bucketName: bucketName, scope: putPolicy.scope };
}
function createObjectURL(file) {
  var URL = window.URL || window.webkitURL || window.mozURL;
  // FIXME:  需要 revokeObjectURL
  return URL.createObjectURL(file);
}

/***/ }),
/* 199 */
/*!**************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/spark-md5/spark-md5.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
  if (true) {
    // Node/CommonJS
    module.exports = factory();
  } else { var glob; }
})(function (undefined) {

  'use strict';

  /*
                 * Fastest md5 implementation around (JKM md5).
                 * Credits: Joseph Myers
                 *
                 * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
                 * @see http://jsperf.com/md5-shootout/7
                 */

  /* this function is much faster,
                      so if possible we use it. Some IEs
                      are the only ones I know of that
                      need the idiotic second function,
                      generated by an if clause.  */
  var add32 = function add32(a, b) {
    return a + b & 0xFFFFFFFF;
  },
  hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function md5cycle(x, k) {
    var a = x[0],
    b = x[1],
    c = x[2],
    d = x[3];

    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;

    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;

    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;

    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;

    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }

  function md5blk(s) {
    var md5blks = [],
    i; /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function md5blk_array(a) {
    var md5blks = [],
    i; /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
  }

  function md51(s) {
    var n = s.length,
    state = [1732584193, -271733879, -1732584194, 271733878],
    i,
    length,
    tail,
    tmp,
    lo,
    hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Beware that the final length might not fit in 32 bits so we take care of that
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;

    md5cycle(state, tail);
    return state;
  }

  function md51_array(a) {
    var n = a.length,
    state = [1732584193, -271733879, -1732584194, 271733878],
    i,
    length,
    tail,
    tmp,
    lo,
    hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }

    // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
    // containing the last element of the parent array if the sub array specified starts
    // beyond the length of the parent array - weird.
    // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);

    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Beware that the final length might not fit in 32 bits so we take care of that
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;

    md5cycle(state, tail);

    return state;
  }

  function rhex(n) {
    var s = '',
    j;
    for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
    }
    return s;
  }

  function hex(x) {
    var i;
    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }

  // In some cases the fast add32 function cannot be used..
  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function add32(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
      msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    };
  }

  // ---------------------------------------------------

  /**
   * ArrayBuffer slice polyfill.
   *
   * @see https://github.com/ttaubert/node-arraybuffer-slice
   */

  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;

        if (val < 0) {
          return Math.max(val + length, 0);
        }

        return Math.min(val, length);
      }

      ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
        begin = clamp(from, length),
        end = length,
        num,
        target,
        targetArray,
        sourceArray;

        if (to !== undefined) {
          end = clamp(to, length);
        }

        if (begin > end) {
          return new ArrayBuffer(0);
        }

        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);

        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);

        return target;
      };
    })();
  }

  // ---------------------------------------------------

  /**
   * Helpers.
   */

  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }

    return str;
  }

  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
    buff = new ArrayBuffer(length),
    arr = new Uint8Array(buff),
    i;

    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }

    return returnUInt8Array ? arr : buff;
  }

  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }

  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);

    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);

    return returnUInt8Array ? result : result.buffer;
  }

  function hexToBinaryString(hex) {
    var bytes = [],
    length = hex.length,
    x;

    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }

    return String.fromCharCode.apply(String, bytes);
  }

  // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation.
   *
   * Use this class to perform an incremental md5, otherwise use the
   * static methods instead.
   */

  function SparkMD5() {
    // call reset to init the instance
    this.reset();
  }

  /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
  SparkMD5.prototype.append = function (str) {
    // Converts the string to utf8 bytes if necessary
    // Then append as binary
    this.appendBinary(toUtf8(str));

    return this;
  };

  /**
      * Appends a binary string.
      *
      * @param {String} contents The binary string to be appended
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;
    this._length += contents.length;

    var length = this._buff.length,
    i;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }

    this._buff = this._buff.substring(i - 64);

    return this;
  };

  /**
      * Finishes the incremental computation, reseting the internal state and
      * returning the result.
      *
      * @param {Boolean} raw True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
    length = buff.length,
    i,
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }

    this._finish(tail, length);
    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();

    return ret;
  };

  /**
      * Resets the internal state of the computation.
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.reset = function () {
    this._buff = '';
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];

    return this;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @return {Object} The state
      */
  SparkMD5.prototype.getState = function () {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash.slice() };

  };

  /**
      * Gets the internal state of the computation.
      *
      * @param {Object} state The state
      *
      * @return {SparkMD5} The instance itself
      */
  SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;
    this._length = state.length;
    this._hash = state.hash;

    return this;
  };

  /**
      * Releases memory used by the incremental buffer and other additional
      * resources. If you plan to use the instance again, use reset instead.
      */
  SparkMD5.prototype.destroy = function () {
    delete this._hash;
    delete this._buff;
    delete this._length;
  };

  /**
      * Finish the final calculation based on the tail.
      *
      * @param {Array}  tail   The tail (will be modified)
      * @param {Number} length The length of the remaining buffer
      */
  SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
    tmp,
    lo,
    hi;

    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(this._hash, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }

    // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that
    tmp = this._length * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;

    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this._hash, tail);
  };

  /**
      * Performs the md5 hash on a string.
      * A conversion will be applied if utf8 string is detected.
      *
      * @param {String}  str The string
      * @param {Boolean} [raw] True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.hash = function (str, raw) {
    // Converts the string to utf8 bytes if necessary
    // Then compute it using the binary function
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };

  /**
      * Performs the md5 hash on a binary string.
      *
      * @param {String}  content The binary string
      * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
    ret = hex(hash);

    return raw ? hexToBinaryString(ret) : ret;
  };

  // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation for array buffers.
   *
   * Use this class to perform an incremental md5 ONLY for array buffers.
   */
  SparkMD5.ArrayBuffer = function () {
    // call reset to init the instance
    this.reset();
  };

  /**
      * Appends an array buffer.
      *
      * @param {ArrayBuffer} arr The array to be appended
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
    length = buff.length,
    i;

    this._length += arr.byteLength;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }

    this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

    return this;
  };

  /**
      * Finishes the incremental computation, reseting the internal state and
      * returning the result.
      *
      * @param {Boolean} raw True to get the raw string, false to get the hex string
      *
      * @return {String} The result
      */
  SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
    length = buff.length,
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    i,
    ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }

    this._finish(tail, length);
    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();

    return ret;
  };

  /**
      * Resets the internal state of the computation.
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];

    return this;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @return {Object} The state
      */
  SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this);

    // Convert buffer to a string
    state.buff = arrayBuffer2Utf8Str(state.buff);

    return state;
  };

  /**
      * Gets the internal state of the computation.
      *
      * @param {Object} state The state
      *
      * @return {SparkMD5.ArrayBuffer} The instance itself
      */
  SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    // Convert string to buffer
    state.buff = utf8Str2ArrayBuffer(state.buff, true);

    return SparkMD5.prototype.setState.call(this, state);
  };

  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

  /**
                                                                        * Performs the md5 hash on an array buffer.
                                                                        *
                                                                        * @param {ArrayBuffer} arr The array buffer
                                                                        * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
                                                                        *
                                                                        * @return {String} The result
                                                                        */
  SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
    ret = hex(hash);

    return raw ? hexToBinaryString(ret) : ret;
  };

  return SparkMD5;
});

/***/ }),
/* 200 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/config.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.normalizeUploadConfig = normalizeUploadConfig;









































var _config = __webpack_require__(/*! ../config */ 201);
var _upload = __webpack_require__(/*! ../upload */ 203);var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __rest = void 0 && (void 0).__rest || function (s, e) {var t = {};for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];}if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];}return t;};var __read = void 0 && (void 0).__read || function (o, n) {var m = typeof Symbol === "function" && o[Symbol.iterator];if (!m) return o;var i = m.call(o),r,ar = [],e;try {while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {ar.push(r.value);}} catch (error) {e = { error: error };} finally {try {if (r && !r.done && (m = i["return"])) m.call(i);} finally {if (e) throw e.error;}}return ar;};var __spread = void 0 && (void 0).__spread || function () {for (var ar = [], i = 0; i < arguments.length; i++) {ar = ar.concat(__read(arguments[i]));}return ar;};
function normalizeUploadConfig(config, logger) {
  var _a = __assign({}, config),upprotocol = _a.upprotocol,uphost = _a.uphost,otherConfig = __rest(_a, ["upprotocol", "uphost"]);
  var normalizeConfig = __assign({ uphost: [], retryCount: 3, checkByMD5: false, forceDirect: false, useCdnDomain: true, checkByServer: false, concurrentRequestLimit: 3, chunkSize: _upload.DEFAULT_CHUNK_SIZE, upprotocol: 'https', debugLogLevel: 'OFF', disableStatisticsReport: false }, otherConfig);
  // 兼容原来的 http: https: 的写法
  if (upprotocol) {
    normalizeConfig.upprotocol = upprotocol.
    replace(/:$/, '');
  }
  var hostList = [];
  if (logger && (config === null || config === void 0 ? void 0 : config.uphost) != null && (config === null || config === void 0 ? void 0 : config.region) != null) {
    logger.warn('do not use both the uphost and region config.');
  }
  // 如果同时指定了 uphost 参数，添加到可用 host 列表
  if (uphost) {
    if (Array.isArray(uphost)) {
      hostList.push.apply(hostList, __spread(uphost));
    } else
    {
      hostList.push(uphost);
    }
    // 否则如果用户传了 region，添加指定 region 的 host 到可用 host 列表
  } else
  if (normalizeConfig === null || normalizeConfig === void 0 ? void 0 : normalizeConfig.region) {
    var hostMap = _config.regionUphostMap[normalizeConfig === null || normalizeConfig === void 0 ? void 0 : normalizeConfig.region];
    if (normalizeConfig.useCdnDomain) {
      hostList.push.apply(hostList, __spread(hostMap.cdnUphost));
    } else
    {
      hostList.push.apply(hostList, __spread(hostMap.srcUphost));
    }
  }
  return __assign(__assign({}, normalizeConfig), { uphost: hostList.filter(Boolean) });
}

/***/ }),
/* 201 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/config/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _region = __webpack_require__(/*! ./region */ 202);Object.keys(_region).forEach(function (key) {if (key === "default" || key === "__esModule") return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _region[key];} });});

/***/ }),
/* 202 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/config/region.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.regionUphostMap = exports.region = void 0;var _a;
/** 上传区域 */
var region = {
  z0: 'z0',
  z1: 'z1',
  z2: 'z2',
  na0: 'na0',
  as0: 'as0',
  cnEast2: 'cn-east-2' };

/** 上传区域对应的 host */exports.region = region;
var regionUphostMap = (_a = {},
_a[region.z0] = {
  srcUphost: ['up.qiniup.com'],
  cdnUphost: ['upload.qiniup.com'] },

_a[region.z1] = {
  srcUphost: ['up-z1.qiniup.com'],
  cdnUphost: ['upload-z1.qiniup.com'] },

_a[region.z2] = {
  srcUphost: ['up-z2.qiniup.com'],
  cdnUphost: ['upload-z2.qiniup.com'] },

_a[region.na0] = {
  srcUphost: ['up-na0.qiniup.com'],
  cdnUphost: ['upload-na0.qiniup.com'] },

_a[region.as0] = {
  srcUphost: ['up-as0.qiniup.com'],
  cdnUphost: ['upload-as0.qiniup.com'] },

_a[region.cnEast2] = {
  srcUphost: ['up-cn-east-2.qiniup.com'],
  cdnUphost: ['upload-cn-east-2.qiniup.com'] },

_a);exports.regionUphostMap = regionUphostMap;

/***/ }),
/* 203 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/upload/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { createUploadManager: true };exports.createUploadManager = createUploadManager;exports.default = upload;var _resume = _interopRequireWildcard(__webpack_require__(/*! ./resume */ 204));





Object.keys(_resume).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _resume[key];} });});var _direct = _interopRequireDefault(__webpack_require__(/*! ./direct */ 210));var _logger = _interopRequireDefault(__webpack_require__(/*! ../logger */ 212));var _utils = __webpack_require__(/*! ../utils */ 194);var _hosts = __webpack_require__(/*! ./hosts */ 214);var _base = __webpack_require__(/*! ./base */ 209);Object.keys(_base).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _base[key];} });});function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}
function createUploadManager(options, handlers, hostPool, logger) {
  if (options.config && options.config.forceDirect) {
    logger.info('ues forceDirect mode.');
    return new _direct.default(options, handlers, hostPool, logger);
  }
  if (options.file.size > 4 * _utils.MB) {
    logger.info('file size over 4M, use Resume.');
    return new _resume.default(options, handlers, hostPool, logger);
  }
  logger.info('file size less or equal than 4M, use Direct.');
  return new _direct.default(options, handlers, hostPool, logger);
}
/**
   * @param file 上传文件
   * @param key 目标文件名
   * @param token 上传凭证
   * @param putExtra 上传文件的相关资源信息配置
   * @param config 上传任务的配置
   * @returns 返回用于上传任务的可观察对象
   */
function upload(file, key, token, putExtra, config) {
  // 为每个任务创建单独的 Logger
  var logger = new _logger.default(token, config === null || config === void 0 ? void 0 : config.disableStatisticsReport, config === null || config === void 0 ? void 0 : config.debugLogLevel, file.name);
  var options = {
    file: file,
    key: key,
    token: token,
    putExtra: putExtra,
    config: (0, _utils.normalizeUploadConfig)(config, logger) };

  // 创建 host 池
  var hostPool = new _hosts.HostPool(options.config.uphost);
  return new _utils.Observable(function (observer) {
    var manager = createUploadManager(options, {
      onData: function onData(data) {return observer.next(data);},
      onError: function onError(err) {return observer.error(err);},
      onComplete: function onComplete(res) {return observer.complete(res);} },
    hostPool, logger);
    manager.putFile();
    return manager.stop.bind(manager);
  });
}

/***/ }),
/* 204 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/upload/resume.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































var _api = __webpack_require__(/*! ../api */ 205);
var _errors = __webpack_require__(/*! ../errors */ 192);
var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 194));
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ 209));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var __extends = void 0 && (void 0).__extends || function () {var _extendStatics = function extendStatics(d, b) {_extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} || function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};return _extendStatics(d, b);};return function (d, b) {_extendStatics(d, b);function __() {this.constructor = d;}d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());};}();var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};
/** 是否为正整数 */
function isPositiveInteger(n) {
  var re = /^[1-9]\d*$/;
  return re.test(String(n));
}
var Resume = /** @class */function (_super) {
  __extends(Resume, _super);
  function Resume() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
     * @returns  {Promise<ResponseSuccess<any>>}
     * @description 实现了 Base 的 run 接口，处理具体的分片上传事务，并抛出过程中的异常。
     */
  Resume.prototype.run = function () {
    return __awaiter(this, void 0, void 0, function () {
      var pool, mkFileResponse, localKey, uploadChunks, error_1;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.logger.info('start run Resume.');
            if (!this.config.chunkSize || !isPositiveInteger(this.config.chunkSize)) {
              throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidChunkSize, 'chunkSize must be a positive integer');
            }
            if (this.config.chunkSize > 1024) {
              throw new _errors.QiniuError(_errors.QiniuErrorName.InvalidChunkSize, 'chunkSize maximum value is 1024');
            }
            return [4 /*yield*/, this.initBeforeUploadChunks()];
          case 1:
            _a.sent();
            pool = new utils.Pool(function (chunkInfo) {return _this.uploadChunk(chunkInfo);}, this.config.concurrentRequestLimit);
            mkFileResponse = null;
            localKey = this.getLocalKey();
            uploadChunks = this.chunks.map(function (chunk, index) {return pool.enqueue({ chunk: chunk, index: index });});
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 6]);
            return [4 /*yield*/, Promise.all(uploadChunks)];
          case 3:
            _a.sent();
            return [4 /*yield*/, this.mkFileReq()];
          case 4:
            mkFileResponse = _a.sent();
            return [3 /*break*/, 6];
          case 5:
            error_1 = _a.sent();
            // uploadId 无效，上传参数有误（多由于本地存储信息的 uploadId 失效）
            if (error_1 instanceof _errors.QiniuRequestError && (error_1.code === 612 || error_1.code === 400)) {
              utils.removeLocalFileInfo(localKey, this.logger);
            }
            throw error_1;
          case 6:
            // 上传成功，清理本地缓存数据
            utils.removeLocalFileInfo(localKey, this.logger);
            return [2 /*return*/, mkFileResponse];}

      });
    });
  };
  Resume.prototype.uploadChunk = function (chunkInfo) {
    return __awaiter(this, void 0, void 0, function () {
      var index, chunk, cachedInfo, shouldCheckMD5, reuseSaved, md5, onProgress, requestOptions, response;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            index = chunkInfo.index, chunk = chunkInfo.chunk;
            cachedInfo = this.cachedUploadedList[index];
            this.logger.info("upload part " + index + ", cache:", cachedInfo);
            shouldCheckMD5 = this.config.checkByMD5;
            reuseSaved = function reuseSaved() {
              _this.usedCacheList[index] = true;
              _this.updateChunkProgress(chunk.size, index);
              _this.uploadedList[index] = cachedInfo;
              _this.updateLocalCache();
            };
            // FIXME: 至少判断一下 size
            if (cachedInfo && !shouldCheckMD5) {
              reuseSaved();
              return [2 /*return*/];
            }
            return [4 /*yield*/, utils.computeMd5(chunk)];
          case 1:
            md5 = _a.sent();
            this.logger.info('computed part md5.', md5);
            if (cachedInfo && md5 === cachedInfo.md5) {
              reuseSaved();
              return [2 /*return*/];
            }
            // 没有使用缓存设置标记为 false
            this.usedCacheList[index] = false;
            onProgress = function onProgress(data) {
              _this.updateChunkProgress(data.loaded, index);
            };
            requestOptions = {
              body: chunk,
              md5: this.config.checkByServer ? md5 : undefined,
              onProgress: onProgress,
              onCreate: function onCreate(xhr) {return _this.addXhr(xhr);} };

            this.logger.info("part " + index + " start uploading.");
            return [4 /*yield*/, (0, _api.uploadChunk)(this.token, this.key, chunkInfo.index + 1, this.getUploadInfo(), requestOptions)];
          case 2:
            response = _a.sent();
            this.logger.info("part " + index + " upload completed.");
            // 在某些浏览器环境下，xhr 的 progress 事件无法被触发，progress 为 null，这里在每次分片上传完成后都手动更新下 progress
            onProgress({
              loaded: chunk.size,
              total: chunk.size });

            this.uploadedList[index] = {
              etag: response.data.etag,
              md5: response.data.md5,
              size: chunk.size };

            this.updateLocalCache();
            return [2 /*return*/];}

      });
    });
  };
  Resume.prototype.mkFileReq = function () {
    return __awaiter(this, void 0, void 0, function () {
      var data, result;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            data = __assign(__assign(__assign({ parts: this.uploadedList.map(function (value, index) {return {
                  etag: value.etag,
                  // 接口要求 index 需要从 1 开始，所以需要整体 + 1
                  partNumber: index + 1 };
              }), fname: this.putExtra.fname }, this.putExtra.mimeType && { mimeType: this.putExtra.mimeType }), this.putExtra.customVars && { customVars: this.putExtra.customVars }), this.putExtra.metadata && { metadata: this.putExtra.metadata });
            this.logger.info('parts upload completed, make file.', data);
            return [4 /*yield*/, (0, _api.uploadComplete)(this.token, this.key, this.getUploadInfo(), {
              onCreate: function onCreate(xhr) {return _this.addXhr(xhr);},
              body: JSON.stringify(data) })];

          case 1:
            result = _a.sent();
            this.logger.info('finish Resume Progress.');
            this.updateMkFileProgress(1);
            return [2 /*return*/, result];}

      });
    });
  };
  Resume.prototype.initBeforeUploadChunks = function () {
    return __awaiter(this, void 0, void 0, function () {
      var cachedInfo, res, infoMessage;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.uploadedList = [];
            this.usedCacheList = [];
            cachedInfo = utils.getLocalFileInfo(this.getLocalKey(), this.logger);
            if (!!cachedInfo) return [3 /*break*/, 2];
            this.logger.info('init upload parts from api.');
            return [4 /*yield*/, (0, _api.initUploadParts)(this.token, this.bucketName, this.key, this.uploadHost.getUrl())];
          case 1:
            res = _a.sent();
            this.logger.info("initd upload parts of id: " + res.data.uploadId + ".");
            this.uploadId = res.data.uploadId;
            this.cachedUploadedList = [];
            return [3 /*break*/, 3];
          case 2:
            infoMessage = [
            'resume upload parts from local cache,',
            "total " + cachedInfo.data.length + " part,",
            "id is " + cachedInfo.id + "."];

            this.logger.info(infoMessage.join(' '));
            this.cachedUploadedList = cachedInfo.data;
            this.uploadId = cachedInfo.id;
            _a.label = 3;
          case 3:
            this.chunks = utils.getChunks(this.file, this.config.chunkSize);
            this.loaded = {
              mkFileProgress: 0,
              chunks: this.chunks.map(function (_) {return 0;}) };

            this.notifyResumeProgress();
            return [2 /*return*/];}

      });
    });
  };
  Resume.prototype.getUploadInfo = function () {
    return {
      id: this.uploadId,
      url: this.uploadHost.getUrl() };

  };
  Resume.prototype.getLocalKey = function () {
    return utils.createLocalKey(this.file.name, this.key, this.file.size);
  };
  Resume.prototype.updateLocalCache = function () {
    utils.setLocalFileInfo(this.getLocalKey(), {
      id: this.uploadId,
      data: this.uploadedList },
    this.logger);
  };
  Resume.prototype.updateChunkProgress = function (loaded, index) {
    this.loaded.chunks[index] = loaded;
    this.notifyResumeProgress();
  };
  Resume.prototype.updateMkFileProgress = function (progress) {
    this.loaded.mkFileProgress = progress;
    this.notifyResumeProgress();
  };
  Resume.prototype.notifyResumeProgress = function () {
    var _this = this;
    this.progress = {
      total: this.getProgressInfoItem(utils.sum(this.loaded.chunks) + this.loaded.mkFileProgress,
      // FIXME: 不准确的 fileSize
      this.file.size + 1 // 防止在 complete 未调用的时候进度显示 100%
      ),
      chunks: this.chunks.map(function (chunk, index) {
        var fromCache = _this.usedCacheList[index];
        return _this.getProgressInfoItem(_this.loaded.chunks[index], chunk.size, fromCache);
      }),
      uploadInfo: {
        id: this.uploadId,
        url: this.uploadHost.getUrl() } };


    this.onData(this.progress);
  };
  return Resume;
}(_base.default);var _default =
Resume;exports.default = _default;

/***/ }),
/* 205 */
/*!*****************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/api/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getUpHosts = getUpHosts;exports.initUploadParts = initUploadParts;exports.uploadChunk = uploadChunk;exports.uploadComplete = uploadComplete;exports.deleteUploadedChunks = deleteUploadedChunks;exports.direct = direct;exports.getUploadUrl = getUploadUrl;














































var _querystring = __webpack_require__(/*! querystring */ 206);
var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 194));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};

function getUpHosts(accessKey, bucketName, protocol) {
  return __awaiter(this, void 0, void 0, function () {
    var params, url;
    return __generator(this, function (_a) {
      params = (0, _querystring.stringify)({ ak: accessKey, bucket: bucketName });
      url = protocol + "://api.qiniu.com/v2/query?" + params;
      return [2 /*return*/, utils.request(url, { method: 'GET' })];
    });
  });
}
/**
   * @param bucket 空间名
   * @param key 目标文件名
   * @param uploadInfo 上传信息
   */
function getBaseUrl(bucket, key, uploadInfo) {
  var url = uploadInfo.url,id = uploadInfo.id;
  return url + "/buckets/" + bucket + "/objects/" + (key != null ? utils.urlSafeBase64Encode(key) : '~') + "/uploads/" + id;
}
/**
   * @param token 上传鉴权凭证
   * @param bucket 上传空间
   * @param key 目标文件名
   * @param uploadUrl 上传地址
   */
function initUploadParts(token, bucket, key, uploadUrl) {
  var url = uploadUrl + "/buckets/" + bucket + "/objects/" + (key != null ? utils.urlSafeBase64Encode(key) : '~') + "/uploads";
  return utils.request(url, {
    method: 'POST',
    headers: utils.getAuthHeaders(token) });

}
/**
   * @param token 上传鉴权凭证
   * @param index 当前 chunk 的索引
   * @param uploadInfo 上传信息
   * @param options 请求参数
   */
function uploadChunk(token, key, index, uploadInfo, options) {
  var bucket = utils.getPutPolicy(token).bucketName;
  var url = getBaseUrl(bucket, key, uploadInfo) + ("/" + index);
  var headers = utils.getHeadersForChunkUpload(token);
  if (options.md5)
  headers['Content-MD5'] = options.md5;
  return utils.request(url, __assign(__assign({}, options), { method: 'PUT', headers: headers }));
}
/**
   * @param token 上传鉴权凭证
   * @param key 目标文件名
   * @param uploadInfo 上传信息
   * @param options 请求参数
   */
function uploadComplete(token, key, uploadInfo, options) {
  var bucket = utils.getPutPolicy(token).bucketName;
  var url = getBaseUrl(bucket, key, uploadInfo);
  return utils.request(url, __assign(__assign({}, options), { method: 'POST', headers: utils.getHeadersForMkFile(token) }));
}
/**
   * @param token 上传鉴权凭证
   * @param key 目标文件名
   * @param uploadInfo 上传信息
   */
function deleteUploadedChunks(token, key, uploadinfo) {
  var bucket = utils.getPutPolicy(token).bucketName;
  var url = getBaseUrl(bucket, key, uploadinfo);
  return utils.request(url, {
    method: 'DELETE',
    headers: utils.getAuthHeaders(token) });

}
/**
   * @param  {string} url
   * @param  {FormData} data
   * @param  {Partial<utils.RequestOptions>} options
   * @returns Promise
   * @description 直传接口
   */
function direct(url, data, options) {
  return utils.request(url, __assign({ method: 'POST', body: data }, options));
}
/**
   * @param  {UploadUrlConfig} config
   * @param  {string} token
   * @returns Promise
   * @description 获取上传 url
   */
function getUploadUrl(_config, token) {
  return __awaiter(this, void 0, void 0, function () {
    var config, protocol, putPolicy, res, hosts;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          config = (0, utils.normalizeUploadConfig)(_config);
          protocol = config.upprotocol;
          if (config.uphost.length > 0) {
            return [2 /*return*/, protocol + "://" + config.uphost[0]];
          }
          putPolicy = utils.getPutPolicy(token);
          return [4 /*yield*/, getUpHosts(putPolicy.assessKey, putPolicy.bucketName, protocol)];
        case 1:
          res = _a.sent();
          hosts = res.data.up.acc.main;
          return [2 /*return*/, protocol + "://" + hosts[0]];}

    });
  });
}

/***/ }),
/* 206 */
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 207);
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 208);


/***/ }),
/* 207 */
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 208 */
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 209 */
/*!*******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/upload/base.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.RETRY_CODE_LIST = exports.FREEZE_CODE_LIST = exports.DEFAULT_CHUNK_SIZE = void 0;


































































var _errors = __webpack_require__(/*! ../errors */ 192);
var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 194));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};var __read = void 0 && (void 0).__read || function (o, n) {var m = typeof Symbol === "function" && o[Symbol.iterator];if (!m) return o;var i = m.call(o),r,ar = [],e;try {while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {ar.push(r.value);}} catch (error) {e = { error: error };} finally {try {if (r && !r.done && (m = i["return"])) m.call(i);} finally {if (e) throw e.error;}}return ar;};var __spread = void 0 && (void 0).__spread || function () {for (var ar = [], i = 0; i < arguments.length; i++) {ar = ar.concat(__read(arguments[i]));}return ar;};
var DEFAULT_CHUNK_SIZE = 4; // 单位 MB
// code 信息地址 https://developer.qiniu.com/kodo/3928/error-responses
exports.DEFAULT_CHUNK_SIZE = DEFAULT_CHUNK_SIZE;var FREEZE_CODE_LIST = [0, 502, 503, 504, 599]; // 将会冻结当前 host 的 code
exports.FREEZE_CODE_LIST = FREEZE_CODE_LIST;var RETRY_CODE_LIST = __spread(FREEZE_CODE_LIST, [612]); // 会进行重试的 code
exports.RETRY_CODE_LIST = RETRY_CODE_LIST;var GB = Math.pow(1024, 3);
var Base = /** @class */function () {
  function Base(options, handlers, hostPool, logger) {
    this.hostPool = hostPool;
    this.logger = logger;
    this.aborted = false;
    this.retryCount = 0;
    this.xhrList = [];
    this.config = options.config;
    logger.info('config inited.', this.config);
    this.putExtra = __assign({ fname: '' }, options.putExtra);
    logger.info('putExtra inited.', this.putExtra);
    this.key = options.key;
    this.file = options.file;
    this.token = options.token;
    this.onData = handlers.onData;
    this.onError = handlers.onError;
    this.onComplete = handlers.onComplete;
    try {
      var putPolicy = utils.getPutPolicy(this.token);
      this.bucketName = putPolicy.bucketName;
      this.assessKey = putPolicy.assessKey;
    }
    catch (error) {
      logger.error('get putPolicy from token failed.', error);
      this.onError(error);
    }
  }
  // 检查并更新 upload host
  Base.prototype.checkAndUpdateUploadHost = function () {
    return __awaiter(this, void 0, void 0, function () {
      var newHost;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // 从 hostPool 中获取一个可用的 host 挂载在 this
            this.logger.info('get available upload host.');
            return [4 /*yield*/, this.hostPool.getUp(this.assessKey, this.bucketName, this.config.upprotocol)];
          case 1:
            newHost = _a.sent();
            if (newHost == null) {
              throw new _errors.QiniuError(_errors.QiniuErrorName.NotAvailableUploadHost, 'no available upload host.');
            }
            if (this.uploadHost != null && this.uploadHost.host !== newHost.host) {
              this.logger.warn("host switches from " + this.uploadHost.host + " to " + newHost.host + ".");
            } else
            {
              this.logger.info("use host " + newHost.host + ".");
            }
            this.uploadHost = newHost;
            return [2 /*return*/];}

      });
    });
  };
  // 检查并解冻当前的 host
  Base.prototype.checkAndUnfreezeHost = function () {
    this.logger.info('check unfreeze host.');
    if (this.uploadHost != null && this.uploadHost.isFrozen()) {
      this.logger.warn(this.uploadHost.host + " will be unfrozen.");
      this.uploadHost.unfreeze();
    }
  };
  // 检查并更新冻结当前的 host
  Base.prototype.checkAndFreezeHost = function (error) {
    this.logger.info('check freeze host.');
    if (error instanceof _errors.QiniuRequestError && this.uploadHost != null) {
      if (FREEZE_CODE_LIST.includes(error.code)) {
        this.logger.warn(this.uploadHost.host + " will be temporarily frozen.");
        this.uploadHost.freeze();
      }
    }
  };
  Base.prototype.handleError = function (error) {
    this.logger.error(error.message);
    this.onError(error);
  };
  /**
      * @returns Promise 返回结果与上传最终状态无关，状态信息请通过 [Subscriber] 获取。
      * @description 上传文件，状态信息请通过 [Subscriber] 获取。
      */
  Base.prototype.putFile = function () {
    return __awaiter(this, void 0, void 0, function () {
      var result, err_1, reqId, code, notReachRetryCount, needRetry;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.aborted = false;
            if (!this.putExtra.fname) {
              this.logger.info('use file.name as fname.');
              this.putExtra.fname = this.file.name;
            }
            if (this.file.size > 10000 * GB) {
              this.handleError(new _errors.QiniuError(_errors.QiniuErrorName.InvalidFile, 'file size exceed maximum value 10000G'));
              return [2 /*return*/];
            }
            if (this.putExtra.customVars) {
              if (!utils.isCustomVarsValid(this.putExtra.customVars)) {
                this.handleError(new _errors.QiniuError(_errors.QiniuErrorName.InvalidCustomVars,
                // FIXME: width => with
                'customVars key should start width x:'));
                return [2 /*return*/];
              }
            }
            if (this.putExtra.metadata) {
              if (!utils.isMetaDataValid(this.putExtra.metadata)) {
                this.handleError(new _errors.QiniuError(_errors.QiniuErrorName.InvalidMetadata, 'metadata key should start with x-qn-meta-'));
                return [2 /*return*/];
              }
            }
            _a.label = 1;
          case 1:
            _a.trys.push([1, 4,, 5]);
            this.uploadAt = new Date().getTime();
            return [4 /*yield*/, this.checkAndUpdateUploadHost()];
          case 2:
            _a.sent();
            return [4 /*yield*/, this.run()];
          case 3:
            result = _a.sent();
            this.onComplete(result.data);
            this.checkAndUnfreezeHost();
            this.sendLog(result.reqId, 200);
            return [2 /*return*/];
          case 4:
            err_1 = _a.sent();
            this.logger.error(err_1);
            this.clear();
            if (err_1 instanceof _errors.QiniuRequestError) {
              reqId = this.aborted ? '' : err_1.reqId;
              code = this.aborted ? -2 : err_1.code;
              this.sendLog(reqId, code);
              // 检查并冻结当前的 host
              this.checkAndFreezeHost(err_1);
              notReachRetryCount = ++this.retryCount <= this.config.retryCount;
              needRetry = !this.aborted && RETRY_CODE_LIST.includes(err_1.code);
              // 以下条件满足其中之一则会进行重新上传：
              // 1. 满足 needRetry 的条件且 retryCount 不为 0
              // 2. uploadId 无效时在 resume 里会清除本地数据，并且这里触发重新上传
              if (needRetry && notReachRetryCount) {
                this.logger.warn("error auto retry: " + this.retryCount + "/" + this.config.retryCount + ".");
                this.putFile();
                return [2 /*return*/];
              }
            }
            this.onError(err_1);
            return [3 /*break*/, 5];
          case 5:return [2 /*return*/];}

      });
    });
  };
  Base.prototype.clear = function () {
    this.logger.info('start cleaning all xhr.');
    this.xhrList.forEach(function (xhr) {
      xhr.onreadystatechange = null;
      xhr.abort();
    });
    this.logger.info('cleanup completed.');
    this.xhrList = [];
  };
  Base.prototype.stop = function () {
    this.logger.info('stop.');
    this.clear();
    this.aborted = true;
  };
  Base.prototype.addXhr = function (xhr) {
    this.xhrList.push(xhr);
  };
  Base.prototype.sendLog = function (reqId, code) {
    var _a, _b;
    this.logger.report({
      code: code,
      reqId: reqId,
      remoteIp: '',
      upType: 'jssdk-h5',
      size: this.file.size,
      time: Math.floor(this.uploadAt / 1000),
      port: utils.getPortFromUrl((_a = this.uploadHost) === null || _a === void 0 ? void 0 : _a.getUrl()),
      host: utils.getDomainFromUrl((_b = this.uploadHost) === null || _b === void 0 ? void 0 : _b.getUrl()),
      bytesSent: this.progress ? this.progress.total.loaded : 0,
      duration: Math.floor((new Date().getTime() - this.uploadAt) / 1000) });

  };
  Base.prototype.getProgressInfoItem = function (loaded, size, fromCache) {
    return __assign({ size: size,
      loaded: loaded, percent: loaded / size * 100 }, fromCache == null ? {} : { fromCache: fromCache });
  };
  return Base;
}();var _default =
Base;exports.default = _default;

/***/ }),
/* 210 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/upload/direct.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















































var _crc = __webpack_require__(/*! ../utils/crc32 */ 211);
var _api = __webpack_require__(/*! ../api */ 205);
var _base = _interopRequireDefault(__webpack_require__(/*! ./base */ 209));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var __extends = void 0 && (void 0).__extends || function () {var _extendStatics = function extendStatics(d, b) {_extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} || function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};return _extendStatics(d, b);};return function (d, b) {_extendStatics(d, b);function __() {this.constructor = d;}d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());};}();var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};
var Direct = /** @class */function (_super) {
  __extends(Direct, _super);
  function Direct() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Direct.prototype.run = function () {
    return __awaiter(this, void 0, void 0, function () {
      var formData, crcSign, customVars_1, result;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.logger.info('start run Direct.');
            formData = new FormData();
            formData.append('file', this.file);
            formData.append('token', this.token);
            if (this.key != null) {
              formData.append('key', this.key);
            }
            formData.append('fname', this.putExtra.fname);
            if (!this.config.checkByServer) return [3 /*break*/, 2];
            return [4 /*yield*/, _crc.CRC32.file(this.file)];
          case 1:
            crcSign = _a.sent();
            formData.append('crc32', crcSign.toString());
            _a.label = 2;
          case 2:
            if (this.putExtra.customVars) {
              this.logger.info('init customVars.');
              customVars_1 = this.putExtra.customVars;
              Object.keys(customVars_1).forEach(function (key) {return formData.append(key, customVars_1[key].toString());});
              this.logger.info('customVars inited.');
            }
            this.logger.info('formData inited.');
            return [4 /*yield*/, (0, _api.direct)(this.uploadHost.getUrl(), formData, {
              onProgress: function onProgress(data) {
                _this.updateDirectProgress(data.loaded, data.total);
              },
              onCreate: function onCreate(xhr) {return _this.addXhr(xhr);} })];

          case 3:
            result = _a.sent();
            this.logger.info('Direct progress finish.');
            this.finishDirectProgress();
            return [2 /*return*/, result];}

      });
    });
  };
  Direct.prototype.updateDirectProgress = function (loaded, total) {
    // 当请求未完成时可能进度会达到100，所以total + 1来防止这种情况出现
    this.progress = { total: this.getProgressInfoItem(loaded, total + 1) };
    this.onData(this.progress);
  };
  Direct.prototype.finishDirectProgress = function () {
    // 在某些浏览器环境下，xhr 的 progress 事件无法被触发，progress 为 null，这里 fake 下
    if (!this.progress) {
      this.logger.warn('progress is null.');
      this.progress = { total: this.getProgressInfoItem(this.file.size, this.file.size) };
      this.onData(this.progress);
      return;
    }
    var total = this.progress.total;
    this.progress = { total: this.getProgressInfoItem(total.loaded + 1, total.size) };
    this.onData(this.progress);
  };
  return Direct;
}(_base.default);var _default =
Direct;exports.default = _default;

/***/ }),
/* 211 */
/*!*******************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/crc32.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.CRC32 = void 0;




































var _helper = __webpack_require__(/*! ./helper */ 198); /* eslint-disable no-bitwise */var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 以下 class 实现参考
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/Stuk/jszip/blob/d4702a70834bd953d4c2d0bc155fad795076631a/lib/crc32.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 该实现主要针对大文件优化、对计算的值进行了 `>>> 0` 运算（为与服务端保持一致）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var CRC32 = /** @class */function () {
  function CRC32() {
    this.crc = -1;
    this.table = this.makeTable();
  }
  CRC32.prototype.makeTable = function () {
    var table = new Array();
    for (var i = 0; i < 256; i++) {
      var t = i;
      for (var j = 0; j < 8; j++) {
        if (t & 1) {
          // IEEE 标准
          t = t >>> 1 ^ 0xEDB88320;
        } else
        {
          t >>>= 1;
        }
      }
      table[i] = t;
    }
    return table;
  };
  CRC32.prototype.append = function (data) {
    var crc = this.crc;
    for (var offset = 0; offset < data.byteLength; offset++) {
      crc = crc >>> 8 ^ this.table[(crc ^ data[offset]) & 0xFF];
    }
    this.crc = crc;
  };
  CRC32.prototype.compute = function () {
    return (this.crc ^ -1) >>> 0;
  };
  CRC32.prototype.readAsUint8Array = function (file) {
    return __awaiter(this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(typeof file.arrayBuffer === 'function')) return [3 /*break*/, 2];
            _a = Uint8Array.bind;
            return [4 /*yield*/, file.arrayBuffer()];
          case 1:return [2 /*return*/, new (_a.apply(Uint8Array, [void 0, _b.sent()]))()];
          case 2:return [2 /*return*/, new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onload = function () {
                if (reader.result == null) {
                  reject();
                  return;
                }
                if (typeof reader.result === 'string') {
                  reject();
                  return;
                }
                resolve(new Uint8Array(reader.result));
              };
              reader.readAsArrayBuffer(file);
            })];}

      });
    });
  };
  CRC32.prototype.file = function (file) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, count, index, start, end, chuck;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(file.size <= _helper.MB)) return [3 /*break*/, 2];
            _a = this.append;
            return [4 /*yield*/, this.readAsUint8Array(file)];
          case 1:
            _a.apply(this, [_b.sent()]);
            return [2 /*return*/, this.compute()];
          case 2:
            count = Math.ceil(file.size / _helper.MB);
            index = 0;
            _b.label = 3;
          case 3:
            if (!(index < count)) return [3 /*break*/, 6];
            start = index * _helper.MB;
            end = index === count - 1 ? file.size : start + _helper.MB;
            return [4 /*yield*/, this.readAsUint8Array(file.slice(start, end))];
          case 4:
            chuck = _b.sent();
            this.append(new Uint8Array(chuck));
            _b.label = 5;
          case 5:
            index++;
            return [3 /*break*/, 3];
          case 6:return [2 /*return*/, this.compute()];}

      });
    });
  };
  CRC32.file = function (file) {
    var crc = new CRC32();
    return crc.file(file);
  };
  return CRC32;
}();exports.CRC32 = CRC32;

/***/ }),
/* 212 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/logger/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















var _reportV = __webpack_require__(/*! ./report-v3 */ 213);var __read = void 0 && (void 0).__read || function (o, n) {var m = typeof Symbol === "function" && o[Symbol.iterator];if (!m) return o;var i = m.call(o),r,ar = [],e;try {while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {ar.push(r.value);}} catch (error) {e = { error: error };} finally {try {if (r && !r.done && (m = i["return"])) m.call(i);} finally {if (e) throw e.error;}}return ar;};var __spread = void 0 && (void 0).__spread || function () {for (var ar = [], i = 0; i < arguments.length; i++) {ar = ar.concat(__read(arguments[i]));}return ar;};
var Logger = /** @class */function () {
  function Logger(token, disableReport, level, prefix) {
    if (disableReport === void 0) {disableReport = true;}
    if (level === void 0) {level = 'OFF';}
    if (prefix === void 0) {prefix = 'UPLOAD';}
    this.token = token;
    this.disableReport = disableReport;
    this.level = level;
    this.prefix = prefix;
    // 为每个类分配一个 id
    // 用以区分不同的上传任务
    this.id = ++Logger.id;
  }
  Logger.prototype.getPrintPrefix = function (level) {
    return "Qiniu-JS-SDK [" + level + "][" + this.prefix + "#" + this.id + "]:";
  };
  /**
      * @param  {V3LogInfo} data 上报的数据。
      * @param  {boolean} retry 重试次数，可选，默认为 3。
      * @description 向服务端上报统计信息。
      */
  Logger.prototype.report = function (data, retry) {
    if (this.disableReport)
    return;
    try {
      (0, _reportV.reportV3)(this.token, data, retry);
    }
    catch (error) {
      this.warn(error);
    }
  };
  /**
      * @param  {unknown[]} ...args
      * @description 输出 info 级别的调试信息。
      */
  Logger.prototype.info = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var allowLevel = ['INFO'];
    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.log.apply(console, __spread([this.getPrintPrefix('INFO')], args));
    }
  };
  /**
      * @param  {unknown[]} ...args
      * @description 输出 warn 级别的调试信息。
      */
  Logger.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var allowLevel = ['INFO', 'WARN'];
    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.warn.apply(console, __spread([this.getPrintPrefix('WARN')], args));
    }
  };
  /**
      * @param  {unknown[]} ...args
      * @description 输出 error 级别的调试信息。
      */
  Logger.prototype.error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var allowLevel = ['INFO', 'WARN', 'ERROR'];
    if (allowLevel.includes(this.level)) {
      // eslint-disable-next-line no-console
      console.error.apply(console, __spread([this.getPrintPrefix('ERROR')], args));
    }
  };
  Logger.id = 0;
  return Logger;
}();var _default =
Logger;exports.default = _default;

/***/ }),
/* 213 */
/*!************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/logger/report-v3.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.reportV3 = reportV3;var _utils = __webpack_require__(/*! ../utils */ 194);
/**
                                                                                                                                          * @param  {string} token 上传使用的 token
                                                                                                                                          * @param  {V3LogInfo} data 上报的统计数据
                                                                                                                                          * @param  {number} retry 重试的次数，默认值 3
                                                                                                                                          * @description v3 版本的日志上传接口，参考文档 https://github.com/qbox/product/blob/master/kodo/uplog.md#%E7%89%88%E6%9C%AC-3。
                                                                                                                                          */
function reportV3(token, data, retry) {
  if (retry === void 0) {retry = 3;}
  var xhr = (0, _utils.createXHR)();
  xhr.open('POST', 'https://uplog.qbox.me/log/3');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Authorization', (0, _utils.getAuthHeaders)(token).Authorization);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status !== 200 && retry > 0) {
      reportV3(token, data, retry - 1);
    }
  };
  // 顺序参考：https://github.com/qbox/product/blob/master/kodo/uplog.md#%E7%89%88%E6%9C%AC-3
  var stringifyData = [
  data.code || '',
  data.reqId || '',
  data.host || '',
  data.remoteIp || '',
  data.port || '',
  data.duration || '',
  data.time || '',
  data.bytesSent || '',
  data.upType || '',
  data.size || ''].
  join(',');
  xhr.send(stringifyData);
}

/***/ }),
/* 214 */
/*!********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/upload/hosts.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.HostPool = exports.Host = void 0;























































var _api = __webpack_require__(/*! ../api */ 205);var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};var __read = void 0 && (void 0).__read || function (o, n) {var m = typeof Symbol === "function" && o[Symbol.iterator];if (!m) return o;var i = m.call(o),r,ar = [],e;try {while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {ar.push(r.value);}} catch (error) {e = { error: error };} finally {try {if (r && !r.done && (m = i["return"])) m.call(i);} finally {if (e) throw e.error;}}return ar;};var __spread = void 0 && (void 0).__spread || function () {for (var ar = [], i = 0; i < arguments.length; i++) {ar = ar.concat(__read(arguments[i]));}return ar;};
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @description 解冻时间，key 是 host，value 为解冻时间
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
var unfreezeTimeMap = new Map();
var Host = /** @class */function () {
  function Host(host, protocol) {
    this.host = host;
    this.protocol = protocol;
  }
  /**
     * @description 当前 host 是否为冻结状态
     */
  Host.prototype.isFrozen = function () {
    var currentTime = new Date().getTime();
    var unfreezeTime = unfreezeTimeMap.get(this.host);
    return unfreezeTime != null && unfreezeTime >= currentTime;
  };
  /**
      * @param  {number} time 单位秒，默认 20s
      * @description 冻结该 host 对象，该 host 将在指定时间内不可用
      */
  Host.prototype.freeze = function (time) {
    if (time === void 0) {time = 20;}
    var unfreezeTime = new Date().getTime() + time * 1000;
    unfreezeTimeMap.set(this.host, unfreezeTime);
  };
  /**
      * @description 解冻该 host
      */
  Host.prototype.unfreeze = function () {
    unfreezeTimeMap["delete"](this.host);
  };
  /**
      * @description 获取当前 host 的完整 url
      */
  Host.prototype.getUrl = function () {
    return this.protocol + "://" + this.host;
  };
  /**
      * @description 获取解冻时间
      */
  Host.prototype.getUnfreezeTime = function () {
    return unfreezeTimeMap.get(this.host);
  };
  return Host;
}();exports.Host = Host;

var HostPool = /** @class */function () {
  /**
                                          * @param  {string[]} initHosts
                                          * @description 如果在构造时传入 initHosts，则该 host 池始终使用传入的 initHosts 做为可用的数据
                                          */
  function HostPool(initHosts) {
    if (initHosts === void 0) {initHosts = [];}
    this.initHosts = initHosts;
    /**
                                 * @description 缓存的 host 表，以 bucket 和 accessKey 作为 key
                                 */
    this.cachedHostsMap = new Map();
  }
  /**
     * @param  {string} accessKey
     * @param  {string} bucketName
     * @param  {string[]} hosts
     * @param  {InternalConfig['upprotocol']} protocol
     * @returns  {void}
     * @description 注册可用 host
     */
  HostPool.prototype.register = function (accessKey, bucketName, hosts, protocol) {
    this.cachedHostsMap.set(accessKey + "@" + bucketName, hosts.map(function (host) {return new Host(host, protocol);}));
  };
  /**
      * @param  {string} accessKey
      * @param  {string} bucketName
      * @param  {InternalConfig['upprotocol']} protocol
      * @returns  {Promise<void>}
      * @description 刷新最新的 host 数据，如果用户在构造时该类时传入了 host 或者已经存在缓存则不会发起请求
      */
  HostPool.prototype.refresh = function (accessKey, bucketName, protocol) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
      var cachedHostList, response, stashHosts;
      return __generator(this, function (_e) {
        switch (_e.label) {
          case 0:
            cachedHostList = this.cachedHostsMap.get(accessKey + "@" + bucketName) || [];
            if (cachedHostList.length > 0)
            return [2 /*return*/];
            if (this.initHosts.length > 0) {
              this.register(accessKey, bucketName, this.initHosts, protocol);
              return [2 /*return*/];
            }
            return [4 /*yield*/, (0, _api.getUpHosts)(accessKey, bucketName, protocol)];
          case 1:
            response = _e.sent();
            if ((response === null || response === void 0 ? void 0 : response.data) != null) {
              stashHosts = __spread(((_b = (_a = response.data.up) === null || _a === void 0 ? void 0 : _a.acc) === null || _b === void 0 ? void 0 : _b.main) || [], ((_d = (_c = response.data.up) === null || _c === void 0 ? void 0 : _c.acc) === null || _d === void 0 ? void 0 : _d.backup) || []);
              this.register(accessKey, bucketName, stashHosts, protocol);
            }
            return [2 /*return*/];}

      });
    });
  };
  /**
      * @param  {string} accessKey
      * @param  {string} bucketName
      * @param  {InternalConfig['upprotocol']} protocol
      * @returns  {Promise<Host | null>}
      * @description 获取一个可用的上传 Host，排除已冻结的
      */
  HostPool.prototype.getUp = function (accessKey, bucketName, protocol) {
    return __awaiter(this, void 0, void 0, function () {
      var cachedHostList, availableHostList, priorityQueue;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:return [4 /*yield*/, this.refresh(accessKey, bucketName, protocol)];
          case 1:
            _a.sent();
            cachedHostList = this.cachedHostsMap.get(accessKey + "@" + bucketName) || [];
            if (cachedHostList.length === 0)
            return [2 /*return*/, null];
            availableHostList = cachedHostList.filter(function (host) {return !host.isFrozen();});
            if (availableHostList.length > 0)
            return [2 /*return*/, availableHostList[0]
            // 无可用的，去取离解冻最近的 host
            ];
            priorityQueue = cachedHostList.
            slice().sort(function (hostA, hostB) {return (hostA.getUnfreezeTime() || 0) - (hostB.getUnfreezeTime() || 0);});
            return [2 /*return*/, priorityQueue[0]];}

      });
    });
  };
  return HostPool;
}();exports.HostPool = HostPool;

/***/ }),
/* 215 */
/*!**********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/node_modules/qiniu-js/esm/utils/compress.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































var _errors = __webpack_require__(/*! ../errors */ 192);
var _helper = __webpack_require__(/*! ./helper */ 198);var __assign = void 0 && (void 0).__assign || function () {__assign = Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};return __assign.apply(this, arguments);};var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};
var mimeTypes = {
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  WEBP: 'image/webp',
  BMP: 'image/bmp' };

var maxSteps = 4;
var scaleFactor = Math.log(2);
var supportMimeTypes = Object.keys(mimeTypes).map(function (type) {return mimeTypes[type];});
var defaultType = mimeTypes.JPEG;
function isSupportedType(type) {
  return supportMimeTypes.includes(type);
}
var Compress = /** @class */function () {
  function Compress(file, config) {
    this.file = file;
    this.config = config;
    this.config = __assign({ quality: 0.92, noCompressIfLarger: false }, this.config);
  }
  Compress.prototype.process = function () {
    return __awaiter(this, void 0, void 0, function () {
      var srcDimension, originImage, canvas, scale, scaleCanvas, distBlob;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.outputType = this.file.type;
            srcDimension = {};
            if (!isSupportedType(this.file.type)) {
              throw new _errors.QiniuError(_errors.QiniuErrorName.UnsupportedFileType, "unsupported file type: " + this.file.type);
            }
            return [4 /*yield*/, this.getOriginImage()];
          case 1:
            originImage = _a.sent();
            return [4 /*yield*/, this.getCanvas(originImage)];
          case 2:
            canvas = _a.sent();
            scale = 1;
            if (this.config.maxWidth) {
              scale = Math.min(1, this.config.maxWidth / canvas.width);
            }
            if (this.config.maxHeight) {
              scale = Math.min(1, scale, this.config.maxHeight / canvas.height);
            }
            srcDimension.width = canvas.width;
            srcDimension.height = canvas.height;
            return [4 /*yield*/, this.doScale(canvas, scale)];
          case 3:
            scaleCanvas = _a.sent();
            distBlob = this.toBlob(scaleCanvas);
            if (distBlob.size > this.file.size && this.config.noCompressIfLarger) {
              return [2 /*return*/, {
                dist: this.file,
                width: srcDimension.width,
                height: srcDimension.height }];

            }
            return [2 /*return*/, {
              dist: distBlob,
              width: scaleCanvas.width,
              height: scaleCanvas.height }];}


      });
    });
  };
  Compress.prototype.clear = function (ctx, width, height) {
    // jpeg 没有 alpha 通道，透明区间会被填充成黑色，这里把透明区间填充为白色
    if (this.outputType === defaultType) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
    } else
    {
      ctx.clearRect(0, 0, width, height);
    }
  };
  /** 通过 file 初始化 image 对象 */
  Compress.prototype.getOriginImage = function () {
    var _this = this;
    return new Promise(function (resolve, reject) {
      var url = (0, _helper.createObjectURL)(_this.file);
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject('image load error');
      };
      img.src = url;
    });
  };
  Compress.prototype.getCanvas = function (img) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      if (!context) {
        reject(new _errors.QiniuError(_errors.QiniuErrorName.GetCanvasContextFailed, 'context is null'));
        return;
      }
      var width = img.width,height = img.height;
      canvas.height = height;
      canvas.width = width;
      _this.clear(context, width, height);
      context.drawImage(img, 0, 0);
      resolve(canvas);
    });
  };
  Compress.prototype.doScale = function (source, scale) {
    return __awaiter(this, void 0, void 0, function () {
      var sctx, steps, factor, mirror, mctx, width, height, originWidth, originHeight, src, context, i, dw, dh, canvas, data;
      return __generator(this, function (_a) {
        if (scale === 1) {
          return [2 /*return*/, source];
        }
        sctx = source.getContext('2d');
        steps = Math.min(maxSteps, Math.ceil(1 / scale / scaleFactor));
        factor = Math.pow(scale, 1 / steps);
        mirror = document.createElement('canvas');
        mctx = mirror.getContext('2d');
        width = source.width, height = source.height;
        originWidth = width;
        originHeight = height;
        mirror.width = width;
        mirror.height = height;
        if (!mctx || !sctx) {
          throw new _errors.QiniuError(_errors.QiniuErrorName.GetCanvasContextFailed, "mctx or sctx can't be null");
        }
        for (i = 0; i < steps; i++) {
          dw = width * factor | 0 // eslint-disable-line no-bitwise
          ;
          dh = height * factor | 0 // eslint-disable-line no-bitwise
          ;
          // 到最后一步的时候 dw, dh 用目标缩放尺寸，否则会出现最后尺寸偏小的情况
          if (i === steps - 1) {
            dw = originWidth * scale;
            dh = originHeight * scale;
          }
          if (i % 2 === 0) {
            src = source;
            context = mctx;
          } else
          {
            src = mirror;
            context = sctx;
          }
          // 每次画前都清空，避免图像重叠
          this.clear(context, width, height);
          context.drawImage(src, 0, 0, width, height, 0, 0, dw, dh);
          width = dw;
          height = dh;
        }
        canvas = src === source ? mirror : source;
        data = context.getImageData(0, 0, width, height);
        // resize
        canvas.width = width;
        canvas.height = height;
        // store image data
        context.putImageData(data, 0, 0);
        return [2 /*return*/, canvas];
      });
    });
  };
  /** 这里把 base64 字符串转为 blob 对象 */
  Compress.prototype.toBlob = function (result) {
    var dataURL = result.toDataURL(this.outputType, this.config.quality);
    var buffer = atob(dataURL.split(',')[1]).split('').map(function (char) {return char.charCodeAt(0);});
    var blob = new Blob([new Uint8Array(buffer)], { type: this.outputType });
    return blob;
  };
  return Compress;
}();
var compressImage = function compressImage(file, options) {return new Compress(file, options).process();};var _default =
compressImage;exports.default = _default;

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = MeScroll; /* mescroll
                                                                                                        * version 1.3.7
                                                                                                        * 2021-04-12 wenju
                                                                                                        * https://www.mescroll.com
                                                                                                        */

function MeScroll(options, isScrollBody) {
  var me = this;
  me.version = '1.3.7'; // mescroll版本号
  me.options = options || {}; // 配置
  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view

  me.isDownScrolling = false; // 是否在执行下拉刷新的回调
  me.isUpScrolling = false; // 是否在执行上拉加载的回调
  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback

  // 初始化下拉刷新
  me.initDownScroll();
  // 初始化上拉加载,则初始化
  me.initUpScroll();

  // 自动加载
  setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)
    if ((me.optDown.use || me.optDown.native) && me.optDown.auto && hasDownCallback) {
      if (me.optDown.autoShowLoading) {
        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调
      } else {
        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调
      }
    }
    // 自动触发上拉加载
    if (!me.isUpAutoLoad) {// 部分小程序(头条小程序)emit是异步, 会导致isUpAutoLoad判断有误, 先延时确保先执行down的callback,再执行up的callback
      setTimeout(function () {
        me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();
      }, 100);
    }
  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行
}

/* 配置参数:下拉刷新 */
MeScroll.prototype.extendDownScroll = function (optDown) {
  // 下拉刷新的配置
  MeScroll.extend(optDown, {
    use: true, // 是否启用下拉刷新; 默认true
    auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
    native: false, // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    autoShowLoading: false, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
    isLock: false, // 是否锁定下拉刷新,默认false;
    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    startTop: 100, // scroll-view快速滚动到顶部时,此时的scroll-top可能大于0, 此值用于控制最大的误差
    inOffsetRate: 1, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    outOffsetRate: 0.2, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    bottomOffset: 20, // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...', // 加载中的提示文本
    textSuccess: '加载成功', // 加载成功的文本
    textErr: '加载失败', // 加载失败的文本
    beforeEndDelay: 0, // 延时结束的时长 (显示加载成功/失败的时长, android小程序设置此项结束下拉会卡顿, 配置后请注意测试)
    bgColor: "transparent", // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
    textColor: "gray", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null, // 下拉刷新初始化完毕的回调
    inOffset: null, // 下拉的距离进入offset范围内那一刻的回调
    outOffset: null, // 下拉的距离大于offset那一刻的回调
    onMoving: null, // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    beforeLoading: null, // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
    showLoading: null, // 显示下拉刷新进度的回调
    afterLoading: null, // 显示下拉刷新进度的回调之后,马上要执行的代码 (如: 在wxs中使用)
    beforeEndDownScroll: null, // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
    endDownScroll: null, // 结束下拉刷新的回调
    afterEndDownScroll: null, // 结束下拉刷新的回调,马上要执行的代码 (如: 在wxs中使用)
    callback: function callback(mescroll) {
      // 下拉刷新的回调;默认重置上拉加载列表为第一页
      mescroll.resetUpScroll();
    } });

};

/* 配置参数:上拉加载 */
MeScroll.prototype.extendUpScroll = function (optUp) {
  // 上拉加载的配置
  MeScroll.extend(optUp, {
    use: true, // 是否启用上拉加载; 默认true
    auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
    isLock: false, // 是否锁定上拉加载,默认false;
    isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
    callback: null, // 上拉加载的回调;function(page,mescroll){ }
    page: {
      num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      size: 10, // 每页数据的数量
      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    },
    noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    offset: 150, // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    textLoading: '加载中 ...', // 加载中的提示文本
    textNoMore: '-- END --', // 没有更多数据的提示文本
    bgColor: "transparent", // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)
    textColor: "gray", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null, // 初始化完毕的回调
    showLoading: null, // 显示加载中的回调
    showNoMore: null, // 显示无更多数据的回调
    hideUpScroll: null, // 隐藏上拉加载的回调
    errDistance: 60, // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: null, // 图片路径,默认null (绝对路径或网络图)
      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300, // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
      btnClick: null, // 点击按钮的回调
      onShow: null, // 是否显示的回调
      zIndex: 9990, // fixed定位z-index值
      left: null, // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      right: 20, // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      bottom: 120, // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)
      width: 72, // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      radius: "50%" // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
    },
    empty: {
      use: true, // 是否显示空布局
      icon: null, // 图标路径
      tip: '~ 暂无相关数据 ~', // 提示
      btnText: '', // 按钮
      btnClick: null, // 点击按钮的回调
      onShow: null, // 是否显示的回调
      fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
      top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
      zIndex: 99 // fixed定位z-index值
    },
    onScroll: false // 是否监听滚动事件
  });
};

/* 配置参数 */
MeScroll.extend = function (userOption, defaultOption) {
  if (!userOption) return defaultOption;
  for (var key in defaultOption) {
    if (userOption[key] == null) {
      var def = defaultOption[key];
      if (def != null && typeof def === 'object') {
        userOption[key] = MeScroll.extend({}, def); // 深度匹配
      } else {
        userOption[key] = def;
      }
    } else if (typeof userOption[key] === 'object') {
      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配
    }
  }
  return userOption;
};

/* 简单判断是否配置了颜色 (非透明,非白色) */
MeScroll.prototype.hasColor = function (color) {
  if (!color) return false;
  var c = color.toLowerCase();
  return c != "#fff" && c != "#ffffff" && c != "transparent" && c != "white";
};

/* -------初始化下拉刷新------- */
MeScroll.prototype.initDownScroll = function () {
  var me = this;
  // 配置参数
  me.optDown = me.options.down || {};
  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendDownScroll(me.optDown);

  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新
  if (me.isScrollBody && me.optDown.native) {
    me.optDown.use = false;
  } else {
    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持
  }

  me.downHight = 0; // 下拉区域的高度

  // 在页面中加入下拉布局
  if (me.optDown.use && me.optDown.inited) {
    // 初始化完毕的回调
    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optDown.inited(me);
    }, 0);
  }
};

/* 列表touchstart事件 */
MeScroll.prototype.touchstartEvent = function (e) {
  if (!this.optDown.use) return;

  this.startPoint = this.getPoint(e); // 记录起点
  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置
  this.startAngle = 0; // 初始角度
  this.lastPoint = this.startPoint; // 重置上次move的点
  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)
  this.inTouchend = false; // 标记不是touchend
};

/* 列表touchmove事件 */
MeScroll.prototype.touchmoveEvent = function (e) {
  if (!this.optDown.use) return;
  var me = this;

  var scrollTop = me.getScrollTop(); // 当前滚动条的距离
  var curPoint = me.getPoint(e); // 当前点

  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉

  // 向下拉 && 在顶部
  // mescroll-body,直接判定在顶部即可
  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove
  // scroll-view滚动到顶部时,scrollTop不一定为0,也有可能大于0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等
  if (moveY > 0 && (
  me.isScrollBody && scrollTop <= 0 ||

  !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop)))
  {
    // 可下拉的条件
    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling &&
    me.optUp.isBoth)) {

      // 下拉的初始角度是否在配置的范围内
      if (!me.startAngle) me.startAngle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]
      if (me.startAngle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新

      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {
        me.inTouchend = true; // 标记执行touchend
        me.touchendEvent(); // 提前触发touchend
        return;
      }

      me.preventDefault(e); // 阻止默认事件

      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)

      // 下拉距离  < 指定距离
      if (me.downHight < me.optDown.offset) {
        if (me.movetype !== 1) {
          me.movetype = 1; // 加入标记,保证只执行一次
          me.isDownEndSuccess = null; // 重置是否加载成功的状态 (wxs执行的是wxs.wxs)
          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }
        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小

        // 指定距离  <= 下拉距离
      } else {
        if (me.movetype !== 2) {
          me.movetype = 2; // 加入标记,保证只执行一次
          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }
        if (diff > 0) {// 向下拉
          me.downHight += diff * me.optDown.outOffsetRate; // 越往下,高度变化越小
        } else {// 向上收
          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度
        }
      }

      me.downHight = Math.round(me.downHight); // 取整
      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值
      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行
    }
  }

  me.lastPoint = curPoint; // 记录本次移动的点
};

/* 列表touchend事件 */
MeScroll.prototype.touchendEvent = function (e) {
  if (!this.optDown.use) return;
  // 如果下拉区域高度已改变,则需重置回来
  if (this.isMoveDown) {
    if (this.downHight >= this.optDown.offset) {
      // 符合触发刷新的条件
      this.triggerDownScroll();
    } else {
      // 不符合的话 则重置
      this.downHight = 0;
      this.endDownScrollCall(this);
    }
    this.movetype = 0;
    this.isMoveDown = false;
  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {// scroll-view到顶/左/右/底的滑动事件
    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉
    // 上滑
    if (isScrollUp) {
      // 需检查滑动的角度
      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]
      if (angle > 80) {
        // 检查并触发上拉
        this.triggerUpScroll(true);
      }
    }
  }
};

/* 根据点击滑动事件获取第一个手指的坐标 */
MeScroll.prototype.getPoint = function (e) {
  if (!e) {
    return {
      x: 0,
      y: 0 };

  }
  if (e.touches && e.touches[0]) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY };

  } else if (e.changedTouches && e.changedTouches[0]) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY };

  } else {
    return {
      x: e.clientX,
      y: e.clientY };

  }
};

/* 计算两点之间的角度: 区间 [0,90]*/
MeScroll.prototype.getAngle = function (p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  var z = Math.sqrt(x * x + y * y);
  var angle = 0;
  if (z !== 0) {
    angle = Math.asin(y / z) / Math.PI * 180;
  }
  return angle;
};

/* 触发下拉刷新 */
MeScroll.prototype.triggerDownScroll = function () {
  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {
    //return true则处于完全自定义状态
  } else {
    this.showDownScroll(); // 下拉刷新中...
    !this.optDown.native && this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示下拉进度布局 */
MeScroll.prototype.showDownScroll = function () {
  this.isDownScrolling = true; // 标记下拉中
  if (this.optDown.native) {
    uni.startPullDownRefresh(); // 系统自带的下拉刷新
    this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到
  } else {
    this.downHight = this.optDown.offset; // 更新下拉区域高度
    this.showDownLoadingCall(this.downHight); // 下拉刷新中...
  }
};

MeScroll.prototype.showDownLoadingCall = function (downHight) {
  this.optDown.showLoading && this.optDown.showLoading(this, downHight); // 下拉刷新中...
  this.optDown.afterLoading && this.optDown.afterLoading(this, downHight); // 下拉刷新中...触发之后马上要执行的代码
};

/* 显示系统自带的下拉刷新时需要处理的业务 */
MeScroll.prototype.onPullDownRefresh = function () {
  this.isDownScrolling = true; // 标记下拉中
  this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到
  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
};

/* 结束下拉刷新 */
MeScroll.prototype.endDownScroll = function () {
  if (this.optDown.native) {// 结束原生下拉刷新
    this.isDownScrolling = false;
    this.endDownScrollCall(this);
    uni.stopPullDownRefresh();
    return;
  }
  var me = this;
  // 结束下拉刷新的方法
  var endScroll = function endScroll() {
    me.downHight = 0;
    me.isDownScrolling = false;
    me.endDownScrollCall(me);
    if (!me.isScrollBody) {
      me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页
      me.scrollTo(0, 0); // scroll-view需重置滚动条到顶部,避免startTop大于0时,对下拉刷新的影响
    }
  };
  // 结束下拉刷新时的回调
  var delay = 0;
  if (me.optDown.beforeEndDownScroll) {
    delay = me.optDown.beforeEndDownScroll(me); // 结束下拉刷新的延时,单位ms
    if (me.isDownEndSuccess == null) delay = 0; // 没有执行加载中,则不延时
  }
  if (typeof delay === 'number' && delay > 0) {
    setTimeout(endScroll, delay);
  } else {
    endScroll();
  }
};

MeScroll.prototype.endDownScrollCall = function () {
  this.optDown.endDownScroll && this.optDown.endDownScroll(this);
  this.optDown.afterEndDownScroll && this.optDown.afterEndDownScroll(this);
};

/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockDownScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optDown.isLock = isLock;
};

/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockUpScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optUp.isLock = isLock;
};

/* -------初始化上拉加载------- */
MeScroll.prototype.initUpScroll = function () {
  var me = this;
  // 配置参数
  me.optUp = me.options.up || { use: false };
  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendUpScroll(me.optUp);

  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局
  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页
  me.startNum = me.optUp.page.num + 1; // 记录page开始的页码

  // 初始化完毕的回调
  if (me.optUp.inited) {
    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optUp.inited(me);
    }, 0);
  }
};

/*滚动到底部的事件 (仅mescroll-body生效)*/
MeScroll.prototype.onReachBottom = function () {
  if (this.isScrollBody && !this.isUpScrolling) {// 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom
    if (!this.optUp.isLock && this.optUp.hasNext) {
      this.triggerUpScroll();
    }
  }
};

/*列表滚动事件 (仅mescroll-body生效)*/
MeScroll.prototype.onPageScroll = function (e) {
  if (!this.isScrollBody) return;

  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)
  this.setScrollTop(e.scrollTop);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }
};

/*列表滚动事件*/
MeScroll.prototype.scroll = function (e, onScroll) {
  // 更新滚动条的位置
  this.setScrollTop(e.scrollTop);
  // 更新滚动内容高度
  this.setScrollHeight(e.scrollHeight);

  // 向上滑还是向下滑动
  if (this.preScrollY == null) this.preScrollY = 0;
  this.isScrollUp = e.scrollTop - this.preScrollY > 0;
  this.preScrollY = e.scrollTop;

  // 上滑 && 检查并触发上拉
  this.isScrollUp && this.triggerUpScroll(true);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }

  // 滑动监听
  this.optUp.onScroll && onScroll && onScroll();
};

/* 触发上拉加载 */
MeScroll.prototype.triggerUpScroll = function (isCheck) {
  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
    // 是否校验在底部; 默认不校验
    if (isCheck === true) {
      var canUp = false;
      // 还有下一页 && 没有锁定 && 不在下拉中
      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {
        if (this.getScrollBottom() <= this.optUp.offset) {// 到底部
          canUp = true; // 标记可上拉
        }
      }
      if (canUp === false) return;
    }
    this.showUpScroll(); // 上拉加载中...
    this.optUp.page.num++; // 预先加一页,如果失败则减回
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示上拉加载中 */
MeScroll.prototype.showUpScroll = function () {
  this.isUpScrolling = true; // 标记上拉加载中
  this.optUp.showLoading && this.optUp.showLoading(this); // 回调
};

/* 显示上拉无更多数据 */
MeScroll.prototype.showNoMore = function () {
  this.optUp.hasNext = false; // 标记无更多数据
  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调
};

/* 隐藏上拉区域**/
MeScroll.prototype.hideUpScroll = function () {
  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调
};

/* 结束上拉加载 */
MeScroll.prototype.endUpScroll = function (isShowNoMore) {
  if (isShowNoMore != null) {// isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用
    if (isShowNoMore) {
      this.showNoMore(); // isShowNoMore=true,显示无更多数据
    } else {
      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载
    }
  }
  this.isUpScrolling = false; // 标记结束上拉加载
};

/* 重置上拉加载列表为第一页
    *isShowLoading 是否显示进度布局;
    * 1.默认null,不传参,则显示上拉加载的进度布局
    * 2.传参true, 则显示下拉刷新的进度布局
    * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
    */
MeScroll.prototype.resetUpScroll = function (isShowLoading) {
  if (this.optUp && this.optUp.use) {
    var page = this.optUp.page;
    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回
    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回
    page.num = this.startNum; // 重置为第一页
    page.time = null; // 重置时间为空
    if (!this.isDownScrolling && isShowLoading !== false) {// 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;
      if (isShowLoading == null) {
        this.removeEmpty(); // 移除空布局
        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局
      } else {
        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表
      }
    }
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调
  }
};

/* 设置page.num的值 */
MeScroll.prototype.setPageNum = function (num) {
  this.optUp.page.num = num - 1;
};

/* 设置page.size的值 */
MeScroll.prototype.setPageSize = function (size) {
  this.optUp.page.size = size;
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据量(必传)
    * totalPage: 总页数(必传)
    * systime: 服务器时间 (可空)
    */
MeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {
  var hasNext;
  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据量(必传)
    * totalSize: 列表所有数据总数量(必传)
    * systime: 服务器时间 (可空)
    */
MeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {
  var hasNext;
  if (this.optUp.use && totalSize != null) {
    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数
    hasNext = loadSize < totalSize; // 是否还有下一页
  }
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页
    * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
    * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录
    */
MeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {
  var me = this;
  // 结束下拉刷新
  if (me.isDownScrolling) {
    me.isDownEndSuccess = true;
    me.endDownScroll();
  }

  // 结束上拉加载
  if (me.optUp.use) {
    var isShowNoMore; // 是否已无更多数据
    if (dataSize != null) {
      var pageNum = me.optUp.page.num; // 当前页码
      var pageSize = me.optUp.page.size; // 每页长度
      // 如果是第一页
      if (pageNum === 1) {
        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间
      }
      if (dataSize < pageSize || hasNext === false) {
        // 返回的数据不满一页时,则说明已无更多数据
        me.optUp.hasNext = false;
        if (dataSize === 0 && pageNum === 1) {
          // 如果第一页无任何数据且配置了空布局
          isShowNoMore = false;
          me.showEmpty();
        } else {
          // 总列表数少于配置的数量,则不显示无更多数据
          var allDataSize = (pageNum - 1) * pageSize + dataSize;
          if (allDataSize < me.optUp.noMoreSize) {
            isShowNoMore = false;
          } else {
            isShowNoMore = true;
          }
          me.removeEmpty(); // 移除空布局
        }
      } else {
        // 还有下一页
        isShowNoMore = false;
        me.optUp.hasNext = true;
        me.removeEmpty(); // 移除空布局
      }
    }

    // 隐藏上拉
    me.endUpScroll(isShowNoMore);
  }
};

/* 回调失败,结束下拉刷新和上拉加载 */
MeScroll.prototype.endErr = function (errDistance) {
  // 结束下拉,回调失败重置回原来的页码和时间
  if (this.isDownScrolling) {
    this.isDownEndSuccess = false;
    var page = this.optUp.page;
    if (page && this.prePageNum) {
      page.num = this.prePageNum;
      page.time = this.prePageTime;
    }
    this.endDownScroll();
  }
  // 结束上拉,回调失败重置回原来的页码
  if (this.isUpScrolling) {
    this.optUp.page.num--;
    this.endUpScroll(false);
    // 如果是mescroll-body,则需往回滚一定距离
    if (this.isScrollBody && errDistance !== 0) {// 不处理0
      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认
      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离
    }
  }
};

/* 显示空布局 */
MeScroll.prototype.showEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
};

/* 移除空布局 */
MeScroll.prototype.removeEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);
};

/* 显示回到顶部的按钮 */
MeScroll.prototype.showTopBtn = function () {
  if (!this.topBtnShow) {
    this.topBtnShow = true;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
  }
};

/* 隐藏回到顶部的按钮 */
MeScroll.prototype.hideTopBtn = function () {
  if (this.topBtnShow) {
    this.topBtnShow = false;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
  }
};

/* 获取滚动条的位置 */
MeScroll.prototype.getScrollTop = function () {
  return this.scrollTop || 0;
};

/* 记录滚动条的位置 */
MeScroll.prototype.setScrollTop = function (y) {
  this.scrollTop = y;
};

/* 滚动到指定位置 */
MeScroll.prototype.scrollTo = function (y, t) {
  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法
};

/* 自定义scrollTo */
MeScroll.prototype.resetScrollTo = function (myScrollTo) {
  this.myScrollTo = myScrollTo;
};

/* 滚动条到底部的距离 */
MeScroll.prototype.getScrollBottom = function () {
  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
};

/* 计步器
    star: 开始值
    end: 结束值
    callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;
    t: 计步时长,传0则直接回调end值;不传则默认300ms
    rate: 周期;不传则默认30ms计步一次
    * */
MeScroll.prototype.getStep = function (star, end, callback, t, rate) {
  var diff = end - star; // 差值
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300; // 时长 300ms
  rate = rate || 30; // 周期 30ms
  var count = t / rate; // 次数
  var step = diff / count; // 步长
  var i = 0; // 计数
  var timer = setInterval(function () {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差
      clearInterval(timer);
    }
  }, rate);
};

/* 滚动容器的高度 */
MeScroll.prototype.getClientHeight = function (isReal) {
  var h = this.clientHeight || 0;
  if (h === 0 && isReal !== true) {// 未获取到容器的高度,可临时取body的高度 (可能会有误差)
    h = this.getBodyHeight();
  }
  return h;
};
MeScroll.prototype.setClientHeight = function (h) {
  this.clientHeight = h;
};

/* 滚动内容的高度 */
MeScroll.prototype.getScrollHeight = function () {
  return this.scrollHeight || 0;
};
MeScroll.prototype.setScrollHeight = function (h) {
  this.scrollHeight = h;
};

/* body的高度 */
MeScroll.prototype.getBodyHeight = function () {
  return this.bodyHeight || 0;
};
MeScroll.prototype.setBodyHeight = function (h) {
  this.bodyHeight = h;
};

/* 阻止浏览器默认滚动事件 */
MeScroll.prototype.preventDefault = function (e) {
  // 小程序不支持e.preventDefault, 已在wxs中禁止
  // app的bounce只能通过配置pages.json的style.app-plus.bounce为"none"来禁止, 或使用renderjs禁止
  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 306 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni-option.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 全局配置
// mescroll-body 和 mescroll-uni 通用
var GlobalOption = {
  down: {
    // 其他down的配置参数也可以写,这里只展示了常用的配置:
    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  },
  up: {
    // 其他up的配置参数也可以写,这里只展示了常用的配置:
    offset: 150, // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: "https://www.mescroll.com/img/mescroll-totop.png", // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000px
      right: 20, // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      bottom: 120, // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      width: 72 // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
    },
    empty: {
      use: true, // 是否显示空布局
      icon: "https://www.mescroll.com/img/mescroll-empty.png" // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
    } },

  // 国际化配置
  i18n: {
    // 中文
    zh: {
      down: {
        textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
        textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
        textLoading: '加载中 ...', // 加载中的提示文本
        textSuccess: '加载成功', // 加载成功的文本
        textErr: '加载失败' // 加载失败的文本
      },
      up: {
        textLoading: '加载中 ...', // 加载中的提示文本
        textNoMore: '-- END --', // 没有更多数据的提示文本
        empty: {
          tip: '~ 空空如也 ~' // 空提示
        } } },


    // 英文
    en: {
      down: {
        textInOffset: 'drop down refresh',
        textOutOffset: 'release updates',
        textLoading: 'loading ...',
        textSuccess: 'loaded successfully',
        textErr: 'loading failed' },

      up: {
        textLoading: 'loading ...',
        textNoMore: '-- END --',
        empty: {
          tip: '~ absolutely empty ~' } } } } };var _default =






GlobalOption;exports.default = _default;

/***/ }),
/* 307 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-i18n.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 国际化工具类
var mescrollI18n = {
  // 默认语言
  def: "zh",
  // 获取当前语言类型
  getType: function getType() {
    return uni.getStorageSync("mescroll-i18n") || this.def;
  },
  // 设置当前语言类型
  setType: function setType(type) {
    uni.setStorageSync("mescroll-i18n", type);
  } };var _default =


mescrollI18n;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 308 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/mescroll-uni/components/mescroll-uni/wxs/mixins.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 定义在wxs (含renderjs) 逻辑层的数据和方法, 与视图层相互通信
var WxsMixin = {
  data: function data() {
    return {
      // 传入wxs视图层的数据 (响应式)
      wxsProp: {
        optDown: {}, // 下拉刷新的配置
        scrollTop: 0, // 滚动条的距离
        bodyHeight: 0, // body的高度
        isDownScrolling: false, // 是否正在下拉刷新中
        isUpScrolling: false, // 是否正在上拉加载中
        isScrollBody: true, // 是否为mescroll-body滚动
        isUpBoth: true, // 上拉加载时,是否同时可以下拉刷新
        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      },

      // 标记调用wxs视图层的方法
      callProp: {
        callType: '', // 方法名
        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)
      },

      // 不用wxs的平台使用此处的wxsBiz对象,抹平wxs的写法 (微信小程序和APP使用的wxsBiz对象是./wxs/wxs.wxs)



















      // 不用renderjs的平台使用此处的renderBiz对象,抹平renderjs的写法 (app 和 h5 使用的renderBiz对象是./wxs/renderjs.js)

      renderBiz: {
        propObserver: function propObserver() {} // 抹平renderjs的写法
      } };


  },
  methods: {
    // wxs视图层调用逻辑层的回调
    wxsCall: function wxsCall(msg) {
      if (msg.type === 'setWxsProp') {
        // 更新wxsProp数据 (值改变才触发更新)
        this.wxsProp = {
          optDown: this.mescroll.optDown,
          scrollTop: this.mescroll.getScrollTop(),
          bodyHeight: this.mescroll.getBodyHeight(),
          isDownScrolling: this.mescroll.isDownScrolling,
          isUpScrolling: this.mescroll.isUpScrolling,
          isUpBoth: this.mescroll.optUp.isBoth,
          isScrollBody: this.mescroll.isScrollBody,
          t: Date.now() };

      } else if (msg.type === 'setLoadType') {
        // 设置inOffset,outOffset的状态
        this.downLoadType = msg.downLoadType;
        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中
        this.$set(this.mescroll, 'downLoadType', this.downLoadType);
        // 重置是否加载成功的状态
        this.$set(this.mescroll, 'isDownEndSuccess', null);
      } else if (msg.type === 'triggerDownScroll') {
        // 主动触发下拉刷新
        this.mescroll.triggerDownScroll();
      } else if (msg.type === 'endDownScroll') {
        // 结束下拉刷新
        this.mescroll.endDownScroll();
      } else if (msg.type === 'triggerUpScroll') {
        // 主动触发上拉加载
        this.mescroll.triggerUpScroll(true);
      }
    } },

  mounted: function mounted() {var _this = this;

    // 配置主动触发wxs显示加载进度的回调
    this.mescroll.optDown.afterLoading = function () {
      _this.callProp = { callType: "showLoading", t: Date.now() }; // 触发wxs的方法 (值改变才触发更新)
    };
    // 配置主动触发wxs隐藏加载进度的回调
    this.mescroll.optDown.afterEndDownScroll = function () {
      _this.callProp = { callType: "endDownScroll", t: Date.now() }; // 触发wxs的方法 (值改变才触发更新)
      var delay = 300 + (_this.mescroll.optDown.beforeEndDelay || 0);
      setTimeout(function () {
        if (_this.downLoadType === 4 || _this.downLoadType === 0) {
          _this.callProp = { callType: "clearTransform", t: Date.now() }; // 触发wxs的方法 (值改变才触发更新)
        }
        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中
        _this.$set(_this.mescroll, 'downLoadType', _this.downLoadType);
      }, delay);
    };
    // 初始化wxs的数据
    this.wxsCall({ type: 'setWxsProp' });

  } };var _default =


WxsMixin;exports.default = _default;

/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/*!*******************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/util/getScore.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getScore = getScore;function getScore(score) {
  if (score !== -1) {
    var res = Math.round(score);
    return res / 2;
  } else {
    return 'zaneu';
  }
}

/***/ }),
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */
/*!***************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/components/u-parse/libs/MpHtmlParser.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201029
 * @author JinYufeng
 * @listens MIT
 */
var cfg = __webpack_require__(/*! ./config.js */ 432),
blankChar = cfg.blankChar,
CssHandler = __webpack_require__(/*! ./CssHandler.js */ 433),
windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;

function MpHtmlParser(data) {var _this = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.attrs = {};
  this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
  this.data = data;
  this.domain = options.domain;
  this.DOM = [];
  this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
  options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
  this.options = options;
  this.state = this.Text;
  this.STACK = [];
  // 工具函数
  this.bubble = function () {
    for (var i = _this.STACK.length, item; item = _this.STACK[--i];) {
      if (cfg.richOnlyTags[item.name]) return false;
      item.c = 1;
    }
    return true;
  };
  this.decode = function (val, amp) {
    var i = -1,
    j,en;
    while (1) {
      if ((i = val.indexOf('&', i + 1)) == -1) break;
      if ((j = val.indexOf(';', i + 2)) == -1) break;
      if (val[i + 1] == '#') {
        en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
        if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
      } else {
        en = val.substring(i + 1, j);
        if (cfg.entities[en] || en == amp)
        val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
      }
    }
    return val;
  };
  this.getUrl = function (url) {
    if (url[0] == '/') {
      if (url[1] == '/') url = _this.options.prot + ':' + url;else
      if (_this.domain) url = _this.domain + url;
    } else if (_this.domain && url.indexOf('data:') != 0 && !url.includes('://'))
    url = _this.domain + '/' + url;
    return url;
  };
  this.isClose = function () {return _this.data[_this.i] == '>' || _this.data[_this.i] == '/' && _this.data[_this.i + 1] == '>';};
  this.section = function () {return _this.data.substring(_this.start, _this.i);};
  this.parent = function () {return _this.STACK[_this.STACK.length - 1];};
  this.siblings = function () {return _this.STACK.length ? _this.parent().children : _this.DOM;};
}
MpHtmlParser.prototype.parse = function () {
  if (emoji) this.data = emoji.parseEmoji(this.data);
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  if (this.state == this.Text) this.setText();
  while (this.STACK.length) {this.popNode(this.STACK.pop());}
  return this.DOM;
};
// 设置属性
MpHtmlParser.prototype.setAttr = function () {
  var name = this.attrName.toLowerCase(),
  val = this.attrVal;
  if (cfg.boolAttrs[name]) this.attrs[name] = 'T';else
  if (val) {
    if (name == 'src' || name == 'data-src' && !this.attrs.src) this.attrs.src = this.getUrl(this.decode(val, 'amp'));else
    if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');else
    if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
  }
  this.attrVal = '';
  while (blankChar[this.data[this.i]]) {this.i++;}
  if (this.isClose()) this.setNode();else
  {
    this.start = this.i;
    this.state = this.AttrName;
  }
};
// 设置文本节点
MpHtmlParser.prototype.setText = function () {
  var back,text = this.section();
  if (!text) return;
  text = cfg.onText && cfg.onText(text, function () {return back = true;}) || text;
  if (back) {
    this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
    var j = this.start + text.length;
    for (this.i = this.start; this.i < j; this.i++) {this.state(this.data[this.i]);}
    return;
  }
  if (!this.pre) {
    // 合并空白符
    var flag,tmp = [];
    for (var i = text.length, c; c = text[--i];) {
      if (!blankChar[c]) {
        tmp.unshift(c);
        if (!flag) flag = 1;
      } else {
        if (tmp[0] != ' ') tmp.unshift(' ');
        if (c == '\n' && flag == void 0) flag = 0;
      }}
    if (flag == 0) return;
    text = tmp.join('');
  }
  this.siblings().push({
    type: 'text',
    text: this.decode(text) });

};
// 设置元素节点
MpHtmlParser.prototype.setNode = function () {
  var node = {
    name: this.tagName.toLowerCase(),
    attrs: this.attrs },

  close = cfg.selfClosingTags[node.name];
  if (this.options.nodes.length) node.type = 'node';
  this.attrs = {};
  if (!cfg.ignoreTags[node.name]) {
    // 处理属性
    var attrs = node.attrs,
    style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
    styleObj = {};
    if (attrs.id) {
      if (this.options.compress & 1) attrs.id = void 0;else
      if (this.options.useAnchor) this.bubble();
    }
    if (this.options.compress & 2 && attrs.class) attrs.class = void 0;
    switch (node.name) {
      case 'a':
      case 'ad':


        this.bubble();
        break;
      case 'font':
        if (attrs.color) {
          styleObj['color'] = attrs.color;
          attrs.color = void 0;
        }
        if (attrs.face) {
          styleObj['font-family'] = attrs.face;
          attrs.face = void 0;
        }
        if (attrs.size) {
          var size = parseInt(attrs.size);
          if (size < 1) size = 1;else
          if (size > 7) size = 7;
          var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
          styleObj['font-size'] = map[size - 1];
          attrs.size = void 0;
        }
        break;
      case 'embed':

        var src = node.attrs.src || '',
        type = node.attrs.type || '';
        if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8'))
        node.name = 'video';else
        if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes(
        '.aac'))
        node.name = 'audio';else
        break;
        if (node.attrs.autostart)
        node.attrs.autoplay = 'T';
        node.attrs.controls = 'T';





      case 'video':
      case 'audio':
        if (!attrs.id) attrs.id = node.name + ++this["".concat(node.name, "Num")];else
        this["".concat(node.name, "Num")]++;
        if (node.name == 'video') {
          if (this.videoNum > 3)
          node.lazyLoad = 1;
          if (attrs.width) {
            styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
            attrs.width = void 0;
          }
          if (attrs.height) {
            styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
            attrs.height = void 0;
          }
        }
        if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
        attrs.source = [];
        if (attrs.src) {
          attrs.source.push(attrs.src);
          attrs.src = void 0;
        }
        this.bubble();
        break;
      case 'td':
      case 'th':
        if (attrs.colspan || attrs.rowspan)
        for (var k = this.STACK.length, item; item = this.STACK[--k];) {
          if (item.name == 'table') {
            item.flag = 1;
            break;
          }}}

    if (attrs.align) {
      if (node.name == 'table') {
        if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else
        styleObj['float'] = attrs.align;
      } else styleObj['text-align'] = attrs.align;
      attrs.align = void 0;
    }
    // 压缩 style
    var styles = style.split(';');
    style = '';
    for (var i = 0, len = styles.length; i < len; i++) {
      var info = styles[i].split(':');
      if (info.length < 2) continue;
      var _key = info[0].trim().toLowerCase(),
      _value = info.slice(1).join(':').trim();
      if (_value[0] == '-' || _value.includes('safe'))
      style += ";".concat(_key, ":").concat(_value);else
      if (!styleObj[_key] || _value.includes('import') || !styleObj[_key].includes('import'))
      styleObj[_key] = _value;
    }
    if (node.name == 'img') {
      if (attrs.src && !attrs.ignore) {
        if (this.bubble())
        attrs.i = (this.imgNum++).toString();else
        attrs.ignore = 'T';
      }
      if (attrs.ignore) {
        style += ';-webkit-touch-callout:none';
        styleObj['max-width'] = '100%';
      }
      var width;
      if (styleObj.width) width = styleObj.width;else
      if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
      if (width) {
        styleObj.width = width;
        attrs.width = '100%';
        if (parseInt(width) > windowWidth) {
          styleObj.height = '';
          if (attrs.height) attrs.height = void 0;
        }
      }
      if (styleObj.height) {
        attrs.height = styleObj.height;
        styleObj.height = '';
      } else if (attrs.height && !attrs.height.includes('%'))
      attrs.height = parseFloat(attrs.height) + 'px';
    }
    for (var key in styleObj) {
      var value = styleObj[key];
      if (!value) continue;
      if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
      // 填充链接
      if (value.includes('url')) {
        var j = value.indexOf('(');
        if (j++ != -1) {
          while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {j++;}
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      }
      // 转换 rpx
      else if (value.includes('rpx'))
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});else
        if (key == 'white-space' && value.includes('pre') && !close)
        this.pre = node.pre = true;
      style += ";".concat(key, ":").concat(value);
    }
    style = style.substr(1);
    if (style) attrs.style = style;
    if (!close) {
      node.children = [];
      if (node.name == 'pre' && cfg.highlight) {
        this.remove(node);
        this.pre = node.pre = true;
      }
      this.siblings().push(node);
      this.STACK.push(node);
    } else if (!cfg.filter || cfg.filter(node, this) != false)
    this.siblings().push(node);
  } else {
    if (!close) this.remove(node);else
    if (node.name == 'source') {
      var parent = this.parent();
      if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src)
      parent.attrs.source.push(node.attrs.src);
    } else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
  }
  if (this.data[this.i] == '/') this.i++;
  this.start = this.i + 1;
  this.state = this.Text;
};
// 移除标签
MpHtmlParser.prototype.remove = function (node) {var _this2 = this;
  var name = node.name,
  j = this.i;
  // 处理 svg
  var handleSvg = function handleSvg() {
    var src = _this2.data.substring(j, _this2.i + 1);
    node.attrs.xmlns = 'http://www.w3.org/2000/svg';
    for (var key in node.attrs) {
      if (key == 'viewbox') src = " viewBox=\"".concat(node.attrs.viewbox, "\"") + src;else
      if (key != 'style') src = " ".concat(key, "=\"").concat(node.attrs[key], "\"") + src;
    }
    src = '<svg' + src;
    var parent = _this2.parent();
    if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline'))
    parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
    _this2.siblings().push({
      name: 'img',
      attrs: {
        src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
        style: node.attrs.style,
        ignore: 'T' } });


  };
  if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
  while (1) {
    if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
      if (name == 'pre' || name == 'svg') this.i = j;else
      this.i = this.data.length;
      return;
    }
    this.start = this.i += 2;
    while (!blankChar[this.data[this.i]] && !this.isClose()) {this.i++;}
    if (this.section().toLowerCase() == name) {
      // 代码块高亮
      if (name == 'pre') {
        this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data.
        substr(this.i - 5);
        return this.i = j;
      } else if (name == 'style')
      this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));else
      if (name == 'title')
      this.DOM.title = this.data.substring(j + 1, this.i - 7);
      if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
      if (name == 'svg') handleSvg();
      return;
    }
  }
};
// 节点出栈处理
MpHtmlParser.prototype.popNode = function (node) {
  // 空白符处理
  if (node.pre) {
    node.pre = this.pre = void 0;
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].pre)
      this.pre = true;}
  }
  var siblings = this.siblings(),
  len = siblings.length,
  childs = node.children;
  if (node.name == 'head' || cfg.filter && cfg.filter(node, this) == false)
  return siblings.pop();
  var attrs = node.attrs;
  // 替换一些标签名
  if (cfg.blockTags[node.name]) node.name = 'div';else
  if (!cfg.trustTags[node.name]) node.name = 'span';
  // 处理列表
  if (node.c && (node.name == 'ul' || node.name == 'ol')) {
    if ((node.attrs.style || '').includes('list-style:none')) {
      for (var _i = 0, child; child = childs[_i++];) {
        if (child.name == 'li')
        child.name = 'div';}
    } else if (node.name == 'ul') {
      var floor = 1;
      for (var _i2 = this.STACK.length; _i2--;) {
        if (this.STACK[_i2].name == 'ul') floor++;}
      if (floor != 1)
      for (var _i3 = childs.length; _i3--;) {
        childs[_i3].floor = floor;}
    } else {
      for (var _i4 = 0, num = 1, _child; _child = childs[_i4++];) {
        if (_child.name == 'li') {
          _child.type = 'ol';
          _child.num = function (num, type) {
            if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
            if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
            if (type == 'i' || type == 'I') {
              num = (num - 1) % 99 + 1;
              var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
              ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
              res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
              if (type == 'i') return res.toLowerCase();
              return res;
            }
            return num;
          }(num++, attrs.type) + '.';
        }}
    }
  }
  // 处理表格
  if (node.name == 'table') {
    var padding = parseFloat(attrs.cellpadding),
    spacing = parseFloat(attrs.cellspacing),
    border = parseFloat(attrs.border);
    if (node.c) {
      if (isNaN(padding)) padding = 2;
      if (isNaN(spacing)) spacing = 2;
    }
    if (border) attrs.style = "border:".concat(border, "px solid gray;").concat(attrs.style || '');
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
      attrs.style = "".concat(attrs.style || '', ";").concat(spacing ? ";grid-gap:".concat(spacing, "px") : ';border-left:0;border-top:0');
      var row = 1,
      col = 1,
      colNum,
      trs = [],
      children = [],
      map = {};
      (function f(ns) {
        for (var i = 0; i < ns.length; i++) {
          if (ns[i].name == 'tr') trs.push(ns[i]);else
          f(ns[i].children || []);
        }
      })(node.children);
      for (var _i5 = 0; _i5 < trs.length; _i5++) {
        for (var j = 0, td; td = trs[_i5].children[j]; j++) {
          if (td.name == 'td' || td.name == 'th') {
            while (map[row + '.' + col]) {col++;}
            var cell = {
              name: 'div',
              c: 1,
              attrs: {
                style: (td.attrs.style || '') + (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' :
                ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '') },

              children: td.children };

            if (td.attrs.colspan) {
              cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
              for (var k = 1; k < td.attrs.rowspan; k++) {map[row + k + '.' + col] = 1;}
            }
            children.push(cell);
            col++;
          }
        }
        if (!colNum) {
          colNum = col - 1;
          attrs.style += ";grid-template-columns:repeat(".concat(colNum, ",auto)");
        }
        col = 1;
        row++;
      }
      node.children = children;
    } else {
      attrs.style = "border-spacing:".concat(spacing, "px;").concat(attrs.style || '');
      if (border || padding)
      (function f(ns) {
        for (var i = 0, n; n = ns[i]; i++) {
          if (n.name == 'th' || n.name == 'td') {
            if (border) n.attrs.style = "border:".concat(border, "px solid gray;").concat(n.attrs.style || '');
            if (padding) n.attrs.style = "padding:".concat(padding, "px;").concat(n.attrs.style || '');
          } else f(n.children || []);
        }
      })(childs);
    }
    if (this.options.autoscroll) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:scroll' };

      node.children = [table];
    }
  }
  this.CssHandler.pop && this.CssHandler.pop(node);
  // 自动压缩
  if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div')
  siblings[len - 1] = childs[0];
};
// 状态机
MpHtmlParser.prototype.Text = function (c) {
  if (c == '<') {
    var next = this.data[this.i + 1],
    isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};
    if (isLetter(next)) {
      this.setText();
      this.start = this.i + 1;
      this.state = this.TagName;
    } else if (next == '/') {
      this.setText();
      if (isLetter(this.data[++this.i + 1])) {
        this.start = this.i + 1;
        this.state = this.EndTag;
      } else this.Comment();
    } else if (next == '!' || next == '?') {
      this.setText();
      this.Comment();
    }
  }
};
MpHtmlParser.prototype.Comment = function () {
  var key;
  if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';else
  if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';else
  key = '>';
  if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;else
  this.i += key.length - 1;
  this.start = this.i + 1;
  this.state = this.Text;
};
MpHtmlParser.prototype.TagName = function (c) {
  if (blankChar[c]) {
    this.tagName = this.section();
    while (blankChar[this.data[this.i]]) {this.i++;}
    if (this.isClose()) this.setNode();else
    {
      this.start = this.i;
      this.state = this.AttrName;
    }
  } else if (this.isClose()) {
    this.tagName = this.section();
    this.setNode();
  }
};
MpHtmlParser.prototype.AttrName = function (c) {
  if (c == '=' || blankChar[c] || this.isClose()) {
    this.attrName = this.section();
    if (blankChar[c])
    while (blankChar[this.data[++this.i]]) {;}
    if (this.data[this.i] == '=') {
      while (blankChar[this.data[++this.i]]) {;}
      this.start = this.i--;
      this.state = this.AttrValue;
    } else this.setAttr();
  }
};
MpHtmlParser.prototype.AttrValue = function (c) {
  if (c == '"' || c == "'") {
    this.start++;
    if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
    this.attrVal = this.section();
    this.i++;
  } else {
    for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++) {;}
    this.attrVal = this.section();
  }
  this.setAttr();
};
MpHtmlParser.prototype.EndTag = function (c) {
  if (blankChar[c] || c == '>' || c == '/') {
    var name = this.section().toLowerCase();
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].name == name) break;}
    if (i != -1) {
      var node;
      while ((node = this.STACK.pop()).name != name) {this.popNode(node);}
      this.popNode(node);
    } else if (name == 'p' || name == 'br')
    this.siblings().push({
      name: name,
      attrs: {} });

    this.i = this.data.indexOf('>', this.i);
    this.start = this.i + 1;
    if (this.i == -1) this.i = this.data.length;else
    this.state = this.Text;
  }
};
module.exports = MpHtmlParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 432 */
/*!*********************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/components/u-parse/libs/config.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 配置文件 */
var cfg = {
  // 出错占位图
  errorImg: null,
  // 过滤器函数
  filter: null,
  // 代码高亮函数
  highlight: null,
  // 文本处理函数
  onText: null,
  // 实体编码列表
  entities: {
    quot: '"',
    apos: "'",
    semi: ';',
    nbsp: '\xA0',
    ensp: "\u2002",
    emsp: "\u2003",
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },

  blankChar: makeMap(' ,\xA0,\t,\r,\n,\f'),
  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),
  // 块级标签，将被转为 div
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 将被移除的标签
  ignoreTags: makeMap('area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),
  // 只能被 rich-text 显示的标签
  richOnlyTags: makeMap('a,colgroup,fieldset,legend'),
  // 自闭合的标签
  selfClosingTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // 信任的标签
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 默认的标签样式
  userAgentStyles: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre;overflow:scroll',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    u: 'text-decoration:underline' } };



function makeMap(str) {
  var map = Object.create(null),
  list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;}
  return map;
}


if (wx.canIUse('editor')) {
  cfg.blockTags.pre = void 0;
  cfg.ignoreTags.rp = true;
  Object.assign(cfg.richOnlyTags, makeMap('bdi,bdo,caption,rt,ruby'));
  Object.assign(cfg.trustTags, makeMap('bdi,bdo,caption,pre,rt,ruby'));
}







module.exports = cfg;

/***/ }),
/* 433 */
/*!*************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 432),
isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};

function CssHandler(tagStyle) {
  var styles = Object.assign(Object.create(null), cfg.userAgentStyles);
  for (var item in tagStyle) {
    styles[item] = (styles[item] ? styles[item] + ';' : '') + tagStyle[item];}
  this.styles = styles;
}
CssHandler.prototype.getStyle = function (data) {
  this.styles = new parser(data, this.styles).parse();
};
CssHandler.prototype.match = function (name, attrs) {
  var tmp,matched = (tmp = this.styles[name]) ? tmp + ';' : '';
  if (attrs.class) {
    var items = attrs.class.split(' ');
    for (var i = 0, item; item = items[i]; i++) {
      if (tmp = this.styles['.' + item])
      matched += tmp + ';';}
  }
  if (tmp = this.styles['#' + attrs.id])
  matched += tmp + ';';
  return matched;
};
module.exports = CssHandler;

function parser(data, init) {
  this.data = data;
  this.floor = 0;
  this.i = 0;
  this.list = [];
  this.res = init;
  this.state = this.Space;
}
parser.prototype.parse = function () {
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  return this.res;
};
parser.prototype.section = function () {
  return this.data.substring(this.start, this.i);
};
// 状态机
parser.prototype.Space = function (c) {
  if (c == '.' || c == '#' || isLetter(c)) {
    this.start = this.i;
    this.state = this.Name;
  } else if (c == '/' && this.data[this.i + 1] == '*')
  this.Comment();else
  if (!cfg.blankChar[c] && c != ';')
  this.state = this.Ignore;
};
parser.prototype.Comment = function () {
  this.i = this.data.indexOf('*/', this.i) + 1;
  if (!this.i) this.i = this.data.length;
  this.state = this.Space;
};
parser.prototype.Ignore = function (c) {
  if (c == '{') this.floor++;else
  if (c == '}' && ! --this.floor) {
    this.list = [];
    this.state = this.Space;
  }
};
parser.prototype.Name = function (c) {
  if (cfg.blankChar[c]) {
    this.list.push(this.section());
    this.state = this.NameSpace;
  } else if (c == '{') {
    this.list.push(this.section());
    this.Content();
  } else if (c == ',') {
    this.list.push(this.section());
    this.Comma();
  } else if (!isLetter(c) && (c < '0' || c > '9') && c != '-' && c != '_')
  this.state = this.Ignore;
};
parser.prototype.NameSpace = function (c) {
  if (c == '{') this.Content();else
  if (c == ',') this.Comma();else
  if (!cfg.blankChar[c]) this.state = this.Ignore;
};
parser.prototype.Comma = function () {
  while (cfg.blankChar[this.data[++this.i]]) {;}
  if (this.data[this.i] == '{') this.Content();else
  {
    this.start = this.i--;
    this.state = this.Name;
  }
};
parser.prototype.Content = function () {
  this.start = ++this.i;
  if ((this.i = this.data.indexOf('}', this.i)) == -1) this.i = this.data.length;
  var content = this.section();
  for (var i = 0, item; item = this.list[i++];) {
    if (this.res[item]) this.res[item] += ';' + content;else
    this.res[item] = content;}
  this.list = [];
  this.state = this.Space;
};

/***/ }),
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */
/*!******************************************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */
/*!********************************************************************************!*\
  !*** C:/Users/m/Documents/HBuilderProjects/food/uview-ui/libs/util/emitter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map