import ConnectItem from "@/app/ui/ConnectItem";
import connects from "@/app/lib/connect/connects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Connect with Hemant Sharma - Software Engineer & Full Stack Developer",
  description:
    "Connect with Hemant Sharma, an experienced Software Engineer & Full Stack Developer based in India. He is passionate about building applications and solving real-world problems.",
  authors: [{ name: "Hemant Sharma" }],
};

export default function Contact() {
  return (
    <>
      <div className="max-sm:self-start sm:max-w-2xl lg:max-w-6xl w-full">
        <h1 className="text-6xl font-bold sm:text-center">Connect</h1>
        <div className="mt-8 flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {connects.map((connect, index) => {
            return <ConnectItem key={index} connect={connect} />;
          })}
        </div>
      </div>
    </>
  );
}
