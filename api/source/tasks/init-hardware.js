import config from '@/config';

const { pump, exhaust, intake, light } = config.equipment;

const init = function(app) {
  const { gpioService } = app;

  gpioService.findOrCreateRelay(pump.pin, 'pump');
  gpioService.findOrCreatePin(light.pin, 'light');
  gpioService.findOrCreateRelay(intake.pin, 'fan');
  gpioService.findOrCreateRelay(exhaust.pin, 'fan');
};

export default init;