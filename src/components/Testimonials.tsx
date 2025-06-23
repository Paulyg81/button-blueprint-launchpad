
const Testimonials = () => {
  const testimonials = [
    {
      quote: "I feel 10 years younger after just 2 weeks. The daily sessions are perfect - not overwhelming but incredibly effective.",
      name: "Sarah M.",
      age: "42"
    },
    {
      quote: "This is the reset I needed. My energy is through the roof and my back pain is completely gone.",
      name: "Mark T.",
      age: "38"
    },
    {
      quote: "Every session is simple, doable, and powerful. I've tried so many programs but this one actually works.",
      name: "Jennifer L.",
      age: "45"
    },
    {
      quote: "The science behind this program convinced me, but the results blew me away. I move like I'm in my 20s again.",
      name: "David R.",
      age: "52"
    },
    {
      quote: "Finally, a program that fits into my busy schedule. 20 minutes a day changed everything.",
      name: "Lisa K.",
      age: "39"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          What Students Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <p className="font-semibold text-stone-800">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">Age {testimonial.age}</p>
                </div>
              </div>
              <p className="text-stone-700 italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
