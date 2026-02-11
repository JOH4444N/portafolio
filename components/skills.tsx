'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function Skills() {
  const skills = [
    { name: 'Diseño de casos de prueba', level: 85 },
    { name: 'Pruebas funcionales / regresión', level: 80 },
    { name: 'Identificación y reporte de bugs', level: 85 },
    { name: 'Metodologías ágiles (Scrum)', level: 75 }
  ]

  return (
    <section id="habilidades" className="py-20 bg-[#f7fbff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-12 text-center">Habilidades</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-[#0A192F] mb-4">{skill.name}</h4>
                    <div className="w-full bg-[#e6eef7] rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#64ffda] to-[#52d1b3] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="text-right mt-2">
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
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
