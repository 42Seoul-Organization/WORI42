import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
export function makeTextDecoderIterator(_x, _x2) {
  return _makeTextDecoderIterator.apply(this, arguments);
}

function _makeTextDecoderIterator() {
  _makeTextDecoderIterator = _wrapAsyncGenerator(function* (arrayBufferIterator, options) {
    const textDecoder = new TextDecoder(options);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _asyncIterator(arrayBufferIterator), _step, _value; _step = yield _awaitAsyncGenerator(_iterator.next()), _iteratorNormalCompletion = _step.done, _value = yield _awaitAsyncGenerator(_step.value), !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const arrayBuffer = _value;
        yield typeof arrayBuffer === 'string' ? arrayBuffer : textDecoder.decode(arrayBuffer, {
          stream: true
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          yield _awaitAsyncGenerator(_iterator.return());
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return _makeTextDecoderIterator.apply(this, arguments);
}

export function makeTextEncoderIterator(_x3, _x4) {
  return _makeTextEncoderIterator.apply(this, arguments);
}

function _makeTextEncoderIterator() {
  _makeTextEncoderIterator = _wrapAsyncGenerator(function* (textIterator, options) {
    const textEncoder = new TextEncoder();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;

    var _iteratorError2;

    try {
      for (var _iterator2 = _asyncIterator(textIterator), _step2, _value2; _step2 = yield _awaitAsyncGenerator(_iterator2.next()), _iteratorNormalCompletion2 = _step2.done, _value2 = yield _awaitAsyncGenerator(_step2.value), !_iteratorNormalCompletion2; _iteratorNormalCompletion2 = true) {
        const text = _value2;
        yield typeof text === 'string' ? textEncoder.encode(text) : text;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          yield _awaitAsyncGenerator(_iterator2.return());
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  return _makeTextEncoderIterator.apply(this, arguments);
}

export function makeLineIterator(_x5) {
  return _makeLineIterator.apply(this, arguments);
}

function _makeLineIterator() {
  _makeLineIterator = _wrapAsyncGenerator(function* (textIterator) {
    let previous = '';
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;

    var _iteratorError3;

    try {
      for (var _iterator3 = _asyncIterator(textIterator), _step3, _value3; _step3 = yield _awaitAsyncGenerator(_iterator3.next()), _iteratorNormalCompletion3 = _step3.done, _value3 = yield _awaitAsyncGenerator(_step3.value), !_iteratorNormalCompletion3; _iteratorNormalCompletion3 = true) {
        const textChunk = _value3;
        previous += textChunk;
        let eolIndex;

        while ((eolIndex = previous.indexOf('\n')) >= 0) {
          const line = previous.slice(0, eolIndex + 1);
          previous = previous.slice(eolIndex + 1);
          yield line;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          yield _awaitAsyncGenerator(_iterator3.return());
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    if (previous.length > 0) {
      yield previous;
    }
  });
  return _makeLineIterator.apply(this, arguments);
}

export function makeNumberedLineIterator(_x6) {
  return _makeNumberedLineIterator.apply(this, arguments);
}

function _makeNumberedLineIterator() {
  _makeNumberedLineIterator = _wrapAsyncGenerator(function* (lineIterator) {
    let counter = 1;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;

    var _iteratorError4;

    try {
      for (var _iterator4 = _asyncIterator(lineIterator), _step4, _value4; _step4 = yield _awaitAsyncGenerator(_iterator4.next()), _iteratorNormalCompletion4 = _step4.done, _value4 = yield _awaitAsyncGenerator(_step4.value), !_iteratorNormalCompletion4; _iteratorNormalCompletion4 = true) {
        const line = _value4;
        yield {
          counter,
          line
        };
        counter++;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          yield _awaitAsyncGenerator(_iterator4.return());
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  });
  return _makeNumberedLineIterator.apply(this, arguments);
}
//# sourceMappingURL=text-iterators.js.map