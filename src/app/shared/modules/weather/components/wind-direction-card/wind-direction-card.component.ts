import {Component, Input, OnInit} from '@angular/core';
import {IHasWindInformation} from "../../../../models/IHasWindInformation";

@Component({
  selector: 'app-wind-direction-card',
  templateUrl: './wind-direction-card.component.html',
  styleUrls: ['./wind-direction-card.component.css']
})
export class WindDirectionCardComponent implements OnInit {
  @Input() windDirections: IHasWindInformation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
