import React from 'react'

type ButtonProps = {
    className: string,
    children?: React.ReactNode,
    icon?: React.ReactNode,
    href?: string
    blank?: boolean
}

type iconProps = {
    icon: React.ReactNode,
    style: "solid" | "outline",
    label?: string,
    href?: string,
    blank?: boolean
}

type Props = {
    children?: React.ReactNode,
    icon?: React.ReactNode,
    href?: string
    blank?: boolean
}

/** General button component. */
// accepts a prop called classname to extend the styles of the component.
const Button: React.FC<ButtonProps> = ({...props}) => {
    return (
        <button className={`${props.className} rounded-full px-4 py-2 italic`}> 
            {props.href ? (
                <a href={props.href} target={props.blank ? "_blank": undefined} className="flex">
                    <span className={`${props.icon ? ' block mr-3': 'hidden'}`}>
                        {props.icon} 
                    </span>
                    <span>
                        {props.children} 
                    </span>
                </a>
            ): ( 
            <span className='flex'>
                <span className={`${props.icon ? ' block mr-3': 'hidden'}`}>
                    {props.icon} 
                </span>
                <span>
                    {props.children} 
                </span>
            </span>
                )
            }
        </button>
        )
}

export const PrimaryButton: React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} href={props.href} blank={props.blank} className='font-roboto font-semibold border bg-black text-white'> {props.children} </Button>
}

export const SecondaryButton:React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} href={props.href} blank={props.blank} className='border-2 border-black font-sourceCodePro bg-transparent font-semibold'>{props.children}</Button>
}

export const TertiaryButton:React.FC<Props> = ({...props}) => {
    return <Button icon={props.icon} href={props.href} blank={props.blank} className='font-sourceCodePro not-italic font-semibold'>{props.children}</Button>
}

export const IconButton: React.FC<iconProps> = ({...props}) => {
    return props.style === "solid" ? (
      <a href={props.href} target={props.blank ? "_blank" : undefined}>
        <div className="flex flex-col w-fit">
          <div className="flex justify-center">
            <button className="rounded-full p-2 md:p-3 bg-black w-fit">
              {props.icon}
            </button>
          </div>
          <label
            className="text-center font-roboto italic font-semibold"
            htmlFor=""
          >
            {props.label}
          </label>
        </div>
      </a>
    ) : (
      <a href={props.href} target={props.blank ? "_blank" : undefined}>
        <div className="flex flex-col w-fit">
          <div className="flex justify-center">
            <button className="rounded-full p-2 md:p-3 border-2 border-black bg-transparent">
              {props.icon}
            </button>
          </div>
          <label
            className="text-center font-roboto italic font-semibold"
            htmlFor=""
          >
            {props.label}
          </label>
        </div>
      </a>
    );
}