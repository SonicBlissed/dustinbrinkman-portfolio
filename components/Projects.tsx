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

      {/* Project 5 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/ne-usapl-app.png" alt="NE USAPL mobile app feature graphic" imgStyle={{ objectFit: 'contain' }} />
        </div>
        <div className="proj-body">
          <div className="proj-num">05</div>
          <h3>NE USAPL Mobile App</h3>
          <div className="proj-tag">// mobile app · App Store &amp; Google Play</div>
          <p>
            The player-facing app for the Northeast USA Pool League, live on both stores.
            Players find their team once and the app takes it from there — tonight&apos;s table
            assignment, the season schedule, match history, FargoRate stats, and league
            announcements. It reads from the same Supabase backend the admin site writes to, so
            anything an admin publishes shows up for players instantly.
          </p>
          <div className="proj-stack">
            {['Flutter','Dart','Supabase','iOS','Android','FargoRate'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <span className="plink muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" />
              </svg>
              Live on the App Store &amp; Google Play
            </span>
          </div>
        </div>
      </article>

      {/* Project 6 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/usapl-table-assignments.png" alt="USAPL Table Assignments admin portal dashboard" />
        </div>
        <div className="proj-body">
          <div className="proj-num">06</div>
          <h3>USAPL Table Assignments</h3>
          <div className="proj-tag">// web platform · admin portal + public lookup · live</div>
          <p>
            The web side of the NE USAPL app, in two parts. A public page where players look up
            tonight&apos;s table assignment, and an admin portal that lets league operators
            publish content to the mobile app with{' '}
            <b style={{ color: 'var(--amber-soft)', fontWeight: 400 }}>zero technical knowledge</b>.
            The portal imports sessions and schedules straight from FargoRate to fill in the
            blanks, and a rotation engine generates each week&apos;s table assignments from
            match history so no team lands on the same tables back to back. Locations,
            announcements, and a full publish history live in the same place.
          </p>
          <div className="proj-stack">
            {['Next.js','TypeScript','Supabase','PostgreSQL','Tailwind','shadcn/ui','Data Import'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <span className="plink muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Powers the NE USAPL mobile app
            </span>
          </div>
        </div>
      </article>

      {/* Project 7 */}
      <article className="proj reveal">
        <div className="proj-media">
          <LightboxImage src="/webatrice.jpg" alt="Webatrice login screen screenshot" />
        </div>
        <div className="proj-body">
          <div className="proj-num">07</div>
          <h3>Webatrice</h3>
          <div className="proj-tag">// open source · browser card-game client · live beta</div>
          <p>
            A browser client for Cockatrice, the open-source virtual tabletop for Magic: The
            Gathering and other card games. I&apos;ve been building out the in-browser game
            board — hand, battlefield, stack, counters, drag-and-drop, and the context menus
            that drive play — plus a deck editor with Scryfall search, printing selection, and
            import/export. Real-time multiplayer runs over the Cockatrice server protocol.
          </p>
          <div className="proj-stack">
            {['React','TypeScript','Vite','WebSockets','Protobuf','Scryfall API','Open Source'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
          <div className="proj-links">
            <a className="plink" href="https://webatrice.beta.cockatrice.us/" target="_blank" rel="noopener">
              <ArrowIcon />
              webatrice.beta.cockatrice.us
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
