
import React from "react";
import { BarChart3, RefreshCw, Truck, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <BarChart3 size={48} className="text-eco-dark" />,
    title: "交易服务",
    description: "提供多种类型固体废物的交易服务，规范有序",
    link: "/trading",
  },
  {
    id: 2,
    icon: <RefreshCw size={48} className="text-eco-dark" />,
    title: "大数据",
    description: "实时监测市场行情，提供准确数据分析",
    link: "/data",
  },
  {
    id: 3,
    icon: <Truck size={48} className="text-eco-dark" />,
    title: "运输服务",
    description: "对接专业运输团队，确保安全高效送达",
    link: "/trading",
  },
  {
    id: 4,
    icon: <Settings size={48} className="text-eco-dark" />,
    title: "设备交易",
    description: "环保设备一站式交易，便捷可靠",
    link: "/trading",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-bold text-eco-dark mb-10">核心功能</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Link key={feature.id} to={feature.link} className="block">
            <div className="eco-card flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-eco-dark mb-2">{feature.title}</h3>
              <p className="text-eco-text">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
