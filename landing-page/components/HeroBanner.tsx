import React from 'react'
import { SecondaryButton } from './Buttons'

export const HeroBanner: React.FC = () => {
    return (
        <div className='bg-folderYellow p-3 rounded-r-md mr-2'>
            <h1 className='font-playfairDisplay text-6xl italic text-white font-medium pl-5 my-4'>Hello</h1>
            <h1 className='font-roboto text-6xl italic text-white font-bold text-right pr-7'>World</h1>
            <span className="flex justify-end mt-7">
                <SecondaryButton>Get to know me</SecondaryButton>
            </span>
        </div>
    )
}