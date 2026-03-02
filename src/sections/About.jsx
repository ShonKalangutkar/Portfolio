import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shonkalangutkar1998@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      {/* Increased row count to 6 to allow more granular control over height */}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* First Card: Profile */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col justify-center items-center">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div className="mt-8">
              <p className="grid-headtext">Hi, I'm Shon Kalangutkar</p>
              <p className="grid-subtext">
                I’m a Python Backend Developer specializing in Django, Flask,
                and AI systems. I’ve consistently turned critical gaps into
                production-ready solutions — from unblocking Kubernetes projects
                to building functional AI demos from scratch. Wherever I work, I
                focus on ownership, impact, and leaving systems stronger than I
                found them.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card: Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col justify-center items-center">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div className="mt-8">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I design and develop robust backend-driven applications using Python (Django/Flask) alongside modern React frontends.
              </p>
            </div>
          </div>
        </div>

        {/* Third Card: Globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex flex-col justify-center items-center">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.jpg"
              />
            </div>
            <div className="mt-4">
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext text-center">
                I'm based in India, with remote work available.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Fourth Card: Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex flex-col justify-center items-center">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div className="mt-4">
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Card: Copy Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col justify-center items-center">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 mt-4">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="copy-container flex justify-center items-center gap-2 cursor-pointer"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  shonkalangutkar1998@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
