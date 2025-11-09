"use client";

import Link from "next/link";
import Image from "next/image";
import LandingLayout from "./components/LandingLayout";

const StatCard: React.FC<{
  title: string;
  value: string;
  icon?: React.ReactNode;
  delay?: number;
}> = ({ title, value, icon, delay = 0 }) => (
  <div 
    className="group bg-card rounded-2xl shadow-lg hover:shadow-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 border border-border-light"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 bg-gradient-to-br from-primary-start/20 to-primary-end/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
      {icon ?? "⭐"}
    </div>
    <div>
      <div className="text-3xl font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-text-primary/70 font-medium mt-1">{title}</div>
    </div>
  </div>
);

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  delay?: number;
}> = ({ title, description, icon, delay = 0 }) => (
  <div 
    className="group p-8 bg-gradient-to-br from-card to-primary-start/5 rounded-2xl border border-border-light hover:border-primary-start/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-gradient-to-br from-primary-start to-primary-end rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
      {icon}
    </div>
    <h3 className="font-bold text-xl text-text-primary mb-3">{title}</h3>
    <p className="text-text-primary/70 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
  rating: number;
}> = ({ name, role, content, rating }) => (
  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border-light hover:shadow-xl transition-shadow duration-300">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
    </div>
    <p className="text-text-primary/80 mb-4 italic leading-relaxed">&ldquo;{content}&rdquo;</p>
    <div>
      <div className="font-semibold text-text-primary">{name}</div>
      <div className="text-sm text-text-primary/60">{role}</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-start/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-primary-end/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-start/15 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center gap-12 py-20 relative z-10">
            {/* Left Content */}
            <div className="md:col-span-7">
              <div className="max-w-2xl">
                <div className="inline-block mb-4 px-4 py-2 bg-primary-start/10 rounded-full text-sm font-semibold text-primary-start">
                  🚀 Transform Your Future Today
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-tight mb-6">
                  Discover the Path to Your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary-start via-primary-start to-primary-end bg-clip-text text-transparent">
                      Quantum Success
                    </span>
                    <span
                      className="absolute -bottom-3 left-0 w-full h-4 md:h-5 bg-gradient-to-r from-primary-end/60 to-primary-end/80 -skew-x-6 rounded opacity-80"
                      aria-hidden
                    />
                  </span>
                </h1>

                <p className="mt-6 text-text-primary/80 text-lg md:text-xl leading-relaxed mb-8">
                  Stop limiting your child&apos;s future to just a few options. Give
                  them the clarity and conviction to achieve whatever they wish
                  for. At Quantum Success we provide scientific clarity and a
                  practical roadmap for growth.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/reports"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-start to-primary-end hover:from-primary-start/90 hover:to-primary-end/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span>Discover Potential</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <a
                    href="/brochure.pdf"
                    className="inline-flex items-center gap-2 bg-card hover:bg-card/90 text-primary-start border-2 border-border-light hover:border-primary-start/30 px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    📄 Download Program Brief
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-start to-primary-end border-2 border-card flex items-center justify-center text-white font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-text-primary/70">
                    <span className="font-semibold text-primary-start">2M+</span> students trust us
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="md:col-span-5 relative">
              <div className="absolute -right-20 -top-10 w-[500px] h-[500px] bg-gradient-to-br from-primary-end/30 to-primary-end/50 rounded-[40%] blur-3xl opacity-40 transform rotate-12 animate-pulse"></div>

              <div className="relative z-10 flex justify-center md:justify-end">
                <div className="relative w-[350px] md:w-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-start/30 to-primary-end/30 rounded-3xl transform rotate-6 opacity-20"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                    <Image
                      src="/gene.png"
                      alt="Hero Student"
                      width={450}
                      height={580}
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -left-4 top-12 w-16 h-16 bg-card rounded-2xl shadow-xl grid place-items-center text-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                    🔮
                  </div>
                  <div className="absolute left-8 top-56 w-16 h-16 bg-card rounded-2xl shadow-xl grid place-items-center text-2xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    ♒
                  </div>
                  <div className="absolute -right-8 bottom-12 w-16 h-16 bg-gradient-to-br from-primary-start to-primary-end rounded-2xl shadow-xl grid place-items-center text-white text-xl font-bold animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                    ★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 -mt-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Students Guided" value="2000k+" icon={"🎓"} delay={0} />
            <StatCard title="Improved Career Clarity" value="85%" icon={"📊"} delay={100} />
            <StatCard title="Schools Engaged" value="50+" icon={"🏫"} delay={200} />
            <StatCard title="Years of Expertise" value="10+" icon={"⭐"} delay={300} />
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Quantum Success</span>
            </h2>
            <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
              Empowering students with data-driven insights and personalized guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Personalized Reports"
              description="Tailored 27-question analysis designed to reveal clear next steps and unlock your child&apos;s unique potential."
              icon="📋"
              delay={0}
            />
            <FeatureCard
              title="Scientific Insight"
              description="Actionable insights backed by domain expertise and comprehensive data analysis for informed decisions."
              icon="🔬"
              delay={100}
            />
            <FeatureCard
              title="Holistic Growth"
              description="Focus on personal, academic, and career dimensions for lasting impact and well-rounded development."
              icon="🌱"
              delay={200}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              What Parents & Students Say
            </h2>
            <p className="text-xl text-text-primary/70">
              Real stories from real families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Priya Sharma"
              role="Parent"
              content="Quantum Success helped us understand our daughter&apos;s strengths better than ever. The personalized report was incredibly detailed and actionable."
              rating={5}
            />
            <TestimonialCard
              name="Rahul Mehta"
              role="Student"
              content="The insights I received completely changed my perspective on my career path. I now have a clear roadmap for my future."
              rating={5}
            />
            <TestimonialCard
              name="Anita Patel"
              role="Parent"
              content="Best investment we made for our child&apos;s future. The scientific approach and personalized guidance are unmatched."
              rating={5}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative bg-gradient-to-r from-primary-start via-primary-start to-primary-end rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to unlock your child&apos;s potential?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of families who have discovered their path to success
              </p>
              <Link
                href="/reports"
                className="inline-block bg-card text-primary-start px-10 py-4 rounded-xl font-bold text-lg hover:bg-card/90 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Journey Now →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-sidebar to-sidebar/90 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-start to-primary-end shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold">QS</span>
                </div>
                <span className="text-lg font-semibold text-white">Quantum Success</span>
              </div>
              <p className="text-sm text-gray-400">
                Empowering students with scientific clarity and practical roadmaps for growth.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/reports" className="hover:text-white transition-colors">Reports</Link></li>
                <li><Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Get Started</h4>
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-primary-start to-primary-end hover:from-primary-start/90 hover:to-primary-end/90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Quantum Success. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </LandingLayout>
  );
}
