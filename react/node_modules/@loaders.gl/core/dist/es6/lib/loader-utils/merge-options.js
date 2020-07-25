import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { global } from '@loaders.gl/loader-utils';
import { DEFAULT_LOADER_OPTIONS } from '../constants';
import { NullLog } from './loggers';

const isPureObject = value => value && typeof value === 'object' && value.constructor === {}.constructor;

export const getGlobalLoaderState = () => {
  global.loaders = global.loaders || {};
  const {
    loaders
  } = global;
  loaders._state = loaders._state || {};
  return loaders._state;
};

const getGlobalLoaderOptions = () => {
  const state = getGlobalLoaderState();
  state.globalOptions = state.globalOptions || _objectSpread({}, DEFAULT_LOADER_OPTIONS);
  return state.globalOptions;
};

export function setGlobalOptions(options) {
  const state = getGlobalLoaderState();
  const globalOptions = getGlobalLoaderOptions();
  state.globalOptions = mergeOptionsInternal(globalOptions, options);
}
export function mergeOptions(loader, options, url, topOptions = null) {
  validateLoaderOptions(loader, options, topOptions);
  return mergeOptionsInternal(loader, options, url);
}

function validateLoaderOptions(loader, options, topOptions = DEFAULT_LOADER_OPTIONS, log = console) {
  if (topOptions) {
    for (const key in options) {
      if (typeof options[key] !== 'object' && !topOptions[key]) {
        log.warn("Top-level loader option ".concat(key, " not recognized"));
      }
    }
  }

  const idOptions = options && options[loader.id] || {};
  const loaderOptions = loader.options && loader.options[loader.id] || {};
  const deprecatedOptions = loader.defaultOptions && loader.defaultOptions[loader.id] || {};

  for (const key in idOptions) {
    if (!(key in loaderOptions)) {
      if (key in deprecatedOptions) {
        log.warn("".concat(loader.name, " loader option ").concat(loader.id, ".").concat(key, " deprecated, use ").concat(deprecatedOptions[key]));
      } else {
        log.warn("".concat(loader.name, " loader option ").concat(loader.id, ".").concat(key, " not recognized"));
      }
    }
  }
}

function mergeOptionsInternal(loader, options, url) {
  const loaderDefaultOptions = loader.options || {};

  const mergedOptions = _objectSpread({}, loaderDefaultOptions);

  addUrlOptions(mergedOptions, url);

  if (mergedOptions.log === null) {
    mergedOptions.log = new NullLog();
  }

  mergeNestedFields(mergedOptions, getGlobalLoaderOptions());
  mergeNestedFields(mergedOptions, options);
  return mergedOptions;
}

function mergeNestedFields(mergedOptions, options) {
  for (const key in options) {
    if (key in options) {
      const value = options[key];

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