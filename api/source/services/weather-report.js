import getWeather from '@/tasks/current-weather';

export default class WeatherReport {
  constructor() {
    this.update();
    this.report = {};
  }

  async update() {
    const weatherData = await getWeather();
    const { main, wind, clouds, weather } = weatherData;

    this.report.main = main;
    this.report.wind = wind;
    this.report.clouds = clouds;
    this.report.weather = weather[0];

    console.log('this is the weather ', this);
  }

  getReport() {
    return this.report;
  }
}