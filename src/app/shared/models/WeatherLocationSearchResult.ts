export class WeatherLocationSearchResult {
  id: number = 2634070;
  name: string = "Portland";
  region: string = "Oregon";
  country: string = "United States of America";
  lat: number = 45.52;
  lon: number = -122.68;
  url: string = "portland-oregon-united-states-of-america";

  constructor(id: number,
              name: string,
              region: string,
              country: string,
              lat: number,
              lon: number,
              url: string) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.url = url;
  }
}
