
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center bg-eco-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-eco-dark mb-6">404</h1>
        <p className="text-2xl text-eco-text mb-6">页面未找到</p>
        <p className="text-eco-text mb-8">
          很抱歉，您尝试访问的页面不存在或已移动到其他位置。
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-eco-dark text-white px-5 py-3 rounded-md hover:bg-eco-mid transition-colors"
        >
          <ArrowLeft size={18} />
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
