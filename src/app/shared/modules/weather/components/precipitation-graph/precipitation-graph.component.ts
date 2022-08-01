import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {DatePipe} from "@angular/common";
import {BasicGraphNode} from "../../../../models/BasicGraphNode";

@Component({
  selector: 'app-precipitation-graph',
  templateUrl: './precipitation-graph.component.html',
  styleUrls: ['./precipitation-graph.component.css']
})
export class PrecipitationGraphComponent implements OnInit {
  private _precipitationChances: BasicGraphNode[] = [];
  get precipitationChances(): BasicGraphNode[] {
    return this._precipitationChances;
  }
  @Input() set precipitationChances(value: BasicGraphNode[]) {
    this._precipitationChances = value;
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


  view: [number, number] = [700, 190];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  colorScheme: any = {
    domain: ['#65ace6']
  };

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  dateFormatting(yAxisTickLabel: string | Date) {
    const datepipe: DatePipe = new DatePipe('en-US')
    return datepipe.transform(yAxisTickLabel, 'h a')
  }

  valueFormatting(val: any) {
    return Number(val) * 100 + '%';
  }
}
