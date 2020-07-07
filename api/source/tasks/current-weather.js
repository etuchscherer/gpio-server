const axios = require('axios');
import config from '@/config';

const { apiKey, city, units } = config.services.openWeatherMap;

export default async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=${units}`;
  const { data } = await axios.get(url);
  return data;
}
