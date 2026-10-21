'use client'
import { Country } from "../types/country"
import { useState, type ReactNode } from "react";
import Search from "./Search"
import CountryCards from "./CountryCards"

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
    const [search, setSearch] = useState('')

    const filteredCountries = countries.filter((country) => 
    country.names.common.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
    )

    return (
        <>
       <Search searchTerm={search} onSearchChange={setSearch}/>
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