import React from 'react'
import {Tags, Accent, Card} from '..'
import styles from './AboutMe.module.css'

export const About: React.FC = () => {
    return (
      <div>
        <Card className=" relative mt-3 mx-1.5">
          <Accent className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 transform md:scale-150 lg:scale-[2.5]" />
          <Accent className="absolute top-3 left-3 lg:top-6 lg:left-6 -rotate-180 transform md:scale-150 lg:scale-[2.5]" />
          <div id={styles.content} className="w-full sm:w-10/12 md:w-9/12 mx-auto lg:w-7/12 2xl:w-6/12">
            <h1 id={styles.aboutMe} className="font-sourceCodePro italic text-2xl lg:text-3xl font-semibold text-center lg:mb-11 mb-5">
              About me
            </h1>
            <div id={styles.avatar}>
                <img
                  src="/images/avatar.png"
                  alt="avatar"
                  className="w-40 md:w-64 rounded-full"
                />
              </div>
              <div id={styles.skills}>
                <h3 className="font-sourceCodePro font-semibold italic md:text-xl">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1 h-fit align-middle">
                  {[
                    "Git",
                    "CSS",
                    "HTML",
                    "React",
                    "Next.JS",
                    "TypeScript",
                    "JavaScript",
                    "Tailwindcss",
                  ].map((value) => (
                    <Tags key={value} className="mr-0.5 mt-0.5">
                      {value}
                    </Tags>
                  ))}
                </div>
              </div>
            <p id={styles.content_aboutme} className="mx-auto mt-5 sm:m-0 font-roboto italic font-semibold text-xs lg:text-sm md:w-10/12">
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