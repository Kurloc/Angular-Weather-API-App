import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {
  TemperatureGraphComponent
} from "../../app/shared/modules/weather/components/temperature-graph/temperature-graph.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {AreaChartModule, LineChartModule} from "@swimlane/ngx-charts";
import {temperatures} from "../data/Temperatures";

export default {
  title: 'Graphs/Temperature',
  component: TemperatureGraphComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TemperatureGraphComponent
      ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        LineChartModule,
        AreaChartModule
      ],
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    temperatures: {
      control: 'array'
    }
  },
} as Meta<TemperatureGraphComponent>;

const Template: Story<TemperatureGraphComponent> = (args: TemperatureGraphComponent) => ({
  component: TemperatureGraphComponent,
  props: args,
});


export const TemperatureGraphTemplate = Template.bind({});
TemperatureGraphTemplate.args = {
  temperatures
}
