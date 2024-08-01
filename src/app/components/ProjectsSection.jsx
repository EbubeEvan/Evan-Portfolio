"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Trankeep",
    description: "A business Management platform built with typescript, React, Next.js, Tailwindcss and PostgreSQL.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EbubeEvan/Trankeep",
    previewUrl: "https://trankeep.vercel.app/",
  },
  {
    id: 2,
    title: "BeautyCare AI",
    description: "An AI-powered beauty consultation application where women can chat with a large language model that is a beauty specialist. Built with typescript, React, Next.js, Tailwindcss, Mongodb and Google Gemini.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EbubeEvan/Beauty-Care-AI",
    previewUrl: "https://beauty-care-ai.vercel.app/",
  },
  {
    id: 3,
    title: "Clearlink",
    description: "The landing page for Clearlink video conferencing app. Built with Typescript, React, Nextjs and Tailwindcss.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EbubeEvan/Clear-link",
    previewUrl: "https://clearlink-jet.vercel.app/",
  },
  {
    id: 4,
    title: "Wura",
    description: "An online payment solution. Built with React, Typescript and Tailwindcss. In Progress.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    previewUrl: "https://wura-dev.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // const filteredProjects = projectsData.filter((project) =>
  //   project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-[5rem]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
