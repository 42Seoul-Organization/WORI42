import fs from 'fs';
import { promisify } from 'util';
import toBuffer from './utils/to-buffer.node';
export function writeFile(filePath, arrayBufferOrString, options) {
  return promisify(fs.writeFile)("".concat(filePath), toBuffer(arrayBufferOrString), {
    flag: 'w'
  });
}
export function writeFileSync(filePath, arrayBufferOrString, options) {
  return fs.writeFileSync("".concat(filePath), toBuffer(arrayBufferOrString), {
    flag: 'w'
  });
}
//# sourceMappingURL=write-file.node.js.map