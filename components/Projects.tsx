import LightboxImage from '@/components/LightboxImage'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="work" className="wrap">
      <div className="eyebrow reveal">03 — Selected work</div>
      <h2 className="stitle reveal" style={{ marginBottom: '18px' }}>
        Products I designed, built &amp; shipped.
      </h2>
      <p className="reveal" style={{ color: 'var(--dim)', maxWidth: '600px', marginBottom: '64px' }}>
        Each of these is full stack — front end, backend, database, and deployment. A few core
        repositories are kept private to protect live products.
      </p>

      {/* Project 1 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/Screenshot_20260518_175608.png" alt="Idle Slaughter gameplay screenshot" imgStyle={{ objectFit: 'contain' }} />
        </div>
        <div className="proj-body">
          <div className="proj-num">01</div>
          <h3>Idle Slaughter</h3>
          <div className="proj-tag">// mobile game · solo build</div>
          <p>
            A complete, original idle game with custom animations, hand-designed level
            progression, and cloud-synced player accounts. I built the game loop, progression
            systems, and save/sync logic from scratch — and handled authentication and
            persistence so players keep their progress across devices.
          </p>
          <div className="proj-stack">
            {['Flutter','Dart','Flame Engine','Supabase','Game Design'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <span className="plink muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              In closed testing · Google Play
            </span>
          </div>
        </div>
      </article>

      {/* Project 2 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/Screenshot%202026-06-08%20115803.png" alt="SmurfManager dashboard screenshot" />
        </div>
        <div className="proj-body">
          <div className="proj-num">02</div>
          <h3>SmurfManager</h3>
          <div className="proj-tag">// secure web app · live</div>
          <p>
            A web app that lets gamers manage multiple gaming accounts and see the stats for
            each one in a single place — credentials and stats at a glance. The standout is
            the security model: a{' '}
            <b style={{ color: 'var(--amber-soft)', fontWeight: 400 }}>zero-knowledge architecture</b>
            {' '}on Supabase that keeps stored credentials encrypted, so even a database breach
            can&apos;t expose a user&apos;s information.
          </p>
          <div className="proj-stack">
            {['React','TypeScript','Supabase','PostgreSQL','Zero-Knowledge Encryption','REST'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <a className="plink" href="https://smurfmanager.com/" target="_blank" rel="noopener">
              <ArrowIcon />
              smurfmanager.com
            </a>
          </div>
        </div>
      </article>

      {/* Project 3 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/Screenshot%202026-06-08%20115907.png" alt="SOL Bot dashboard screenshot" />
        </div>
        <div className="proj-body">
          <div className="proj-num">03</div>
          <h3>SOL Bot Dashboard</h3>
          <div className="proj-tag">// automation system · live</div>
          <p>
            An end-to-end automation system: a Python bot that autonomously plays a game,
            deployed to the cloud on Fly.io so it runs around the clock, paired with a web
            dashboard and a database that persist run logs and lifetime statistics. I built
            all three pieces — the bot, the data layer, and the dashboard that surfaces
            real-time and lifetime metrics.
          </p>
          <div className="proj-stack">
            {['Python','Fly.io','Netlify','PostgreSQL','Automation','Dashboard'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <a className="plink" href="https://sol-bot-v2.netlify.app/" target="_blank" rel="noopener">
              <ArrowIcon />
              sol-bot-v2.netlify.app
            </a>
          </div>
        </div>
      </article>

      {/* Project 4 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/Screenshot%202026-06-08%20115942.png" alt="AI Job Board screenshot" />
        </div>
        <div className="proj-body">
          <div className="proj-num">04</div>
          <h3>AI Job Board</h3>
          <div className="proj-tag">// ai-powered tool · live</div>
          <p>
            A custom job board that searches and surfaces listings using{' '}
            <b style={{ color: 'var(--amber-soft)', fontWeight: 400 }}>AI reasoning</b>
            {' '}against a user&apos;s profile — rather than blunt keyword matching, it weighs
            how well each role actually fits the candidate. Built as a practical tool for my
            own search, and a demonstration of wiring LLM reasoning into a real product
            workflow.
          </p>
          <div className="proj-stack">
            {['AI / LLM','React','Node.js','Netlify','Reasoning','REST'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <a className="plink" href="https://inquisitive-medovik-a8e4b0.netlify.app/" target="_blank" rel="noopener">
              <ArrowIcon />
              View live demo
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
