
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, RefreshCw, Truck, Settings, Archive, Book, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TradingItem {
  id: number;
  title: string;
  description: string;
  status: "active" | "ended";
  type: string;
}

// Sample trading data
const tradingItems: TradingItem[] = [
  {
    id: 1,
    title: "废弃电器电子产品处理",
    description: "面向电子设备生产企业的废弃电子产品回收处理项目",
    status: "active",
    type: "listing",
  },
  {
    id: 2,
    title: "危险废物处置招标",
    description: "化工行业危险废物专业处置服务招标",
    status: "active",
    type: "listing",
  },
  {
    id: 3,
    title: "工业固体废物资源化利用",
    description: "钢铁厂产生的工业固废综合利用项目",
    status: "ended",
    type: "listing",
  },
  {
    id: 4,
    title: "建筑垃圾处理招标",
    description: "大型拆迁项目建筑垃圾清运与资源化处理",
    status: "active",
    type: "bidding",
  },
  {
    id: 5,
    title: "医疗废物处置服务",
    description: "医疗机构产生的医疗废物安全处置项目",
    status: "active",
    type: "bidding",
  },
  {
    id: 6,
    title: "废塑料回收再利用",
    description: "废弃塑料制品回收与再生利用交易",
    status: "ended",
    type: "bidding",
  },
  {
    id: 7,
    title: "危险废物跨省转移运输",
    description: "化工厂危险废物专业运输服务",
    status: "active",
    type: "transport",
  },
  {
    id: 8,
    title: "大型设备回收运输",
    description: "废弃大型工业设备的拆解与运输服务",
    status: "active",
    type: "transport",
  },
  {
    id: 9,
    title: "固废处理设备转让",
    description: "二手固废处理设备整体转让",
    status: "active",
    type: "equipment",
  },
  {
    id: 10,
    title: "垃圾分选设备招标",
    description: "垃圾分类处理中心自动分选设备采购",
    status: "active",
    type: "equipment",
  },
  {
    id: 11,
    title: "废弃物综合处理技术转让",
    description: "工业废弃物资源化处理专利技术转让",
    status: "active",
    type: "technology",
  },
  {
    id: 12,
    title: "污泥处理技术服务",
    description: "工业污泥处理与资源化利用技术服务",
    status: "active",
    type: "technology",
  },
];

const TradingCard = ({ item }: { item: TradingItem }) => {
  return (
    <div className="eco-card h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-eco-dark">{item.title}</h3>
        <Badge 
          className={
            item.status === "active" 
              ? "bg-green-500 hover:bg-green-600" 
              : "bg-gray-500 hover:bg-gray-600"
          }
        >
          {item.status === "active" ? "进行中" : "已结束"}
        </Badge>
      </div>
      
      <p className="text-eco-text mb-6 flex-grow">{item.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center text-eco-text">
          <Clock size={16} className="mr-1" />
          <span className="text-xs">
            {item.status === "active" ? "距结束: 3天" : "已于2024-12-15结束"}
          </span>
        </div>
        
        <Link 
          to={`/trading/${item.id}`}
          className="eco-button text-sm py-1 px-4"
        >
          进入交易
        </Link>
      </div>
    </div>
  );
};

const Trading = () => {
  const getTradingItems = (type: string) => {
    return tradingItems.filter(item => item.type === type);
  };

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">交易服务</h1>
        
        <Tabs defaultValue="listing" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-7 h-auto">
            <TabsTrigger 
              value="listing"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Archive size={18} />
              <span className="text-xs whitespace-nowrap">挂牌交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bidding"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <RefreshCw size={18} />
              <span className="text-xs whitespace-nowrap">竞价交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="transport"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Truck size={18} />
              <span className="text-xs whitespace-nowrap">运输交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="equipment"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Settings size={18} />
              <span className="text-xs whitespace-nowrap">设备交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="byproduct"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Database size={18} />
              <span className="text-xs whitespace-nowrap">副产品交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="goods"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Archive size={18} />
              <span className="text-xs whitespace-nowrap">商品交易</span>
            </TabsTrigger>
            <TabsTrigger 
              value="technology"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white flex flex-col items-center px-2 py-3 gap-1"
            >
              <Book size={18} />
              <span className="text-xs whitespace-nowrap">技术知识产权</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="listing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("listing").map(item => (
                <TradingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bidding" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("bidding").map(item => (
                <TradingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="transport" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("transport").map(item => (
                <TradingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="equipment" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("equipment").map(item => (
                <TradingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="byproduct" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("byproduct").length > 0 ? (
                getTradingItems("byproduct").map(item => (
                  <TradingCard key={item.id} item={item} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-eco-text">暂无副产品交易项目</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="goods" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("goods").length > 0 ? (
                getTradingItems("goods").map(item => (
                  <TradingCard key={item.id} item={item} />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-eco-text">暂无商品交易项目</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="technology" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTradingItems("technology").map(item => (
                <TradingCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Trading;
