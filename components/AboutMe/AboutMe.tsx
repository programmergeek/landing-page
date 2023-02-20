import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { TbBrandGit } from "react-icons/tb";

export const AboutMe = () => {
  const skills = [
    { icon: <ImHtmlFive2 fontSize={35} />, label: "HTML" },
    { icon: <IoLogoCss3 fontSize={35} />, label: "CSS" },
    { icon: <SiTailwindcss fontSize={35} />, label: "Tailwindcss" },
    { icon: <IoLogoJavascript fontSize={35} />, label: "Javascipt" },
    { icon: <SiTypescript fontSize={35} />, label: "Typescript" },
    { icon: <SiReact fontSize={35} />, label: "React" },
    { icon: <SiNextdotjs fontSize={35} />, label: "Next.js" },
    { icon: <BsGithub fontSize={35} />, label: "Github" },
    { icon: <TbBrandGit fontSize={35} />, label: "Git" },
  ];

  return (
    <section className="min-h-screen pt-5 md:pt-10 lg:pt-20 xl:pt-40">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl mb-2 md:mb-5">
            About me...
          </h1>
          <p className="lg:text-xl">
            {`
            My first introduction to coding came in the ninth grade. 
            It's a funny story that was fueled by pettiness and some friendly 
            rivalry between a friend and a teacher. I just happened to be 
            caught in the middle of it.
            `}
            <br />
            <br />
            {`
            To make a long story short, said friend and teacher argued whether
             or not it was possible to teach an entire year's coursework within a 
             single school term (roughly two months). My friend argued yes while 
             the teacher argued no. I was chosen as the lucky guinea pig that would 
             settle their debate. Spoiler, the teacher won. By the end of the term, 
             I could barely remember what I had learned at the beginning of it. 
             That was the first time I had ever seen and written code and tried 
             to solve problems with it. It was fun.
            `}
            <br />
            <br />
            {`
            Fast forward a couple of years and I haven't stopped coding. I've experimented 
            with different parts of software engineering, dipped my toes into game development 
            and learned a bit of C# and C++ while experimenting with Unity and Unreal Engine. 
            I've made a couple of web scrapers with python and the list goes on, that is until 
            we reach web development, my latest fascination. No matter where you look or how you 
            think about it, more and more things are moving to the web. The most interesting 
            developments in software and tech are happening through the internet and I want to be 
            part of that. I want to build my career by making experiences and creating solutions 
            through the power of the internet and I hope that you will allow me to do that 
            as part of your team.
            `}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl lg:text-4xl">...And my skills</h1>
          <div className="grid grid-cols-4 md:flex flex-wrap gap-6 md:gap-10 lg:gap-20 mt-5 md:mt-10">
            {skills.map((skill) => (
              <div key={skill.label} className="flex flex-col justify-center">
                <div className="w-full flex justify-center">{skill.icon}</div>
                <span className="lg:text-xl text-center"> {skill.label} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
