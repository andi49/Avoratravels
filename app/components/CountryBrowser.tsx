'use client'
import { Country } from "../types/country"
import { useState, type ReactNode } from "react";
import Search from "./Search"
import CountryCards from "./CountryCards"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type CountryBrowserProps = {
    countries: Country[]
    region?: string
     children: ReactNode;
}

export default function CrountryBrowser({
    countries,
    region,
    children
}:CountryBrowserProps) {

    
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const searchFromUrl = searchParams.get('search') ?? ''
    const [search, setSearch] = useState(searchFromUrl)

    function handleSearchChange(value:string) {
        setSearch(value)

        const params = new URLSearchParams(searchParams.toString())

        if(value.trim()) {
            params.set('search', value)
           
        } else {
            params.delete('search')
        }
        params.delete('page')

        const query = params.toString()

         router.replace(query ? `${pathname}?${query}` : pathname, {
    scroll: false,
  });
    }

    const filteredCountries = countries.filter((country) => 
    country.names.common.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
    )

    return (
        <>
       <Search 
       searchTerm={search} 
       onSearchChange={handleSearchChange}/>
          {children}
      
       <main>
        <h1>Countries</h1>

        <CountryCards
          key={`${region ?? "all"}-${search}`}
          contries={filteredCountries}
        />
       </main>


         </>
    )
}