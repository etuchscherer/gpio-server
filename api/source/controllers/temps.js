import moment from 'moment';

const read = function(req, res) {
  const { gpioService } = req.app;
  const { tempC, tempF, lastUpdated } = gpioService.findOrCreateTempSensor();

  res.json({
    tempC,
    tempF,
    lastReading: lastUpdated,
    lastUpdated: moment().format()
  });
};

export { read };