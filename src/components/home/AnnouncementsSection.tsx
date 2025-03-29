
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const AnnouncementItem = ({ announcement, icon }) => (
  <div className="flex items-start space-x-3 p-3 hover:bg-eco-light rounded-md transition-colors">
    <div className="flex-shrink-0 mt-1 text-eco-dark">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-eco-dark hover:text-eco-mid transition-colors">
        <Link to={`/announcements/${announcement.id}`}>{announcement.title}</Link>
      </h4>
      <p className="text-xs text-gray-500 mb-1">{announcement.date}</p>
      <p className="text-sm text-eco-text">{announcement.description}</p>
    </div>
  </div>
);

const AnnouncementsSection = () => {
  return (
    <section className="py-8">
      <div className="flex items-center justify-center mb-8">
        <Megaphone className="text-eco-dark mr-2" size={24} />
        <h2 className="text-center text-2xl font-bold text-eco-dark">最新公告</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <FileText size={20} className="text-eco-dark mr-2" />
              <span>公司公告</span>
              <Link to="/announcements" className="text-sm ml-auto text-eco-dark hover:text-eco-mid">
                查看全部 &raquo;
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {companyAnnouncements.map((announcement) => (
              <AnnouncementItem
                key={announcement.id}
                announcement={announcement}
                icon={<FileText size={18} />}
              />
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Calendar size={20} className="text-eco-dark mr-2" />
              <span>交易公告</span>
              <Link to="/announcements" className="text-sm ml-auto text-eco-dark hover:text-eco-mid">
                查看全部 &raquo;
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {tradingAnnouncements.map((announcement) => (
              <AnnouncementItem
                key={announcement.id}
                announcement={announcement}
                icon={<Calendar size={18} />}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
