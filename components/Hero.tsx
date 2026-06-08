export default function Hero() {
  return (
    <header>
      <div>
        <div className="status reveal">
          <span className="dot"></span> Open to full stack roles
        </div>
        <h1 className="reveal">
          Dustin<br />Brinkman<span className="amber">.</span>
        </h1>
        <div className="role reveal">
          Full Stack Engineer · React · TypeScript · Node · Python
        </div>
        <p className="lede reveal">
          I build complete products end to end — from the front-end UI down to the{' '}
          <b>API, auth, database, and cloud deploy</b>. 8+ years shipping scalable web apps,
          plus games, automation bots, and AI-driven tools I designed and launched myself.
        </p>
        <div className="cta reveal">
          <a className="btn primary" href="#work">
            View selected work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn" href="/Dustin_Brinkman_Resume.pdf" download>
            Résumé
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
          </a>
          <a className="btn" href="https://github.com/SonicBlissed" target="_blank" rel="noopener">
            GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/dustin-brinkman" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
