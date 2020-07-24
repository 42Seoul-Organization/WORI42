import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
import _asyncGeneratorDelegate from "@babel/runtime/helpers/esm/asyncGeneratorDelegate";
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { mergeOptions } from '../loader-utils/merge-options';
import { getAsyncIteratorFromData } from '../loader-utils/get-data';
import { getLoaderContext } from '../loader-utils/get-loader-context';
import { selectLoader } from './select-loader';
export function parseInBatches(_x2, _x3, _x4, _x5) {
  return _parseInBatches.apply(this, arguments);
}

function _parseInBatches() {
  _parseInBatches = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data, loaders, options, url) {
    var loader, context;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
              url = options;
              options = loaders;
              loaders = null;
            }

            loader = selectLoader(null, loaders, options, {
              url: url
            });
            options = mergeOptions(loader, options, url);
            context = getLoaderContext({
              url: url,
              loaders: loaders
            }, options);
            _context.next = 6;
            return parseWithLoaderInBatches(loader, data, options, context);

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parseInBatches.apply(this, arguments);
}

function parseWithLoaderInBatches(_x6, _x7, _x8, _x9) {
  return _parseWithLoaderInBatches.apply(this, arguments);
}

function _parseWithLoaderInBatches() {
  _parseWithLoaderInBatches = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3(loader, data, options, context) {
    var inputIterator, outputIterator, metadataBatch, makeMetadataBatchIterator, _makeMetadataBatchIterator;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _makeMetadataBatchIterator = function _makeMetadataBatchIte2() {
              _makeMetadataBatchIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee2(iterator) {
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return metadataBatch;

                      case 2:
                        return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(iterator), _awaitAsyncGenerator), "t0", 3);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _makeMetadataBatchIterator.apply(this, arguments);
            };

            makeMetadataBatchIterator = function _makeMetadataBatchIte(_x) {
              return _makeMetadataBatchIterator.apply(this, arguments);
            };

            if (loader.parseInBatches) {
              _context3.next = 4;
              break;
            }

            throw new Error('loader does not support parseInBatches');

          case 4:
            _context3.next = 6;
            return getAsyncIteratorFromData(data);

          case 6:
            inputIterator = _context3.sent;
            _context3.next = 9;
            return loader.parseInBatches(inputIterator, options, context, loader);

          case 9:
            outputIterator = _context3.sent;

            if (options.metadata) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", outputIterator);

          case 12:
            metadataBatch = {
              batchType: 'metadata',
              metadata: {
                _loader: loader,
                _context: context
              },
              data: [],
              bytesUsed: 0
            };
            return _context3.abrupt("return", makeMetadataBatchIterator(outputIterator));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseWithLoaderInBatches.apply(this, arguments);
}
//# sourceMappingURL=parse-in-batches.js.map