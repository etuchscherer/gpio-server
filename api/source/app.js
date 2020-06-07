import express from 'express';
import router from '@/router';
import gpioService from '@/services/gpio';
import cronScheduler from '@/middleware/cron-scheduler';
import cors from 'cors';
import logger from '@/middleware/logger';

const app = express();
const port = 3000;

console.log('initializing gpio service…');
app.gpioService = gpioService;
cronScheduler(app);
console.log('done!');

app.use(logger);
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Gpio server application listening on http://localhost:${port}`));
