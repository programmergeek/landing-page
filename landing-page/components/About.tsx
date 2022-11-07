import React from 'react'
import {Tags, Accent, Card} from '.'

export const About: React.FC = () => {
    return (
      <div>
        <Card className=" relative mt-3 mx-1.5">
          <Accent className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 transform md:scale-150 lg:scale-[2.5]" />
          <Accent className="absolute top-3 left-3 lg:top-6 lg:left-6 -rotate-180 transform md:scale-150 lg:scale-[2.5]" />
          <div id="content" className="">
            <h1 className="font-sourceCodePro italic text-2xl lg:text-3xl font-semibold text-center lg:mb-11 mb-5">
              About me
            </h1>
            <div className="grid grid-cols-2 gap-2 md:w-10/12 mx-auto">
              <div>
                <img
                  src="/images/avatar.png"
                  alt="avatar"
                  className="w-40 md:w-72 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-sourceCodePro font-semibold italic">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1 h-fit align-middle">
                  {[
                    "TypeScript",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Next.JS",
                    "HTML",
                    "Git",
                    "Tailwindcss",
                  ].map((value) => (
                    <Tags key={value} className="mr-0.5 mt-0.5">
                      {value}
                    </Tags>
                  ))}
                </div>
              </div>
            </div>
            <p className="mx-auto font-roboto italic font-semibold text-xs lg:text-lg md:w-10/12 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              animi nemo optio maxime repellat exercitationem temporibus et
              saepe vel iste necessitatibus neque est, quaerat veritatis
              perferendis aliquam nesciunt officiis dolor?
            </p>
          </div>
        </Card>
      </div>
    );
}