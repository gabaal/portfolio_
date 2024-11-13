"use client";

import project1 from "@/assets/proj5.png";
import project2 from "@/assets/proj6.png";
import project3 from "@/assets/proj7.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
const projects = [
  {
    id: 1,
    year: 2024,
    title: "Doodle - support chatbot",
    description:
      "An advanced customer support chatbot that now handles 87% of the clients customer support queries..",
    image: project1,
  },
  {
    id: 2,
    year: 2024,
    title: "Dash - AI calling system",
    description:
      "AI powered calling system thant enhances customer communication and support with automated features.",
    image: project2,
  },
  {
    id: 3,
    year: 2023,
    title: "Atomic - AI driven outreach",
    description:
      "Maximise engagement and conversations with this intelligent automated outreach tool.",
    image: project3,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-purple-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors 
              ${selectedProject.id === project.id ? "text-purple-500" : ""}  
                duration-300`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
};
