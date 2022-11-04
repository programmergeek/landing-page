import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Accent, Card, HeroBanner, IconButton, Navbar, ProjectCard } from '../components'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <section id="About Me">
        <Card className=" relative mt-3 mx-1.5">
          <Accent className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 transform md:scale-150 lg:scale-[2.5]" />
          <Accent className="absolute top-3 left-3 lg:top-6 lg:left-6 -rotate-180 transform md:scale-150 lg:scale-[2.5]" />
          <h1 className="font-sourceCodePro italic text-2xl lg:text-3xl font-semibold text-center mb-5 lg:mb-11">
            About me
          </h1>
          <p className="w-11/12 lg:w-4/12 mx-auto font-roboto italic font-semibold text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit animi
            nemo optio maxime repellat exercitationem temporibus et saepe vel
            iste necessitatibus neque est, quaerat veritatis perferendis aliquam
            nesciunt officiis dolor?
          </p>
          <div className="w-fit mx-auto mt-8 flex gap-5">
            <IconButton
              style="outline"
              icon={<FaGithub className="h-6 w-6 md:h-7 md:w-7" />}
              href="https://github.com/programmergeek"
              blank
            />
            <IconButton
              style="outline"
              icon={<FaLinkedinIn className="h-6 w-6 md:h-7 md:w-7" />}
              href="https://www.linkedin.com/in/thato-will-joseph-b0aa54219/"
              blank
            />
            <IconButton
              style="outline"
              icon={<FaTwitter className="h-6 w-6 md:h-7 md:w-7" />}
              href="https://twitter.com/programergeek"
              blank
            />
          </div>
        </Card>
      </section>
      <section className="mt-3" id="Projects">
        <h1 className="font-sourceCodepro italic font-semibold text-3xl my-5 text-center">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:flex-wrap">
          <div className="w-fit mr-auto lg:m-0">
            <ProjectCard
              projectName="The Blog"
              description="Take a peek into my what I've been learning."
              demoLink="https://blog.willjoseph.xyz"
              repoLink="https://github.com/programmergeek/the-blog"
            />
          </div>
          <div className="w-fit ml-auto lg:m-0">
            <ProjectCard
              reverse
              projectName="The Blog"
              description="Take a peek into my what I've been learning."
              demoLink="https://blog.willjoseph.xyz"
              repoLink="https://github.com/programmergeek/the-blog"
            />
          </div>
          <div className="w-fit mr-auto lg:m-0">
            <ProjectCard
              projectName="The Blog"
              description="Take a peek into my what I've been learning."
              demoLink="https://blog.willjoseph.xyz"
              repoLink="https://github.com/programmergeek/the-blog"
            />
          </div>
        </div>
      </section>
      <section id="Skills" className="relative">
        <h1 className="font-sourceCodepro italic font-semibold text-3xl my-5 text-center">
          Skills
        </h1>
        <div>
          {
            // TO DO: create icon components for javascript, typescript, nextjs, html, css, tailwindcss, react
          }
        </div>
      </section>
    </div>
  );
}

export default Home
