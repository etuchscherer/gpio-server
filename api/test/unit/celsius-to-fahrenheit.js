import { celsiusToFahrenheit } from '@/utils/celsius-to-fahrenheit';

import { assert } from 'chai';

describe('celsius to fahrenheit', function() {

  it('can convert freezing', () => {
    assert.strictEqual(celsiusToFahrenheit(0), 32);
  });

  it('can convert boiling', () => {
    assert.strictEqual(celsiusToFahrenheit(100), 212);
  });
});