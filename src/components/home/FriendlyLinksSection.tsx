
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const friendlyLinks = [
  {
    id: 1,
    name: "生态环境部官网",
    url: "https://www.mee.gov.cn/",
  },
  {
    id: 2,
    name: "固体废物管理中心",
    url: "https://www.mee.gov.cn/hjzl/sthjzk/gtfwwrfz/",
  },
  {
    id: 3,
    name: "生态环境厅官网",
    url: "https://sthjt.provincial-gov.cn/",
  },
  {
    id: 4,
    name: "生态环境局官网",
    url: "https://sthjj.city-gov.cn/",
  },
];

const FriendlyLinksSection = () => {
  return (
    <section className="py-10">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-center text-2xl font-bold text-eco-dark">友情链接</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {friendlyLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 hover:text-eco-dark text-eco-text transition-colors group p-3 rounded-md border border-gray-100 hover:border-eco-light"
            >
              <span className="font-medium">{link.name}</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendlyLinksSection;
