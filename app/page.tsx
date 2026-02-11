'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Tools from '@/components/tools'
import Certifications from '@/components/certifications'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#fbfdff]">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
