"use client";

import React from "react";
import SelectedWork from "./selected-work";
import data from "../../../../data/works";
import BaseButton from "@/components/ui/base-button";
import { useRouter } from "next/navigation";

const SelectedWorks = () => {
  const { push } = useRouter();

  return (
    <section
      id="works"
      className="w-full min-h-screen mt-20 px-4 dark:text-white"
    >
      <div className="container-content flex flex-col gap-10">
        <div className="flex w-full max-w-[1440px] justify-center items-center font-bold text-[32px]">
          <h2>
            <span className="text-list-400">Works</span> You Can See
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-evenly gap-10 max-md:items-center">
          {data
            .map((work) => {
              if (work.isSelected === true) {
                return (
                  <SelectedWork
                    key={work.slug}
                    title={work.title}
                    description={work.description}
                    imgUrl={work.imgUrls[0]}
                    stack={work.stack}
                    slug={work.slug}
                    externalLink={work.linkExternal}
                  />
                );
              }
            })
            .reverse()}
        </div>
        <div className="flex items-center justify-center">
          <BaseButton size="lg" actionFn={() => push("/works")}>
            More Works
          </BaseButton>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
