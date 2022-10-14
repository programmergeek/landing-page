import React, { Children } from 'react'

/**
 * A bottom navigation bar meant to be used with smaller screens.
 */
export const BottomNavigationBar: React.FC = () => {
    return (
    <div className= "md:hidden bg-background border-2 rounded-[5px] border-black w-full h-16 grid grid-cols-4 py-1.5 fixed bottom-0" >
        {
            // map the menu options to navigation buttons.
            // TODO: replace buttons names with objects that contain the name of the button along with its icon.
            ['About Me', 'Project', 'Skills', 'Contact Me'].map((value) => (
                <div key={value} className='flex flex-col'>
                    <div className="flex justify-center">
                        {/* placeholder icon button*/}
                        <button id={value} className='rounded-full border border-black w-8 h-8'></button>
                    </div>
                    <label htmlFor={value} className='font-sourceCodePro font-semibold text-center'>{value}</label>
                </div>
            ))
        }
    </div>
    )
}

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
    <nav className='hidden md:grid grid-cols-[16rem_auto_28rem]'>
        <div>
            <a href="/">
            {children[0]}
            </a>
        </div>
        <div></div>
        <div>
            {children[1]}
        </div>
    </nav>
    )
}


export const NavigationBar: React.FC = () => {
    return (
    <NavigationBarWrapper> 
        <p className='font-sourceCodePro text-4xl font-medium italic tracking-widest bg-folderYellow rounded-tr-[5px] text-white text-center py-2'>Joseph</p>
        <div className='flex justify-end flex-row pr-7'>
            {
                ["About Me", "Projects", "Skills", "Contact Me"].map((value) => {
                    return <button className='font-sourceCodePro px-4 py-3 font-semibold'>{value}</button>
                })
            }
        </div> 
    </NavigationBarWrapper>
    )
}