
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Advertisement Banner */}
        <section className="py-8 mb-10 bg-gradient-to-r from-eco-dark to-eco-mid rounded-lg overflow-hidden relative">
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
      </div>
    </Layout>
  );
};

export default Index;
