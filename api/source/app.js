import express from 'express';
import router from '@/router';
import gpioService from '@/services/gpio';
import initHardware from '@/tasks/init-hardware';
import cronScheduler from '@/tasks/cron-scheduler';
import cors from 'cors';
import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, prettyPrint, colorize } = format;

const logger = createLogger({
  level: 'debug',
  format: combine(label({ label: 'Cache' }), timestamp(), prettyPrint()),
  transports: [
    new transports.Console({
      format: combine(colorize()),
    }),
  ],
});

const app = express();
const port = 3000;

console.log('initializing logger…');
app.logger = logger;
console.log('done.');

console.log('initializing gpio service…');
app.gpioService = gpioService;
initHardware(app);
console.log('done.');

cronScheduler(app);

app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Gpio server application listening on http://localhost:${port}`));
