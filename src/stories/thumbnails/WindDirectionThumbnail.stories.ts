// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import { WindDirectionThumbnailComponent } from "../../app/shared/modules/weather/components/wind-direction-thumbnail/wind-direction-thumbnail.component";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Thumbnails/WindDirectionThumbnail',
  component: WindDirectionThumbnailComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WindDirectionThumbnailComponent,
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
    windSpeed: {
      control: 'number',
    },
    windSpeedUnit: {
      control: 'text'
    },
    windDirection: {
      control: 'text'
    },
    date: {
      condition: 'date'
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<WindDirectionThumbnailComponent> = (args: WindDirectionThumbnailComponent) => ({
  component: WindDirectionThumbnailComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  windSpeed: 10,
  windSpeedUnit: 'mph',
  windDirection: 'N',
  date: new Date(),
};
