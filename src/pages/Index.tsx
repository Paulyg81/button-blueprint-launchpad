
import Hero from "@/components/Hero";
import CoursePreview from "@/components/CoursePreview";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
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
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <header className="bg-gradient-to-r from-amber-600 to-stone-700 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            The Benjamin Button Blueprint Revealed
          </h1>
        </div>
      </header>
      <Hero />
      <CoursePreview />
      <Benefits />
      <SocialProof />
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
