import { assert } from 'chai';
import ClimateControl from '@/services/climate-control';
import mockFan from '../mocks/fan';

let climateControl;
let mockApp;

describe('climate-control service works', () => {
  beforeEach(() => {
    mockApp = {
      systemFactory: {
        findOrCreateTempSensor() {
          return {
            addSubscriber() {
              return {};
            }
          };
        },
        findOrCreateRelay() {
          return {};
        }
      },
    };
    climateControl = new ClimateControl(mockApp);

    climateControl.intakeFan = mockFan();
    climateControl.exhaustFan = mockFan();
  });

  it('hi temps, turn fans on', () => {
    const temp = { tempC: 100 };
    climateControl._climateControlSubscriber(temp, climateControl);
    assert.strictEqual(climateControl.intakeFan.isEnergized(), true);
  });

  it('low temps, turn fans off', () => {
    const temp = { tempC: 0 };
    climateControl._climateControlSubscriber(temp, climateControl);
    assert.strictEqual(climateControl.intakeFan.isEnergized(), false);
  });
});
