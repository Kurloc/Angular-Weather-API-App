// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { WeatherThumbnailComponent } from "../../app/shared/modules/weather/components/weather-thumbnail/weather-thumbnail.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  BasicWeatherCardComponent
} from "../../app/shared/modules/weather/components/basic-weather-card/basic-weather-card.component";
import {MatCardModule} from "@angular/material/card";
import {LongHandDayPipe} from "../../app/shared/modules/weather/pipes/long-hand-day.pipe";
import {LeadingZerosPipe} from "../../app/shared/modules/weather/pipes/leading-zeros.pipe";
import {forecasts} from "../data/Forecasts";
import {weatherLocation} from "../data/WeatherLocation";
import {
  WeatherLocationInformationComponent
} from "../../app/shared/modules/weather/components/weather-location-information/weather-location-information.component";
import {currentForecastInformation} from "../data/CurrentForecastInformation";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'BasicWeatherCard',
  component: BasicWeatherCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WeatherThumbnailComponent,
        BasicWeatherCardComponent,
        ShortHandDayPipe,
        LongHandDayPipe,
        LeadingZerosPipe,
        WeatherLocationInformationComponent
      ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule
      ],
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    forecasts: {
      control: 'array'
    },
    location: {
      control: 'array'
    },
    selected: {
      control: 'boolean'
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BasicWeatherCardComponent> = (args: BasicWeatherCardComponent) => ({
  component: BasicWeatherCardComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  location: weatherLocation,
  forecasts: forecasts,
  currentForecast: currentForecastInformation,
  selected: false
};
