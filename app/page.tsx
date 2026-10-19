import Search from "./components/Search";
import CountriesPage from "./layout/contries/page";
import RegionsPage from "./layout/regions/page";

type HomeProps = {
  searchParams: Promise<{
    region: string;
  }>;
};
export default async function Home({ searchParams }: HomeProps) {
  const { region } = await searchParams;
  return (
   <>
    <Search />
    <RegionsPage/>
   <CountriesPage  region={region} />
   </>
  );
}
