import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="about" className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 opacity-0 animate-fade-up">
          <div className="w-32 h-32 mx-auto rounded-full bg-secondary border-4 border-primary/20 overflow-hidden flex items-center justify-center">
            <span className="text-xs text-muted-foreground font-mono">foto</span>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up stagger-1">
          Murat Tokak
        </h1>
        
        <p className="text-xl text-primary font-medium mb-6 opacity-0 animate-fade-up stagger-2">
          Full Stack Software Developer
        </p>
        
        {/* Summary */}
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up stagger-3">
          Kurumsal yazılım geliştirme, API entegrasyonları ve veritabanı yönetimi konularında 
          deneyimli yazılım geliştiricisi. Temiz kod prensipleri, SOLID ilkeleri ve 
          sürdürülebilir mimari yapılar konusunda uzmanlaşmış.
        </p>

        {/* Contact Links */}
        <div className="flex items-center justify-center gap-3 flex-wrap opacity-0 animate-fade-up stagger-4">
          <a 
            href="mailto:murat@tokak.dev" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            İletişime Geç
          </a>
          <a 
            href="https://github.com/murattokak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/murattokak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
