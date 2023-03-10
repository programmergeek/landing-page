import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

let firstRunComplete = false;

export const HeroBanner: React.FC = () => {
  const [name, updateName] = useState("Thato Will Joseph");
  const originalText = "Thato Will Joseph";

  const glitchEffect = () => {
    // create a list of letters and number for the glitch effect
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    // create a variable to keep track of the iterations
    let iterations = 0;
    const interval = setInterval(() => {
      updateName(() =>
        name
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            const num = Math.floor(Math.random() * 62);
            return letters[num];
          })
          .join("")
      );
      if (iterations >= originalText.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 35);
  };

  useEffect(() => {
    glitchEffect();
    firstRunComplete = true;
  }, [firstRunComplete]);

  return (
    <section className="h-[100vh] w-full relative">
      <div className="absolute top-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-6">
          <div className="text-4xl md:text-6xl">
            I&apos;m{" "}
            <span className="font-semibold" onMouseEnter={glitchEffect}>
              {name}
            </span>
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
            href="mailto:thatowilljoseph@gmail.com"
            className="hover:text-accent duration-150"
          >
            thatowilljoseph@gmail.com
          </a>
        </span>
      </div>
    </section>
  );
};
