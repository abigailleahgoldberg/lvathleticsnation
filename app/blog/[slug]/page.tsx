import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '../data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      const text = line.slice(2, -2);
      elements.push(
        <h2 key={key++} style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
          color: 'var(--cream)',
          fontWeight: 'bold',
          marginTop: '48px',
          marginBottom: '16px',
          lineHeight: 1.3,
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '0.01em',
        }}>{text}</h2>
      );
    } else if (line.trim() === '') {
      // blank line -- skip
    } else {
      // Regular paragraph -- handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const inlineElements = parts.map((part, pi) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pi} style={{ color: 'var(--cream)', fontWeight: 'bold' }}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={key++} style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          lineHeight: 1.85,
          color: 'var(--cream)',
          opacity: 0.88,
          marginBottom: '24px',
        }}>{inlineElements}</p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <main>
      {/* ARTICLE HEADER */}
      <div style={{
        background: 'linear-gradient(180deg, #0d1a0e 0%, var(--dark) 100%)',
        padding: '72px 32px 56px',
        borderBottom: '1px solid rgba(239,178,30,0.12)',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <a href="/blog" style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.72rem',
              color: 'var(--gray)',
              letterSpacing: '0.05em',
            }}>&larr; All Stories</a>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
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
          <h1 style={{
            fontSize: 'clamp(1.7rem, 4.5vw, 2.8rem)',
            color: 'var(--cream)',
            fontWeight: 'normal',
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>{post.title}</h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--cream)',
            opacity: 0.65,
            lineHeight: 1.65,
            fontFamily: 'Arial, sans-serif',
          }}>{post.excerpt}</p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 32px 48px' }}>
        <div style={{
          borderLeft: '3px solid var(--green)',
          paddingLeft: '0',
        }}>
          {renderContent(post.content)}
        </div>
      </div>

      {/* AFFILIATE BLOCK */}
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '0 32px 64px',
      }}>
        <div style={{
          background: 'var(--green)',
          borderRadius: '4px',
          padding: '36px 32px',
          marginBottom: '32px',
        }}>
          <div style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 'bold',
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--gold)',
            marginBottom: '14px',
          }}>A\'s Gear &amp; Tickets</div>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.88rem',
            color: 'var(--cream)',
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: '20px',
          }}>
            Support LV Athletics Nation by shopping through our affiliate links.
            Every purchase helps fund independent coverage of the A&apos;s relocation story.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
            <a
              href="https://www.fanatics.com/mlb/oakland-athletics/o-2827+t-97221267?ref=lvathleticsnation-20"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: 'inline-block',
                background: 'var(--gold)',
                color: 'var(--dark)',
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 'bold',
                letterSpacing: '0.07em',
                textTransform: 'uppercase' as const,
                padding: '11px 20px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              Shop A&apos;s Gear on Fanatics
            </a>
            <a
              href="https://www.stubhub.com/oakland-athletics-tickets/performer/3866/?GCID=C12218x376&listing_id=lvathleticsnation-20"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(239,178,30,0.5)',
                color: 'var(--gold)',
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 'bold',
                letterSpacing: '0.07em',
                textTransform: 'uppercase' as const,
                padding: '11px 20px',
                borderRadius: '3px',
                textDecoration: 'none',
              }}
            >
              Find A&apos;s Tickets on StubHub
            </a>
          </div>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.68rem',
            color: 'rgba(250,250,248,0.4)',
            marginTop: '12px',
          }}>Affiliate links. We may earn a commission at no additional cost to you.</p>
        </div>
      </div>

      {/* PREV / NEXT NAV */}
      {(prevPost || nextPost) && (
        <div style={{
          borderTop: '1px solid rgba(239,178,30,0.12)',
          maxWidth: '760px',
          margin: '0 auto',
          padding: '40px 32px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}>
          {prevPost ? (
            <a href={`/blog/${prevPost.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 'bold',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: 'var(--gray)',
                marginBottom: '8px',
              }}>&larr; Previous</div>
              <div style={{
                fontSize: '0.95rem',
                color: 'var(--cream)',
                lineHeight: 1.4,
                opacity: 0.8,
              }}>{prevPost.title}</div>
            </a>
          ) : <div />}
          {nextPost ? (
            <a href={`/blog/${nextPost.slug}`} style={{ textDecoration: 'none', textAlign: 'right' as const }}>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 'bold',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: 'var(--gray)',
                marginBottom: '8px',
              }}>Next &rarr;</div>
              <div style={{
                fontSize: '0.95rem',
                color: 'var(--cream)',
                lineHeight: 1.4,
                opacity: 0.8,
              }}>{nextPost.title}</div>
            </a>
          ) : <div />}
        </div>
      )}
    </main>
  );
}
