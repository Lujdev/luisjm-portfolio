import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Add Web3Forms configuration
    formData.append('access_key', '0bd57648-6070-4242-8bd8-e27aea0270a7'); // Replace with your actual access key
    formData.append('subject', 'New contact form submission from portfolio');
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">{t('contact.formTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.formDescription')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input name="firstName" placeholder={t('contact.firstName')} className="bg-secondary/50" required />
                  <Input name="lastName" placeholder={t('contact.lastName')} className="bg-secondary/50" required />
                </div>
                <Input name="email" placeholder={t('contact.email')} type="email" className="bg-secondary/50" required />
                <Input name="subject" placeholder={t('contact.subject')} className="bg-secondary/50" required />
                <Textarea
                  name="message"
                  placeholder={t('contact.message')}
                  rows={5}
                  className="bg-secondary/50 resize-none"
                  required
                />
                <Button type="submit" size="lg" className="w-full purple-glow" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
                </Button>
                {isSuccess && (
                  <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
                )}
                {isError && (
                  <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
                )}
              </form>
            </Card>

            {/* Connect With Me */}
            <div className="space-y-8">
              <Card className="p-8 glass-effect">
                <h3 className="text-2xl font-bold mb-6">{t('contact.connectTitle')}</h3>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/lmolinawd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 mr-4 text-primary group-hover:text-primary-foreground" />
                    <div>
                      <div className="font-semibold">{t('contact.connect.linkedin.title')}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        {t('contact.connect.linkedin.subtitle')}
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/luii.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 mr-4 text-primary group-hover:text-primary-foreground" />
                    <div>
                      <div className="font-semibold">{t('contact.connect.instagram.title')}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        {t('contact.connect.instagram.subtitle')}
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Lujdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 mr-4 text-primary group-hover:text-primary-foreground" />
                    <div>
                      <div className="font-semibold">{t('contact.connect.github.title')}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        {t('contact.connect.github.subtitle')}
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;