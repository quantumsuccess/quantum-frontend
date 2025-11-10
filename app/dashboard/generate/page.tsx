"use client";

import { useState } from "react";
import DashboardLayout from "@/app/components/DashboardLayout";
import Link from "next/link";

export default function GenerateReportPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    timeOfBirth: "",
    address: "",
    pincode: "",
    contactEmail: "",
    reportType: "",
  });

  const reportTypes = [
    { value: "quantum-parenting", label: "Quantum Parenting", questions: 27 },
    { value: "quantum-prosperity", label: "Quantum Prosperity", questions: 27 },
    { value: "quantum-excellence", label: "Quantum Excellence", questions: 27 },
    { value: "quantum-career", label: "Quantum Career", questions: 27 },
    { value: "quantum-relationships", label: "Quantum Relationships", questions: 27 },
  ];

  const steps = [
    { number: 1, title: "Details", icon: "📝" },
    { number: 2, title: "Questions", icon: "❓" },
    { number: 3, title: "Preview", icon: "👁️" },
    { number: 4, title: "Download", icon: "⬇️" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Report generation submitted", formData);
    handleNext();
  };

  const selectedReport = reportTypes.find(r => r.value === formData.reportType);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-text-primary/60">
          <Link href="/dashboard" className="hover:text-primary-start transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/my-reports" className="hover:text-primary-start transition-colors">
            Reports
          </Link>
          <span>/</span>
          <span className="text-text-primary font-medium">Generate Report</span>
        </nav>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-start to-primary-end rounded-2xl p-6 sm:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Generate Quantum Report</h1>
          <p className="text-white/90 text-base sm:text-lg">
            Fill in your details to create your personalized Quantum report.
          </p>
        </div>

        {/* Progress Bar / Step Indicator */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                      currentStep >= step.number
                        ? "bg-gradient-to-br from-primary-start to-primary-end text-white shadow-lg"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? "✓" : step.icon}
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-medium mt-2 text-center ${
                      currentStep >= step.number ? "text-text-primary" : "text-text-primary/40"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded transition-all ${
                      currentStep > step.number ? "bg-primary-start" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress Percentage */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-primary-start">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-start to-primary-end h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* User Information Form Section */}
        {currentStep === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm border border-border-light">
              <h2 className="text-xl font-bold text-text-primary mb-6">Personal Information</h2>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Father&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father's name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Mother&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="Enter mother's name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Place of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    placeholder="City, State, Country"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Time of Birth */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Time of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    name="timeOfBirth"
                    value={formData.timeOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    required
                    maxLength={6}
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                  />
                </div>
              </div>

              {/* Address - Full Width */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none bg-white"
                />
              </div>

              {/* Report Type Dropdown */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Select Report Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all bg-white"
                >
                  <option value="">Choose a report type</option>
                  {reportTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Questionnaire Preview Section */}
              {formData.reportType && (
                <div className="mt-6 bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-xl p-6 border border-primary-start/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-start text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      📋
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary mb-2">
                        {selectedReport?.label}
                      </h3>
                      <p className="text-text-primary/70 mb-4">
                        Total Questions: <span className="font-semibold text-primary-start">{selectedReport?.questions} Questions</span> for this report type.
                      </p>
                      <p className="text-sm text-text-primary/60">
                        After submitting your details, you&apos;ll be guided through a comprehensive questionnaire to generate your personalized report.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                >
                  Next: Answer Questionnaire →
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Questionnaire Step */}
        {currentStep === 2 && (
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border-light">
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-start to-primary-end rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                ❓
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {selectedReport?.label} Questionnaire
              </h2>
              <p className="text-text-primary/70 mb-8 max-w-2xl mx-auto">
                You&apos;ll now answer {selectedReport?.questions} carefully crafted questions to help us generate your personalized Quantum report.
              </p>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Questionnaire
              </button>
            </div>
          </div>
        )}

        {/* Preview Step */}
        {currentStep === 3 && (
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border-light">
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-start to-primary-end rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                👁️
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Preview Your Report</h2>
              <p className="text-text-primary/70 mb-8 max-w-2xl mx-auto">
                Review your information and questionnaire responses before generating the final report.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handlePrevious}
                  className="px-8 py-3 border-2 border-border-light text-text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Download Step */}
        {currentStep === 4 && (
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border-light">
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 animate-bounce">
                ✅
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Report Generated Successfully!</h2>
              <p className="text-text-primary/70 mb-8 max-w-2xl mx-auto">
                Your personalized {selectedReport?.label} report is ready for download.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
                  ⬇️ Download Report (PDF)
                </button>
                <Link
                  href="/my-reports"
                  className="px-8 py-3 border-2 border-border-light text-text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  View All Reports
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="text-center text-sm text-text-primary/60">
          <p>
            Need help?{" "}
            <button className="text-primary-start hover:underline font-medium">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
