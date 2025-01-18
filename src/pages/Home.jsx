import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar, 
  FileText, 
  Lightbulb,
  MessageCircle,
  Activity,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

function Home() {
  const dashboardFeatures = [
    {
      title: 'Main Dashboard',
      description: 'View your health overview and recent activities',
      icon: LayoutDashboard,
      path: '/dashboard',
      color: 'blue'
    },
    {
      title: 'Symptom Checker',
      description: 'Check your symptoms with AI assistance',
      icon: Stethoscope,
      path: '/symptom-checker',
      color: 'green'
    },
    {
      title: 'Appointments',
      description: 'Schedule and manage your medical appointments',
      icon: Calendar,
      path: '/appointments',
      color: 'purple'
    },
    {
      title: 'Health Records',
      description: 'Access and manage your medical records',
      icon: FileText,
      path: '/health-records',
      color: 'orange'
    },
    {
      title: 'AI Recommendations',
      description: 'Get personalized health insights',
      icon: Lightbulb,
      path: '/recommendations',
      color: 'yellow'
    },
    {
      title: 'Health Assistant',
      description: 'Chat with our AI health assistant',
      icon: MessageCircle,
      path: '/chat',
      color: 'pink'
    },
    {
      title: 'Remote Monitoring',
      description: 'Track your vital signs and health metrics',
      icon: Activity,
      path: '/monitoring',
      color: 'red'
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluate potential health risks',
      icon: AlertTriangle,
      path: '/risk-assessment',
      color: 'indigo'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Personal Health Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access all your health information and AI-powered tools in one place
        </p>
      </div>

      {/* Dashboard Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.path}
              to={feature.path}
              className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-6 h-6 text-${feature.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all duration-200">
                <span>Access Now</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/symptom-checker"
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
          >
            <Stethoscope className="w-5 h-5 text-blue-600" />
            <span>Check Symptoms</span>
          </Link>
          <Link
            to="/appointments"
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
          >
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Book Appointment</span>
          </Link>
          <Link
            to="/chat"
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span>Ask AI Assistant</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;