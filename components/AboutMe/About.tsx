import React from 'react'
import {Tags, Accent, Card, Header} from '..'
import styles from './AboutMe.module.css'

export const About: React.FC = () => {
    return (
      <section className='mt-20 mb-24 md:mb-52'>
          <Header>About Me</Header>
          <div id={styles.content}>
            <div className='place-self-center md:place-self-end'>
              <img src="/images/avatar.png" className='rounded-full w-80' alt="" />
            </div>
            <p className='text-center place-self-center md:px-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Optio doloremque laboriosam consequuntur voluptatem pariatur sapiente alias doloribus 
              culpa labore fugit itaque tempore, exercitationem fuga adipisci aliquid nam? 
              Quisquam, deserunt sed!
            </p>
          </div>
      </section>
    );
}