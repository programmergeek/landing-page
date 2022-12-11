import React from 'react'

type Props = {
    children: React.ReactNode;
    textColour?:string;
    backgroundColour?:string;
    className?:string;
}


/**
 * The Tag expects text to be passed in as children. You can change texColour by 
 * referencing a tailwindcss colour or using the format <<text-[#COLOUR_CODE]>>. 
 * Similarly you can change background colourby refenecing a tailwindcss or uing the 
 * format <<bg-[#COLOUR_CODE]>> 
 */
export const Tags: React.FC<Props> = ({...props}) => {
    return <div className={`font-roboto italic ${props.textColour ? props.textColour: 'text-green-900'} ${props.backgroundColour ? props.backgroundColour: "bg-green-300"} ${props.className} w-fit font-semibold text-[10px] md:text-xs px-4 py-1 rounded-sm`}>{props.children}</div>
}