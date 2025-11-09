export default function Blogs() {
  const blogs = [
    {
      title: "How Quantum Thinking Improves Your Decision Making",
      date: "Nov 8, 2025",
    },
    { title: "Unlocking the Secrets of Prosperity", date: "Oct 20, 2025" },
    { title: "Parenting Through the Quantum Lens", date: "Sep 15, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <p className="text-gray-700 mb-4">
              Discover key insights on how to enhance your life through the
              power of Quantum Success principles.
            </p>
            <button className="text-purple-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
