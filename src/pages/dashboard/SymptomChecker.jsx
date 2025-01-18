import React, { useState } from 'react';
import { Search, AlertCircle, ArrowRight } from 'lucide-react';

function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const commonSymptoms = [
    { id: 1, name: 'Headache', severity: 'moderate' },
    { id: 2, name: 'Fever', severity: 'moderate' },
    { id: 3, name: 'Cough', severity: 'mild' },
    { id: 4, name: 'Fatigue', severity: 'mild' },
    { id: 5, name: 'Shortness of breath', severity: 'severe' },
    { id: 6, name: 'Nausea', severity: 'moderate' },
    { id: 7, name: 'Body aches', severity: 'moderate' },
    { id: 8, name: 'Sore throat', severity: 'mild' },
  ];

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Symptom Checker</h1>
      
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSymptoms.map((symptom) => (
          <button
            key={symptom.id}
            onClick={() => handleSymptomToggle(symptom.id)}
            className={`p-4 rounded-lg border transition-colors ${
              selectedSymptoms.includes(symptom.id)
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'border-gray-200 hover:border-blue-300 text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{symptom.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                symptom.severity === 'mild' ? 'bg-green-100 text-green-800' :
                symptom.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {symptom.severity}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedSymptoms.length > 0 && (
        <div className="fixed bottom-8 right-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
          >
            Analyze Symptoms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-yellow-700 text-sm">
          This symptom checker is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}

export default SymptomChecker;