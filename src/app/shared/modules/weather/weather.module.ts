import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherThumbnailComponent} from './components/weather-thumbnail/weather-thumbnail.component';
import {ShortHandDayPipe} from "./pipes/short-hand-day.pipe";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BasicWeatherCardComponent} from './components/basic-weather-card/basic-weather-card.component';
import {MatCardModule} from "@angular/material/card";
import {LongHandDayPipe} from './pipes/long-hand-day.pipe';
import {LeadingZerosPipe} from './pipes/leading-zeros.pipe';
import {AdvancedWeatherComponent} from './components/advanced-weather/advanced-weather.component';
import {TemperatureGraphComponent} from './components/temperature-graph/temperature-graph.component';
import {PrecipitationGraphComponent} from './components/precipitation-graph/precipitation-graph.component';
import {AreaChartModule, BarChartModule, LineChartModule} from "@swimlane/ngx-charts";
import {
  WindDirectionThumbnailComponent
} from './components/wind-direction-thumbnail/wind-direction-thumbnail.component';
import {MatIconModule} from "@angular/material/icon";
import {WindDirectionCardComponent} from './components/wind-direction-card/wind-direction-card.component';
import {
  WeatherLocationInformationComponent
} from './components/weather-location-information/weather-location-information.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {WeatherRoutingModule} from "./weather.routing";

@NgModule({
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
  exports: [
    BasicWeatherCardComponent,
    AdvancedWeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    LineChartModule,
    BarChartModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    AreaChartModule,
  ]
})
export class WeatherModule {
}
