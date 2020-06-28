import config from '@/config';

const { pump: p, light: l, exhaust: e } = config.equipment;

/**
 * This route is intended to supply quick info to the
 * client, for syncing up state.
 * @param {object} req
 * @param {object} res
 */
const sync = function(req, res, next) {

  const { systemFactory } = req.app;
  const pump = systemFactory.findOrCreateRelay(p.pin);
  const light = systemFactory.findOrCreateRelay(l.pin);
  const fan = systemFactory.findOrCreateRelay(e.pin);

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
  return next();
};

export { sync };