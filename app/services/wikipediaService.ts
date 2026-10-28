import type { Wikipedia } from "../types/wikipedia"
export async function getWikisum(countryName:string) {
    const response = await fetch(`https://sv.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`)

   if(response.status === 404) {
        return null
   }

   if(!response.ok){
      throw new Error('Kunde inte hämta info från WIKIPEDIA')
   }

    const data: Wikipedia = await response.json()

    return data

}