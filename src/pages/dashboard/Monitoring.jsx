import React from 'react';
import { Activity, Heart, Thermometer, Clock, TrendingUp, TrendingDown } from 'lucide-react';

function Monitoring() {
  const vitals = [
    {
      id: 1,
      name: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      trend: 'up',
      change: '+2',
      status: 'normal',
      icon: Heart
    },
    {
      id: 2,
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      trend: 'stable',
      change: '0',
      status: 'normal',
      icon: Activity
    },
    {
      id: 3,
      name: 'Temperature',
      value: '98.6',
      unit: '°F',
      trend: 'down',
      change: '-0.2',
      status: 'normal',
      icon: Thermometer
    },
    {
      id: 4,
      name: 'Sleep',
      value: '7.5',
      unit: 'hours',
      trend: 'up',
      change: '+0.5',
      status: 'good',
      icon: Clock
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Remote Monitoring</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vitals.map((vital) => {
          const Icon = vital.icon;
          return (
            <div key={vital.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
                <span className={`flex items-center gap-1 text-sm ${
                  vital.trend === 'up' ? 'text-green-600' : 
                  vital.trend === 'down' ? 'text-red-600' : 
                  'text-gray-600'
                }`}>
                  {vital.trend === 'up' ? <TrendingUp className="w-4 h-4" /> :
                   vital.trend === 'down' ? <TrendingDown className="w-4 h-4" /> :
                   null}
                  {vital.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  {vital.value}
                  <span className="text-sm font-normal text-gray-500 ml-1">
                    {vital.unit}
                  </span>
                </h3>
                <p className="text-gray-600">{vital.name}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  vital.status === 'normal' ? 'bg-green-100 text-green-800' :
                  vital.status === 'good' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {vital.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Historical Data Charts would go here */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Historical Data</h2>
        <p className="text-gray-600">Charts and historical data visualization would be displayed here.</p>
      </div>
    </div>
  );
}

export default Monitoring;