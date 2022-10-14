import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BottomNavigationBar, NavigationBar } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <BottomNavigationBar />
    </div>
  )
}

export default Home
