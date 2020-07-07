import config from '@/config';
import getWeather from '@/tasks/current-weather';

const { pump, exhaust, intake, light } = config.equipment;

const init = function(app) {
  const { systemFactory } = app;

  systemFactory.findOrCreatePin(pump.pin, 'pump');
  systemFactory.findOrCreatePin(light.pin, 'light');
  systemFactory.findOrCreateRelay(intake.pin, 'fan');
  systemFactory.findOrCreateRelay(exhaust.pin, 'fan');
  systemFactory.findOrCreateWeatherService();


  // debug('fetching weather from openWeatherMap', label);
  getWeather().then(resp => { console.log('))))))))) ', resp.headers.result, resp); });
};

export default init;