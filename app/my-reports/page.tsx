import DashboardLayout from "../components/DashboardLayout";

export default function MyReports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary">My Reports</h1>
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border-light text-center">
          <p className="text-text-primary/60">No reports generated yet.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
