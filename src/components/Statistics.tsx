import { useState } from 'react';

interface DailyStats {
  date: string;
  impressions: number;
  clicks: number;
  ctr: number;
  signups: number;
  signupRate: number;
  firstPurchase: number;
  firstPurchaseRate: number;
  purchase: number;
  purchaseRate: number;
  earnings: number;
}

const mockData: DailyStats[] = [
  {
    date: '2025-04-11',
    impressions: 12500,
    clicks: 325,
    ctr: 2.6,
    signups: 11,
    signupRate: 3.38,
    firstPurchase: 2,
    firstPurchaseRate: 18.18,
    purchase: 4,
    purchaseRate: 36.36,
    earnings: 36.00
  },
  // Add more mock data as needed
];

const Statistics = () => {
  const [startDate, setStartDate] = useState<string>('2025-04-11');
  const [endDate, setEndDate] = useState<string>('2025-04-11');

  return (
    <div className="text-white">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-medium mb-1">Statistics</h1>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 bg-white/10 rounded text-sm">Today</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Yesterday</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Last 7d</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">Last 30d</button>
            <button className="px-3 py-1 hover:bg-white/5 rounded text-sm text-gray-400">This month</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm focus:outline-none focus:border-[#2FE6D4]"
            />
            <span className="text-gray-400">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm focus:outline-none focus:border-[#2FE6D4]"
            />
          </div>
          <button className="px-4 py-1 bg-[#2FE6D4] text-black rounded text-sm font-medium hover:bg-[#2FE6D4]/90 transition-colors">
            Apply
          </button>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 font-medium text-sm">Date</th>
              <th className="text-right p-4 font-medium text-sm">Impressions</th>
              <th className="text-right p-4 font-medium text-sm">Clicks</th>
              <th className="text-right p-4 font-medium text-sm">CTR</th>
              <th className="text-right p-4 font-medium text-sm">Signups</th>
              <th className="text-right p-4 font-medium text-sm">Signup Rate</th>
              <th className="text-right p-4 font-medium text-sm">First Purchase</th>
              <th className="text-right p-4 font-medium text-sm">First Purchase Rate</th>
              <th className="text-right p-4 font-medium text-sm">Purchase</th>
              <th className="text-right p-4 font-medium text-sm">Purchase Rate</th>
              <th className="text-right p-4 font-medium text-sm">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((stat, index) => (
              <tr key={stat.date} className={index !== mockData.length - 1 ? 'border-b border-white/10' : ''}>
                <td className="p-4 text-sm">{stat.date}</td>
                <td className="p-4 text-sm text-right">{stat.impressions.toLocaleString()}</td>
                <td className="p-4 text-sm text-right">{stat.clicks.toLocaleString()}</td>
                <td className="p-4 text-sm text-right">{stat.ctr.toFixed(2)}%</td>
                <td className="p-4 text-sm text-right">{stat.signups}</td>
                <td className="p-4 text-sm text-right">{stat.signupRate.toFixed(2)}%</td>
                <td className="p-4 text-sm text-right">{stat.firstPurchase}</td>
                <td className="p-4 text-sm text-right">{stat.firstPurchaseRate.toFixed(2)}%</td>
                <td className="p-4 text-sm text-right">{stat.purchase}</td>
                <td className="p-4 text-sm text-right">{stat.purchaseRate.toFixed(2)}%</td>
                <td className="p-4 text-sm text-right">${stat.earnings.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
