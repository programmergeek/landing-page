import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";

export const HeroBanner: React.FC = () => {
  return (
    <section className="h-[100vh] w-full relative">
      <div className="absolute top-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-6">
          <div className="text-4xl md:text-6xl">
            I&apos;m <span className="font-semibold">Thato Will Joseph</span>
          </div>
          <div className="md:text-3xl w-11/12">
            A front-end developer, problem solver and life-long learner.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 absolute bottom-4 w-full">
        <span className="flex gap-4 place-content-start">
          <button className="w-fit h-fit rounded-full">
            <a
              href="https://twitter.com/programergeek"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter fontSize={24} />
            </a>
          </button>
          <button className="w-fit h-fit rounded-full">
            <a
              href="https://github.com/programmergeek"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub fontSize={24} />
            </a>
          </button>
        </span>
        <span className="text-sm place-self-end">
          <a
            href="mailto:contact@willjoseph.xyz"
            className="hover:text-accent duration-150"
          >
            contact@willjoseph.xyz
          </a>
        </span>
      </div>
    </section>
  );
};
