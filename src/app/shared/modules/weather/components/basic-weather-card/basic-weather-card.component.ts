import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Forecast
} from "../../../../models/Forecast";
import {WeatherLocation} from "../../../../models/WeatherLocation";
import {CurrentForecastInformation} from "../../../../models/CurrentForecastInformation";
import {Forecasts} from "../../../../models/Forecasts";

export function getDateObj(string: Date | string): Date {
  return new Date(string);
}

@Component({
  selector: 'app-basic-weather-card',
  templateUrl: './basic-weather-card.component.html',
  styleUrls: ['./basic-weather-card.component.css']
})
export class BasicWeatherCardComponent implements OnInit {
  @Input() forecast!: Forecast;
  public get currentForecast(): CurrentForecastInformation { return this.forecast.current; }
  public get forecasts(): Forecasts { return this.forecast.forecast; }
  public get location(): WeatherLocation { return this.forecast.location; }
  public get selected(): boolean { return this.forecast.selected; }

  @Output() onClick = new EventEmitter<Forecast>();

  constructor() { }

  ngOnInit(): void { }

  getDateObj(date: Date | string): Date {
    return getDateObj(date);
  }

  onClickCard() {
    this.onClick.emit(this.forecast);
  }
}
