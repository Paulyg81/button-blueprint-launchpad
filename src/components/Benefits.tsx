
import { Button } from "@/components/ui/button";
import { Badge, Clock, Heart, Star, User, Eye } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: Badge, text: "Reverse signs of aging" },
    { icon: Star, text: "Boost energy & strength" },
    { icon: Clock, text: "Sleep better" },
    { icon: User, text: "Improve posture & joint health" },
    { icon: Heart, text: "Regain balance & coordination" },
    { icon: Eye, text: "Feel more youthful & mobile" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-stone-800">
          This Blueprint Will Help You…
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <benefit.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-stone-700">{benefit.text}</p>
            </div>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start My Transformation Today
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
