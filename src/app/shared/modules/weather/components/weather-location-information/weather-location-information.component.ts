import {Component, Input, OnInit} from '@angular/core';
import {IWeatherLocationInfo} from "../../../../models/IWeatherLocationInfo";
import {ILocationInformation} from "../../../../models/ILocationInformation";

export function getDateObj(string: Date | string): Date {
  return new Date(string);
}

@Component({
  selector: 'app-weather-location-information',
  templateUrl: './weather-location-information.component.html',
  styleUrls: ['./weather-location-information.component.css']
})
export class WeatherLocationInformationComponent implements OnInit {
  private _localDate: Date = new Date();
  private _localDateT: Date = new Date();
  private _weatherInfo!: IWeatherLocationInfo;
  get weatherInfo(): IWeatherLocationInfo {
    return this._weatherInfo;
  }
  @Input() set weatherInfo(value: IWeatherLocationInfo) {
    this._localDate = new Date(value.date);
    this._localDateT = new Date(value.date);
    this._weatherInfo = value;
  }

  @Input() location!: ILocationInformation;

  get localDate(): Date {
    return this._localDate;
  }
  get localDateT(): Date {
    return this._localDateT;
  }

  constructor() { }

  ngOnInit(): void { }
}
