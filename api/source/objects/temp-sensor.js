import { getTempC } from '@/tasks/temp-sensor';
import { celsiusToFahrenheit } from '@/utils/celsius-to-fahrenheit';
import moment from 'moment';
import { remove } from '../utils/collection';

export default class Temp {

  constructor(id = 4) {
    this.subscribers = [];
    this.name = 'temp sensor';
    this.typeOf = '1 wire interface';
    this.lastUpdated;
    this.id = id;
    this.addSubscriber('_setFahrenheit', this._setFahrenheit);
    this.addSubscriber('_lastUpdated', this._setLastUpdated);
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
   * a temperature change is detected. Returns this.
   * @param {string} key the name of the subscriber
   * @param {function} callback callback arg is this temp-sensor object
   */
  addSubscriber(key, callback, context) {
    this.subscribers.push({ key, callback, context });
    return this;
  }

  /**
   * Removes a subscriber from the list, and returns this.
   * @param {string} key
   */
  removeSubscriber(key) {
    this.subscribers = remove(this.subscribers, 'key', key);
    return this;
  }

  /**
   * reads from the sensor and sets to memory;
   */
  _setTemp() {
    this.tempC = getTempC();
    this._doSubscribers();

    this.tempF = celsiusToFahrenheit(this.tempC);
  }

  _doSubscribers() {
    this.subscribers.forEach(el => el.callback(this, el.context));
  }

  _setLastUpdated(temp) {
    temp.lastUpdated = moment().format();
  }

  _setFahrenheit(temp) {
    this.tempF = celsiusToFahrenheit(temp.tempC);
  }
}