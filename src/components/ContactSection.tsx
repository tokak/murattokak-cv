import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">// İletişim</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Birlikte çalışalım
            </h3>
            <p className="text-secondary-foreground leading-relaxed">
              Yeni projeler ve iş fırsatları için her zaman iletişime açığım. 
              Aşağıdaki kanallardan bana ulaşabilirsiniz.
            </p>
            
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:murat@tokak.dev"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">E-posta</p>
                  <p className="text-foreground font-medium">murat@tokak.dev</p>
                </div>
              </a>
              
              <a 
                href="tel:+905001234567"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telefon</p>
                  <p className="text-foreground font-medium">+90 500 123 45 67</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Konum</p>
                  <p className="text-foreground font-medium">Türkiye</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Sosyal Medya
            </h3>
            <p className="text-secondary-foreground leading-relaxed mb-6">
              Projelerimi ve yazılarımı takip edebilirsiniz.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/murattokak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">GitHub</p>
                  <p className="text-xs text-muted-foreground">github.com/murattokak</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/murattokak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/murattokak</p>
                </div>
              </a>
              
              <a 
                href="https://medium.com/@murattokak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium">Medium</p>
                  <p className="text-xs text-muted-foreground">medium.com/@murattokak</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
