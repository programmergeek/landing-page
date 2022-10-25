import React, { Children, useState } from 'react'
import { TertiaryButton } from './Buttons'

type Props = {
    children: React.ReactNode
}

export const NavigationWidget: React.FC = () => {
    const [isOpen, toggleMenu] = useState<boolean>(true)

    return (
    <div className={`fixed -bottom-[250px] -right-[250px] w-[500px] h-[500px]`}>
        <button className={`${!isOpen ? "block": "hidden"} bg-folderYellow p-3 rounded-full absolute top-48 left-48`} onClick={() => toggleMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>    
        </button>  
        <div className= {`realative bg-folderYellow text-white ${ isOpen ? 'w-[500px] h-[500px]' : 'w-0 h-0' } rounded-full`}>
        <ul className='font-sourceCodePro absolute left-28 top-28 font-semibold'>
            <li>About Me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact Me</li>
            <li className={`${isOpen ? "flex" : "hidden"} justify-end cursor-pointer`} onClick={() => toggleMenu(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </li>
        </ul>
        </div>
    </div>
    )
}


/** Wrapper component for desktop and mobile navigation bars */
const NavigationBarWrapper: React.FC<Props> = ({ ...props }) => {
    // The component assumes that you are passing in two child components:
    //      1. A logo
    //      2. A group of buttons wrapped in a single element, like a div.
    const children = Children.map(props.children, (value) => value) as React.ReactNode[]

    return (
    <nav className='flex'>
        <div className='lg:w-72 md:w-60 sm:w-52 w-36'>
            <a href="/">
            {children[0]}
            </a>
        </div>
        <div className='hidden lg:block ml-auto mt-3'>
            {children[1]}
        </div>
    </nav>
    )
}


export const NavigationBar: React.FC = () => {
    return (
    <NavigationBarWrapper> 
        <p className='font-sourceCodePro text-2xl md:text-3xl lg:text-4xl font-medium italic tracking-widest bg-folderYellow rounded-tr-[5px] text-white text-center py-1 md:py-2 lg:py-3'>JOSEPH</p>
        <div className='flex justify-end flex-row'>
            {
                ["About Me", "Projects", "Skills", "Contact Me"].map((value) => {
                    return <TertiaryButton>{value}</TertiaryButton>
                })
            }
        </div> 
    </NavigationBarWrapper>
    )
}