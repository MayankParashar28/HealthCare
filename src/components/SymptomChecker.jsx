import React, { useState } from 'react';
import { Stethoscope, AlertCircle, ArrowRight } from 'lucide-react';

function SymptomChecker({ darkMode }) {
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState('');

  const commonSymptoms = [
    { id: 1, name: 'Headache', severity: 'moderate' },
    { id: 2, name: 'Fever', severity: 'moderate' },
    { id: 3, name: 'Cough', severity: 'mild' },
    { id: 4, name: 'Fatigue', severity: 'mild' },
    { id: 5, name: 'Shortness of breath', severity: 'severe' },
  ];

  const handleSymptomToggle = (symptom) => {
    setSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const checkSymptoms = () => {
    if (symptoms.length === 0) {
      setResult('Please select at least one symptom.');
      return;
    }
    setResult('Based on your symptoms, we recommend consulting with a healthcare provider. This is not a diagnosis.');
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 transition-colors duration-200`}>
      <div className="flex items-center gap-2 mb-6">
        <Stethoscope className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Symptom Checker</h2>
      </div>

      <div className="mb-6">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Select your symptoms:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {commonSymptoms.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => handleSymptomToggle(symptom.name)}
              className={`p-3 rounded-lg border transition-colors ${
                symptoms.includes(symptom.name)
                  ? darkMode 
                    ? 'bg-blue-900 border-blue-700 text-blue-200'
                    : 'bg-blue-100 border-blue-500 text-blue-700'
                  : darkMode
                    ? 'border-gray-700 hover:border-blue-700 text-gray-300'
                    : 'border-gray-200 hover:border-blue-300 text-gray-700'
              }`}
            >
              {symptom.name}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={checkSymptoms}
        className={`w-full ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2`}
      >
        Check Symptoms
        <ArrowRight className="w-4 h-4" />
      </button>

      {result && (
        <div className={`mt-6 p-4 ${darkMode ? 'bg-yellow-900 border-yellow-800' : 'bg-yellow-50 border-yellow-200'} rounded-lg border flex items-start gap-3`}>
          <AlertCircle className={`w-5 h-5 ${darkMode ? 'text-yellow-500' : 'text-yellow-600'} flex-shrink-0 mt-0.5`} />
          <p className={darkMode ? 'text-yellow-200' : 'text-yellow-700'}>{result}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;