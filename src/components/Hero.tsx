
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-stone-800">
            Reverse Your Biological Age in Just{" "}
            <span className="text-amber-600">20 Days</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-6 max-w-2xl">
            (No Gym. No Guesswork.)
          </p>
          <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl">
            A full-lifestyle, science-backed blueprint to look, move, and feel younger—without equipment, supplements, or complicated routines.
          </p>
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Unlock The Blueprint for $47
          </Button>
        </div>
        <div className="relative">
          <div className="bg-stone-200 rounded-2xl aspect-[4/5] flex items-center justify-center shadow-2xl">
            <div className="text-center text-stone-500">
              <div className="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-4"></div>
              <p className="text-lg font-medium">Hero Image Placeholder</p>
              <p className="text-sm">Paul coaching outdoors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
