import { Mail, Phone, User } from 'lucide-react';

const references = [
  {
    name: 'Yıldız Aydın',
    title: 'Proje Yöneticisi',
    company: 'QLTEQ',
    email: 'yildiz.aydin@example.com',
    phone: '+90 500 000 00 00'
  },
  {
    name: 'Erman Köse',
    title: 'Teknik Direktör',
    company: 'QLTEQ',
    email: 'erman.kose@example.com',
    phone: '+90 500 000 00 00'
  },
  {
    name: 'Ferhat Cengiz',
    title: 'Bölüm Başkanı',
    company: 'Erzincan Binali Yıldırım Ünv.',
    email: 'ferhat.cengiz@example.com',
    phone: '+90 500 000 00 00'
  },
  {
    name: 'Ömer Faruk İnci',
    title: 'Yazılım Mimarı',
    company: 'Freelance',
    email: 'omer.inci@example.com',
    phone: '+90 500 000 00 00'
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
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{ref.name}</h3>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                  <p className="text-sm text-primary font-medium">{ref.company}</p>
                </div>
              </div>
              
              <div className="space-y-1.5 text-sm">
                <a 
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{ref.email}</span>
                </a>
                <a 
                  href={`tel:${ref.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
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
