import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, BookOpen, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <section id="contact" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">Benimle iletişime geçin</p>
        
        <div className="card-corporate">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">İletişim Bilgileri</h3>
              
              <a 
                href="mailto:tokakmurat01@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>tokakmurat01@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Diyarbakır, İstanbul, Kocaeli, Kayseri</span>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground mb-3">Kişisel Bilgiler</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span>Doğum Yeri: Diyarbakır</span>
                  </div>
                  <p>Medeni Durum: Bekar</p>
                  <p>Askerlik: Yapıldı</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Sosyal Medya</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/tokak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Github className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-sm">GitHub</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">github.com/tokak</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/murattokak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Linkedin className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-sm">LinkedIn</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">linkedin.com/in/murattokak</p>
                  </div>
                </a>
                
                <a 
                  href="https://medium.com/@tokakmurat01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <BookOpen className="w-5 h-5" />
                  <div>
                    <p className="font-medium text-sm">Medium</p>
                    <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70">medium.com/@tokakmurat01</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Button */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <Button 
              onClick={() => setContactFormOpen(true)}
              className="gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Mesaj Gönder
            </Button>
          </div>
        </div>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </section>
  );
};

export default ContactSection;
