
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const SneakPeek = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-amber-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
          Want a Sneak Peak?
        </h2>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
          Get a glimpse of what's inside the Benjamin Button Blueprint and see how you can start your transformation today.
        </p>
        
        <div className="relative bg-stone-800 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-6 h-6 mr-2" />
              Watch Preview
            </Button>
          </div>
        </div>
        
        <p className="text-sm text-stone-500 mt-4">
          3 minute preview • No signup required
        </p>
      </div>
    </section>
  );
};

export default SneakPeek;
