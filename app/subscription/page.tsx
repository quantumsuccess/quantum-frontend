import DashboardLayout from "../components/DashboardLayout";

export default function Subscription() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary">Subscription</h1>
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border-light">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Current Plan
          </h2>
          <p className="text-text-primary/60">No active subscription</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

