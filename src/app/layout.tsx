import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

// Importing UI Components
import Navbar from "@/app/ui/Navbar";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template:
      "%s - Hemant Sharma - Experienced Software Engineer & Full Stack Developer",
    default:
      "Hemant Sharma - Experienced Software Engineer & Full Stack Developer",
  },
  authors: [{ name: "Hemant Sharma" }],
  description:
    "Hemant Sharma is a Software Engineer & Full Stack Developer based in India. He is passionate about building applications and solving real-world problems.",
  // viewport:
  //   "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hemant_coding.png" type="image/png" sizes="" />
      </head>
      <body
        className={`${overpass.className} p-10 pb-20 max-sm:p-5 max-sm:pb-24`}
      >
        <main className="flex flex-col justify-center items-center h-full">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  );
}
