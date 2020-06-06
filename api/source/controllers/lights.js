import { timestamp as ts } from '@/utils/timestamp';

const toggle = function(req, res) {
  const { app } = req;
  const light = app.gpioService.findOrCreate(17);

  const isEnergized = light.toggle().isOn();
  const timestamp = ts();
  res.json({ isEnergized, timestamp });
};

export {toggle};