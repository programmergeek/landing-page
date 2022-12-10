import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Accent, Card, HeroBanner, IconButton, Navbar, ProjectCard, Projects, Tags } from '../components'
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
        <Projects />
      </div>
    </div>
  );
}

export default Home
