import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import iaRecruitmentImage from '@/assets/Proyectos/IARecruimentApp/Home Page.png';
import iaRecruitmentAnalysis from '@/assets/Proyectos/IARecruimentApp/Analisis y Metricas.png';
import iaRecruitmentComparison from '@/assets/Proyectos/IARecruimentApp/Comparacion_candidatos.png';
import iaRecruitmentDetails from '@/assets/Proyectos/IARecruimentApp/Detalles de Candidatos.png';
import iaRecruitmentStrengths from '@/assets/Proyectos/IARecruimentApp/Fortalezas y Mejoras.png';
import iaRecruitmentRecommendation from '@/assets/Proyectos/IARecruimentApp/Recomendacion_Candidato.png';
import baccBeautyImage from '@/assets/Proyectos/WordPress/baccbeauty.com_.png';
import coorsLightImage from '@/assets/Proyectos/WordPress/coorslightpty.com_.png';
import minestleImage from '@/assets/Proyectos/WordPress/www.minestle.com_.png';
import nescafeImage from '@/assets/Proyectos/WordPress/www.nescafe.com_cam_latas-despierta-orgullo.png';
import nestleAgustaImage from '@/assets/Proyectos/WordPress/www.nestleagustoconlavida.com_anchor.png';
import crystoDolarImage from '@/assets/Proyectos/CrystoDolar/CrystoDolar.png';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project images for modal
  const projectImages = {
    iarecruitment: [
      iaRecruitmentImage,
      iaRecruitmentAnalysis,
      iaRecruitmentComparison,
      iaRecruitmentDetails,
      iaRecruitmentStrengths,
      iaRecruitmentRecommendation
    ],
    baccbeauty: [baccBeautyImage],
    coorslightpty: [coorsLightImage],
    minestle: [minestleImage],
    nescafe: [nescafeImage],
    nestleagusta: [nestleAgustaImage],
    crystodolar: [crystoDolarImage]
  };

  const allProjects = [
    {
      id: 'iarecruitment',
      title: t('portfolio.projects.iarecruitment.title'),
      description: t('portfolio.projects.iarecruitment.description'),
      image: iaRecruitmentImage,
      liveDemo: 'https://iarecruiment-app.vercel.app/', // Add actual URL when available
      technologies: ['Express.js', 'Next.js', 'AI', 'PostgreSQL']
    },
    {
      id: 'baccbeauty',
      title: t('portfolio.projects.baccbeauty.title'),
      description: t('portfolio.projects.baccbeauty.description'),
      image: baccBeautyImage,
      liveDemo: 'https://baccbeauty.com/',
      technologies: ['WordPress', 'Elementor']
    },
    {
      id: 'coorslightpty',
      title: t('portfolio.projects.coorslightpty.title'),
      description: t('portfolio.projects.coorslightpty.description'),
      image: coorsLightImage,
      liveDemo: 'https://coorslightpty.com/',
      technologies: ['Drupal']
    },
    {
      id: 'crystodolar',
      title: t('portfolio.projects.crystodolar.title'),
      description: t('portfolio.projects.crystodolar.description'),
      image: crystoDolarImage,
      liveDemo: 'https://www.crystodolarvzla.site/',
      technologies: ['React', 'Python', 'FastAPI', 'Web Scraping']
    },
    {
      id: 'minestle',
      title: t('portfolio.projects.minestle.title'),
      description: t('portfolio.projects.minestle.description'),
      image: minestleImage,
      liveDemo: 'https://www.minestle.com/',
      technologies: ['Drupal']
    },
    {
      id: 'nescafe',
      title: t('portfolio.projects.nescafe.title'),
      description: t('portfolio.projects.nescafe.description'),
      image: nescafeImage,
      liveDemo: 'https://www.nescafe.com/',
      technologies: ['PHP']
    },
    {
      id: 'nestleagusta',
      title: t('portfolio.projects.nestleagusta.title'),
      description: t('portfolio.projects.nestleagusta.description'),
      image: nestleAgustaImage,
      liveDemo: 'https://www.nestleagustoconlavida.com/',
      technologies: ['PHP']
    }
  ];

  const projects = allProjects.slice(0, visibleProjects);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && projectImages[selectedProject.id]) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % projectImages[selectedProject.id].length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && projectImages[selectedProject.id]) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projectImages[selectedProject.id].length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('portfolio.title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden glass-effect hover:purple-glow transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 md:p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="sm" variant="default" asChild className="flex-1">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t('portfolio.liveDemo')}
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => openProjectModal(project)} className="flex-1">
                    <Info className="w-3 h-3 mr-1" />
                    {t('portfolio.details')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < allProjects.length && (
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setVisibleProjects(allProjects.length)}
            >
              {t('portfolio.seeMore')}
            </Button>
          )}
          {visibleProjects === allProjects.length && (
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setVisibleProjects(3)}
            >
              {t('portfolio.showLess')}
            </Button>
          )}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto mx-4">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl pr-8">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image Gallery */}
                {projectImages[selectedProject.id] && projectImages[selectedProject.id].length > 0 && (
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={projectImages[selectedProject.id][currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {projectImages[selectedProject.id].length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 p-0 md:w-auto md:h-auto md:p-2"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 p-0 md:w-auto md:h-auto md:p-2"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
                        </Button>
                        
                        <div className="flex justify-center mt-4 gap-3">
                          {projectImages[selectedProject.id].map((_, index) => (
                            <button
                              key={index}
                              className={`w-3 h-3 md:w-2 md:h-2 rounded-full ${
                                index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Project Description */}
                <div>
                  <h3 className="text-lg md:text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Technologies */}
                {selectedProject.technologies && (
                  <div>
                    <h3 className="text-lg md:text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Demo Button */}
                {selectedProject.liveDemo !== '#' && (
                  <div className="flex justify-center">
                    <Button asChild>
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Portfolio;