import { ExternalLink, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Yazılım Geliştirici',
    company: 'QLTEQ Teknoloji Yazılım Danışmanlığı A.Ş.',
    period: 'Güncel',
    description: 'Mevcut projelerde frontend ve backend tarafında hataların düzeltilmesi ve geliştirme çalışmaları gerçekleştirdim. Git versiyon kontrol sistemi (Bitbucket) üzerinde çalıştım.',
    technologies: ['ASP.NET Core', 'C#', 'MSSQL', 'Git', 'Bitbucket'],
    link: null
  },
  {
    title: 'E-Tez Sistemi Projesi',
    company: 'Erzincan Binali Yıldırım Ünv. Bilgi İşlem',
    period: 'Proje',
    description: 'Öğrencilerin tez yükleme ve intihal kontrolü yapabildiği, öğretim üyelerinin ise rapor inceleme, onay ve savunma süreçlerini çevrimiçi yönetebildiği bir web uygulaması geliştirdim.',
    technologies: ['ASP.NET Core', 'C#', 'MSSQL', 'Entity Framework Core', 'SOAP API', 'Bootstrap', 'JavaScript'],
    link: 'https://e-tez.ebyu.edu.tr/'
  },
  {
    title: 'EUTAS - Merkezi Araştırma Laboratuvarı',
    company: 'Erzincan Binali Yıldırım Ünv. Fen Bilimleri Enstitüsü',
    period: 'Proje',
    description: 'Merkezi Araştırma Laboratuvarı için çevrimiçi randevu, analiz talepleri için proforma oluşturma, otomatik e-posta bildirimleri ve mesajlaşma sistemi içeren bir web sitesi geliştirdim.',
    technologies: ['ASP.NET Core', 'C#', 'MSSQL', 'Entity Framework Core', 'Rotativa', 'Bootstrap', 'JavaScript'],
    link: 'https://eutas.ebyu.edu.tr/'
  },
  {
    title: 'EYS - Enstitü Yönetim Sistemi',
    company: 'Erzincan Binali Yıldırım Ünv. Fen Bilimleri Enstitüsü',
    period: 'Proje',
    description: 'Üniversite akademisyenlerinin Excel\'den yüklenen öğrenci bilgileriyle akademik süre ve tez dönemlerini takip edebildiği, otomatik uyarı-silme işlemleri ve bildirim/e-posta desteği sunan web tabanlı bir sistem geliştirdim.',
    technologies: ['ASP.NET Core', 'C#', 'MSSQL', 'Entity Framework Core', 'Bootstrap', 'JavaScript'],
    link: 'https://eys.ebyu.edu.tr/'
  },
  {
    title: 'Depo Stok Takip Sistemi',
    company: 'Ordinatrum Bilişim Teknolojileri ve Danışmanlık',
    period: 'Proje',
    description: 'ASP.NET Core MVC, C#, Entity Framework Core ve MSSQL ile depo stok takip sistemi geliştirdim. Ürün giriş çıkış takibi, Excel raporlama modülüyle ürünlerin depo çıkış süreçlerini yönettim.',
    technologies: ['ASP.NET Core MVC', 'C#', 'MSSQL', 'Entity Framework Core', 'Excel'],
    link: null
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Deneyim & Projeler</h2>
        <p className="section-subtitle">Profesyonel kariyer ve proje geçmişim</p>
        
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
                          aria-label="Projeyi görüntüle"
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
