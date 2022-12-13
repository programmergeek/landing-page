import type { NextPage } from 'next'
import { ContactMe, HeroBanner, Navbar, Projects, About} from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <div className={styles['sub-container']}>
        <About />
        <Projects />
      </div>
        <ContactMe />
        <div className='bg-green-400 text-center font-sourceCodePro py-3'>Made by a local internet nerd 💻</div>
    </div>
  );
}

export default Home
