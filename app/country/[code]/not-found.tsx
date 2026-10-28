import NotFoundMessage from "@/app/components/NotFoundMessage";

export default function NotFound() {
  return (
    <NotFoundMessage
      title="Landet hittades inte"
      message="Vi kunde inte hitta landet du söker efter."
    />
  );
}