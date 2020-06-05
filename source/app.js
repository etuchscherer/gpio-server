import express from 'express';
import router from '@/router';
import gpioService from '@/lib/services/gpio';
import LED from '@/lib/objects/led';
import cron from 'node-cron';

const app = express();
const port = 3000;

console.log('initializing gpio service…');
app.gpioService = gpioService;
console.log('done!');

console.log('initializing main feed pump…');
// TODO:: do not hardcode
app.gpioService.set(18, new LED(18));

// Run every hour at 0 minutes
cron.schedule('0 * * * *', () => {
  console.log('turning main feed pump on');
  app.gpioService.get(18).on();
});

// run on minute ten of every hour
cron.schedule('10 * * * *', () => {
  console.log('turning main feed pump off');
  app.gpioService.get(18).off();
});

console.log('done!');

app.use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
