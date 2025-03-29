
import React from "react";
import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

// Sample cooperation partners
const partners = [
  {
    id: 1,
    name: "生态环境部官网",
    description: "国家生态环境部官方网站，提供环保政策法规和行业动态。",
    url: "https://www.mee.gov.cn/",
    icon: "/placeholder.svg",
  },
  {
    id: 2,
    name: "固体废物与化学品管理中心",
    description: "负责全国固体废物和化学品环境管理的技术支持机构。",
    url: "http://www.meescc.cn/",
    icon: "/placeholder.svg",
  },
  {
    id: 3,
    name: "生态环境厅官网",
    description: "各省市生态环境厅官方网站，提供地方环保信息。",
    url: "#",
    icon: "/placeholder.svg",
  },
  {
    id: 4,
    name: "生态环境局官网",
    description: "各市区生态环境局官方网站，提供本地区环保动态。",
    url: "#",
    icon: "/placeholder.svg",
  },
];

const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-eco-light flex items-center justify-center mb-4">
          <img 
            src={partner.icon} 
            alt={partner.name}
            className="w-16 h-16 object-contain"
          />
        </div>
        
        <h3 className="text-xl font-bold text-eco-dark mb-2 text-center">{partner.name}</h3>
        <p className="text-eco-text text-center mb-6">{partner.description}</p>
        
        <a 
          href={partner.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-eco-dark font-medium hover:text-eco-mid transition-colors"
        >
          访问官网 <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const Cooperation = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">生态合作</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-eco-text mb-6">
            固体废物综合交易平台与国家生态环境部门和相关机构保持密切合作，共同推进固体废物规范化管理和资源化利用，
            为建设美丽中国、实现绿色发展贡献力量。您可以通过以下链接访问我们的合作伙伴网站，获取最新的政策法规和行业动态。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cooperation;
