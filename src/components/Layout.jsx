import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Shield, Sun, Moon } from 'lucide-react';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <Link to="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                HealthAI
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Home
              </Link>
              <Link to="/about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                About
              </Link>
              <Link to="/services" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Services
              </Link>
              <Link to="/contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Contact
              </Link>
              <Link to="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t mt-12 transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} HealthAI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;