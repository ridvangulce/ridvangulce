import React from "react";

const WorkCardSkeleton = () => {
  return (
    <div
      className="glass overflow-hidden rounded-xl p-2 laptop:p-4 first:ml-0 flex flex-col"
      aria-hidden="true"
    >
      {/* Skeleton Image */}
      <div className="relative rounded-lg overflow-hidden h-48 mob:h-auto flex-1 max-h-[480px] bg-text-secondary/10">
        <div className="skeleton-shimmer w-full h-full"></div>
      </div>

      {/* Skeleton Title */}
      <div className="mt-5 space-y-2">
        <div className="h-7 bg-text-secondary/10 rounded-md w-3/4 skeleton-shimmer"></div>
        <div className="h-7 bg-text-secondary/10 rounded-md w-1/2 skeleton-shimmer"></div>
      </div>

      {/* Skeleton Description */}
      <div className="mt-2 space-y-2">
        <div className="h-5 bg-text-secondary/10 rounded-md w-full skeleton-shimmer"></div>
        <div className="h-5 bg-text-secondary/10 rounded-md w-5/6 skeleton-shimmer"></div>
        <div className="h-5 bg-text-secondary/10 rounded-md w-4/6 skeleton-shimmer"></div>
      </div>
    </div>
  );
};

export default WorkCardSkeleton;
