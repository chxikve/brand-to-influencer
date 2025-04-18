
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as JotaiProvider } from "jotai";
import { store } from "./store";
import { ThemeProvider } from "./hooks/useTheme";
import { AuthProvider } from "./hooks/useAuth";
import Header from "./features/navigation/Header";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CreatorProfile from "./pages/CreatorProfile";
import MoreCreators from "./pages/MoreCreators";
import ForBrands from "./pages/ForBrands";
import ForCreators from "./pages/ForCreators";
import Pricing from "./pages/Pricing";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

// Component to conditionally render the header
const AppRoutes = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  
  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="/more-creators" element={<MoreCreators />} />
        <Route path="/for-brands" element={<ForBrands />} />
        <Route path="/for-creators" element={<ForCreators />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <JotaiProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </JotaiProvider>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
