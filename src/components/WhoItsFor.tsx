
import { Check } from "lucide-react";

const WhoItsFor = () => {
  const targetAudience = [
    "You want to look 10+ years younger without expensive treatments",
    "You're tired of feeling older than you actually are",
    "You want boundless energy that lasts all day long",
    "You're ready to turn back the clock on aging naturally",
    "You want to move with the grace and vitality of your younger self",
    "You're committed to just 20 minutes a day for total transformation"
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Is This For You?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {targetAudience.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="bg-blue-600 rounded-full p-2 flex-shrink-0 mr-4">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700 font-medium text-left">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
