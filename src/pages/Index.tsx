
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="py-8 mb-10 bg-eco-light rounded-lg overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">固体废物综合交易平台</h1>
                <p className="text-lg md:text-xl text-eco-text mb-8">绿色交易，循环未来</p>
                <Button className="eco-button px-8 py-3 text-lg group">
                  查看交易服务 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="md:w-1/3 bg-eco-dark rounded-lg p-4 text-white">
                <div className="bg-eco-mid p-1 mb-3 rounded text-center">
                  <span className="text-xs font-bold uppercase tracking-wider">特别推广</span>
                </div>
                <h3 className="font-bold text-xl mb-2">年度固废处理设备展</h3>
                <p className="text-sm mb-3">即将在上海举办，展示最新环保技术与设备</p>
                <div className="bg-white/10 p-3 rounded-lg mb-3">
                  <p className="text-sm font-medium">2023年12月15-18日</p>
                  <p className="text-sm">上海国际会展中心</p>
                </div>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-eco-dark">
                  申请参展名额
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-eco-mid opacity-10"></div>
          <div className="hidden md:block absolute top-5 right-20 w-20 h-20 rounded-full bg-eco-dark opacity-10"></div>
        </section>

        <AnnouncementsSection />
        
        <div className="my-10 h-px bg-gray-200"></div>
        
        <FeaturesSection />
      </div>
    </Layout>
  );
};

export default Index;
