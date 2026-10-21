import { Suspense } from "react";

import CountriesPage from "./layout/contries/page";
import RegionsPage from "./layout/regions/page";

type HomeProps = {
  searchParams: Promise<{
    region?: string;
  }>;
};

async function CountryContent({ searchParams }: HomeProps) {
  const { region } = await searchParams;

  return (
  <CountriesPage region={region}>
    <RegionsPage />
  </CountriesPage>
);
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <Suspense fallback={<p>Loading countries...</p>}>
      <CountryContent searchParams={searchParams} />
    </Suspense>
  );
}