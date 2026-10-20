import { Suspense } from "react";
import Search from "./components/Search";
import CountriesPage from "./layout/contries/page";
import RegionsPage from "./layout/regions/page";

type HomeProps = {
  searchParams: Promise<{
    region?: string;
  }>;
};

async function CountryContent({ searchParams }: HomeProps) {
  const { region } = await searchParams;

  return <CountriesPage region={region} />;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <Search />
      <RegionsPage />

      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}