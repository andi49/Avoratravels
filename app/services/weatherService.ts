import type { Weather, GeocodingResponse } from "../types/weather";
export async function getCapitalCoordinates(capital:string) {
   const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(capital)}&count=10&language=en&format=json`)

   if(!response.ok) {throw new Error('Kunde inte hämta väderinformation')}

   const data: GeocodingResponse = await response.json()
 
   const cities = data.results || [];

   const city = cities.find((result: {name: string}) => {
      const cityName = result.name.toLocaleLowerCase()
      const capitalName = capital.toLocaleLowerCase()

      return cityName === capitalName
   })

   if(!city) {return null}
   
   return {
  lat: city.latitude,
  lng: city.longitude,
};
}

export async function getCurrentWeather(lat:number, lng:number) {
   const response = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,weather_code`
);
  if(!response.ok) {throw new Error('Kinde inte hämta Lat eller lang')}
  const data: Weather = await response.json()
  return data
}

export function getWeatherDescription(code:number) {
   if (code === 0) {
    return "Klart väder ☀️";
  }

  if (code === 1) {
    return "Mestadels klart 🌤️";
  }

  if (code === 2) {
    return "Delvis molnigt ⛅";
  }

  if (code === 3) {
    return "Mulet ☁️";
  }

  return "Okänt väder";
}