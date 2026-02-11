'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const offerings = [
    'Ejecución de pruebas manuales',
    'Diseño de casos y planes de prueba',
    'Reporte y seguimiento de bugs (JIRA/TestRail)',
    'Pruebas funcionales y de regresión'
  ]

  return (
    <section id="sobremi" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-8 text-center">Sobre mí</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Soy un QA Tester Manual Junior con formación teórica en pruebas de software y experiencia práctica en proyectos académicos y simulaciones. Manejo metodologías ágiles (Scrum) y herramientas como JIRA, Trello, TestRail y Azure DevOps. Busco mi primera oportunidad profesional para aportar al aseguramiento de la calidad en productos reales.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Me destaco por mi atención al detalle, capacidad de análisis y ganas de aprender continuamente.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <strong className="text-[#0A192F]">Busco:</strong> rol de QA Manual, preferiblemente en equipos ágiles donde pueda crecer en pruebas funcionales, de regresión y documentación de procesos.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-4">Lo que ofrezco</h3>
                  <ul className="space-y-3">
                    {offerings.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#64ffda] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
