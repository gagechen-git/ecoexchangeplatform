
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Banner with environmental background elements */}
      <div className="eco-gradient py-8 px-4 text-center relative overflow-hidden">
        {/* Environmental background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-5 left-5 transform -rotate-12">
            <Leaf className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-1/4 right-10 transform rotate-12">
            <Leaf className="w-14 h-14 text-white" />
          </div>
          <div className="absolute bottom-5 left-1/4 transform rotate-45">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <div className="absolute top-1/3 left-1/2 transform -rotate-12">
            <Wind className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/4 transform -rotate-12">
            <Wind className="w-16 h-16 text-white" />
          </div>
          <div className="hidden md:block absolute -top-20 -right-20 w-80 h-80 rounded-full bg-eco-light opacity-10"></div>
          <div className="hidden md:block absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-eco-light opacity-10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            固体废物综合交易平台
          </h1>
          <p className="text-white text-lg md:text-xl mb-2">
            绿色交易，循环未来
          </p>
          <Link to="/login">
            <Button 
              className="bg-transparent border border-white text-white hover:bg-white hover:text-eco-dark transition-colors"
            >
              登录/注册
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-eco-dark text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="menu-link font-medium">首页</Link>
            <Link to="/announcements" className="menu-link font-medium">公告</Link>
            <Link to="/trading" className="menu-link font-medium">交易服务</Link>
            <Link to="/data" className="menu-link font-medium">大数据</Link>
            <Link to="/management" className="menu-link font-medium">管理办法</Link>
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
              <Link to="/data" className="menu-link font-medium">大数据</Link>
              <Link to="/management" className="menu-link font-medium">管理办法</Link>
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
