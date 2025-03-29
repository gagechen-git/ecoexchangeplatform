
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText } from "lucide-react";

const companyAnnouncements = [
  {
    id: 1,
    title: "关于平台升级维护的通知",
    date: "2025-02-01",
    description: "平台将于2025年2月5日进行系统升级维护，届时服务将暂停4小时...",
  },
  {
    id: 2,
    title: "固废平台新增功能上线公告",
    date: "2025-01-15",
    description: "我们新增了智能匹配和数据分析功能，提升用户体验...",
  },
  {
    id: 3,
    title: "2024年度平台运营报告发布",
    date: "2025-01-10",
    description: "2024年度平台交易额突破2亿元，服务企业超过500家...",
  },
];

const tradingAnnouncements = [
  {
    id: 1,
    title: "第45批危险废物处置招标结果公示",
    date: "2025-01-28",
    description: "本次招标共有15家企业参与，最终由环保科技有限公司中标...",
  },
  {
    id: 2,
    title: "2月份固体废物交易时间安排",
    date: "2025-01-20",
    description: "2月份将举行三场大型交易会，详细时间安排如下...",
  },
  {
    id: 3,
    title: "紧急通知：特殊废物处置专场",
    date: "2025-01-12",
    description: "应急处置需求，将于本周五举行特殊废物处置专场交易会...",
  },
];

const AnnouncementCard = ({ announcement, type }) => (
  <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3 mt-1">
        {type === "company" ? (
          <FileText size={20} className="text-eco-dark" />
        ) : (
          <Calendar size={20} className="text-eco-dark" />
        )}
      </div>
      <div>
        <h4 className="font-bold text-eco-dark hover:text-eco-mid transition-colors">
          <Link to={`/announcements/${announcement.id}`}>{announcement.title}</Link>
        </h4>
        <p className="text-xs text-gray-500 mb-1">{announcement.date}</p>
        <p className="text-sm text-eco-text">{announcement.description}</p>
      </div>
    </div>
  </div>
);

const AnnouncementsSection = () => {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-bold text-eco-dark mb-10">最新公告</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-eco-dark">公司公告</h3>
            <Link to="/announcements" className="text-sm text-eco-dark hover:text-eco-mid">
              查看全部 &raquo;
            </Link>
          </div>
          
          <div className="space-y-4">
            {companyAnnouncements.map((announcement) => (
              <AnnouncementCard 
                key={announcement.id} 
                announcement={announcement} 
                type="company" 
              />
            ))}
          </div>
        </div>
        
        {/* Trading Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-eco-dark">交易公告</h3>
            <Link to="/announcements" className="text-sm text-eco-dark hover:text-eco-mid">
              查看全部 &raquo;
            </Link>
          </div>
          
          <div className="space-y-4">
            {tradingAnnouncements.map((announcement) => (
              <AnnouncementCard 
                key={announcement.id} 
                announcement={announcement} 
                type="trading" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
