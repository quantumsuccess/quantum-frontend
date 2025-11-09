"use client";

import Link from "next/link";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "0",
      subtitle: "No reports yet",
      icon: "📄",
    },
    {
      title: "Active Subscriptions",
      value: "0",
      subtitle: "No subscriptions",
      icon: "📈",
    },
    {
      title: "Reports This Month",
      value: "0",
      subtitle: "Start generating",
      icon: "📅",
    },
    {
      title: "Insights Generated",
      value: "0",
      subtitle: "Coming soon",
      icon: "✨",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary-start to-primary-end rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Vikas Mourya!</h1>
        <p className="text-white/90 text-lg">
          Ready to generate your next Quantum Report?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-sm border border-border-light"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-text-primary/60 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
            <p className="text-sm text-text-primary/60">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Generate Report Card */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <h2 className="text-xl font-bold text-text-primary mb-2">
            Generate Your First Report
          </h2>
          <p className="text-text-primary/70 mb-6">
            Answer 27 questions to get personalized insights
          </p>
          <Link
            href="/dashboard/generate"
            className="inline-block bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Questionnaire
          </Link>
        </div>

        {/* Explore Features Card */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <h2 className="text-xl font-bold text-text-primary mb-2">
            Explore Features
          </h2>
          <p className="text-text-primary/70 mb-6">
            Learn how to make the most of Quantum Success
          </p>
          <button className="inline-block bg-card border-2 border-border-light text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            View Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
