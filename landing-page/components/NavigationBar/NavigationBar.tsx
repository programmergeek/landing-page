import React, { Children, useState } from 'react'
import { TertiaryButton } from '../Buttons'

type Props = {
    children: React.ReactNode
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