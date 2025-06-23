
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
import SneakPeek from "@/components/SneakPeek";
import TestimonialWall from "@/components/TestimonialWall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
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
      <SneakPeek />
      <TestimonialWall />
      <Footer />
    </div>
  );
};

export default Index;
