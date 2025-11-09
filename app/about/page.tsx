import LandingLayout from "../components/LandingLayout";

export default function About() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">
                About <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Quantum Success</span>
              </h1>
              <div className="space-y-6 text-lg text-text-primary/80 leading-relaxed">
                <p>
                  Quantum Success is a revolutionary platform that helps individuals
                  understand their strengths and areas of growth through personalized
                  Quantum Reports. Each report is carefully designed to analyze personal
                  patterns, decisions, and lifestyle through a scientific lens to empower
                  your personal and professional journey.
                </p>
                <p>
                  Our mission is to provide scientific clarity and practical roadmaps for
                  growth, helping students and families discover their path to success with
                  data-driven insights and personalized guidance.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LandingLayout>
  );
}
