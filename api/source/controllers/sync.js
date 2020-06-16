import config from '@/config';

const { pump: p, light: l, exhaust: e } = config.equipment;

/**
 * This route is intended to supply quick info to the
 * client, for syncing up state.
 * @param {object} req
 * @param {object} res
 */
const sync = function(req, res) {

  const { gpioService } = req.app;
  const pump = gpioService.findOrCreateRelay(p.pin);
  const light = gpioService.findOrCreateRelay(l.pin);
  const fan = gpioService.findOrCreateRelay(e.pin)

  const equipment = {
    pump: {
      isEnergized: pump.isEnergized(),
      isEnabled: true
    },
    fan: {
      isEnergized: fan.isEnergized(),
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