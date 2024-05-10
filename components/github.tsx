"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import SectionHeading from "./section-heading";
import Reveal, { Zoom } from "react-awesome-reveal";
import GithubContributions from "./githubContri";


const Github = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const { ref } = useSectionInView("Github");
  return (
    <section
      id="github"
      ref={ref}
      className="mb-28 max-w-[153rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Github</SectionHeading>
        <div className="relative z-[20] flex flex-col items-center gap-10 justify-center">
        <GitHubCalendar 
          colorScheme="dark"
          year={year}
          style={{
            marginBottom: '1rem'
          }}
          username="harshau007"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
        <div className="flex justify-center gap-4">
          <button
            disabled={year === new Date("2020").getFullYear()}
            className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 hover:bg-blue-600 font-bold py-0 px-4 rounded-2xl border-2 border-inherit"
            onClick={() => setYear(year - 1)}
          >
            {`<`}
          </button>
          <button
            disabled={year === currentYear}
            className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 hover:bg-blue-600 font-bold py-0 px-4 rounded-2xl border-2 border-inherit"
            onClick={() => setYear(year + 1)}
          >
            {`>`}
          </button>
        </div>
      </div>
      <GithubContributions/>
    </section>
  );
};

export default Github;
