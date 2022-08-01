import {Component, Input, OnInit} from '@angular/core';
import {IWeatherThumbnailInfo} from "../../../../models/IWeatherLocationInfo";
import {UnitsOfMeasurement} from "../../../../models/UnitsOfMeasurement";

@Component({
  selector: 'app-weather-thumbnail',
  templateUrl: './weather-thumbnail.component.html',
  styleUrls: ['./weather-thumbnail.component.css']
})
export class WeatherThumbnailComponent implements OnInit {
  @Input() forecast!: IWeatherThumbnailInfo;
  @Input() selectedUnits: UnitsOfMeasurement = 'imperial';

  get date(): Date {
    return new Date(this.forecast.date);
  }

  get temperatureHigh(): number {
    if (this.selectedUnits === 'imperial') {
      return this.forecast.temperatureHighF;
    } else {
      return this.forecast.temperatureHighC;
    }
  }
  get temperatureLow(): number {
    if (this.selectedUnits === 'imperial') {
      return this.forecast.temperatureLowF;
    } else {
      return this.forecast.temperatureLowC;
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
