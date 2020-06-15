import Relay from '@/objects/relay';

const { assert } = require("chai");

let relay;

describe('relay tests', () => {

  beforeEach(() => {
    relay = new Relay('test', 1);
  });

  it('can create a relay', () => {
    assert.strictEqual(relay.constructor.name, 'Relay');
  });

  it('sets the name of the relay', () => {
    assert.strictEqual(relay.name, 'test');
  });

  it('sets the id properly', () => {
    assert.strictEqual(relay.id, 1)
  });

  it('instansiates pin to high', () => {
    assert.strictEqual(relay.state, 1);
  });

  it('energize a relay by setting state to 0', () => {
    relay.energize();
    assert.strictEqual(relay.state, 0);
  });

  it('deEnergize() a relay by setting state to 1', () => {
    relay.deEnergize();
    assert.strictEqual(relay.state, 1);
  });

  it('isEnergized() returns false', () => {
    assert.strictEqual(relay.isEnergized(), false);
  })
});