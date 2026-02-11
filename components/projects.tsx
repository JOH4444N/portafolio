'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Eye } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: 'Simulación de pruebas en e-commerce',
      description: 'Diseño de plan de pruebas, ejecución con TestRail y reporte de bugs con JIRA.',
      image: '/ecommerce-testing-simulation.png',
      tools: 'TestRail, JIRA',
      role: 'QA Manual (simulación)',
      activities: 'Diseño de casos, ejecución, reporte y seguimiento de bugs.',
      link: '/proyectos/proyecto1.html'
    },
    {
      title: 'Pruebas de API con Postman',
      description: 'Definición de colecciones y validaciones automatizadas para endpoints clave.',
      image: '/api-testing-postman.png',
      tools: 'Postman, Newman',
      role: 'QA Manual (simulación)',
      activities: 'Colecciones de Postman y casos de validación para endpoints.',
      link: '#'
    }
  ]

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#0A192F] mb-12 text-center">Proyectos</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[#0A192F] mb-3">{project.title}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver detalle
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#0A192F]"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Abrir proyecto
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-700">{selectedProject?.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Herramientas:</h4>
                <p className="text-gray-600">{selectedProject?.tools}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rol:</h4>
                <p className="text-gray-600">{selectedProject?.role}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Actividades:</h4>
              <p className="text-gray-600">{selectedProject?.activities}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
