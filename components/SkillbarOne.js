"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "Next.js", level: 75 },
];

const SkillbarOne = () => {
  return (
    <>
     
        <div className="w-full">
          
          <div>
            {skills.map((skill) => {
              const ref = React.useRef(null);
              const isInView = useInView(ref, { once: true });

              return (
                <div key={skill.name} className="mb-4" ref={ref}>
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-lg font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="bg-blue-600 h-4 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
       
     
    </>
  );
};

export default SkillbarOne;
