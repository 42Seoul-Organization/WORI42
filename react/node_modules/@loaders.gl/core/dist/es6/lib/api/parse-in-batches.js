import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
import _asyncGeneratorDelegate from "@babel/runtime/helpers/esm/asyncGeneratorDelegate";
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { mergeOptions } from '../loader-utils/merge-options';
import { getAsyncIteratorFromData } from '../loader-utils/get-data';
import { getLoaderContext } from '../loader-utils/get-loader-context';
import { selectLoader } from './select-loader';
export async function parseInBatches(data, loaders, options, url) {
  if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
    url = options;
    options = loaders;
    loaders = null;
  }

  const loader = selectLoader(null, loaders, options, {
    url
  });
  options = mergeOptions(loader, options, url);
  const context = getLoaderContext({
    url,
    loaders
  }, options);
  return await parseWithLoaderInBatches(loader, data, options, context);
}

async function parseWithLoaderInBatches(loader, data, options, context) {
  if (!loader.parseInBatches) {
    throw new Error('loader does not support parseInBatches');
  }

  const inputIterator = await getAsyncIteratorFromData(data);
  const outputIterator = await loader.parseInBatches(inputIterator, options, context, loader);

  if (!options.metadata) {
    return outputIterator;
  }

  const metadataBatch = {
    batchType: 'metadata',
    metadata: {
      _loader: loader,
      _context: context
    },
    data: [],
    bytesUsed: 0
  };

  function makeMetadataBatchIterator(_x) {
    return _makeMetadataBatchIterator.apply(this, arguments);
  }

  function _makeMetadataBatchIterator() {
    _makeMetadataBatchIterator = _wrapAsyncGenerator(function* (iterator) {
      yield metadataBatch;
      yield* _asyncGeneratorDelegate(_asyncIterator(iterator), _awaitAsyncGenerator);
    });
    return _makeMetadataBatchIterator.apply(this, arguments);
  }

  return makeMetadataBatchIterator(outputIterator);
}
//# sourceMappingURL=parse-in-batches.js.map