"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

interface Blog {
  id: number;
  title: string;
  desc: string;
  coverImage: string;
  url: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "DevBox v1.0.0",
    desc: "Powerful CLI tool to create and manage isolated containers for developers",
    coverImage: "/devbox.png",
    url: "/blogs/2024-5-8",
  },
];

const Blogs: React.FC = () => {
  const { ref } = useSectionInView("Blogs");
  return (
    <section id="blogs" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <div className="container mx-auto my-12 px-4">
        <SectionHeading>Blogs</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.05 }}
              className="border border-black/5 rounded-lg overflow-hidden shadow-lg bg-gray-100 transition-all duration-100 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                <p className=" mb-4">{blog.desc}</p>
                <Link
                  href={blog.url}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-950 font-medium transition-colors"
                >
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            target="_blank"
            className="block mx-auto w-44 p-4 pl-10 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            See All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
