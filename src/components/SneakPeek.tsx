
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const SneakPeek = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          Want a Sneak Peak?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get a glimpse of what's inside the Benjamin Button Blueprint and see how you can start your transformation today.
        </p>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/XuyONOiml7g"
              title="Benjamin Button Blueprint Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          3 minute preview • No signup required
        </p>
      </div>
    </section>
  );
};

export default SneakPeek;
