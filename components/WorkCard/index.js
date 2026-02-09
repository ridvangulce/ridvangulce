import React from "react";

/* eslint-disable @next/next/no-img-element */
const WorkCard = ({ img, name, description, onClick, className }) => {
  return (
    <div
      className={`glass overflow-hidden rounded-xl p-3 mob:p-4 laptop:p-4 first:ml-0 link flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group ${className}`}
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-44 mob:h-52 tablet:h-48 laptop:h-auto flex-1 max-h-[480px]"
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
      <h1 className="mt-3 mob:mt-4 laptop:mt-5 text-lg mob:text-xl laptop:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-sm mob:text-base laptop:text-lg text-text-secondary mt-1 mob:mt-2">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
