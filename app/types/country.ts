export interface Country {
  uuid: string;
  names: {
    common: string;
    official: string;
  };
  codes: {
    alpha_3: string;
  };
  capitals: {
    name: string;
  }[];
  flag: {
    url_png: string;
    url_svg: string;
    emoji: string;
  };
  region: string;
  population: number;
}
