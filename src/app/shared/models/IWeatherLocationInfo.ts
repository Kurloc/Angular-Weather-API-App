import {WeatherCondition} from "./WeatherCondition";

export interface IWeatherLocationInfo {
  get date(): Date;
  get temp_f(): number;
  get temp_c(): number;
  get humidity(): number;
  get wind_mph(): number;
  get wind_kph(): number;
  get condition(): WeatherCondition;
  get precipitationIn(): number;
  get precipitationMm(): number;
}

export interface IWeatherThumbnailInfo {
  date: Date;
  temperatureHighF: number;
  temperatureLowF: number;
  temperatureHighC: number;
  temperatureLowC: number;
  condition: WeatherCondition;
  selected: boolean;
}

export interface ILocationInformation {

}
