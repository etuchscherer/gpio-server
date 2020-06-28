import { curly } from 'node-libcurl';
import config from '@/config';

const { apiKey, city } = config.openWeatherMap;

export default function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}`;
  const { statusCode, data } = await curly.get(url);

  return { statusCode, data: JSON.parse(data) };
}
