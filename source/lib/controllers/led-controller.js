import LED from '@/lib/objects/led';

/**
 * Reads the state of the specified pin
 * @param {object} req
 * @param {object} res
 */
const read = function(req, res) {
  const { params, app } = req;

  if (!hasPin(params.pin, app)) {
    return res.send(404);
  }

  const state = getPin(params.pin, app);
  res.send({ isOn: state.isOn() });
};

/**
 * Sets a pin to the desired state
 * @param {object} req
 * @param {object} res
 */
const set = function(req, res) {
  const { params, app } = req;
  const led = app.gpioService.findOrCreate(params.pin);
  led.toggle(params.state);

  res.send({ isOn: led.isOn() });
};

/**
 * Destroys a pin and frees up resources.
 * @param {object} req
 * @param {object} res
 */
const destroy = function(req, res) {
  const { pin } = req.params || 0;
  let success = false;

  if (!hasPin(params.pin, app)) {
    return res.send(404);
  }

  const state = getPin(params.pin, app);
  state.destroy();
  success = true;

  if (pin) {
    const led = new LED(pin);
    success = true;
    led.destroy();
  }

  res.send({ success });
};

/**
 * Returns true if this pin is occupied. Otherwise false.
 * @param {number} pin
 * @param {object} state
 */
const hasPin = function(pin = 0, app) {
  return pin && app.gpioService.has(pin);
};

/**
 * Returns a pin object from the cache.
 * @param {number} pin
 * @param {object} app
 */
const getPin = function(pin, app) {
  return app.gpioService.get(pin);
};

export { destroy, read, set };