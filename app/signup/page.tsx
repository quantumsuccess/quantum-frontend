"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "Vikas Mourya",
    phoneNumber: "+919082544906",
    email: "srinav44@gmail.com",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", formData);
  };

  const isPasswordValid = formData.password.length >= 8;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-50 to-card">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-primary-start to-primary-end">
              <span className="text-white font-bold text-xl">★</span>
            </div>
            <span className="text-2xl font-bold text-primary-start">Quantum Success</span>
          </div>
          <p className="text-sm text-text-primary">Create your account</p>
        </div>

        {/* Sign Up Card */}
        <div className="rounded-2xl shadow-xl p-8 bg-card">
          <h1 className="text-3xl font-bold mb-2 text-text-primary">Sign Up</h1>
          <p className="text-sm mb-6 text-text-primary">
            Fill in your information to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-text-primary">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 transition-all bg-card border border-border-light focus:border-primary-start"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2 text-text-primary">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 transition-all bg-card border border-border-light focus:border-primary-start"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 transition-all bg-card border border-border-light focus:border-primary-start"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-text-primary">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all bg-card border ${
                  formData.password && !isPasswordValid 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-border-light focus:border-primary-start focus:ring-primary-start/20'
                }`}
                placeholder="Enter your password"
                required
              />
              {formData.password && (
                <p className={`mt-1 text-xs ${isPasswordValid ? 'text-text-primary' : 'text-red-500'}`}>
                  Must be at least 8 characters.
                </p>
              )}
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={!isPasswordValid}
              className="w-full py-3 px-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-gradient-to-r from-primary-start to-primary-end"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm text-text-primary">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold hover:underline text-primary-start">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

