import tcetlinux from "@/public/tcetlinux.png";
import welcome from "@/public/welcome.png";
import devbox from "@/public/devbox.png";

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
    name: "Blogs",
    hash: "#blogs",
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
    title: "ALG Welcome",
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
    title: "DevBox",
    description:
      "DevBox is a powerful CLI tool to create and manage isolated containers for developers with their desired technology stacks, such as Node.js, Python, Rust, and more.",
    tags: ["Go", "Docker", "Cobra CLI", "Bubbletea"],
    imageUrl: devbox,
    link: "https://github.com/harshau007/devbox",
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
