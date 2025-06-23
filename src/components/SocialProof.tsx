
import { Star, Users, CheckCircle, Award } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Students Transformed" },
    { icon: Star, number: "4.9/5", label: "Average Rating" },
    { icon: CheckCircle, number: "98%", label: "Success Rate" },
    { icon: Award, number: "50+", label: "Success Stories" }
  ];

  const testimonialImages = [
    "/lovable-uploads/22da5eea-4603-496f-9246-c9be49ec2059.png",
    "/lovable-uploads/117aaf11-e51d-43a0-9277-7abe4f31e31a.png",
    "/lovable-uploads/1d23888d-8a55-4578-a993-2a8b12faabf0.png"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-100 to-amber-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
            Join <span className="text-amber-600">Thousands</span> Who've Already Transformed
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Real people, real results. See why our blueprint is trusted by thousands worldwide.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-stone-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonialImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image} 
                alt={`Transformation testimonial ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-sm text-stone-500 mb-4">As featured in:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-stone-400 font-semibold">Health Magazine</div>
            <div className="text-stone-400 font-semibold">Wellness Today</div>
            <div className="text-stone-400 font-semibold">Longevity News</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
