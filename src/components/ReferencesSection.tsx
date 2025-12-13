import { Mail, Phone, ExternalLink } from 'lucide-react';

const references = [
  {
    name: 'Yıldız Aydın',
    title: 'Proje Yöneticisi',
    company: 'QLTEQ',
    email: 'yildiz.aydin@example.com',
    phone: '+90 500 000 00 00',
    link: null
  },
  {
    name: 'Erman Köse',
    title: 'Teknik Direktör',
    company: 'QLTEQ',
    email: 'erman.kose@example.com',
    phone: '+90 500 000 00 00',
    link: null
  },
  {
    name: 'Ferhat Cengiz',
    title: 'Bölüm Başkanı',
    company: 'Erzincan Binali Yıldırım Ünv.',
    email: 'ferhat.cengiz@example.com',
    phone: '+90 500 000 00 00',
    link: null
  },
  {
    name: 'Ömer Faruk İnci',
    title: 'Yazılım Mimarı',
    company: 'Freelance',
    email: 'omer.inci@example.com',
    phone: '+90 500 000 00 00',
    link: 'https://linkedin.com'
  }
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">// Referanslar</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div 
              key={index}
              className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {ref.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{ref.title}</p>
                  <p className="text-primary text-sm font-medium">{ref.company}</p>
                </div>
                {ref.link && (
                  <a 
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="space-y-2">
                <a 
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{ref.email}</span>
                </a>
                <a 
                  href={`tel:${ref.phone}`}
                  className="flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{ref.phone}</span>
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
