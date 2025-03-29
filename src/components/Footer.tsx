
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">固体废物综合交易平台</h3>
            <p className="text-white text-sm">© 2025 固体废物综合交易平台。保留所有权利。</p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">联系方式</h3>
            <p className="text-white text-sm mb-2">电子邮箱: contact@ecoexchange.com</p>
            <p className="text-white text-sm">电话: 400-123-4567</p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">友情链接</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="#" className="text-white text-sm hover:text-eco-light">生态环境部官网</Link>
              <Link to="#" className="text-white text-sm hover:text-eco-light">固体废物管理中心</Link>
              <Link to="#" className="text-white text-sm hover:text-eco-light">生态环境厅官网</Link>
              <Link to="#" className="text-white text-sm hover:text-eco-light">生态环境局官网</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
