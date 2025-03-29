
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
        {/* Advertisement Banner with tech-inspired background */}
        <section className="py-8 mb-10 bg-gradient-to-r from-eco-dark to-eco-mid rounded-lg overflow-hidden relative">
          {/* Tech-inspired background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Tech icons */}
            <div className="absolute top-8 left-10 opacity-20">
              <Cpu className="w-14 h-14 text-white" />
            </div>
            <div className="absolute bottom-12 left-1/4 opacity-20">
              <Server className="w-16 h-16 text-white" />
            </div>
            <div className="absolute top-1/3 right-10 opacity-20">
              <Database className="w-16 h-16 text-white" />
            </div>
            <div className="absolute bottom-1/4 right-1/3 opacity-20">
              <CircuitBoard className="w-20 h-20 text-white" />
            </div>
            <div className="absolute top-1/2 left-16 opacity-20">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="absolute bottom-10 right-16 opacity-20">
              <Code className="w-12 h-12 text-white" />
            </div>
            
            {/* Digital circuit pattern background */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit-pattern-ad" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M10 10L50 10L50 50L90 50" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M10 50L30 50L30 90" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M50 50L50 90" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M70 10L70 30L90 30" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M90 50L110 50L110 90" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M30 90L70 90L70 110" stroke="white" strokeWidth="1" fill="none" />
                  <circle cx="10" cy="10" r="2" fill="white" />
                  <circle cx="50" cy="10" r="2" fill="white" />
                  <circle cx="10" cy="50" r="2" fill="white" />
                  <circle cx="50" cy="50" r="2" fill="white" />
                  <circle cx="90" cy="50" r="2" fill="white" />
                  <circle cx="110" cy="50" r="2" fill="white" />
                  <circle cx="70" cy="10" r="2" fill="white" />
                  <circle cx="90" cy="30" r="2" fill="white" />
                  <circle cx="30" cy="90" r="2" fill="white" />
                  <circle cx="50" cy="90" r="2" fill="white" />
                  <circle cx="70" cy="90" r="2" fill="white" />
                  <circle cx="110" cy="90" r="2" fill="white" />
                  <circle cx="70" cy="110" r="2" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern-ad)" />
              </svg>
            </div>
            
            {/* Wave patterns */}
            <div className="absolute bottom-0 w-full opacity-15">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="opacity-20">
                <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-cyan-200 opacity-20 blur-xl"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <div className="bg-white/20 inline-block px-3 py-1 rounded-full mb-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">广告推广</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2023年度环保科技展</h2>
                <p className="text-lg text-white/90 mb-6">探索前沿环保技术，共建绿色未来</p>
                <Button className="bg-white text-eco-dark hover:bg-eco-light hover:text-eco-dark px-6 py-2 group">
                  了解详情 <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-eco-light rounded-lg transform rotate-3 opacity-20"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-3 border border-white/20">
                    <div className="h-full flex flex-col justify-between p-6">
                      <div className="text-white text-center">
                        <div className="font-bold text-xl mb-1">环保科技展</div>
                        <p className="text-sm opacity-80">最新环保技术与设备</p>
                      </div>
                      
                      <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                        <div className="text-white text-center">
                          <p className="text-sm font-medium">2023年12月15-18日</p>
                          <p className="text-sm">上海国际会展中心</p>
                          <div className="mt-3 w-full h-px bg-white/20"></div>
                          <p className="mt-2 text-xs">限时预约，享受VIP参观席位</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-eco-dark group">
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
