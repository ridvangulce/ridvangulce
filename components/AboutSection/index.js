import React from "react";

const AboutSection = ({ aboutpara }) => {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <div className="glass rounded-2xl p-8 mob:p-6 tablet:p-10 laptop:p-12 transition-all duration-300 hover:shadow-2xl">
        {/* Header with gradient accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h1 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold">
            About<span className="gradient-text">.</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid laptop:grid-cols-12 gap-6 laptop:gap-8">
          {/* Main Text */}
          <div className="laptop:col-span-8">
            <p className="text-lg tablet:text-xl laptop:text-2xl leading-relaxed text-text-primary">
              {aboutpara}
            </p>
          </div>

          {/* Stats/Highlights Side Panel */}
          <div className="laptop:col-span-4 flex flex-col gap-4">
            <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl tablet:text-4xl font-bold gradient-text mb-1">3+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Years Experience</div>
            </div>

            <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl tablet:text-4xl font-bold gradient-text mb-1">12+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Projects Delivered</div>
            </div>

            <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl tablet:text-4xl font-bold gradient-text mb-1">REST API</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">Specialist Focus</div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Bar */}
        <div className="mt-8 pt-6 border-t border-glass-border">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-text-secondary font-medium">Core Expertise:</span>
            <div className="flex flex-wrap gap-2">
              {["Backend Development", "API Design", "Database Optimization", "Performance Tuning"].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
