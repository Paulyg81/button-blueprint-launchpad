
import { Button } from "@/components/ui/button";

const CourseBreakdown = () => {
  const keyDays = [
    { day: 1, title: "Truth About Aging", description: "Understand the science behind biological aging and what you can control." },
    { day: 5, title: "Movement Fundamentals", description: "Build the foundation of longevity-focused movement patterns." },
    { day: 9, title: "Recovery Mastery", description: "Learn advanced recovery techniques for optimal cellular repair." },
    { day: 13, title: "Fascia & Flow", description: "Unlock mobility and flexibility through targeted fascia work." },
    { day: 16, title: "Energy Systems", description: "Optimize your metabolic health for sustained vitality." },
    { day: 18, title: "Re-Test & Measure", description: "Track your biological age improvements with key benchmarks." },
    { day: 19, title: "Integration Day", description: "Combine all elements into your personalized longevity routine." },
    { day: 20, title: "Longevity Lifestyle", description: "Create sustainable habits for lifelong youth and vitality." }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          What You'll Learn Over <span className="text-amber-600">20 Days</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyDays.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-stone-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {item.day}
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Blueprint
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdown;
