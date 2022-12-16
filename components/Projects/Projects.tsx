import React from 'react'
import { ProjectCard } from '../Cards/Cards'
import { Header } from '../Header'
import styles from './Projects.module.css'

export const Projects: React.FC = () => {
    return(
        <section className="mx-5 md:mx-10 xl:mx-72 my-9" id="projects">
          <Header>Projects</Header>
          <span className='font-roboto text-green-500'>Hover to see more</span>
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
                thumbnail="/images/Blog.png"
                className='bg-orange-200'
                />
                <ProjectCard
                title="Portfolio"
                description="A snapshot of who I am, my technical skills and the projects I have been working on."
                links={{
                  repo: "https://github.com/programmergeek/landing-page",
                  project: "https://willjoseph.xyz"
                }}
                tags={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
                thumbnail="/images/Portfolio.png"
                size='full'
                className='bg-gray-100'
                />
            </div>
            <ProjectCard
              title="Pintrest Clone"
              description="A pintrest clone that mirorrs the core function and abilities of the original."
              links={{
                repo: "https://github.com/programmergeek/the-blog",
              }}
              tags={['React', 'Next.js', 'TypeScript','RestAPI', 'Firebase', 'Tailwind CSS']}
              thumbnail="/images/PinterestClone.png"
              size='full'
              className='bg-red-100'
            />
          </div>
        </section>
    )
}