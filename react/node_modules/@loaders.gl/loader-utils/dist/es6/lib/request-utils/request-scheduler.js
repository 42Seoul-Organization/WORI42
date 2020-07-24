import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { Stats } from '@probe.gl/stats';
const STAT_QUEUED_REQUESTS = 'Queued Requests';
const STAT_ACTIVE_REQUESTS = 'Active Requests';
const STAT_CANCELLED_REQUESTS = 'Cancelled Requests';
const STAT_QUEUED_REQUESTS_EVER = 'Queued Requests Ever';
const STAT_ACTIVE_REQUESTS_EVER = 'Active Requests Ever';
const DEFAULT_PROPS = {
  id: 'request-scheduler',
  throttleRequests: true,
  maxRequests: 6
};
export default class RequestScheduler {
  constructor(props = {}) {
    this.props = _objectSpread(_objectSpread({}, DEFAULT_PROPS), props);
    this.requestQueue = [];
    this.activeRequestCount = 0;
    this.requestMap = new Map();
    this.stats = new Stats({
      id: props.id
    });
    this.stats.get(STAT_QUEUED_REQUESTS);
    this.stats.get(STAT_ACTIVE_REQUESTS);
    this.stats.get(STAT_CANCELLED_REQUESTS);
    this.stats.get(STAT_QUEUED_REQUESTS_EVER);
    this.stats.get(STAT_ACTIVE_REQUESTS_EVER);
    this._deferredUpdate = null;
  }

  scheduleRequest(handle, getPriority = () => 0) {
    if (!this.props.throttleRequests) {
      return Promise.resolve({
        done: () => {}
      });
    }

    if (this.requestMap.has(handle)) {
      return this.requestMap.get(handle);
    }

    const request = {
      handle,
      getPriority
    };
    const promise = new Promise(resolve => {
      request.resolve = resolve;
      return request;
    });
    this.requestQueue.push(request);
    this.requestMap.set(handle, promise);

    this._issueNewRequests();

    return promise;
  }

  _issueRequest(request) {
    const {
      handle,
      resolve
    } = request;
    let isDone = false;

    const done = () => {
      if (!isDone) {
        isDone = true;
        this.requestMap.delete(handle);
        this.activeRequestCount--;

        this._issueNewRequests();
      }
    };

    this.activeRequestCount++;
    return resolve ? resolve({
      done
    }) : Promise.resolve({
      done
    });
  }

  _issueNewRequests() {
    if (!this._deferredUpdate) {
      this._deferredUpdate = setTimeout(() => this._issueNewRequestsAsync(), 0);
    }
  }

  _issueNewRequestsAsync() {
    this._deferredUpdate = null;
    const freeSlots = Math.max(this.props.maxRequests - this.activeRequestCount, 0);

    if (freeSlots === 0) {
      return;
    }

    this._updateAllRequests();

    for (let i = 0; i < freeSlots; ++i) {
      if (this.requestQueue.length > 0) {
        const request = this.requestQueue.shift();

        this._issueRequest(request);
      }
    }
  }

  _updateAllRequests() {
    const requestQueue = this.requestQueue;

    for (let i = 0; i < requestQueue.length; ++i) {
      const request = requestQueue[i];

      if (!this._updateRequest(request)) {
        requestQueue.splice(i, 1);
        this.requestMap.delete(request.handle);
        i--;
      }
    }

    requestQueue.sort((a, b) => a.priority - b.priority);
  }

  _updateRequest(request) {
    request.priority = request.getPriority(request.handle);

    if (request.priority < 0) {
      request.resolve(null);
      return false;
    }

    return true;
  }

}
//# sourceMappingURL=request-scheduler.js.map