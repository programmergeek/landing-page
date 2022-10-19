import React from 'react'

type Props = {
    children?: React.ReactNode
}

export const Card: React.FC<Props> = ({...props}) => {
    return <div className='min-h-[150px] w-fit p-5 bg-card-paper rounded-md border-2 border-black shadow-hardShadowLeft mx-3'>{props.children}</div>
}