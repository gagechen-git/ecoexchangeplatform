
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="eco-gradient py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          固体废物综合交易平台
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          绿色交易，循环未来
        </p>
        <Button 
          className="bg-transparent border border-white text-white hover:bg-white hover:text-eco-dark transition-colors"
        >
          立即注册
        </Button>
      </div>

      {/* Navigation */}
      <nav className="bg-eco-dark text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="menu-link font-medium">首页</Link>
            <Link to="/announcements" className="menu-link font-medium">公告</Link>
            <Link to="/trading" className="menu-link font-medium">交易服务</Link>
            <Link to="/management" className="menu-link font-medium">管理办法</Link>
            <Link to="/data" className="menu-link font-medium">大数据</Link>
            <Link to="/cooperation" className="menu-link font-medium">生态合作</Link>
            <Link to="/about" className="menu-link font-medium">关于我们</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/login" className="menu-link font-medium">登录</Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-eco-mid mt-2 p-4 rounded-md">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="menu-link font-medium">首页</Link>
              <Link to="/announcements" className="menu-link font-medium">公告</Link>
              <Link to="/trading" className="menu-link font-medium">交易服务</Link>
              <Link to="/management" className="menu-link font-medium">管理办法</Link>
              <Link to="/data" className="menu-link font-medium">大数据</Link>
              <Link to="/cooperation" className="menu-link font-medium">生态合作</Link>
              <Link to="/about" className="menu-link font-medium">关于我们</Link>
              <Link to="/login" className="menu-link font-medium">登录</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
