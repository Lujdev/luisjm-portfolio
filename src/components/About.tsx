import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, ExternalLink } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  description: string;
}

const About = () => {
  const { t, i18n } = useTranslation();

  const stats: Stat[] = [
    t('about.stats.totalProjects', { returnObjects: true }) as Stat,
    t('about.stats.certificates', { returnObjects: true }) as Stat,
    t('about.stats.experience', { returnObjects: true }) as Stat
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description1', { name: t('hero.name') })}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description2')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="purple-glow" asChild>
                  <a
                    href={`/cv/Software_Dev_Luis_${i18n.language.toUpperCase()}.pdf`}
                    download={`Software_Dev_Luis_${i18n.language.toUpperCase()}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t('about.downloadCV')}
                  </a>
                </Button>
               <Button
                               variant="default"
                               size="lg"
                               onClick={() => scrollToSection('portfolio')}
                               className="purple-glow"
                             >
                               <ExternalLink className="w-4 h-4 mr-2" />
                               {t('hero.projects')}
                             </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 glass-effect hover:purple-glow transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;