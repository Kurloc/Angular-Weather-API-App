import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {AreaChartModule, BarChartModule, LineChartModule} from "@swimlane/ngx-charts";
import {
  PrecipitationGraphComponent
} from "../../app/shared/modules/weather/components/precipitation-graph/precipitation-graph.component";
import {precipitationChances} from "../data/PrecipitationChances";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {
  WeatherThumbnailComponent
} from "../../app/shared/modules/weather/components/weather-thumbnail/weather-thumbnail.component";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {
  BasicWeatherCardComponent
} from "../../app/shared/modules/weather/components/basic-weather-card/basic-weather-card.component";
import {LongHandDayPipe} from "../../app/shared/modules/weather/pipes/long-hand-day.pipe";
import {LeadingZerosPipe} from "../../app/shared/modules/weather/pipes/leading-zeros.pipe";
import {
  AdvancedWeatherComponent
} from "../../app/shared/modules/weather/components/advanced-weather/advanced-weather.component";
import {
  TemperatureGraphComponent
} from "../../app/shared/modules/weather/components/temperature-graph/temperature-graph.component";
import {
  WindDirectionThumbnailComponent
} from "../../app/shared/modules/weather/components/wind-direction-thumbnail/wind-direction-thumbnail.component";
import {
  WindDirectionCardComponent
} from "../../app/shared/modules/weather/components/wind-direction-card/wind-direction-card.component";
import {
  WeatherLocationInformationComponent
} from "../../app/shared/modules/weather/components/weather-location-information/weather-location-information.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Graphs/Precipitation',
  component: PrecipitationGraphComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WeatherThumbnailComponent,
        ShortHandDayPipe,
        BasicWeatherCardComponent,
        LongHandDayPipe,
        LeadingZerosPipe,
        AdvancedWeatherComponent,
        TemperatureGraphComponent,
        PrecipitationGraphComponent,
        WindDirectionThumbnailComponent,
        WindDirectionCardComponent,
        WeatherLocationInformationComponent
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        LineChartModule,
        BarChartModule,
        MatIconModule,
        MatTabsModule,
        MatListModule,
        AreaChartModule,
      ],
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    precipitationChances: {
      control: 'array'
    }
  },
} as Meta<PrecipitationGraphComponent>;

const Template: Story<PrecipitationGraphComponent> = (args: PrecipitationGraphComponent) => ({
  component: PrecipitationGraphComponent,
  props: args,
});

export const PrecipitationGraphTemplate = Template.bind({});
PrecipitationGraphTemplate.args = {
  precipitationChances
}
