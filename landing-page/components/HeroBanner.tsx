import React from 'react'
import { SecondaryButton } from './Buttons'

export const HeroBanner: React.FC = () => {
    return (
      <div className="bg-folderYellow p-3 rounded-r-md">
        <h1 className="font-playfairDisplay text-7xl sm:text-9xl md:text-[180px] lg:text-[280px] italic text-white font-medium pl-5 sm:pl-12 lg:pl-44 my-4 sm:my-7">
          Hello
        </h1>
        <h1 className="font-roboto text-6xl sm:text-9xl md:text-[180px] lg:text-[280px] italic text-white font-bold text-right pr-7 sm:pr-20 lg:pr-48">
          World
        </h1>
        <span className="flex justify-end mt-7 sm:mt-14">
          <SecondaryButton>Get to know me</SecondaryButton>
        </span>
      </div>
    );
}