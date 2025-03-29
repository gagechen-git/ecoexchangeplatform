
import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Management = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-eco-dark">管理办法</h1>
        
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger 
              value="rules"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              交易规则
            </TabsTrigger>
            <TabsTrigger 
              value="management"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              管理办法
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="rules" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex md:flex-row flex-col gap-8">
                <div className="md:w-1/4 w-full">
                  <div className="sticky top-4 border-l-4 border-eco-dark pl-4">
                    <h3 className="font-bold text-eco-dark mb-4">目录</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#section1" className="text-eco-text hover:text-eco-dark transition-colors">第一章 总则</a>
                      </li>
                      <li>
                        <a href="#section2" className="text-eco-text hover:text-eco-dark transition-colors">第二章 交易流程</a>
                      </li>
                      <li>
                        <a href="#section3" className="text-eco-text hover:text-eco-dark transition-colors">第三章 费用标准</a>
                      </li>
                      <li>
                        <a href="#section4" className="text-eco-text hover:text-eco-dark transition-colors">第四章 交易规范</a>
                      </li>
                      <li>
                        <a href="#section5" className="text-eco-text hover:text-eco-dark transition-colors">第五章 附则</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-3/4 w-full space-y-8">
                  <section id="section1">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第一章 总则</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第一条 为规范固体废物综合交易行为，保障交易各方合法权益，根据《中华人民共和国固体废物污染环境防治法》等相关法律法规，制定本规则。</p>
                      <p className="text-eco-text">第二条 本规则适用于在固体废物综合交易平台进行的各类交易活动。</p>
                      <p className="text-eco-text font-bold text-eco-dark">第三条 平台交易应当遵循公开、公平、公正和诚实信用的原则。</p>
                    </div>
                  </section>
                  
                  <section id="section2">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第二章 交易流程</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第四条 交易主体应当在平台注册并通过资质审核后，方可参与交易。</p>
                      <p className="text-eco-text">第五条 交易流程包括：</p>
                      <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li className="text-eco-text">信息发布</li>
                        <li className="text-eco-text">意向登记</li>
                        <li className="text-eco-text">资格审核</li>
                        <li className="text-eco-text">报价或竞价</li>
                        <li className="text-eco-text">成交确认</li>
                        <li className="text-eco-text font-bold text-eco-dark">合同签订与履行</li>
                      </ol>
                      <p className="text-eco-text">第六条 交易各方应当按照平台规定的时间节点完成相应操作。</p>
                    </div>
                  </section>
                  
                  <section id="section3">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第三章 费用标准</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第七条 平台收费项目包括注册费、交易服务费、信息发布费等。</p>
                      <p className="text-eco-text">第八条 具体收费标准：</p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-eco-light">
                              <th className="border border-gray-300 px-4 py-2 text-eco-dark">收费项目</th>
                              <th className="border border-gray-300 px-4 py-2 text-eco-dark">标准</th>
                              <th className="border border-gray-300 px-4 py-2 text-eco-dark">备注</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">注册费</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">2000元/年</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">按年收取</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">交易服务费</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">交易金额的0.5%</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">最低100元，最高10000元</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">信息发布费</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">200元/条</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">有效期30天</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  
                  <section id="section4">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第四章 交易规范</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第九条 交易主体应当提供真实、准确、完整的信息。</p>
                      <p className="text-eco-text font-bold text-eco-dark">第十条 禁止任何形式的欺诈、串通、恶意竞价等不正当交易行为。</p>
                      <p className="text-eco-text">第十一条 交易各方应当遵守国家环保法律法规，确保固体废物处置符合环保要求。</p>
                    </div>
                  </section>
                  
                  <section id="section5">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第五章 附则</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第十二条 本规则由固体废物综合交易平台负责解释。</p>
                      <p className="text-eco-text">第十三条 本规则自发布之日起施行。</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex md:flex-row flex-col gap-8">
                <div className="md:w-1/4 w-full">
                  <div className="sticky top-4 border-l-4 border-eco-dark pl-4">
                    <h3 className="font-bold text-eco-dark mb-4">目录</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#m-section1" className="text-eco-text hover:text-eco-dark transition-colors">第一章 总则</a>
                      </li>
                      <li>
                        <a href="#m-section2" className="text-eco-text hover:text-eco-dark transition-colors">第二章 平台管理制度</a>
                      </li>
                      <li>
                        <a href="#m-section3" className="text-eco-text hover:text-eco-dark transition-colors">第三章 违规处理</a>
                      </li>
                      <li>
                        <a href="#m-section4" className="text-eco-text hover:text-eco-dark transition-colors">第四章 申诉与仲裁</a>
                      </li>
                      <li>
                        <a href="#m-section5" className="text-eco-text hover:text-eco-dark transition-colors">第五章 附则</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-3/4 w-full space-y-8">
                  <section id="m-section1">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第一章 总则</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第一条 为加强固体废物综合交易平台管理，维护交易秩序，保障各方合法权益，制定本办法。</p>
                      <p className="text-eco-text">第二条 本办法适用于平台运营管理及交易主体管理。</p>
                    </div>
                  </section>
                  
                  <section id="m-section2">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第二章 平台管理制度</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第三条 平台实行会员制管理，会员分为普通会员和高级会员两类。</p>
                      <p className="text-eco-text">第四条 会员资质审核制度：</p>
                      <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li className="text-eco-text">会员注册需提供企业营业执照、环保资质证明等材料</li>
                        <li className="text-eco-text">平台在5个工作日内完成资质审核</li>
                        <li className="text-eco-text font-bold text-eco-dark">审核通过后，会员方可参与交易活动</li>
                      </ol>
                      <p className="text-eco-text">第五条 平台信息管理制度：</p>
                      <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li className="text-eco-text">交易信息发布前需经平台审核</li>
                        <li className="text-eco-text">信息内容应真实、准确、合法</li>
                        <li className="text-eco-text">禁止发布虚假、误导性信息</li>
                      </ol>
                    </div>
                  </section>
                  
                  <section id="m-section3">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第三章 违规处理</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第六条 违规行为分类：</p>
                      <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li className="text-eco-text">提供虚假资质信息</li>
                        <li className="text-eco-text">发布虚假交易信息</li>
                        <li className="text-eco-text">恶意竞价或串通报价</li>
                        <li className="text-eco-text font-bold text-eco-dark">交易成功后拒不履行合同义务</li>
                        <li className="text-eco-text">违反国家环保法律法规</li>
                      </ol>
                      <p className="text-eco-text">第七条 处罚措施：</p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-eco-light">
                              <th className="border border-gray-300 px-4 py-2 text-eco-dark">违规等级</th>
                              <th className="border border-gray-300 px-4 py-2 text-eco-dark">处罚措施</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">一般违规</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">警告、限制部分功能使用</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">严重违规</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">暂停交易权限1-3个月、罚款</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">特别严重违规</td>
                              <td className="border border-gray-300 px-4 py-2 text-eco-text">永久取消会员资格、列入黑名单</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  
                  <section id="m-section4">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第四章 申诉与仲裁</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第八条 会员对处罚决定不服的，可在收到处罚通知后5个工作日内提出申诉。</p>
                      <p className="text-eco-text">第九条 平台设立仲裁委员会，负责处理交易纠纷和申诉。</p>
                      <p className="text-eco-text font-bold text-eco-dark">第十条 仲裁委员会由平台代表、行业专家和法律顾问组成，独立行使职权。</p>
                    </div>
                  </section>
                  
                  <section id="m-section5">
                    <h2 className="text-xl font-bold text-eco-dark border-b border-gray-200 pb-2 mb-4">第五章 附则</h2>
                    <div className="space-y-4">
                      <p className="text-eco-text">第十一条 本办法由平台管理委员会负责解释。</p>
                      <p className="text-eco-text">第十二条 本办法自发布之日起施行。</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Management;
