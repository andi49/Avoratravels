export interface Country {
  uuid: string;

names: {
  common: string;
  official: string;
  native: Record<
    string,
    {
      common: string;
      official: string;
    }
  >;
};
  codes: {
    alpha_2: string;
    alpha_3: string;
    ccn3: string;
  };

  coordinates: {
  lat: number;
  lng: number;
};

  capitals: {
    name: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  }[];

flag: {
  colors: Record<string, unknown>;
  description: string;
  emoji: string;
  html_entity: string;
  unicode: string;
  url_png: string;
  url_svg: string;
};

  region: string;
  subregion: string;
  population: number;

  government_type: string;
  landlocked: boolean;

  continents: string[];
  calling_codes: string[];
  tlds: string[];

  descriptions?: Record<string, unknown>;

  languages?: {
    name: string;
    code?: string;
  }[];

  currencies?: {
    name: string;
    code?: string;
    symbol?: string;
  }[];

  timezones?: string[];
}