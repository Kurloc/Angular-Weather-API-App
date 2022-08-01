// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {LongHandDayPipe} from "../../app/shared/modules/weather/pipes/long-hand-day.pipe";
import {LeadingZerosPipe} from "../../app/shared/modules/weather/pipes/leading-zeros.pipe";
import { WindDirectionCardComponent } from "../../app/shared/modules/weather/components/wind-direction-card/wind-direction-card.component";
import {
  WindDirectionThumbnailComponent
} from "../../app/shared/modules/weather/components/wind-direction-thumbnail/wind-direction-thumbnail.component";
import {windDirections} from "../data/WindDirection";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Cards/WindDirection',
  component: WindDirectionCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WindDirectionCardComponent,
        WindDirectionThumbnailComponent,
        ShortHandDayPipe,
        LongHandDayPipe,
        LeadingZerosPipe
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
    windDirections: {
      control: 'array'
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<WindDirectionCardComponent> = (args: WindDirectionCardComponent) => ({
  component: WindDirectionCardComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  windDirections
};
