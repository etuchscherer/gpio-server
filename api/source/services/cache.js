import { debug } from '@/services/logging';

const _cache = new Map();
const label = 'cache-service';

export default class cache {
  constructor() {
    debug('creating new cache service', label);
    this._cache = _cache;
  }

  /**
   * Pushes the supplied value into the cache.
   * @param {any} key
   * @param {any} value
   */
  set(key, value) {
    debug(`setting ${typeof value} at ${key}`, label);
    _cache.set(key, value);
    return this;
  };

  /**
   * Returns true if the supplied pin exists in the cache. Otherwise false.
   * @param {any} key
   * @returns {boolean}
   */
  has(key) {
    const isHit = _cache.has(key);
    debug(`cache lookup for ${key}... ${isHit ? 'hit' : 'miss'}`, label);
    return isHit;
  };

  /**
   * Returns a specified element from the cache. If the value that is
   * associated to the provided key is an object, then you will get a
   * reference to that object and any change made to that object will
   * effectively modify it inside the Map object.
   * @param {any} key
   * @returns {any} item associated with key, or undefined if not found
   */
  get(key) {
    return _cache.get(key);
  };

  /**
   * Removes the specified element from the cache.
   * @param {any} key
   * @return {boolean} true if the item existed and was removed, otherwise false.
   */
  delete(key) {
    return this._cache.delete(key);
  }

  /**
   * Flushes all elements from the cache.
   * @return {undefined}
   */
  flush() {
    return this._cache.clear();
  }

  /**
   * Dumps all cache entries to log.
   * @returns {object} a JSON object representing the entire contents of the cache.
   */
  debug() {
    const entries = _cache;
    const json = Object.fromEntries(entries);
    debug(`${json}`, 'cache-dump');
    return json;
  }
}