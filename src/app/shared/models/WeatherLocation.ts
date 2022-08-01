export class WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: Date;

  constructor(name: string, region: string, country: string, lat: number, lon: number, tz_id: string, localtime_epoch: number, localtime: Date) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.tz_id = tz_id;
    this.localtime_epoch = localtime_epoch;
    this.localtime = localtime;
  }
}
