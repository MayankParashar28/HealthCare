import React from 'react';
import { Stethoscope, Brain, Activity, MessageCircle } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: 'Symptom Assessment',
      description: 'AI-powered symptom checker to help identify potential health issues.',
      features: ['24/7 availability', 'Quick results', 'Medical database integration']
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-600" />,
      title: 'Health Recommendations',
      description: 'Personalized health advice based on your profile and symptoms.',
      features: ['Custom health plans', 'Lifestyle recommendations', 'Diet suggestions']
    },
    {
      icon: <Activity className="w-12 h-12 text-green-600" />,
      title: 'Remote Monitoring',
      description: 'Track your vital signs and health metrics from home.',
      features: ['Real-time monitoring', 'Trend analysis', 'Alert system']
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-red-600" />,
      title: 'AI Health Assistant',
      description: '24/7 chat support for health-related queries.',
      features: ['Instant responses', 'Medical information', 'Emergency guidance']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold ml-4">{service.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;