const skills = {
  languages: ['C#', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  frameworks: ['ASP.NET Core', 'Entity Framework Core', 'Blazor', 'React', 'Laravel', 'Vue.js', 'Node.js', 'REST API'],
  databases: ['MSSQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite'],
  tools: ['Git', 'Docker', 'Azure', 'Visual Studio', 'VS Code', 'Postman', 'Jira']
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-6">
    <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span key={skill} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Teknik Yetenekler</h2>
        <p className="section-subtitle">Uzmanlaştığım teknolojiler</p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-corporate">
            <SkillCategory title="Programlama Dilleri" items={skills.languages} />
            <SkillCategory title="Veritabanları" items={skills.databases} />
          </div>
          <div className="card-corporate">
            <SkillCategory title="Framework & Kütüphaneler" items={skills.frameworks} />
            <SkillCategory title="Araçlar & Platformlar" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
