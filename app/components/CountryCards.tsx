/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react"
import { Country } from "../types/country"

type CountryCardsProps = {
    contries: Country[]
}

export default function CountryCards({contries}: CountryCardsProps) {
    const [currentPage, setCurrentPage] = useState(1)

    const countriesPerPage = 10

    const totalPages = Math.ceil(contries.length / countriesPerPage)

    const startIndex = (currentPage -1 ) * countriesPerPage

    const visibleCountries = contries.slice(startIndex, startIndex + countriesPerPage)

     return (
    <>
      <div className="countryGrid">
        {visibleCountries.map((country) => (
          <div key={country.uuid} className="countryCard">
            <div className="countryFlag">
              {country.flag.url_png && (
                <img
                  src={country.flag.url_png}
                  alt={`Flagga av ${country.names.common}`}
                />
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
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              className={currentPage === index + 1 ? "activePage" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}