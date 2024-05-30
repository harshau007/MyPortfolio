"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import SectionHeading from "./section-heading";
import GithubContributions from "./githubContri";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const Github = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const { theme } = useTheme();
  const { ref } = useSectionInView("Github");

  return (
    <section
      id="github"
      ref={ref}
      className="mb-12 sm:mb-20 px-4 sm:px-8 py-8 sm:py-12 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md"
    >
      <SectionHeading>Github</SectionHeading>
      <div className="flex flex-col items-center mt-8">
        <div className="w-full mx-auto overflow-x-auto sm:p-10 sm:overflow-visible lg:max-w-none">
          <GitHubCalendar
            colorScheme={theme ? "dark" : "light"}
            year={year}
            className="mb-6 sm:overflow-visible lg:overflow-visible px-2 sm:px-0"
            username="harshau007"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <motion.button
            disabled={year === new Date("2020").getFullYear()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setYear(year - 1)}
            className={`text-xl sm:text-2xl md:text-3xl text-white ${
              theme
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            } font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 sm:mb-0`}
          >
            {"<"}
          </motion.button>
          <motion.button
            disabled={year === currentYear}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setYear(year + 1)}
            className={`text-xl sm:text-2xl md:text-3xl text-white ${
              theme
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            } font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 sm:mb-0`}
          >
            {">"}
          </motion.button>
        </div>
      </div>
      <GithubContributions />
    </section>
  );
};

export default Github;
