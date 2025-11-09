export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Gallery</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore moments from our events, workshops, and Quantum Success stories.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <div
            key={img}
            className="bg-gray-200 h-64 rounded-xl shadow-md hover:shadow-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
