import Pin from '@/objects/pin';

export default class Relay extends Pin {

  constructor(name, id, direction = 'out') {
    super(id, direction);

    this.name = name;
    this.typeOf = 'relay';
    this._setState(1);
  }

  /**
   * Energizes a relay
   */
  energize() {
    return this._setState(0);
  }

  on() {
    throw new Error('relays work on a not gate... use "energize" instead');
  }

  off() {
    throw new Error('relays work on a not gate... use "deEnergize" instead');
  }

  /**
   * The relay needs 5V to
   * hold the switch open.
   */
  deEnergize() {
    return this._setState(1);
  }

  isEnergized() {
    return !super.isEnergized();
  }
}