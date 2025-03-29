
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import FriendlyLinksSection from "@/components/home/FriendlyLinksSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Leaf, Earth, TreeDeciduous } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Advertisement Banner with environmental background */}
        <section className="py-8 mb-10 bg-gradient-to-r from-eco-dark to-eco-mid rounded-lg overflow-hidden relative">
          {/* Environmental background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-5 left-10 opacity-20">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-10 left-1/4 opacity-20">
              <TreeDeciduous className="w-16 h-16 text-white" />
            </div>
            <div className="absolute top-1/3 right-10 opacity-20">
              <Earth className="w-20 h-20 text-white" />
            </div>
            
            {/* Wave patterns */}
            <div className="absolute bottom-0 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="opacity-10">
                <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
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
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-3">
                    <div className="h-full flex flex-col justify-between p-6">
                      <div className="text-white text-center">
                        <div className="font-bold text-xl mb-1">环保科技展</div>
                        <p className="text-sm opacity-80">最新环保技术与设备</p>
                      </div>
                      
                      <div className="bg-white/20 p-4 rounded-lg">
                        <div className="text-white text-center">
                          <p className="text-sm font-medium">2023年12月15-18日</p>
                          <p className="text-sm">上海国际会展中心</p>
                          <div className="mt-3 w-full h-px bg-white/20"></div>
                          <p className="mt-2 text-xs">限时预约，享受VIP参观席位</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-eco-dark">
                        立即预约
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="hidden md:block absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white opacity-5"></div>
          <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white opacity-5"></div>
          <div className="hidden md:block absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-white opacity-10"></div>
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
