const PUMP = 18;
const LIGHT = 17;
const FAN = 27;

const init = function(app) {
  const { gpioService } = app;
  // TODO:: do not hardcode
  gpioService.findOrCreateRelay(PUMP, 'pump').deEnergize();
  gpioService.findOrCreatePin(LIGHT, 'light').off();
  gpioService.findOrCreateRelay(FAN, 'fan');
};

export default init;