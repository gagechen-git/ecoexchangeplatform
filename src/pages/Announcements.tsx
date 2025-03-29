
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample announcements data
const companyAnnouncements = [
  {
    id: 1,
    title: "关于平台升级维护的通知",
    date: "2025-02-01",
    category: "平台政策",
  },
  {
    id: 2,
    title: "固废平台新增功能上线公告",
    date: "2025-01-15",
    category: "平台政策",
  },
  {
    id: 3,
    title: "2024年度平台运营报告发布",
    date: "2025-01-10",
    category: "活动通知",
  },
  {
    id: 4,
    title: "春节期间平台服务安排",
    date: "2025-01-05",
    category: "活动通知",
  },
  {
    id: 5,
    title: "关于调整交易手续费的通知",
    date: "2024-12-28",
    category: "平台政策",
  },
  {
    id: 6,
    title: "年度用户满意度调查开始",
    date: "2024-12-20",
    category: "活动通知",
  },
  {
    id: 7,
    title: "平台安全升级公告",
    date: "2024-12-15",
    category: "平台政策",
  },
  {
    id: 8,
    title: "关于防范交易欺诈的重要提示",
    date: "2024-12-10",
    category: "平台政策",
  },
  {
    id: 9,
    title: "固废交易监管新规解读",
    date: "2024-12-05",
    category: "平台政策",
  },
  {
    id: 10,
    title: "平台年度优秀企业评选活动",
    date: "2024-12-01",
    category: "活动通知",
  },
];

const tradingAnnouncements = [
  {
    id: 1,
    title: "第45批危险废物处置招标结果公示",
    date: "2025-01-28",
    category: "交易结果",
  },
  {
    id: 2,
    title: "2月份固体废物交易时间安排",
    date: "2025-01-20",
    category: "开标通知",
  },
  {
    id: 3,
    title: "紧急通知：特殊废物处置专场",
    date: "2025-01-12",
    category: "开标通知",
  },
  {
    id: 4,
    title: "第44批工业固废处置项目中标公告",
    date: "2025-01-08",
    category: "交易结果",
  },
  {
    id: 5,
    title: "关于医疗废物处置价格调整的公告",
    date: "2025-01-02",
    category: "交易结果",
  },
  {
    id: 6,
    title: "第43批废弃电子产品回收交易结果",
    date: "2024-12-25",
    category: "交易结果",
  },
  {
    id: 7,
    title: "年末大型固废处置交易会通知",
    date: "2024-12-18",
    category: "开标通知",
  },
  {
    id: 8,
    title: "建筑废料资源化利用项目招标",
    date: "2024-12-15",
    category: "开标通知",
  },
  {
    id: 9,
    title: "第42批危险废物处置结果公示",
    date: "2024-12-10",
    category: "交易结果",
  },
  {
    id: 10,
    title: "废塑料回收再利用交易专场",
    date: "2024-12-05",
    category: "开标通知",
  },
];

const AnnouncementList = ({ announcements, searchTerm, timeFilter }) => {
  // Apply filters
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch = announcement.title.includes(searchTerm) || 
                          announcement.category.includes(searchTerm);
    
    if (!timeFilter) return matchesSearch;
    
    const announcementDate = new Date(announcement.date);
    const today = new Date();
    
    if (timeFilter === "week") {
      const weekAgo = new Date();
      weekAgo.setDate(today.getDate() - 7);
      return matchesSearch && announcementDate >= weekAgo;
    }
    
    if (timeFilter === "month") {
      const monthAgo = new Date();
      monthAgo.setMonth(today.getMonth() - 1);
      return matchesSearch && announcementDate >= monthAgo;
    }
    
    return matchesSearch;
  });

  return (
    <div className="space-y-4">
      {filteredAnnouncements.map((announcement) => (
        <div 
          key={announcement.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-eco-dark transition-colors"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 bg-eco-light text-eco-dark rounded">
                {announcement.category}
              </span>
              <h3 className="font-medium text-eco-dark hover:text-eco-mid transition-colors cursor-pointer">
                {announcement.title}
              </h3>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center text-eco-text text-sm">
              <Calendar size={16} className="mr-1" />
              {announcement.date}
            </div>
            
            <Button variant="outline" className="text-eco-dark border-eco-dark hover:bg-eco-light">
              查看详情
            </Button>
          </div>
        </div>
      ))}
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-eco-dark border-eco-dark">
            1
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-eco-dark border-eco-dark">
            2
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-eco-dark border-eco-dark">
            3
          </Button>
          <span className="text-eco-text">...</span>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-eco-dark border-eco-dark">
            10
          </Button>
        </div>
      </div>
    </div>
  );
};

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("");

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">公告</h1>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex gap-4">
            <Button 
              variant={timeFilter === "" ? "default" : "outline"}
              onClick={() => setTimeFilter("")}
              className={timeFilter === "" ? "bg-eco-dark hover:bg-eco-mid" : "border-eco-dark text-eco-dark hover:bg-eco-light"}
            >
              全部
            </Button>
            <Button 
              variant={timeFilter === "week" ? "default" : "outline"}
              onClick={() => setTimeFilter("week")}
              className={timeFilter === "week" ? "bg-eco-dark hover:bg-eco-mid" : "border-eco-dark text-eco-dark hover:bg-eco-light"}
            >
              最近一周
            </Button>
            <Button 
              variant={timeFilter === "month" ? "default" : "outline"}
              onClick={() => setTimeFilter("month")}
              className={timeFilter === "month" ? "bg-eco-dark hover:bg-eco-mid" : "border-eco-dark text-eco-dark hover:bg-eco-light"}
            >
              最近一个月
            </Button>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="搜索公告..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-eco-dark focus:ring-eco-dark"
            />
          </div>
        </div>
        
        {/* Tabs and Content */}
        <Tabs defaultValue="company" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger 
              value="company"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              公司公告
            </TabsTrigger>
            <TabsTrigger 
              value="trading"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              交易公告
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="company" className="mt-6">
            <AnnouncementList 
              announcements={companyAnnouncements}
              searchTerm={searchTerm}
              timeFilter={timeFilter}
            />
          </TabsContent>
          
          <TabsContent value="trading" className="mt-6">
            <AnnouncementList 
              announcements={tradingAnnouncements}
              searchTerm={searchTerm}
              timeFilter={timeFilter}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Announcements;
