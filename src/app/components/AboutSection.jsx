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
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-3">
        <div>
          <Image
            src="images/skill-icons/html-5-svgrepo-com.svg"
            width={50}
            height={50}
            alt="html-icon"
          />
          <p className="mt-[0.5rem]">HTML</p>
        </div>
        <div>
          <Image
            src="images/skill-icons/css-3-svgrepo-com.svg"
            width={50}
            height={50}
            alt="css-icon"
          />
          <p className="mt-[0.5rem]">CSS</p>
        </div>
        <div>
          <Image
            src="images/skill-icons/tailwindcss-icon-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="tailwind-icon">
            Tailwindcss
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/javascript-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="javascript-icon">
            Javascript
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/typescript-icon-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="typecript-icon">
            Typescript
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/react-js-icon.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="typecript-icon">
            React
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/nextjs-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            Nextjs
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/react-native.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            React Native
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/firebase-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            Firebase
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/postgresql-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            PostgreSQL
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/jest-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            Jest
          </p>
        </div>
        <div>
          <Image
            src="images/skill-icons/mongo-svgrepo-com.svg"
            width={50}
            height={50}
          />
          <p className="mt-[0.5rem]" alt="nextjs-icon">
            Mongodb
          </p>
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="px-4 md:px-10 lg:px-20 my-7"
      >
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          About Me
        </h2>
        <p className="text-base lg:text-lg mb-5">
          I am a dedicated web and mobile developer with a passion for creating
          innovative and user-friendly solutions. With a keen eye for detail and
          a knack for problem-solving, I transform ideas into reality.
        </p>
        <p className="text-base lg:text-lg mb-5">
          Whether you&apos;re a solo entrepreneur, a startup seeking a reliable
          development partner or an established company looking to enhance your
          digital presence, I am committed to delivering exceptional results.
          Let&apos;s collaborate to bring your vision to life.
        </p>
      </motion.div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            src="/images/about-image.avif"
            width={500}
            height={500}
            alt="about-image"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-row justify-start mt-8 max-[280px]:flex-wrap"
          >
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
            }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
