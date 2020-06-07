import cron from 'node-cron';

const cronScheduler = function(req, res, next) {

  console.log('initializing scheduled jobs…');
  // TODO:: do not hardcode
  req.app.gpioService.findOrCreate(18);

  // Run every hour at 0 minutes
  cron.schedule('0 * * * *', () => {
    console.log('turning main feed pump on');
    req.app.gpioService.findOrCreate(18).on();
  });

  // run on minute ten of every hour
  cron.schedule('10 * * * *', () => {
    console.log('turning main feed pump off');
    req.app.gpioService.findOrCreate(18).off();
  });

  // run at 6 AM every day
  cron.schedule('0 6 * * *', () => {
    console.log('turning on main overhead lights');
    req.app.gpioService.findOrCreate(17).on();
  });

  // run at 8 PM every day
  cron.schedule('0 20 * * *', () => {
    console.log('turning off main overhead lights');
    req.app.gpioService.findOrCreate(17).on();
  });

  console.log('done!');

  return next();
};

export default cronScheduler;
