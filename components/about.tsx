"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing my degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>with a strong passion for programming. Since my 12th grade.{" "}
        <span className="italic">My favorite part of programming</span> is the
        phase when I am learning new concepts. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My favorite programming languages include
        {" "}
        <span className="font-medium">
          Java, JavaScript, Golang,
        </span> as well as databases such as <span className="font-medium">PostgreSQL and MongoDB</span>
        . I am also familiar with <span className="font-medium">Docker & Kubernetes</span>, which are essential tools in modern software development. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Intern position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        games, watching movies, and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        deepening my understanding of{" "}
        <span className="font-medium">JWT authentication</span>.
      </p>
    </motion.section>
  );
}
