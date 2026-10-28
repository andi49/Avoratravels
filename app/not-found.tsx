import NotFoundMessage from "@/app/components/NotFoundMessage";

export default function NotFound() {
  return (
    <NotFoundMessage
      title="404 – Sidan hittades inte"
      message="Adressen du söker efter finns inte."
    />
  );
}