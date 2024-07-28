import Link from "next/link";
import React from "react";

interface BlogItemInterface {
  title: string;
  description: string;
  date: string;
  blogHref: string;
}

export default function BlogItem({
  title,
  description,
  date,
  blogHref,
}: BlogItemInterface) {
  return (
    <Link
      href={blogHref}
      className="block w-full border hover:animate-borderBlink border-neutral-800 hover:border-neutral-600 rounded-lg p-2 bg-gradient-to-b from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 active:scale-95 active:from-neutral-900 active:to-neutral-800 transition-all duration-100 ease-in-out"
    >
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <div className="w-full flex justify-between items-start">
          <h3 className="font-semibold text-neutral-100">{title}</h3>
          <p className="text-neutral-500">{formattedDate(date)}</p>
        </div>
        <p className="text-clip text-neutral-400">{description}</p>
      </div>
    </Link>
  );
}

const formattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};
