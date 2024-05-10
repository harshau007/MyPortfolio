import Reveal, { Zoom } from "react-awesome-reveal";
import Github from "./github";

export default function GithubContributions() {
  return (
    <section id="github" className="px-4 sm:px-8 py-12 sm:py-14 flex flex-col gap-14">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400">
                Contribution
              </span>{" "}
              Graph
            </h3>
          </div>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=harshau007&theme=github-compact&hide_border=true&color=ffffff&line=42a5f5&point=ffffff&hide_title=true" />
        </div>
    </section>
  );
}