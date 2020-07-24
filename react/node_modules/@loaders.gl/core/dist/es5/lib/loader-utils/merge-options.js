"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalOptions = setGlobalOptions;
exports.mergeOptions = mergeOptions;
exports.getGlobalLoaderState = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _loaderUtils = require("@loaders.gl/loader-utils");

var _constants = require("../constants");

var _loggers = require("./loggers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isPureObject = function isPureObject(value) {
  return value && (0, _typeof2["default"])(value) === 'object' && value.constructor === {}.constructor;
};

var getGlobalLoaderState = function getGlobalLoaderState() {
  _loaderUtils.global.loaders = _loaderUtils.global.loaders || {};
  var loaders = _loaderUtils.global.loaders;
  loaders._state = loaders._state || {};
  return loaders._state;
};

exports.getGlobalLoaderState = getGlobalLoaderState;

var getGlobalLoaderOptions = function getGlobalLoaderOptions() {
  var state = getGlobalLoaderState();
  state.globalOptions = state.globalOptions || _objectSpread({}, _constants.DEFAULT_LOADER_OPTIONS);
  return state.globalOptions;
};

function setGlobalOptions(options) {
  var state = getGlobalLoaderState();
  var globalOptions = getGlobalLoaderOptions();
  state.globalOptions = mergeOptionsInternal(globalOptions, options);
}

function mergeOptions(loader, options, url) {
  var topOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  validateLoaderOptions(loader, options, topOptions);
  return mergeOptionsInternal(loader, options, url);
}

function validateLoaderOptions(loader, options) {
  var topOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.DEFAULT_LOADER_OPTIONS;
  var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console;

  if (topOptions) {
    for (var key in options) {
      if ((0, _typeof2["default"])(options[key]) !== 'object' && !topOptions[key]) {
        log.warn("Top-level loader option ".concat(key, " not recognized"));
      }
    }
  }

  var idOptions = options && options[loader.id] || {};
  var loaderOptions = loader.options && loader.options[loader.id] || {};
  var deprecatedOptions = loader.defaultOptions && loader.defaultOptions[loader.id] || {};

  for (var _key in idOptions) {
    if (!(_key in loaderOptions)) {
      if (_key in deprecatedOptions) {
        log.warn("".concat(loader.name, " loader option ").concat(loader.id, ".").concat(_key, " deprecated, use ").concat(deprecatedOptions[_key]));
      } else {
        log.warn("".concat(loader.name, " loader option ").concat(loader.id, ".").concat(_key, " not recognized"));
      }
    }
  }
}

function mergeOptionsInternal(loader, options, url) {
  var loaderDefaultOptions = loader.options || {};

  var mergedOptions = _objectSpread({}, loaderDefaultOptions);

  addUrlOptions(mergedOptions, url);

  if (mergedOptions.log === null) {
    mergedOptions.log = new _loggers.NullLog();
  }

  mergeNestedFields(mergedOptions, getGlobalLoaderOptions());
  mergeNestedFields(mergedOptions, options);
  return mergedOptions;
}

function mergeNestedFields(mergedOptions, options) {
  for (var key in options) {
    if (key in options) {
      var value = options[key];

      if (isPureObject(value) && isPureObject(mergedOptions[key])) {
        mergedOptions[key] = _objectSpread(_objectSpread({}, mergedOptions[key]), options[key]);
      } else {
        mergedOptions[key] = options[key];
      }
    }
  }
}

function addUrlOptions(options, url) {
  if (url && !('baseUri' in options)) {
    options.baseUri = url;
  }
}
//# sourceMappingURL=merge-options.js.map