import React from 'react';

const MacBookFrame = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      {/* Screen Frame */}
      <div className="relative bg-[#1a1a1a] rounded-t-[1rem] p-[3%] pt-[2%] shadow-2xl ring-1 ring-white/10">
        {/* Camera */}
        <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[1%] h-[1%] bg-[#0d0d0d] rounded-full z-20 shadow-inner ring-1 ring-white/5"></div>

        {/* Screen Content Area */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-white rounded-[4px] border border-[#333]">
          {children}
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative w-full">
         {/* Hinge/Chin */}
         <div className="h-[12px] bg-[#dbe0e5] rounded-b-[1rem] shadow-md border-t border-[#caced4] relative z-10 px-[12%]">
            <div className="w-[15%] h-[4px] bg-[#aeb5bb] rounded-b-[4px] mx-auto opacity-80 shadow-inner"></div>
         </div>
      </div>
    </div>
  );
};

export default MacBookFrame;
