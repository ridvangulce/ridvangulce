import React from "react";

const AboutSection = ({ aboutpara }) => {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <div className="glass rounded-2xl p-5 mob:p-6 tablet:p-8 laptop:p-12 transition-all duration-300 hover:shadow-2xl">
        {/* Header with gradient accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h1 className="text-2xl mob:text-3xl tablet:text-4xl laptop:text-5xl font-bold">
            About<span className="gradient-text">.</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid laptop:grid-cols-12 gap-6 laptop:gap-8">
          {/* Main Text */}
          <div className="laptop:col-span-8">
            <p className="text-base mob:text-lg tablet:text-xl laptop:text-2xl leading-relaxed text-text-primary">
              {aboutpara}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
