const Gpio = require('onoff').Gpio;

export default class LED {

  /**
   * Instansiates an LED
   * @param {number} pin
   */
  constructor(pin) {
    this.pin = pin;
    this.direction = 'out';
    this.state = 0;
    this.led = new Gpio(pin, this.direction);
  }

  /**
   * If no state is passed, the led is toggled, if
   * a zero is passed, the led is toggled off. If a
   * one is passed, it is toggled on.
   * @param {number} state
   */
  toggle(state = 2) {
    console.log('toggling to :: ', state);
    this.state = state;
    if (this.state === 2) this.state = +!this.isOn();

    if (this.state === 1) return this.on();
    if (this.state === 0) return this.off();
  }

  /**
   * Turns the led on.
   * @returns {object}
   */
  on() {
    this.state = 1;
    this.led.writeSync(this.state);
    return this;
  }

  /**
   * Turns the led off.
   * @returns {object}
   */
  off() {
    this.state = 0;
    this.led.writeSync(this.state);
    return this;
  }

  /**
   * Returns true if pinstate is 0 ( or off ). Otherwise false.
   * @returns {boolean}
   */
  isOff() {
    return this.led.readSync() === 0;
  }

  /**
   * Returns true if pinstate is 1 ( or on ). Otherwise false.
   * @returns {boolean}
   */
  isOn() {
    return this.led.readSync() === 1;
  }

  /**
   * Unexport GPIO and free resources
   */
  destroy() {
    this.led.unexport();
  }
}