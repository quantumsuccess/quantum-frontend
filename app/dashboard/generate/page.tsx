"use client";

import { useState } from "react";
import DashboardLayout from "@/app/components/DashboardLayout";

export default function GenerateReportPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Personal Info", icon: "👤" },
    { number: 2, title: "Education", icon: "🎓" },
    { number: 3, title: "Interests", icon: "🎯" },
    { number: 4, title: "Goals", icon: "🚀" },
    { number: 5, title: "Review", icon: "✅" },
  ];

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

  const handleSubmit = () => {
    console.log("Report generation submitted");
    // Add submission logic here
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-start to-primary-end rounded-2xl p-6 sm:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Generate Your Quantum Report</h1>
          <p className="text-white/90">
            Answer 27 questions to unlock personalized insights about your potential
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border-light">
          <div className="flex items-center justify-between mb-8">
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

          {/* Progress Bar */}
          <div className="mb-6">
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

        {/* Form Content */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border-light">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Gender *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  placeholder="City, State, Country"
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Educational Background</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Current Education Level *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all">
                    <option value="">Select level</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Field of Study *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Computer Science, Business, Arts"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your school/college name"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Academic Performance
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all">
                    <option value="">Select performance level</option>
                    <option value="excellent">Excellent (90%+)</option>
                    <option value="good">Good (75-90%)</option>
                    <option value="average">Average (60-75%)</option>
                    <option value="below-average">Below Average (&lt;60%)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Interests & Hobbies</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    What are your main interests? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Technology", "Arts", "Sports", "Music", "Science", "Business", "Writing", "Social Work", "Travel"].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 p-3 border border-border-light rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-primary-start rounded focus:ring-primary-start" />
                        <span className="text-sm text-text-primary">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Describe your favorite hobby
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about what you love to do in your free time..."
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    How do you spend your weekends?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share your typical weekend activities..."
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Career Goals & Aspirations</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    What is your dream career? *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Software Engineer, Doctor, Entrepreneur"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Where do you see yourself in 5 years? *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your vision for your future..."
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    What are your biggest strengths?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="List your key strengths and skills..."
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    What challenges do you face in achieving your goals?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any obstacles or concerns..."
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Review & Submit</h2>
              
              <div className="bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-xl p-6 border border-primary-start/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-start text-white rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      You&apos;re almost done!
                    </h3>
                    <p className="text-text-primary/70">
                      Please review your information before submitting. Your personalized Quantum Report will be generated based on your responses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Personal Information</h4>
                  <p className="text-sm text-text-primary/70">All fields completed ✓</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Educational Background</h4>
                  <p className="text-sm text-text-primary/70">All fields completed ✓</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Interests & Hobbies</h4>
                  <p className="text-sm text-text-primary/70">All fields completed ✓</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-text-primary mb-2">Career Goals</h4>
                  <p className="text-sm text-text-primary/70">All fields completed ✓</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <input type="checkbox" className="mt-1 w-4 h-4 text-primary-start rounded focus:ring-primary-start" />
                <label className="text-sm text-text-primary">
                  I agree to the terms and conditions and consent to the processing of my data for generating the Quantum Report.
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6 py-3 border-2 border-border-light text-text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Next Step →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Generate Report 🚀
            </button>
          )}
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-text-primary/60">
          <p>Need help? <button className="text-primary-start hover:underline font-medium">Contact Support</button></p>
        </div>
      </div>
    </DashboardLayout>
  );
}
