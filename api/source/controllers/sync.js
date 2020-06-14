/**
 * This route is intended to supply quick info to the
 * client, for syncing up state.
 * @param {object} req
 * @param {object} res
 */
const sync = function(req, res) {

  const { gpioService } = req.app;
  const pump = gpioService.findOrCreateRelay(18);
  const light = gpioService.findOrCreateRelay(17);

  const equipment = {
    pump: {
      isEnergized: pump.isEnergized(),
      isEnabled: true
    },
    fan: {
      isEnergized: false,
      isEnabled: true
    },
    light: {
      isEnergized: light.isEnergized(),
      isEnabled: true
    }
  };

  res.json(equipment);
};

export { sync };