"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-3">
        <div>
        <Image src='images/skill-icons/html-5-svgrepo-com.svg' width={50} height={50} alt="html-icon"/>
        <p className="mt-[0.5rem]">HTML</p>
        </div>
        <div>
        <Image src='images/skill-icons/css-3-svgrepo-com.svg' width={50} height={50} alt="css-icon"/>
        <p className="mt-[0.5rem] ml-2">CSS</p>
        </div>
        <div>
        <Image src='images/skill-icons/tailwindcss-icon-svgrepo-com.svg' width={50} height={50}/>
        <p className="mt-[0.5rem] ml-[-1rem]" alt="tailwind-icon">Tailwindcss</p>
        </div>
        <div>
        <Image src='images/skill-icons/javascript-svgrepo-com.svg' width={50} height={50}/>
        <p className="mt-[0.5rem] ml-[-0.7rem]" alt="javascript-icon">Javascript</p>
        </div>
        <div>
        <Image src='images/skill-icons/typescript-icon-svgrepo-com.svg' width={50} height={50}/>
        <p className="mt-[0.5rem] ml-[-0.7rem]" alt="typecript-icon">Typescript</p>
        </div>
        <div>
        </div>
        <div>
        <Image src='images/skill-icons/nextjs-svgrepo-com.svg' width={50} height={50}/>
        <p className="mt-[0.5rem]" alt="nextjs-icon">Nextjs</p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Stutern Graduate Accelerator</li>
        <li>University of Nigeria, Nsukka</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate of Completion, Stutern Graduate Accelerator</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white max-md:mt-[5rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
        <Image src="/images/about-image.avif" width={500} height={500} alt="about-image" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }} className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, Tailwincss, Javascript, Typescript, React, Next.js and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
         className="flex flex-row justify-start mt-8 max-[280px]:flex-wrap">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
