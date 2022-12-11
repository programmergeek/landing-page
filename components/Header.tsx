import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Header: React.FC<Props> = ({...props}) => {
    return (
        <div className='w-fit mx-auto relative'>
            <h1 className='z-20 font-roboto text-3xl font-semibold text-center lg:mb-11 mb-5 text-green-700'>{props.children}</h1>
            <div className='bg-green-500 w-[103%] h-3 absolute top-5 z-0 opacity-[30%]'></div>
        </div>
    )
}