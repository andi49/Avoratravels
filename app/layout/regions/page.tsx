import { Suspense } from "react";
import { Region } from "@/app/types/region";
import { getGeography } from "@/app/services/geographyService";
import Link from "next/link";

async function RegionList() {
  const countries: Region[] = await getGeography();

  const regions = [
    ...new Set(countries.map((country) => country.region))
  ];

  return (
   <div className="regionGrid">
  {regions.map((region) => (
    <Link key={region} className="regionCard" href={`/?region=${encodeURIComponent(region)}`}> 
      {region}
    </Link>
  ))}
</div>
  );
}

export default function RegionsPage() {
  return (
    <main>
      <h1 className="regionTitel">Regioner</h1>

      <Suspense fallback={<p>Loading regions...</p>}>
        <RegionList />
      </Suspense>
    </main>
  );
}
