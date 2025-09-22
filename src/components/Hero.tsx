import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { SiReact, SiJavascript, SiNodedotjs, SiPostgresql, SiNextdotjs, SiWordpress, SiPhp, SiLaravel, SiPython, SiDocker } from 'react-icons/si';
import heroIllustration from '@/assets/hero-illustration.png';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = t('hero.techStack', { returnObjects: true }) as string[];

  const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'React': SiReact,
    'Javascript': SiJavascript,
    'Node.js': SiNodedotjs,
    'PostgreSQL': SiPostgresql,
    'Next.js': SiNextdotjs,
    'WordPress': SiWordpress,
    'PHP': SiPhp,
    'Laravel': SiLaravel,
    'Python': SiPython,
    'Docker': SiDocker,
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>{t('hero.readyToInnovate')}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.fullStackDeveloper')}
              </h1>
              <p className="text-lg text-muted-foreground">{t('hero.name')}</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              {t('hero.description')}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => {
                const IconComponent = techIcons[tech];
                return (
                  <span key={tech} className="tech-badge px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="purple-glow"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('hero.projects')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.contact')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Lujdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lmolinawd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/luii.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Developer Illustration"
                className="w-full max-w-lg animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;