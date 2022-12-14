import React from 'react'
import { Header} from '..'
import styles from './AboutMe.module.css'

export const About: React.FC = () => {
    return (
      <section id='aboutMe' className='mx-5 md:mx-10 xl:mx-72 md:h-[94vh] grid place-content-center'>
          <div id={styles.content} className="mt-16 mb-16">
            <div className='place-self-center bg-green-400 rounded-full'>
              <img src="/images/avatar.png" className='rounded-full w-72' alt="" />
            </div>
            <div className='place-self-center mt-5 md:px-5 w-full'>
              <Header>Hey There!</Header>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio doloremque laboriosam consequuntur voluptatem pariatur sapiente alias doloribus 
              culpa labore fugit itaque tempore, exercitationem fuga adipisci aliquid nam? 
              Quisquam, deserunt sed!
            </div>
          </div>
          <div className='mt-5'>
            <Header>Skills</Header>
            <div className='flex flex-wrap justify-center gap-16 w-fit mt-14 mx-auto'>
              {
                [
                  {
                    title: 'HTML 5',
                    image: 'html5.png',
                  },
                  {
                    title: 'CSS 3',
                    image: 'css3.png',
                  },
                  {
                    title: 'JavaScript',
                    image: 'js.png',
                  },
                  {
                    title: 'TypeScript',
                    image: 'ts.png',
                  },
                  {
                    title: 'React',
                    image: 'react.png',
                  },
                  {
                    title: 'Next JS',
                    image: 'next-js.svg',
                  },
                  {
                    title: 'Tailwind CSS',
                    image: 'tailwindcss.webp',
                  }
                ].map((skill) => (
                  <div className='flex flex-col'>
                    <img src={`/images/${skill.image}`} className='w-12 mx-auto' alt={skill.title} />
                    <p className='text-sm font-roboto text-center my-2'> {skill.title} </p>
                  </div>
                ))
              }
            </div>
          </div>
      </section>
    );
}