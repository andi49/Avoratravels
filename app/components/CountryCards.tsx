/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react"
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


    const [currentPage, setCurrentPage] = useState(pageFromUrl)

    function handlePageChange(page: number) {
  setCurrentPage(page);

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
      <div className="countryGrid">
        {visibleCountries.map((country) => (
<Link  href={`/destinations/${country.uuid}?${searchParams.toString()}`}key={country.uuid}  className="countryCard">
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
                  {country.capitals.map((capital) => capital.name).join(", ") ||
                    "N/A"}
                </strong>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              className={currentPage === index + 1 ? "activePage" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}