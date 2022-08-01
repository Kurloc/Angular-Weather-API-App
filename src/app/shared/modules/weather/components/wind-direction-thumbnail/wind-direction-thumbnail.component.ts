import {Component, Input, OnInit} from '@angular/core';

export type SpeedUnits = 'mph' | 'kph';

export type WindDirection =
  'E'   |
  'ENE' |
  'NE'  |
  'NNE' |
  'N'   |
  'NNW' |
  'NW'  |
  'WNW' |
  'W'   |
  'WSW' |
  'SW'  |
  'SSW' |
  'S'   |
  'SSE' |
  'SE'  |
  'ESE';

@Component({
  selector: 'app-wind-direction-thumbnail',
  templateUrl: './wind-direction-thumbnail.component.html',
  styleUrls: ['./wind-direction-thumbnail.component.css']
})
export class WindDirectionThumbnailComponent implements OnInit {
  @Input() windSpeed!: number;
  @Input() windSpeedUnit!: SpeedUnits;
  @Input() windDirection!: WindDirection | string;
  @Input() date: Date = new Date();

  get WindArrowRotationFromDirection(): number {
    switch (this.windDirection) {
      case 'E':
        return 0;
      case 'ENE':
        return 337.5;
      case 'NE':
        return 315;
      case 'NNE':
        return 292.5;
      case 'N':
        return 270;
      case 'NNW':
        return 247.5;
      case 'NW':
        return 225;
      case 'WNW':
        return 202.5;
      case 'W':
        return 180;
      case 'WSW':
        return 155.5;
      case 'SW':
        return 135 ;
      case 'SSW':
        return 112.5;
      case 'S':
        return 90;
      case 'SSE':
        return 67.5;
      case 'SE':
        return 45;
      case 'ESE':
        return 22.5;
      default:
        return 0;
    }
  }

  get WindArrowSize(): string {
    let speed = Number(this.windSpeed);
    let normalizedSpeedMultiplier = 1;
    if (this.windSpeedUnit == 'kph')
      normalizedSpeedMultiplier = 1.60934;

    if (speed < 5 * normalizedSpeedMultiplier)
      return '12px';
    else if (speed < 11 * normalizedSpeedMultiplier)
      return '16px';
    else if (speed < 19 * normalizedSpeedMultiplier)
      return '20px';
    else if (speed < 27 * normalizedSpeedMultiplier)
      return '24px';
    else if (speed < 35 * normalizedSpeedMultiplier)
      return '28px';
    else
      return '32px';
  }

  constructor() { }

  ngOnInit(): void { }
}
