"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Connect",
      url: "/connect",
    },
  ];

  return (
    <>
      <div className="animate-navbarShadow fixed bottom-0 left-2/4 -translate-x-1/2 z-10 h-5 w-full bg-gradient-to-b from-[#43B9B9] to-[#2997ff] blur-3xl"></div>
      <nav className="fixed bottom-2 left-2/4 -translate-x-1/2 z-50 w-fit p-[2px] flex sm:gap-2 max-sm:gap-1 justify-center items-center rounded-full bg-opacity-5 backdrop-filter backdrop-blur-md border border-stone-500 max-sm:text-lg max-sm:scale-90 max-sm:bottom-4 2xl:scale-125">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={clsx(
              "lowercase hover:animate-navbarHover hover:bg-opacity-20 hover:backdrop-filter hover:backdrop-blur-md border border-transparent rounded-full py-1 px-4 hover:bg-white active:scale-95",
              pathname === link.url
                ? "bg-opacity-20 backdrop-filter backdrop-blur-md border border-stone-400 bg-stone-300"
                : "bg-opacity-0"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
