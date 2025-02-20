const steps = [
  {
    title: "Search Medicines",
    description: "Search for medicines or generic alternatives"
  },
  {
    title: "Compare Prices",
    description: "Compare prices across different stores and find the best deals"
  },
  {
    title: "Find Nearby Stores",
    description: "Locate the nearest Jana Aushadhi Kendra with real-time availability"
  },
  {
    title: "Save Time & Money",
    description: "Get your medicines at the most affordable prices, hassle-free"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-4">
              <div className="bg-accent text-white w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
