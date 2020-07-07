import moment from 'moment';

const read = function(req, res) {
  const { systemFactory } = req.app;
  const { tempC, tempF, lastUpdated } = systemFactory.findOrCreateTempSensor();

  res.json({
    tempC,
    tempF,
    lastReading: lastUpdated,
    lastUpdated: moment().format()
  });
};

export { read };