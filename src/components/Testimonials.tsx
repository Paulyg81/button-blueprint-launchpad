
const Testimonials = () => {
  const testimonialImages = [
    {
      src: "/lovable-uploads/3c838c3b-9db6-4303-96bd-16bd4abadfc5.png",
      alt: "Natasha testimonial"
    },
    {
      src: "/lovable-uploads/4112ac3e-8776-46c7-9742-fa64bc3a2298.png",
      alt: "Julian testimonial"
    },
    {
      src: "/lovable-uploads/4248f6f2-2f7f-43a3-857d-09f558251a9d.png",
      alt: "Romy testimonial"
    },
    {
      src: "/lovable-uploads/106f18a6-75af-4140-b591-2fe508106a90.png",
      alt: "Susie testimonial"
    },
    {
      src: "/lovable-uploads/1f8ee829-0176-4cd4-9dce-e83a25d7a0f1.png",
      alt: "Andrew testimonial"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          What Students Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialImages.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={testimonial.src} 
                alt={testimonial.alt} 
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
