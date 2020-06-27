import config from '@/config';
import { debug } from '@/services/logging';

const { intake, exhaust } = config.equipment;
const { temperatureBallast } = config.services;
const { enabled: isEnabled, autoFanOn, autoFanOff } = temperatureBallast;
const label = 'TemperatureBallast';

export default class TemperatureBallast {

  constructor(app) {
    const { gpioService } = app;
    const enabled = isEnabled ? 'enabled' : 'not enabled';
    debug(`temperature-ballast is ${enabled}`, label);

    if (isEnabled) {
      gpioService.findOrCreateTempSensor().addSubscriber('tempBallast', this._temperatureBallastSubscriber, this);
      this.intakeFan = gpioService.findOrCreateRelay(intake.pin, intake.name);
      this.exhaustFan = gpioService.findOrCreateRelay(exhaust.pin, exhaust.name);
    }
  }

  /**
   *
   * @param {object} temp Temprature obj from temp-sensor
   * @param {object} context service/temprature-balast context
   */
  _temperatureBallastSubscriber(temp, context =  {}) {
    const { intakeFan, exhaustFan } = context;

    const { tempC } = temp;
    const shouldEnergizeFans = intakeFan.isEnergized() === false && tempC >= autoFanOn;
    const shouldDeEnergizeFans = intakeFan.isEnergized() === true && tempC <= autoFanOff;

    if (shouldEnergizeFans) {
      debug('cabinet is too hot, energizing fans', label);
      intakeFan.toggle();
      exhaustFan.toggle();
    }

    if (shouldDeEnergizeFans) {
      debug('cabinet is cool, disabling fans', label);
      intakeFan.toggle();
      exhaustFan.toggle();
    }
  }


}