
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Search } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample price data
const priceData = [
  { month: "1月", 危险废物: 2500, 一般工业固废: 1800, 再生资源: 1200 },
  { month: "2月", 危险废物: 2300, 一般工业固废: 1700, 再生资源: 1100 },
  { month: "3月", 危险废物: 2600, 一般工业固废: 1900, 再生资源: 1300 },
  { month: "4月", 危险废物: 2800, 一般工业固废: 2000, 再生资源: 1400 },
  { month: "5月", 危险废物: 3000, 一般工业固废: 2200, 再生资源: 1500 },
  { month: "6月", 危险废物: 2700, 一般工业固废: 2100, 再生资源: 1350 },
];

// Sample transport data
const transportData = [
  { month: "1月", 公路运输: 1200, 铁路运输: 800, 水路运输: 400 },
  { month: "2月", 公路运输: 1300, 铁路运输: 750, 水路运输: 450 },
  { month: "3月", 公路运输: 1400, 铁路运输: 850, 水路运输: 500 },
  { month: "4月", 公路运输: 1500, 铁路运输: 900, 水路运输: 550 },
  { month: "5月", 公路运输: 1600, 铁路运输: 950, 水路运输: 600 },
  { month: "6月", 公路运输: 1700, 铁路运输: 1000, 水路运输: 650 },
];

// Sample transaction data
const transactionData = [
  { id: 1, date: "2025-01-15", type: "危险废物", price: 2500, volume: 50, total: 125000 },
  { id: 2, date: "2025-01-12", type: "一般工业固废", price: 1800, volume: 80, total: 144000 },
  { id: 3, date: "2025-01-10", type: "再生资源", price: 1200, volume: 100, total: 120000 },
  { id: 4, date: "2025-01-05", type: "危险废物", price: 2600, volume: 45, total: 117000 },
  { id: 5, date: "2025-01-03", type: "一般工业固废", price: 1750, volume: 75, total: 131250 },
  { id: 6, date: "2024-12-28", type: "再生资源", price: 1150, volume: 120, total: 138000 },
  { id: 7, date: "2024-12-22", type: "危险废物", price: 2550, volume: 60, total: 153000 },
  { id: 8, date: "2024-12-18", type: "一般工业固废", price: 1850, volume: 70, total: 129500 },
  { id: 9, date: "2024-12-15", type: "再生资源", price: 1250, volume: 90, total: 112500 },
  { id: 10, date: "2024-12-10", type: "危险废物", price: 2450, volume: 55, total: 134750 },
];

