import { timestamp as ts } from '@/utils/timestamp';

const LIGHT_PIN = 17;

const toggle = function(req, res) {
  const { app } = req;
  const name = 'main overhead light';
  const light = app.systemFactory.findOrCreatePin(LIGHT_PIN, name);
  const isEnergized = light.toggle().isEnergized();
  const isEnabled = true;
  const timestamp = ts();

  res.json({ isEnergized, isEnabled, timestamp, name });
};

export {toggle};