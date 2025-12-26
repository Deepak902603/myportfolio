import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-skills-gradient clip-path-custom-3"
    >
      <div className="max-w-7xl mx-auto px-6 font-sans">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg">
            My education has been a journey of learning and development.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

          {/* Education Items */}
          <div className="flex flex-col space-y-16">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center z-10 hidden sm:flex">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[45%] bg-gray-900 border border-white p-6 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.3)] transition-transform hover:scale-105 ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {edu.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 font-semibold">
                    Grade: {edu.grade}
                  </p>
                  <p className="text-gray-400 mt-2">
                    {edu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
