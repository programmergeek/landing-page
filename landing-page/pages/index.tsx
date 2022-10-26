import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card, HeroBanner, IconButton, Navbar, ProjectCard } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <section id="About Me">
        <Card className="mt-3 mx-1.5">
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
            />
            <IconButton
              style="outline"
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
            />
            <IconButton
              style="outline"
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
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              }
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
    </div>
  );
}

export default Home
