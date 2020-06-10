/**
 * Reads the state of the specified pin
 * @param {object} req
 * @param {object} res
 */
const read = function(req, res) {
  const { params, app } = req;
  const isEnergized = app.gpioService.findOrCreateRelay(+params.id).isEnergized();

  res.json({ isEnergized });
};

/**
 * Sets a pin to the desired state
 * @param {object} req
 * @param {object} res
 */
const set = function(req, res) {
  const { params, app } = req;
  const pin = app.gpioService.findOrCreateRelay(+params.id);
  const isEnergized = pin.toggle(+params.state).isEnergized();
  res.json({ isEnergized });
};

const status = function(req, res) {
  const { app } = req;
  const cache = app.gpioService.dumpAll();

  res.json({ cache });
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
  res.json({ success });
};

export { destroy, read, set, status };
