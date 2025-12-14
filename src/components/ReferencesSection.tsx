import { Mail, ExternalLink, User } from 'lucide-react';

const references = [
  {
    name: 'Yıldız Aydın',
    title: 'Dr. Öğr. Üyesi',
    company: 'Erzincan Binali Yıldırım Üniversitesi',
    email: 'yciltas@erzincan.edu.tr',
    link: 'https://avesis.ebyu.edu.tr/yciltas'
  },
  {
    name: 'Ferhat Cengiz',
    title: 'Full Stack Developer - Tech Lead | .NET',
    company: 'YouthSide.co',
    email: 'fcngz.career@gmail.com',
    link: 'https://www.linkedin.com/in/ferhatcengizz/'
  },
  {
    name: 'Erman Köse',
    title: 'Yazılım Geliştiricisi',
    company: 'Erzincan Binali Yıldırım Ünv. Bilgi İşlem',
    email: 'ekose@erzincan.edu.tr',
    link: null
  },
  {
    name: 'Ömer Faruk İnci',
    title: 'Programcı',
    company: 'Erzincan Binali Yıldırım Ünv. Bilgi İşlem',
    email: 'omer.inci@erzincan.edu.tr',
    link: null
  }
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Referanslar</h2>
        <p className="section-subtitle">Birlikte çalıştığım profesyoneller</p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref, index) => (
            <div key={index} className="card-corporate">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{ref.name}</h3>
                    <p className="text-sm text-muted-foreground">{ref.title}</p>
                    <p className="text-sm text-primary font-medium">{ref.company}</p>
                  </div>
                </div>
                {ref.link && (
                  <a 
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
                    aria-label="Profili görüntüle"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="text-sm">
                <a 
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{ref.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
