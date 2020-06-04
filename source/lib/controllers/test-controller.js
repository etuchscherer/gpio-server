import LED from '@/lib/objects/led';

const ledOn = function(req, res) {
  const { pin } = req.params || 0;
  let success = false;

  if (pin) {
    const led = new LED(pin);
    success = true;
    led.on();
  }

  res.send({ success });
};

const ledOff = function(req, res) {
  const { pin } = req.params || 0;
  let success = false;

  if (pin) {
    const led = new LED(pin);
    success = true;
    led.off();
  }

  res.send({ success: 1 });
};