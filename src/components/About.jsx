import React from 'react'
import { motion } from 'motion/react'
import ImageBlob from '../illustrations/ImageBlob'
import ArrowHandDrawnSimple from '../illustrations/ArrowHandDrawnSimple'

export default function About() {
  return (
    <>
      <div className=' w-full h-max lg:mb-28 bg-bg dark:bg-bg-dark z-10'>
        <div className='w-full xl:w-[80%] max-w-7xl px-8 py-6 xl:px-12 xl:py-9 flex flex-col items-center mx-auto'>

          <motion.h2
            className='mt-32 text-4xl text-primary-text dark:text-primary-text-dark font-semibold'

            //motion animation
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            
          >
            Qui suis-je ?
          </motion.h2>

          {/* arrow with text */}
          <div className='hidden xl:flex flex-row gap-4 mt-32'>
            <ArrowHandDrawnSimple classname="mt-3 text-accent" />
            <h2 className='text-xl font-indie-flower text-primary-text dark:text-primary-text-dark'>C'est moi !</h2>
          </div>

          {/* Image with blobs */}
          <motion.div
            className='w-full h-100 min-h-max flex flex-col xl:flex-row items-center justify-between'

            //motion animations
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <ImageBlob />
            <p className='w-full md:w-[80%] xl:w-1/2 p-2 xl:pr-8 text-xl xl:text-2xl text-secondary-text dark:text-secondary-text-dark'>
              Je suis un développeur passionné par les technologies du web et les solutions innovantes.
              Je conçois des expériences digitales modernes, performantes et adaptées aux besoins réels. <br /> <br />
              Curieux et orienté résolution de problèmes, j'explore aussi des domaines comme l'intelligence artificielle et les systèmes intelligents pour créer des projets à fort impact.
              Mon objectif est simple : transformer des idées en produits concrets, utiles et élégants.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
