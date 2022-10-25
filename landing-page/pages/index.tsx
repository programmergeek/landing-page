import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HeroBanner, NavigationBar } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <NavigationBar />
      <HeroBanner />
    </div>
  )
}

export default Home
