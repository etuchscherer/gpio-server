import { timestamp as ts } from '@/utils/timestamp';

const LIGHT_PIN = 17;

const toggle = function(req, res) {
  const { app } = req;
  const name = 'main overhead light';
  const light = app.gpioService.findOrCreateRelay(LIGHT_PIN, name);
  const isEnergized = light.toggle().isEnergized();
  const timestamp = ts();

  res.json({ isEnergized, timestamp, name });
};

export {toggle};