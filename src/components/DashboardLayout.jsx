import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar, 
  FileText, 
  Lightbulb,
  MessageSquare,
  Activity,
  AlertTriangle,
  LogOut
} from 'lucide-react';

function DashboardLayout() {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Symptom Checker', href: '/symptom-checker', icon: Stethoscope },
    { name: 'Appointments', href: '/appointments', icon: Calendar },
    { name: 'Health Records', href: '/health-records', icon: FileText },
    { name: 'Recommendations', href: '/recommendations', icon: Lightbulb },
    { name: 'Chat', href: '/chat', icon: MessageSquare },
    { name: 'Monitoring', href: '/monitoring', icon: Activity },
    { name: 'Risk Assessment', href: '/risk-assessment', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-4">
            <Link to="/dashboard" className="flex items-center gap-2 text-blue-600">
              <Activity className="w-6 h-6" />
              <span className="font-bold text-xl">HealthAI</span>
            </Link>
          </div>
          
          <nav className="mt-8">
            <div className="px-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="absolute bottom-0 w-64 p-4 border-t">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;