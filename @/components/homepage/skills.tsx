import React from "react";

const Skills = () => {
  const skills = {
    fe: [
      "javascript",
      "jQuery",
      "react",
      "next",
      "vue",
      "sass",
      "bootstrap",
      "tailwind",
    ],
    be: ["node", "express"],
    others: [
      "ui/ux",
      "figma",
      "rest-api",
      "mongodb",
      "postgresql",
      "prisma",
      "typescript",
      "docker",
    ],
  };

  return (
    <section className="flex w-full flex-col items-center gap-10 bg-neutral-900 py-[136px] px-4 text-neutral-100">
      <div className="flex w-full max-w-[1440px] justify-center items-center font-bold text-[32px]">
        <h2>
          My Dev <span className="text-list-200">Arsenal</span>
        </h2>
      </div>
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-10 divide-y divide-neutral-100">
        <div className="flex flex-wrap content-center items-center gap-8 self-stretch py-4">
          {skills.fe.map((item) => (
            <div
              className="text-3xl font-normal uppercase md:text-5xl"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap content-center items-center gap-8 self-stretch py-4">
          {skills.be.map((item) => (
            <div
              className="text-3xl font-normal uppercase md:text-5xl"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap content-center items-center gap-8 self-stretch py-4">
          {skills.others.map((item) => (
            <div
              className="text-3xl font-normal uppercase md:text-5xl"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
