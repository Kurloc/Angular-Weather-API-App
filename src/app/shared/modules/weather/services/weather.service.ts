import { Injectable } from '@angular/core';
import {Forecast} from "../../../models/Forecast";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {AutoBehaviorSubject} from "../../../utilities/AutoBehaviorSubject";
import {LocalStorageAutoBehaviorSubject} from "../../../utilities/LocalStorageAutoBehaviorSubject";
import {IAutoBehaviorSubject} from "../../../utilities/IAutoBehaviorSubject";
import {forkJoin, Observable} from "rxjs";
import {WeatherLocationSearchResult} from "../../../models/WeatherLocationSearchResult";
import {CurrentForecast} from "../../../models/CurrentForecast";
import {LoadingService} from "../../../services/loading.service";

export class LocationLookup {
  public name: string;
  public region: string;

  constructor(name: string, region: string) {
    this.name = name;
    this.region = region;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  forecasts = new AutoBehaviorSubject<Forecast[]>([]);
  userWeatherLocations: IAutoBehaviorSubject<WeatherLocationSearchResult[]>;
  weatherLocations: IAutoBehaviorSubject<WeatherLocationSearchResult[]>;

  constructor(private httpClient: HttpClient, private loadingService: LoadingService) {
    this.userWeatherLocations = new LocalStorageAutoBehaviorSubject<WeatherLocationSearchResult[]>(
      'user-weather-locations',
      [])

    this.weatherLocations = new AutoBehaviorSubject<WeatherLocationSearchResult[]>([])
  }


  public requestCurrentWeatherForecast(locationLookup: LocationLookup): Observable<CurrentForecast> {
    const key = environment.weatherApiKey;
    const getAqi: "yes" | "no" = "no";
    const queryParams = `?key=${key}&q=${locationLookup.name}, ${locationLookup.region}&aqi=${getAqi}`;
    return this.httpClient.get<Forecast>(`https://api.weatherapi.com/v1/current.json${queryParams}`);
  }

  public requestWeatherForecasts(locationLookup: LocationLookup, numOfDays = 3): Observable<Forecast> {
    const key = environment.weatherApiKey;
    const getAlerts: "yes" | "no" = "no";
    const getAqi: "yes" | "no" = "no";
    const queryParams = `?key=${key}&q=${locationLookup.name}, ${locationLookup.region}&days=${numOfDays}&aqi=${getAqi}&alerts=${getAlerts}`;
    return this.httpClient.get<Forecast>(`https://api.weatherapi.com/v1/forecast.json${queryParams}`);
  }

  public getWeatherForecast(locationLookup: LocationLookup, numOfDays = 3): void {
    this.loadingService.loadingProgressBar.value = true;
    this.requestWeatherForecasts(locationLookup, numOfDays)
      .subscribe(forecast => {
        const forecastValues = this.forecasts.value;
        const forecastIndex = forecastValues.findIndex(z => z.location.name === forecast.location.name && z.location.region === z.location.region);
        const newForecast = new Forecast(
          forecast.location,
          forecast.current,
          forecast.forecast);

        if (forecastIndex > -1) {
          forecastValues[forecastIndex] = newForecast;
        }
        else {
          forecastValues.push(newForecast);
        }

        this.forecasts.value = forecastValues;
        this.loadingService.loadingProgressBar.value = false;
      });
  }

  public getWeatherForecasts(locationLookups: LocationLookup[], numOfDays = 3): void {
    this.loadingService.loadingProgressBar.value = true;
    const requests: Observable<Forecast>[] = [];
    for (const locationLookup of locationLookups) {
      if (!locationLookup || !locationLookup.name || !locationLookup.region)
        continue;

      requests.push(this.requestWeatherForecasts(locationLookup, numOfDays));
    }

    forkJoin(requests)
    .subscribe(forecasts => {
      const newForecasts = forecasts.map(forecast => {
        return new Forecast(
          forecast.location,
          forecast.current,
          forecast.forecast);
      })

      this.forecasts.value = [...newForecasts];
      this.loadingService.loadingProgressBar.value = false;
    });
  }

  public getWeatherLocations(searchString: string): void {
    this.loadingService.loadingProgressBar.value = true;
    const key = environment.weatherApiKey;
    const queryParams = `?key=${key}&q=${searchString}`;
    this.httpClient
      .get<WeatherLocationSearchResult[]>(`https://api.weatherapi.com/v1/search.json${queryParams}`)
      .subscribe(locations => {
        this.weatherLocations.value = locations;
        this.loadingService.loadingProgressBar.value = false;
      });
  }

  public addUserWeatherLocation(location: WeatherLocationSearchResult): boolean {
    let lastValue = this.userWeatherLocations.value;
    if (!lastValue.length || lastValue.length == 0) {
      lastValue = []
    }
    if (lastValue.findIndex(z => z.id === location.id) > -1) {
      return false;
    }

    lastValue.push(location);
    this.userWeatherLocations.value = lastValue;
    return true;
  }

  removeUserWeatherLocation(locationLookup: LocationLookup) {
    const validItems = [] as WeatherLocationSearchResult[];
    this.userWeatherLocations
      .value
      .forEach(z => {
        if (z.name === locationLookup.name && z.region === locationLookup.region) {
          return;
        }
        validItems.push(z);
      });

    this.userWeatherLocations.value = validItems;
  }
}
