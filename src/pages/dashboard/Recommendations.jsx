import React from 'react';
import { Lightbulb, Heart, Brain, Apple, Activity } from 'lucide-react';

function Recommendations() {
  const recommendations = [
    {
      id: 1,
      category: 'Exercise',
      title: 'Increase Physical Activity',
      description: 'Based on your recent activity levels, we recommend adding 30 minutes of moderate exercise to your daily routine.',
      icon: Activity,
      priority: 'high'
    },
    {
      id: 2,
      category: 'Diet',
      title: 'Balanced Nutrition Plan',
      description: 'Consider incorporating more whole grains and leafy vegetables into your meals.',
      icon: Apple,
      priority: 'medium'
    },
    {
      id: 3,
      category: 'Mental Health',
      title: 'Stress Management',
      description: 'Practice mindfulness or meditation for 10 minutes daily to reduce stress levels.',
      icon: Brain,
      priority: 'medium'
    },
    {
      id: 4,
      category: 'Heart Health',
      title: 'Cardiovascular Care',
      description: 'Maintain regular blood pressure monitoring and continue with heart-healthy exercises.',
      icon: Heart,
      priority: 'high'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Lightbulb className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">AI Recommendations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          return (
            <div key={rec.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="text-sm text-gray-500">{rec.category}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{rec.description}</p>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  rec.priority === 'high' 
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {rec.priority} priority
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommendations;