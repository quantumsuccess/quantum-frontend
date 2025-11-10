"use client";

import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for trying out Quantum Success",
      features: [
        "1 Report per month",
        "Basic insights",
        "Email support",
        "Community access",
      ],
      limitations: [
        "Limited report history",
        "No priority support",
      ],
      popular: false,
      current: true,
    },
    {
      name: "Pro",
      price: { monthly: 999, yearly: 9990 },
      description: "Best for individuals seeking growth",
      features: [
        "5 Reports per month",
        "Advanced insights",
        "Priority email support",
        "Detailed analytics",
        "Export reports (PDF)",
        "Career guidance",
      ],
      limitations: [],
      popular: true,
      current: false,
    },
    {
      name: "Premium",
      price: { monthly: 1999, yearly: 19990 },
      description: "For professionals and families",
      features: [
        "Unlimited reports",
        "Premium insights",
        "24/7 Priority support",
        "Advanced analytics",
        "Export all formats",
        "1-on-1 consultation",
        "Family accounts (up to 5)",
        "Custom reports",
      ],
      limitations: [],
      popular: false,
      current: false,
    },
  ];

  const currentPlan = plans.find(p => p.current);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-start to-primary-end rounded-2xl p-6 sm:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Subscription Plans</h1>
          <p className="text-white/90">Choose the perfect plan for your journey</p>
        </div>

        {/* Current Plan Card */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-primary/60 mb-1">Current Plan</p>
              <h2 className="text-2xl font-bold text-text-primary">{currentPlan?.name} Plan</h2>
              <p className="text-text-primary/70 mt-1">{currentPlan?.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-start">
                  ₹{currentPlan?.price.monthly}
                </p>
                <p className="text-sm text-text-primary/60">per month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-xl p-2 shadow-sm border border-border-light">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-primary-start to-primary-end text-white shadow-lg"
                  : "text-text-primary hover:bg-gray-50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-primary-start to-primary-end text-white shadow-lg"
                  : "text-text-primary hover:bg-gray-50"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-primary-start"
                  : plan.current
                  ? "border-green-500"
                  : "border-border-light"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-start to-primary-end text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.current && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                <p className="text-sm text-text-primary/60 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-text-primary">
                    ₹{plan.price[billingCycle]}
                  </span>
                  <span className="text-text-primary/60">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
                {billingCycle === "yearly" && plan.price.yearly > 0 && (
                  <p className="text-sm text-green-600 font-medium">
                    Save ₹{plan.price.monthly * 12 - plan.price.yearly} per year
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                  plan.current
                    ? "bg-gray-100 text-text-primary cursor-not-allowed"
                    : plan.popular
                    ? "bg-gradient-to-r from-primary-start to-primary-end text-white hover:opacity-90 shadow-lg"
                    : "border-2 border-border-light text-text-primary hover:bg-gray-50"
                }`}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : plan.name === "Free" ? "Downgrade" : "Upgrade"}
              </button>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-text-primary mb-3">Features:</p>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm text-text-primary/80">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✗</span>
                    <span className="text-sm text-text-primary/60">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border-light pb-4">
              <h3 className="font-semibold text-text-primary mb-2">Can I change my plan anytime?</h3>
              <p className="text-sm text-text-primary/70">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="border-b border-border-light pb-4">
              <h3 className="font-semibold text-text-primary mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-text-primary/70">
                We accept all major credit cards, debit cards, UPI, and net banking.
              </p>
            </div>
            <div className="border-b border-border-light pb-4">
              <h3 className="font-semibold text-text-primary mb-2">Is there a refund policy?</h3>
              <p className="text-sm text-text-primary/70">
                Yes, we offer a 7-day money-back guarantee if you&apos;re not satisfied with our service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Do unused reports roll over?</h3>
              <p className="text-sm text-text-primary/70">
                No, unused reports do not roll over to the next month. However, Premium plan users have unlimited reports.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-xl p-6 border border-primary-start/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-start text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                💬
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">Need help choosing a plan?</h3>
                <p className="text-sm text-text-primary/70">
                  Our team is here to help you find the perfect plan for your needs
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-primary-start text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
