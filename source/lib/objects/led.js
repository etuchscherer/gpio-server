// import Gpio from '@/lib/objects/gpio';
var Gpio = require('onoff').Gpio;

export default class LED {

  /**
   * Instansiates an LED
   * @param {number} pin
   */
  constructor(pin) {
    this.pin = pin;
    this.state = 'out';
    this.led = new Gpio(pin, this.state);
  }

  /**
   * If no state is passed, the led is toggled, if
   * a zero is passed, the led is toggled off. If a
   * one is passed, it is toggled on.
   * @param {number} state
   */
  toggle(state = 2) {
    if (state === 2) state = +!this.isOn();

    this.led.writeSync(state);
    return this;
  }

  /**
   * Turns the led on.
   * @returns {object}
   */
  on() {
    this.led.writeSync(1);
    return this;
  }

  /**
   * Turns the led off.
   * @returns {object}
   */
  off() {
    this.led.writeSync(0);
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