import React from 'react'
import { ProjectCard } from '../Cards/Cards'
import { Header } from '../Header'
import styles from './Projects.module.css'

export const Projects: React.FC = () => {
    return(
        <section className="mx-5 md:mx-10 xl:mx-72 my-9" id="projects">
          <Header>Projects</Header>
          <div className="flex flex-col gap-6">
            <div className={styles['project-row']}>
              <ProjectCard
                title="The Blog"
                description="A simple blog built on Next.js, typescript and contentful CMS. A repository of the things I am learning and my mistakes along the way."
                links={{
                  repo: "https://github.com/programmergeek/the-blog",
                  project: "https://blog.willjoseph.xyz"
                }}
                size="full"
                tags={['React', 'Next.js', 'TypeScript','RestAPI', 'Contentful', 'Tailwind CSS']}
                thumbnail="https://picsum.photos/1200/500"
                />
                <ProjectCard
                title="Portfolio"
                description="A snapshot of who I am, my technical skills and the projects I have been working on."
                links={{
                  repo: "https://github.com/programmergeek/landing-page",
                  project: "https://willjoseph.xyz"
                }}
                tags={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
                thumbnail="https://picsum.photos/700/500"
                size='full'
                />
            </div>
            <div className={styles['project-row-reverse']}>
              <ProjectCard
                title="Pintrest Clone"
                description="A pintrest clone that mirorrs the core function and abilities of the original."
                links={{
                  repo: "https://github.com/programmergeek/the-blog",
                  project: "https://blog.willjoseph.xyz"
                }}
                tags={['React', 'Next.js', 'TypeScript','RestAPI', 'Firebase', 'Tailwind CSS']}
                thumbnail="https://picsum.photos/700/500"
                size='full'
                />
              <ProjectCard
                title="The Blog"
                description="Take a peek into my what I've been learning."
                links={{
                  repo: "https://github.com/programmergeek/the-blog",
                  project: "https://blog.willjoseph.xyz"
                }}
                size="full"
                tags={['React', 'RestAPI', 'Contentful', 'Tailwind CSS']}
                thumbnail="https://picsum.photos/1200/500"
                />
            </div>
          </div>
        </section>
    )
}