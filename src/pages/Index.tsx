
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import NoiseZonesSection from "@/components/NoiseZonesSection";
import InnovationSection from "@/components/InnovationSection";
import PreOrderSection from "@/components/PreOrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LeaderboardSection />
      <NoiseZonesSection />
      <InnovationSection />
      <PreOrderSection />
      <Footer />
    </div>
  );
};

export default Index;
