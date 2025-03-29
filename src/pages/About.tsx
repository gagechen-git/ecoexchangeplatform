
import React from "react";
import Layout from "@/components/Layout";
import { Copy, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const About = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "复制成功",
      description: `已复制到剪贴板: ${text}`,
      duration: 3000,
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">关于我们</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-10">
              {/* Official Website */}
              <div>
                <h2 className="text-xl font-bold text-eco-dark mb-4">官网网址</h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-lg text-eco-dark font-medium">www.ecoexchange.com</div>
                  <button 
                    onClick={() => copyToClipboard("www.ecoexchange.com")}
                    className="text-eco-dark hover:text-eco-mid transition-colors"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>
              
              {/* Customer Service */}
              <div>
                <h2 className="text-xl font-bold text-eco-dark mb-4">官方客服电话</h2>
                <div className="flex items-center justify-center gap-3">
                  <Phone size={24} className="text-eco-dark" />
                  <div className="text-2xl text-eco-dark font-bold">400-123-4567</div>
                </div>
                <p className="text-eco-text mt-2">服务时间: 周一至周五 09:00-18:00</p>
              </div>
              
              {/* QR Code */}
              <div>
                <h2 className="text-xl font-bold text-eco-dark mb-4">客户端二维码</h2>
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 border-2 border-eco-dark p-1 rounded-md mb-3">
                    {/* Placeholder for QR code */}
                    <div className="w-full h-full bg-eco-light flex items-center justify-center">
                      <p className="text-eco-dark">二维码图片</p>
                    </div>
                  </div>
                  <p className="text-eco-text">扫码下载客户端</p>
                </div>
              </div>
              
              {/* Platform Introduction */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <h2 className="text-xl font-bold text-eco-dark mb-4">平台简介</h2>
                <p className="text-eco-text text-left">
                  固体废物综合交易平台是专为企业、政府和个人用户提供固体废物交易服务的专业平台。
                  我们致力于推动固体废物规范化管理和资源化利用，为实现"无废城市"建设目标贡献力量。
                  平台提供挂牌交易、竞价交易、运输服务等多种交易方式，确保交易安全、合规、高效。
                </p>
                <p className="text-eco-text text-left mt-4">
                  通过我们的平台，您可以便捷地参与固体废物交易，获取行业大数据分析，了解最新政策法规和市场动态。
                  我们将不断优化服务，为用户创造更大价值，共同推动绿色循环经济发展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
