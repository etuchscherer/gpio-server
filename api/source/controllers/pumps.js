import { timestamp as ts } from '@/utils/timestamp';

const MAIN_FEED_PUMP_PIN = 18;

const toggle = function(req, res) {
  const { app } = req;
  const name = 'main feed pump';
  const pump = app.gpioService.findOrCreate(MAIN_FEED_PUMP_PIN, name);
  const isEnergized = pump.toggle().isEnergized();
  const timestamp = ts();

  res.json({ isEnergized, timestamp, name });
};

export { toggle };