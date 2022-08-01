import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IWeatherLocationInfo, IWeatherThumbnailInfo} from "../../../../models/IWeatherLocationInfo";
import {ILocationInformation} from "../../../../models/ILocationInformation";
import {BasicGraphNode} from "../../../../models/BasicGraphNode";
import {IHasWindInformation} from "../../../../models/IHasWindInformation";

@Component({
  selector: 'app-advanced-weather',
  templateUrl: './advanced-weather.component.html',
  styleUrls: ['./advanced-weather.component.css']
})
export class AdvancedWeatherComponent implements OnInit {
  @Input() currentWeatherInfo!: IWeatherLocationInfo;
  @Input() location!: ILocationInformation;
  @Input() forecasts!: IWeatherThumbnailInfo[];
  @Input() temperatures!: BasicGraphNode[];
  @Input() precipitationChances: BasicGraphNode[] = [];
  @Input() windDirections: IHasWindInformation[] = [];
  @Output() onThumbnailSelected = new EventEmitter<IWeatherThumbnailInfo>();

  constructor() { }

  ngOnInit(): void { }

  onThumbnailClick($event: IWeatherThumbnailInfo) {
    this.forecasts.forEach(forecast =>  forecast.selected = false);
    $event.selected = !$event.selected;
    this.onThumbnailSelected.emit($event);
  }
}
