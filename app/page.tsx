"use client"

import Link from 'next/link'
import { posts } from './blog/data'

/* ---- palette ---- */
const C = {
  green:    '#1A3C2F',
  gold:     '#D4A843',
  bone:     '#E8E0D0',
  dark:     '#0D0F0C',
  concrete: '#6B7066',
  red:      '#A63228',
}

/* ---- font stacks ---- */
const F = {
  anton:  "var(--font-anton), 'Anton', Impact, sans-serif",
  libre:  "var(--font-libre), 'Libre Baskerville', Georgia, serif",
  inter:  "var(--font-inter), 'Inter', system-ui, sans-serif",
  mono:   "var(--font-space), 'Space Mono', 'Courier New', monospace",
}

/* ---- pick 3 featured posts ---- */
const featured = posts.slice(0, 3)

export default function Home() {
  return (
    <>
      {/* ----- CSS ANIMATIONS ----- */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,67,0.7); }
          50%       { box-shadow: 0 0 0 16px rgba(212,168,67,0); }
        }
        @keyframes pulse-label {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.55; }
        }
        .blog-card:hover {
          transform: translateY(-3px);
        }
        .blog-card {
          transition: transform 0.2s ease;
        }
        .read-link:hover {
          letter-spacing: 0.3em !important;
        }
        .read-link {
          transition: letter-spacing 0.2s ease;
        }
      `}</style>

      {/* ----- GRAIN OVERLAY ----- */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 998,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} aria-hidden="true" />

      {/* ======================================
          SECTION 1: HERO
      ====================================== */}
      <section style={{
        minHeight: '100vh',
        background: C.dark,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 5vw 5rem',
      }}>
        {/* Watermark "A" */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: F.anton,
          fontSize: 'clamp(300px, 55vw, 900px)',
          color: C.bone,
          opacity: 0.04,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'nowrap',
        }}>A</div>

        {/* Hero typography */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <h1 style={{ lineHeight: 0.9, marginBottom: '2.5rem' }}>
            <span style={{
              display: 'block',
              fontFamily: F.anton,
              fontSize: 'clamp(80px, 14vw, 160px)',
              color: C.gold,
              letterSpacing: '0.01em',
              lineHeight: 0.92,
            }}>GREEN</span>

            <span style={{
              display: 'block',
              fontFamily: F.anton,
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: C.bone,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
            }}>AND</span>

            <span style={{
              display: 'block',
              fontFamily: F.anton,
              fontSize: 'clamp(80px, 14vw, 160px)',
              color: C.gold,
              letterSpacing: '0.01em',
              lineHeight: 0.92,
            }}>GOLD</span>

            <span style={{
              display: 'block',
              fontFamily: F.anton,
              fontSize: 'clamp(48px, 8vw, 96px)',
              color: C.bone,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
            }}>FOREVER</span>
          </h1>

          <p style={{
            fontFamily: F.libre,
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            color: C.bone,
            opacity: 0.85,
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            Oakland. Sacramento. Las Vegas. We followed our team here.
          </p>

          <p style={{
            fontFamily: F.mono,
            fontSize: '0.62rem',
            color: C.gold,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>
            EST. 1901 -- LV ATHLETICS NATION -- THE FAN COMMUNITY
          </p>
        </div>

        {/* Gold rule at hero bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '2px',
          background: C.gold,
          zIndex: 2,
        }} />
      </section>

      {/* ======================================
          SECTION 2: MIGRATION TIMELINE
      ====================================== */}
      <section style={{
        background: C.bone,
        padding: '5rem 5vw 5rem',
        overflow: 'hidden',
      }}>
        <p style={{
          fontFamily: F.mono,
          fontSize: '0.65rem',
          color: C.concrete,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          marginBottom: '4rem',
        }}>The Migration</p>

        {/* Timeline row */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          overflowX: 'auto',
          paddingBottom: '1rem',
          gap: 0,
        }}>
          {/* -- PHILADELPHIA -- */}
          <div style={{ flex: 1, minWidth: '160px', position: 'relative', paddingTop: '1rem' }}>
            {/* connector line left half */}
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 9px)',
              left: 0, right: '50%',
              height: '2px',
              background: C.concrete,
              opacity: 0.3,
            }} />
            {/* connector line right half */}
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 9px)',
              left: '50%', right: 0,
              height: '2px',
              background: C.concrete,
              opacity: 0.3,
            }} />
            {/* dot */}
            <div style={{
              width: '18px', height: '18px',
              borderRadius: '50%',
              background: C.concrete,
              margin: '0 auto 1.25rem',
              position: 'relative', zIndex: 1,
              opacity: 0.55,
            }} />
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{
                fontFamily: F.anton,
                fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)',
                color: C.dark,
                opacity: 0.45,
                letterSpacing: '0.04em',
                marginBottom: '0.4rem',
              }}>PHILADELPHIA</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.7rem',
                color: C.concrete,
                letterSpacing: '0.15em',
                opacity: 0.7,
              }}>1901</div>
            </div>
          </div>

          {/* -- KANSAS CITY -- */}
          <div style={{ flex: 1, minWidth: '160px', position: 'relative', paddingTop: '1rem' }}>
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 9px)',
              left: 0, right: '50%',
              height: '2px',
              background: C.concrete,
              opacity: 0.3,
            }} />
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 9px)',
              left: '50%', right: 0,
              height: '2px',
              background: C.concrete,
              opacity: 0.3,
            }} />
            <div style={{
              width: '18px', height: '18px',
              borderRadius: '50%',
              background: C.concrete,
              margin: '0 auto 1.25rem',
              position: 'relative', zIndex: 1,
              opacity: 0.55,
            }} />
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{
                fontFamily: F.anton,
                fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)',
                color: C.dark,
                opacity: 0.45,
                letterSpacing: '0.04em',
                marginBottom: '0.4rem',
              }}>KANSAS CITY</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.7rem',
                color: C.concrete,
                letterSpacing: '0.15em',
                opacity: 0.7,
              }}>1955</div>
            </div>
          </div>

          {/* -- OAKLAND -- */}
          <div style={{ flex: 1, minWidth: '200px', position: 'relative', paddingTop: '1rem' }}>
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 11px)',
              left: 0, right: '50%',
              height: '2px',
              background: C.concrete,
              opacity: 0.3,
            }} />
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 11px)',
              left: '50%', right: 0,
              height: '3px',
              background: C.red,
              opacity: 0.5,
            }} />
            {/* Oakland dot - red */}
            <div style={{
              width: '24px', height: '24px',
              borderRadius: '50%',
              background: C.red,
              margin: '0 auto 1.25rem',
              position: 'relative', zIndex: 1,
            }} />
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{
                fontFamily: F.anton,
                fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                color: C.dark,
                letterSpacing: '0.04em',
                marginBottom: '0.4rem',
              }}>OAKLAND</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.75rem',
                color: C.dark,
                letterSpacing: '0.15em',
                marginBottom: '0.5rem',
              }}>1968</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.62rem',
                color: C.red,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>47 YEARS</div>
            </div>
          </div>

          {/* -- LAS VEGAS -- */}
          <div style={{ flex: 1, minWidth: '200px', position: 'relative', paddingTop: '1rem' }}>
            <div style={{
              position: 'absolute',
              top: 'calc(1rem + 11px)',
              left: 0, right: '50%',
              height: '3px',
              background: C.gold,
              opacity: 0.5,
            }} />
            {/* Las Vegas dot - gold, pulsing */}
            <div style={{
              width: '24px', height: '24px',
              borderRadius: '50%',
              background: C.gold,
              margin: '0 auto 1.25rem',
              position: 'relative', zIndex: 1,
              animation: 'pulse-dot 2.2s ease-in-out infinite',
            }} />
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{
                fontFamily: F.anton,
                fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                color: C.dark,
                letterSpacing: '0.04em',
                marginBottom: '0.4rem',
              }}>LAS VEGAS</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.75rem',
                color: C.dark,
                letterSpacing: '0.15em',
                marginBottom: '0.5rem',
              }}>2028</div>
              <div style={{
                fontFamily: F.mono,
                fontSize: '0.62rem',
                color: C.gold,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                animation: 'pulse-label 2.2s ease-in-out infinite',
              }}>WE MADE IT</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 3: THE NATION
      ====================================== */}
      <section style={{
        background: C.dark,
        padding: '6rem 5vw',
        borderTop: `1px solid rgba(212,168,67,0.12)`,
        borderBottom: `1px solid rgba(212,168,67,0.12)`,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left: big number + body */}
          <div>
            <div style={{
              fontFamily: F.anton,
              fontSize: 'clamp(4rem, 9vw, 8rem)',
              color: C.gold,
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              marginBottom: '0.75rem',
            }}>30,000+</div>
            <div style={{
              fontFamily: F.libre,
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: C.bone,
              marginBottom: '1.75rem',
              lineHeight: 1.4,
            }}>
              Fans Who Made the Trip
            </div>
            <p style={{
              fontFamily: F.inter,
              fontSize: '0.95rem',
              color: C.bone,
              opacity: 0.65,
              lineHeight: 1.75,
            }}>
              This is not a casual fan base. This is a community that watched, waited, and followed.
              From the Coliseum to the desert.
            </p>
          </div>

          {/* Right: 3 stat cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1px',
            background: `rgba(212,168,67,0.15)`,
            border: `1px solid rgba(212,168,67,0.15)`,
          }}>
            {[
              { stat: '0',    label: "Days We Stopped Being A's Fans" },
              { stat: '3',    label: 'Generations of Green and Gold'   },
              { stat: '2028', label: 'Year Everything Changes'         },
            ].map(({ stat, label }) => (
              <div key={stat} style={{
                background: C.dark,
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: F.anton,
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  color: C.gold,
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>{stat}</div>
                <div style={{
                  fontFamily: F.mono,
                  fontSize: '0.6rem',
                  color: C.bone,
                  opacity: 0.55,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 4: LATEST FROM THE BLOG
      ====================================== */}
      <section style={{
        background: C.dark,
        padding: '6rem 5vw',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <h2 style={{
              fontFamily: F.anton,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              color: C.bone,
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}>LATEST FROM THE NATION</h2>
            <Link href="/blog" style={{
              fontFamily: F.mono,
              fontSize: '0.65rem',
              color: C.gold,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              ALL POSTS &rarr;
            </Link>
          </div>

          {/* 3-column card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2px',
            background: `rgba(212,168,67,0.1)`,
          }}>
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                style={{
                  background: C.bone,
                  padding: '2.5rem 2rem',
                  display: 'block',
                  color: C.dark,
                  cursor: 'pointer',
                }}
              >
                {/* Category badge */}
                <span style={{
                  display: 'inline-block',
                  background: C.gold,
                  color: C.dark,
                  fontFamily: F.mono,
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.75rem',
                  marginBottom: '1.25rem',
                  fontWeight: 700,
                }}>
                  {post.category}
                </span>

                <h3 style={{
                  fontFamily: F.anton,
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                  color: C.dark,
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  marginBottom: '1rem',
                }}>
                  {post.title}
                </h3>

                <p style={{
                  fontFamily: F.inter,
                  fontSize: '0.88rem',
                  color: C.dark,
                  opacity: 0.65,
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {post.excerpt}
                </p>

                <span className="read-link" style={{
                  fontFamily: F.mono,
                  fontSize: '0.65rem',
                  color: C.green,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  display: 'inline-block',
                }}>
                  READ
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 5: TIFO / JOIN THE NATION
      ====================================== */}
      <section id="join" style={{
        background: C.green,
        padding: '8rem 5vw',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background texture - large faded text */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: F.anton,
          fontSize: 'clamp(200px, 35vw, 500px)',
          color: '#000',
          opacity: 0.06,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>NATION</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: F.anton,
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            color: C.bone,
            letterSpacing: '0.03em',
            lineHeight: 0.92,
            marginBottom: '1.5rem',
          }}>
            JOIN THE<br />NATION
          </h2>

          <p style={{
            fontFamily: F.libre,
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: C.bone,
            opacity: 0.8,
            marginBottom: '3rem',
            maxWidth: '400px',
            margin: '0 auto 3rem',
            lineHeight: 1.65,
          }}>
            Free. No nonsense. Just fans who give a damn.
          </p>

          <a href="#join" style={{
            display: 'inline-block',
            background: C.gold,
            color: C.dark,
            fontFamily: F.inter,
            fontSize: '0.9rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '1.1rem 3.5rem',
            borderRadius: 0,
            cursor: 'pointer',
          }}>
            I'M IN
          </a>
        </div>
      </section>
    </>
  )
}
