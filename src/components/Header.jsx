import React, { useState } from 'react'
import Button from '../ui/Button'
import { HoverButton } from '../ui/HoverButton'
import ToggleMode from '../ui/ToggleMode';

export default function Header() {
  const [active, setActive] = useState("portfolio");
  return (
    <header className='w-full flex flex-row items-center justify-center fixed top-0 left-0 bg-transparent backdrop-blur-sm z-100'>
      <div className='w-full lg:w-[80%] max-w-7xl px-12 py-9 flex flex-row items-center justify-between'>
        <h1 className='text-2xl logo text-accent'><a href="#">Ely</a></h1>
        <nav className='w-full hidden lg:flex'>
          <ul className='w-full flex flex-row items-center justify-center gap-5 text-[1em] instrument-sans-500 font-medium'>
            <li><a href="#" className={`${active == 'portfolio' ? 'text-accent font-semibold' : 'text-secondary-text dark:text-secondary-text-dark'} transition-all`} onClick={() => setActive("portfolio")}>Portfolio</a></li>
            <li><a href="#" className={`${active == 'projects' ? 'text-accent' : 'text-secondary-text dark:text-secondary-text-dark'} transition-all`} onClick={() => setActive("projects")}>Projets</a></li>
            <li><a href="#about" className={`${active == 'about' ? 'text-accent' : 'text-secondary-text dark:text-secondary-text-dark'} transition-all`} onClick={() => setActive("about")}>À propos</a></li>
            <li><a href="#" className={`${active == 'contact' ? 'text-accent' : 'text-secondary-text dark:text-secondary-text-dark'} transition-all`} onClick={() => setActive("contact")}>Contact</a></li>
          </ul>
        </nav>
        <ToggleMode />
      </div>
    </header>
  )
}
