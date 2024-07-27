import projectsList from "@/app/lib/projects/projects";
import ProjectItem from "@/app/ui/ProjectItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects that are built by Hemant Sharma",
};

export default function Projects() {
  return (
    <>
      <div className="max-sm:self-start sm:max-w-2xl lg:max-w-6xl w-full">
        <h1 className="text-6xl font-bold sm:text-center">Projects</h1>
        <div className="mt-8 flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, index) => {
            return <ProjectItem key={index} project={project} />;
          })}
        </div>
      </div>
    </>
  );
}
