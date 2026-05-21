import React from 'react'

export default function SkillCard({
  skillName = '',
  classname = '',
  logo = '',

}) {
  return (
    <div className={`font-semibold text-[1em] w-full px-5 xl:px-0 rounded-4xl cursor-pointer flex flex-row items-center justify-start xl:justify-center gap-5 select-none transition-colors duration-500 relative group ${classname}`}>
      <div className='xl:absolute group-hover:opacity-0 transition-opacity duration-700'>{logo}</div>
      <span className='hidden lg:flex absolute opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-white text-accent'>
        {skillName}
      </span>
      <span className='flex lg:hidden text-[1.5em] text-bg-dark dark:text-white'>
        {skillName}
      </span>
    </div>
  )
}