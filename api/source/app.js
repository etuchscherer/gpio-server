import express from 'express';
import router from '@/router';
import SystemFactory from '@/services/system-factory';
import TemperatureBallast from '@/services/temperature-ballast';
import initHardware from '@/tasks/init-hardware';
import cronScheduler from '@/tasks/cron-scheduler';
import cors from 'cors';
import { createLogger, format, transports } from 'winston';
import controllerDebug from '@/middleware/controller-debug';
import logAfterSend from '@/middleware/log-after-send';

const { combine, colorize } = format;

const logger = createLogger({
  level: 'debug',
  format: format.json(),
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

console.log('initializing system factory');
app.systemFactory = new SystemFactory();
initHardware(app);
console.log('done.');

console.log('initializing temp ballast service…');
app.tempService = new TemperatureBallast(app);
console.log('done.');

cronScheduler(app);

app.use(cors());
app.use('/', controllerDebug);
app.use(router);
app.use('/', logAfterSend);

app.listen(port, () => console.log(`Gpio server application listening on http://localhost:${port}`));
