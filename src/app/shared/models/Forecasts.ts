import {ForecastDay} from "./ForecastDay";

export class Forecasts {
  forecastday: ForecastDay[]

  constructor(forecast: ForecastDay[]) {
    this.forecastday = forecast.map(z => new ForecastDay(z.date, z.date_epoch, z.day, z.astro, z.hour));
  }
}
