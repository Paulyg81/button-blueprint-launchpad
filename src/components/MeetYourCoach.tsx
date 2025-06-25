
const MeetYourCoach = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
              Hey, I'm <span className="text-amber-600">Paul</span> — Your Longevity Coach
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              For over 25 years, I've helped thousands of people defy the rules of aging — not with fads or gimmicks, but with science, movement, and habit mastery.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              As a longevity coach, I specialize in helping people over 35 build strong, mobile, pain-free bodies that are built to last. I've worked with busy parents, professionals, and everyday people who want to stay active, independent, and full of life — not just now, but for decades to come.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The Benjamin Button Blueprint is the culmination of everything I've learned — a powerful, step-by-step system designed to reverse biological aging and help you reclaim energy, strength, and confidence from the inside out.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              If you want to feel younger, move better, and show up fully for the people you love — this is where your comeback begins.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/1ebdd04f-d93c-46e2-bb50-026c269b3854.png" 
                alt="Coach Paul - Professional Headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourCoach;
