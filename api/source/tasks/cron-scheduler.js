import { debug } from '@/services/logging';
import cron from 'node-cron';

const PUMP = 18;
const LIGHT = 17;

const label = 'scheduled-task';

const cronScheduler = function(app) {

  const { gpioService } = app;

  console.log('initializing scheduled jobs…');

  // Run every hour at 0 minutes
  cron.schedule('0 * * * *', () => {
    debug('turning main feed pump on', label);
    gpioService.findOrCreateRelay(PUMP).on();
  });

  // run on minute ten of every hour
  cron.schedule('10 * * * *', () => {
    debug('turning main feed pump off', label);
    gpioService.findOrCreateRelay(PUMP).off();
  });

  // run at 6 AM every day
  cron.schedule('0 6 * * *', () => {
    debug('turning on main overhead lights', label);
    gpioService.findOrCreateRelay(LIGHT).on();
  });

  // run at 8 PM every day
  cron.schedule('0 20 * * *', () => {
    debug('turning off main overhead lights', label);
    gpioService.findOrCreateRelay(LIGHT).off();
  });

  // run every 2 minutes
  cron.schedule('*/2 * * * *', () => {
    debug('reading temp from bay', label);
    gpioService.findOrCreateTempSensor().read();
  });
};

export default cronScheduler;
