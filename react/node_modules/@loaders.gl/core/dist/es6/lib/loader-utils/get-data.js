import { isResponse, isReadableStream, isAsyncIterable, isIterable, isIterator, isBlob, isBuffer } from '../../javascript-utils/is-type';
import { makeIterator } from '../../iterator-utils/make-iterator/make-iterator';
import { concatenateChunksAsync } from '../../iterator-utils/async-iteration';
import fetchFileReadable from '../fetch/fetch-file.browser';
import { checkFetchResponseStatus } from './check-errors';
const ERR_DATA = 'Cannot convert supplied data type';
export function getUrlFromData(data, url) {
  if (isResponse(data)) {
    url = url || data.url;
  } else if (isBlob(url)) {
    url = url.name;
  }

  return typeof url === 'string' ? url.replace(/\?.*/, '') : url;
}
export function getArrayBufferOrStringFromDataSync(data, loader) {
  if (loader.text && typeof data === 'string') {
    return data;
  }

  if (data instanceof ArrayBuffer) {
    const arrayBuffer = data;

    if (loader.text && !loader.binary) {
      const textDecoder = new TextDecoder('utf8');
      return textDecoder.decode(arrayBuffer);
    }

    return arrayBuffer;
  }

  if (ArrayBuffer.isView(data) || isBuffer(data)) {
    if (loader.text && !loader.binary) {
      const textDecoder = new TextDecoder('utf8');
      return textDecoder.decode(data);
    }

    let arrayBuffer = data.buffer;
    const byteLength = data.byteLength || data.length;

    if (data.byteOffset !== 0 || byteLength !== arrayBuffer.byteLength) {
      arrayBuffer = arrayBuffer.slice(data.byteOffset, data.byteOffset + byteLength);
    }

    return arrayBuffer;
  }

  throw new Error(ERR_DATA);
}
export async function getArrayBufferOrStringFromData(data, loader) {
  data = await data;
  const isArrayBuffer = data instanceof ArrayBuffer || ArrayBuffer.isView(data);

  if (typeof data === 'string' || isArrayBuffer) {
    return getArrayBufferOrStringFromDataSync(data, loader);
  }

  if (isBlob(data)) {
    data = await fetchFileReadable(data);
  }

  if (isResponse(data)) {
    const response = data;
    await checkFetchResponseStatus(response);
    return loader.binary ? await response.arrayBuffer() : await response.text();
  }

  if (isReadableStream(data)) {
    data = makeIterator(data);
  }

  if (isIterable(data) || isAsyncIterable(data)) {
    return concatenateChunksAsync(data);
  }

  throw new Error(ERR_DATA);
}
export async function getAsyncIteratorFromData(data) {
  if (isIterator(data)) {
    return data;
  }

  if (isResponse(data)) {
    await checkFetchResponseStatus(data);
    return makeIterator(data.body);
  }

  if (isBlob(data) || isReadableStream(data)) {
    return makeIterator(data);
  }

  if (isAsyncIterable(data)) {
    return data[Symbol.asyncIterator]();
  }

  return getIteratorFromData(data);
}
export function getIteratorFromData(data) {
  if (ArrayBuffer.isView(data)) {
    return function* oneChunk() {
      yield data.buffer;
    }();
  }

  if (data instanceof ArrayBuffer) {
    return function* oneChunk() {
      yield data;
    }();
  }

  if (isIterator(data)) {
    return data;
  }

  if (isIterable(data)) {
    return data[Symbol.iterator]();
  }

  throw new Error(ERR_DATA);
}
//# sourceMappingURL=get-data.js.map