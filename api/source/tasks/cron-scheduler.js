import config from '@/config';
import { debug } from '@/services/logging';
import cron from 'node-cron';

const { pump, light } = config.equipment;

const label = 'scheduled-task';

const cronScheduler = function(app) {

  const { systemFactory } = app;

  console.log('initializing scheduled jobs…');

  // Run every hour at 0 minutes
  cron.schedule('0 * * * *', () => {
    debug('turning main feed pump on', label);
    systemFactory.findOrCreateRelay(pump.pin).energize();
  });

  // run on minute ten of every hour
  cron.schedule('10 * * * *', () => {
    debug('turning main feed pump off', label);
    systemFactory.findOrCreateRelay(pump.pin).deEnergize();
  });

  // run at 6 AM every day
  cron.schedule('0 6 * * *', () => {
    debug('turning on main overhead lights', label);
    systemFactory.findOrCreatePin(light.pin).on();
  });

  // run at 8 PM every day
  cron.schedule('0 20 * * *', () => {
    debug('turning off main overhead lights', label);
    systemFactory.findOrCreatePin(light.pin).off();
  });

  // run every minute
  cron.schedule('* * * * *', () => {
    debug('updating weather', label);
    systemFactory.findOrCreateWeatherService().update();
  });

  // run every 10 seconds
  cron.schedule('*/10 * * * * *', () => {
    debug('reading temp from bay', label);
    systemFactory.findOrCreateTempSensor().read();
  });
};

export default cronScheduler;
