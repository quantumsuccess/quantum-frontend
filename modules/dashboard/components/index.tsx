"use client";

import Link from "next/link";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "0",
      subtitle: "No reports yet",
      icon: "📄",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Subscriptions",
      value: "0",
      subtitle: "No subscriptions",
      icon: "📈",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Reports This Month",
      value: "0",
      subtitle: "Start generating",
      icon: "📅",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Insights Generated",
      value: "0",
      subtitle: "Coming soon",
      icon: "✨",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentActivity = [
    {
      action: "Account Created",
      time: "Just now",
      icon: "🎉",
      color: "text-green-600",
    },
    {
      action: "Welcome Email Sent",
      time: "1 min ago",
      icon: "📧",
      color: "text-blue-600",
    },
  ];

  const quickActions = [
    {
      title: "Generate Report",
      description: "Create your personalized Quantum Report",
      icon: "📄",
      href: "/dashboard/generate",
      color: "from-primary-start to-primary-end",
    },
    {
      title: "View Reports",
      description: "Access your generated reports",
      icon: "📊",
      href: "/my-reports",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Manage Subscription",
      description: "Upgrade or manage your plan",
      icon: "💳",
      href: "/subscription",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Update Profile",
      description: "Edit your personal information",
      icon: "👤",
      href: "/dashboard/profile",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-primary-start to-primary-end rounded-2xl p-6 sm:p-8 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, Vikas Mourya! 👋</h1>
              <p className="text-white/90 text-base sm:text-lg">
                Ready to generate your next Quantum Report?
              </p>
            </div>
            <Link
              href="/dashboard/generate"
              className="bg-white text-primary-start px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Start Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-text-primary/60 mb-1 font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-sm text-text-primary/60">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="text-xl font-bold text-text-primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group bg-card rounded-xl p-6 shadow-sm border border-border-light hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {action.icon}
              </div>
              <h3 className="font-bold text-text-primary mb-1 group-hover:text-primary-start transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-text-primary/60">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary">Recent Activity</h2>
            <button className="text-sm text-primary-start hover:underline font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-text-primary">{activity.action}</p>
                  <p className="text-sm text-text-primary/60">{activity.time}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${activity.color.replace('text-', 'bg-')}`}></div>
              </div>
            ))}
            {recentActivity.length === 0 && (
              <div className="text-center py-8 text-text-primary/60">
                <p className="text-4xl mb-2">📭</p>
                <p>No recent activity</p>
              </div>
            )}
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-xl p-6 border border-primary-start/20">
          <h2 className="text-xl font-bold text-text-primary mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-start text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-text-primary">Complete Your Profile</p>
                <p className="text-sm text-text-primary/60 mt-1">Add your personal information</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary-start text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-text-primary">Generate Your First Report</p>
                <p className="text-sm text-text-primary/60 mt-1">Answer 27 questions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-text-primary/60">Review Your Insights</p>
                <p className="text-sm text-text-primary/60 mt-1">Unlock your potential</p>
              </div>
            </div>
          </div>
          <Link
            href="/dashboard/generate"
            className="mt-6 w-full block text-center bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              💡
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-1">Need Help?</h3>
              <p className="text-sm text-text-primary/60">
                Check out our documentation or contact support for assistance
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-2 border-2 border-border-light text-text-primary rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Docs
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2 bg-primary-start text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
