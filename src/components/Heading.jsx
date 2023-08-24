import React from 'react'

const Heading = ({ title = "TITLE" }) => {
    return (
        <div className="text-lg font-bold text-[#77dd77] lg:text-xl capitalize" >{title}</div>
    )
}

export default Heading