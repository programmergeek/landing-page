import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card></Card>
    </div>
  )
}

export default Home
