import React, {useState} from 'react'
import { Header} from '..'
import styles from './AboutMe.module.css'

export const About: React.FC = () => {
    const [isExpanded, updateIsExpanded] = useState<boolean>(false)

    const content = {
      mini: (
        <div className='text-xl'>
          Hey, I'm Will and I'm passionate about building things for the web. I started coding and learning about software development in highschool. 
          I was obsessed with making making cool animations in Scratch, I litterally spent any and all time I could doing just that. 
          I eventually moved on to making programs in java...
        </div>
      ),
      expanded: (
        <div className='text-xl'>
          Hey, I'm Will and I'm passionate about building things for the web. I started coding and learning about software development in highschool. 
          I was obsessed with making making cool animations in Scratch, I litterally spent any and all time I could doing just that. 
          I eventually moved on to making programs in java, making scripts with python and a bit of game development with C#.
          <br/>
          <br/>
          Recently I've become really interesting in developing for the web. That's where everything is going now. I picked up some HTML, CSS and 
          JavaScript during the pandemic as something to keep myself busy and I loved it. I made a couple weird projects like a page that opens a new page
          leading to somewhere on the internet if you clicked on a button. As I learned more about web dev I learned about frameworks like Angular, Vue and React.
          I tried them and enjoyed working with React the most.
          <br/>
          <br/>
          I'm now looking for a front end dev position to start my career and learn more.
        </div>
      )
    }

    return (
      <section id='aboutMe' className='mx-5 md:mx-10 xl:mx-72 md:h-[94vh] grid place-content-center'>
          <div id={styles.content} className="mt-16 mb-16">
            <div className='place-self-center bg-green-400 rounded-full grid '>
              <img src="/images/avatar.png" className='rounded-full w-96 place-self-center' alt="" />
            </div>
            <div className='place-self-center mt-5 md:px-5 w-full'>
              <Header>Hey There!</Header>
              {isExpanded ? content.expanded : content.mini}
              <div className='w-full text-green-500 cursor-pointer mt-5' onClick={() => updateIsExpanded(!isExpanded)}>
                {isExpanded ? 'Minimize' : 'Expand'}
              </div>
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
                  <div key={skill.title} className='flex flex-col'>
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