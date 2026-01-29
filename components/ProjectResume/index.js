import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(
    typeof bullets === 'string' ? bullets.split(",") : []
  );

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2 className="font-bold text-text-primary">{dates}</h2>
        <h3 className="text-sm text-text-secondary opacity-70">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold text-primary">{position}</h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc ml-4">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-base my-2 text-text-secondary">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
