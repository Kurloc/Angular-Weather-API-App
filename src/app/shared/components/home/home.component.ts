import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AutoBehaviorSubject} from "../../utilities/AutoBehaviorSubject";
import {debounceTime, interval, Subject, take, takeUntil} from "rxjs";
import {
  Forecast
} from "../../models/Forecast";
import {LocationLookup, WeatherService} from "../../modules/weather/services/weather.service";
import {IAutoBehaviorSubject} from "../../utilities/IAutoBehaviorSubject";
import {IWeatherLocationInfo, IWeatherThumbnailInfo} from "../../models/IWeatherLocationInfo";
import {ILocationInformation} from "../../models/ILocationInformation";
import {BasicGraphNode} from "../../models/BasicGraphNode";
import {WeatherLocationSearchResult} from "../../models/WeatherLocationSearchResult";
import {CurrentForecastInformation} from "../../models/CurrentForecastInformation";
import {WeatherThumbnailInfo} from "../../models/WeatherThumbnailInfo";
import {ForecastDay} from "../../models/ForecastDay";
import {IHasWindInformation} from "../../models/IHasWindInformation";

export class AdvancedWeatherCard {
  currentWeatherInfo!: IWeatherLocationInfo;
  location!: ILocationInformation;
  forecasts!: IWeatherThumbnailInfo[];
  temperatures!: BasicGraphNode[];
  precipitationChances: BasicGraphNode[] = [];
  windDirections: IHasWindInformation[] = [];

  constructor(currentWeatherInfo: IWeatherLocationInfo,
              location: ILocationInformation,
              forecasts: IWeatherThumbnailInfo[],
              temperatures: BasicGraphNode[],
              precipitationChances: BasicGraphNode[],
              windDirections: IHasWindInformation[]) {
    this.currentWeatherInfo = currentWeatherInfo;
    this.location = location;
    this.forecasts = forecasts;
    this.temperatures = temperatures;
    this.precipitationChances = precipitationChances;
    this.windDirections = windDirections;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  private _destroyed$ = new Subject<boolean>();
  private _lastAdvancedForecast!: Forecast;
  private _currentWeatherForSelectedLocation!: CurrentForecastInformation;
  private _forecastForSelectedLocation!: ForecastDay;
  private _userWeatherLocationCardInfos: IAutoBehaviorSubject<Forecast[]>;

  public now = new AutoBehaviorSubject<Date>(new Date());
  public locationSearchString = new AutoBehaviorSubject<string>("");
  public locationFilterString = new AutoBehaviorSubject<string>("");
  public selectedSearchLocation = new AutoBehaviorSubject<WeatherLocationSearchResult | undefined>(undefined);

  public displayedUserWeatherLocationCardInfos: IAutoBehaviorSubject<Forecast[]>;
  public selectedBasicWeatherCard: Forecast | undefined = undefined;
  public selectedAdvancedWeatherCard!: AdvancedWeatherCard;

  public selectedAdvancedViewDate: Date = new Date();
  public selectedTab = new AutoBehaviorSubject<number>(0);

  public get locationItems(): IAutoBehaviorSubject<WeatherLocationSearchResult[]> {
    return this.weatherService.weatherLocations;
  }

  public get userWeatherLocations(): IAutoBehaviorSubject<WeatherLocationSearchResult[]> {
    return this.weatherService.userWeatherLocations;
  }

  constructor(private weatherService: WeatherService) {
    this._userWeatherLocationCardInfos = new AutoBehaviorSubject<Forecast[]>([]);
    this.displayedUserWeatherLocationCardInfos = new AutoBehaviorSubject<Forecast[]>([]);

    interval((Math.random() * 95) + 900)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => {
        this.now.value = new Date();
      });

    this.locationSearchString
      .subject
      .pipe(takeUntil(this._destroyed$), debounceTime(250))
      .subscribe(searchString => {
        const locationMatches = this.locationItems
          .value
          .filter(z => z.name.includes(searchString) || z.country.includes(searchString) || z.region.includes(searchString))

        if (searchString.length < 3 || locationMatches.length > 0)
          return;

        weatherService.getWeatherLocations(searchString);
        this.filterBasicWeatherCards(this.locationFilterString.value);
      })

    this.locationFilterString
      .subject
      .pipe(takeUntil(this._destroyed$), debounceTime(100))
      .subscribe(filterString => {
        this.filterBasicWeatherCards(filterString);
      })

    weatherService.forecasts
      .subject
      .subscribe(forecasts => {
        const alreadyAdded = [] as string[];
        const newForecasts = [] as Forecast[];
        const currentValues = this.userWeatherLocations.value;
        for (const forecast of forecasts) {
          const locationKey = forecast.location.name + '-' + forecast.location.region;
          const isAlreadyAdded = !alreadyAdded.includes(locationKey);
          const isValidToAdd = currentValues.find(z => z.name === forecast.location.name && z.region === forecast.location.region) !== undefined;

          if (isValidToAdd && isAlreadyAdded) {
            newForecasts.push(forecast);
            alreadyAdded.push();
          }
        }

        this._userWeatherLocationCardInfos.value = newForecasts;

        if (!this.selectedAdvancedWeatherCard) {
          if (!this.selectedBasicWeatherCard) {
            this.selectedBasicWeatherCard = this._userWeatherLocationCardInfos.value[0];
            if (this.selectedBasicWeatherCard)
              this.selectedBasicWeatherCard.selected = true;
          }
          this.initSelectedAdvancedWeatherCardInfo(this.selectedBasicWeatherCard);
        }

        this.filterBasicWeatherCards(this.locationFilterString.value);
      });
  }

