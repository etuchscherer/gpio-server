const { assert } = require('chai');
import moment from 'moment';

import Temp from '@/objects/temp-sensor';

let tempSensor;

describe('temperature tests', () => {

  beforeEach(() => {
    tempSensor = new Temp();
  });

  it('subscribers work', () => {
    const { lastUpdated } = tempSensor.read();
    assert.strictEqual(moment(lastUpdated).isValid(), true);
  });

  it('can remove subscribers', () => {
    tempSensor.removeSubscriber('_lastUpdated');
    const { lastUpdated } = tempSensor.read();
    assert.strictEqual(lastUpdated, undefined);
  });

});