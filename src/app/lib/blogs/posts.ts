import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import { visit } from "unist-util-visit";

const postsDirectory = path.join(process.cwd(), "/src/app/lib/blogs/");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

function rehypeTailwindClasses() {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      const tailwindClasses: { [key: string]: string } = {
        h1: "text-4xl font-bold my-4",
        h2: "text-3xl font-semibold my-3",
        p: "my-2",
        code: "bg-neutral-700 rounded",
        pre: "bg-neutral-900 rounded-xl p-4 my-4",
        a: "text-[#2997ff] hover:text-[#43B9B9] active:opacity-50 underline visited:text-purple-500 hover:visited:text-purple-700",
      };
      const className = tailwindClasses[node.tagName];
      if (className) {
        node.properties.className = (node.properties.className || []).concat(
          className
        );
      }
    });
  };
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  if (matterResult) {
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeTailwindClasses)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(matterResult.content);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml: processedContent.toString(),
      ...matterResult.data,
    };
  }

  throw new Error(`Post with id ${id} not found`);
}
