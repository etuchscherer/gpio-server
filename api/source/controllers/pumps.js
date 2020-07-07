import { timestamp as ts } from '@/utils/timestamp';

const MAIN_FEED_PUMP_PIN = 21;

const toggle = function(req, res) {
  const { app } = req;
  const name = 'main feed pump';
  const pump = app.systemFactory.findOrCreatePin(MAIN_FEED_PUMP_PIN, name);
  const isEnergized = pump.toggle().isEnergized();
  const isEnabled = true;
  const timestamp = ts();

  res.json({ isEnergized, isEnabled, timestamp, name });
};

export { toggle };