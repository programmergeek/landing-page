import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BottomNavigationBar, IconButton, NavigationBar, PrimaryButton, SecondaryButton, TertiaryButton } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <BottomNavigationBar />
      <PrimaryButton>Get to know me</PrimaryButton>
      <SecondaryButton>Get to know me</SecondaryButton>
      <TertiaryButton>Get to know me</TertiaryButton>
      <IconButton style='solid' icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
      </svg>      
      }/>
    </div>
  )
}

export default Home
