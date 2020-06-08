import { getTempC, getTempF } from '@/tasks/temp-sensor';

const read = function(req, res) {
  const degreesCelsius = getTempC();
  const degreesFahrenheit = getTempF();

  res.json({ degreesCelsius, degreesFahrenheit });
};

export { read };