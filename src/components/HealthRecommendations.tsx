import React from 'react';
import { Heart, Activity, Brain, Apple } from 'lucide-react';

export default function HealthRecommendations() {
  const recommendations = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Cardiovascular Health',
      description: 'Maintain regular exercise and a heart-healthy diet rich in omega-3 fatty acids.',
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      title: 'Physical Activity',
      description: 'Aim for 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly.',
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'Mental Wellness',
      description: 'Practice mindfulness and ensure 7-9 hours of quality sleep each night.',
    },
    {
      icon: <Apple className="w-6 h-6 text-red-500" />,
      title: 'Nutrition',
      description: 'Focus on a balanced diet with plenty of fruits, vegetables, and whole grains.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personalized Health Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              {rec.icon}
              <h3 className="font-semibold text-lg text-gray-800">{rec.title}</h3>
            </div>
            <p className="text-gray-600">{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}