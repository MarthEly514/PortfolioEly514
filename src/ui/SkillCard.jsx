import React from 'react'

export default function SkillCard({
  skillName = '',
  classname = '',
  logo=''


}) {
  return (
    <div className={`font-semibold text-[1em] rounded-4xl cursor-pointer flex flex-row items-center justify-center gap-2.5 select-none transition-colors duration-500 relative group ${classname}`}> <div className='absolute group-hover:opacity-0 transition-opacity duration-700'>{logo}</div> <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-white text-accent'>{skillName}</span></div>
  )
}