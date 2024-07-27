import React from "react";
import BlogItem from "@/app/ui/BlogItem";
import { getSortedPostsData } from "@/app/lib/blogs/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Hemant Sharma - Software Engineer & Full Stack Developer",
  description:
    "Blogs by Hemant Sharma, a Software Engineer & Full Stack Developer. Hemant writes about software development, web development, and other tech-related topics.",
  authors: [{ name: "Hemant Sharma" }],
};

export default function BlogPage() {
  const sortedPosts = getSortedPostsData();
  return (
    <>
      <div className="max-sm:self-start sm:max-w-2xl w-full">
        <h1 className="text-6xl font-bold sm:text-center">Blog</h1>
        <div className="mt-8 flex flex-col gap-2">
          {sortedPosts.map((blog) => (
            <BlogItem
              key={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              blogHref={`blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
