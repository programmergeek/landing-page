import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BottomNavigationBar, NavigationBar, PrimaryButton } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <BottomNavigationBar />
      <PrimaryButton>Get to know me</PrimaryButton>
    </div>
  )
}

export default Home
