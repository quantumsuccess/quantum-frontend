import LandingLayout from "../components/LandingLayout";
import Link from "next/link";

export default function Reports() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-4">
                Quantum <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Reports</span>
              </h1>
              <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
                Discover your personalized insights and unlock your potential with our comprehensive analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-start to-primary-end rounded-xl flex items-center justify-center text-3xl mb-4">
                  📊
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Personalized Analysis</h3>
                <p className="text-text-primary/70 mb-4">
                  Get detailed insights based on 27 comprehensive questions tailored to your unique profile.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-start to-primary-end rounded-xl flex items-center justify-center text-3xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Career Guidance</h3>
                <p className="text-text-primary/70 mb-4">
                  Receive actionable recommendations for your academic and professional journey.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-start to-primary-end rounded-xl flex items-center justify-center text-3xl mb-4">
                  🌱
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Growth Roadmap</h3>
                <p className="text-text-primary/70 mb-4">
                  Follow a clear path to personal development with our structured approach.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started with Your Report →
              </Link>
            </div>
          </section>
        </main>
      </div>
    </LandingLayout>
  );
}

