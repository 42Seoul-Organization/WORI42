import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { resolvePath } from '@loaders.gl/loader-utils';
import { isBlob } from '../../javascript-utils/is-type';
import fetchFileReadable from './fetch-file.browser';
import { getErrorMessageFromResponse } from './fetch-error-message';
export function fetchFile(_x) {
  return _fetchFile.apply(this, arguments);
}

function _fetchFile() {
  _fetchFile = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url) {
    var options,
        response,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

            if (!isBlob(url)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", fetchFileReadable(url, options));

          case 3:
            url = resolvePath(url);
            _context.next = 6;
            return fetch(url, options);

          case 6:
            response = _context.sent;

            if (!(!response.ok && options["throws"])) {
              _context.next = 13;
              break;
            }

            _context.t0 = Error;
            _context.next = 11;
            return getErrorMessageFromResponse(response);

          case 11:
            _context.t1 = _context.sent;
            throw new _context.t0(_context.t1);

          case 13:
            return _context.abrupt("return", response);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchFile.apply(this, arguments);
}
//# sourceMappingURL=fetch-file.js.map