import { assert } from 'chai';
import TemperatureBallast from '@/services/temperature-ballast';
import mockFan from '../mocks/fan';

let ballast;
let mockApp;

describe('temperature-ballast service works', () => {
  beforeEach(() => {
    mockApp = {
      gpioService: {
        findOrCreateTempSensor() {
          return {
            addSubscriber() {
              return {};
            }
          }
        },
        findOrCreateRelay() {
          return {};
        }
      },
    };
    ballast = new TemperatureBallast(mockApp);

    ballast.intakeFan = mockFan();
    ballast.exhaustFan = mockFan();
  });

  it('hi temps, turn fans on', () => {
    const temp = { tempC: 100 };
    ballast._temperatureBallastSubscriber(temp, ballast);
    assert.strictEqual(ballast.intakeFan.isEnergized(), true);
  });

  it('low temps, turn fans off', () => {
    const temp = { tempC: 0 };
    ballast._temperatureBallastSubscriber(temp, ballast);
    assert.strictEqual(ballast.intakeFan.isEnergized(), false);
  });
});
