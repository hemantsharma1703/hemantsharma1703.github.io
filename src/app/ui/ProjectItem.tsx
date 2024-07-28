import Image from "next/image";
import Link from "next/link";

interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export default function ProjectItem({
  project,
}: {
  project: ProjectInterface;
}) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between w-full hover:animate-borderBlink border border-neutral-800 hover:border-neutral-600 rounded-lg p-1 bg-gradient-to-b from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 active:scale-95 active:from-neutral-900 active:to-neutral-800 transition-all duration-100 ease-in-out"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={10000}
        height={10000}
        className="self-center rounded-lg h-50 w-full aspect-auto mb-3 object-cover shadow-lg border border-neutral-800"
      />
      <div className="flex flex-col gap-2 px-1">
        <h1 className="font-semibold text-neutral-100">{project.title}</h1>
        <p className="text-clip text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {project.technologies.map((technology, index) => (
            <p
              key={index}
              className="inline-flex justify-center items-center text-base bg-neutral-700 text-neutral-300 w-fit rounded-full pt-1 px-2"
            >
              {technology}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
