import { Github, Linkedin, Mail, Phone, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-secondary border border-border overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm font-mono">foto.jpg</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-primary text-sm mb-3 opacity-0 animate-fade-up stagger-1">
              {'<developer />'}
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up stagger-2">
              Murat <span className="text-gradient">Tokak</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-3">
              Full Stack Software Developer
            </p>
            
            <p className="text-secondary-foreground leading-relaxed max-w-xl mb-8 opacity-0 animate-fade-up stagger-4">
              Kurumsal yazılım geliştirme, API entegrasyonları ve veritabanı yönetimi konularında 
              deneyimli yazılım geliştiricisi. Temiz kod prensipleri ve sürdürülebilir 
              mimari yapılar konusunda uzmanlaşmış.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up stagger-5">
              <a 
                href="https://github.com/murattokak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-effect"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/murattokak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://medium.com/@murattokak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-effect"
                aria-label="Medium"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a 
                href="mailto:murat@tokak.dev" 
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-effect"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+905001234567" 
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-effect"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
