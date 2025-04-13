
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-noizify-blue">Democratizing</span> Clean <br className="hidden md:block" /> 
            Energy Through <span className="text-noizify-orange">Noise</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-8">
            Noizify empowers communities to transform environmental noise pollution
            into sustainable electrical energy, making clean power accessible to
            everyone, everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-noizify-blue hover:bg-noizify-blue/90">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group">
              How It Works
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-noizify-blue">85%</p>
              <p className="text-gray-600">Energy Efficiency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-noizify-purple">3 hrs</p>
              <p className="text-gray-600">Device Charging</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-noizify-orange">30dB</p>
              <p className="text-gray-600">Noise Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
