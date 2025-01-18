import React from 'react';
import { Activity, Heart, Thermometer, Clock } from 'lucide-react';

function RemoteMonitoring() {
  const vitals = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      name: 'Heart Rate',
      value: '72 bpm',
      status: 'normal',
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      name: 'Blood Pressure',
      value: '120/80 mmHg',
      status: 'normal',
    },
    {
      icon: <Thermometer className="w-6 h-6 text-orange-500" />,
      name: 'Temperature',
      value: '98.6°F',
      status: 'normal',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      name: 'Last Updated',
      value: '2 mins ago',
      status: 'recent',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Remote Health Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vitals.map((vital, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              {vital.icon}
              <h3 className="font-semibold text-gray-700">{vital.name}</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{vital.value}</p>
            <span className="text-sm text-green-600 capitalize">{vital.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemoteMonitoring;