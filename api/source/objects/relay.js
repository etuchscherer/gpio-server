import Pin from '@/objects/pin';

export default class Relay extends Pin {

  constructor(name, id, direction = 'out') {
    super(id, direction);

    this.name = name;
    this.typeOf = 'relay';
  }

  energize() {
    return this._setState(1);
  }

  deEnergize() {
    return this._setState(0);
  }
}