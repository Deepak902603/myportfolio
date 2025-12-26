import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-skills-gradient"
    >
      <div className="max-w-7xl mx-auto px-6 font-sans">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3"></div>
          <p className="text-gray-400 mt-3 text-base max-w-2xl mx-auto">
            A collection of my technical skills and expertise
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SkillsInfo.map((category) => (
            <Tilt
              key={category.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.01}
              transitionSpeed={600}
            >
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg h-full">

                <h3 className="text-xl font-semibold text-gray-300 mb-5 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 border border-gray-700 rounded-full px-2 py-1.5 hover:border-[#8245ec] transition"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
