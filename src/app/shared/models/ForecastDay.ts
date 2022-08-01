import {IWeatherLocationInfo, IWeatherThumbnailInfo} from "./IWeatherLocationInfo";
import {DayForecastInformation} from "./DayForecastInformation";
import {AstroInformation} from "./AstroInformation";
import {HourForecastInformation} from "./HourForecastInformation";
import {WeatherCondition} from "./WeatherCondition";

export class ForecastDay implements IWeatherLocationInfo, IWeatherThumbnailInfo {
  date: Date;
  date_epoch: number;
  day: DayForecastInformation;
  astro: AstroInformation;
  hour: HourForecastInformation[];
  selected: boolean
  get condition(): WeatherCondition {
    return this.day.condition;
  }
  get humidity(): number {
    return this.day.avghumidity;
  }
  get temp_c(): number {
    return this.day.avgtemp_c;
  }
  get temp_f(): number {
    return this.day.avgtemp_f;
  }
  get temperatureHighF(): number {
    return this.day.maxtemp_f;
  }
  get temperatureLowF(): number {
    return this.day.mintemp_f;
  }
  get temperatureHighC(): number {
    return this.day.maxtemp_c;
  }
  get temperatureLowC(): number {
    return this.day.mintemp_c;
  }
  get wind_kph(): number {
    return this.day.maxwind_kph;
  }
  get wind_mph(): number {
    return this.day.maxwind_mph;
  }
  get precipitationIn(): number {
    return this.day.totalprecip_in;
  }
  get precipitationMm(): number {
    return this.day.totalprecip_mm;
  }


  constructor(date: Date,
              date_epoch: number,
              day: DayForecastInformation,
              astro: AstroInformation,
              hour: HourForecastInformation[],
              selected = false) {
    this.selected = selected;
    this.date = new Date(date);
    this.date_epoch = date_epoch;

    this.day = new DayForecastInformation(
      day.maxtemp_c,
      day.maxtemp_f,
      day.mintemp_c,
      day.mintemp_f,
      day.avgtemp_c,
      day.avgtemp_f,
      day.maxwind_mph,
      day.maxwind_kph,
      day.totalprecip_mm,
      day.totalprecip_in,
      day.avgvis_km,
      day.avgvis_miles,
      day.avghumidity,
      day.daily_will_it_rain,
      day.daily_chance_of_rain,
      day.daily_will_it_snow,
      day.daily_chance_of_snow,
      day.condition,
      day.uv
    );

    this.astro = astro;
    this.hour = hour.map(z => new HourForecastInformation(
      z.time_epoch,
      z.time,
      z.temp_c,
      z.temp_f,
      z.is_day,
      z.condition,
      z.wind_mph,
      z.wind_kph,
      z.wind_degree,
      z.wind_dir,
      z.pressure_mb,
      z.pressure_in,
      z.precip_mm,
      z.precip_in,
      z.humidity,
      z.cloud,
      z.feelslike_c,
      z.feelslike_f,
      z.windchill_c,
      z.windchill_f,
      z.heatindex_c,
      z.heatindex_f,
      z.dewpoint_c,
      z.dewpoint_f,
      z.will_it_rain,
      z.chance_of_rain,
      z.will_it_snow,
      z.chance_of_snow,
      z.vis_km,
      z.vis_miles,
      z.gust_mph,
      z.gust_kph,
      z.uv,
      z.air_quality,
      new Date(z.date)
    ));
  }
}
