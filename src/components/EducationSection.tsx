import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bilgisayar Mühendisliği',
    school: 'Erzincan Binali Yıldırım Üniversitesi',
    period: '2020 - 2022',
    type: 'Lisans Tamamlama'
  },
  {
    degree: 'Bilgisayar Programcılığı',
    school: 'Van Yüzüncü Yıl Üniversitesi',
    period: '2022 - 2025',
    type: 'Ön Lisans'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Eğitim</h2>
        <p className="section-subtitle">Akademik geçmişim</p>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="card-corporate flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <p className="text-xs text-primary mt-2 font-medium">{edu.type}</p>
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

export default EducationSection;
