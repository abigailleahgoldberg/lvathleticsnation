import type { Metadata } from 'next';
import { posts } from './blog/data';

export const metadata: Metadata = {
  title: 'LV Athletics Nation -- Oakland to Las Vegas A\'s Fan Coverage',
  description: 'Coverage of the Athletics relocation saga -- honoring Oakland, surviving Sacramento, and building Las Vegas.',
  alternates: { canonical: '/' },
};

const featuredSlugs = [
  'complete-story-as-relocation-oakland-to-vegas',
  'oakland-grief-losing-your-baseball-team',
  'how-las-vegas-stadium-got-built',
];

export default function HomePage() {
  const featured = featuredSlugs
    .map(s => posts.find(p => p.slug === s))
    .filter(Boolean) as typeof posts;

  const pillars = [
    {
      num: '01',
      tag: 'The Oakland Legacy',
      title: 'Where It All Started',
      body: 'Four decades at the Coliseum. World Series dynasties. The Moneyball era. We document the full Oakland story -- the championships, the heartbreak, and what the city built around this team.',
      link: '/blog',
    },
    {
      num: '02',
      tag: 'The Sacramento Chapter',
      title: 'The In-Between Years',
      body: 'Sutter Health Park became an unlikely home. Minor-league atmosphere, major-league roster. We covered how the A\'s and their diaspora navigated the strangest chapter in franchise history.',
      link: '/blog',
    },
    {
      num: '03',
      tag: 'The Vegas Future',
      title: 'Building What Comes Next',
      body: 'A $1.5B ballpark. A market that\'s never had MLB. A fan base arriving from everywhere. We\'re embedded in the Las Vegas build-out -- stadium construction, fan culture, and what this city means for baseball.',
      link: '/blog',
    },
  ];

  return (
    <main>
      {/* HERO */}
      <div style={{
        background: 'linear-gradient(180deg, #0d1a0e 0%, var(--dark) 100%)',
        padding: '96px 32px 80px',
        borderBottom: '1px solid rgba(239,178,30,0.12)',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--gold)' }} />
            Fan Coverage Since Oakland
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
            color: 'var(--cream)',
            lineHeight: 1.15,
            marginBottom: '24px',
            fontWeight: 'normal',
          }}>
            From Oakland to Vegas: <br />
            The <span style={{ color: 'var(--gold)' }}>A&apos;s Story</span> Isn&apos;t Over
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
            color: 'var(--cream)',
            opacity: 0.72,
            maxWidth: '600px',
            marginBottom: '40px',
          }}>
            Coverage of the Athletics relocation saga -- honoring Oakland, surviving Sacramento, and building Las Vegas.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
            <a href="/blog" style={{
              display: 'inline-block',
              background: 'var(--gold)',
              color: 'var(--dark)',
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              letterSpacing: '0.07em',
              textTransform: 'uppercase' as const,
              padding: '12px 24px',
              borderRadius: '3px',
            }}>Read the Coverage</a>
          </div>
        </div>
      </div>

      {/* FEATURED POSTS */}
      {featured.length > 0 && (
        <div style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '16px' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 'normal' }}>
              Featured <span style={{ color: 'var(--gold)' }}>Stories</span>
            </div>
            <a href="/blog" style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.75rem',
              color: 'var(--gray)',
              letterSpacing: '0.05em',
            }}>View all 15 stories &rarr;</a>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1px',
            background: 'rgba(239,178,30,0.1)',
            border: '1px solid rgba(239,178,30,0.1)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {featured.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={{
                display: 'block',
                background: 'var(--dark)',
                padding: '36px 30px',
                textDecoration: 'none',
              }}>
                <div style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--gold)',
                  marginBottom: '14px',
                }}>{post.category}</div>
                <div style={{
                  fontSize: '1.25rem',
                  color: 'var(--cream)',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}>{post.title}</div>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--cream)',
                  opacity: 0.62,
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}>{post.excerpt}</p>
                <div style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--gold)',
                }}>Read More &rarr;</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* THREE PILLARS */}
      <div style={{ padding: '80px 32px', maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '16px' }}>
          <div style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 'normal' }}>
            Three Chapters. <span style={{ color: 'var(--gold)' }}>One Team.</span>
          </div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.75rem', color: 'var(--gray)', letterSpacing: '0.05em' }}>
            Long-form coverage across the full relocation arc
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1px',
          background: 'rgba(239,178,30,0.1)',
          border: '1px solid rgba(239,178,30,0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {pillars.map((p) => (
            <a key={p.num} href={p.link} style={{
              display: 'block',
              background: 'var(--dark)',
              padding: '36px 30px',
              position: 'relative',
              textDecoration: 'none',
            }}>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '3rem',
                fontWeight: 900,
                color: 'rgba(239,178,30,0.1)',
                position: 'absolute',
                top: '16px',
                right: '20px',
                lineHeight: 1,
              }}>{p.num}</div>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 'bold',
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: 'var(--gold)',
                marginBottom: '14px',
              }}>{p.tag}</div>
              <div style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '14px', lineHeight: 1.3 }}>{p.title}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--cream)', opacity: 0.62, lineHeight: 1.75, marginBottom: '20px' }}>{p.body}</p>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--gold)',
              }}>Explore &rarr;</div>
            </a>
          ))}
        </div>
      </div>

      {/* MANIFESTO */}
      <div style={{ background: 'var(--green)', padding: '56px 32px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.55rem)',
            color: 'var(--cream)',
            lineHeight: 1.6,
            marginBottom: '20px',
            fontStyle: 'italic',
          }}>
            &ldquo;This isn&apos;t just a relocation story. It&apos;s about what happens when a city loses something it loves, how a community carries that grief, and whether a team can <strong style={{ color: 'var(--gold)', fontStyle: 'normal' }}>build something real</strong> somewhere new.&rdquo;
          </p>
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            opacity: 0.7,
          }}>-- LV Athletics Nation Editorial</div>
        </div>
      </div>
    </main>
  );
}
