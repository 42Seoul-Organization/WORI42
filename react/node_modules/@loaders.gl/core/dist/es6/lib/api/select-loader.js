import { normalizeLoader } from '../loader-utils/normalize-loader';
import { getResourceUrlAndType } from '../utils/resource-utils';
import { getRegisteredLoaders } from './register-loaders';
const EXT_PATTERN = /\.([^.]+)$/;
export function selectLoader(data, loaders = [], options = {}, context = {}) {
  if (loaders && !Array.isArray(loaders)) {
    return normalizeLoader(loaders);
  }

  loaders = [...(loaders || []), ...getRegisteredLoaders()];
  normalizeLoaders(loaders);
  const {
    url,
    type
  } = getResourceUrlAndType(data);
  let loader = findLoaderByUrl(loaders, url || context.url);
  loader = loader || findLoaderByContentType(loaders, type);
  loader = loader || findLoaderByExamingInitialData(loaders, data);

  if (!loader && !options.nothrow) {
    throw new Error(getNoValidLoaderMessage(data, url, type));
  }

  return loader;
}

function getNoValidLoaderMessage(data, url, contentType) {
  let message = 'No valid loader found';

  if (data) {
    message += " data: \"".concat(getFirstCharacters(data), "\"");
  }

  if (url) {
    message += " for ".concat(url);
  }

  return message;
}

function normalizeLoaders(loaders) {
  for (const loader of loaders) {
    normalizeLoader(loader);
  }
}

function findLoaderByUrl(loaders, url) {
  const match = url && url.match(EXT_PATTERN);
  const extension = match && match[1];
  return extension && findLoaderByExtension(loaders, extension);
}

function findLoaderByExtension(loaders, extension) {
  extension = extension.toLowerCase();

  for (const loader of loaders) {
    for (const loaderExtension of loader.extensions) {
      if (loaderExtension.toLowerCase() === extension) {
        return loader;
      }
    }
  }

  return null;
}

function findLoaderByContentType(loaders, mimeType) {
  for (const loader of loaders) {
    if (loader.mimeTypes && loader.mimeTypes.includes(mimeType)) {
      return loader;
    }

    if (mimeType === "application/x.".concat(loader.id)) {
      return loader;
    }
  }

  return null;
}

function findLoaderByExamingInitialData(loaders, data) {
  if (!data) {
    return null;
  }

  for (const loader of loaders) {
    if (typeof data === 'string') {
      if (testText(data, loader)) {
        return loader;
      }
    } else if (ArrayBuffer.isView(data)) {
      if (testBinary(data.buffer, data.byteOffset, loader)) {
        return loader;
      }
    } else if (data instanceof ArrayBuffer) {
      const byteOffset = 0;

      if (testBinary(data, byteOffset, loader)) {
        return loader;
      }
    }
  }

  return null;
}

function testText(data, loader) {
  return loader.testText && loader.testText(data);
}

function testBinary(data, byteOffset, loader) {
  const type = Array.isArray(loader.test) ? 'array' : typeof loader.test;

  switch (type) {
    case 'function':
      return loader.test(data, loader);

    case 'string':
    case 'array':
      const tests = Array.isArray(loader.test) ? loader.test : [loader.test];
      return tests.some(test => {
        const magic = getMagicString(data, byteOffset, test.length);
        return test === magic;
      });

    default:
      return false;
  }
}

function getFirstCharacters(data, length = 5) {
  if (typeof data === 'string') {
    return data.slice(0, length);
  } else if (ArrayBuffer.isView(data)) {
    return getMagicString(data.buffer, data.byteOffset, length);
  } else if (data instanceof ArrayBuffer) {
    const byteOffset = 0;
    return getMagicString(data, byteOffset, length);
  }

  return '';
}

function getMagicString(arrayBuffer, byteOffset, length) {
  if (arrayBuffer.byteLength <= byteOffset + length) {
    return '';
  }

  const dataView = new DataView(arrayBuffer);
  let magic = '';

  for (let i = 0; i < length; i++) {
    magic += String.fromCharCode(dataView.getUint8(byteOffset + i));
  }

  return magic;
}
//# sourceMappingURL=select-loader.js.map