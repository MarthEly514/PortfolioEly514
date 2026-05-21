import React from 'react'
import { motion } from 'motion/react'
import { ProjectCard } from '../ui/ProjectCard'


export default function Projects() {

  const defaultProps = {
    title: "Simplified Banking For Seamless Payments",
    tagline: "Choose Us!",
    description: "Experience Effortless Banking Designed for Your Convenience",
    accentWord: "Bank",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
    ],
    projectUrl: "https://example.com",
    category: "Wallet",
    accentColor: "#f97316",
  };
  

  return (
    <div className='w-full pb-40 min-h-max bg-bg dark:bg-bg-dark z-10 flex flex-col items-center mx-auto'>
      <motion.h2
        className='mt-32 text-4xl text-primary-text dark:text-primary-text-dark font-semibold mb-20'

        //motion animation
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My projects
      </motion.h2>
      <div className='w-[80%] max-w-300 h-max min-h-20 mx-auto relative '>
        {/* top left */}
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center'>
          <span className='absolute block w-px h-8 bg-accent ' />
          <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
        </div>
        {/* top right */}
        <div className='absolute top-0 right-0 flex flex-col items-center justify-center'>
          <span className='absolute block w-px h-8 bg-accent ' />
          <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
        </div>
        {/* bottom left */}
        <div className='absolute bottom-0 left-0 flex flex-col items-center justify-center'>
          <span className='absolute block w-px h-8 bg-accent ' />
          <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
        </div>
        {/* bottom right */}
        <div className='absolute bottom-0 right-0 flex flex-col items-center justify-center'>
          <span className='absolute block w-px h-8 bg-accent ' />
          <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
        </div>
        <div className='p-10'>

        </div>
      </div>

    </div>
  )
}
