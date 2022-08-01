import {WeatherCondition} from "./WeatherCondition";

export class DayForecastInformation {
  maxtemp_c: number = 39.9;
  maxtemp_f: number = 103.8;
  mintemp_c: number = 17.5;
  mintemp_f: number = 63.5;
  avgtemp_c: number = 27.6;
  avgtemp_f: number = 81.7;
  maxwind_mph: number = 10.3;
  maxwind_kph: number = 16.6;
  totalprecip_mm: number = 0.0;
  totalprecip_in: number = 0.0;
  avgvis_km: number = 10.0;
  avgvis_miles: number = 6.0;
  avghumidity: number = 51.0;
  daily_will_it_rain: number = 0;
  daily_chance_of_rain: number = 0;
  daily_will_it_snow: number = 0;
  daily_chance_of_snow: number = 0;
  condition: WeatherCondition;
  uv: number = 7.0;

  constructor(
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
    avgtemp_c: number,
    avgtemp_f: number,
    maxwind_mph: number,
    maxwind_kph: number,
    totalprecip_mm: number,
    totalprecip_in: number,
    avgvis_km: number,
    avgvis_miles: number,
    avghumidity: number,
    daily_will_it_rain: number,
    daily_chance_of_rain: number,
    daily_will_it_snow: number,
    daily_chance_of_snow: number,
    condition: WeatherCondition,
    uv: number) {
    this.maxtemp_c = maxtemp_c;
    this.maxtemp_f = maxtemp_f;
    this.mintemp_c = mintemp_c;
    this.mintemp_f = mintemp_f;
    this.avgtemp_c = avgtemp_c;
    this.avgtemp_f = avgtemp_f;
    this.maxwind_mph = maxwind_mph;
    this.maxwind_kph = maxwind_kph;
    this.totalprecip_mm = totalprecip_mm;
    this.totalprecip_in = totalprecip_in;
    this.avgvis_km = avgvis_km;
    this.avgvis_miles = avgvis_miles;
    this.avghumidity = avghumidity;
    this.daily_will_it_rain = daily_will_it_rain;
    this.daily_chance_of_rain = daily_chance_of_rain;
    this.daily_will_it_snow = daily_will_it_snow;
    this.daily_chance_of_snow = daily_chance_of_snow;
    this.condition = condition;
    this.uv = uv;
  }
}
