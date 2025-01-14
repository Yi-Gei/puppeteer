import {DEFERRED_PROMISE_DEBUG_TIMEOUT} from '../environment.js';

import {Deferred, createDeferred} from './Deferred.js';

/**
 * Creates and returns a deferred promise using DEFERRED_PROMISE_DEBUG_TIMEOUT
 * if it's specified or a normal deferred promise otherwise.
 *
 * @internal
 */
export function createDebuggableDeferred<T>(message: string): Deferred<T> {
  if (DEFERRED_PROMISE_DEBUG_TIMEOUT > 0) {
    return createDeferred({
      message,
      timeout: DEFERRED_PROMISE_DEBUG_TIMEOUT,
    });
  }
  return createDeferred();
}
