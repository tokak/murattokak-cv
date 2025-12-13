import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'QLTEQ',
    period: '2022 - Günümüz',
    description: 'Kurumsal web uygulamaları ve API geliştirme. Mikroservis mimarisi ve veritabanı optimizasyonu.',
    technologies: ['C#', 'ASP.NET Core', 'React', 'MSSQL', 'Docker'],
    link: 'https://qlteq.com'
  },
  {
    title: 'Yazılım Geliştirici',
    company: 'Erzincan Binali Yıldırım Üniversitesi',
    period: '2020 - 2022',
    description: 'Üniversite bilgi yönetim sistemleri, öğrenci portalı ve akademik modül geliştirme.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'REST API'],
    link: null
  },
  {
    title: 'Freelance Developer',
    company: 'Bağımsız Projeler',
    period: '2018 - 2020',
    description: 'E-ticaret platformları, kurumsal web siteleri ve özel CRM çözümleri.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
    link: null
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">// Deneyim & Projeler</h2>
        
        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="timeline-line" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background group-hover:glow-effect transition-all duration-300" />
                
                <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-secondary-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
