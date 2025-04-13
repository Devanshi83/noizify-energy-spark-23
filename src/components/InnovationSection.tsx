
import { LightbulbIcon, Sparkles, Beaker, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const InnovationSection = () => {
  return (
    <section id="innovation" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
            <LightbulbIcon className="text-yellow-600" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovation at <span className="text-noizify-blue">Noizify</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're pioneering the transformation of environmental noise pollution into sustainable energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white rounded-full mr-3">
                <Beaker className="text-noizify-purple" size={24} />
              </div>
              <h3 className="text-xl font-bold">R&D Updates</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-1">Enhanced Piezoelectric Materials</h4>
                <p className="text-sm text-gray-600">
                  Our latest materials improve energy conversion efficiency by 23% compared to previous generations.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-1">Miniaturization Progress</h4>
                <p className="text-sm text-gray-600">
                  Next-gen devices will be 40% smaller while maintaining the same power output capacity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white rounded-full mr-3">
                <Building2 className="text-noizify-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold">Smart City Collaborations</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-1">Urban Infrastructure Integration</h4>
                <p className="text-sm text-gray-600">
                  Working with 3 major cities to integrate Noizify technology into traffic lights and public transit stations.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-1">Community Energy Hubs</h4>
                <p className="text-sm text-gray-600">
                  Pilot program launching to create neighborhood energy collection points in high-noise urban areas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-white rounded-full mb-4">
              <Users className="text-noizify-orange" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Community Innovations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our users are finding creative ways to maximize their noise-to-energy conversion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Window-Mount Solution</h4>
              <p className="text-sm text-gray-600 mb-3">
                User-designed window attachment that captures street noise while providing additional sound insulation.
              </p>
              <div className="text-sm text-noizify-blue font-medium">
                By Maria T. from Boston
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Public Transit Kit</h4>
              <p className="text-sm text-gray-600 mb-3">
                Portable attachment designed for commuters to harvest energy during daily train and bus trips.
              </p>
              <div className="text-sm text-noizify-blue font-medium">
                By James K. from Chicago
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">School Cafeteria Array</h4>
              <p className="text-sm text-gray-600 mb-3">
                Teacher's project placing multiple devices in school cafeterias to power classroom electronics.
              </p>
              <div className="text-sm text-noizify-blue font-medium">
                By Robert M. from Portland
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-noizify-blue/10 to-noizify-purple/10 rounded-xl p-8 text-center">
          <div className="inline-block p-3 bg-white rounded-full mb-4">
            <Sparkles className="text-noizify-blue" size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-3">Join Our Innovation Community</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Have ideas for improving Noizify or new applications for our technology?
            Be part of our community-driven innovation process.
          </p>
          <Button className="bg-noizify-blue hover:bg-noizify-blue/90">
            Submit Your Idea
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
