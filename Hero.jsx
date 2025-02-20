export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Making Healthcare
          <br />
          <span className="text-accent">Accessible and Affordable</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Locate nearby Jana Aushadhi Kendras, compare medicine prices, and get AI-powered
          <br />
          prescription assistance all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-600">
            Find Nearby Stores
          </button>
          <button className="bg-white text-accent px-8 py-3 rounded-lg border-2 border-accent hover:bg-gray-100">
            Compare Prices
          </button>
        </div>
      </div>
    </section>
  )
}
