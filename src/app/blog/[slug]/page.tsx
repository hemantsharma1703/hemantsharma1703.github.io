import Link from "next/link";
import Image from "next/image";
import { getPostData } from "@/app/lib/blogs/posts";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const slug: string = params.slug;
  const blog: object = await getPostData(slug);

  console.log(blog);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-sm:self-start sm:max-w-2xl w-full flex flex-col gap-4 justify-between items-center">
      <Link
        href="/blog"
        className="flex justify-center items-center gap-2 self-start"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <p className="text-lg mt-1">Blog</p>
      </Link>
      <article className="flex flex-col gap-6 self-start w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">{blog.title}</h1>
          <div className="text-neutral-400 flex gap-2 justify-start items-center">
            <Image
              src={"/Hemant_Sharma_Profile.jpg"}
              width={45}
              height={45}
              className="inline-block rounded-full ring-0"
              alt="Hemant_Sharma_Profile"
            />
            <div className="flex flex-col">
              <p className="font-bold">Hemant Sharma</p>
              <span className="text-sm italic">{blog.date}</span>
            </div>
          </div>
        </div>
        <span className="h-[1px] bg-neutral-700" />
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }}></div>
      </article>
    </div>
  );
}
