"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const AboutSection = () => {

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
          I am an experienced web and mobile developer dedicated to creating
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
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-2xl max-md:mt-7 font-semibold text-white"
          >
            My skills include but aren&apos;t limited to:
          </motion.p>
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
            <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-3">
              {skills.map((skill) => (
                <div key={skill.alt}>
                  <Image
                    src={skill.src}
                    width={50}
                    height={50}
                    alt={skill.alt}
                  />
                  <p className="mt-[0.5rem]">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
