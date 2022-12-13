import React from 'react'
import { ProjectCard } from '../Cards/Cards'
import { Header } from '../Header'
import styles from './Projects.module.css'

export const Projects: React.FC = () => {
    return(
        <section className="mt-3" id="projects">
          <Header>Projects</Header>
          <div className="flex flex-col gap-6">
            <div className={styles['project-row']}>
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
                <ProjectCard
                title="The Blog"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, perspiciatis aliquid velit, reprehenderit esse placeat eius iusto consequuntur corporis culpa accusantium facere laborum tempore laboriosam iure autem doloribus dolor vitae."
                links={{
                  repo: "https://github.com/programmergeek/the-blog",
                  project: "https://blog.willjoseph.xyz"
                }}
                tags={['React', 'RestAPI', 'Contentful', 'Tailwind CSS']}
                thumbnail="https://picsum.photos/700/500"
                size='full'
                />
            </div>
            <div className={styles['project-row-reverse']}>
              <ProjectCard
                title="The Blog"
                description="Take a peek into my what I've been learning."
                links={{
                  repo: "https://github.com/programmergeek/the-blog",
                  project: "https://blog.willjoseph.xyz"
                }}
                tags={['React', 'RestAPI', 'Contentful', 'Tailwind CSS']}
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