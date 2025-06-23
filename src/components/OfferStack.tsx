
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OfferStack = () => {
  const included = [
    "20 daily follow-along videos (HD quality, professionally produced)",
    "20 downloadable trackers, guides, & habit PDFs",
    "7 biological age testing benchmarks with tracking sheets",
    "Bonus: 5 mobility & flow routines for active recovery",
    "Bonus: Longevity nutrition quick-start guide",
    "Lifetime access to all materials and future updates",
    "Private Facebook community access",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Everything You Need to Start <span className="text-amber-400">Aging in Reverse</span>
        </h2>
        <p className="text-xl mb-12 text-stone-300">
          Here's everything included in The Benjamin Button Blueprint:
        </p>
        
        <div className="bg-white text-stone-800 rounded-2xl p-8 shadow-2xl mb-8">
          <div className="space-y-4 mb-8">
            {included.map((item, index) => (
              <div key={index} className="flex items-center text-left">
                <div className="bg-amber-600 rounded-full p-1 flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-stone-700">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-stone-200 pt-6">
            <p className="text-2xl font-bold mb-2">Total Value: <span className="line-through text-stone-500">$297</span></p>
            <p className="text-4xl font-bold text-amber-600 mb-6">Your Investment: Only $47</p>
            <p className="text-sm text-stone-500 mb-6">One-time payment • Lifetime access • 30-day guarantee</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          Yes! I Want the Blueprint for $47
        </Button>
        
        <p className="text-sm text-stone-400 mt-4">
          Secure checkout • Instant access after payment
        </p>
      </div>
    </section>
  );
};

export default OfferStack;
