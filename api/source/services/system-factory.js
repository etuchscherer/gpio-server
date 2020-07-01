import Cache from '@/services/cache';
import { debug } from '@/services/logging';
import Board from '@/objects/gpio';
import Relay from '@/objects/relay';
import TempSensor from '@/objects/temp-sensor';
import { WEATHER_SERVICE_CACHE_KEY, TEMP as TEMP_SENSOR } from '@/config';
import WeatherReport from '@/services/weather-report';
import boardConfig from '@/config/gpio';

const label = 'system-factory';
const GPIO_BOARD_CACHE_KEY = 'gpio-board-cache-key';

export default class SystemFactory {

  constructor() {
    debug('instansiating a new system factory', label);
    this._cache = new Cache();
  }

  findOrCreateGpio() {
    const doesExist = this._cache.has(GPIO_BOARD_CACHE_KEY);
    const status = doesExist ? 'fetching' : 'creating';
    debug(`${status} gpio board in the cache`, label);

    if (!doesExist) {
      this._cache.set(GPIO_BOARD_CACHE_KEY, new Board(boardConfig));
    }

    return this._cache.get(GPIO_BOARD_CACHE_KEY);
  }

  /**
  * Finds a pin in the cache, or creates a new one for the specified id.
  * Pushes to the cache upon creation.
  * @param {number} id The pin that drives the relay
  * @param {string} description
  */
  findOrCreateRelay(id, description, isMocked = 'false') {
    const gpio = this.findOrCreateGpio();
    let pin = gpio.getPin(+id);

    if (pin.typeOf !== 'relay') {
      // create the relay
      debug(`setting up pin as a relay on gpio ${id}`, label);
      pin = new Relay(description, +id, 'out', isMocked);
    } else {
      debug(`getting relay from gpio ${id}`, label);
    }

    return pin;
  }

  /**
  * Finds a pin in the cache, or creates a new one for the specified id.
  * Pushes to the cache upon creation.
  * @param {number} id The pin that drives the relay
  */
  findOrCreatePin(id, description = '') {
    const gpio = this.findOrCreateGpio();
    const pin = gpio.getPin(+id);
    pin.description = `${pin.description} ${description}`;
    debug(`getting pin ${id} from the gpio`, label);

    return pin;
  }

  /**
   * Returns a temp sensor object ( effectivly a singleton ).
   */
  findOrCreateTempSensor(id = TEMP_SENSOR, isMocked) {
    const gpio = this.findOrCreateGpio();
    let pin = gpio.getPin(id);

    if (pin.name !== 'temp sensor') {
      debug(`creating a temp sensor on gpio ${id}`, label);
      pin = new TempSensor(id, isMocked);
    } else {
      debug(`fetched a temp sensor from gpio ${id}`, label);
    }

    return pin;
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