const Dashboard = () => {
  return (
    <div className="text-white">
      <div className="flex items-center mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-medium mb-1">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Today</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Yesterday</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Last 7d</button>
            <button className="px-3 py-1 bg-white/10 rounded text-sm text-white">Last 30d</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">This month</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-1">
            <div className="text-sm">CURRENT EARNINGS</div>
            <button className="ml-2 opacity-60 hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div className="text-2xl font-medium mb-1">$28</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-1">
            <div className="text-sm">STRIPCHAT SCHEME</div>
            <div className="ml-2 px-1.5 py-0.5 text-xs bg-green-400/20 text-green-400 rounded">REV</div>
          </div>
          <div className="text-2xl font-medium mb-1">20%</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center mb-1">
            <div className="text-sm">PAYOUT WILL BE AVAILABLE WHEN YOU EARN</div>
          </div>
          <div className="text-2xl font-medium mb-1">$100</div>
          <div className="text-xs text-gray-400">Payouts are sent out on the 1st and 16th of the month with a 15 day delay</div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">CLICKS</div>
            <div className="text-xs text-green-400">+20%</div>
          </div>
          <div className="text-2xl font-medium">325</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">UNIQUE SPENDERS</div>
            <div className="text-xs text-green-400">+33%</div>
          </div>
          <div className="text-2xl font-medium">4</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">FIRST PURCHASES</div>
            <div className="text-xs text-green-400">+100%</div>
          </div>
          <div className="text-2xl font-medium">2</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">TOTAL PURCHASES</div>
            <div className="text-xs text-green-400">+106%</div>
          </div>
          <div className="text-2xl font-medium">$181</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">SIGNUPS</div>
            <div className="text-xs text-green-400">+83%</div>
          </div>
          <div className="text-2xl font-medium">11</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">VERIFIED SIGNUPS</div>
            <div className="text-xs text-green-400">+133%</div>
          </div>
          <div className="text-2xl font-medium">7</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">REFUNDS DEDUCTION</div>
          </div>
          <div className="text-2xl font-medium">$0</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">SCHEME EARNINGS</div>
            <div className="text-xs text-green-400">+106%</div>
          </div>
          <div className="text-2xl font-medium">$36</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
