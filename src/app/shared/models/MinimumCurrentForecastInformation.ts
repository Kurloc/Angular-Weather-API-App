import {IWeatherLocationInfo} from "./IWeatherLocationInfo";
import {WeatherCondition} from "./WeatherCondition";

export class MinimumCurrentForecastInformation implements IWeatherLocationInfo {
  condition: WeatherCondition;
  date: Date;
  humidity: number;
  precipitationIn: number;
  precipitationMm: number;
  temp_c: number;
  temp_f: number;
  wind_kph: number;
  wind_mph: number;

  // chanceOfRain: number;

  constructor(condition: WeatherCondition,
              date: Date,
              humidity: number,
              precipitationIn: number,
              precipitationMm: number,
              temp_c: number,
              temp_f: number,
              wind_kph: number,
              wind_mph: number,
              // chanceOfRain: number
  ) {
    this.condition = condition;
    this.date = date;
    this.humidity = humidity;
    this.precipitationIn = precipitationIn;
    this.precipitationMm = precipitationMm;
    this.temp_c = temp_c;
    this.temp_f = temp_f;
    this.wind_kph = wind_kph;
    this.wind_mph = wind_mph;
    // this.chanceOfRain = chanceOfRain;
  }
}
