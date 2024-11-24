
import React from "react";
import SkillbarOne from "./SkillbarOne";
import SkillbarTwo from "./SkillbarTwo";


const Skillbar = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="mb-12 flex flex-col items-center lg:items-start w-full">
            <h5 className="text-blue-600 mb-4 text-center lg:text-start ">2018 - 2021</h5>
            <h3 className="text-4xl font-bold text-white text-center lg:text-start">
              Development Skills
            </h3>
          </div>
          <div>
            <SkillbarOne/>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h5 className="text-blue-600 mb-4 text-center lg:text-start">2018 - 2021</h5>
            <h3 className="text-4xl font-bold text-white text-center lg:text-start">
              Development Skills
            </h3>
          </div>
          <div>
            <SkillbarTwo/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Skillbar;
