'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'sobremi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'herramientas', label: 'Herramientas' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md' : 'bg-gradient-to-b from-[#0A192F]/95 to-[#0A192F]/75'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-[#64ffda] font-bold text-lg hover:opacity-80 transition-opacity"
          >
            Johan Ballen
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-[#64ffda] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              asChild
              className="hidden sm:flex bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-[#0A192F] font-bold"
            >
              <a href="/docs/CV_Johan_Ballen.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                Ver CV
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#64ffda]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A192F] border-t border-white/10">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-white hover:text-[#64ffda] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-[#0A192F] font-bold">
                  <a href="/docs/CV_Johan_Ballen.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Ver CV
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
