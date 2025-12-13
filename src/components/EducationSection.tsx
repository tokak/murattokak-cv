import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bilgisayar Mühendisliği',
    school: 'Erzincan Binali Yıldırım Üniversitesi',
    period: '2018 - 2022',
    type: 'Lisans'
  },
  {
    degree: 'Bilgisayar Programcılığı',
    school: 'Erzincan Binali Yıldırım Üniversitesi',
    period: '2016 - 2018',
    type: 'Ön Lisans'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">// Eğitim</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm text-muted-foreground">{edu.period}</span>
                    <p className="text-xs text-primary mt-1">{edu.type}</p>
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
