import React from "react";

export default function EcoFindsLandingPage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shop Sustainably. Sell Smart. Live Greener.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Discover pre-loved treasures, save money, and make a positive impact
          on the planet — all in one marketplace.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white">
            Start Exploring
          </button>
          <button className="px-8 py-3 rounded-2xl border border-green-600 text-green-700 hover:bg-green-100">
            Sell with EcoFinds
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">🌍 Eco-Friendly</h3>
          <p>Reduce waste & carbon footprint.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">💸 Affordable Finds</h3>
          <p>High-quality items at lower prices.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-2xl">
          <h3 className="font-semibold text-xl mb-2">🤝 Community-Powered</h3>
          <p>Buy & sell with like-minded people.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">1. Browse</h3>
            <p>Discover unique fashion, electronics, décor & more.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">2. Buy</h3>
            <p>Shop securely through our trusted system.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">3. Sell</h3>
            <p>List your unused items and earn extra income.</p>
          </div>
        </div>
        <button className="mt-8 px-8 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white">
          Join the Movement Today
        </button>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Community Says
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="italic">
              “I’ve saved money and feel good knowing I’m shopping sustainably.”
            </p>
            <p className="mt-4 font-semibold">– Priya, EcoFinds user</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="italic">
              “Selling on EcoFinds is easy, and I’ve met amazing eco-conscious
              buyers.”
            </p>
            <p className="mt-4 font-semibold">– Arjun, Seller</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Together, We Make a Difference
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Every item you buy or sell keeps another product out of landfills.
          Together, we’ve already saved{" "}
          <span className="font-bold text-green-600">50,000+ items</span> from
          waste!
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Shop Smarter & Live Greener?
        </h2>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-2xl bg-white text-green-700 hover:bg-gray-100">
            Explore Now
          </button>
          <button className="px-8 py-3 rounded-2xl border border-white hover:bg-green-700">
            Start Selling
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-green-900 text-gray-200 text-center">
        <p className="mb-4">EcoFinds – Where Sustainability Meets Style.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#">About</a>
          <a href="#">How It Works</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
