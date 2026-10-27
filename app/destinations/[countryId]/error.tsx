"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Detaljsidan kraschade:", error);

  return (
    <div>
      <h2>Något gick fel när vi hämtade landinformationen.</h2>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Försök igen
      </button>
    </div>
  );
}