
import { Button } from "@/components/ui/button";

const CoursePreview = () => {
  const blueprintSections = [
    {
      title: "Strength Training",
      description: "Build lean muscle and functional power with safe, scalable bodyweight exercises.",
      imageAlt: "Person doing push-ups or air squats outdoors",
      imageUrl: "/lovable-uploads/b0167f5c-b7c2-4bd6-8037-0e62d60e1eea.png"
    },
    {
      title: "Mobility & Flexibility", 
      description: "Restore range of motion and reduce joint stiffness with dynamic, everyday movement drills.",
      imageAlt: "Someone doing a deep lunge stretch or yoga-style flow",
      imageUrl: "/lovable-uploads/ed55299a-5ae1-4857-8b04-9de274ffa9e5.png"
    },
    {
      title: "Balance & Coordination",
      description: "Train stability, control, and fall-prevention through gentle, mindful balance practices.",
      imageAlt: "One-leg stance, or soft barefoot balance on a log or mat",
      imageUrl: "/lovable-uploads/a28e64a1-6897-4036-bcd6-06887c1f8d2d.png"
    },
    {
      title: "High-Intensity Longevity Training",
      description: "Short bursts of controlled intensity to boost endurance, metabolism, and cardiovascular health.",
      imageAlt: "Person doing quick bodyweight cardio or interval-style movement",
      imageUrl: "/lovable-uploads/b49a3f07-6fd5-4735-af8f-2a7ede4796c0.png"
    },
    {
      title: "Nutrition Guidance",
      description: "Learn simple, powerful food swaps and habits that fuel your body and protect your cells.",
      imageAlt: "Healthy colorful meal or hands preparing whole food ingredients",
      imageUrl: "/lovable-uploads/26c6da67-f166-40cb-b6b8-55884c998c65.png"
    },
    {
      title: "Supplement Protocol",
      description: "Discover proven, longevity-boosting supplements to support recovery, cognition, and vitality.",
      imageAlt: "Daily pill organizer with clean supplement bottles or ingredients",
      imageUrl: "/lovable-uploads/985eb4af-953a-4665-b2cd-d71af018a5aa.png"
    },
    {
      title: "Lifestyle Habits",
      description: "Layer in restorative rituals like cold showers, sleep optimization, journaling, and sun exposure.",
      imageAlt: "Sunrise walk, journaling by a window, or peaceful moment of self-care",
      imageUrl: "/lovable-uploads/61d6c2c8-e986-415b-97f4-0a0cf3d6c344.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-stone-800">
          Your Complete Blueprint to <span className="text-amber-600">Aging in Reverse</span>
        </h2>
        
        <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
          Over 20 days, this program will guide you through evidence-based strategies to regain strength, mobility, energy, and confidence — using only your bodyweight and a handful of high-impact habits designed to help you age in reverse.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blueprintSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-stone-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {section.imageUrl ? (
                  <img 
                    src={section.imageUrl} 
                    alt={section.imageAlt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-stone-500">
                    <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-2"></div>
                    <p className="text-xs font-medium px-2">{section.imageAlt}</p>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{section.title}</h3>
              <p className="text-stone-600 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Start Your Blueprint Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
