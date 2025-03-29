
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RegisterForm = ({ type }) => {
  const [formStep, setFormStep] = useState(1);
  
  let formTitle = "经营单位注册";
  let formFields = [];
  
  if (type === "business") {
    formTitle = "经营单位注册";
    formFields = [
      { id: "companyName", label: "企业名称", type: "text", required: true },
      { id: "socialCredit", label: "统一社会信用代码", type: "text", required: true },
      { id: "businessLicense", label: "营业执照", type: "file", required: true },
      { id: "address", label: "企业地址", type: "text", required: true },
      { id: "contactName", label: "联系人姓名", type: "text", required: true },
      { id: "contactPhone", label: "联系电话", type: "tel", required: true },
      { id: "email", label: "电子邮箱", type: "email", required: true },
      { id: "wasteType", label: "主营废物类型", type: "select", required: true },
    ];
  } else if (type === "transport") {
    formTitle = "运输企业注册";
    formFields = [
      { id: "companyName", label: "企业名称", type: "text", required: true },
      { id: "socialCredit", label: "统一社会信用代码", type: "text", required: true },
      { id: "businessLicense", label: "营业执照", type: "file", required: true },
      { id: "transportLicense", label: "道路运输许可证", type: "file", required: true },
      { id: "address", label: "企业地址", type: "text", required: true },
      { id: "contactName", label: "联系人姓名", type: "text", required: true },
      { id: "contactPhone", label: "联系电话", type: "tel", required: true },
      { id: "email", label: "电子邮箱", type: "email", required: true },
      { id: "vehicleCount", label: "车辆数量", type: "number", required: true },
      { id: "transportType", label: "主营运输类型", type: "select", required: true },
    ];
  } else if (type === "service") {
    formTitle = "市场服务机构注册";
    formFields = [
      { id: "orgName", label: "机构名称", type: "text", required: true },
      { id: "socialCredit", label: "统一社会信用代码", type: "text", required: true },
      { id: "businessLicense", label: "营业执照", type: "file", required: true },
      { id: "qualificationCert", label: "资质证书", type: "file", required: true },
      { id: "address", label: "机构地址", type: "text", required: true },
      { id: "contactName", label: "联系人姓名", type: "text", required: true },
      { id: "contactPhone", label: "联系电话", type: "tel", required: true },
      { id: "email", label: "电子邮箱", type: "email", required: true },
      { id: "serviceType", label: "服务类型", type: "select", required: true },
    ];
  }
  
  const renderFormField = (field) => {
    if (field.type === "file") {
      return (
        <div key={field.id} className="space-y-2">
          <Label htmlFor={field.id} className="text-eco-dark">{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
          <Input 
            id={field.id} 
            type="file" 
            className="border-eco-dark"
          />
        </div>
      );
    } else if (field.type === "select") {
      return (
        <div key={field.id} className="space-y-2">
          <Label htmlFor={field.id} className="text-eco-dark">{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
          <Select>
            <SelectTrigger id={field.id} className="border-eco-dark">
              <SelectValue placeholder={`请选择${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">选项1</SelectItem>
              <SelectItem value="option2">选项2</SelectItem>
              <SelectItem value="option3">选项3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
    } else {
      return (
        <div key={field.id} className="space-y-2">
          <Label htmlFor={field.id} className="text-eco-dark">{field.label} {field.required && <span className="text-red-500">*</span>}</Label>
          <Input 
            id={field.id} 
            type={field.type} 
            className="border-eco-dark"
            placeholder={`请输入${field.label}`}
          />
        </div>
      );
    }
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-eco-dark">{formTitle}</CardTitle>
        <CardDescription>
          请填写以下信息完成注册，带 <span className="text-red-500">*</span> 的为必填项
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formStep === 1 && (
          <div className="space-y-4">
            {formFields.slice(0, Math.ceil(formFields.length / 2)).map(renderFormField)}
            <div className="pt-4 text-right">
              <Button 
                className="bg-eco-dark hover:bg-eco-mid"
                onClick={() => setFormStep(2)}
              >
                下一步
              </Button>
            </div>
          </div>
        )}
        
        {formStep === 2 && (
          <div className="space-y-4">
            {formFields.slice(Math.ceil(formFields.length / 2)).map(renderFormField)}
            
            <div className="pt-4 flex justify-between">
              <Button 
                variant="outline" 
                className="border-eco-dark text-eco-dark hover:bg-eco-light"
                onClick={() => setFormStep(1)}
              >
                上一步
              </Button>
              <Button className="bg-eco-dark hover:bg-eco-mid">
                提交注册
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const LoginForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-eco-dark">账号登录</CardTitle>
        <CardDescription>
          请输入您的账号和密码
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username" className="text-eco-dark">用户名</Label>
          <Input id="username" className="border-eco-dark" placeholder="请输入用户名" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-eco-dark">密码</Label>
          <Input id="password" type="password" className="border-eco-dark" placeholder="请输入密码" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-eco-text cursor-pointer">
              记住我
            </label>
          </div>
          <Link to="#" className="text-sm text-eco-dark hover:text-eco-mid">
            忘记密码?
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-eco-dark hover:bg-eco-mid">
          登录
        </Button>
      </CardFooter>
    </Card>
  );
};

const Login = () => {
  return (
    <Layout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-eco-dark mb-8 text-center">用户登录与注册</h1>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              登录
            </TabsTrigger>
            <TabsTrigger 
              value="business"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              经营单位注册
            </TabsTrigger>
            <TabsTrigger 
              value="transport"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              运输企业注册
            </TabsTrigger>
            <TabsTrigger 
              value="service"
              className="data-[state=active]:bg-eco-dark data-[state=active]:text-white"
            >
              市场服务机构注册
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="business">
            <RegisterForm type="business" />
          </TabsContent>
          
          <TabsContent value="transport">
            <RegisterForm type="transport" />
          </TabsContent>
          
          <TabsContent value="service">
            <RegisterForm type="service" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Login;
