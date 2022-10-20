import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card, ProjectCard } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProjectCard
      projectName='The Blog'
      description='A personal blog built in pure react.'
      repoLink='https://github.com/programmergeek/the-blog'
      demoLink='https://blog.willjoseph.xyz'
      />
      <ProjectCard
      projectName='The Blog'
      description='A personal blog built in pure react.'
      repoLink='https://github.com/programmergeek/the-blog'
      demoLink='https://blog.willjoseph.xyz'
      reverse
      />
    </div>
  )
}

export default Home
