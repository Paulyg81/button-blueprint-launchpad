
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
      answer: "No gym required. Every session is designed to be done at home using only your bodyweight."
    },
    {
      question: "Is this science-based?",
      answer: "Yes. Every element of this program is backed by research in exercise physiology, neurology, and aging science."
    },
    {
      question: "How long is each daily session?",
      answer: "Each session takes 15–20 minutes and includes education, movement, and reflection."
    },
    {
      question: "Can I go at my own pace?",
      answer: "100%. You get lifetime access — whether you go daily, weekly, or repeat modules, it's designed to fit your life."
    },
    {
      question: "Will it work for someone over 50?",
      answer: "Absolutely. In fact, many of our most successful participants are 50, 60, even 70+. It's never too late to get stronger, more mobile, and biologically younger."
    },
    {
      question: "What if I've tried programs before and nothing stuck?",
      answer: "This isn't a quick fix — it's a complete system. You'll not only move differently but think differently. We give you the tools to make it stick, from habit stacking to biological feedback loops."
    },
    {
      question: "Can I do this if I have low energy or joint pain?",
      answer: "Yes. This program is intentionally gentle yet powerful. Each session includes modifications, and many clients report increased energy and reduced pain within the first week."
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
