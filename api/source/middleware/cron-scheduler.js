import { debug } from '@/services/logging';
import cron from 'node-cron';

const label = 'scheduled-task';

const cronScheduler = function(app) {

  const { gpioService } = app;

  console.log('initializing scheduled jobs…');
  // TODO:: do not hardcode
  gpioService.findOrCreate(18);

  // Run every hour at 0 minutes
  cron.schedule('0 * * * *', () => {
    debug('turning main feed pump on', label);
    gpioService.findOrCreate(18).on();
  });

  // run on minute ten of every hour
  cron.schedule('10 * * * *', () => {
    debug('turning main feed pump off', label);
    gpioService.findOrCreate(18).off();
  });

  // run at 6 AM every day
  cron.schedule('0 6 * * *', () => {
    debug('turning on main overhead lights', label);
    gpioService.findOrCreate(17).on();
  });

  // run at 8 PM every day
  cron.schedule('0 20 * * *', () => {
    debug('turning off main overhead lights', label);
    gpioService.findOrCreate(17).on();
  });

  console.log('done!');
};

export default cronScheduler;
