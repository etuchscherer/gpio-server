const Gpio = require('onoff').Gpio;

export default class Relay {

  constructor(name, pin) {
    this.name = name;
    this.pin = pin;
    this.state = 'out';
    this.relay = new Gpio(pin, state);
  }

  /**
   * Turns the relay on.
   * @returns {object}
   */
  on() {
    this.relay.writeSync(1);
    return this;
  }

  /**
   * Turns the relay off.
   * @returns {object}
   */
  off() {
    this.relay.writeSync(0);
    return this;
  }

  /**
   * Returns true if pinstate is 0 ( or off ). Otherwise false.
   * @returns {boolean}
   */
  isOff() {
    return this.relay.readSync() === 0;
  }

  /**
   * Returns true if pinstate is 1 ( or on ). Otherwise false.
   * @returns {boolean}
   */
  isOn() {
    return this.relay.readSync() === 1;
  }

  /**
   * Unexport GPIO and free resources
   */
  destroy() {
    this.relay.unexport();
  }
}