
import { Medal, Trophy, Award } from "lucide-react";

interface LeaderProps {
  name: string;
  points: number;
  position: number;
  avatar: string;
}

const LeaderboardSection = () => {
  const leaders: LeaderProps[] = [
    {
      name: "Alice Johnson",
      points: 200,
      position: 1,
      avatar: "A"
    },
    {
      name: "Bob Smith",
      points: 150,
      position: 2,
      avatar: "B"
    },
    {
      name: "Charlie Brown",
      points: 75,
      position: 3,
      avatar: "C"
    }
  ];

  return (
    <section id="leaderboard" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-noizify-orange">Leaderboard</span> & Rewards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of noise-to-energy pioneers and compete for rewards based on your energy contribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Leaderboard Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Weekly Leaderboard</h3>
              <span className="text-sm text-gray-500">Updated hourly</span>
            </div>
            
            <div className="space-y-4">
              {leaders.map((leader) => (
                <div 
                  key={leader.position} 
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mr-4 flex items-center justify-center">
                    {leader.position === 1 && <Trophy className="text-yellow-500" size={24} />}
                    {leader.position === 2 && <Medal className="text-gray-400" size={24} />}
                    {leader.position === 3 && <Award className="text-amber-700" size={24} />}
                    {leader.position > 3 && <span className="font-bold">{leader.position}</span>}
                  </div>
                  
                  <div className="flex items-center flex-1">
                    <div className="w-10 h-10 bg-noizify-blue text-white rounded-full flex items-center justify-center mr-3">
                      {leader.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{leader.name}</p>
                      <p className="text-sm text-gray-500">{leader.position === 1 ? '1st' : leader.position === 2 ? '2nd' : '3rd'} Place</p>
                    </div>
                  </div>
                  
                  <div className="ml-auto flex items-center">
                    <span className="font-bold mr-2">{leader.points}</span>
                    <div className="w-6 h-6 bg-noizify-blue rounded-full flex items-center justify-center text-white text-xs">
                      ⚡
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Current user's position */}
              <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="mr-4 w-6 text-center">
                  <span className="font-bold">20</span>
                </div>
                
                <div className="flex items-center flex-1">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    Y
                  </div>
                  <div>
                    <p className="font-medium">You</p>
                    <p className="text-sm text-gray-500">20th Place</p>
                  </div>
                </div>
                
                <div className="ml-auto flex items-center">
                  <span className="font-bold mr-2">35</span>
                  <div className="w-6 h-6 bg-noizify-blue rounded-full flex items-center justify-center text-white text-xs">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Rewards Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-bold mb-6">Rewards & Benefits</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="p-2 bg-yellow-100 text-yellow-600 rounded-full mr-3">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Top Contributors</h4>
                  <p className="text-sm text-gray-600">
                    Earn exclusive access to new Noizify products before public release.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 text-green-600 rounded-full mr-3">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Energy Credits</h4>
                  <p className="text-sm text-gray-600">
                    Convert your energy points into discounts on future purchases.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-full mr-3">
                  <Medal size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Community Impact</h4>
                  <p className="text-sm text-gray-600">
                    Every kWh generated contributes to community energy projects.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-center text-sm font-medium text-noizify-blue">
                  35 more points to reach next tier
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-noizify-blue h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
