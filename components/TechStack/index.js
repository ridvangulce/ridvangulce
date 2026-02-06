import React from "react";

const TechBadge = ({ name, category }) => {
  return (
    <div className="glass glass-hover p-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-default">
      <p className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-1 opacity-60">
        {category}
      </p>
      <h3 className="text-lg font-bold text-text-primary">{name}</h3>
    </div>
  );
};

const TechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="mt-10 laptop:mt-20">
      <h1 className="text-2xl text-bold mb-2">Tech Stack.</h1>
      <p className="text-text-secondary mb-8">Technologies I work with regularly</p>

      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <TechBadge
            key={index}
            name={tech.name}
            category={tech.category}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
