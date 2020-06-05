import _ from 'lodash';
import LED from '@/lib/objects/led';

const _cache = new Map();

/**
 * Finds an led in the cache, or creates a new one for the specified pin.
 * Pushes to the cache upon creation.
 * @param {number} pin
 */
const findOrCreate = function (pin) {
  let led = _.find(_cache, { pin });

  if (!led) {
    led = new LED(pin);
    set(pin, led);
  }

  return led;
};

/**
 * Pushes the supplied pin into the cache.
 * @param {number} key
 * @param {object} value
 */
const set = function(key, value) {
  return _cache.set(key, value);
};

/**
 * Returns true if he supplied pin exists in the cache. Otherwise false.
 * @param {number} pin
 */
const has = function(pin) {
  return _cache.has(pin);
};

/**
 * Plucks the object from the cache
 * @param {number} pin
 * @returns {object}
 */
const get = function(pin) {
  return _cache.get(pin);
};

/**
 * Prints out the contents of the gpio state/_cache.
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
export const debug = function(req, res, next) {
  console.log('debugging cache :: ', _cache);
  return next();
};

export default {
  _cache,
  findOrCreate,
  set,
  get,
  has,
  debug
};
