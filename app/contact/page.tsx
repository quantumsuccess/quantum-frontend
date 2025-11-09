export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        We’d love to hear from you! Reach out for collaborations, partnerships,
        or general inquiries.
      </p>
      <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32" />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
