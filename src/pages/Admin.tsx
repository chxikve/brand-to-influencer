
import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AdminLayout from '@/features/admin/layouts/AdminLayout';
import Dashboard from '@/features/admin/pages/Dashboard';
import CreatorsManagement from '@/features/admin/pages/CreatorsManagement';
import CampaignsManagement from '@/features/admin/pages/CampaignsManagement';
import ReportsManagement from '@/features/admin/pages/ReportsManagement';
import ContentManagement from '@/features/admin/pages/ContentManagement';
import SettingsPage from '@/features/admin/pages/SettingsPage';

const Admin = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/management" element={<Dashboard />} />
        <Route path="/creators" element={<CreatorsManagement />} />
        <Route path="/campaigns" element={<CampaignsManagement />} />
        <Route path="/reports" element={<ReportsManagement />} />
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;
