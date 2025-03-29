
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean; // Make the showSidebar prop optional
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="w-full">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
