import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { getTransferList } from './worker-utils/get-transfer-list';
import { validateLoaderVersion } from './validate-loader-version';
export default function createWorker(loader) {
  if (typeof self === 'undefined') {
    return;
  }

  let requestId = 0;

  const parse = (arraybuffer, options = {}, url) => new Promise((resolve, reject) => {
    const id = requestId++;

    const onMessage = ({
      data
    }) => {
      if (!data || data.id !== id) {
        return;
      }

      switch (data.type) {
        case 'parse-done':
          self.removeEventListener('message', onMessage);
          resolve(data.result);
          break;

        case 'parse-error':
          self.removeEventListener('message', onMessage);
          reject(data.message);
          break;

        default:
      }
    };

    self.addEventListener('message', onMessage);
    self.postMessage({
      type: 'parse',
      id,
      arraybuffer,
      options,
      url
    }, [arraybuffer]);
  });

  self.onmessage = async evt => {
    const {
      data
    } = evt;

    try {
      if (!isKnownMessage(data, loader.name)) {
        return;
      }

      validateLoaderVersion(loader, data.source.split('@')[1]);
      const {
        arraybuffer,
        byteOffset = 0,
        byteLength = 0,
        options = {}
      } = data;
      const result = await parseData({
        loader,
        arraybuffer,
        byteOffset,
        byteLength,
        options,
        context: {
          parse
        }
      });
      const transferList = getTransferList(result);
      self.postMessage({
        type: 'done',
        result
      }, transferList);
    } catch (error) {
      self.postMessage({
        type: 'error',
        message: error.message
      });
    }
  };
}

async function parseData({
  loader,
  arraybuffer,
  byteOffset,
  byteLength,
  options,
  context
}) {
  let data;
  let parser;

  if (loader.parseSync || loader.parse) {
    data = arraybuffer;
    parser = loader.parseSync || loader.parse;
  } else if (loader.parseTextSync) {
    const textDecoder = new TextDecoder();
    data = textDecoder.decode(arraybuffer);
    parser = loader.parseTextSync;
  } else {
    throw new Error("Could not load data with ".concat(loader.name, " loader"));
  }

  options = _objectSpread(_objectSpread({}, options), {}, {
    modules: loader && loader.options && loader.options.modules || {},
    worker: false
  });
  return await parser(data, _objectSpread({}, options), context, loader);
}

function isKnownMessage(data, name) {
  return data && data.type === 'parse' && data.source && data.source.startsWith('loaders.gl');
}
//# sourceMappingURL=create-worker.js.map