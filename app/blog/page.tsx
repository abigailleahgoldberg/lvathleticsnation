import type { Metadata } from 'next';
import { posts } from './data';

export const metadata: Metadata = {
  title: 'All Stories',
  description: 'Long-form coverage of the Athletics relocation saga -- Oakland roots, Sacramento stop, Las Vegas future.',
  alternates: { canonical: '/blog' },
};

const categories = ['All', 'Oakland', 'Sacramento', 'Las Vegas', 'History', 'Analysis', 'MLB', 'Baseball'];

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(180deg, #0d1a0e 0%, var(--dark) 100%)',
        padding: '72px 32px 56px',
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
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--gold)' }} />
            LV Athletics Nation
          </div>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'var(--cream)',
            fontWeight: 'normal',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            All <span style={{ color: 'var(--gold)' }}>Stories</span>
          </h1>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.95rem',
            color: 'var(--gray)',
            lineHeight: 1.6,
          }}>
            {posts.length} long-form pieces covering the full Oakland-to-Las Vegas relocation saga.
          </p>
        </div>
      </div>

      {/* CATEGORY PILLS */}
      <div style={{
        borderBottom: '1px solid rgba(239,178,30,0.1)',
        padding: '0 32px',
        overflowX: 'auto',
      }}>
        <div style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'flex',
          gap: '4px',
          padding: '16px 0',
          whiteSpace: 'nowrap' as const,
        }}>
          {categories.map((cat) => (
            <span key={cat} style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              padding: '6px 14px',
              border: '1px solid rgba(239,178,30,0.25)',
              borderRadius: '2px',
              color: cat === 'All' ? 'var(--dark)' : 'var(--gold)',
              background: cat === 'All' ? 'var(--gold)' : 'transparent',
              cursor: 'default',
            }}>{cat}</span>
          ))}
        </div>
      </div>

      {/* POST LIST */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '48px 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0' }}>
          {sortedPosts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                padding: '32px 0',
                borderBottom: '1px solid rgba(239,178,30,0.1)',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: '900',
                  color: 'rgba(239,178,30,0.25)',
                  minWidth: '32px',
                  paddingTop: '4px',
                  textAlign: 'right' as const,
                }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px',
                    flexWrap: 'wrap' as const,
                  }}>
                    <span style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '0.62rem',
                      fontWeight: 'bold',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase' as const,
                      color: 'var(--gold)',
                    }}>{post.category}</span>
                    <span style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '0.72rem',
                      color: 'var(--gray)',
                    }}>{post.date} &bull; {post.readingTime}</span>
                  </div>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    color: 'var(--cream)',
                    lineHeight: 1.3,
                    marginBottom: '10px',
                    fontWeight: 'normal',
                  }}>{post.title}</div>
                  <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '0.88rem',
                    color: 'var(--gray)',
                    lineHeight: 1.65,
                    maxWidth: '640px',
                  }}>{post.excerpt}</p>
                </div>
                <div style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: 'var(--gold)',
                  minWidth: '60px',
                  paddingTop: '4px',
                  textAlign: 'right' as const,
                }}>Read &rarr;</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
