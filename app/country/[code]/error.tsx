"use client";

import ErrorMessage from "@/app/components/ErrorMessage";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorMessage
      message="Kunde inte hämta landinformationen."
      onRetry={reset}
    />
  );
}