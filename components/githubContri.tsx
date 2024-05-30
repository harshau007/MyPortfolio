import { useTheme } from "@/context/theme-context";

export default function GithubContributions() {
  const { theme } = useTheme();

  const lightSrc =
    "https://github-readme-activity-graph.vercel.app/graph?username=harshau007&bg_color=deddda&color=000000&line=2ec27e&point=26a269&area=true&hide_border=true&hide_title=true";
  const darkSrc =
    "https://github-readme-activity-graph.vercel.app/graph?username=harshau007&bg_color=000000&color=f6f5f4&line=9a9996&point=ffffff&area=true&hide_border=true&hide_title=true";
  return (
    <div className="m-10 flex items-center justify-center">
      <div className="w-full">
        <img
          src={theme === "light" ? lightSrc : darkSrc}
          alt="GitHub Contribution Graph"
          className="border rounded-xl"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
