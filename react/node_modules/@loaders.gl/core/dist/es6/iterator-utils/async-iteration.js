import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
import { concatenateArrayBuffers } from '../javascript-utils/memory-copy-utils';
export async function forEach(iterator, visitor) {
  while (true) {
    const {
      done,
      value
    } = await iterator.next();

    if (done) {
      iterator.return();
      return;
    }

    const cancel = visitor(value);

    if (cancel) {
      return;
    }
  }
}
export async function concatenateChunksAsync(asyncIterator) {
  let arrayBuffer = new ArrayBuffer(0);
  let string = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;

  var _iteratorError;

  try {
    for (var _iterator = _asyncIterator(asyncIterator), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
      const chunk = _value;

      if (typeof chunk === 'string') {
        string += chunk;
      } else {
        arrayBuffer = concatenateArrayBuffers(arrayBuffer, chunk);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        await _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return string || arrayBuffer;
}
//# sourceMappingURL=async-iteration.js.map