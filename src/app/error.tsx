"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-sm:self-start sm:max-w-2xl w-full flex flex-col gap-4 justify-between items-center">
      <div>
        <h2 className="flex flex-col text-xl">
          <br />
          <br />
          hey fella,
          <br />
          <br />
          it seems like you&apos;re lost. The blogpost you&apos;re looking for
          does not exist yet, so please go to the blog listings page to see all
          the blogposts that are available.
          <br />
          <br />
          <p className="self-center">
            (yeah I&apos;ve tackled this error page with a bit of humor)
          </p>
          <br />
          <br />
          <Link
            href="/blog"
            className="flex justify-center items-center self-center bg-transparent rounded-full border border-neutral-500 px-4 py-2 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-slate-700 active:bg-neutral-300 transition-colors duration-300 ease-in-out"
          >
            Go to Blog
          </Link>
        </h2>
      </div>
    </div>
  );
}
