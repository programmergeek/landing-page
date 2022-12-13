import React, {useState} from 'react'
import { IconButton } from '../Buttons'
import styles from './Navbar.module.css'
import { HiX, HiMenu } from 'react-icons/hi'

export const Navbar: React.FC = () => {
    const [isHidden, updateIsHidden] = useState<boolean>(true)

    return (
        <div className={`fixed w-full h-full grid grid-cols-1 z-50 ${isHidden ? "delay-500 h-10 w-10": ""}`}>
            <div className='fixed top-3 right-3 z-10'>
                <IconButton 
                icon={ isHidden ? <HiMenu className='w-7 h-7' /> : <HiX className='w-7 h-7' />} 
                style="outline"
                onClick={() => {
                    updateIsHidden(!isHidden)
                }}
                />
            </div>
            <div className={isHidden ? "opacity-0 duration-500": `bg-green-500 w-full h-[100vh] fixed z-0 ${styles['slide-in']}` }></div>
            <div className={`${isHidden ? "hidden": "" } delay-200 place-self-center flex flex-col gap-5 z-50 justify-center w-fit h-fit`}>
                {
                    [
                        {
                            name: "About Me",
                            link: "aboutMe"
                        },
                        {
                            name: "Projects",
                            link: "projects"
                        },
                        {
                            name: "Contact",
                            link: "contact"
                        }
                    ].map((section) => (
                        <a onClick={() => updateIsHidden(true)} className={`text-3xl md:text-4xl text-white text-center font-roboto ${isHidden? "": styles['link-slide-in']} delay-200`} href={`#${section.link}`} key={section.link}>
                            {section.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}