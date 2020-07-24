import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
var DEFAULT_CHUNK_SIZE = 1024 * 1024;
export function makeBlobIterator(_x) {
  return _makeBlobIterator.apply(this, arguments);
}

function _makeBlobIterator() {
  _makeBlobIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee(file) {
    var options,
        chunkSize,
        offset,
        end,
        slice,
        chunk,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            chunkSize = options.chunkSize || DEFAULT_CHUNK_SIZE;
            offset = 0;

          case 3:
            if (!(offset < file.size)) {
              _context.next = 14;
              break;
            }

            end = offset + chunkSize;
            slice = file.slice(offset, end);
            _context.next = 8;
            return _awaitAsyncGenerator(readFileSlice(slice));

          case 8:
            chunk = _context.sent;
            offset = end;
            _context.next = 12;
            return chunk;

          case 12:
            _context.next = 3;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeBlobIterator.apply(this, arguments);
}

function readFileSlice(_x2) {
  return _readFileSlice.apply(this, arguments);
}

function _readFileSlice() {
  _readFileSlice = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(slice) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new Promise(function (resolve, reject) {
              var fileReader = new FileReader();

              fileReader.onloadend = function (event) {
                return resolve(event.target.result);
              };

              fileReader.onerror = function (error) {
                return reject(error);
              };

              fileReader.readAsArrayBuffer(slice);
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _readFileSlice.apply(this, arguments);
}
//# sourceMappingURL=blob-iterator.js.map