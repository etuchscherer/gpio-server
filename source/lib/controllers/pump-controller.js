const enable = function(req, res) {
  const { app } = req;

  const feedPump = app.gpioService.get(18);
  feedPump.pump.on();
};

const disable = function(req, res) {
  const { app } = req;

  const feedPump = app.gpioService.get(18);
  feedPump.pump.off();
};

export { enable, disable };