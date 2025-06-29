import { Star } from "lucide-react";

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
    <section className="py-24 px-4 bg-gradient-to-br from-stone-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
          What Students Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {testimonialImages.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 min-h-[400px] md:min-h-[500px] flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {testimonial.alt.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-slate-900">
                    {testimonial.alt.split(' ')[0]}
                  </h3>
                </div>
              </div>
              
              <div className="flex-1">
                <img 
                  src={testimonial.src} 
                  alt={testimonial.alt} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
