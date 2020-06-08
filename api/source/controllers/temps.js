import moment from 'moment';

import { getTempC, getTempF } from '@/tasks/temp-sensor';

const read = function(req, res) {
  const timestamp = moment().format();
  const degreesCelsius = getTempC();
  const degreesFahrenheit = getTempF();

  res.json({ degreesCelsius, degreesFahrenheit, timestamp });
};

export { read };