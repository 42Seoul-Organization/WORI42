import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { isBlob } from '../../javascript-utils/is-type';
import { fetchFile } from '../fetch/fetch-file';
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { parse } from './parse';
export function load(_x, _x2, _x3) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url, loaders, options) {
    var data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
              options = loaders;
              loaders = null;
            }

            data = url;

            if (!(typeof url === 'string')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return fetchFile(url, options);

          case 5:
            data = _context.sent;
            _context.next = 9;
            break;

          case 8:
            url = null;

          case 9:
            if (!isBlob(url)) {
              _context.next = 14;
              break;
            }

            _context.next = 12;
            return fetchFile(url, options);

          case 12:
            data = _context.sent;
            url = null;

          case 14:
            _context.next = 16;
            return parse(data, loaders, options, url);

          case 16:
            return _context.abrupt("return", _context.sent);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load.apply(this, arguments);
}
//# sourceMappingURL=load.js.map