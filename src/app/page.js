export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Powerwashing Services</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Restore the beauty of your home wth trusted and affordable powerwashing.
        </p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Get a Free Quote</a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Will use <ServiceCard /> here later */}
          <div className="border p-6 rounded-xl shadow">Driveway Cleaning</div>
          <div className="border p-6 rounded-xl shadow">Patio Cleaning</div>
          <div className="border p-6 rounded-xl shadow">Deck Cleaning</div>
        </div>
      </section>

      {/* Mini About Me / Intro */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="max-w-2x1 max-auto text-lg">
          Reliable service, modern equipment, and unbeatable results. All Clean Powerwash
          delivers fast, professional cleaning you can trust.
        </p>
      </section>
    </main>
  );
}