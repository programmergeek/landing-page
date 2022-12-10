import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Accent, Card, HeroBanner, IconButton, Navbar, ProjectCard, Tags } from '../components'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import { About } from '../components/AboutMe/About';

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <div className={styles['sub-container']}>
        <About />
        <section className="mt-3" id="Projects">
          <h1 className="font-sourceCodepro italic font-semibold text-3xl my-5 text-center">
            Projects
          </h1>
          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 lg:flex-wrap">
            <div className="w-fit mr-auto 2xl:m-0">
              <ProjectCard
                projectName="The Blog"
                description="Take a peek into my what I've been learning."
                demoLink="https://blog.willjoseph.xyz"
                repoLink="https://github.com/programmergeek/the-blog"
                />
            </div>
            <div className="w-fit ml-auto 2xl:m-0">
              <ProjectCard
                reverse
                projectName="The Blog"
                description="Take a peek into my what I've been learning."
                demoLink="https://blog.willjoseph.xyz"
                repoLink="https://github.com/programmergeek/the-blog"
                />
            </div>
            <div className="w-fit mr-auto 2xl:m-0">
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
    </div>
  );
}

export default Home
