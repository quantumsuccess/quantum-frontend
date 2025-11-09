import LandingLayout from "../components/LandingLayout";

export default function Blogs() {
  const blogs = [
    {
      title: "How Quantum Thinking Improves Your Decision Making",
      date: "Nov 8, 2025",
      excerpt: "Discover key insights on how to enhance your life through the power of Quantum Success principles.",
    },
    { 
      title: "Unlocking the Secrets of Prosperity", 
      date: "Oct 20, 2025",
      excerpt: "Learn how data-driven insights can transform your approach to success and personal growth.",
    },
    { 
      title: "Parenting Through the Quantum Lens", 
      date: "Sep 15, 2025",
      excerpt: "Explore how Quantum Reports help parents understand and guide their children's unique potential.",
    },
  ];

  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-4">
                Our <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Blogs</span>
              </h1>
              <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
                Insights, stories, and guidance to help you on your journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border-light"
                >
                  <div className="mb-4">
                    <span className="text-sm text-primary-start font-semibold">{blog.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-text-primary/70 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <button className="text-primary-start font-semibold hover:underline flex items-center gap-2 group">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </LandingLayout>
  );
}
