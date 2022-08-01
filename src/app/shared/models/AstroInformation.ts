export class AstroInformation {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;

  constructor(sunrise: string, sunset: string, moonrise: string, moonset: string, moon_phase: string, moon_illumination: number) {
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.moonrise = moonrise;
    this.moonset = moonset;
    this.moon_phase = moon_phase;
    this.moon_illumination = moon_illumination;
  }
}
