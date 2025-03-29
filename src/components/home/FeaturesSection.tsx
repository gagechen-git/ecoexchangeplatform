
import React from "react";
import { BarChart3, RefreshCw, Truck, Settings, Shield, BookOpen, Factory, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <BarChart3 size={42} className="text-eco-dark" />,
    title: "交易服务",
    description: "提供多种类型固体废物的交易服务，规范有序",
    link: "/trading",
  },
  {
    id: 2,
    icon: <RefreshCw size={42} className="text-eco-dark" />,
    title: "大数据",
    description: "实时监测市场行情，提供准确数据分析",
    link: "/data",
  },
  {
    id: 3,
    icon: <Truck size={42} className="text-eco-dark" />,
    title: "运输服务",
    description: "对接专业运输团队，确保安全高效送达",
    link: "/trading",
  },
  {
    id: 4,
    icon: <Settings size={42} className="text-eco-dark" />,
    title: "设备交易",
    description: "环保设备一站式交易，便捷可靠",
    link: "/trading",
  },
  {
    id: 5,
    icon: <Shield size={42} className="text-eco-dark" />,
    title: "管理办法",
    description: "完善的交易规则与管理制度，保障交易安全",
    link: "/management",
  },
  {
    id: 6,
    icon: <BookOpen size={42} className="text-eco-dark" />,
    title: "知识资源",
    description: "环保技术与法规知识库，助力合规经营",
    link: "/management",
  },
  {
    id: 7,
    icon: <Factory size={42} className="text-eco-dark" />,
    title: "生态合作",
    description: "多方资源对接，促进产业链协同发展",
    link: "/cooperation",
  },
  {
    id: 8,
    icon: <FileText size={42} className="text-eco-dark" />,
    title: "政策解读",
    description: "及时更新行业政策，专业解读指导实践",
    link: "/announcements",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-10">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-center text-2xl font-bold text-eco-dark">核心功能</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {features.map((feature) => (
          <Link key={feature.id} to={feature.link} className="block">
            <div className="eco-card h-full flex flex-col items-center text-center p-4">
              <div className="mb-3 mt-2">{feature.icon}</div>
              <h3 className="text-lg font-bold text-eco-dark mb-2">{feature.title}</h3>
              <p className="text-eco-text text-sm">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
