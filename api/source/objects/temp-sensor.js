import { getTempC } from '@/tasks/temp-sensor';
import { celsiusToFahrenheit } from '@/utils/celsius-to-fahrenheit';
import moment from 'moment';

export default class Temp {

  constructor(id = 4) {
    this.name = 'temp sensor';
    this.typeOf = '1 wire interface';
    this.id = id;
  }

  /**
   * Reads a temprature from the
   * 1-wire interface.
   */
  read() {
    this._setTemp();
    return this;
  }

  /**
   * Returns the temp in °C.
   */
  getTempC() {
    return this.tempC().toFixed(1);
  }

  /**
   * Returns the temp in °F.
   */
  getTempF() {
    return this.tempF().toFixed(1);
  }

  /**
   * reads from the sensor and sets to memory;
   */
  _setTemp() {
    this.tempC = getTempC();
    this.tempF = celsiusToFahrenheit(this.tempC);
    this.lastUpdated = moment().format();
  }
}