import Pin from '@/objects/pin';

export default class Board {
  constructor({ pins }) {
    this.reset(pins);
  }

  /**
   * Resets the board to a default state.
   */
  reset(pins) {
    this.pins = [];
    pins.forEach(pin => {
      const { id, gpio, name, state = 0, direction = 'out' } = pin;
      this.pins.push(new Pin(id, gpio, name, state, direction));
    });
  }

  getPin(gpio) {
    return this.pins.filter(pin => gpio === pin.id)[0];
  }
};
