import WorkDescription from "@/app/ui/WorkDescription";
import workHistory from "@/app/lib/work/workHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "All the work experience of Hemant Sharma, an experienced Software Engineer & Full Stack Developer based in India. He is passionate about building applications and solving real-world problems.",
  authors: [{ name: "Hemant Sharma" }],
};

export default function About() {
  return (
    <div className="max-sm:self-start sm:max-w-2xl">
      <h1 className="text-6xl font-bold sm:text-center">Work</h1>
      <h2 className="text-3xl font-normal mt-8">my work</h2>
      <p className="text-neutral-400 mb-5">
        I love building software and I aspire to build great software and
        applications that the people can use and feel.
      </p>
      <div className="flex flex-col gap-4">
        {workHistory.map((work, index) => (
          <>
            <hr />
            <WorkDescription
              key={index}
              companyName={work.companyName}
              position={work.position}
              storyBehind={work.storyBehind}
              technologiesUsed={work.technologiesUsed}
              duration={work.duration}
              milestones={work.milestones}
            />
          </>
        ))}
      </div>
    </div>
  );
}
