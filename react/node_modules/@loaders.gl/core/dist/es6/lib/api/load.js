import { isBlob } from '../../javascript-utils/is-type';
import { fetchFile } from '../fetch/fetch-file';
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { parse } from './parse';
export async function load(url, loaders, options) {
  if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
    options = loaders;
    loaders = null;
  }

  let data = url;

  if (typeof url === 'string') {
    data = await fetchFile(url, options);
  } else {
    url = null;
  }

  if (isBlob(url)) {
    data = await fetchFile(url, options);
    url = null;
  }

  return await parse(data, loaders, options, url);
}
//# sourceMappingURL=load.js.map