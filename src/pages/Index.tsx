
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import FriendlyLinksSection from "@/components/home/FriendlyLinksSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Cpu, Database, CircuitBoard, Server, Code, Zap } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Advertisement Banner with futuristic tech background */}
        <section className="py-8 mb-10 bg-gradient-to-r from-eco-dark to-eco-mid rounded-lg overflow-hidden relative">
          {/* Enhanced tech background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated Tech icons */}
            <div className="absolute top-8 left-10 opacity-20 animate-pulse">
              <Cpu className="w-14 h-14 text-white" />
            </div>
            <div className="absolute bottom-12 left-1/4 opacity-20 animate-pulse" style={{animationDelay: "0.7s"}}>
              <Server className="w-16 h-16 text-white" />
            </div>
            <div className="absolute top-1/3 right-10 opacity-20 animate-pulse" style={{animationDelay: "1.4s"}}>
              <Database className="w-16 h-16 text-white" />
            </div>
            <div className="absolute bottom-1/4 right-1/3 opacity-20 animate-pulse" style={{animationDelay: "2.1s"}}>
              <CircuitBoard className="w-20 h-20 text-white" />
            </div>
            <div className="absolute top-1/2 left-16 opacity-20 animate-pulse" style={{animationDelay: "2.8s"}}>
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="absolute bottom-10 right-16 opacity-20 animate-pulse" style={{animationDelay: "3.5s"}}>
              <Code className="w-12 h-12 text-white" />
            </div>
            
            {/* Enhanced 3D Digital circuit pattern background */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grid-gradient-ad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#88ccff" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glow-ad">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <pattern id="circuit-pattern-ad" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M10 10L50 10L50 50L90 50" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <path d="M10 50L30 50L30 90" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <path d="M50 50L50 90" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <path d="M70 10L70 30L90 30" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <path d="M90 50L110 50L110 90" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <path d="M30 90L70 90L70 110" stroke="url(#grid-gradient-ad)" strokeWidth="1" fill="none" filter="url(#glow-ad)" />
                  <circle cx="10" cy="10" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" />
                  <circle cx="50" cy="10" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "0.2s"}} />
                  <circle cx="10" cy="50" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "0.4s"}} />
                  <circle cx="50" cy="50" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "0.6s"}} />
                  <circle cx="90" cy="50" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "0.8s"}} />
                  <circle cx="110" cy="50" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "1s"}} />
                  <circle cx="70" cy="10" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "1.2s"}} />
                  <circle cx="90" cy="30" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "1.4s"}} />
                  <circle cx="30" cy="90" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "1.6s"}} />
                  <circle cx="50" cy="90" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "1.8s"}} />
                  <circle cx="70" cy="90" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "2s"}} />
                  <circle cx="110" cy="90" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "2.2s"}} />
                  <circle cx="70" cy="110" r="2" fill="white" filter="url(#glow-ad)" className="animate-pulse" style={{animationDelay: "2.4s"}} />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern-ad)" />
              </svg>
            </div>
            
            {/* Animated wave patterns */}
            <div className="absolute bottom-0 w-full opacity-15">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="opacity-20">
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8">
                      <animate attributeName="offset" values="0;1;0" dur="10s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#88ccff" stopOpacity="0.5">
                      <animate attributeName="offset" values="0.2;1.2;0.2" dur="10s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="white" stopOpacity="0.8">
                      <animate attributeName="offset" values="0.4;1.4;0.4" dur="10s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  <animate attributeName="d" values="
                    M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,218.7C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                  " dur="20s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            
            {/* Animated glowing orbs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-400 opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-cyan-200 opacity-20 blur-xl animate-pulse" style={{animationDelay: "0.7s"}}></div>
            
            {/* Futuristic grid lines */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="url(#smallGrid)" />
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Holographic data points */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%">
                {Array.from({length: 30}).map((_, i) => {
                  const randomX = Math.random() * 100;
                  const randomY = Math.random() * 100;
                  const randomOpacity = 0.1 + Math.random() * 0.3;
                  const randomSize = 0.5 + Math.random() * 1.5;
                  return (
                    <g key={i}>
                      <circle 
                        cx={`${randomX}%`} 
                        cy={`${randomY}%`} 
                        r={randomSize} 
                        fill="white" 
                        opacity={randomOpacity} 
                        className="animate-pulse"
                        style={{animationDelay: `${Math.random() * 3}s`}}
                      />
                      <line 
                        x1={`${randomX}%`} 
                        y1={`${randomY}%`} 
                        x2={`${randomX + (Math.random() * 10 - 5)}%`} 
                        y2={`${randomY + (Math.random() * 10 - 5)}%`} 
                        stroke="white" 
                        strokeWidth="0.5" 
                        opacity={randomOpacity * 0.7}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            
            {/* Futuristic HUD element */}
            <div className="absolute top-10 right-10 w-40 h-40 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="1,3" className="animate-spin" style={{animationDuration: "30s"}} />
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" className="animate-spin" style={{animationDuration: "25s", animationDirection: "reverse"}} />
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" className="animate-spin" style={{animationDuration: "20s"}} />
                <line x1="5" y1="50" x2="25" y2="50" stroke="white" strokeWidth="0.5" />
                <line x1="75" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5" />
                <line x1="50" y1="5" x2="50" y2="25" stroke="white" strokeWidth="0.5" />
                <line x1="50" y1="75" x2="50" y2="95" stroke="white" strokeWidth="0.5" />
                <text x="28" y="30" fill="white" fontSize="3" className="animate-pulse">ENVIRONMENTAL</text>
                <text x="35" y="75" fill="white" fontSize="3" className="animate-pulse" style={{animationDelay: "1s"}}>ECO-TECH</text>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full mb-4 border border-white/10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">广告推广</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2023年度环保科技展</h2>
                <p className="text-lg text-white/90 mb-6">探索前沿环保技术，共建绿色未来</p>
                <Button className="bg-white text-eco-dark hover:bg-eco-light hover:text-eco-dark px-6 py-2 group backdrop-blur-sm">
                  了解详情 <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-eco-light rounded-lg transform rotate-3 opacity-20"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-3 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="h-full flex flex-col justify-between p-6">
                      <div className="text-white text-center">
                        <div className="font-bold text-xl mb-1">环保科技展</div>
                        <p className="text-sm opacity-80">最新环保技术与设备</p>
                      </div>
                      
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                        <div className="text-white text-center">
                          <p className="text-sm font-medium">2023年12月15-18日</p>
                          <p className="text-sm">上海国际会展中心</p>
                          <div className="mt-3 w-full h-px bg-white/20"></div>
                          <p className="mt-2 text-xs">限时预约，享受VIP参观席位</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-eco-dark group backdrop-blur-sm">
                        立即预约 <Zap className="ml-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnnouncementsSection />
        
        <div className="my-10 h-px bg-gray-200"></div>
        
        <FeaturesSection />

        <div className="my-10 h-px bg-gray-200"></div>
        
        <FriendlyLinksSection />
      </div>
    </Layout>
  );
};

export default Index;
