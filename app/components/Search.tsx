'use client'

type searchProps = {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export default function Search({
  searchTerm,
  onSearchChange,
}: searchProps) {

  return (
    <section className="search-section">
      <div className="search-content">
        <h1 className="search-title">
          Vart vill du resa?
        </h1>

        <p className="search-description">
          Upptäck din nästa drömdestination.
        </p>

        <div className="search-glass">
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
           id="country-search"
            type="search"
            className="search-input"
            placeholder="Sök land eller destination..."
            aria-label="Sök land eller destination"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <span className="search-decoration" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </section>
  );
}