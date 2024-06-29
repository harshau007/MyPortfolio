import Link from "next/link";
import { blogs } from "../source";
import { buttonVariants } from "@/components/button";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const posts = [...blogs.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="flex flex-col items-center min-h-screen text-white p-6">
      <div className="self-start mb-8 ml-10">
        <Link
          href="/"
          className={`${cn(
            buttonVariants({
              className: "gap-1 rounded-full cursor-pointer",
              variant: "secondary",
            })
          )} flex items-center`}
        >
          <ChevronLeft size={16} className="mr-2" /> Back
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 pl-12 pr-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800"
          >
            {post.data.cover && (
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={post.data.cover}
                  alt={post.data.title}
                  className="w-full h-56 object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {post.data.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {post.data.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.data.date ?? post.file.name).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
