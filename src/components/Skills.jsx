import React from 'react'
import { motion } from 'motion/react'
import SkillCard from '../ui/SkillCard'
import AnimatedReactLogo from '../animatedSvgs/AnimatedReactLogo'
import AnimatedExpressLogo from '../animatedSvgs/AnimatedExpressLogo'
import AnimatedTSLogo from '../animatedSvgs/AnimatedTSLogo'
import AnimatedHTMLLogo from '../animatedSvgs/AnimatedHtmlLogo'
import AnimatedJSLogo from '../animatedSvgs/AnimatedJSLogo'
import AnimatedCss3Logo from '../animatedSvgs/AnimatedCss3Logo'
import AnimatedTailwindLogo from '../animatedSvgs/AnimatedTailwindLogo'
import AnimatedSqlLogo from '../animatedSvgs/AnimatedSqlLogo'
import AnimatedNodeJsLogo from '../animatedSvgs/AnimatedNodeJsLogo'
import AnimatedGitLogo from '../animatedSvgs/AnimatedGitLogo'
import AnimatedPhpLogo from '../animatedSvgs/AnimatedPhpLogo'

export default function Skills() {
  const positions = [
    'xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2',
    'xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-2',
    'xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2',
    'xl:col-start-5 xl:col-end-7 xl:row-start-1 xl:row-end-2',
    'xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:row-end-3', 
    'xl:col-start-3 xl:col-end-5 xl:row-start-2 xl:row-end-3',
    'xl:col-start-5 xl:col-end-6 xl:row-start-2 xl:row-end-3',
    'xl:col-start-6 xl:col-end-7 xl:row-start-2 xl:row-end-3',
    'xl:col-start-1 xl:col-end-2 xl:row-start-3 xl:row-end-4',
    'xl:col-start-2 xl:col-end-4 xl:row-start-3 xl:row-end-4',
    'xl:col-start-4 xl:col-end-7 xl:row-start-3 xl:row-end-4',
    // 'xl:col-start-6 xl:col-end-7 xl:row-start-3 xl:row-end-4',

  ]
  return (
    <div className=' w-full pb-10 xl:pb-32 min-h-max bg-bg dark:bg-bg-dark z-10'>
      <div className='w-full lg:w-[80%] max-w-7xl px-12 py-9 flex flex-col items-center mx-auto'>

        <motion.h2
          className='mt-32 text-4xl text-primary-text dark:text-primary-text-dark font-semibold'

          //motion animation
          initial={{ opacity: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Mes Compétences Techniques
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="skill-container w-[70%] max-w-300 h-max xl:aspect-7/3 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-6 gap-2.5 my-12 mt-28">

          <SkillCard classname={`${positions[0]} hover:bg-react h-50 xl:h-full `} skillName='ReactJS' logo={<AnimatedReactLogo size={90} />} />
          <SkillCard classname={`${positions[1]} hover:bg-typescript h-50 xl:h-full `} skillName='TypeScript' logo={<AnimatedTSLogo size={90} />} />
          <SkillCard classname={`${positions[2]} hover:bg-html h-50 xl:h-full `} skillName='HTML' logo={<AnimatedHTMLLogo size={90} />} />
          <SkillCard classname={`${positions[3]} hover:bg-express h-50 xl:h-full text-primary-text dark:text-primary-text-dark hover:text-primary-text dark:hover:text-primary-text`} skillName='ExpressJS' logo={<AnimatedExpressLogo size={90} />} />
          <SkillCard classname={`${positions[4]} hover:bg-javascript h-50 xl:h-full `} skillName='JavaScript' logo={<AnimatedJSLogo size={90} />} />
          <SkillCard classname={`${positions[5]} hover:bg-nodejs h-50 xl:h-full `} skillName='Node JS' logo={<AnimatedNodeJsLogo size={90} />} />
          <SkillCard classname={`${positions[6]} hover:bg-css h-50 xl:h-full `} skillName='CSS' logo={<AnimatedCss3Logo size={90} />} />
          <SkillCard classname={`${positions[7]} hover:bg-tailwind h-50 xl:h-full `} skillName='Tailwind CSS' logo={<AnimatedTailwindLogo size={90} />} />
          <SkillCard classname={`${positions[8]} hover:bg-php h-50 xl:h-full `} skillName='PHP' logo={<AnimatedPhpLogo size={90} />} />
          <SkillCard classname={`${positions[9]} hover:bg-git h-50 xl:h-full `} skillName='Git' logo={<AnimatedGitLogo size={90} />} />
          <SkillCard classname={`${positions[10]} hover:bg-sql h-50 xl:h-full text-primary-text dark:text-primary-text-dark hover:text-primary-text dark:hover:text-primary-text`} skillName='SQL' logo={<AnimatedSqlLogo size={90} />} />
        </motion.div>


      </div>
    </div>
  )
}
