import VehicleData from "@/app/section/VehicleData";

export default function VehiclesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Vehicles</h1>
      {/* Vehicle Data */}
      <VehicleData />
    </div>
  );
}
