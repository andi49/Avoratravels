
export default function Search() {
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
            type="search"
            className="search-input"
            placeholder="Sök land eller destination..."
            aria-label="Sök land eller destination"
          />

          <span className="search-decoration" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </section>
  );
}
