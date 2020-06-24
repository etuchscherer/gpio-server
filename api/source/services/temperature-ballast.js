import config from '@/config';
import { debug } from '@/services/logging';

const { intake, exhaust } = config.equipment;
const { temperatureBallast } = config.services;
const { enabled: isEnabled } = temperatureBallast;
const label = 'TemperatureBallast';

class TemperatureBallast {

  constructor(app) {
    let enabled = isEnabled ? 'enabled' : 'not enabled';
    debug(`temperature-ballast is ${enabled}`, label);

    if (isEnabled) {
      this._cache = app.gpio._cache;
    }
  }


}