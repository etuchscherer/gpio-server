import Pin from '@/objects/pin';

const { assert } = require("chai");

let pin;

describe('pin tests', () => {

  beforeEach(() => {
    pin = new Pin(1);
  });

  it('can create a pin', () => {
    assert.strictEqual(pin.constructor.name, 'Pin');
  });

  it('state defaults to zero', () => {
    assert.ok(pin.state === 0);
  });

  it('toggle 0, sets state to 0', () => {
    pin.toggle(0);
    assert.ok(pin.state === 0);
  });

  it('toggle 1, sets state to 1', () => {
    pin.toggle(1);
    assert.ok(pin.state === 1);
  });

  it('passing 2 to toggle, flips state', () => {
    pin.toggle(2);
    assert.ok(pin.state === 1);
  });

  it('toggling flips state implicitly', () => {
    pin.toggle(1) && assert.ok(pin.state === 1);
    pin.toggle() && assert.ok(pin.state === 0);
  });

  it('on() works', () => {
    pin.on();
    assert.ok(pin.state === 1);
  });

  it('off() works', () => {
    pin.off();
    assert.ok(pin.state === 0);
  });

  it('isEnergized() returns true', () => {
    pin.on();
    assert.ok(pin.isEnergized() === true);
  });
});