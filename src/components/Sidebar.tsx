
import React from "react";

interface SidebarProps {
  advertisements: {
    id: number;
    image: string;
    title: string;
    link: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ advertisements }) => {
  const [currentAdIndex, setCurrentAdIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <aside className="w-full md:w-3/10 bg-eco-light p-4 rounded-lg">
      <h3 className="text-eco-dark font-bold text-lg mb-4">广告区</h3>
      
      {/* Dynamic Advertisement */}
      <div className="relative h-56 mb-6 border border-eco-dark rounded-lg overflow-hidden">
        {advertisements.map((ad, index) => (
          <div 
            key={ad.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentAdIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img 
              src={ad.image} 
              alt={ad.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-eco-dark bg-opacity-70 p-2">
              <p className="text-white text-sm">{ad.title}</p>
            </div>
            <a 
              href={ad.link}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-30 transition-opacity"
            >
              <span className="bg-eco-dark text-white px-3 py-1 rounded-md text-sm">
                了解更多
              </span>
            </a>
          </div>
        ))}
        
        {/* Indicators */}
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {advertisements.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentAdIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentAdIndex(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Static Advertisement */}
      <div className="border border-eco-dark rounded-lg p-3 bg-white">
        <h4 className="text-eco-dark font-bold text-base mb-2">合作企业</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-100 h-16 flex items-center justify-center rounded">
            <span className="text-xs text-eco-text">企业1</span>
          </div>
          <div className="bg-gray-100 h-16 flex items-center justify-center rounded">
            <span className="text-xs text-eco-text">企业2</span>
          </div>
          <div className="bg-gray-100 h-16 flex items-center justify-center rounded">
            <span className="text-xs text-eco-text">企业3</span>
          </div>
          <div className="bg-gray-100 h-16 flex items-center justify-center rounded">
            <span className="text-xs text-eco-text">企业4</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
