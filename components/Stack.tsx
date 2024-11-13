import React from "react";
import { FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb, SiPrisma, SiClerk, SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Javascript", icon: FaJava, color: "ffffff" },
  { id: 3, name: "Typescript", icon: SiTypescript, color: "#3178c6" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { id: 5, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 6, name: "Prisma", icon: SiPrisma, color: "#ffffff" },
  { id: 7, name: "Clerk", icon: SiClerk, color: "#6e49ff" },
  { id: 8, name: "Vercel", icon: SiVercel, color: "#000000" },
  { id: 9, name: "HTML", icon: FaHtml5, color: "#ffffff" },
  { id: 10, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-purple-400 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
