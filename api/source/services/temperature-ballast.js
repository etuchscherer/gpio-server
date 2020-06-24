import config from '@/config';
import { debug } from '@/services/logging';

const { intake, exhaust } = config.equipment;
const { temperatureBallast } = config.services;
const { enabled: isEnabled, autoFanOn, autoFanOff } = temperatureBallast;
const label = 'TemperatureBallast';

export default class TemperatureBallast {

  constructor(app) {
    const enabled = isEnabled ? 'enabled' : 'not enabled';
    debug(`temperature-ballast is ${enabled}`, label);

    if (isEnabled) {
      this.intakeFan = app.gpioService.findOrCreateRelay(intake.pin, intake.name);
      this.exhaustFan = app.gpioService.findOrCreateRelay(exhaust.pin, exhaust.name);
      this._cache = app.gpio._cache;
    }
  }

  _temperatureBallastSubscriber(temp) {
    const { intakeFan, exhaustFan } = this;
    const { tempC } = temp;
    const shouldEnergizeFans = intakeFan.isEnergized() === false && tempC >= autoFanOn;
    const shouldDeEnergizeFans = intakeFan.isEnergized() === true && tempC <= autoFanOff;

    if (shouldEnergizeFans) {
      debug('cabinet is too hot, energizing fans', label);
      intakeFan.on();
      exhaustFan.on();
    }

    if (shouldDeEnergizeFans) {
      debug('cabinet is cool, disabling fans', label);
      intakeFan.off();
      exhaustFan.off();
    }
  }


}