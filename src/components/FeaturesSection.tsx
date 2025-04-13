
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart2, 
  Clock, 
  AlertCircle, 
  AreaChart,
  Leaf,
  ChevronRight,
  Activity,
  PieChart
} from "lucide-react";

interface TabProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("real-time");

  const tabs: TabProps[] = [
    {
      id: "real-time",
      title: "Real-Time Energy Tracking",
      icon: <Activity size={20} />,
      content: (
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-4">Monitor Your Energy Production</h4>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Current Output</span>
              <span className="font-bold text-noizify-blue">12.4 W</span>
            </div>
            <div className="w-full bg-white rounded-full h-3 mb-4">
              <div className="bg-noizify-blue h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span>0W</span>
              <span>15W</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Keep an eye on the energy harvested from noise in real-time and see exactly how much power you're generating.
            Our AI analyzes your usage patterns and offers personalized suggestions.
          </p>
          <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded border-l-2 border-noizify-blue">
            "Schedule your washing machine to 11 PM to save ₹50" or "Switch off the TV in
            the living room to save 0.5 kWh."
          </p>
        </div>
      )
    },
    {
      id: "carbon-insights",
      title: "Carbon Insights",
      icon: <Leaf size={20} />,
      content: (
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-4">Emission Dashboard</h4>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
            <h5 className="font-medium text-gray-700 mb-3">Carbon Emission Report</h5>
            <div className="h-32 w-full flex items-end justify-between gap-2 mb-2">
              <div className="bg-green-400 h-[60%] w-1/7 rounded-t"></div>
              <div className="bg-green-500 h-[45%] w-1/7 rounded-t"></div>
              <div className="bg-blue-400 h-[75%] w-1/7 rounded-t"></div>
              <div className="bg-blue-500 h-[90%] w-1/7 rounded-t"></div>
              <div className="bg-yellow-400 h-[70%] w-1/7 rounded-t"></div>
              <div className="bg-orange-400 h-[50%] w-1/7 rounded-t"></div>
              <div className="bg-orange-500 h-[30%] w-1/7 rounded-t"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Track your noise-converted energy savings, estimated CO₂ offset, and monthly community contributions through interactive visualizations.
          </p>
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div>
              <span className="text-sm text-gray-500">CO₂ Saved This Month</span>
              <p className="font-bold text-noizify-green">3.2 kg</p>
            </div>
            <Button variant="outline" size="sm">
              Share Badge <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      )
    },
    {
      id: "smart-alerts",
      title: "Smart Time Alerts",
      icon: <Clock size={20} />,
      content: (
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h4 className="text-xl font-bold mb-4">Optimize Your Energy Capture</h4>
          <div className="bg-gradient-to-r from-purple-50 to-red-50 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500 text-white p-2 rounded-full">
                <Clock size={24} />
              </div>
              <div>
                <h5 className="font-medium">Peak Time Alert</h5>
                <p className="text-sm text-gray-500">High energy demand period</p>
              </div>
            </div>
            <div className="space-y-3 mb-3">
              <div>
                <span className="text-sm text-gray-500">Next Peak Time</span>
                <p className="font-medium">Today, 6 PM - 9 PM</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Recommended Action</span>
                <p className="font-medium">Reduce appliance usage</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Receive intelligent notifications about optimal noise harvesting periods based on your environment, time, and traffic data via SMS or app notifications.
          </p>
          <div className="flex gap-2">
            <Button size="sm">Acknowledge</Button>
            <Button variant="outline" size="sm">Dismiss</Button>
          </div>
        </div>
      )
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features of <span className="text-noizify-blue">Noizify</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Noizify helps you track, optimize, and benefit from noise-to-energy conversion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-lg flex items-center gap-3 mb-1 transition-colors
                    ${activeTab === tab.id 
                      ? 'bg-noizify-blue/10 text-noizify-blue' 
                      : 'hover:bg-gray-100'}`}
                >
                  <div className={`p-2 rounded-full ${activeTab === tab.id ? 'bg-noizify-blue text-white' : 'bg-gray-100'}`}>
                    {tab.icon}
                  </div>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl h-full">
              {activeContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
