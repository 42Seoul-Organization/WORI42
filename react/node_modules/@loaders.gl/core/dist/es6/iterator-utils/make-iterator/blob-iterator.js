import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
const DEFAULT_CHUNK_SIZE = 1024 * 1024;
export function makeBlobIterator(_x) {
  return _makeBlobIterator.apply(this, arguments);
}

function _makeBlobIterator() {
  _makeBlobIterator = _wrapAsyncGenerator(function* (file, options = {}) {
    const chunkSize = options.chunkSize || DEFAULT_CHUNK_SIZE;
    let offset = 0;

    while (offset < file.size) {
      const end = offset + chunkSize;
      const slice = file.slice(offset, end);
      const chunk = yield _awaitAsyncGenerator(readFileSlice(slice));
      offset = end;
      yield chunk;
    }
  });
  return _makeBlobIterator.apply(this, arguments);
}

async function readFileSlice(slice) {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onloadend = event => resolve(event.target.result);

    fileReader.onerror = error => reject(error);

    fileReader.readAsArrayBuffer(slice);
  });
}
//# sourceMappingURL=blob-iterator.js.map