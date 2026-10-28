import { Suspense } from "react";
import CountriesPage from "./layout/contries/page";
import RegionsPage from "./layout/regions/page";
import Loading from "./country/[code]/loading";

import "./globals.css";

type HomeProps = {
  searchParams: Promise<{
    region?: string;
    search?: string;
  }>;
};

async function CountryContent({ searchParams }: HomeProps) {
  
  const { region, search } = await searchParams;

  return (
   <CountriesPage region={region}>
      <RegionsPage selectedRegion={region} search={search} />
    </CountriesPage>
  
);
}

export default function Home({ searchParams }: HomeProps) {
  return (
   <Suspense fallback={<Loading />}>
      <CountryContent searchParams={searchParams} />
    </Suspense>
  );
}