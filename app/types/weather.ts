export type Weather = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };

  current_units: {
    wind_speed_10m: string;
  };
};

export type GeocodingResponse = {
  results?: {
    name: string;
    latitude: number;
    longitude: number;
  }[];
};