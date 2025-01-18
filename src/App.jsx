import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Recommendations from './pages/dashboard/Recommendations';
import Chat from './pages/dashboard/Chat';
import Monitoring from './pages/dashboard/Monitoring';
import SymptomChecker from './pages/dashboard/SymptomChecker';
import HealthRecords from './pages/dashboard/HealthRecords';
import RiskAssessment from './pages/dashboard/RiskAssessment';
import Appointments from './pages/dashboard/Appointments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/symptom-checker" element={<SymptomChecker />} />
        <Route path="dashboard/appointments" element={<Appointments />} />
        <Route path="dashboard/health-records" element={<HealthRecords />} />
        <Route path="dashboard/chat" element={<Chat />} />
        <Route path="dashboard/recommendations" element={<Recommendations />} />
        <Route path="dashboard/monitoring" element={<Monitoring />} />
        <Route path="dashboard/risk-assessment" element={<RiskAssessment />} />
      </Route>
    </Routes>
  );

 

  

}

export default App;
