import type { Country } from "./country";

export type GeographyResponse = {
  data: {
    objects: Country[];
    meta: {
      more: boolean;
    };
  };
};