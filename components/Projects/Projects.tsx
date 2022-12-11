import React from 'react'
import { ProjectCard } from '../Cards'
import { Header } from '../Header'

export const Projects: React.FC = () => {
    return(
        <section className="mt-3" id="Projects">
          <Header>Projects</Header>
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
    )
}