import { useState } from "react";

const TestimonialWall = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const testimonials = [
    {
      quote: "I really want to say a big thanks – I couldn't have lost 12kgs in 12 weeks without the program. It has got me up and about and I'm feeling so much better than I did before I started. Serious life-changer!",
      name: "Simon",
      title: "Lawyer"
    },
    {
      quote: "I'm in my 14th week and continue to love the support Dan and Paul have given me. Dan and Paul have identified and created an awesome program for getting Dads to where they want to be physically, emotionally and mentally. It is a very holistic program where they both have your back and immediately delivers value within a week. The weekly check-ins, daily chats combined with the nutrition, workout training and 1:1 approach make this an invaluable program for a Dad. Can't recommend it enough.",
      name: "Nick",
      title: "Digital Marketing Manager"
    },
    {
      quote: "Hey Paul. Thought you might like to know that I ordered size 36 jeans the other day. They arrived today and were too big. Went to change them and I fit size 34. When I started 36 were right but just fit, but 38 was a better fit. I can't remember when I was 34. When I shopped in America is 2014, I was 36. That's as far back as I remember",
      name: "Anonymous Client",
      title: ""
    },
    {
      quote: "I was overweight and slothful. The ability to move freely was diminished and some of the joints started to hurt. As well I always felt tired and lacked the energy to get up and go! I was certainly feeling my age. I needed a 'circuit breaker', that would support, guide and inspire. I lost weight (over 6kg) and learned how to enjoy sensible eating without having to permanently give up some of life's pleasure of food and drink. Exercising is no longer a chore, but is fun and something to look forward to. I look better and I feel better. The HERO team are supportive, and creative – they will tailor a programme that is just right for you. And with their encouragement and tremendous support, you can achieve fantastic results. HERO coaching and support is going to be there all the way -and it will be delivered in spades.",
      name: "Steve",
      title: "Architect"
    },
    {
      quote: "Hero has been an absolute life changer for me. I came to this program 8 months after my daughter was born. I was exhausted, overweight and struggling to make the wellbeing changes I knew I needed - I was stuck. I turned to Paul and Dan for support after seeing the real-life results that previous Hero graduates had achieved and it was one of the best decisions I have ever made. The results have been incredible!",
      name: "Jarod",
      title: "Counsellor"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-400 to-amber-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-stone-800">
          Join Thousands Who Are Already <span className="text-amber-600">Aging in Reverse</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedCards.includes(index);
            const shouldTruncate = testimonial.quote.length > 200;
            const displayText = isExpanded || !shouldTruncate 
              ? testimonial.quote 
              : truncateText(testimonial.quote, 200);

            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Name and Title */}
                  <div className="mb-4">
                    <h4 className="font-bold text-stone-800 text-base">{testimonial.name}</h4>
                    {testimonial.title && (
                      <p className="text-stone-600 text-sm">{testimonial.title}</p>
                    )}
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="flex-grow">
                    <p className="text-stone-700 italic text-base leading-relaxed">
                      "{displayText}"
                    </p>
                    
                    {/* Read More/Less Button */}
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-2 transition-colors"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialWall;
