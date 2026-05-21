import { useState } from 'react'
import Hero from './components/Hero'
import MainLayout from './layouts/MainLayout'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <MainLayout>
      <main>
        <Hero/>
        <section id='projects'><Projects/></section>
        <section id='about'><About/></section>
        <section id='skills'><Skills/></section>
        <section id='contact'><Contact/></section>
      </main>
    </MainLayout>

  )
}

export default App
