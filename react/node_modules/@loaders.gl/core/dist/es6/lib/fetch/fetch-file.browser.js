import { assert } from '@loaders.gl/loader-utils';

class FileReadableResponse {
  constructor(fileOrBlob, options) {
    this._fileOrBlob = fileOrBlob;
    this.bodyUsed = false;
  }

  get headers() {
    return new Headers({
      'Content-Length': this._fileOrBlob.size,
      'Content-Type': this._fileOrBlob.type
    });
  }

  get ok() {
    return true;
  }

  get status() {
    return 200;
  }

  get url() {
    return this._fileOrBlob.name || '';
  }

  async arrayBuffer() {
    const {
      reader,
      promise
    } = this._getFileReader();

    reader.readAsArrayBuffer(this._fileOrBlob);
    return promise;
  }

  async text() {
    const {
      reader,
      promise
    } = this._getFileReader();

    reader.readAsText(this._fileOrBlob);
    return promise;
  }

  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }

  _getFileReader() {
    assert(!this.bodyUsed);
    this.bodyUsed = true;
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      try {
        reader.onerror = _ => reject(new Error('Read error'));

        reader.onabort = () => reject(new Error('Read aborted.'));

        reader.onload = () => resolve(reader.result);
      } catch (error) {
        reject(error);
      }
    });
    return {
      reader,
      promise
    };
  }

}

export default function fetchFileReadable(fileOrBlob, options) {
  return Promise.resolve(new FileReadableResponse(fileOrBlob, options));
}
//# sourceMappingURL=fetch-file.browser.js.map