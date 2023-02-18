import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";

export const About: React.FC = () => {
  return (
    <section className="h-[100vh] w-full">
      <div className="absolute top-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-6">
          <div className="text-4xl md:text-6xl">
            I'm <span className="font-semibold">Thato Will Joseph</span>
          </div>
          <div className="md:text-3xl w-11/12">
            A front-end developer, problem solver and life-long learner.
          </div>
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2 w-full">
        <span className="flex gap-4">
          <BsTwitter fontSize={24} />
          <BsGithub fontSize={24} />
        </span>
        <div className="w-11/12"></div>
        <span className="text-sm">contact@willjoseph.xyz</span>
      </div>
    </section>
  );
};
