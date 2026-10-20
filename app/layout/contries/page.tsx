import { Suspense } from "react";
import { getGeography } from "@/app/services/geographyService";
import type { Country } from "@/app/types/country";
import CountryCards from "@/app/components/CountryCards";

type CountryProps = {
  region?: string;
};

async function CountryList({ region }: CountryProps) {
  const countries: Country[] = await getGeography();

  const result = countries.filter((country) => {
    return !region || country.region === region;
  });

  return <CountryCards key={region ?? "all"} contries={result} />;
}

export default function CountriesPage({ region }: CountryProps) {
  return (
    <main>
      <h1>Countries</h1>

      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryList region={region} />
      </Suspense>
    </main>
  );
}