"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkerURL = getWorkerURL;

var _loaderUtils = require("@loaders.gl/loader-utils");

var workerURLCache = new Map();

function getWorkerURL(workerSource) {
  (0, _loaderUtils.assert)(typeof workerSource === 'string', 'worker source');

  if (workerSource.startsWith('url(') && workerSource.endsWith(')')) {
    return workerSource.match(/^url\((.*)\)$/)[1];
  }

  var workerURL = workerURLCache.get(workerSource);

  if (!workerURL) {
    var blob = new Blob([workerSource], {
      type: 'application/javascript'
    });
    workerURL = URL.createObjectURL(blob);
    workerURLCache.set(workerSource, workerURL);
  }

  return workerURL;
}
//# sourceMappingURL=worker-utils.js.map