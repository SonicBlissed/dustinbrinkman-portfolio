export default function About() {
  return (
    <section id="about" className="wrap">
      <div className="eyebrow reveal">01 — About</div>
      <div className="about-grid">
        <div className="about">
          <h2 className="stitle reveal">An engineer who ships whole products, not just screens.</h2>
          <p className="reveal">
            Most of my career has centered on the front end — building scalable single-page
            applications with <b>React, TypeScript, Redux, Next.js</b>, and Vue — but what I
            care about is owning a product all the way through: the interface, the API and
            authentication, the database, and getting it live in the cloud.
          </p>
          <p className="reveal">
            That full-stack instinct shows up clearest in the things I build on my own: a
            security-first web app using <b>zero-knowledge encryption</b>, a Python bot running
            24/7 in the cloud with its own dashboard and database, a complete mobile game, and
            an AI-powered job search tool. I&apos;m also deeply hands-on building and maintaining
            products with <b>AI tooling</b> — using it to move faster without trading away code
            quality.
          </p>
        </div>
        <div className="facts reveal">
          <div className="fact"><span>Experience</span><b>8+ years</b></div>
          <div className="fact"><span>Focus</span><b>Full stack · web + mobile</b></div>
          <div className="fact"><span>Front end</span><b>React / TS / Vue / Svelte</b></div>
          <div className="fact"><span>Back end</span><b>Java · Node.js · Python</b></div>
          <div className="fact"><span>Data</span><b>PostgreSQL · MongoDB</b></div>
          <div className="fact"><span>Based in</span><b>Florida, US</b></div>
        </div>
      </div>
    </section>
  )
}
