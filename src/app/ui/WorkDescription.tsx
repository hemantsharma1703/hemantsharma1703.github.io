import React from "react";

import { Overpass_Mono } from "next/font/google";

const overpassMonospace = Overpass_Mono({ subsets: ["latin"] });

interface WorkDescriptionPropsTypeDefinitionInterface {
  companyName: string;
  position: string;
  storyBehind: string;
  technologiesUsed: string[];
  duration: {
    from: string;
    to: string;
  };
  milestones: string[];
}

export default function WorkDescription({
  companyName,
  position,
  storyBehind,
  technologiesUsed,
  duration,
  milestones,
}: WorkDescriptionPropsTypeDefinitionInterface) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-medium">{companyName}</h1>
      <span className="flex gap-2 text-neutral-500">
        <h2 className="text-md">{position},</h2>
        <h3 className="text-md">
          {duration.from} - {duration.to}
        </h3>
      </span>
      <div className="flex flex-col gap-6 text-base text-neutral-400 mt-2">
        <p>{storyBehind}</p>
        <p className="flex flex-col">
          <span className="italic font-bold underline-offset-2">
            Technologies Used
          </span>
          <span className={`${overpassMonospace.className}`}>
            {technologiesUsed.map((tech) => {
              if (tech === technologiesUsed[technologiesUsed.length - 1]) {
                return tech + ".";
              } else {
                return tech + ", ";
              }
            })}
          </span>
        </p>
        <ul className="list-disc pl-6 text-neutral-400 flex flex-col gap-2">
          {milestones.map((milestone) => (
            <li
              key={milestone}
              className="text-base"
              dangerouslySetInnerHTML={{ __html: milestone }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
