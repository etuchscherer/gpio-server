import config from '@/config';
import { debug } from '@/services/logging';

const { intake, exhaust } = config.equipment;
const { climateControl } = config.services;
const { enabled: isEnabled, autoFanOn, autoFanOff } = climateControl;
const label = 'climateControl';

export default class ClimateControl {

  constructor(app) {
    const { systemFactory } = app;
    const enabled = isEnabled ? 'enabled' : 'not enabled';
    debug(`climate-control is ${enabled}`, label);

    if (isEnabled) {
      systemFactory.findOrCreateTempSensor().addSubscriber('climateControl', this._climateControlSubscriber, this);
      this.intakeFan = systemFactory.findOrCreateRelay(intake.pin, intake.name);
      this.exhaustFan = systemFactory.findOrCreateRelay(exhaust.pin, exhaust.name);
    }
  }

  /**
   *
   * @param {object} temp Temprature obj from temp-sensor
   * @param {object} context service/temprature-balast context
   */
  _climateControlSubscriber(temp, context =  {}) {
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