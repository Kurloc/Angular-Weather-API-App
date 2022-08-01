// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ShortHandDayPipe} from "../../app/shared/modules/weather/pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {LongHandDayPipe} from "../../app/shared/modules/weather/pipes/long-hand-day.pipe";
import {LeadingZerosPipe} from "../../app/shared/modules/weather/pipes/leading-zeros.pipe";
import {
  AdvancedWeatherComponent
} from "../../app/shared/modules/weather/components/advanced-weather/advanced-weather.component";
import {weatherLocation} from "../data/WeatherLocation";
import {forecasts} from "../data/Forecasts";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BarChartModule, LineChartModule} from "@swimlane/ngx-charts";
import {MatIconModule} from "@angular/material/icon";
import {
  WeatherThumbnailComponent
} from "../../app/shared/modules/weather/components/weather-thumbnail/weather-thumbnail.component";
import {
  BasicWeatherCardComponent
} from "../../app/shared/modules/weather/components/basic-weather-card/basic-weather-card.component";
import {
  TemperatureGraphComponent
} from "../../app/shared/modules/weather/components/temperature-graph/temperature-graph.component";
import {
  PrecipitationGraphComponent
} from "../../app/shared/modules/weather/components/precipitation-graph/precipitation-graph.component";
import {
  WindDirectionThumbnailComponent
} from "../../app/shared/modules/weather/components/wind-direction-thumbnail/wind-direction-thumbnail.component";
import {
  WindDirectionCardComponent
} from "../../app/shared/modules/weather/components/wind-direction-card/wind-direction-card.component";
import {
  WeatherLocationInformationComponent
} from "../../app/shared/modules/weather/components/weather-location-information/weather-location-information.component";
import {temperatures} from "../data/Temperatures";
import {precipitationChances} from "../data/PrecipitationChances";
import {windDirections} from "../data/WindDirection";
import {IWeatherLocationInfo, IWeatherThumbnailInfo} from 'src/app/shared/models/IWeatherLocationInfo';
import {convertTemp} from "../../app/shared/utilities/ConvertTemp";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Cards/AdvancedWeatherCard',
  component: AdvancedWeatherComponent,
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
      ],
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    location: {
      control: 'array'
    },
    currentWeatherInfo: {
      control: 'object'
    }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AdvancedWeatherComponent> = (args: AdvancedWeatherComponent) => ({
  component: AdvancedWeatherComponent,
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  location: weatherLocation,
  // @ts-ignore
  currentWeatherInfo: (forecasts[0] as IWeatherLocationInfo),
  forecasts: [
    {
      date: new Date('2020-01-05T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-06T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-07T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-01T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-02T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-03T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo,
    {
      date: new Date('2020-01-04T00:00:00.000Z'),
      temperatureHighF: 90,
      temperatureLowF: 50,
      temperatureHighC: convertTemp(90, 'f'),
      temperatureLowC: convertTemp(50, 'f'),
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000
      }
    } as IWeatherThumbnailInfo
  ],
  temperatures,
  precipitationChances,
  windDirections
};
