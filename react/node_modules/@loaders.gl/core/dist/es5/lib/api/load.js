"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = load;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _isType = require("../../javascript-utils/is-type");

var _fetchFile = require("../fetch/fetch-file");

var _normalizeLoader = require("../loader-utils/normalize-loader");

var _parse = require("./parse");

function load(_x, _x2, _x3) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(url, loaders, options) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(loaders) && !(0, _normalizeLoader.isLoaderObject)(loaders)) {
              options = loaders;
              loaders = null;
            }

            data = url;

            if (!(typeof url === 'string')) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return (0, _fetchFile.fetchFile)(url, options);

          case 5:
            data = _context.sent;
            _context.next = 9;
            break;

          case 8:
            url = null;

          case 9:
            if (!(0, _isType.isBlob)(url)) {
              _context.next = 14;
              break;
            }

            _context.next = 12;
            return (0, _fetchFile.fetchFile)(url, options);

          case 12:
            data = _context.sent;
            url = null;

          case 14:
            _context.next = 16;
            return (0, _parse.parse)(data, loaders, options, url);

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