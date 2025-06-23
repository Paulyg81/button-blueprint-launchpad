
const SneakPeek = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
          Want a <span className="text-amber-600">Sneak Peek?</span>
        </h2>
        <p className="text-lg text-stone-600 mb-12">
          Watch this exclusive walkthrough of Day 1 from The Benjamin Button Blueprint
        </p>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-stone-200 rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
            <div className="text-center text-stone-500">
              <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
              <p className="text-lg font-medium">Video Preview Placeholder</p>
              <p className="text-sm">Day 1 Walkthrough</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
