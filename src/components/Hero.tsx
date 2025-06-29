
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Reverse Your Biological Age in Just{" "}
            <span className="text-blue-600">20 Days</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl">
            (No Gym. No Guesswork.)
          </p>
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl">
            A full-lifestyle, science-backed blueprint to look, move, and feel younger—without equipment, supplements, or complicated routines.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-6 text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-auto"
          >
            Unlock The Blueprint for $47
          </Button>
        </div>
        <div className="relative">
          <div className="rounded-2xl aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/5f010c5e-0ba2-41a3-8991-0dda5213c7df.png" 
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
