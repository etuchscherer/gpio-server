import sensor from 'ds18b20-raspi';

const { readSimpleC, readSimpleF } = sensor;

const getTempC = function() {
  return readSimpleC(1);
};

const getTempF = function() {
  return readSimpleF(1);
};

export { getTempC, getTempF };