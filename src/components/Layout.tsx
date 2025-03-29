
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

// Sample advertisement data
const advertisements = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "环保设备展销会",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "绿色技术创新峰会",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "固废处理新方案",
    link: "#",
  },
];

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className={`${showSidebar ? 'w-full md:w-7/10' : 'w-full'}`}>
            {children}
          </div>
          
          {showSidebar && <Sidebar advertisements={advertisements} />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
