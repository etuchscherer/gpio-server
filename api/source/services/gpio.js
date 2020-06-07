import { debug } from '@/services/logging';
import Pin from '@/objects/pin';

const _cache = new Map();
const label = 'cache';

/**
 * Finds a pin in the cache, or creates a new one for the specified id.
 * Pushes to the cache upon creation.
 * @param {number} id
 */
const findOrCreate = function(id) {
  debug(`lookin up pin ${17}`, label);
  if (!_cache.has(+id)) {
    debug('miss', label);
    _cache.set(+id, new Pin(+id));
  } else {
    debug('hit', label);
  }

  return _cache.get(+id);
};

/**
 * Pushes the supplied pin into the cache.
 * @param {number} id
 * @param {object} value
 */
const set = function(id, value) {
  debug(`setting ${typeof value} as pin ${id}`, label);
  return _cache.set(+id, value);
};

/**
 * Returns true if the supplied pin exists in the cache. Otherwise false.
 * @param {number} id
 */
const has = function(id) {
  const hasHit = _cache.has(+id);
  debug(`testing for pin ${id}, ${ hasHit ? 'hit' : 'miss' }`, 'cache');
  return hasHit;
};

/**
 * Returns the object from the cache
 * @param {number} id
 * @returns {object}
 */
const get = function(id) {
  return _cache.get(+id);
};

/**
 * Deletes the pin from the cache
 * @param {number} id
 */
const destroy = function(id) {
  debug(`flushing pin ${id}`);
  if (_cache.has(+id)) {
    _cache.get(+id).destroy();
    _cache.delete(+id);
  }
};

export default {
  _cache,
  findOrCreate,
  set,
  get,
  has,
  destroy
};
