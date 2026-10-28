import { Suspense } from "react";
import { getGeography } from "@/app/services/geographyService";
import type { Country } from "@/app/types/country";
import CrountryBrowser from "@/app/components/CountryBrowser";
import { ReactNode } from "react";
import Loading from "@/app/country/[code]/loading";

type CountryProps = {
  region?: string;
  children: ReactNode;
  
};

async function CountryList({ region, children }: CountryProps) {
  const countries: Country[] = await getGeography();

  const result = countries.filter((country) => {
    return !region || country.region === region;
  });

  return (
    <CrountryBrowser region={region} countries={result}>
      {children}
    </CrountryBrowser>
  );

}

export default function CountriesPage({
  region,
  children,
}: CountryProps) {
  return (
   <Suspense fallback={<Loading />}>
      <CountryList region={region}>
        {children}
      </CountryList>
    </Suspense>
  );
}