const testimonials = [
  {
    text: "Found affordable medicines for my parents. The price comparison feature helped me save significantly.",
    author: "Rajesh Kumar",
    location: "Delhi"
  },
  {
    text: "The store locator made it so easy to find Jana Aushadhi Kendras near me. Highly recommended!",
    author: "Priya Singh",
    location: "Mumbai"
  },
  {
    text: "Great platform for finding generic alternatives. The prescription upload feature is very convenient.",
    author: "Ankit Patel",
    location: "Ahmedabad"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="text-accent font-semibold">
                <p>{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
