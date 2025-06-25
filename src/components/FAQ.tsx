
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need a gym or equipment?",
      answer: "Not at all! The entire program uses bodyweight movements and can be done in your living room. I've specifically designed this to work anywhere, anytime."
    },
    {
      question: "Is this science-based?",
      answer: "Absolutely. Every technique is backed by peer-reviewed research on longevity, cellular health, and biological aging. I reference the studies throughout the program."
    },
    {
      question: "How long is each daily session?",
      answer: "Each session is 15-25 minutes. They're designed to fit into even the busiest schedules while delivering maximum impact."
    },
    {
      question: "Can I go at my own pace?",
      answer: "Yes! You have lifetime access and can repeat days or take rest days as needed. The program adapts to your schedule and fitness level."
    },
    {
      question: "Will it work for someone over 50?",
      answer: "This program is especially effective for people 35+. Many of my best results have come from students in their 50s, 60s, and beyond."
    },
    {
      question: "What if I have injuries or limitations?",
      answer: "Each session includes modifications for common limitations. However, always consult your healthcare provider before starting any new program."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! I offer a 30-day money-back guarantee. Try the program risk-free and see the results for yourself."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-lg px-6 shadow-md"
            >
              <AccordionTrigger className="text-left font-semibold text-stone-800 hover:text-amber-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
