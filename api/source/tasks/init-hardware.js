import config from '@/config';
import getWeather from '@/tasks/current-weather';

const { pump, exhaust, intake, light } = config.equipment;

const init = function(app) {
  const { systemFactory } = app;

  // initialize a new gpio board - first!
  systemFactory.findOrCreateGpio();

  // initialize the light
  systemFactory.findOrCreatePin(light.pin, 'main overhead light');
  systemFactory.findOrCreateRelay(pump.pin, 'pump');
  systemFactory.findOrCreateRelay(intake.pin, 'fan');
  systemFactory.findOrCreateRelay(exhaust.pin, 'fan');
  systemFactory.findOrCreateWeatherService();


  // debug('fetching weather from openWeatherMap', label);
  getWeather().then(resp => { console.log('))))))))) ', resp.headers.result, resp); });
};

export default init;