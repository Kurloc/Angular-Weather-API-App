import {Component, Input, OnInit} from '@angular/core';
import {IWeatherThumbnailInfo} from "../../../../models/IWeatherLocationInfo";

@Component({
  selector: 'app-weather-thumbnail',
  templateUrl: './weather-thumbnail.component.html',
  styleUrls: ['./weather-thumbnail.component.css']
})
export class WeatherThumbnailComponent implements OnInit {
  @Input() forecast!: IWeatherThumbnailInfo;
  get date(): Date {
    return new Date(this.forecast.date);
  }

  get temperatureHigh(): number {
    return this.forecast.temperatureHighF;
  }
  get temperatureLow(): number {
    return this.forecast.temperatureLowF;
  }

  constructor() { }

  ngOnInit(): void { }

}
