import React from 'react'

type ButtonProps = {
    className: string,
    children?: React.ReactNode,
    icon?: React.ReactNode
}

type iconProps = {
    icon: React.ReactNode,
    style: "solid" | "outline"
}

type Props = {
    children?: React.ReactNode,
    icon?: React.ReactNode
}

/** General button component. */
// accepts a prop called classname to extend the styles of the component.
const Button: React.FC<ButtonProps> = ({...props}) => {
    return <button className={`${props.className} rounded-full px-4 py-2 italic flex`}> 
    <span className={`${props.icon ? ' block mr-3': 'hidden'}`}>
        {props.icon} 
    </span>
    <span>
        {props.children} 
    </span>
        </button>
}

export const PrimaryButton: React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} className='font-roboto font-semibold border bg-black text-white'> {props.children} </Button>
}

export const SecondaryButton:React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} className='border-2 border-black font-sourceCodePro bg-transparent font-semibold'>{props.children}</Button>
}

export const TertiaryButton:React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} className='font-sourceCodePro not-italic font-semibold'>{props.children}</Button>
}

export const IconButton: React.FC<iconProps> = ({...props}) => {
    return props.style === "solid" ? <button className='rounded-full p-3 bg-black'>{props.icon}</button> : <button className="rounded-full p-3 border-2 border-black bg-transparent">{props.icon}</button>
}