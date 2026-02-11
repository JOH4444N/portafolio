'use client'

import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/85 to-[#112240]/75 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/placeholder.svg?height=1080&width=1920&query=professional tech background)' }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hola, soy <span className="text-[#64ffda]">Johan Ballen</span>
            </motion.h1>
            
            <motion.p 
              className="text-[#64ffda] font-semibold text-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              QA Tester Manual Junior
            </motion.p>
            
            <motion.p 
              className="text-white/90 text-lg mb-6 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Apasionado por la calidad del software, pruebas rigurosas y mejora continua. 
              Actualmente en último semestre de Ingeniería de Sistemas.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#0A192F] font-bold">
                <a href="/docs/CV_Johan_Ballen.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Ver CV
                </a>
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactarme
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div>
                <span className="font-bold text-white">Ubicación</span>
                <p className="text-white/80">Bogotá, Colombia</p>
              </div>
              <div>
                <span className="font-bold text-white">Rol</span>
                <p className="text-white/80">QA Manual</p>
              </div>
              <div>
                <span className="font-bold text-white">Estudios</span>
                <p className="text-white/80">Ingeniería de Sistemas</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/10">
                  <Image
                    src="/placeholder-0kepx.png"
                    alt="Foto de Johan Ballen"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
