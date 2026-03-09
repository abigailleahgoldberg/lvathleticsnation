import Link from 'next/link'

export const metadata = {
  title: 'LV Athletics Nation -- Oakland to Las Vegas A\'s Coverage',
  description: 'Long-form coverage of the Athletics relocation. From Oakland\'s grief to Sacramento\'s pit stop to Las Vegas\'s future.',
}

const stories = [
  { slug: 'complete-story-as-relocation-oakland-to-vegas', tag: 'The Full Story', title: 'Oakland to Vegas: The Complete Story', desc: 'Failed ballpark deals, Fisher\'s decision, the MLB vote, and what comes next. Everything in one place.' },
  { slug: 'oakland-grief-losing-your-baseball-team', tag: 'Oakland', title: 'What It Actually Feels Like', desc: 'Talking to Oakland fans about loss, identity, and whether they will ever follow the A\'s to Las Vegas.' },
  { slug: 'john-fisher-most-hated-owner-baseball', tag: 'Ownership', title: 'The Most Hated Owner In Baseball', desc: 'How John Fisher went from anonymous billionaire to the face of everything wrong with MLB ownership.' },
  { slug: 'sacramento-pit-stop-inside-athletics-temp-home', tag: 'Sacramento', title: 'Inside The Pit Stop', desc: 'A big league team in a Triple-A ballpark. What players and fans actually think about Sacramento.' },
  { slug: 'las-vegas-athletics-trademark-battle', tag: 'Legal', title: 'The Trademark Battle', desc: 'USPTO denied "Las Vegas Athletics." What happened and what it means for the franchise\'s Vegas identity.' },
  { slug: 'rise-and-fall-oakland-coliseum', tag: 'History', title: 'The Rise and Fall of The Coliseum', desc: 'From one of baseball\'s finest venues to its worst. A stadium\'s decline mirrored a franchise\'s.' },
]

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&family=DM+Mono&display=swap');

        :root {
          --dark: #0C0C0A;
          --paper: #F2ECE0;
          --ink: #1A1A14;
          --green: #1A3A2A;
          --green-light: #2A5040;
          --gold: #C8940A;
          --gold-light: #EFB21E;
          --rust: #8B2500;
          --muted: rgba(242,236,224,0.55);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--dark);
          color: var(--paper);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }

        /* ---- NAV ---- */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 3rem;
          background: rgba(12,12,10,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(200,148,10,0.15);
        }
        .nav-logo { display: flex; flex-direction: column; gap: 0; }
        .nav-logo-top {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.3em;
          text-transform: uppercase; color: var(--gold);
        }
        .nav-logo-main {
          font-family: 'DM Serif Display', serif;
          font-size: 1.4rem; line-height: 1;
        }
        .nav-right { display: flex; align-items: center; gap: 3rem; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.1em;
          opacity: 0.55; transition: opacity 0.2s;
        }
        .nav-links a:hover { opacity: 1; }
        .nav-issue {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.15em;
          color: var(--gold); opacity: 0.7;
        }

        /* ---- MASTHEAD HERO ---- */
        .masthead {
          padding-top: 5rem;
          border-bottom: 1px solid rgba(200,148,10,0.2);
        }

        .masthead-top {
          padding: 4rem 3rem 0;
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          gap: 3rem;
          align-items: end;
        }

        .masthead-sidebar {
          padding-bottom: 2rem;
        }
        .sidebar-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem; letter-spacing: 0.3em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1rem;
        }
        .sidebar-stat {
          font-family: 'DM Serif Display', serif;
          font-size: 3.5rem; line-height: 1; color: var(--gold);
          margin-bottom: 0.25rem;
        }
        .sidebar-desc { font-size: 0.8rem; opacity: 0.5; line-height: 1.5; }

        .masthead-center { text-align: center; padding-bottom: 3rem; }
        .masthead-kicker {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.35em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1.5rem;
          display: flex; align-items: center; justify-content: center; gap: 1rem;
        }
        .masthead-kicker::before, .masthead-kicker::after {
          content: ''; width: 3rem; height: 1px; background: var(--gold);
        }

        .masthead-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 8vw, 8rem);
          line-height: 0.92;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .masthead-headline em {
          font-style: italic;
          color: var(--gold);
        }

        .masthead-rule {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(200,148,10,0.6), transparent);
          margin: 2rem auto;
          max-width: 400px;
        }

        .masthead-deck {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--muted); max-width: 560px;
          margin: 0 auto 2.5rem;
        }

        .masthead-sidebar-right { text-align: right; padding-bottom: 2rem; }

        /* the three-city line */
        .city-strip {
          background: var(--green);
          padding: 1rem 3rem;
          display: flex;
          gap: 0;
          overflow: hidden;
        }
        .city-pill {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.35rem 2rem;
          border-right: 1px solid rgba(200,148,10,0.2);
          white-space: nowrap;
        }
        .city-pill:first-child { padding-left: 0; }
        .city-pill.active { color: var(--gold-light); }
        .city-pill.past { opacity: 0.35; text-decoration: line-through; }
        .city-pill.current { opacity: 0.55; }

        /* ---- STORIES ---- */
        .stories-section {
          padding: 5rem 3rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 1px;
          background: rgba(200,148,10,0.1);
          border: 1px solid rgba(200,148,10,0.1);
        }

        .story-hero {
          padding: 3rem;
          background: var(--dark);
          border-right: 1px solid rgba(200,148,10,0.1);
          display: block;
          color: var(--paper);
          transition: background 0.2s;
        }
        .story-hero:hover { background: rgba(26,58,42,0.3); }

        .story-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: block;
        }

        .story-hero h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.8rem);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .story-hero p {
          font-size: 0.95rem; line-height: 1.75;
          color: var(--muted); margin-bottom: 2rem;
        }

        .story-cta {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .stories-list {
          background: var(--dark);
          display: flex; flex-direction: column;
        }

        .story-item {
          padding: 2rem 2.5rem;
          border-bottom: 1px solid rgba(200,148,10,0.1);
          display: block;
          color: var(--paper);
          transition: background 0.2s;
          position: relative;
        }
        .story-item:last-child { border-bottom: none; }
        .story-item:hover { background: rgba(26,58,42,0.2); }
        .story-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--gold);
          transform: scaleY(0);
          transition: transform 0.2s;
          transform-origin: bottom;
        }
        .story-item:hover::before { transform: scaleY(1); }

        .story-item h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          line-height: 1.2;
          margin-bottom: 0.6rem;
        }
        .story-item p {
          font-size: 0.82rem; line-height: 1.6; color: var(--muted);
        }

        /* ---- EDITORIAL ---- */
        .editorial {
          background: var(--paper);
          color: var(--ink);
          padding: 6rem 3rem;
          position: relative;
          overflow: hidden;
        }
        .editorial::before {
          content: 'OAKLAND';
          position: absolute;
          font-family: 'DM Serif Display', serif;
          font-size: 30vw;
          font-weight: 700;
          color: rgba(0,0,0,0.04);
          top: 50%; left: 0;
          transform: translateY(-50%);
          pointer-events: none;
          line-height: 1;
          white-space: nowrap;
        }
        .editorial-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .editorial-flag {
          display: inline-block;
          background: var(--rust);
          color: #fff;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 0.3rem 1rem;
          margin-bottom: 2rem;
        }
        .editorial-inner h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 1.05;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }
        .editorial-inner h2 em { font-style: italic; color: var(--rust); }
        .editorial-inner p {
          font-size: 1rem; line-height: 1.85;
          color: rgba(26,26,20,0.72);
          margin-bottom: 2rem;
        }
        .editorial-rule {
          height: 3px;
          background: var(--gold);
          width: 4rem;
          margin-bottom: 2.5rem;
        }
        .btn-ink {
          display: inline-block;
          background: var(--ink);
          color: var(--paper);
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.9rem 2.5rem;
          transition: background 0.2s;
        }
        .btn-ink:hover { background: var(--green); }

        /* ---- EMAIL ---- */
        .email-section {
          padding: 6rem 3rem;
          text-align: center;
          border-top: 1px solid rgba(200,148,10,0.15);
        }
        .email-mono {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.35em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1.5rem;
        }
        .email-section h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          margin-bottom: 1rem; line-height: 1.05;
        }
        .email-section p { font-size: 0.9rem; color: var(--muted); line-height: 1.7; margin-bottom: 2.5rem; }
        .email-bar {
          display: flex; max-width: 500px; margin: 0 auto;
          border: 1px solid rgba(200,148,10,0.3);
        }
        .email-bar input {
          flex: 1; background: rgba(200,148,10,0.05);
          border: none; color: var(--paper);
          font-size: 0.9rem; padding: 1rem 1.5rem;
          outline: none; font-family: 'DM Sans', sans-serif;
        }
        .email-bar input::placeholder { opacity: 0.35; }
        .email-bar button {
          background: var(--gold); color: var(--dark);
          border: none; padding: 1rem 1.75rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.15em;
          text-transform: uppercase; cursor: pointer;
          transition: background 0.2s;
        }
        .email-bar button:hover { background: var(--gold-light); }

        /* ---- FOOTER ---- */
        footer {
          border-top: 1px solid rgba(200,148,10,0.12);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
        }
        footer p { font-size: 0.75rem; opacity: 0.3; }

        @media (max-width: 900px) {
          nav { padding: 1rem 1.5rem; }
          .nav-links, .nav-right .nav-issue { display: none; }
          .masthead-top { grid-template-columns: 1fr; gap: 0; }
          .masthead-sidebar { display: none; }
          .masthead-sidebar-right { display: none; }
          .masthead-center { padding: 4rem 1.5rem 2rem; }
          .city-strip { padding: 1rem 1.5rem; }
          .stories-grid { grid-template-columns: 1fr; }
          .story-hero { border-right: none; border-bottom: 1px solid rgba(200,148,10,0.1); }
          .stories-section, .editorial, .email-section { padding: 4rem 1.5rem; }
          footer { padding: 2rem 1.5rem; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <span className="nav-logo-top">Est. 2026</span>
          <span className="nav-logo-main">LV Athletics Nation</span>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#stories">Stories</a></li>
            <li><a href="#oakland">Oakland</a></li>
            <li><a href="/blog">Archives</a></li>
          </ul>
          <span className="nav-issue">Issue No. 001</span>
        </div>
      </nav>

      {/* MASTHEAD */}
      <section className="masthead">
        <div className="masthead-top">
          <div className="masthead-sidebar">
            <div className="sidebar-label">Years In Oakland</div>
            <div className="sidebar-stat">56</div>
            <div className="sidebar-desc">1968 through 2024. Four World Series. One coliseum.</div>
          </div>
          <div className="masthead-center">
            <div className="masthead-kicker">Long-form Athletics Coverage</div>
            <h1 className="masthead-headline">
              From <em>Oakland</em><br />
              To Vegas
            </h1>
            <div className="masthead-rule" />
            <p className="masthead-deck">The relocation story is not over. It is just beginning. This is where we cover it -- the Oakland grief, the Sacramento detour, and what Las Vegas inherits.</p>
            <Link href="/blog" style={{display:'inline-block',background:'var(--gold)',color:'var(--dark)',fontFamily:'DM Mono',fontSize:'0.78rem',letterSpacing:'0.2em',textTransform:'uppercase',padding:'0.9rem 2.5rem'}}>Read The Archive</Link>
          </div>
          <div className="masthead-sidebar-right">
            <div className="sidebar-label">Vegas Stadium Opens</div>
            <div className="sidebar-stat" style={{textAlign:'right'}}>2028</div>
            <div className="sidebar-desc" style={{textAlign:'right'}}>$1.75B on the Strip. Construction is moving.</div>
          </div>
        </div>
        <div className="city-strip">
          <div className="city-pill past">Philadelphia 1901</div>
          <div className="city-pill past">Kansas City 1955</div>
          <div className="city-pill past">Oakland 1968</div>
          <div className="city-pill current">Sacramento 2025</div>
          <div className="city-pill active">Las Vegas 2028 &rarr;</div>
        </div>
      </section>

      {/* STORIES */}
      <section className="stories-section" id="stories">
        <div className="stories-grid">
          <Link href={`/blog/${stories[0].slug}`} className="story-hero">
            <span className="story-tag">{stories[0].tag}</span>
            <h2>{stories[0].title}</h2>
            <p>{stories[0].desc}</p>
            <span className="story-cta">Read The Full Story &rarr;</span>
          </Link>
          <div className="stories-list">
            {stories.slice(1).map(s => (
              <Link key={s.slug} href={`/blog/${s.slug}`} className="story-item">
                <span className="story-tag" style={{fontSize:'0.62rem',letterSpacing:'0.2em',color:'var(--gold)',fontFamily:"'DM Mono',monospace",textTransform:'uppercase',marginBottom:'0.75rem',display:'block'}}>{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="editorial" id="oakland">
        <div className="editorial-inner">
          <span className="editorial-flag">Oakland, CA</span>
          <div className="editorial-rule" />
          <h2>They Did Not Just Leave A City. They Left <em>A Soul.</em></h2>
          <p>Oakland gave the A&apos;s four World Series championships, Hall of Fame players, and decades of loyalty. What Oakland got back was broken promises, a crumbling stadium, and a sold franchise. We are telling that story honestly -- without minimizing the pain or pretending Las Vegas should feel guilty for wanting baseball.</p>
          <p>Both things can be true. Oakland deserved better. Las Vegas deserves this.</p>
          <Link href="/blog/oakland-grief-losing-your-baseball-team" className="btn-ink">Read: What Oakland Lost</Link>
        </div>
      </section>

      {/* EMAIL */}
      <section className="email-section">
        <div className="email-mono">The Newsletter</div>
        <h2>Follow The Journey</h2>
        <p>Every major development -- Oakland, Sacramento, Las Vegas -- in your inbox before the mainstream catches up.</p>
        <form className="email-bar" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-name">LV Athletics Nation</div>
        <p>Fan site. Not affiliated with the Athletics organization. &copy; 2026</p>
      </footer>
    </>
  )
}
