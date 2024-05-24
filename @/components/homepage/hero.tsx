"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 text-3xl text-center md:text-7xl font-bold dark:text-white"
        >
          <div>Transforming</div>
          <div>
            <span className="text-list-400">UI/UX</span> Design into
          </div>
          <div>
            Reality <span className="text-list-400">Front-End</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute bottom-[4%] flex flex-col gap-2 items-center justify-center px-4 text-center dark:text-white max-w-[598px] mt-5 text-base md:text-xl leading-[30px]"
        >
          <div className="font-semibold ">Ngr Wisnu</div>
          <div className="font-normal">
            is a web developer, skilled in both front-end and back-end
            development, with a focus on using JavaScript and its libraries to
            build modern web applications.
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
