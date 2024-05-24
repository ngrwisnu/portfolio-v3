"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import EmailButton from "../ui/email-button";
import LitUpButton from "../ui/litUp-button";

const About = () => {
  return (
    <section id="about" className="mt-20 flex w-full justify-center px-4">
      <div className="container-content flex flex-col gap-10 text-neutral-900">
        <div className="flex w-full max-w-[1440px] justify-center items-center font-bold text-[32px]">
          <h2>
            Ngr Wisnu: The <span className="text-list-400">Web Developer</span>
          </h2>
        </div>
        <BentoGrid>
          {data.map((item) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.desc}
              className={item.className}
              cover={item.cover}
              action={item.action}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;

const data = [
  {
    id: "1",
    className:
      "md:row-span-4 border border-slate-300 bg-[#F1F5F9]  max-md:order-first",
  },
  {
    id: "2",
    title: "Education",
    desc: "Bachelor of Science in Electrical Engineering (2022)",
    className: "border border-slate-300 bg-[#F1F5F9]  max-md:order-3",
  },
  {
    id: "3",
    className: "bg-[#0D0F0F] max-md:order-1",
    action: (
      <div className="absolute p-4 inset-0 flex md:flex-col lg:flex-row justify-center items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/ngrwisnu"
          className="text-white text-sm font-medium flex gap-1 items-center justify-center"
        >
          <FaLinkedin /> LinkedIn
        </Link>
        <Link
          href="https://github.com/ngrwisnu"
          className="text-white text-sm font-medium flex gap-1 items-center justify-center"
        >
          <FaGithub /> Github
        </Link>
        <EmailButton />
      </div>
    ),
  },
  {
    id: "4",
    desc: "My web development journey began in early 2020 with a deep dive into UI/UX. I delved into design process and principles, explored deliverables expected of UX/UI designers, and honed my layout and visual hierarchy skills. This journey equipped me to create wireframes, low-fidelity, and high-fidelity mockups.",
    className:
      "border border-slate-300 bg-slate-200 md:row-span-3 leading-[30px] max-md:order-4",
  },
  {
    id: "5",
    action: (
      <div className="absolute p-4 z-10 inset-0 flex md:flex-col justify-center items-center gap-4">
        <LitUpButton
          text="Resume"
          link="/assets/docs/CV-Ngr-Wisnu-Adiprayogo.pdf"
          icon={<MdFileDownload />}
        />
      </div>
    ),
    className: "bg-[#0D0F0F] max-md:order-2",
  },
  {
    id: "6",
    cover: "/assets/images/bento-icons.png",
    className: "md:row-span-2 max-md:h-[212px] bg-[#0D0F0F] max-md:order-last",
  },
  {
    id: "7",
    className: "max-md:hidden",
  },
  {
    id: "8",
    desc: "In 2021, I started by building a solid foundation in the core languages - HTML, CSS, and JavaScript. This strong base fueled my passion for front-end development, leading me to explore the vast world of libraries and frameworks. ReactJS and NextJS have become my go-to tools for crafting dynamic and interactive user interfaces. Additionally, I've been expanding my skillset by learning how to create modular web pages and leverage APIs to integrate external data seamlessly.",
    className:
      "border border-slate-300 bg-[#F1F5F9] md:col-span-2 leading-[30px] max-md:order-6",
  },
];
