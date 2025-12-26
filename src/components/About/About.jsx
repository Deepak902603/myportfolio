import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/portpolio.png";

const About = () => {
  return (
    <section id="about" className="pt-28 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Hi, I am
          </h1>

          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Deepak Ranjan Rath
          </h2>

          <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec]">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
                "IT Trainer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p className="mt-8 text-base sm:text-lg text-gray-400 leading-relaxed">
            I am a full-stack developer with over 1 year of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and modern
            technologies.
          </p>

          <a
            href="https://drive.google.com/file/d/1F445yZ4Eu5tJj_2oK74TYnvnjLZpJa2F/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-white py-3 px-8 rounded-full text-lg font-bold transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 30px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05}>
            <div
              className="
                w-56 h-64
                sm:w-64 sm:h-72
                md:w-96 md:h-[26rem]
                rounded-full
                border-4 border-purple-700
                overflow-hidden
                shadow-[0_0_50px_rgba(130,69,236,0.6)]
              "
            >
              <img
                src={profileImage}
                alt="Deepak Ranjan Rath"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
