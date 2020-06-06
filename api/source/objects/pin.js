import validPinstates from '@/utils/valid-pinstates';

var rpio = require('rpio');

export default class Pin {

  /**
   * Instansiates a Pin
   * @param {number} id
   * @param {string} direction
   */
  constructor(id, direction = rpio.OUTPUT) {
    this.id = +id;
    this.direction = direction;
    this.state = 0;
  }

  /**
   * If no state is passed, the pin state is inverted. if
   * a zero is passed, the pin is toggled off. If a
   * one is passed, it is toggled on.
   * @param {number} state
   * @returns {object}
   */
  toggle(state = 2) {
    if (state === 2) state = +!this.isEnergized();

    this._setState(state);
    return this;
  }

  /**
   * Turns the pin on.
   * @returns {object}
   */
  on() {
    this._setState(1);
    return this;
  }

  /**
   * Turns the pin off.
   * @returns {object}
   */
  off() {
    this._setState(0);
    return this;
  }

  /**
   * Returns true if pinstate is 1 ( or on ). Otherwise false.
   * @returns {boolean}
   */
  isEnergized() {
    return !!rpio.read(this.id);
  }

  /**
   * Unexport GPIO and free resources
   */
  destroy() {
    rpio.close(this.id, rpio.PIN_RESET);
  }

  /**
   * Sets the pinstate on or off.
   * @param {number} newState
   */
  _setState(newState) {
    if (!this._isValidState(newState)) {
      throw new Error('Tried to set an invalid pinstate, expected a 1 or a 0');
    }
    this.state = newState;
    rpio.open(this.id, this.direction, this.state);
    return this;
  }

  /**
   * Validates the pinstate
   * @param {number} state
   */
  _isValidState(state) {
    return validPinstates.includes(state);
  }
}
