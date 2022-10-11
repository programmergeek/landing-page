import React from 'react'

/**
 * A bottom navigation bar meant to be used with smaller screens.
 */
export const BottomNavigationBar: React.FC = () => {
    return (
    <div className= "bg-background border-2 rounded-[5px] border-black w-full h-16 grid grid-cols-4 py-1.5 fixed bottom-0" >
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