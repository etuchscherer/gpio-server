const { assert } = require('chai');
import moment from 'moment';

import Temp from '@/objects/temp-sensor';

let tempSensor;
const isMocked = true;

describe('temperature tests', () => {

  beforeEach(() => {
    tempSensor = new Temp(4, isMocked);
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