
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
              I've helped hundreds of people over 35 build strong, mobile, pain-free bodies that age gracefully. After years of research and real-world testing, this is my best, most complete program.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              The Benjamin Button Blueprint isn't just another fitness program—it's a scientifically-backed system that addresses the root causes of aging, not just the symptoms.
            </p>
          </div>
          <div className="relative">
            <div className="bg-stone-200 rounded-2xl aspect-[4/5] flex items-center justify-center shadow-2xl">
              <div className="text-center text-stone-500">
                <div className="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-4"></div>
                <p className="text-lg font-medium">Coach Paul</p>
                <p className="text-sm">Professional Headshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourCoach;
