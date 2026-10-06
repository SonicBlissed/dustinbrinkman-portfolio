const jobs = [
  {
    company: 'Puttshack',
    role: 'Senior Full Stack Developer — led a micro-frontend redesign empowering marketing to ship independently; Java Spring Boot microservices on Kubernetes & AWS; React, React Native, Vue 3.',
    years: '2022 — 2026',
  },
  {
    company: 'Relevnt',
    role: 'Front End Developer — built React & React Native screens, Vite tooling, Node auth, Jest + RTL tests.',
    years: '2021 — 2022',
  },
  {
    company: 'Epsilon',
    role: 'Front End Developer — React/Redux UIs, real-time updates over WebSockets, reusable component systems.',
    years: '2019 — 2021',
  },
  {
    company: 'BNY Mellon',
    role: 'Front End Developer — React SPA consuming REST services, Redux + redux-thunk, MongoDB-backed data.',
    years: '2018 — 2019',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <div className="eyebrow reveal">04 — Experience</div>
      <h2 className="stitle reveal">Where I&apos;ve worked.</h2>
      <div className="exp reveal">
        {jobs.map((job) => (
          <div key={job.company} className="exp-row">
            <div className="co">{job.company}</div>
            <div className="ro">{job.role}</div>
            <div className="yr">{job.years}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
