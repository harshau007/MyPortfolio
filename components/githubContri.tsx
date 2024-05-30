export default function GithubContributions() {
  return (
    <section
      id="github"
      className="px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-6 sm:gap-14"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-5xl">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=harshau007&theme=github-compact&hide_border=true&color=ffffff&line=42a5f5&point=ffffff&hide_title=true"
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
