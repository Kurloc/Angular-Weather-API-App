import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {BehaviorSubject, take} from 'rxjs';
import {DatePipe} from "@angular/common";
import {BasicGraphNode} from "../../../../models/BasicGraphNode";
import {UnitsOfMeasurement} from "../../../../models/UnitsOfMeasurement";

@Component({
  selector: 'app-temperature-graph',
  templateUrl: './temperature-graph.component.html',
  styleUrls: ['./temperature-graph.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureGraphComponent implements OnInit {
  private _temperatures!: BasicGraphNode[];

  public get tempUnits(): string {
    if (this.selectedUnits === 'imperial') {
      return '°F';
    }
    return '°C';
  }
  public get temperatures(): BasicGraphNode[] {
    return this._temperatures;
  }
  @Input() set temperatures(value: BasicGraphNode[]) {
    this._temperatures = value;

    // doing this to stop a weird issue where the X Axis tick labels aren't rendering due to a change issue
    const changePump = new BehaviorSubject<boolean>(false)
    changePump
      .pipe(take(10))
      .subscribe(() => {
        setTimeout(() => {
          this.view = [this.view[0]++, this.view[1]++];
          this.changeDetectorRefs.detectChanges();
          changePump.next(true);
        }, 100)
      });
  }

  @Input() selectedUnits: UnitsOfMeasurement = 'imperial';


  public view: [number, number] = [700, 225];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  public showYAxisLabel = false;
  public colorScheme: any = {
    domain: ['#C7B42C']
  };

  constructor(private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  dateFormatting(yAxisTickLabel: string) {
    const datepipe: DatePipe = new DatePipe('en-US')
    return datepipe.transform(yAxisTickLabel, 'h a')
  }

  valueFormatting(val: any) {
    return `${val} F`;
  }
}
