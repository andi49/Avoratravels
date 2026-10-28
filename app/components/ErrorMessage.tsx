'use client'

type ErrorMessageProps = {
  message: string;
  onRetry: () => void;
};

export default function ErrorMessage({
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div role="alert" className="errorMessage">
      <h2>Något gick fel</h2>
      <p>{message}</p>

      <button type="button" onClick={onRetry}>
        Försök igen
      </button>
    </div>
  );
}