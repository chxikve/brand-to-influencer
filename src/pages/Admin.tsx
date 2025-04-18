
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AdminLayout from '@/features/admin/layouts/AdminLayout';

const Admin = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <AdminLayout />;
};

export default Admin;
