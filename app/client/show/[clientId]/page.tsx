export default function ClientShow({ params }: { params: { clientId: number } }) {
  return (
    <div>
      <h1> Client Show with dynamic ID page </h1>
      <h1> {params.clientId} </h1>
    </div>
  );
}
