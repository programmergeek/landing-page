import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";

export const HeroBanner: React.FC = () => {
  return (
    <section className="h-[100vh] w-full relative">
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
      <div className="grid grid-cols-2 absolute bottom-4 w-full">
        <span className="flex gap-4 place-content-start">
          <BsTwitter fontSize={24} />
          <BsGithub fontSize={24} />
        </span>
        <span className="text-sm place-self-end">contact@willjoseph.xyz</span>
      </div>
    </section>
  );
};
