import { debug } from '@/services/logging';
import Relay from '@/objects/relay';

const _cache = new Map();
const label = 'cache';

/**
 * Finds a pin in the cache, or creates a new one for the specified id.
 * Pushes to the cache upon creation.
 * @param {number} id The pin that drives the relay
 * @param {string} name human readable name of the relay's function
 */
const findOrCreate = function(id, name) {
  debug(`looking up pin ${id}`, label);
  if (!_cache.has(+id)) {
    debug('miss', label);
    _cache.set(+id, new Relay(name, +id));
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
 * Dumps all cache data out
 */
const dumpAll = function() {
  const entries = _cache;
  const json = Object.fromEntries(entries);

  return { pins: _sanatizePayload(json) };
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

/**
 * Sanatizes the payload, for client consumption.
 * @param {object} json
 * @returns {array}
 */
const _sanatizePayload = function(json) {
  Object.keys(json).map((el) => {
    const pin = json[el];
    const id = el;

    pin.isEnergized = pin.state === 1;
    // pin.pin = id;

    // delete pin.pin;
    // delete pin.state;

    return { id, pin };
  });
};

export default {
  _cache,
  findOrCreate,
  set,
  get,
  has,
  dumpAll,
  destroy
};
