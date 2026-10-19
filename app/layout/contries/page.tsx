/* eslint-disable @next/next/no-img-element */

import { Suspense } from "react";
import { getGeography } from "@/app/services/geographyService";
import type { Country } from "@/app/types/country";
type CountryProps = {
  region?: string;
};
async function CountryList({region}: CountryProps) {
  const countries: Country[] = await getGeography();

const result = countries.filter((country) => {
  return !region || country.region === region;
});

  return (
    <div className="countryGrid">
      {result.slice(0, 10).map((country) => (
        <div key={country.uuid} className="countryCard">
          <div className="countryFlag">
            <img
              src={country.flag.url_png}
              alt={`Flagga av ${country.names.common}`}
            />
          </div>

          <div className="countryInfo">
            <h2>{country.names.common}</h2>
          </div>

          <div className="countryDetails">
            <p>
              <span>🌍 Region</span>
              <strong>{country.region}</strong>
            </p>

            <p>
              <span>📍 Capital</span>
              <strong>
                {country.capitals.map((capital) => capital.name).join(", ") || "N/A"}
                
              </strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default function CountriesPage({region}: CountryProps) {
  return (
    <main>
      <h1>Countries</h1>

      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryList region={region} />
      </Suspense>
    </main>
  );
}
