'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [feedback, setFeedback] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback('Enviando...')

    try {
      // Simular envío (reemplaza con tu endpoint real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFeedback('¡Gracias! Tu mensaje fue enviado correctamente.')
      setFormData({ nombre: '', email: '', mensaje: '' })
    } catch (error) {
      setFeedback('Hubo un error al enviar el mensaje. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFeedback(''), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-12 text-center">Contacto</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu correo"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                    <Textarea
                      name="mensaje"
                      placeholder="Tu mensaje"
                      rows={6}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="w-full resize-none"
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#0A192F] font-bold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                    {feedback && (
                      <p className={`text-sm text-center ${
                        feedback.includes('Gracias') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {feedback}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-6">Datos de contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-[#64ffda] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A192F]">Email</p>
                        <p className="text-gray-600">johan.ballen@email.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-[#64ffda] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A192F]">Teléfono</p>
                        <p className="text-gray-600">+57 300 000 0000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Linkedin className="w-5 h-5 text-[#64ffda] mt-1" />
                      <div>
                        <p className="font-semibold text-[#0A192F]">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/johanballen" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#64ffda] hover:underline"
                        >
                          linkedin.com/in/johanballen
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    <a
                      href="https://linkedin.com/in/johanballen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#64ffda]/10 rounded-full hover:bg-[#64ffda]/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A192F]" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#64ffda]/10 rounded-full hover:bg-[#64ffda]/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-[#0A192F]" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
