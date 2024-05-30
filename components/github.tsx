"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import ActivityCalendar from "react-activity-calendar";
import GithubContributions from "./githubContri";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

const Github = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [activityData, setActivityData] = useState([]);
  const { theme } = useTheme();
  const { ref } = useSectionInView("Github");

  async function fetchGitHubActivity() {
    try {
      const url = `https://github-contributions-api.jogruber.de/v4/harshau007`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub activity");
      }
      const data = await response.json();
      const commitEvents = data.contributions || [];

      const filterData = commitEvents.filter((event: any) => {
        return new Date(event.date).getFullYear() === 2024;
      });
      return filterData;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubActivity();
      setActivityData(data);
    };
    fetchData();
  }, []);

  return (
    <section
      id="github"
      ref={ref}
      className="mb-12 sm:mb-20 px-4 sm:px-8 py-8 sm:py-12 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md"
    >
      <SectionHeading>Github</SectionHeading>
      <div className="flex flex-col items-center mt-8">
        <div className="w-full mx-auto overflow-x-auto sm:overflow-visible lg:max-w-none">
          {activityData.length > 0 ? (
            <ActivityCalendar
              colorScheme={theme ? "dark" : "light"}
              theme={{
                light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
                dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
              }}
              data={activityData}
              showWeekdayLabels
              blockSize={14}
              blockRadius={7}
              blockMargin={5}
              fontSize={16}
            />
          ) : (
            <ActivityCalendar data={[]} loading />
          )}
        </div>
      </div>
      <GithubContributions />
    </section>
  );
};

export default Github;
