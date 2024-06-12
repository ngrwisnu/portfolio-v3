import React from "react";
import data from "../../data/works";
import ProjectCard from "@/components/works/project-card";

const Page = () => {
  return (
    <section id="works-page" className="w-full">
      <div className="container-content min-h-screen flex flex-col gap-10 md:py-24 py-9 max-lg:px-4">
        <div className="flex w-full max-w-[1440px] justify-center items-center font-bold text-[32px]">
          <h2>
            <span className="text-list-400">Side</span> Works: Exploring New
            Ideas & Techs
          </h2>
        </div>
        <ul className="flex flex-wrap justify-evenly gap-4">
          {data
            .map((work) => {
              if (work.isSelected === false) {
                return (
                  <ProjectCard
                    key={work.slug}
                    title={work.title}
                    description={work.description}
                    linkTo={work.linkExternal}
                    imgUrl={work.imgUrls[0]}
                    bgColor={work.bgColor}
                  />
                );
              }
            })
            .reverse()}
        </ul>
      </div>
    </section>
  );
};

export default Page;
