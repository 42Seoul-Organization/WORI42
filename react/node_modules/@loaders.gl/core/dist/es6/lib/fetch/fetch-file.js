import { resolvePath } from '@loaders.gl/loader-utils';
import { isBlob } from '../../javascript-utils/is-type';
import fetchFileReadable from './fetch-file.browser';
import { getErrorMessageFromResponse } from './fetch-error-message';
export async function fetchFile(url, options = {}) {
  if (isBlob(url)) {
    return fetchFileReadable(url, options);
  }

  url = resolvePath(url);
  const response = await fetch(url, options);

  if (!response.ok && options.throws) {
    throw new Error(await getErrorMessageFromResponse(response));
  }

  return response;
}
//# sourceMappingURL=fetch-file.js.map