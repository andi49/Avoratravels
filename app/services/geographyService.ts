import { Country } from "../types/country";
import type { GeographyResponse } from "../types/geographyResponse";
export async function getGeography() {
  const apiKey = process.env.REST_COUNTRIES_API_KEY;

  if (!apiKey) {
    throw new Error("Missing REST Countries API key");
  }

  try {
    const countries: Country[] = [];

    for (let offset = 0; ; offset += 100) {
      console.log("Hämtar länder, offset:", offset);
      
      const response = await fetch(
        `https://api.restcountries.com/countries/v5?limit=100&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
           next: { revalidate: 86400 
           },
          signal: AbortSignal.timeout(10000),
        }
      );
console.log("API svarade, offset:", offset, response.status);

      if (!response.ok) {
  if (response.status === 401) {
    throw new Error("Ogiltig API-nyckel. Kontrollera din API-nyckel.");
  }

  if (response.status === 403) {
    throw new Error("Åtkomst nekad. Kontrollera API-nyckeln och behörigheterna.");
  }

  if (response.status === 429) {
    throw new Error("För många API-anrop. Försök igen om en stund.");
  }

  throw new Error(`Kunde inte hämta länder. Felkod: ${response.status}`);
}
      const result: GeographyResponse = await response.json()

      if (!Array.isArray(result.data.objects)) {
        throw new Error("Invalid API response");
      }

      countries.push(...result.data.objects);

      if (!result.data.meta.more) {
        break;
      }
    }

    return countries;
  } catch (error) {
    console.error("Error fetching geography:", error);
    throw error;
  }
}
