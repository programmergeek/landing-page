import React from 'react'

type Props = {
    children: React.ReactNode;
    textColour?:string;
    backgroundColour?:string
}


/**
 * The Tag expects text to be passed in as children. You can change texColour by 
 * referencing a tailwindcss colour or using the format <<text-[#COLOUR_CODE]>>. 
 * Similarly you can change background colourby refenecing a tailwindcss or uing the 
 * format <<bg-[#COLOUR_CODE]>> 
 */
export const Tags: React.FC<Props> = ({...props}) => {
    return <div className={`font-roboto italic ${props.textColour ? props.textColour: 'text-violet-900'} ${props.backgroundColour ? props.backgroundColour: "bg-violet-300"} w-fit font-semibold text-xs px-1.5 py-0.5 rounded sm:px-2 sm:py-1 sm:text-sm sm:rounded-md`}>{props.children}</div>
}