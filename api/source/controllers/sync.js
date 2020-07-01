import config from '@/config';

const { pump: p, light: l, exhaust: e } = config.equipment;

/**
 * This route is sypplies data, to keep the
 * client in sync with the equipment
 * @param {object} req
 * @param {object} res
 */
const sync = function(req, res, next) {

  const { systemFactory } = req.app;
  const pump = systemFactory.findOrCreateRelay(p.pin);
  const light = systemFactory.findOrCreateRelay(l.pin);
  const fan = systemFactory.findOrCreateRelay(e.pin);
  const weatherService = systemFactory.findOrCreateWeatherService();

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

  const weather = weatherService.getReport();

  res.json({ equipment, weather });
  return next();
};

export { sync };