"use client";

import DashboardLayout from "../components/DashboardLayout";
import Link from "next/link";

export default function MyReportsPage() {
  // Mock data - replace with actual data from API
  const reports = [
    {
      id: 1,
      title: "Career Assessment Report",
      date: "2025-01-15",
      status: "completed",
      score: 85,
      type: "Career",
    },
    {
      id: 2,
      title: "Personality Analysis",
      date: "2025-01-10",
      status: "completed",
      score: 92,
      type: "Personality",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "processing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "pending":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Career":
        return "bg-blue-100 text-blue-700";
      case "Personality":
        return "bg-purple-100 text-purple-700";
      case "Skills":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">My Reports</h1>
            <p className="text-text-primary/70">View and manage your generated Quantum Reports</p>
          </div>
          <Link
            href="/dashboard/generate"
            className="bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            + Generate New Report
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-primary/60 mb-1">Total Reports</p>
                <p className="text-3xl font-bold text-text-primary">{reports.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl">
                📄
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-primary/60 mb-1">Completed</p>
                <p className="text-3xl font-bold text-text-primary">
                  {reports.filter(r => r.status === "completed").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-2xl">
                ✅
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-primary/60 mb-1">Avg. Score</p>
                <p className="text-3xl font-bold text-text-primary">
                  {Math.round(reports.reduce((acc, r) => acc + r.score, 0) / reports.length)}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-2xl">
                ⭐
              </div>
            </div>
          </div>
        </div>

        {/* Reports List */}
        {reports.length > 0 ? (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-card rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-start to-primary-end rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      📊
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg font-bold text-text-primary">{report.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                          {report.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-text-primary/60 flex-wrap">
                        <span className="flex items-center gap-1">
                          📅 {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(report.status)}`}>
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-sm text-text-primary/60">Score</p>
                        <p className="text-2xl font-bold text-primary-start">{report.score}</p>
                      </div>
                      <div className="w-16 h-16">
                        <svg className="transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E7EBF1"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            strokeDasharray={`${report.score}, 100`}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3C0FD1" />
                              <stop offset="100%" stopColor="#00C8FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-primary-start text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                        View
                      </button>
                      <button className="px-4 py-2 border-2 border-border-light text-text-primary rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-xl p-12 shadow-sm border border-border-light text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                📭
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">No Reports Yet</h3>
              <p className="text-text-primary/70 mb-6">
                You haven&apos;t generated any reports yet. Start your journey by creating your first Quantum Report.
              </p>
              <Link
                href="/dashboard/generate"
                className="inline-block bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Generate Your First Report
              </Link>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-xl p-6 border border-primary-start/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-start text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              💡
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Understanding Your Reports</h3>
              <p className="text-text-primary/70 mb-4">
                Each report provides personalized insights based on your responses. Higher scores indicate stronger alignment with your goals and potential.
              </p>
              <button className="text-primary-start font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
