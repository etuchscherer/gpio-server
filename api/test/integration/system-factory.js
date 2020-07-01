import SystemFactory from '@/services/system-factory';

const { assert } = require('chai');

let systemFactory;
const isMocked = true;

describe('gpio tests', () => {

  beforeEach(() => {
    systemFactory = new SystemFactory;
  });

  it('system factory creates a cache', () => {
    assert.strictEqual(systemFactory._cache.constructor.name, 'cache');
  });

  it('can create a gpio', () => {
    const board = systemFactory.findOrCreateGpio();
    assert.strictEqual(board.constructor.name, 'Board');
  });

  it('can fetch a pin from the board', () => {
    const pin = systemFactory.findOrCreatePin(5);
    assert.strictEqual(pin.constructor.name, 'Pin');
  });

  it('can create a relay, for the board', () => {
    const relay = systemFactory.findOrCreateRelay(5, 'test', isMocked);
    assert.strictEqual(relay.constructor.name, 'Relay');
  });

  it('can create a temperature sensor, for the board', () => {
    const tempSensor = systemFactory.findOrCreateTempSensor(4, isMocked);
    assert.strictEqual(tempSensor.constructor.name, 'Temp');
  });
});