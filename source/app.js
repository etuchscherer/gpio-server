import express from 'express';
import router from '@/router';
import gpioService from '@/lib/services/gpio';
import { debug } from '@/lib/services/gpio';

const app = express();
const port = 3000;

console.log('initializing gpio service…');
app.gpioService = gpioService;
console.log('done!');

app.use('*', debug);
app.use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
