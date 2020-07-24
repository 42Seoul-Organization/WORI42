"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createWorker", {
  enumerable: true,
  get: function get() {
    return _createWorker["default"];
  }
});
Object.defineProperty(exports, "assert", {
  enumerable: true,
  get: function get() {
    return _assert["default"];
  }
});
Object.defineProperty(exports, "isBrowser", {
  enumerable: true,
  get: function get() {
    return _globals.isBrowser;
  }
});
Object.defineProperty(exports, "isWorker", {
  enumerable: true,
  get: function get() {
    return _globals.isWorker;
  }
});
Object.defineProperty(exports, "nodeVersion", {
  enumerable: true,
  get: function get() {
    return _globals.nodeVersion;
  }
});
Object.defineProperty(exports, "self", {
  enumerable: true,
  get: function get() {
    return _globals.self;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _globals.window;
  }
});
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _globals.global;
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _globals.document;
  }
});
Object.defineProperty(exports, "validateLoaderVersion", {
  enumerable: true,
  get: function get() {
    return _validateLoaderVersion.validateLoaderVersion;
  }
});
Object.defineProperty(exports, "getLibraryUrl", {
  enumerable: true,
  get: function get() {
    return _libraryUtils.getLibraryUrl;
  }
});
Object.defineProperty(exports, "loadLibrary", {
  enumerable: true,
  get: function get() {
    return _libraryUtils.loadLibrary;
  }
});
Object.defineProperty(exports, "getTransferList", {
  enumerable: true,
  get: function get() {
    return _getTransferList.getTransferList;
  }
});
Object.defineProperty(exports, "parseJSON", {
  enumerable: true,
  get: function get() {
    return _parseJson.parseJSON;
  }
});
Object.defineProperty(exports, "padTo4Bytes", {
  enumerable: true,
  get: function get() {
    return _memoryCopyUtils.padTo4Bytes;
  }
});
Object.defineProperty(exports, "copyToArray", {
  enumerable: true,
  get: function get() {
    return _memoryCopyUtils.copyToArray;
  }
});
Object.defineProperty(exports, "copyArrayBuffer", {
  enumerable: true,
  get: function get() {
    return _memoryCopyUtils.copyArrayBuffer;
  }
});
Object.defineProperty(exports, "getZeroOffsetArrayBuffer", {
  enumerable: true,
  get: function get() {
    return _memoryCopyUtils.getZeroOffsetArrayBuffer;
  }
});
Object.defineProperty(exports, "copyPaddedArrayBufferToDataView", {
  enumerable: true,
  get: function get() {
    return _binaryCopyUtils.copyPaddedArrayBufferToDataView;
  }
});
Object.defineProperty(exports, "copyPaddedStringToDataView", {
  enumerable: true,
  get: function get() {
    return _binaryCopyUtils.copyPaddedStringToDataView;
  }
});
Object.defineProperty(exports, "padStringToByteAlignment", {
  enumerable: true,
  get: function get() {
    return _encodeUtils.padStringToByteAlignment;
  }
});
Object.defineProperty(exports, "copyStringToDataView", {
  enumerable: true,
  get: function get() {
    return _encodeUtils.copyStringToDataView;
  }
});
Object.defineProperty(exports, "copyBinaryToDataView", {
  enumerable: true,
  get: function get() {
    return _encodeUtils.copyBinaryToDataView;
  }
});
Object.defineProperty(exports, "getFirstCharacters", {
  enumerable: true,
  get: function get() {
    return _getFirstCharacters.getFirstCharacters;
  }
});
Object.defineProperty(exports, "getMagicString", {
  enumerable: true,
  get: function get() {
    return _getFirstCharacters.getMagicString;
  }
});
Object.defineProperty(exports, "setPathPrefix", {
  enumerable: true,
  get: function get() {
    return _fileAliases.setPathPrefix;
  }
});
Object.defineProperty(exports, "getPathPrefix", {
  enumerable: true,
  get: function get() {
    return _fileAliases.getPathPrefix;
  }
});
Object.defineProperty(exports, "resolvePath", {
  enumerable: true,
  get: function get() {
    return _fileAliases.resolvePath;
  }
});
Object.defineProperty(exports, "_addAliases", {
  enumerable: true,
  get: function get() {
    return _fileAliases2.addAliases;
  }
});
Object.defineProperty(exports, "makeTextEncoderIterator", {
  enumerable: true,
  get: function get() {
    return _textIterators.makeTextEncoderIterator;
  }
});
Object.defineProperty(exports, "makeTextDecoderIterator", {
  enumerable: true,
  get: function get() {
    return _textIterators.makeTextDecoderIterator;
  }
});
Object.defineProperty(exports, "makeLineIterator", {
  enumerable: true,
  get: function get() {
    return _textIterators.makeLineIterator;
  }
});
Object.defineProperty(exports, "makeNumberedLineIterator", {
  enumerable: true,
  get: function get() {
    return _textIterators.makeNumberedLineIterator;
  }
});
Object.defineProperty(exports, "RequestScheduler", {
  enumerable: true,
  get: function get() {
    return _requestScheduler["default"];
  }
});
Object.defineProperty(exports, "_getMeshSize", {
  enumerable: true,
  get: function get() {
    return _meshUtils.getMeshSize;
  }
});
Object.defineProperty(exports, "getMeshBoundingBox", {
  enumerable: true,
  get: function get() {
    return _meshUtils.getMeshBoundingBox;
  }
});
exports.path = void 0;

var _createWorker = _interopRequireDefault(require("./lib/create-worker"));

var _assert = _interopRequireDefault(require("./lib/env-utils/assert"));

var _globals = require("./lib/env-utils/globals");

var _validateLoaderVersion = require("./lib/validate-loader-version");

var _libraryUtils = require("./lib/library-utils/library-utils");

var _getTransferList = require("./lib/worker-utils/get-transfer-list");

var _parseJson = require("./lib/parser-utils/parse-json");

var _memoryCopyUtils = require("./lib/binary-utils/memory-copy-utils");

var _binaryCopyUtils = require("./lib/binary-utils/binary-copy-utils");

var _encodeUtils = require("./lib/binary-utils/encode-utils");

var _getFirstCharacters = require("./lib/binary-utils/get-first-characters");

var path = _interopRequireWildcard(require("./lib/path-utils/path"));

exports.path = path;

var _fileAliases = require("./lib/path-utils/file-aliases");

var _fileAliases2 = require("./lib/path-utils/file-aliases.js");

var _textIterators = require("./lib/iterator-utils/text-iterators");

var _requestScheduler = _interopRequireDefault(require("./lib/request-utils/request-scheduler"));

var _meshUtils = require("./categories/mesh/mesh-utils");
//# sourceMappingURL=index.js.map