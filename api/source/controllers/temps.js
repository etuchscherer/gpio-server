import moment from 'moment';

import { getTempC } from '@/tasks/temp-sensor';

const read = function(req, res) {
  const timestamp = moment().format();
  const degreesCelsius = getTempC();

  res.json({ degreesCelsius, timestamp });
};

export { read };