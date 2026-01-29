import React from "react";

const WorkCard = ({ img, name, description, onClick, className }) => {
  return (
    <div
      className={`glass overflow-hidden rounded-xl p-2 laptop:p-4 first:ml-0 link flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group ${className}`}
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto flex-1 max-h-[480px]"
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-all ease-out duration-700 group-hover:scale-110"
          src={img}
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">View Project &rarr;</span>
        </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-lg text-text-secondary mt-2">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
