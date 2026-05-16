import React from 'react'

// Icons
import { FaArrowRightLong } from "react-icons/fa6";

const CardLink = ({ icon: Icon, iconColor, color, title, desc, link }) => {
  return (
    <a href={link} className='flex items-center justify-between border border-blue-900 text-[#f7f9f7] rounded-xl py-3 px-4 w-85 glass'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center rounded-full w-12 h-12 text-[#f7f9f7]' style={{ backgroundColor: iconColor }}>
          <Icon size={23} />
        </div>

        <div className='flex flex-col items-start'>
          <span className='font-medium text-md'>
            { title }
          </span>
          
          <span className='text-sm' style={{ color: color }}>
            { desc }
          </span>
        </div>
      </div>

      <FaArrowRightLong style={{ color: color }} size={12} />
    </a>
  )
}

export default CardLink