
const TestimonialWall = () => {
  const quickTestimonials = [
    "This program changed my life!",
    "Finally, something that actually works.",
    "I feel amazing and look younger.",
    "Best investment I've made for my health.",
    "Simple, effective, and life-changing.",
    "My energy levels are through the roof!",
    "I move better than I have in years.",
    "This is the fountain of youth!"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          Join Thousands Who Are Already <span className="text-amber-600">Aging in Reverse</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-amber-200 rounded-full mx-auto mb-4"></div>
              <p className="text-stone-700 italic font-medium">"{testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialWall;
