'use client'


import { useRouter } from "next/navigation";

export default function RetryButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.refresh()}
    className="retryButton"
     type="button">
      Försök igen
    </button>
  );
}