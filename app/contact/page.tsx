import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | LV Athletics Nation',
  description: 'Get in touch with LV Athletics Nation — the Las Vegas A\'s fan community.',
};

const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';
const GOLD = '#D4A843';

export default function ContactPage() {
  return (
    <main style={{ background: DARK, minHeight: '100vh', color: BONE, fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: G, padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', position: 'sticky', top: 0, zIndex: 500, borderBottom: `2px solid ${BONE}` }}>
        <Link href="/" style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none' }}>LV Athletics Nation</Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/blog" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Blog</Link>
          <Link href="/contact" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact</Link>
        </div>
      </nav>

      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>Reach Out</p>
        <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact</h1>

        <p style={{ fontSize: '0.95rem', color: `rgba(232,224,208,0.65)`, lineHeight: 1.75, marginBottom: '3rem' }}>
          LV Athletics Nation is fan-built and fan-run. We&apos;re always open to tips, corrections, story ideas, and collaboration. Reach out anytime.
        </p>

        <div style={{ background: `rgba(26,60,47,0.4)`, border: `1px solid rgba(212,168,67,0.2)`, padding: '2.5rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>Email</p>
          <a href="mailto:thevoiceofcash@gmail.com" style={{ fontFamily: 'var(--font-anton)', fontSize: '1.4rem', color: BONE, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            thevoiceofcash@gmail.com
          </a>
        </div>

        <div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>What We Handle</p>
          <ul style={{ paddingLeft: '1.5rem', color: `rgba(232,224,208,0.6)`, fontSize: '0.9rem', lineHeight: 2 }}>
            <li>Fan tips and story leads</li>
            <li>Factual corrections and feedback</li>
            <li>Community partnership inquiries</li>
            <li>DMCA and copyright notices</li>
            <li>Advertising opportunities</li>
            <li>General questions</li>
          </ul>
        </div>

        <p style={{ fontSize: '0.75rem', color: `rgba(232,224,208,0.3)`, marginTop: '3rem', lineHeight: 1.65 }}>
          We are an independent fan community, not affiliated with the Las Vegas Athletics or MLB. For official team inquiries, visit{' '}
          <a href="https://www.mlb.com/athletics" target="_blank" rel="noopener noreferrer" style={{ color: GOLD }}>MLB.com/athletics</a>.
        </p>
      </article>

      <footer style={{ borderTop: `1px solid rgba(212,168,67,0.1)`, padding: '3rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {[['Disclaimer', '/disclaimer'], ['Privacy', '/privacy'], ['Terms', '/terms'], ['DMCA', '/dmca'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: `rgba(232,224,208,0.35)`, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', color: `rgba(232,224,208,0.15)`, letterSpacing: '0.08em' }}>
          &copy; 2026 LV Athletics Nation — Fan site. Not affiliated with the Athletics organization or MLB.
        </p>
      </footer>
    </main>
  );
}
