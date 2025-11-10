import React from 'react'

const LinesDecor = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 135 110"
            className=" w-[250px] h-[180px] sm:w-[250px] sm:h-[180px]"
        >
            <defs>
                <clipPath id="lines-decor-clip">
                    <rect width="250" height="180" fill="none" />
                </clipPath>
            </defs>
            <g clipPath="url(#lines-decor-clip)" transform="translate(22, 0)">
                <g className="stroke-white">
                    <path d="M213.94-1.7,64.41,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                    <path d="M173-1.7,23.46,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                    <path d="M132.05-1.7-17.48,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                    <path d="M91.11-1.7-58.42,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                    <path d="M50.17-1.7-99.36,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                    <path d="M9.1-1.7-140.43,127.51" strokeWidth="3" strokeLinecap="square" fill="none" />
                </g>
            </g>
        </svg>
    )
}

export default LinesDecor