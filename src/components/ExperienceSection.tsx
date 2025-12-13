import { ExternalLink, Briefcase } from 'lucide-react';

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
    <section id="experience" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">İş Deneyimi</h2>
        <p className="section-subtitle">Profesyonel kariyer geçmişim</p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="card-corporate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label="Web sitesi"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
