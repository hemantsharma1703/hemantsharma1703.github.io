import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeStringify from "rehype-stringify";
import rehypeClassNames from "rehype-class-names";
import { title } from "process";

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

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  console.log("Matter Result", matterResult);

  if (matterResult) {
    const processedContent = await remark()
      .use(html)
      .use(rehype)
      .use(rehypeClassNames, {
        h1: "text-4xl font-bold my-4",
        h2: "text-3xl font-semibold my-3",
        p: "my-2",
        code: "bg-gray-100 rounded p-1",
        pre: "bg-gray-100 rounded p-4 my-4",
      })
      .use(rehypeStringify)
      .process(matterResult.content);

    // post.content = processedContent.toString();
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml: processedContent.toString(),
      ...matterResult.data,
    };
  }

  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");
  // const matterResult = matter(fileContents);

  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // return {
  //   id,
  //   contentHtml,
  //   ...matterResult.data,
  // };
}