const Data = () => {
  const [wasteType, setWasteType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">大数据</h1>
        
        <Tabs defaultValue="price" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
            <TabsTrigger 
              value="price"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              价格查询
            </TabsTrigger>
            <TabsTrigger 
              value="data"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              数据查询
            </TabsTrigger>
            <TabsTrigger 
              value="index"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              指数查询
            </TabsTrigger>
            <TabsTrigger 
              value="transport"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              运输查询
            </TabsTrigger>
          </TabsList>
          
          {/* Price Query */}
          <TabsContent value="price" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-sm text-eco-text mb-1">废物类型</label>
                  <Select value={wasteType} onValueChange={setWasteType}>
                    <SelectTrigger className="border-eco-dark">
                      <SelectValue placeholder="选择废物类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hazardous">危险废物</SelectItem>
                      <SelectItem value="industrial">一般工业固废</SelectItem>
                      <SelectItem value="recyclable">再生资源</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-eco-text mb-1">时间范围</label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="border-eco-dark">
                      <SelectValue placeholder="选择时间范围" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">近1个月</SelectItem>
                      <SelectItem value="3months">近3个月</SelectItem>
                      <SelectItem value="6months">近6个月</SelectItem>
                      <SelectItem value="1year">近1年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-eco-text mb-1">关键词</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input 
                      placeholder="搜索..." 
                      className="pl-10 border-eco-dark"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button className="bg-eco-dark hover:bg-eco-mid w-full">查询</Button>
                </div>
              </div>
              
              {/* Chart */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-eco-dark">价格走势图</h3>
                  <Button variant="outline" className="border-eco-dark text-eco-dark hover:bg-eco-light">
                    <Download size={16} className="mr-2" />
                    导出Excel
                  </Button>
                </div>
                
                <div className="h-80 border border-gray-200 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="危险废物" stroke="#2E7D32" strokeWidth={2} />
                      <Line type="monotone" dataKey="一般工业固废" stroke="#66BB6A" strokeWidth={2} />
                      <Line type="monotone" dataKey="再生资源" stroke="#A5D6A7" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Data Table */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-eco-dark">历史交易数据</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-eco-light">
                        <th className="border border-gray-300 px-4 py-2 text-eco-dark">日期</th>
                        <th className="border border-gray-300 px-4 py-2 text-eco-dark">废物类型</th>
                        <th className="border border-gray-300 px-4 py-2 text-eco-dark">单价(元/吨)</th>
                        <th className="border border-gray-300 px-4 py-2 text-eco-dark">交易量(吨)</th>
                        <th className="border border-gray-300 px-4 py-2 text-eco-dark">交易总额(元)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionData.map((item) => (
                        <tr key={item.id}>
                          <td className="border border-gray-300 px-4 py-2 text-eco-text">{item.date}</td>
                          <td className="border border-gray-300 px-4 py-2 text-eco-text">{item.type}</td>
                          <td className="border border-gray-300 px-4 py-2 text-eco-text">{item.price}</td>
                          <td className="border border-gray-300 px-4 py-2 text-eco-text">{item.volume}</td>
                          <td className="border border-gray-300 px-4 py-2 text-eco-text">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Transport Query */}
          <TabsContent value="transport" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-sm text-eco-text mb-1">运输类型</label>
                  <Select>
                    <SelectTrigger className="border-eco-dark">
                      <SelectValue placeholder="选择运输类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="road">公路运输</SelectItem>
                      <SelectItem value="railway">铁路运输</SelectItem>
                      <SelectItem value="water">水路运输</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-eco-text mb-1">起始地</label>
                  <Select>
                    <SelectTrigger className="border-eco-dark">
                      <SelectValue placeholder="选择起始地" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beijing">北京市</SelectItem>
                      <SelectItem value="shanghai">上海市</SelectItem>
                      <SelectItem value="guangzhou">广州市</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-eco-text mb-1">目的地</label>
                  <Select>
                    <SelectTrigger className="border-eco-dark">
                      <SelectValue placeholder="选择目的地" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beijing">北京市</SelectItem>
                      <SelectItem value="shanghai">上海市</SelectItem>
                      <SelectItem value="guangzhou">广州市</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-end">
                  <Button className="bg-eco-dark hover:bg-eco-mid w-full">查询</Button>
                </div>
              </div>
              
              {/* Transport Chart */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-eco-dark">运输量统计</h3>
                  <Button variant="outline" className="border-eco-dark text-eco-dark hover:bg-eco-light">
                    <Download size={16} className="mr-2" />
                    导出Excel
                  </Button>
                </div>
                
                <div className="h-80 border border-gray-200 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={transportData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="公路运输" fill="#2E7D32" />
                      <Bar dataKey="铁路运输" fill="#66BB6A" />
                      <Bar dataKey="水路运输" fill="#A5D6A7" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Data Query */}
          <TabsContent value="data" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="text-xl font-bold text-eco-dark mb-4">数据查询功能即将上线</h3>
              <p className="text-eco-text">我们正在努力开发更丰富的数据查询功能，敬请期待。</p>
              <Calendar size={64} className="text-eco-dark mt-6" />
            </div>
          </TabsContent>
          
          {/* Index Query */}
          <TabsContent value="index" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="text-xl font-bold text-eco-dark mb-4">指数查询功能即将上线</h3>
              <p className="text-eco-text">我们正在努力开发行业指数查询功能，敬请期待。</p>
              <Calendar size={64} className="text-eco-dark mt-6" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Data;
