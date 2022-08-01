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

@Component({
  selector: 'app-temperature-graph',
  templateUrl: './temperature-graph.component.html',
  styleUrls: ['./temperature-graph.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureGraphComponent implements OnInit {
  private _temperatures!: BasicGraphNode[];
  get temperatures(): BasicGraphNode[] {
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

  view: [number, number] = [700, 225];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme: any = {
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
