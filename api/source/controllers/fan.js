import { timestamp as ts } from '@/utils/timestamp';

const MAIN_INTAKE_FAN_PIN = 27;

const toggle = function (req, res) {
  const { app } = req;
  const name = 'main intake fan';
  const fan = app.gpioService.findOrCreateRelay(MAIN_INTAKE_FAN_PIN, name);
  const isEnergized = fan.toggle().isEnergized();
  const isEnabled = true;
  const timestamp = ts();

  res.json({ isEnergized, isEnabled, timestamp, name });
};

export { toggle };