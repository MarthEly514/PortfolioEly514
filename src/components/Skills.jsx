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
  return (
    <div className=' w-full pb-32 min-h-max bg-bg dark:bg-bg-dark z-10'>
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
          className="skill-container w-[70%] max-w-300 aspect-7/3 grid grid-rows-3 grid-cols-6 gap-2.5 my-12 mt-28">

          <SkillCard classname="hover:bg-react col-start-1 col-end-2 row-start-1 row-end-2 " skillName='ReactJS' logo={<AnimatedReactLogo size={90} />} />
          <SkillCard classname="hover:bg-typescript col-start-2 col-end-4 row-start-1 row-end-2 " skillName='TypeScript' logo={<AnimatedTSLogo size={90} />} />
          <SkillCard classname="hover:bg-html col-start-4 col-end-5 row-start-1 row-end-2 " skillName='HTML' logo={<AnimatedHTMLLogo size={90} />} />
          <SkillCard classname="hover:bg-express col-start-5 col-end-7 row-start-1 row-end-2 text-primary-text dark:text-primary-text-dark hover:text-primary-text dark:hover:text-primary-text" skillName='ExpressJS' logo={<AnimatedExpressLogo size={90} />} />
          <SkillCard classname="hover:bg-javascript col-start-1 col-end-3 row-start-2 row-end-3 " skillName='JavaScript' logo={<AnimatedJSLogo size={90} />} />
          <SkillCard classname="hover:bg-nodejs col-start-3 col-end-5 row-start-2 row-end-3 " skillName='Node JS' logo={<AnimatedNodeJsLogo size={90} />} />
          <SkillCard classname="hover:bg-css col-start-5 col-end-6 row-start-2 row-end-4 " skillName='CSS' logo={<AnimatedCss3Logo size={90} />} />
          <SkillCard classname="hover:bg-tailwind col-start-6 col-end-7 row-start-2 row-end-3 " skillName='Tailwind CSS' logo={<AnimatedTailwindLogo size={90} />} />
          <SkillCard classname="hover:bg-php col-start-1 col-end-2 row-start-3 row-end-4 " skillName='PHP' logo={<AnimatedPhpLogo size={90} />} />
          <SkillCard classname="hover:bg-git col-start-2 col-end-4 row-start-3 row-end-4 " skillName='Git' logo={<AnimatedGitLogo size={90} />} />
          <SkillCard classname="hover:bg-sql col-start-4 col-end-5 row-start-3 row-end-4 text-primary-text dark:text-primary-text-dark hover:text-primary-text dark:hover:text-primary-text" skillName='SQL' logo={<AnimatedSqlLogo size={90} />} />
          <SkillCard classname="hover:bg-accent col-start-6 col-end-7 row-start-3 row-end-4 rotate-x" skillName='Et bien plus' />
        </motion.div>


      </div>
    </div>
  )
}
