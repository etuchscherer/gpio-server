const enable = function(req) {
  const { app } = req;

  const feedPump = app.gpioService.get(18);
  feedPump.pump.on();
};

const disable = function(req) {
  const { app } = req;

  const feedPump = app.gpioService.get(18);
  feedPump.pump.off();
};

export { enable, disable };