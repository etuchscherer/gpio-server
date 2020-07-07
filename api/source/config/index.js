import winston from 'winston';

const OFF = 0;
const ON = 1;
const PUMP = 21;
const LIGHT = 17;
const INTAKE = 23;
const EXHAUST = 22;
const TEMP = 4;

const WEATHER_SERVICE_CACHE_KEY = 'weather-service';

const config = {
  logging: {
    format: winston.format.json()
  },
  gpio: {
    capableEnvironments: ['pi', 'test'],
    validPinstates: [OFF, ON]
  },
  equipment: {
    pump: {
      pin: PUMP,
      name: 'main water pump',
      description: 'main pump responsible for watering plants. Runs on 12VDC. Controlled by a multi-channel relay.',
      enabled: true
    },
    exhaust: {
      pin: EXHAUST,
      name: 'exhaust fan',
      description: 'main exhaust fan. only one in the system. Runs on 12VDC. Controlled by a multi-channel relay.',
      enabled: true
    },
    intake: {
      pin: INTAKE,
      name: 'intake fan',
      description: 'main intake fan. only one in the system. Runs on 12VDC. Controlled by a multi-channel relay.',
      enabled: true
    },
    light: {
      pin: LIGHT,
      name: 'main overhead light',
      description: 'main overhead light. Bloomspec 600W. Runs on 110VAC. Controlled by a special relay.',
      enabled: true
    },
    temp: {
      pin: TEMP,
      name: 'ambient temp sensor',
      description: 'ambient air temp sensor. Operates on 1-wire interface. Defaults to pin 4.',
      enabled: true
    }
  },
  services: {
    temperatureBallast: {
      autoFanOn: 29,  // in ° Celsius,
      autoFanOff: 26,
      enabled: true,
      fansOffAtNight: true
    },
    openWeatherMap: {
      apiKey: process.env.WUKEY,  // WUKEY = weather underground api key
      units: 'metric',   // may be metric, imperial, or kelvin
      city: {
        'id': 5789425,
        'name': 'Cathcart',
        'state': 'WA',
        'country': 'US',
        'coord': {
          'lon': -122.099289,
          'lat': 47.847881
        }
      },
    }
  }
};

export default config;

export { ON, OFF, LIGHT, PUMP, INTAKE, EXHAUST, TEMP, WEATHER_SERVICE_CACHE_KEY };
