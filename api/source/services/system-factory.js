import Cache from '@/services/cache';
import { debug } from 'winston';
import Relay from '@/objects/relay';
import Pin from '@/objects/pin';
import TempSensor from '@/objects/temp-sensor';
import { WEATHER_SERVICE_CACHE_KEY, TEMP as TEMP_SENSOR } from '@/config';
import WeatherReport from '@/services/weather-report';

const label = 'system-factory';

export default class SystemFactory {

  constructor() {
    debug('instansiating a new system factory', label);
    this._cache = new Cache();
  }

  /**
  * Finds a pin in the cache, or creates a new one for the specified id.
  * Pushes to the cache upon creation.
  * @param {number} id The pin that drives the relay
  * @param {string} description
  */
  findOrCreateRelay(id, description) {
    const doesExist = this._cache.has(+id);
    const status = doesExist ? 'fetching' : 'creating';
    debug(`${status} relay ${id} in the cache`, label);

    if (!doesExist) {
      this._cache.set(+id, new Relay(description, +id));
    }

    return this._cache.get(+id);
  }

  /**
  * Finds a pin in the cache, or creates a new one for the specified id.
  * Pushes to the cache upon creation.
  * @param {number} id The pin that drives the relay
  */
  findOrCreatePin(id) {
    const doesExist = this._cache.has(+id);
    const status = doesExist ? 'fetching' : 'creating';
    debug(`${status} a pin ${id} in the cache`, label);

    if (!doesExist) {
      this._cache.set(+id, new Pin(+id));
    }

    return this._cache.get(+id);
  }

  /**
   * Returns a temp sensor object ( effectivly a singleton ).
   */
  findOrCreateTempSensor() {
    const doesExist = this._cache.has(TEMP_SENSOR);
    const status = doesExist ? 'fetching' : 'creating';
    debug(`${status} a pin ${TEMP_SENSOR} in the cache`, label);

    if (!doesExist) {
      this._cache.set(TEMP_SENSOR, new TempSensor());
    }

    return this._cache.get(TEMP_SENSOR);
  }

  findOrCreateWeatherService() {
    const doesExist = this._cache.has(WEATHER_SERVICE_CACHE_KEY);
    const status = doesExist ? 'fetching' : 'creating';
    debug(`${status} weather service via the cache`, label);

    if (!doesExist) {
      this._cache.set(WEATHER_SERVICE_CACHE_KEY, new WeatherReport());
    }

    return this._cache.get(WEATHER_SERVICE_CACHE_KEY);
  }


}