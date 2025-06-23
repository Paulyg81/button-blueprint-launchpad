
import { Button } from "@/components/ui/button";

const CoursePreview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-stone-800">
          Here's What You Get: <span className="text-amber-600">20 Days to Longevity Mastery</span>
        </h2>
        
        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mb-12">
          {Array.from({ length: 20 }, (_, i) => (
            <div 
              key={i} 
              className="bg-stone-100 rounded-lg aspect-square flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-8 h-8 bg-amber-600 rounded-full mx-auto mb-2"></div>
                <p className="text-xs md:text-sm font-semibold text-stone-700">
                  Day {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
        >
          See What's Inside Each Day
        </Button>
      </div>
    </section>
  );
};

export default CoursePreview;
