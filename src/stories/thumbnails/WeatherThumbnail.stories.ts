// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { WeatherThumbnailComponent } from "../../app/shared/modules/weather/components/weather-thumbnail/weather-thumbnail.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import {convertTemp} from "../../app/shared/utilities/ConvertTemp";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Thumbnails/WeatherThumbnail',
  component: WeatherThumbnailComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WeatherThumbnailComponent,
        ShortHandDayPipe
      ],
      imports: [
        CommonModule,
        FlexLayoutModule
      ],
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    forecast: {
      control: 'object',
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<WeatherThumbnailComponent> = (args: WeatherThumbnailComponent) => ({
  component: WeatherThumbnailComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  forecast: {
    date: new Date(),
    temperatureHighF: 99,
    temperatureHighC: convertTemp(99, 'f'),
    temperatureLowF: 65,
    temperatureLowC: convertTemp(65, 'f'),
    condition: {
      text: "Clear",
      icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
      code: 1000
    },
    selected: false
  }
};
