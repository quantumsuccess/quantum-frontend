import LandingLayout from "../components/LandingLayout";
import Image from "next/image";

export default function Gallery() {
  // Sample gallery items - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: "Workshop Session",
      category: "Events",
      description: "Students engaging in interactive Quantum Success workshops",
    },
    {
      id: 2,
      title: "Report Presentation",
      category: "Success Stories",
      description: "Parents reviewing personalized Quantum Reports",
    },
    {
      id: 3,
      title: "School Partnership",
      category: "Partnerships",
      description: "Collaborating with educational institutions",
    },
    {
      id: 4,
      title: "Student Success",
      category: "Success Stories",
      description: "Celebrating student achievements and growth",
    },
    {
      id: 5,
      title: "Team Meeting",
      category: "Events",
      description: "Our team working on innovative solutions",
    },
    {
      id: 6,
      title: "Award Ceremony",
      category: "Achievements",
      description: "Recognizing excellence in education",
    },
    {
      id: 7,
      title: "Community Event",
      category: "Events",
      description: "Bringing together students and families",
    },
    {
      id: 8,
      title: "Research & Development",
      category: "Innovation",
      description: "Advancing our scientific methodology",
    },
    {
      id: 9,
      title: "Training Program",
      category: "Events",
      description: "Empowering educators with Quantum insights",
    },
  ];

  const categories = ["All", "Events", "Success Stories", "Partnerships", "Achievements", "Innovation"];

  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
          <section className="max-w-7xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-4">
                Our <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Gallery</span>
              </h1>
              <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
                Explore moments from our journey, events, and success stories
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-border-light bg-card text-text-primary hover:bg-primary-start/10 hover:border-primary-start/30 transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border-light"
                >
                  {/* Image Placeholder */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-primary-start/20 to-primary-end/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-primary-start/10 group-hover:bg-primary-start/20 transition-colors"></div>
                    <div className="relative z-10 text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                      📸
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-primary-start/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-primary/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Load More
              </button>
            </div>
          </section>
        </main>
      </div>
    </LandingLayout>
  );
}

