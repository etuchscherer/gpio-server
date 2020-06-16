import config from '@/config';

const { intake, exhaust } = config.equipment;

import { timestamp as ts } from '@/utils/timestamp';

const toggle = function(req, res) {
  const { app } = req;
  const intakeFan = app.gpioService.findOrCreateRelay(intake.pin, intake.name);
  const exhaustFan = app.gpioService.findOrCreateRelay(exhaust.pin, exhaust.name);
  const isEnergized = intakeFan.toggle().isEnergized();

  // TODO : reconcile that we're ony returning intake status right now.
  exhaustFan.toggle();
  const isEnabled = true;
  const timestamp = ts();

  res.json({ isEnergized, isEnabled, timestamp, name: 'combined fans' });
};

export { toggle };