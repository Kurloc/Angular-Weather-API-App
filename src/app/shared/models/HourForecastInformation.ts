import {IWeatherLocationInfo} from "./IWeatherLocationInfo";
import {WeatherCondition} from "./WeatherCondition";
import {AirQuality} from "./AirQuality";
import {IHasWindInformation} from "./IHasWindInformation";

export class HourForecastInformation implements IHasWindInformation, IWeatherLocationInfo {
  time_epoch: number = 1659135600;
  time: Date = new Date("2022-07-30 00:00");
  temp_c: number = 18.8;
  temp_f: number = 65.8;
  is_day: number = 0;
  condition: WeatherCondition = {
    "text": "Clear",
    "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
    "code": 1000
  } as WeatherCondition;
  wind_mph: number = 8.1;
  wind_kph: number = 13.0;
  wind_degree: number = 188;
  wind_dir: string = "S";
  pressure_mb: number = 1019.0;
  pressure_in: number = 30.09;
  precip_mm: number = 0.0;
  precip_in: number = 0.0;
  humidity: number = 57;
  cloud: number = 20;
  feelslike_c: number = 18.8;
  feelslike_f: number = 65.8;
  windchill_c: number = 18.8;
  windchill_f: number = 65.8;
  heatindex_c: number = 18.8;
  heatindex_f: number = 65.8;
  dewpoint_c: number = 10.1;
  dewpoint_f: number = 50.2;
  will_it_rain: number = 0;
  chance_of_rain: number = 0;
  will_it_snow: number = 0;
  chance_of_snow: number = 0;
  vis_km: number = 10.0;
  vis_miles: number = 6.0;
  gust_mph: number = 11.9;
  gust_kph: number = 19.1;
  uv: number = 1.0;
  air_quality: AirQuality = {
    co: 190.3000030517578,
    no2: 19.399999618530273,
    o3: 76.5,
    so2: 8.399999618530273,
    pm2_5: 11.199999809265137,
    pm10: 15.5,
    usEpaIndex: 1,
    gbDefraIndex: 1
  } as AirQuality;
  date: Date;

  get precipitationIn(): number {
    return this.precip_in;
  }

  get precipitationMm(): number {
    return this.precip_mm;
  }

  get chanceOfRain(): number {
    return this.chance_of_rain;
  }

  constructor(time_epoch: number, time: Date, temp_c: number, temp_f: number, is_day: number, condition: WeatherCondition, wind_mph: number, wind_kph: number, wind_degree: number, wind_dir: string, pressure_mb: number, pressure_in: number, precip_mm: number, precip_in: number, humidity: number, cloud: number, feelslike_c: number, feelslike_f: number, windchill_c: number, windchill_f: number, heatindex_c: number, heatindex_f: number, dewpoint_c: number, dewpoint_f: number, will_it_rain: number, chance_of_rain: number, will_it_snow: number, chance_of_snow: number, vis_km: number, vis_miles: number, gust_mph: number, gust_kph: number, uv: number, air_quality: AirQuality, date: Date) {
    this.time_epoch = time_epoch;
    this.time = new Date(time);
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
    this.windchill_c = windchill_c;
    this.windchill_f = windchill_f;
    this.heatindex_c = heatindex_c;
    this.heatindex_f = heatindex_f;
    this.dewpoint_c = dewpoint_c;
    this.dewpoint_f = dewpoint_f;
    this.will_it_rain = will_it_rain;
    this.chance_of_rain = chance_of_rain;
    this.will_it_snow = will_it_snow;
    this.chance_of_snow = chance_of_snow;
    this.vis_km = vis_km;
    this.vis_miles = vis_miles;
    this.gust_mph = gust_mph;
    this.gust_kph = gust_kph;
    this.uv = uv;
    this.air_quality = air_quality;
    this.date = new Date(date);
  }
}
