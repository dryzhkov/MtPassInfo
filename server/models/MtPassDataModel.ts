export interface Condition {
  DateUpdated: string;
  ElevationInFeet: number;
  Latitude: number;
  Longitude: number;
  MountainPassId: number;
  MountainPassName: string;
  RestrictionOne: TravelRestriction;
  RestrictionTwo: TravelRestriction;
  RoadCondition: string;
  TemperatureInFahrenheit: number
  TravelAdvisoryActive: boolean;
  WeatherCondition: string;
}

export interface TravelRestriction {
  RestrictionText: string;
  TravelDirection: string;
}

