import {IWeatherLocationInfo} from "./IWeatherLocationInfo";
import {WeatherLocation} from "./WeatherLocation";
import {CurrentForecastInformation} from "./CurrentForecastInformation";
import {WeatherCondition} from "./WeatherCondition";

export class CurrentForecast implements IWeatherLocationInfo {
  public readonly location: WeatherLocation;
  public readonly current: CurrentForecastInformation;

  get condition(): WeatherCondition {
    return this.current.condition;
  }

  set date(value: Date) {
    this.current.last_updated = new Date(value);
  }

  get date(): Date {
    return this.current.date;
  }

  get humidity(): number {
    return this.current.humidity;
  }

  get precipitationIn(): number {
    return this.current.precip_in;
  }

  get precipitationMm(): number {
    return this.current.precip_mm;
  }

  get temp_c(): number {
    return this.current.temp_c;
  }

  get temp_f(): number {
    return this.current.temp_f;
  }

  get wind_kph(): number {
    return this.current.wind_kph;
  }

  get wind_mph(): number {
    return this.current.wind_mph;
  }

  constructor(location: WeatherLocation, current: CurrentForecastInformation) {
    this.location = new WeatherLocation(
      location.name,
      location.region,
      location.country,
      location.lat,
      location.lon,
      location.tz_id,
      location.localtime_epoch,
      location.localtime
    );

    this.current = new CurrentForecastInformation(
      current.humidity,
      current.date,
      current.last_updated_epoch,
      current.last_updated,
      current.temp_c,
      current.temp_f,
      current.is_day,
      current.condition,
      current.wind_mph,
      current.wind_kph,
      current.wind_degree,
      current.wind_dir,
      current.pressure_mb,
      current.pressure_in,
      current.precip_mm,
      current.precip_in,
      current.cloud,
      current.feelslike_c,
      current.feelslike_f,
      current.vis_km,
      current.vis_miles,
      current.uv,
      current.gust_mph,
      current.gust_kph);

  }
}
