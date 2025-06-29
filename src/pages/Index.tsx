
import Hero from "@/components/Hero";
import CoursePreview from "@/components/CoursePreview";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import SneakPeek from "@/components/SneakPeek";
import CourseBreakdown from "@/components/CourseBreakdown";
import Testimonials from "@/components/Testimonials";
import WhoItsFor from "@/components/WhoItsFor";
import MeetYourCoach from "@/components/MeetYourCoach";
import FAQ from "@/components/FAQ";
import OfferStack from "@/components/OfferStack";
import TestimonialWall from "@/components/TestimonialWall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <img 
              src="/lovable-uploads/a6ab7cab-9acb-4121-9fe5-881ae8bbf5a1.png" 
              alt="HERO Brand Logo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            The Benjamin Button Blueprint Revealed
          </h1>
        </div>
      </header>
      <Hero />
      <CoursePreview />
      <Benefits />
      <SocialProof />
      <SneakPeek />
      <CourseBreakdown />
      <Testimonials />
      <WhoItsFor />
      <MeetYourCoach />
      <FAQ />
      <OfferStack />
      <TestimonialWall />
      <Footer />
    </div>
  );
};

export default Index;
