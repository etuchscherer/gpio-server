import { timestamp as ts } from '@/utils/timestamp';

const toggle = function(req, res) {
  const { app } = req;
  const pump = app.gpioService.findOrCreate(18);

  const isEnergized = pump.toggle().isOn();
  const timestamp = ts();
  res.json({ isEnergized, timestamp });
};

export { toggle };