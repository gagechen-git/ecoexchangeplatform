
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
      {/* Top Banner with enhanced tech background elements */}
      <div className="eco-gradient py-8 px-4 text-center relative overflow-hidden">
        {/* Enhanced tech background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Tech icons */}
          <div className="absolute top-5 left-10 transform -rotate-12 animate-pulse">
            <Cpu className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-1/4 right-12 transform rotate-12 animate-pulse" style={{animationDelay: "0.5s"}}>
            <CircuitBoard className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-5 left-1/4 transform rotate-45 animate-pulse" style={{animationDelay: "1s"}}>
            <Server className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-1/3 left-1/2 transform -rotate-12 animate-pulse" style={{animationDelay: "1.5s"}}>
            <Database className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-1/4 transform -rotate-12 animate-pulse" style={{animationDelay: "2s"}}>
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-12 right-1/3 transform rotate-45 animate-pulse" style={{animationDelay: "2.5s"}}>
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          {/* Environmental elements for balance */}
          <div className="absolute bottom-16 left-16 transform rotate-12 animate-pulse" style={{animationDelay: "3s"}}>
            <Leaf className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-3/4 right-20 transform -rotate-12 animate-pulse" style={{animationDelay: "3.5s"}}>
            <Wind className="w-18 h-18 text-white" />
          </div>
          
          {/* 3D Digital circuit pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#88ccff" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10L50 10L50 50L90 50" stroke="url(#grid-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
                <path d="M10 50L30 50L30 90" stroke="url(#grid-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
                <path d="M50 50L50 90" stroke="url(#grid-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
                <path d="M70 10L70 30L90 30" stroke="url(#grid-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
                <circle cx="10" cy="10" r="2" fill="white" filter="url(#glow)" className="animate-pulse" />
                <circle cx="50" cy="10" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "0.2s"}} />
                <circle cx="10" cy="50" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "0.4s"}} />
                <circle cx="50" cy="50" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "0.6s"}} />
                <circle cx="90" cy="50" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "0.8s"}} />
                <circle cx="70" cy="10" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "1s"}} />
                <circle cx="90" cy="30" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "1.2s"}} />
                <circle cx="30" cy="90" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "1.4s"}} />
                <circle cx="50" cy="90" r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{animationDelay: "1.6s"}} />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          
          {/* Enhanced glowing orbs and light effects */}
          <div className="hidden md:block absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl animate-pulse"></div>
          <div className="hidden md:block absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
          <div className="hidden md:block absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-cyan-300 opacity-20 blur-2xl animate-pulse" style={{animationDelay: "0.8s"}}></div>
          
          {/* Futuristic particles */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%">
              <defs>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#88ccff" stopOpacity="0" />
                </radialGradient>
              </defs>
              {Array.from({length: 20}).map((_, i) => {
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                const randomSize = 1 + Math.random() * 2;
                const randomOpacity = 0.2 + Math.random() * 0.3;
                const animationDelay = Math.random() * 3;
                return (
                  <circle 
                    key={i}
                    cx={`${randomX}%`} 
                    cy={`${randomY}%`} 
                    r={randomSize} 
                    fill="url(#dotGlow)" 
                    opacity={randomOpacity}
                    className="animate-pulse"
                    style={{animationDelay: `${animationDelay}s`}}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* HUD-like interface elements */}
          <div className="absolute top-5 left-5 w-32 h-32 opacity-30">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1,5" className="animate-spin" style={{animationDuration: "30s"}} />
              <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{animationDuration: "20s", animationDirection: "reverse"}} />
              <path d="M20,50 L40,50" stroke="white" strokeWidth="1" />
              <path d="M60,50 L80,50" stroke="white" strokeWidth="1" />
              <path d="M50,20 L50,40" stroke="white" strokeWidth="1" />
              <path d="M50,60 L50,80" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="absolute bottom-5 right-5 w-32 h-32 opacity-30">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1,3" className="animate-pulse" />
              <rect x="35" y="35" width="30" height="30" fill="none" stroke="white" strokeWidth="1" />
              <path d="M10,10 L20,20" stroke="white" strokeWidth="1" />
              <path d="M90,10 L80,20" stroke="white" strokeWidth="1" />
              <path d="M10,90 L20,80" stroke="white" strokeWidth="1" />
              <path d="M90,90 L80,80" stroke="white" strokeWidth="1" />
            </svg>
          </div>
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
