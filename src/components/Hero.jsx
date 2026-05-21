import React, { useEffect, useRef } from 'react';
import BackgroundGrid from '../illustrations/BackgroundGrid';
import ScrollDownArrow from '../illustrations/ScrollDownArrow';
import Tag from '../illustrations/Tag';
import Disk from '../illustrations/Disk';
import Button from '../ui/Button';

export default function Hero() {
  const contentRef = useRef(null);
  const tag1Ref = useRef(null);
  const tag2Ref = useRef(null);
  const disk1Ref = useRef(null);

  let greetingWord;
  let date = new Date;
  if (date.getHours() >= 0 && date.getHours() < 17) {
    greetingWord = 'Bonjour';
  }
  else {
    greetingWord = 'Bonsoir';
  }

  useEffect(() => {
    const content = contentRef.current;
    const tag1 = tag1Ref.current;
    const tag2 = tag2Ref.current;
    const disk1 = disk1Ref.current;
    if (!content) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Move up by 40% of the scroll distance (adjust multiplier as needed)
      const translateY = scrollY * -0.4;
      const translateY1 = scrollY * -0.1;
      const translateY2 = scrollY * 0.15;

      content.style.transform = `translateY(${translateY}px)`;
      tag1.style.transform = `translateX(${translateY1}px) rotate(45deg)`;
      tag2.style.transform = `translateX(${translateY2}px)`;
      disk1.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-bg dark:bg-bg-dark transition-colors overflow-hidden relative select-none">
        <BackgroundGrid />

        {/* Content that will move up on scroll */}
        <div
          ref={contentRef}
          className="relative w-full h-full z-10 transition-transform duration-75 ease-out" // duration-75 for smooth feel
        >

          {/* XML tag */}
          <Tag
            tagRef={tag1Ref}
            classname="hidden lg:flex absolute top-[20%] right-[25%] scale-100 text-bg dark:text-bg-dark/30 rotate-z-45
            animate-fade animate-once animate-ease-in-out animate-delay-2400 animate-duration-1000
            " />

          {/* circle on the left */}
          <div className="hidden lg:flex absolute -right-[10%] w-[48vw] max-w-3xl aspect-square rounded-full bg-accent-light dark:bg-white/20 top-[50vh] -translate-y-1/2 transition-colors
          animate-fade animate-once animate-ease-in-out animate-delay-2000 animate-duration-1000
          "></div>

          {/* Disk */}
          <Disk
            diskRef={disk1Ref}
            classname="hidden xl:flex absolute top-[45%] right-[35%] scale-120
            animate-fade animate-once animate-ease-in-out animate-delay-2300 animate-duration-1000"
          />

          {/* XML tag */}
          <Tag
            tagRef={tag2Ref}
            classname="hidden lg:flex absolute bottom-[20%] right-[20%] scale-150 text-bg dark:text-bg-dark/30
            animate-fade animate-once animate-ease-in-out animate-delay-2200 animate-duration-1000
            " />

          {/* Subject informations on the right */}
          <div className="lg:absolute lg:left-[50vw] lg:-translate-x-1/2 w-full lg:w-[80%] max-w-7xl h-screen flex flex-col items-center lg:items-start lg:pl-12 justify-center">
            <div className='px-8 lg:px-0'>
              <h2 className="text-[1.9em] text-primary-text dark:text-primary-text-dark 
              animate-fade animate-once animate-ease-linear animate-duration-1000 animate-delay-500">
                {`${greetingWord}, je suis`}
              </h2>
              <h1 className="md:text-[4em] text-[3.5em] whitespace-normal lg:text-[4em] uppercase font-julius-sans-one text-accent
              animate-fade-right animate-once animate-ease-in-out animate-duration-1000 animate-delay-1200">
                Marthely Adjovi
              </h1>
            </div>
            <h2 className="uppercase px-8 lg:px-0 text-[1.3em] md:text-2xl tracking-widest text-secondary-text dark:text-secondary-text-dark
            animate-fade animate-once animate-ease-in-out animate-duration-1000 animate-delay-1800
            ">
              Développeur web Fullstack
            </h2>
            <div className='flex flex-col lg:flex-row items-center justify-between lg:justify-start w-full px-5 gap-5 mt-8
            animate-fade animate-once animate-ease-in-out animate-duration-1000 animate-delay-2800
            '>
              <a href="documents/Marthely_ADJOVI_Resume.pdf" download='Marthely_ADJOVI_Resume.pdf' className='w-full max-w-52'>

                <Button
                  expand={true}
                  variant='border'
                  text={"Télécharger CV"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"className='w-full max-w-52'
                      width="24px"
                      fill="#BB99FF">
                      <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                  }
                  iconPos='right' />
              </a>
              <a href="#projects" className='w-full max-w-52'>
                <Button
                  expand={true}
                  text={"Mes projets"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff">
                      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                    </svg>
                  }
                  iconPos='right' />
              </a>
            </div>
          </div>


          {/* scroll direction arrow */}
          <div className='absolute left-[50vw] -translate-x-1/2 bottom-9 z-10 flex flex-col items-center justify-center gap-3 animate-fade animate-once animate-ease-in-out animate-delay-2500 animate-duration-1000'>
            <h2 className='uppercase text-xl text-accent'>Scroll</h2>
            <ScrollDownArrow classname="animate-bounce animate-infinite animate-duration-2600 animate-ease-out" />
          </div>


        </div>
      </div>
    </>
  )
}