  ngOnInit(): void {
    if (!this.userWeatherLocations.value || this.userWeatherLocations.value?.length === 0 || !this.userWeatherLocations.value?.length)
      return;

    const locationsToLoad = this.userWeatherLocations.value?.map(z => new LocationLookup(z.name, z.region));
    this.weatherService.getWeatherForecasts(locationsToLoad, 3);
  }

  ngAfterViewInit(): void {
    const userLocations = this.userWeatherLocations.value;
    if (!userLocations || userLocations.length === 0) {
      this.selectedTab.value = 1;
      return;
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
  }

  public createLocation($event: WeatherLocationSearchResult | undefined) {
    if (!$event)
      return;

    const added = this.weatherService.addUserWeatherLocation($event);
    if (added)
      this.weatherService.getWeatherForecast(new LocationLookup($event.name, $event.region), 3);
  }

  public onBasicWeatherCardClick($event: Forecast) {
    const values = this._userWeatherLocationCardInfos.value;
    values.forEach(z => {
      z.selected = z === $event;
    })

    this._userWeatherLocationCardInfos.value = values;
    this.selectedBasicWeatherCard = $event;

    this.initSelectedAdvancedWeatherCardInfo($event);
  }

  public removeLocation() {
    if (!this.selectedBasicWeatherCard)
      return;

    const locationLookup = new LocationLookup(this.selectedBasicWeatherCard.location.name, this.selectedBasicWeatherCard.location.region);
    this.weatherService.removeUserWeatherLocation(locationLookup);

    const validLocations = [] as Forecast[];
    const currentLocations = this._userWeatherLocationCardInfos.value;

    currentLocations.forEach(z => {
      if (z.location.name === locationLookup.name && z.location.region === locationLookup.region) {
        return;
      }

      validLocations.push(z)
    });

    this._userWeatherLocationCardInfos.value = validLocations;
    this.filterBasicWeatherCards(this.locationFilterString.value);
  }

  public clickedOutside() {
    const values = this._userWeatherLocationCardInfos.value;
    values.forEach(z => {
      z.selected = false;
    })

    this._userWeatherLocationCardInfos.value = values;
    this.selectedBasicWeatherCard = undefined;
  }

  public onAdvancedThumbnailSelected($event: IWeatherThumbnailInfo) {
    const date = new Date(new Date($event.date));
    const newForecastIndex = this._lastAdvancedForecast.forecast.forecastday.findIndex(z => {
      const d = new Date(z.date);
      const x = new Date(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDate(),
        0,
        0,
        0,
        0);
      const matches = x.getUTCFullYear() === date.getUTCFullYear() &&
                      x.getUTCMonth()    === date.getUTCMonth() &&
                      x.getUTCDate()     === date.getUTCDate()

      console.log('x', x, '\nvs', date, '\nmatches', matches);
      return matches;
    });
    const oldForecast = this._lastAdvancedForecast.forecast.forecastday[newForecastIndex];

    let newForecast = new ForecastDay(oldForecast.date, oldForecast.date_epoch, oldForecast.day, oldForecast.astro, oldForecast.hour, true);
    if (newForecastIndex === 0) {
      newForecast = this._forecastForSelectedLocation;
    }

    this._lastAdvancedForecast.date = new Date(this._lastAdvancedForecast.date);
    const advancedViewGraphsData = Forecast.getGraphData(newForecast);

    this.selectedAdvancedWeatherCard.currentWeatherInfo = newForecast;
    this.selectedAdvancedWeatherCard.temperatures = advancedViewGraphsData.temperatures;
    this.selectedAdvancedWeatherCard.precipitationChances = advancedViewGraphsData.precipitationChances;
    this.selectedAdvancedWeatherCard.windDirections = advancedViewGraphsData.windDirectionInfos;
  }

  private initSelectedAdvancedWeatherCardInfo(incomingForecast: Forecast) {
    if (!incomingForecast)
      return;

    this.weatherService
      .requestWeatherForecasts(new LocationLookup(incomingForecast.location.name, incomingForecast.location.region), 7)
      .pipe(take(1))
      .subscribe(forecast => {
        let forecastIndex = 0;
        const newForecast = new Forecast(forecast.location, forecast.current, forecast.forecast);
        newForecast.forecast.forecastday.forEach(z => {
          z.date = new Date(
            z.date.getUTCFullYear(),
            z.date.getUTCMonth(),
            z.date.getUTCDate(),
            0,
            0,
            0,
            0);
        })

        const advancedViewGraphsData = Forecast.getGraphData(newForecast.forecast.forecastday[0]);
        this._lastAdvancedForecast = forecast;
        this.selectedAdvancedWeatherCard = new AdvancedWeatherCard(
          newForecast.current,
          newForecast.location,
          newForecast.forecast.forecastday.map(z => {
            const x = new ForecastDay(new Date(z.date), z.date_epoch, z.day, z.astro, z.hour);
            const selected = forecastIndex === 0;

            forecastIndex++;
            return new WeatherThumbnailInfo(
              x.condition,
              new Date(x.date),
              x.day.maxtemp_c,
              x.day.maxtemp_f,
              x.day.mintemp_c,
              x.day.mintemp_f,
              selected);
          }),
          advancedViewGraphsData.temperatures,
          advancedViewGraphsData.precipitationChances,
          advancedViewGraphsData.windDirectionInfos);

        this._currentWeatherForSelectedLocation = newForecast.current;
        this._forecastForSelectedLocation = newForecast.forecast.forecastday[0];
      })
  }

  private filterBasicWeatherCards(filterString: string) {
    if (!filterString || filterString.length === 0)
      this.displayedUserWeatherLocationCardInfos.value = this._userWeatherLocationCardInfos.value;

    const basicWeatherCards = this._userWeatherLocationCardInfos.value;
    this.displayedUserWeatherLocationCardInfos.value = basicWeatherCards.filter(z => JSON.stringify(z).includes(filterString));
  }
}
