"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("srinav44@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

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
          <p className="text-sm text-text-primary">Welcome back!</p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl shadow-xl p-8 bg-card">
          <h1 className="text-3xl font-bold mb-2 text-text-primary">Sign In</h1>
          <p className="text-sm mb-6 text-text-primary">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 transition-all bg-card border border-border-light focus:border-primary-start"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform bg-gradient-to-r from-primary-start to-primary-end"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-text-primary">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold hover:underline text-primary-start">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

