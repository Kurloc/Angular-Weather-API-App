import {CurrentForecastInformation} from "../../app/shared/models/CurrentForecastInformation";

export const currentForecastInformation: CurrentForecastInformation = {
  "last_updated_epoch": 1659195000,
  "last_updated": new Date("2022-07-30 08:30"),
  "temp_c": 21.1,
  "temp_f": 70.0,
  "is_day": 1,
  "condition": {
    "text": "Sunny",
    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    "code": 1000
  },
  "wind_mph": 2.2,
  "wind_kph": 3.6,
  "wind_degree": 10,
  "wind_dir": "N",
  "pressure_mb": 1012.0,
  "pressure_in": 29.88,
  "precip_mm": 0.0,
  "precip_in": 0.0,
  "humidity": 76,
  "cloud": 0,
  "feelslike_c": 21.1,
  "feelslike_f": 70.0,
  "vis_km": 16.0,
  "vis_miles": 9.0,
  "uv": 5.0,
  "gust_mph": 4.3,
  "gust_kph": 6.8
} as CurrentForecastInformation;
