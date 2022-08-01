import {Component, Input, OnInit} from '@angular/core';
import {IHasWindInformation} from "../../../../models/IHasWindInformation";
import {UnitsOfMeasurement} from "../../../../models/UnitsOfMeasurement";

@Component({
  selector: 'app-wind-direction-card',
  templateUrl: './wind-direction-card.component.html',
  styleUrls: ['./wind-direction-card.component.css']
})
export class WindDirectionCardComponent implements OnInit {
  @Input() selectedUnits: UnitsOfMeasurement = 'imperial';
  @Input() windDirections: IHasWindInformation[] = [];

  public get windSpeed(): number {
    if (this.selectedUnits === 'imperial') {
      return this.windDirections[0].wind_mph;
    }
    else {
      return this.windDirections[0].wind_kph;
    }
  }

  public get windSpeedUnits(): 'mph' | 'kph' {
    if (this.selectedUnits === 'imperial') {
      return 'mph';
    }
    else {
      return 'kph';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
