"use client";

import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

import avatar from "@/assets/avatar.png";

import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    // @ts-expect-error: ignore next line
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-purple-400/50 px-3 py-1.5 text-sm">
          Ready to chat?
        </span>
        <h1 className="text-white/40 text-5xl last:md:text-7xl font-black">
          Hi, I am
        </h1>
        <h1
          className="max-w-3xl bg-gradient-to-br from-purple-400 to-gray-400 bg-clip-text
        font-black leading-tight text-transparent text-5xl last:md:text-7xl"
        >
          Gerald Baalham
        </h1>

        <Image src={avatar} alt="profile pic" width={350} />
        {/* <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <p className="font-medium">Many Happy Clients</p>
        </div> */}
        <p className="my-6 max-w-xl text-purple-400 text-center">
          Fullstack Developer based in the UK, with over 3 years of experience.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          Download CV
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
