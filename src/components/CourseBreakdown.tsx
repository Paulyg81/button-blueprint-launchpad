
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CourseBreakdown = () => {
  const keyDays = [
    { 
      title: "Discover Your Real Age (and How to Change It)", 
      description: "Unlock the 7 biological markers that matter more than your birthday — and test where you stand." 
    },
    { 
      title: "Build a Body That Moves Like It's 20 Years Younger", 
      description: "Train your legs, hips, and glutes to restore strength, mobility, and joint freedom — without weights." 
    },
    { 
      title: "Stand Taller, Breathe Deeper, Feel Lighter", 
      description: "Fix your posture, activate your core, and create a younger, stronger foundation." 
    },
    { 
      title: "Become Unshakably Strong", 
      description: "Prevent falls, protect your joints, and move with confidence at any age." 
    },
    { 
      title: "Recover Like You're 25 Again", 
      description: "Learn how recovery — not just exercise — is your most powerful anti-aging tool." 
    },
    { 
      title: "Unlock Your Fascia and Reclaim Your Flexibility", 
      description: "Stretch, hydrate, and release years of tension trapped in your connective tissue." 
    },
    { 
      title: "Speed Up Your Brain-Body Connection", 
      description: "Boost reaction time, coordination, and mental clarity through movement." 
    },
    { 
      title: "Retest Your Age: See Just How Far You've Come", 
      description: "Measure your new biological age and prove that you really are aging in reverse." 
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          What You'll Learn Over <span className="text-blue-600">20 Days</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyDays.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-6 text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 h-auto"
          >
            Join the Blueprint
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdown;
