import React from 'react'
import { SecondaryButton } from './Buttons'

export const HeroBanner: React.FC = () => {
    return (
        <div className='bg-folderYellow p-3 rounded-r-md'>
            <h1 className='font-playfairDisplay text-7xl sm:text-9xl italic text-white font-medium pl-12 my-7'>Hello</h1>
            <h1 className='font-roboto text-6xl sm:text-9xl italic text-white font-bold text-right pr-20'>World</h1>
            <span className="flex justify-end mt-7 sm:mt-14">
                <SecondaryButton>Get to know me</SecondaryButton>
            </span>
        </div>
    )
}