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
        <span className="font-medium">Computer Science Engineering</span> with a
        strong passion for programming. Since my 12th grade.{" "}
        <span className="italic">My favorite part of programming</span> is the
        phase when I am learning new concepts. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My favorite programming languages include{" "}
        <span className="font-medium">Java, JavaScript, Golang,</span> and
        databases such as{" "}
        <span className="font-medium">PostgreSQL and MongoDB</span>. I am also
        familiar with <span className="font-medium">Docker & Kubernetes</span>,
        which are essential tools in modern software development. I am always
        looking to learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">Intern position</span> as a Software
        Developer.
      </p>
    </motion.section>
  );
}
