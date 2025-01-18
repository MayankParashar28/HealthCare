import React, { useState } from 'react';
import { Calendar, Clock, User, Plus, X } from 'lucide-react';

function Appointments() {
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Smith',
      specialty: 'Cardiologist',
      date: '2024-03-15',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practitioner',
      date: '2024-03-20',
      time: '2:30 PM',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Johnson',
      specialty: 'Dermatologist',
      date: '2024-03-10',
      time: '11:15 AM',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <button
          onClick={() => setShowNewAppointment(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Appointment
        </button>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-xl shadow-sm divide-y">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <User className="w-10 h-10 text-gray-400 bg-gray-100 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                <p className="text-sm text-gray-500">{appointment.specialty}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {appointment.time}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'upcoming'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Calendar</h2>
        {/* Calendar component would go here */}
      </div>
    </div>
  );
}

export default Appointments;