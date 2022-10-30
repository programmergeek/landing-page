import React from "react";
import { IconButton } from "./Buttons";
import {
  HiOutlineGlobeAsiaAustralia,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

type Props = {
  children?: React.ReactNode;
  className?: string
};

type ProjectCardProps = {
  projectName: string;
  description: string;
  repoLink: string;
  demoLink: string;
  reverse?: boolean
};

export const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={`${props.className} min-h-[150px] p-5 bg-card-paper rounded-md border-2 border-black shadow-hardShadowLeft`}>
      {props.children}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ ...props }) => {
    return (
      <Card
        className={`max-w-3xl sm:min-w-[600px] lg:min-w-[850px] ${
          props.reverse ? "shadow-hardShadowRight" : ""
        }`}
      >
        {!props.reverse ? (
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
            <span className="font-robot font-bold italic text-4xl flex md:justify-center my-auto">
              {props.projectName}
            </span>
            <div className="flex flex-col mt-3 md:mt-0 md:justify-end gap-9">
              <p className="text-left font-roboto font-bold italic mt-9">
                {props.description}
              </p>
              <div className="flex gap-3 justify-end">
                <IconButton
                  style="solid"
                  blank
                  icon={
                    <HiOutlineCodeBracket className="text-white w-6 h-6 md:w-7 md:h-7" />
                  }
                  href={props.repoLink}
                />
                <IconButton
                  style="outline"
                  blank
                  icon={
                    <HiOutlineGlobeAsiaAustralia className="w-6 h-6 md:w-7 md:h-7" />
                  }
                  href={props.demoLink}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse gap-3 md:grid md:grid-cols-2">
            <div className="flex flex-col mt-3 md:mt-0 md:justify-end gap-9">
              <p className="text-left font-roboto font-bold italic mt-9">
                {props.description}
              </p>
              <div className="flex gap-3 justify-start">
                <IconButton
                  style="solid"
                  blank
                  icon={
                    <HiOutlineCodeBracket className="text-white w-6 h-6 md:w-7 md:h-7" />
                  }
                  href={props.repoLink}
                />
                <IconButton
                  style="outline"
                  blank
                  icon={
                    <HiOutlineGlobeAsiaAustralia className="w-6 h-6 md:w-7 md:h-7" />
                  }
                  href={props.demoLink}
                />
              </div>
            </div>
            <span className="font-robot font-bold italic text-4xl flex md:justify-center my-auto">
              {props.projectName}
            </span>
          </div>
        )}
      </Card>
    );
};
