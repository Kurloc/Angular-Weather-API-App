import {Node} from "./Node";

export class BasicGraphNode {
  name: string;
  series: Node[];

  constructor(name: string, series: Node[]) {
    this.name = name;
    this.series = series;
  }
}

