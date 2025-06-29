
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OfferStack = () => {
  const included = [
    "20-day guided video curriculum combining movement, mindset & longevity science",
    "Real-time education on exercise, strength, fascia, breathwork & flexibility",
    "Step-by-step training in mobility, core, posture, and functional patterns",
    "Lifetime access to Yin-style recovery/stretching routines",
    "Nutrition & supplement guidance based on proven longevity principles",
    "Bonus: Biological age testing sequence (7 benchmark assessments to track progress)",
    "Retesting protocol to help guide your long-term personalized training plan",
    "Sleep, recovery & energy optimization protocols for the real world",
    "Lifetime access to all current and future material"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Everything You Need to Start <span className="text-blue-400">Aging in Reverse — For Real</span>
        </h2>
        <p className="text-xl mb-12 text-gray-300">
          Here's exactly what's included in your Benjamin Button Blueprint membership:
        </p>
        
        <div className="bg-white text-black rounded-2xl p-8 shadow-2xl mb-8">
          <div className="space-y-4 mb-8">
            {included.map((item, index) => (
              <div key={index} className="flex items-center text-left">
                <div className="bg-blue-600 rounded-full p-1 flex-shrink-0 mr-4">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-2xl font-bold mb-2">Total Value: <span className="line-through text-gray-500">~$297~</span></p>
            <p className="text-4xl font-bold text-blue-600 mb-6">Your Investment: Only $47</p>
            <p className="text-sm text-gray-500 mb-6">One-time payment • Lifetime access • 7-test starting protocol included</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-black px-16 py-8 text-2xl md:text-3xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 h-auto"
        >
          Yes! I Want the Blueprint for $47
        </Button>
        
        <p className="text-sm text-gray-400 mt-4">
          Secure checkout • Instant access after payment
        </p>
      </div>
    </section>
  );
};

export default OfferStack;
