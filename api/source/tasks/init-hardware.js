const PUMP = 18;
const LIGHT = 17;

const init = function(app) {
  const { gpioService } = app;
  // TODO:: do not hardcode
  gpioService.findOrCreateRelay(PUMP, 'pump');
  gpioService.findOrCreateRelay(LIGHT, 'light');
};

export default init;