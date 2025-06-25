
const Testimonials = () => {
  const testimonialImages = [
    {
      src: "/lovable-uploads/cd016c67-08b8-4381-9b29-941bef8cf128.png",
      alt: "Natasha testimonial"
    },
    {
      src: "/lovable-uploads/3ee963e2-95ba-48b4-96c4-96f5502ee46e.png",
      alt: "Julian testimonial"
    },
    {
      src: "/lovable-uploads/d3e1245f-de51-4dc6-943a-8a00fff4d1bf.png",
      alt: "Romy testimonial"
    },
    {
      src: "/lovable-uploads/38676839-51b8-4664-ae83-55b756cd7fec.png",
      alt: "Andrew testimonial"
    },
    {
      src: "/lovable-uploads/5fa9feb1-0ced-417d-9fc6-55c17464e7ad.png",
      alt: "Julie testimonial"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          What Students Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonialImages.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={testimonial.src} 
                alt={testimonial.alt} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
