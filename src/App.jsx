import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import DashboardLayout from './components/Layout/DashboardLayout';
import DashboardHome from './pages/Dashboard/Home';
import Automation from './pages/Automation/WhatsAppSettings';
import Leads from './pages/Enquiries/Leads';
import VehicleList from './pages/Vehicles/VehicleList';
import AddVehicle from './pages/Vehicles/AddVehicle';
import VehicleDetail from './pages/Vehicles/VehicleDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="vehicles">
            <Route index element={<VehicleList />} />
            <Route path="add" element={<AddVehicle />} />
            <Route path=":id" element={<VehicleDetail />} />
          </Route>
          <Route path="automation" element={<Automation />} />
          <Route path="leads" element={<Leads />} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
