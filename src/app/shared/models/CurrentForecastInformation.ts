import {IWeatherLocationInfo} from "./IWeatherLocationInfo";
import {WeatherCondition} from "./WeatherCondition";

export class CurrentForecastInformation implements IWeatherLocationInfo {
  last_updated_epoch: number = 1659195000;
  last_updated: Date;
  temp_c: number = 21.1;
  temp_f: number = 70.0;
  is_day: number = 1;
  condition: WeatherCondition;
  wind_mph: number = 2.2;
  wind_kph: number = 3.6;
  wind_degree: number = 10;
  wind_dir: string = "N";
  pressure_mb: number = 1012.0;
  pressure_in: number = 29.88;
  precip_mm: number = 0.0;
  precip_in: number = 0.0;
  humidity: number = 76;
  cloud: number = 0;
  feelslike_c: number = 21.1;
  feelslike_f: number = 70.0;
  vis_km: number = 16.0;
  vis_miles: number = 9.0;
  uv: number = 5.0;
  gust_mph: number = 4.3;
  gust_kph: number = 6.8;

  get precipitationIn(): number {
    return this.precip_in;
  }

  get precipitationMm(): number {
    return this.precip_mm;
  }

  get date(): Date {
    return this.last_updated;
  }

  constructor(
    humidity: number,
    date: Date,
    last_updated_epoch: number,
    last_updated: Date,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: WeatherCondition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
    gust_mph: number,
    gust_kph: number) {
    this.last_updated_epoch = last_updated_epoch;
    this.last_updated = new Date(last_updated);
    this.temp_c = temp_c;
    this.temp_f = temp_f;
    this.is_day = is_day;
    this.condition = condition;
    this.wind_mph = wind_mph;
    this.wind_kph = wind_kph;
    this.wind_degree = wind_degree;
    this.wind_dir = wind_dir;
    this.pressure_mb = pressure_mb;
    this.pressure_in = pressure_in;
    this.precip_mm = precip_mm;
    this.precip_in = precip_in;
    this.humidity = humidity;
    this.cloud = cloud;
    this.feelslike_c = feelslike_c;
    this.feelslike_f = feelslike_f;
    this.vis_km = vis_km;
    this.vis_miles = vis_miles;
    this.uv = uv;
    this.gust_mph = gust_mph;
    this.gust_kph = gust_kph;
  }
}
