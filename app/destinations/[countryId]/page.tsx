/* eslint-disable @next/next/no-img-element */
import { getGeography } from "@/app/services/geographyService";
import { notFound } from "next/navigation";
import { getCapitalCoordinates, getCurrentWeather } from "@/app/services/weatherService";
import { getWeatherDescription } from "@/app/services/weatherService";
import { getWikisum } from "@/app/services/wikipediaService";
import RetryButton from "@/app/components/RetryButton";
import Link from "next/link";

type DestinationProps = {
  params: Promise<{
    countryId: string;
  }>;
  searchParams: Promise<{
    search?: string;
    region?: string;
    page?: string;
  }>;
};

export default async function DestinationDetails({
  params,
  searchParams
}: DestinationProps) {
  
const countries = await getGeography()
const { countryId } = await params;

const {search, region, page} = await searchParams

const query = new URLSearchParams()

if (search) query.set("search", search);
if (region) query.set("region", region);
if (page) query.set("page", page);

const backUrl = query.toString()
  ? `/?${query.toString()}`
  : "/";


    const selectedCountry = countries.find((country) => country.uuid  === countryId)
    console.log(selectedCountry);



if (!selectedCountry) {
  notFound();
}

const wiki = await getWikisum(selectedCountry.names.common).catch(() => null)

if(wiki){
  console.log('Wikipedia:', wiki)
}

let coordinates = selectedCountry.coordinates;
const capital = selectedCountry.capitals?.[0]?.name;


if (capital) {
  const capitalCoordinates = await getCapitalCoordinates(capital).catch(() => null)

  
  if (capitalCoordinates) {
    coordinates = capitalCoordinates;
  }
}


const weather = await getCurrentWeather(
  coordinates.lat,
  coordinates.lng
).catch(() => null)

  return (
    <>
   <main className="destinationPage">
    <Link href={backUrl} className="backLink">
     ← Utforska fler länder
    </Link>
            <ul className="countryFacts">
                
              <li className="countryFact">
               <img src={selectedCountry.flag.url_png} alt={`${selectedCountry.names.common}s flagga`} />
              </li>

               {wiki?.thumbnail && (
              <li className="countryFact">
                <img
                  src={wiki.thumbnail.source}
                  alt={wiki.description || `Bild från Wikipedia om ${selectedCountry.names.common}`}
                />
              </li>
            )}
               

                 <li className="countryFact">
                  <strong>Temperatur:</strong>

                  {weather ? (
                    <>
                      <p>{weather.current.temperature_2m} °C</p>
                      <p>{getWeatherDescription(weather.current.weather_code)}</p>
                    </>
                  ) : (
                    <p role="alert">
                      Kunde inte hämta väderinformationen just nu.
                    </p>
                  )}
                
                </li>

                  <li className="countryFact">
                  <strong>Vindhastighet:</strong>
                  {weather
                    ? `${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`
                    : "Väderinformation saknas"}
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

                 {wiki?.content_urls?.desktop?.page && (
                <li className="countryFact">
                  <strong>Källa:</strong>
                  <a href={wiki.content_urls.desktop.page}>
                    Läs mer på Wikipedia
                  </a>
                </li>
              )}

              <li className="countryFact">
            <strong>Om landet:</strong>

            {wiki ? (
              <p>{wiki.extract}</p>
            ) : (
              <p role="alert">
                Kunde inte hämta information från Wikipedia just nu.
              </p>
            )}
          </li>
            </ul>
            <RetryButton />
            </main>
</>
  );
}