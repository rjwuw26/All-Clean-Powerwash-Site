import ServiceCard from '@/components/ServiceCard';

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
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 text-center">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <ServiceCard
            title="Driveway Cleaning"
            description="Remove dirt, grime, and non-oil/rust stains from your driveway to enhance appeal."
          />
          <ServiceCard
            title="Patio Cleaning"
            description="Revitalize your patio by eliminating mold, mildew, and dirt buildup."
          />
          <ServiceCard
            title="Deck Cleaning"
            description="Restore your deck's natural beauty with light washing to remove dirt and algae."
          />
        </div>
      </section>

      {/* Mini About Me / Intro */}
      <section className="py-20 bg-gray-500 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="max-w-2x1 max-auto text-lg">
          Reliable service, modern equipment, and unbeatable results. All Clean Powerwash
          delivers fast, professional cleaning you can trust.
        </p>
      </section>
    </main>
  );
}