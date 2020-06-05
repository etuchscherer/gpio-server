import Pin from '@/objects/pin';
import cron from 'node-cron';

export default cronScheduler = function(req, res, next) {

  console.log('initializing main feed pump…');
  // TODO:: do not hardcode
  req.app.gpioService.set(18, new Pin(18));

  // Run every hour at 0 minutes
  cron.schedule('0 * * * *', () => {
    console.log('turning main feed pump on');
    req.app.gpioService.get(18).on();
  });

  // run on minute ten of every hour
  cron.schedule('10 * * * *', () => {
    console.log('turning main feed pump off');
    req.app.gpioService.get(18).off();
  });

  console.log('done!');

  return next();
};