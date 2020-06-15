import gpioService from '@/services/gpio';

const { assert } = require('chai');

let gpio;

describe('gpio tests', () => {

  beforeEach(() => {
    gpio = gpioService;
  });

  it('creats a cache', () => {
    assert.strictEqual(gpio._cache.constructor.name, 'Map');
  })
});