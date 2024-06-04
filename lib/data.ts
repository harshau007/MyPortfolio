import tcetlinux from "@/public/tcetlinux.png";
import welcome from "@/public/welcome.png";
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

export const projectsData = [
  {
    title: "ALG-Welcome",
    description:
      "A user-friendly Welcome application for Arka Linux GUI, aiding users in navigating Arch-based Linux distributions efficiently.",
    tags: ["Go", "ReactJs", "TailwindCSS", "Wails"],
    imageUrl: welcome,
    link: "https://github.com/arch-linux-gui/alg-welcome",
  },
  {
    title: "TCET-Linux",
    description:
      "TCET-Linux is an open-source operating system providing basic services, and various software packages for students.",
    tags: ["Linux", "Arch", "Shell", "GitHub"],
    imageUrl: tcetlinux,
    link: "https://github.com/tcet-opensource/tcet-linux",
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
  "GitOps",
] as const;
