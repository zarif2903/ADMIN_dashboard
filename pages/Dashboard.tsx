import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeekendIcon, LeaderboardIcon, StoreIcon, PersonAddIcon } from '../components/icons/Icons';

// --- Reusable Components defined within the page scope ---

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon, iconBgColor }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500 font-semibold">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className={`text-sm mt-1 ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
        <span className="font-bold">{change}</span> than last week
      </p>
    </div>
    <div className={`p-4 rounded-xl shadow-lg ${iconBgColor}`}>
      {icon}
    </div>
  </div>
);

const ChartCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="mb-4">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <div className="h-72">
      {children}
    </div>
  </div>
);

// --- Chart Data ---

const barChartData = [
  { name: 'M', uv: 4000 }, { name: 'T', uv: 3000 }, { name: 'W', uv: 2000 },
  { name: 'T', uv: 2780 }, { name: 'F', uv: 1890 }, { name: 'S', uv: 2390 }, { name: 'S', uv: 3490 },
];

const lineChartData1 = [
  { name: 'Apr', uv: 50 }, { name: 'May', uv: 40 }, { name: 'Jun', uv: 300 },
  { name: 'Jul', uv: 220 }, { name: 'Aug', uv: 500 }, { name: 'Sep', uv: 250 },
  { name: 'Oct', uv: 400 }, { name: 'Nov', uv: 230 }, { name: 'Dec', uv: 500 },
];

const lineChartData2 = [
  { name: 'Apr', uv: 30 }, { name: 'May', uv: 20 }, { name: 'Jun', uv: 280 },
  { name: 'Jul', uv: 180 }, { name: 'Aug', uv: 400 }, { name: 'Sep', uv: 190 },
  { name: 'Oct', uv: 350 }, { name: 'Nov', uv: 200 }, { name: 'Dec', uv: 480 },
];


// --- Main Dashboard Component ---

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Today's Money"
          value="$53k"
          change="+55%"
          changeType="increase"
          icon={<WeekendIcon className="h-6 w-6 text-white" />}
          iconBgColor="bg-gradient-to-tr from-gray-800 to-gray-700"
        />
        <StatCard 
          title="Today's Users"
          value="2,300"
          change="+3%"
          changeType="increase"
          icon={<LeaderboardIcon className="h-6 w-6 text-white" />}
          iconBgColor="bg-gradient-to-tr from-blue-600 to-blue-400"
        />
        <StatCard 
          title="New Clients"
          value="3,462"
          change="-2%"
          changeType="decrease"
          icon={<StoreIcon className="h-6 w-6 text-white" />}
          iconBgColor="bg-gradient-to-tr from-green-600 to-green-400"
        />
        <StatCard 
          title="Sales"
          value="$103,430"
          change="+5%"
          changeType="increase"
          icon={<PersonAddIcon className="h-6 w-6 text-white" />}
          iconBgColor="bg-gradient-to-tr from-pink-600 to-pink-400"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <ChartCard title="Website Views" subtitle="Last Campaign Performance">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#334155" barSize={10} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
        <div className="lg:col-span-1">
            <ChartCard title="Daily Sales" subtitle="(+15%) increase in today sales.">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineChartData1}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#4ade80" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
        <div className="lg:col-span-1">
            <ChartCard title="Completed Tasks" subtitle="Last Campaign Performance">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineChartData2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="uv" stroke="#334155" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
