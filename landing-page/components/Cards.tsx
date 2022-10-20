import React from "react";
import { IconButton } from "./Buttons";

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
    <div className={`${props.className} min-h-[150px] p-5 bg-card-paper rounded-md border-2 border-black shadow-hardShadowLeft mx-3`}>
      {props.children}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ ...props }) => {
    return (
      <Card className="max-w-3xl">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  }
                  href={props.repoLink}
                />
                <IconButton
                  style="outline"
                  blank
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  }
                  href={props.repoLink}
                />
                <IconButton
                  style="outline"
                  blank
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
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
