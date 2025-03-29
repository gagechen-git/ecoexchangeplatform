
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, Wind, Cpu, CircuitBoard, Server, Database, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Banner with tech-environmental background elements */}
      <div className="eco-gradient py-8 px-4 text-center relative overflow-hidden">
        {/* Tech-environmental background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Tech icons */}
          <div className="absolute top-5 left-10 transform -rotate-12">
            <Cpu className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-1/4 right-12 transform rotate-12">
            <CircuitBoard className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-5 left-1/4 transform rotate-45">
            <Server className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-1/3 left-1/2 transform -rotate-12">
            <Database className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/4 transform -rotate-12">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-12 right-1/3 transform rotate-45">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          {/* Environmental elements for balance */}
          <div className="absolute bottom-16 left-16 transform rotate-12">
            <Leaf className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-3/4 right-20 transform -rotate-12">
            <Wind className="w-18 h-18 text-white" />
          </div>
          
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10L50 10L50 50L90 50" stroke="white" strokeWidth="1" fill="none" />
                <path d="M10 50L30 50L30 90" stroke="white" strokeWidth="1" fill="none" />
                <path d="M50 50L50 90" stroke="white" strokeWidth="1" fill="none" />
                <path d="M70 10L70 30L90 30" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="2" fill="white" />
                <circle cx="50" cy="10" r="2" fill="white" />
                <circle cx="10" cy="50" r="2" fill="white" />
                <circle cx="50" cy="50" r="2" fill="white" />
                <circle cx="90" cy="50" r="2" fill="white" />
                <circle cx="70" cy="10" r="2" fill="white" />
                <circle cx="90" cy="30" r="2" fill="white" />
                <circle cx="30" cy="90" r="2" fill="white" />
                <circle cx="50" cy="90" r="2" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          
          {/* Glowing orbs and light effects */}
          <div className="hidden md:block absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
          <div className="hidden md:block absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
          <div className="hidden md:block absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-cyan-300 opacity-10 blur-2xl"></div>
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
