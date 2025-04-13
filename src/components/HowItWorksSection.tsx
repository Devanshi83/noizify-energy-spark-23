
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How <span className="text-noizify-blue">Noizify</span> Works
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our innovative technology transforms ambient noise into clean, usable energy
            through a simple but powerful four-step process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="process-step process-step-1">
            <div className="text-5xl font-bold opacity-30 mb-4">01</div>
            <h3 className="text-xl font-bold mb-3">Sound Collection</h3>
            <p className="text-sm">
              Advanced microphones capture ambient sound waves from the environment.
            </p>
          </div>
          
          {/* Arrow connector - Only visible on desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="text-gray-300" size={24} />
          </div>
          
          {/* Step 2 */}
          <div className="process-step process-step-2">
            <div className="text-5xl font-bold opacity-30 mb-4">02</div>
            <h3 className="text-xl font-bold mb-3">Conversion Process</h3>
            <p className="text-sm">
              Piezoelectric materials convert sound vibrations into electrical energy.
            </p>
          </div>
          
          {/* Arrow connector - Only visible on desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="text-gray-300" size={24} />
          </div>
          
          {/* Step 3 */}
          <div className="process-step process-step-3">
            <div className="text-5xl font-bold opacity-30 mb-4">03</div>
            <h3 className="text-xl font-bold mb-3">Energy Storage</h3>
            <p className="text-sm">
              Harvested energy is stored in high-efficiency capacitors for later use.
            </p>
          </div>
          
          {/* Arrow connector - Only visible on desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="text-gray-300" size={24} />
          </div>
          
          {/* Step 4 */}
          <div className="process-step process-step-4">
            <div className="text-5xl font-bold opacity-30 mb-4">04</div>
            <h3 className="text-xl font-bold mb-3">Power Delivery</h3>
            <p className="text-sm">
              Stored power is delivered to devices through standard USB connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
