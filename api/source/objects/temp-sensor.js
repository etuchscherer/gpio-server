import { getTempC } from '@/tasks/temp-sensor';
// import { celsiusToFahrenheit } from '@/utils/celsius-to-fahrenheit';
// import moment from 'moment';

export default class Temp {

  constructor(id = 4) {
    this.subscribers = [];
    this.name = 'temp sensor';
    this.typeOf = '1 wire interface';
    this.lastUpdated;
    this.id = id;
    // this.addSubscriber('_toF', (temp) => this.tempF = celsiusToFahrenheit(temp.tempC));
    // this.addSubscriber('_lastUpdated', () => this.lastUpdated = moment().format());
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
   * Adds a subscriber function, that will fire whenever
   * a temperature change is detected. The
   * @param {string} key the name of the subscriber
   * @param {function} callback callback arg is this temp-sensor object
   */
  addSubscriber(key, callback) {
    this.subscribers.push({ key, callback });
  }

  /**
   * reads from the sensor and sets to memory;
   */
  _setTemp() {
    this.tempC = getTempC();
    this._doSubscribers();
    // this.tempF = celsiusToFahrenheit(this.tempC);
    // this.lastUpdated = moment().format();
  }

  _doSubscribers() {
    this.subscribers.forEach(el => el.callback);
  }
}