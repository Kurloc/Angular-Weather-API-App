import {IWeatherThumbnailInfo} from "./IWeatherLocationInfo";
import {WeatherCondition} from "./WeatherCondition";

export class WeatherThumbnailInfo implements IWeatherThumbnailInfo {
  condition: WeatherCondition;
  date: Date;
  temperatureHighC: number;
  temperatureHighF: number;
  temperatureLowC: number;
  temperatureLowF: number;
  selected: boolean;

  constructor(condition: WeatherCondition, date: Date, temperatureHighC: number, temperatureHighF: number, temperatureLowC: number, temperatureLowF: number, selected = false) {
    this.condition = condition;
    this.date = date;
    this.temperatureHighC = temperatureHighC;
    this.temperatureHighF = temperatureHighF;
    this.temperatureLowC = temperatureLowC;
    this.temperatureLowF = temperatureLowF;
    this.selected = selected;
  }

}
