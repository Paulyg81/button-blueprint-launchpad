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
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">
          This Blueprint Will Help You…
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-slate-800">{benefit.text}</p>
            </div>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-6 text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-auto"
        >
          Start My Transformation Today
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
