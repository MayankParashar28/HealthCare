import React from 'react';
import { 
  Activity, 
  Calendar, 
  FileText, 
  Bell,
  TrendingUp
} from 'lucide-react';

function Dashboard() {
  const stats = [
    { name: 'Heart Rate', value: '72 bpm', change: '+2%', icon: Activity },
    { name: 'Next Appointment', value: 'Mar 15', change: 'In 5 days', icon: Calendar },
    { name: 'Health Score', value: '85/100', change: '+5%', icon: TrendingUp },
    { name: 'Pending Reports', value: '2', change: 'Action needed', icon: FileText },
  ];

  const recentActivities = [
    { id: 1, type: 'appointment', message: 'Upcoming appointment with Dr. Smith', time: '2 hours ago' },
    { id: 2, type: 'record', message: 'Blood test results uploaded', time: '1 day ago' },
    { id: 3, type: 'recommendation', message: 'New health recommendations available', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <Icon className="w-6 h-6 text-blue-600" />
                <span className={`text-sm ${
                  stat.change.includes('+') ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.name}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                {activity.type === 'appointment' && <Calendar className="w-5 h-5 text-blue-600" />}
                {activity.type === 'record' && <FileText className="w-5 h-5 text-green-600" />}
                {activity.type === 'recommendation' && <Activity className="w-5 h-5 text-purple-600" />}
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{activity.message}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;