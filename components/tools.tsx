'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Tools() {
  const tools = [
    { name: 'JIRA', logo: '/jira-logo.png' },
    { name: 'Trello', logo: '/trello-logo.png' },
    { name: 'Azure DevOps', logo: '/azure-devops-logo.png' },
    { name: 'TestRail', logo: '/testrail-logo.png' }
  ]

  return (
    <section id="herramientas" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-12 text-center">Herramientas</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <Image
                        src={tool.logo || "/placeholder.svg"}
                        alt={`${tool.name} logo`}
                        width={80}
                        height={80}
                        className="max-w-full max-h-full object-contain opacity-90"
                      />
                    </div>
                    <span className="font-bold text-gray-600">{tool.name}</span>
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
