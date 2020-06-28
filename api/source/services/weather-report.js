import getWeather from '@/tasks/current-weather';

export default class WeatherReport {
  constructor() {
    this.update();
  }

  async update() {
    const weatherData = await getWeather();
    const { main, wind, clouds, weather } = weatherData;

    this.main = main;
    this.wind = wind;
    this.clouds = clouds;
    this.weather = weather[0];

    console.log('this is the weather ', this);
  }
}