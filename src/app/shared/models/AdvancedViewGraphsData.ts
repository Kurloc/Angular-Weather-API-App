import {BasicGraphNode} from "./BasicGraphNode";
import {IHasWindInformation} from "./IHasWindInformation";

export class AdvancedViewGraphsData {
  temperatures: BasicGraphNode[];
  precipitationChances: BasicGraphNode[];
  windDirectionInfos: IHasWindInformation[];

  constructor(temperatures: BasicGraphNode[], precipitationChances: BasicGraphNode[], windDirectionInfos: IHasWindInformation[]) {
    this.temperatures = temperatures;
    this.precipitationChances = precipitationChances;
    this.windDirectionInfos = windDirectionInfos;
  }
}
