import React from 'react';
import { FileText, Upload, Download, Search } from 'lucide-react';

function HealthRecords() {
  const records = [
    {
      id: 1,
      type: 'Lab Results',
      date: '2024-03-01',
      doctor: 'Dr. Sarah Smith',
      facility: 'Central Hospital',
      size: '2.4 MB'
    },
    {
      id: 2,
      type: 'X-Ray Report',
      date: '2024-02-15',
      doctor: 'Dr. Michael Chen',
      facility: 'Imaging Center',
      size: '5.1 MB'
    },
    {
      id: 3,
      type: 'Prescription',
      date: '2024-02-01',
      doctor: 'Dr. Emily Johnson',
      facility: 'Family Clinic',
      size: '1.2 MB'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Health Records</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload Record
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search records..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {records.map((record) => (
          <div key={record.id} className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-10 h-10 text-blue-600 bg-blue-100 rounded-lg p-2" />
              <div>
                <h3 className="font-semibold text-gray-900">{record.type}</h3>
                <p className="text-sm text-gray-500">{record.facility}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>{record.date}</span>
                  <span>•</span>
                  <span>{record.doctor}</span>
                  <span>•</span>
                  <span>{record.size}</span>
                </div>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthRecords;