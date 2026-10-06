const categories = [
  {
    label: '// front end',
    skills: ['React','Redux','TypeScript','Next.js','Vue 3','Svelte','Blazor','React Native','HTML5 / CSS3','SASS / LESS','Vite'],
  },
  {
    label: '// back end & data',
    skills: ['Node.js','Java / Spring Boot','Python','REST APIs','WebSockets','PostgreSQL','Supabase','MongoDB','SQL Server','Auth / zero-knowledge'],
  },
  {
    label: '// mobile & game',
    skills: ['Flutter','Dart','Flame Engine','React Native'],
  },
  {
    label: '// cloud & ai',
    skills: ['AWS','Kubernetes','Docker','Fly.io','Netlify','Git / GitHub','AI / LLM tooling','AI-assisted dev'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <div className="eyebrow reveal">02 — Toolkit</div>
      <h2 className="stitle reveal">Things I build with.</h2>
      <div className="skill-cats">
        {categories.map((cat) => (
          <div key={cat.label} className="scat reveal">
            <h3>{cat.label}</h3>
            <div className="chips">
              {cat.skills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
