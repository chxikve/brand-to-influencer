
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings,
  FileText,
  BarChart3,
  Database,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

// Admin pages
import Dashboard from '../pages/Dashboard';
import CreatorsManagement from '../pages/CreatorsManagement';
import CampaignsManagement from '../pages/CampaignsManagement';
import ReportsManagement from '../pages/ReportsManagement';
import ContentManagement from '../pages/ContentManagement';
import SettingsPage from '../pages/SettingsPage';

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="p-2">
              <h1 className="text-xl font-bold">Sponsify Admin</h1>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Dashboard">
                      <a href="/admin">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Creators">
                      <a href="/admin/creators">
                        <Users />
                        <span>Creators</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Campaigns">
                      <a href="/admin/campaigns">
                        <Calendar />
                        <span>Campaigns</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Reports">
                      <a href="/admin/reports">
                        <BarChart3 />
                        <span>Reports</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Content">
                      <a href="/admin/content">
                        <FileText />
                        <span>Content</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Database">
                      <a href="/admin/settings">
                        <Settings />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={logout} tooltip="Sign out">
                  <LogOut />
                  <span>Sign out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="p-4 md:p-6">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="creators" element={<CreatorsManagement />} />
              <Route path="campaigns" element={<CampaignsManagement />} />
              <Route path="reports" element={<ReportsManagement />} />
              <Route path="content" element={<ContentManagement />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
