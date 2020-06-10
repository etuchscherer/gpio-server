const PUMP = 18;
const LIGHT = 17;

const init = function(app) {
  const { gpioService } = app;
  // TODO:: do not hardcode
  gpioService.findOrCreateRelay(PUMP);
  gpioService.findOrCreateRelay(LIGHT);
};

export default init;