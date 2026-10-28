import Link from "next/link";

type NotFoundMessageProps = {
  title: string;
  message: string;
};

export default function NotFoundMessage({
  title,
  message,
}: NotFoundMessageProps) {
  return (
    <main className="destinationPage">
      <h1>{title}</h1>
      <p>{message}</p>

      <Link href="/" className="backLink">
        ← Tillbaka till startsidan
      </Link>
    </main>
  );
}