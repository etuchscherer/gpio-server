import { debug } from '@/services/gpio';

/**
 * Reads the state of the specified pin
 * @param {object} req
 * @param {object} res
 */
const read = function(req, res) {
  const { params, app } = req;
  const isEnergized = app.gpioService.findOrCreate(+params.id).isEnergized();

  debug();
  res.json({ isEnergized });
};

/**
 * Sets a pin to the desired state
 * @param {object} req
 * @param {object} res
 */
const set = function(req, res) {
  const { params, app } = req;
  const pin = app.gpioService.findOrCreate(+params.id);
  const isEnergized = pin.toggle(+params.state).isEnergized();
  debug();
  res.json({ isEnergized });
};

/**
 * Destroys a pin and frees up resources.
 * @param {object} req
 * @param {object} res
 */
const destroy = function(req, res) {
  const { params, app } = req;
  let success = false;

  app.gpioService.destroy(params.id);
  success = true;
  debug();
  res.json({ success });
};

/**
 * Returns true if this pin is occupied. Otherwise false.
 * @param {number} id
 * @param {object} state
 */
const _hasPin = function(id = 0, app) {
  return id && app.gpioService.has(id);
};

/**
 * Returns a pin object from the cache.
 * @param {number} id
 * @param {object} app
 */
const _getPin = function(id, app) {
  return app.gpioService.get(id);
};

export { destroy, read, set };
