const skills = {
  languages: [
    'C#', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'
  ],
  frameworks: [
    'ASP.NET Core', 'Entity Framework Core', 'Blazor', 'React', 
    'Laravel', 'Vue.js', 'Node.js', 'REST API'
  ],
  databases: [
    'MSSQL', 'MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite'
  ],
  tools: [
    'Git', 'Docker', 'Azure', 'Visual Studio', 'VS Code', 'Postman', 'Jira'
  ]
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-8">
    <h3 className="text-sm font-mono text-primary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, index) => (
        <span 
          key={skill} 
          className="skill-badge"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">// Yetenekler</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SkillCategory title="Programlama Dilleri" items={skills.languages} />
            <SkillCategory title="Veritabanları" items={skills.databases} />
          </div>
          <div>
            <SkillCategory title="Framework & Kütüphaneler" items={skills.frameworks} />
            <SkillCategory title="Araçlar & Platformlar" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
