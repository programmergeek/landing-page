import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HeroBanner, Navbar } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
    </div>
  )
}

export default Home
