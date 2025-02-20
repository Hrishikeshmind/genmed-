const faqs = [
  "What is Jana Aushadhi Kendra?",
  "How do I find the nearest store?",
  "Are generic medicines safe?",
  "How much can I save on medicines?"
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-800">{faq}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
