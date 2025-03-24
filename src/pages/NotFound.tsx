
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sponsify-light px-4">
      <div className="glass-card max-w-md w-full rounded-xl p-10 text-center animate-fade-in">
        <div className="text-9xl font-thin text-sponsify-primary mb-6">404</div>
        <h1 className="text-2xl font-medium mb-4">Page not found</h1>
        <p className="text-sponsify-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
