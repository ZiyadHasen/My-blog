import { DashboardOverview } from "../components/overview";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DashboardOverview />
    </div>
  );
}
