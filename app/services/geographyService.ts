import { Country } from "../types/country";

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
          signal: AbortSignal.timeout(10000),
        }
      );
console.log("API svarade, offset:", offset, response.status);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch geography: ${response.status}`
        );
      }

      const result = await response.json();

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
