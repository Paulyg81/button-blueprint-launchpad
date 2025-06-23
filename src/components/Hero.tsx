
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
            className="bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-6 text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-auto"
          >
            Unlock The Blueprint for $47
          </Button>
        </div>
        <div className="relative">
          <div className="rounded-2xl aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/928321ef-2e54-4c44-9026-ab2cf176c2ba.png" 
              alt="Paul - Your Longevity Coach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
