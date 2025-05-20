
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '@/pages/Index';
import ForCreators from '@/pages/ForCreators';
import ForBrands from '@/pages/ForBrands';
import CreatorProfile from '@/pages/CreatorProfile';
import EventDetails from '@/pages/EventDetails';
import MoreCreators from '@/pages/MoreCreators';
import Analytics from '@/pages/Analytics';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/NotFound';
import Admin from '@/pages/Admin';
import './App.css';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from '@/components/ui/theme-provider';
import { AuthProvider } from '@/hooks/useAuth';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-creators" element={<ForCreators />} />
            <Route path="/for-brands" element={<ForBrands />} />
            <Route path="/creator/:id" element={<CreatorProfile />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/more-creators" element={<MoreCreators />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
