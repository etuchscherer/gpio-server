import Pin from '@/objects/pin';

export default class Relay extends Pin {

  constructor(name, id, direction = 'out') {
    super(id, direction);

    this.name = name;
    this.typeOf = 'relay';
  }

  energize() {
    return this._setState(0);
  }

  /**
   * The relay needs 5V to
   * hold the switch open.
   */
  deEnergize() {
    return this._setState(1);
  }

  /**
   * 5V Relay's close thier switch when
   * low is applied. Hi holds the relay open.
   */
  isEnergized() {
    return !super.isEnergized();
  }
}