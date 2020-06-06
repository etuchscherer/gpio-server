import Pin from '@/objects/pin';

const _cache = new Map();

/**
 * Finds a pin in the cache, or creates a new one for the specified id.
 * Pushes to the cache upon creation.
 * @param {number} id
 */
const findOrCreate = function(id) {
  if (!_cache.has(+id)) {
    _cache.set(+id, new Pin(+id));
  }

  return _cache.get(+id);
};

/**
 * Pushes the supplied pin into the cache.
 * @param {number} id
 * @param {object} value
 */
const set = function(id, value) {
  return _cache.set(+id, value);
};

/**
 * Returns true if the supplied pin exists in the cache. Otherwise false.
 * @param {number} id
 */
const has = function(id) {
  return _cache.has(+id);
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
  if (_cache.has(+id)) {
    _cache.get(+id).destroy();
    _cache.delete(+id);
  }
};

/**
 * Prints out the contents of the gpio state/_cache.
 */
export const debug = function() {
  console.log('debugging cache :: ', _cache);
};

export default {
  _cache,
  findOrCreate,
  set,
  get,
  has,
  debug,
  destroy
};
