import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

const ContactSection = () => {
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
                href="mailto:murat@tokak.dev"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>murat@tokak.dev</span>
              </a>
              
              <a 
                href="tel:+905001234567"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+90 500 123 45 67</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Türkiye</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Sosyal Medya</h3>
              
              <div className="flex gap-3">
                <a 
                  href="https://github.com/murattokak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/murattokak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://medium.com/@murattokak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Medium"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
