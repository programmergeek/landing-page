import React from 'react'

export const Accent: React.FC<{className?: string}> = ({...props}) => {
    return (
        <div className={props.className}>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.2906"
          cy="17.2656"
          r="2.5"
          transform="rotate(-0.0755001 17.2906 17.2656)"
          fill="#592905"
        />
        <circle
          cx="10.2906"
          cy="17.2748"
          r="2.5"
          transform="rotate(-0.0755001 10.2906 17.2748)"
          fill="#592905"
        />
        <circle
          cx="3.29065"
          cy="17.2841"
          r="2.5"
          transform="rotate(-0.0755001 3.29065 17.2841)"
          fill="#592905"
        />
        <circle
          cx="17.2814"
          cy="10.2656"
          r="2.5"
          transform="rotate(-0.0755001 17.2814 10.2656)"
          fill="#592905"
        />
        <circle
          cx="10.2815"
          cy="10.2748"
          r="2.5"
          transform="rotate(-0.0755001 10.2815 10.2748)"
          fill="#592905"
        />
        <circle
          cx="17.2722"
          cy="3.26562"
          r="2.5"
          transform="rotate(-0.0755001 17.2722 3.26562)"
          fill="#592905"
          />
      </svg>
          </div>
    );

}