import systemFactory from '@/services/gpio';

const { assert } = require('chai');

let gpio;

describe('gpio tests', () => {

  beforeEach(() => {
    gpio = systemFactory;
  });

  it('creats a cache', () => {
    assert.strictEqual(gpio._cache.constructor.name, 'Map');
  });
});