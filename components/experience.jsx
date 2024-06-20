"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";

const experience = [
  {
    title: "Core Team - Developer",
    company_name: "Arka Linux GUI",
    date: "Mar 2024 - Present",
    details: [
      "Developed a <span style='color: white;'>user-friendly Welcome application</span> for Arka Linux GUI, aiding users in navigating Arch-based Linux distributions efficiently.",
      "Revamped the ALG website, enhancing its design and functionality to provide a more <span style='color: white;'>engaging user experience.</span>",
      "<span style='color: white;'>Contributed as a core team member</span>, driving innovation and user-focused improvements for Arch Linux GUI.",
    ],
  },
  {
    title: "Production Engineer (Team Lead)",
    company_name: "TCET-Opensource",
    date: "Jul 2023 - Mar 2024",
    details: [
      "<span style='color: white;'>Collaborated</span> with the development team to establish automated daily unit tests, streamlining bug identification and resolution processes.",
      "Spearheaded the adoption of continuous integration and deployment practices, resulting in a <span style='color: white;'>25% reduction in delivery time and a decrease in production defects.</span>",
      "<span style='color: white;'>Played a key role</span> in enhancing application performance, leading to improved response times and infrastructure scalability.",
    ],
  },
  {
    title: "Google Cloud Study Jam Facilitator",
    company_name: "GDSC-TCET",
    date: "Sept 2023 - Aug 2024",
    details: [
      "Managed <span style='color: white;'>150 students in Google Cloud Study Jam</span>, ensuring high engagement and completion rates.",
      "Offered personalized mentorship, resolving technical hurdles and <span style='color: white;'>enhancing student satisfaction through practical guidance.</span>",
      "Optimized program delivery for Google Cloud Study Jam, ensuring a successful and engaging learning experience.",
    ],
  },
];

const ExperienceCard = ({ experience, onClick, isActive, isMobile, theme }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? (theme === "dark" ? "text-quaternary" : "text-primary") : ""
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      {(isActive || isMobile) && (
        <div
          className={`absolute left-0 top-0 bottom-0 w-3 md:w-5 ${
            theme === "dark" ? "bg-tertiary" : "bg-primary"
          } my-6 sm:block hidden`}
        ></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-semibold sm:pl-8 ${
          isActive || isMobile
            ? theme === "dark"
              ? "text-quaternary"
              : "text-primary"
            : "text-slate-600"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile
            ? theme === "dark"
              ? "text-white"
              : "text-primary"
            : "text-slate-600"
        }`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </motion.div>
  );
};

const ExperienceDetails = ({ experience, theme }) => {
  return (
    <div className="mt-5">
      <ul
        className={`max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 ${
          theme === "dark" ? "border-white" : "border-black"
        }`}
      >
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className={`text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px] ${
              theme === "dark" ? "text-slate-500" : "text-black"
            }`}
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [selectedJob, setSelectedJob] = useState(experience[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My experience</SectionHeading>
      <div className="sm:my-20 lg:ml-[10rem] lg:mr-[10rem]">
        <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
          <div className="flex flex-col z-10 sm:w-auto sm:w-full">
            <AnimatePresence>
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={exp}
                  onClick={() => setSelectedJob(exp)}
                  isActive={selectedJob === exp}
                  isMobile={isMobile}
                  theme={theme}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-end z-10 sm:block hidden w-full sm:w-auto">
            <ExperienceDetails experience={selectedJob} theme={theme} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
