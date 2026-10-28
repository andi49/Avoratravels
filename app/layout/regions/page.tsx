import { Suspense } from "react";
import { Region } from "@/app/types/region";
import { getGeography } from "@/app/services/geographyService";
import Link from "next/link";



async function RegionList({ selectedRegion,search }: { selectedRegion?: string;   search?: string; }) {

  const countries: Region[] = await getGeography();

  const regions = [
    ...new Set(countries.map((country) => country.region))
  ];

  return (
   <div className="regionGrid">
   <Link href={search ? `/?search=${encodeURIComponent(search)}` : "/"} className={`regionCard ${!selectedRegion ? "active" : ""}`} 
   aria-current={!selectedRegion ? "page" : undefined} scroll={false}>
  Alla regioner
</Link>

    {regions.map((region) => (
   <Link key={region} className={`regionCard ${selectedRegion === region ? "active" : ""}`} 
   aria-current={selectedRegion === region ? "page" : undefined} href={`/?${search ? `search=${encodeURIComponent(search)}&` : ""}region=${encodeURIComponent(region)}`} scroll={false}>
  {region}
</Link>
    ))}
</div>
  );
}

export default function RegionsPage({ selectedRegion,search }: { selectedRegion?: string;   search?: string; }) {
  return (
    <main>
      <h1 className="regionTitel">Regioner</h1> 

      <Suspense fallback={<p>Loading regions...</p>}>
        <RegionList selectedRegion={selectedRegion} search={search} />
      </Suspense>
    </main>
  );
}
