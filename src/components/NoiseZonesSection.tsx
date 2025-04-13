
import { MapPin, Volume2, Star, TrendingUp } from "lucide-react";

interface ZoneProps {
  name: string;
  rating: number;
  energyPotential: string;
  icon: React.ReactNode;
  color: string;
}

const NoiseZonesSection = () => {
  const zones: ZoneProps[] = [
    {
      name: "Urban Centers",
      rating: 5,
      energyPotential: "Very High",
      icon: <MapPin size={20} />,
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Highway Corridors",
      rating: 4,
      energyPotential: "High",
      icon: <Volume2 size={20} />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Public Transit Hubs",
      rating: 4,
      energyPotential: "High",
      icon: <Star size={20} />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Industrial Areas",
      rating: 3,
      energyPotential: "Medium",
      icon: <TrendingUp size={20} />,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="noise-zones" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best <span className="text-noizify-purple">Noise Zones</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover optimal locations for maximum energy harvesting with your Noizify device.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`p-3 rounded-full ${zone.color} inline-block mb-4`}>
                {zone.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2">{zone.name}</h3>
              
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-600 mr-2">Rating:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={12} 
                      fill={i < zone.rating ? "#FFC107" : "none"} 
                      stroke={i < zone.rating ? "#FFC107" : "#CBD5E0"} 
                      className="mr-0.5"
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Energy Potential:</span>
                <span className="text-sm font-medium">{zone.energyPotential}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4">Energy Collection Tips</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="p-2 bg-green-100 text-green-600 rounded-full mr-3">
                <Volume2 size={16} />
              </div>
              <div>
                <h4 className="font-medium">Peak Hours</h4>
                <p className="text-sm text-gray-600">
                  For urban areas, 7-9 AM and 4-7 PM offer the highest noise levels for energy harvesting.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="font-medium">Strategic Placement</h4>
                <p className="text-sm text-gray-600">
                  Position your device near windows facing busy streets or in rooms with consistent ambient noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoiseZonesSection;
