import React, { useState } from 'react';
import { AlertTriangle, Shield, Activity, Heart } from 'lucide-react';

function RiskAssessment() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const riskFactors = [
    {
      category: 'Cardiovascular',
      icon: Heart,
      status: 'moderate',
      description: 'Based on your blood pressure and cholesterol levels',
      recommendations: [
        'Monitor blood pressure regularly',
        'Maintain a heart-healthy diet',
        'Regular cardiovascular exercise'
      ]
    },
    {
      category: 'Lifestyle',
      icon: Activity,
      status: 'low',
      description: 'Based on your exercise habits and diet',
      recommendations: [
        'Continue regular physical activity',
        'Maintain balanced nutrition',
        'Ensure adequate sleep'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Risk Assessment</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Risk Factors Analysis</h2>
          <Shield className="w-6 h-6 text-green-600" />
        </div>

        <div className="space-y-6">
          {riskFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{factor.category} Risk</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      factor.status === 'low' ? 'bg-green-100 text-green-800' :
                      factor.status === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {factor.status} risk
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{factor.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Recommendations:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {factor.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          This risk assessment is based on the information you've provided and your health records. 
          Always consult with healthcare professionals for personalized medical advice.
        </p>
      </div>
    </div>
  );
}

export default RiskAssessment;