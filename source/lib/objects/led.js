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