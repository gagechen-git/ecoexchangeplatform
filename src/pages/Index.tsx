
import React from "react";
import Layout from "@/components/Layout";
import FeaturesSection from "@/components/home/FeaturesSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <FeaturesSection />
        <AnnouncementsSection />
      </div>
    </Layout>
  );
};

export default Index;
