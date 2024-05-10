import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tcetlinux from "@/public/tcetlinux.png";
import osjob from "@/public/osjob.png";
import ducker from "@/public/ducker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Github",
    hash: "#github",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BE in Computer Science Engineering",
    location: "Mumbai, MH",
    description:
      "Pursuing my dream of becoming an engineer with excellent knowledge in fields like Backend & DevOps Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Production Engineer",
    location: "Mumbai, MH",
    description:
      "I am working as a Production Engineer for 6 months at TCET-Opensource which is a Technical Club at TCET Mumbai.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "TCET-Linux",
    description:
      "I have been working as a Production Engineer on this project for the past 6 months",
    tags: ["Linux","Arch", "Shell", "GitHub"],
    imageUrl: tcetlinux,
    link: "https://github.com/tcet-opensource/tcet-linux",
  },
  {
    title: "OS Portal",
    description:
      "I worked as a Backend Developer for this project and created a Golang based API with JWT Authentication.",
    tags: ["Go", "MongoDB", "JWT","Next.js", "Tailwind", "React"],
    imageUrl: osjob,
    link: "https://github.com/harshau007/job-portal",
  },
  {
    title: "Ducker",
    description:
      "Comprehensive solution for monitoring Docker containers. It displays running Docker containers and their stats and logs on a user-friendly frontend interface.",
    tags: ["NestJs", "Docker Engine API", "ReactJs", "ChartJs"],
    imageUrl: ducker,
    link: "https://github.com/harshau007/ducker",
  },
] as const;

export const skillsData = [
  "Linux",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Go",
  "Docker",
  "Kubernetes",
  "Github Action",
  "YAML",
  "GitOps"
] as const;
