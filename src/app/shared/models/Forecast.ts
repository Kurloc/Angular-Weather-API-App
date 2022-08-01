import {CurrentForecast} from "./CurrentForecast";
import {Forecasts} from "./Forecasts";
import {WeatherLocation} from "./WeatherLocation";
import {CurrentForecastInformation} from "./CurrentForecastInformation";
import {ForecastDay} from "./ForecastDay";
import {AdvancedViewGraphsData} from "./AdvancedViewGraphsData";
import {IHasWindInformation} from "./IHasWindInformation";
import {Node} from "./Node";
import {BasicGraphNode} from "./BasicGraphNode";

export class Forecast extends CurrentForecast {
  public readonly forecast: Forecasts;
  public selected = false;

  constructor(location: WeatherLocation, current: CurrentForecastInformation, forecast: Forecasts, selected: boolean = false) {
    super(location, current);
    this.forecast = new Forecasts(forecast.forecastday);
    this.selected = selected;
  }

  public static getGraphData(forecastday: ForecastDay): AdvancedViewGraphsData  {
    let hourIndex = 0;
    let fakeRainChance = 0;

    const returnTemperatureSeries: Node[] = [];
    const returnPrecipitationSeries: Node[] = [];
    const windDirectionData: IHasWindInformation[] = [];

    for (const hour of forecastday!.hour) {
      if (hourIndex % 3 === 0) {
        hour.time = new Date(hour.time);
        returnTemperatureSeries.push(new Node(hour.temp_f, hour.time));
        const precipitationChance = hour.chance_of_rain === 0 || !hour.chance_of_rain ? hour.chance_of_snow : hour.chance_of_rain;
        returnPrecipitationSeries.push(new Node(precipitationChance, new Date(
          hour.time.getFullYear(),
          hour.time.getMonth(),
          hour.time.getDate(),
          hour.time.getHours(),
          hour.time.getMinutes(),
          hour.time.getSeconds(),
          hour.time.getMilliseconds()
        )));

        windDirectionData.push({
          wind_mph: hour.wind_mph,
          wind_kph: hour.wind_kph,
          wind_dir: hour.wind_dir,
          time: hour.time
        } as IHasWindInformation);
        fakeRainChance++;
      }

      hourIndex++;
    }

    return new AdvancedViewGraphsData(
      [new BasicGraphNode("", returnTemperatureSeries)],
      [new BasicGraphNode("", returnPrecipitationSeries)],
      windDirectionData);
  }
}
