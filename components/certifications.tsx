'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Award } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'Software Testing desde cero',
      provider: 'Udemy — 2025',
      description: 'Fundamentos de QA, diseño de casos, ejecución y reporte de bugs.'
    },
    {
      title: 'Fundamentos de Scrum',
      provider: 'Platzi — 2025',
      description: 'Roles, artefactos y ceremonias en equipos ágiles.'
    }
  ]

  return (
    <section id="certificaciones" className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-12 text-center">Certificaciones</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Award className="w-8 h-8 text-[#64ffda]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0A192F] mb-2">{cert.title}</h4>
                        <p className="text-gray-600 font-medium mb-3">{cert.provider}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
