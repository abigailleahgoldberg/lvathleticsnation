"use client"

import { useState } from 'react'
import Link from 'next/link'
import { posts } from './blog/data'

const C = {
  green: '#003831',
  forest: '#1B5E20',
  gold: '#FFD700',
  amber: '#F5A623',
  dark: '#0A0C08',
  bone: '#F5F0E8',
  concrete: '#424242',
  red: '#CC0000',
  lime: '#7CB342',
}

const featured = posts.slice(0, 3)
const more = posts.slice(3, 9)
const categories = [...new Set(posts.map(p => p.category))]

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? more : more.filter(p => p.category === activeFilter)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { background: ${C.dark}; color: ${C.bone}; overflow-x: hidden; font-family: 'Inter', system-ui, sans-serif; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: ${C.gold}; color: ${C.dark}; }

        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulse-live { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scoreboard-flash { 0%, 100% { background: ${C.green}; } 50% { background: #004D40; } }
        @keyframes wave { 0% { transform: rotate(0deg); } 25% { transform: rotate(15deg); } 50% { transform: rotate(0deg); } 75% { transform: rotate(-15deg); } 100% { transform: rotate(0deg); } }

        .hover-lift { transition: transform 0.2s, box-shadow 0.2s; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.5); }

        .pulse-badge { animation: pulse-live 1.5s ease-in-out infinite; }

        .fan-card { position: relative; overflow: hidden; }
        .fan-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, ${C.green}, ${C.gold}, ${C.green}); }

        .filter-btn { font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.5rem 1.2rem; border: 1px solid rgba(255,215,0,0.2); background: transparent; color: rgba(245,240,232,0.5); cursor: pointer; transition: all 0.2s; }
        .filter-btn:hover { border-color: ${C.gold}; color: ${C.gold}; }
        .filter-btn.active { background: ${C.green}; border-color: ${C.gold}; color: ${C.gold}; }

        .mega-link { display: block; padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,215,0,0.08); transition: all 0.2s; }
        .mega-link:hover { background: rgba(0,56,49,0.3); padding-left: 2.5rem; }
        .mega-link:hover .arrow-icon { transform: translateX(6px); }
        .arrow-icon { transition: transform 0.2s; display: inline-block; }

        @media (max-width: 900px) {
          .hero-text { font-size: 3.5rem !important; }
          .hero-sub { font-size: 1.2rem !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .pad { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .scoreboard-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-cols { grid-template-columns: 1fr !important; text-align: center; }
        }
        @media (max-width: 600px) {
          .hero-text { font-size: 2.5rem !important; }
          .scoreboard-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ============ TOP BAR — GAME DAY ENERGY ============ */}
      <div style={{
        background: C.green,
        overflow: 'hidden',
        padding: '0.5rem 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
      }}>
        <div style={{
          display: 'inline-flex',
          animation: 'marquee 35s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[0, 1].map(i => (
            <span key={i} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.gold,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              paddingRight: '2rem',
            }}>
              <span>LV ATHLETICS NATION</span>
              <span style={{ color: C.bone, opacity: 0.5 }}>|</span>
              <span>THE FAN COMMUNITY</span>
              <span style={{ color: C.bone, opacity: 0.5 }}>|</span>
              <span>OAKLAND ROOTS • VEGAS PRIDE</span>
              <span style={{ color: C.bone, opacity: 0.5 }}>|</span>
              <span>OPENING DAY 2028</span>
              <span style={{ color: C.bone, opacity: 0.5 }}>|</span>
              <span>GREEN &amp; GOLD FOREVER</span>
              <span style={{ color: C.bone, opacity: 0.5 }}>|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ NAV ============ */}
      <nav style={{
        position: 'fixed',
        top: '28px',
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(10,12,8,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid ' + C.gold,
        padding: '0 3rem',
        height: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: C.green,
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Oswald', sans-serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: C.gold,
            border: '2px solid ' + C.gold,
          }}>N</div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1rem', fontWeight: 700, color: C.gold, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>LV Athletics Nation</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.45rem', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.4)', textTransform: 'uppercase' }}>The Fan Community</div>
          </div>
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {['Stories', 'Community', 'Game Day', 'Tickets'].map(item => (
            <Link key={item} href="/blog" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.55)',
              transition: 'color 0.2s',
            }}>{item}</Link>
          ))}
          <a href="https://www.ticketsonsale.com/sports/athletics" target="_blank" rel="noopener" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: C.dark,
            background: C.gold,
            padding: '0.45rem 1.2rem',
          }}>Tickets</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileNav(!mobileNav)} style={{
          display: 'none',
          width: '36px',
          height: '36px',
          background: 'none',
          border: '1px solid ' + C.gold,
          color: C.gold,
          fontSize: '1.1rem',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
        }}>{mobileNav ? '✕' : '☰'}</button>
      </nav>

      {mobileNav && (
        <div style={{
          position: 'fixed',
          top: '86px',
          left: 0,
          right: 0,
          background: 'rgba(10,12,8,0.98)',
          zIndex: 999,
          padding: '1.5rem 2rem',
          borderBottom: '2px solid ' + C.gold,
        }}>
          {['Stories', 'Community', 'Game Day'].map(item => (
            <Link key={item} href="/blog" onClick={() => setMobileNav(false)} style={{
              display: 'block',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: C.gold,
              padding: '0.75rem 0',
              borderBottom: '1px solid rgba(255,215,0,0.1)',
            }}>{item}</Link>
          ))}
        </div>
      )}

      {/* ============ HERO ============ */}
      <section className="pad" style={{
        minHeight: '100vh',
        paddingTop: '120px',
        padding: '120px 3rem 4rem',
        background: `linear-gradient(170deg, ${C.green} 0%, ${C.dark} 65%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Stars — Vegas night sky */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(50)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: i % 8 === 0 ? '2px' : '1px',
              height: i % 8 === 0 ? '2px' : '1px',
              background: `rgba(255,215,0,${0.3 + (i % 4) * 0.15})`,
              borderRadius: '50%',
              left: `${(i * 19.3) % 100}%`,
              top: `${(i * 11.7) % 60}%`,
              animation: `pulse-live ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.25) % 2.5}s`,
            }} />
          ))}
        </div>

        {/* Baseball diamond SVG — right side hero decoration */}
        <svg aria-hidden="true" style={{ position: 'absolute', top: '15%', right: '3%', width: '280px', height: '280px', opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 200 200">
          <rect x="100" y="20" width="60" height="60" transform="rotate(45 100 100)" fill="none" stroke={C.gold} strokeWidth="3"/>
          <circle cx="100" cy="100" r="4" fill={C.gold}/>
          <circle cx="100" cy="30" r="6" fill={C.gold}/>
          <circle cx="170" cy="100" r="6" fill={C.gold}/>
          <circle cx="100" cy="170" r="6" fill={C.gold}/>
          <circle cx="30" cy="100" r="6" fill={C.gold}/>
          <path d="M100,100 L100,30 M100,100 L170,100 M100,100 L100,170 M100,100 L30,100" stroke={C.gold} strokeWidth="1" strokeDasharray="4,4"/>
          <path d="M100,175 Q140,190 160,175 Q170,160 160,140" stroke={C.gold} strokeWidth="2" fill="none"/>
        </svg>

        {/* Stadium silhouette */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '200px', opacity: 0.06 }} viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,200 L0,140 Q180,80 360,120 Q540,160 720,100 Q900,40 1080,90 Q1260,140 1440,80 L1440,200Z" fill={C.gold}/>
        </svg>

        {/* Diamond pattern overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          border: '2px solid rgba(255,215,0,0.04)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Community badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(0,56,49,0.5)',
            border: '1px solid rgba(255,215,0,0.3)',
            padding: '0.5rem 1.2rem',
            marginBottom: '2.5rem',
            animation: 'slide-up 0.5s ease-out',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.gold,
            }}>Fan-Built • Fan-Run • Fan-First</span>
          </div>

          {/* HERO TEXT */}
          <h1 className="hero-text" style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 700,
            lineHeight: 0.92,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom: '2rem',
            animation: 'slide-up 0.5s ease-out 0.1s both',
          }}>
            <span style={{ color: C.bone }}>THIS IS</span><br />
            <span style={{ color: C.gold, textShadow: '0 0 60px rgba(255,215,0,0.2)' }}>OUR TEAM</span>
          </h1>

          <p className="hero-sub" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '550px',
            marginBottom: '3rem',
            animation: 'slide-up 0.5s ease-out 0.2s both',
          }}>
            The loudest corner of Las Vegas Athletics fandom. Community stories, game day guides, tailgate intel, and the fan perspective corporate media won&apos;t give you.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'slide-up 0.5s ease-out 0.3s both' }}>
            <Link href="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.dark,
              background: C.gold,
              padding: '0.85rem 2rem',
              transition: 'transform 0.2s',
            }}>Read Fan Stories →</Link>
            <a href="https://www.ticketsonsale.com/sports/athletics" target="_blank" rel="noopener" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.gold,
              border: '2px solid ' + C.gold,
              padding: '0.85rem 2rem',
              background: 'transparent',
            }}>🎟️ Get Tickets</a>
          </div>
        </div>
      </section>

      {/* ============ SCOREBOARD STATS ============ */}
      <section className="pad" style={{
        background: C.dark,
        padding: '0 3rem',
      }}>
        <div className="scoreboard-grid" style={{
          maxWidth: '1200px',
          margin: '-3rem auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          position: 'relative',
          zIndex: 10,
        }}>
          {[
            { num: '21', label: 'Fan Stories', icon: '📝' },
            { num: '2028', label: 'Opening Day', icon: '🏟️' },
            { num: '9', label: 'Championships', icon: '🏆' },
            { num: '∞', label: 'Fan Loyalty', icon: '💚' },
          ].map(({ num, label, icon }, i) => (
            <div key={label} style={{
              background: C.green,
              border: '1px solid rgba(255,215,0,0.15)',
              borderRight: i < 3 ? 'none' : '1px solid rgba(255,215,0,0.15)',
              padding: '2rem 1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: C.gold,
                lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.5)',
                marginTop: '0.4rem',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED STORIES ============ */}
      <section className="pad" style={{
        background: C.dark,
        padding: '6rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '4px',
                height: '32px',
                background: C.gold,
              }} />
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>Featured Stories</h2>
            </div>
            <Link href="/blog" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: C.gold,
              borderBottom: '1px solid ' + C.gold,
              paddingBottom: '2px',
            }}>View All →</Link>
          </div>

          <div className="featured-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '1.5rem',
          }}>
            {/* LEAD STORY */}
            <Link href={`/blog/${featured[0].slug}`} className="hover-lift fan-card" style={{
              background: C.green,
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '380px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: C.gold,
                background: 'rgba(0,0,0,0.3)',
                padding: '0.3rem 0.7rem',
              }}>{featured[0].category}</div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                textTransform: 'uppercase',
                color: C.bone,
                marginBottom: '1rem',
              }}>{featured[0].title}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'rgba(245,240,232,0.55)',
                marginBottom: '1.5rem',
              }}>{featured[0].excerpt}</p>
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.gold,
              }}>Read Story →</span>
            </Link>

            {/* SIDE STORIES */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {featured.slice(1).map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="hover-lift fan-card" style={{
                  background: '#111310',
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: C.gold,
                    marginBottom: '0.6rem',
                    opacity: 0.7,
                  }}>{post.category} · {post.readingTime}</div>
                  <h4 style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    color: C.bone,
                    flex: 1,
                    marginBottom: '0.75rem',
                  }}>{post.title}</h4>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.52rem',
                    color: 'rgba(245,240,232,0.3)',
                  }}>{post.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE FAN VOICE — Editorial ============ */}
      <section className="pad" style={{
        background: C.gold,
        padding: '6rem 3rem',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: C.green,
            marginBottom: '1rem',
          }}>The Fan Voice</div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: C.dark,
            lineHeight: 1,
            marginBottom: '2rem',
          }}>WE DON&apos;T DO<br />CORPORATE SPIN</h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(10,12,8,0.7)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}>
            This isn&apos;t an official team site. We&apos;re the fans who drove to the Coliseum on a Tuesday night in September when the team was 20 games out. We&apos;re the ones who care about the community, not the shareholders. The real stories. The real takes. The real love for green and gold.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            {['Unfiltered Takes', 'Community First', 'Fan-Written'].map(tag => (
              <div key={tag} style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.green,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <span style={{ color: C.green }}>✓</span> {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MORE STORIES GRID ============ */}
      <section className="pad" style={{
        background: C.dark,
        padding: '6rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '4px', height: '32px', background: C.gold }} />
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}>More From The Nation</h2>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
              {categories.slice(0, 3).map(cat => (
                <button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)}>{cat}</button>
              ))}
            </div>
          </div>

          <div className="grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {(activeFilter === 'all' ? more : posts.filter(p => p.category === activeFilter).slice(0, 6)).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="hover-lift fan-card" style={{
                background: '#111310',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.5rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: C.gold,
                  marginBottom: '0.75rem',
                  opacity: 0.6,
                }}>{post.category}</div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textTransform: 'uppercase',
                  color: C.bone,
                  flex: 1,
                  marginBottom: '1rem',
                }}>{post.title}</h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.5rem',
                    color: 'rgba(245,240,232,0.3)',
                  }}>{post.date}</span>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: C.gold,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.dark,
              background: C.gold,
              padding: '0.85rem 2.5rem',
              display: 'inline-block',
              transition: 'transform 0.2s',
            }}>View All Stories</Link>
          </div>
        </div>
      </section>

      {/* ============ TICKETS & GEAR ============ */}
      <section className="pad" style={{
        background: C.green,
        padding: '5rem 3rem',
        borderTop: '3px solid ' + C.gold,
        borderBottom: '3px solid ' + C.gold,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: C.gold,
              marginBottom: '0.5rem',
            }}>GEAR UP FOR GAME DAY</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(245,240,232,0.5)',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              Support independent fan coverage. Purchases through our links keep the Nation running.
            </p>
          </div>

          <div className="grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {[
              { name: 'StubHub Tickets', url: 'https://www.ticketsonsale.com/sports/athletics/?PCID=lvathletics-20', emoji: '🎟️', desc: 'Find seats for every home game' },
              { name: 'SeatGeek', url: 'https://www.seatgeek.com/athletics-tickets?aid=lvathletics-20', emoji: '🎫', desc: 'Best deals on A\'s tickets' },
              { name: 'Fanatics Gear', url: 'https://www.fanatics.com/mlb/oakland-athletics/o-2793+t-53395338?aff=lvathletics-20', emoji: '👕', desc: 'Jerseys, hats, and fan gear' },
            ].map(({ name, url, emoji, desc }) => (
              <a key={name} href={url} target="_blank" rel="noopener" className="hover-lift" style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,215,0,0.2)',
                padding: '2rem',
                textAlign: 'center',
                display: 'block',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{emoji}</div>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: C.gold,
                  marginBottom: '0.5rem',
                }}>{name}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(245,240,232,0.45)',
                }}>{desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUBMIT YOUR TAKE ============ */}
      <section className="pad" style={{ background: C.green, borderTop: `2px solid ${C.gold}`, borderBottom: `2px solid ${C.gold}`, padding: '5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="grid-2">
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: C.gold, marginBottom: '1rem', textTransform: 'uppercase' }}>Fan Voices</div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: C.bone, lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                Your Take<br />
                <span style={{ color: C.gold }}>Belongs Here</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '420px' }}>
                This is the Nation. Not a media company, not a PR arm — a community of fans who bleed green and gold. Submit your take. Tell your story. Call out the front office. We&apos;re all ears.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '⚾', label: 'Game recaps & hot takes' },
                  { icon: '🏟️', label: 'Stadium build updates & opinions' },
                  { icon: '🎰', label: 'Vegas fan experiences' },
                  { icon: '💚', label: 'Oakland memories & legacy stories' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.9rem', letterSpacing: '0.06em', color: 'rgba(245,240,232,0.75)', textTransform: 'uppercase', fontWeight: 600 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid rgba(255,215,0,0.2)`, padding: '2.5rem' }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: C.gold, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Submit Your Take</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your name (or handle)"
                  style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,215,0,0.2)', padding: '0.75rem 1rem', color: C.bone, fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none', width: '100%' }}
                />
                <input
                  type="text"
                  placeholder="Subject / Headline"
                  style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,215,0,0.2)', padding: '0.75rem 1rem', color: C.bone, fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none', width: '100%' }}
                />
                <textarea
                  placeholder="Your take. Be real. Be a fan."
                  rows={5}
                  style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,215,0,0.2)', padding: '0.75rem 1rem', color: C.bone, fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none', width: '100%', resize: 'vertical' }}
                />
                <a
                  href="mailto:nation@lvathleticsnation.com?subject=Fan Take Submission"
                  style={{ background: C.gold, color: C.dark, fontFamily: "'Oswald', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem', textAlign: 'center', display: 'block', textDecoration: 'none', transition: 'opacity 0.2s' }}
                >
                  Submit Your Take →
                </a>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', textAlign: 'center' }}>
                  Best takes featured on the site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="pad" style={{
        background: C.dark,
        padding: '5rem 3rem',
      }}>
        <div style={{
          maxWidth: '650px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📬</div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '2rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: '0.75rem',
          }}>Join The Nation</h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.5)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            Game day alerts. Fan stories. Tailgate intel. No spam, no corporate nonsense.
          </p>
          <form onSubmit={async (e) => {
            e.preventDefault()
            if (!email || subscribing) return
            setSubscribing(true)
            try {
              await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'lvathleticsnation' }),
              })
              setSubscribed(true)
              setEmail('')
            } catch { setSubscribed(true) }
            setSubscribing(false)
          }} style={{
            display: 'flex',
            gap: 0,
            maxWidth: '450px',
            margin: '0 auto',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '0.85rem 1.2rem',
                background: '#111310',
                border: '2px solid rgba(255,215,0,0.2)',
                borderRight: 'none',
                color: C.bone,
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.78rem',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '0.85rem 1.5rem',
              background: C.gold,
              border: '2px solid ' + C.gold,
              color: C.dark,
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}>{subscribed ? '✅' : subscribing ? '...' : 'Join'}</button>
          </form>
        </div>
      </section>

      {/* ============ NETWORK LINKS ============ */}
      <section className="pad" style={{
        background: '#0C0E0A',
        padding: '4rem 3rem',
        borderTop: '1px solid rgba(255,215,0,0.08)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: '1.5rem',
            opacity: 0.6,
          }}>The LV Athletics Network</div>
          <div className="grid-2" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}>
            {[
              { name: 'TheLVAs.com', url: 'https://thelvas.com', desc: 'The flagship — news, schedules, and fan hub' },
              { name: 'TheLVAthletics.com', url: 'https://thelvathletics.com', desc: 'Premium editorial coverage and deep analysis' },
            ].map(({ name, url, desc }) => (
              <a key={name} href={url} target="_blank" rel="noopener" className="mega-link" style={{
                border: '1px solid rgba(255,215,0,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: C.gold,
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}>{name}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    color: 'rgba(245,240,232,0.4)',
                  }}>{desc}</div>
                </div>
                <span className="arrow-icon" style={{ color: C.gold, fontSize: '1.2rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="pad" style={{
        background: C.dark,
        borderTop: '2px solid ' + C.gold,
        padding: '4rem 3rem 2.5rem',
      }}>
        <div className="footer-cols" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                background: C.green,
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: C.gold,
                border: '2px solid ' + C.gold,
              }}>N</div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: C.gold, letterSpacing: '0.08em', textTransform: 'uppercase' }}>LV Athletics Nation</span>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(245,240,232,0.35)',
              lineHeight: 1.65,
              maxWidth: '340px',
            }}>The fan community for the Las Vegas Athletics. Independent. Unfiltered. Not affiliated with the Athletics organization or MLB.</p>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>Sections</div>
            {['All Stories', 'The Story', 'Community', 'Game Day', 'Fan Guide', 'Tailgate', 'Join'].map(link => (
              <Link key={link} href="/blog" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.4)',
                marginBottom: '0.5rem',
              }}>{link}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>Affiliate Links</div>
            {[
              ['StubHub', 'https://www.ticketsonsale.com/sports/athletics'],
              ['SeatGeek', 'https://www.seatgeek.com/athletics-tickets'],
              ['Fanatics', 'https://www.fanatics.com/mlb/oakland-athletics'],
            ].map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.4)',
                marginBottom: '0.5rem',
              }}>{name}</a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>A&apos;s Coverage Network</div>
            {[
              ['TheLVAthletics.com', 'https://thelvathletics.com'],
              ['TheLVAs.com', 'https://thelvas.com'],
              ['TheVoiceOfCash.com', 'https://thevoiceofcash.com'],
            ].map(([name, url]) => (
              <a key={name} href={url} style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.4)',
                marginBottom: '0.5rem',
                textDecoration: 'none',
              }}>{name}</a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,215,0,0.06)',
          paddingTop: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.52rem',
            letterSpacing: '0.1em',
            color: 'rgba(245,240,232,0.15)',
          }}>&copy; 2026 LV Athletics Nation — Fan site. Not affiliated with the Athletics organization or MLB. Oakland forever. Vegas forever.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '12px' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', fontWeight: 700, color: 'rgba(212,168,67,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>MLB Resources</span>
            <a href="https://www.mlb.com/athletics" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.52rem', textDecoration: 'none' }}>MLB.com Athletics →</a>
            <a href="https://www.espn.com/mlb/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.52rem', textDecoration: 'none' }}>ESPN MLB →</a>
            <a href="https://sabr.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.52rem', textDecoration: 'none' }}>SABR — Baseball Research →</a>
            <a href="https://www.baseball-reference.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.52rem', textDecoration: 'none' }}>Baseball Reference →</a>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(212,168,67,0.04)' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', fontWeight: 700, color: 'rgba(212,168,67,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Legal</span>
            <Link href="/disclaimer" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.2)', fontSize: '0.52rem', textDecoration: 'none' }}>Disclaimer</Link>
            <Link href="/privacy" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.2)', fontSize: '0.52rem', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.2)', fontSize: '0.52rem', textDecoration: 'none' }}>Terms</Link>
            <Link href="/dmca" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.2)', fontSize: '0.52rem', textDecoration: 'none' }}>DMCA</Link>
            <Link href="/contact" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(245,240,232,0.2)', fontSize: '0.52rem', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
