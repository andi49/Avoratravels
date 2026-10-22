/* eslint-disable @next/next/no-img-element */
import { getGeography } from "@/app/services/geographyService";
import { notFound } from "next/navigation";
import { getCapitalCoordinates, getCurrentWeather } from "@/app/services/weatherService";
import { getWeatherDescription } from "@/app/services/weatherService";
import { getWikisum } from "@/app/services/wikipediaService";

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

const wiki = await getWikisum(selectedCountry.names.common)

if(wiki){
  console.log('Wikipedia:', wiki)
}

let coordinates = selectedCountry.coordinates;
const capital = selectedCountry.capitals?.[0]?.name;


if (capital) {
  const capitalCoordinates = await getCapitalCoordinates(capital);

  
  if (capitalCoordinates) {
    coordinates = capitalCoordinates;
  }
}


const weather = await getCurrentWeather(
  coordinates.lat,
  coordinates.lng
);

  return (
    <>
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
               <p>{wiki.extract}</p>
              </li>

                  <li className="countryFact">
                  <strong>Temperatur:</strong>
                 {weather? `${weather.current.temperature_2m} °C`: "Väderinformation saknas"}
                 <br />
                {weather? getWeatherDescription(weather.current.weather_code): "Väderinformation saknas"}
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

                 <li className="countryFact">
                <strong>Källa:</strong>
                  <a href={wiki.content_urls.desktop.page}>Läs mer på wikipedia</a>
                </li>

                 <li className="countryFact">
                <strong>Om landet</strong>
                      <p>{wiki.extract}</p>
                </li>
            </ul>
</>
  );
}