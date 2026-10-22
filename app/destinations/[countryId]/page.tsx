/* eslint-disable @next/next/no-img-element */
import { getGeography } from "@/app/services/geographyService";
import { notFound } from "next/navigation";
type DestinationProps = {
  params: Promise<{
    countryId: string;
    
  }>;
};

export default async function DestinationDetails({
  params,
}: DestinationProps) {
const countries = await getGeography()
const { countryId } = await params;
    const selectedCountry = countries.find((country) => country.uuid  === countryId)
  console.log(selectedCountry);
  if (!selectedCountry) {
  notFound();
}

  return (
    <>
            <ul className="countryFacts">

              <li className="countryFact">
               <img src={selectedCountry.flag.url_png} alt={`${selectedCountry.names.common}s flagga`} />
              </li>
            
                <li className="countryFact">
                <strong>Namn:</strong>
                {selectedCountry.names.common}
                </li>

                <li className="countryFact">
                <strong>Region:</strong>
                {selectedCountry.region}
                </li>

                <li className="countryFact">
                <strong>Subregion:</strong>
                {selectedCountry.subregion}
                </li>

                <li className="countryFact">
                <strong>Huvudstad:</strong>
                {selectedCountry.capitals?.[0]?.name}
                </li>

                <li className="countryFact">
                <strong>Befolkning:</strong>
                {selectedCountry.population.toLocaleString("sv-SE")}
                </li>

                <li className="countryFact">
                <strong>Språk:</strong>
                {selectedCountry.languages?.[0]?.name}
                </li>

                <li className="countryFact">
                <strong>Valuta:</strong>
                {selectedCountry.currencies?.[0]?.name}
                </li>

                <li className="countryFact">
                <strong>Namn på eget språk:</strong>
             {Object.values(selectedCountry.names.native)[0]?.common}
                </li>
            </ul>
</>
  );
}