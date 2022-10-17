import React from 'react'

type ButtonProps = {
    className: string,
    children?: React.ReactNode
}

type Props = {
    children?: React.ReactNode,
    icon?: React.ReactNode
}

/** General button component. */
// accepts a prop called classname to extend the styles of the component.
const Button: React.FC<ButtonProps> = ({...props}) => {
    return <button className={`${props.className} rounded-full px-4 py-2 italic`}> {props.children} </button>
}

export const PrimaryButton: React.FC<Props> = ({...props}) => {
    return <Button className='font-roboto font-semibold border bg-black text-white'> {props.children} </Button>
}