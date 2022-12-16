import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactMe, HeroBanner, Navbar, Projects, About} from '../components'
import { HiChevronDoubleDown } from 'react-icons/hi'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Thato Will Joseph</title>
        <link rel='icon' type='image/x-icon' href='/images/favicon.png' />
      </Head>
      <Navbar />
      <About />
      <div className='w-full grid mt-16 sm:m-0'>
        <HiChevronDoubleDown color='rgb(74 222 128)'  className='animate-bounce w-12 h-12 place-self-center'/>
      </div>
      <Projects />
      <ContactMe />
      <div className='bg-green-400 text-center font-sourceCodePro py-3'>Made by a local internet nerd 💻</div>
    </div>
  );
}

export default Home
