import { getTempC } from '@/tasks/temp-sensor';
import moment from 'moment';

export default class Temp {

  constructor() {
    this.name = 'temp sensor';
    this.typeOf = '1 wire interface';
    this.id = 4; // Ok to hardcode. 1-wire interface only works on pin 4.
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
    this.tempF = (this.tempC * 9 / 5) + 32;
    this.lastUpdated = moment().format();
  }
}