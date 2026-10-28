/* eslint-disable @next/next/no-img-element */
'use client'

import { Country } from "../types/country"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

type CountryCardsProps = {
    contries: Country[]
}

export default function CountryCards({contries}: CountryCardsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageFromUrl = Number(searchParams.get("page") ?? 1);


 const currentPage = pageFromUrl;

    function handlePageChange(page: number) {
  

  const params = new URLSearchParams(searchParams.toString());

  params.set("page", String(page));

  router.push(`${pathname}?${params.toString()}`, {
    scroll: false,
  });
}

    const countriesPerPage = 10

    const totalPages = Math.ceil(contries.length / countriesPerPage)

    const startIndex = (currentPage -1 ) * countriesPerPage

    const visibleCountries = contries.slice(startIndex, startIndex + countriesPerPage)

     return (
    <>
    {contries.length === 0 && (
  <p role="status">Inga länder matchar dina kriterier</p>
)}
      <div className="countryGrid">
        {visibleCountries.map((country) => (
        <Link  href={`/country/${country.codes.alpha_3.trim()}?${searchParams.toString()}`}key={country.uuid}  className="countryCard">
            <div className="countryFlag">
              {country.flag.url_png && (
                <img src={country.flag.url_png} alt={`Flagga av ${country.names.common}`}/>
              )}
            </div>

            <div className="countryInfo">
              <h2>{country.names.common}</h2>
            </div>

            <div className="countryDetails">
              <p>
                <span>🌍 Region</span>
                <strong>{country.region}</strong>
              </p>

              <p>
                <span>📍 Capital</span>
                <strong>
                  {country.capitals?.map((capital) => capital.name).join(", ") || "N/A"}
                </strong>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
  <nav className="pagination" aria-label="Sidnavigering">
    <button
      type="button"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Föregående
    </button>

    <span aria-live="polite">
      Sida {currentPage} av {totalPages}
    </span>

    <button
      type="button"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Nästa
    </button>
  </nav>
)}
    </>
  );
}