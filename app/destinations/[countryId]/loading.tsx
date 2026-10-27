


export default function Loading() {
  return (
    <div className="avoraLoading" role="status">
      <svg
        className="avoraGlobe"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2.5" />
        <ellipse cx="50" cy="50" rx="14" ry="32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 50H82 M24 31H76 M24 69H76" stroke="currentColor" strokeWidth="1.5" />

        <g className="avoraOrbit">
          <circle cx="50" cy="11" r="5" fill="currentColor" />
        </g>
      </svg>

      <h2 className="avoraLogo">AVORA</h2>
      <p className="avoraTagline">Discover your next destination</p>
      <p className="avoraDots" aria-label="Laddar">•••</p>
    </div>
  );
}

