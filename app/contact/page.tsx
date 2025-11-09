import LandingLayout from "../components/LandingLayout";

export default function Contact() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-card to-primary-start/5 text-text-primary">
        <main className="pt-24">
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-4">
                  Contact <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">Us</span>
                </h1>
                <p className="text-xl text-text-primary/70">
                  We'd love to hear from you! Reach out for collaborations, partnerships,
                  or general inquiries.
                </p>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border-light">
                <form className="space-y-6">
                  <div>
                    <label className="block text-text-primary font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start bg-card text-text-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start bg-card text-text-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-semibold mb-2">
                      Message
                    </label>
                    <textarea 
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start h-32 bg-card text-text-primary transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-start to-primary-end text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LandingLayout>
  );
}
