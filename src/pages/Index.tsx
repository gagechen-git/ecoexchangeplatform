
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="py-10 mb-10 bg-eco-light rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">固体废物综合交易平台</h1>
            <p className="text-lg md:text-xl text-eco-text mb-8">绿色交易，循环未来</p>
            <button className="eco-button px-8 py-3 text-lg">立即注册</button>
          </div>
        </section>

        <AnnouncementsSection />
        
        <div className="my-10 h-px bg-gray-200"></div>
        
        <FeaturesSection />
      </div>
    </Layout>
  );
};

export default Index;
