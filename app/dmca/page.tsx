import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA Policy | LV Athletics Nation',
  description: 'DMCA copyright policy for LVAthleticsNation.com.',
};

const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';
const GOLD = '#D4A843';

export default function DMCAPage() {
  return (
    <main style={{ background: DARK, minHeight: '100vh', color: BONE, fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: G, padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', position: 'sticky', top: 0, zIndex: 500, borderBottom: `2px solid ${BONE}` }}>
        <Link href="/" style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none' }}>LV Athletics Nation</Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/blog" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Blog</Link>
          <Link href="/contact" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact</Link>
        </div>
      </nav>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>DMCA Policy</h1>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.15em', color: `rgba(232,224,208,0.35)`, textTransform: 'uppercase', marginBottom: '3rem' }}>Last Updated: March 2026</p>

        <p style={{ fontSize: '0.95rem', color: `rgba(232,224,208,0.7)`, lineHeight: 1.75, marginBottom: '2.5rem' }}>
          LVAthleticsNation.com respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512.
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>DMCA Agent</h2>
          <div style={{ background: `rgba(212,168,67,0.05)`, border: `1px solid rgba(212,168,67,0.15)`, padding: '1.5rem', lineHeight: 1.85 }}>
            <p style={{ fontSize: '0.9rem', color: `rgba(232,224,208,0.7)` }}>
              <strong style={{ color: BONE }}>Designated Agent:</strong> The Voice of Cash<br />
              <strong style={{ color: BONE }}>Email:</strong>{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: GOLD }}>thevoiceofcash@gmail.com</a><br />
              <strong style={{ color: BONE }}>Website:</strong> LVAthleticsNation.com
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Requirements for a Valid DMCA Notice</h2>
          <ul style={{ paddingLeft: '1.5rem', color: `rgba(232,224,208,0.65)`, fontSize: '0.9rem', lineHeight: 1.85 }}>
            <li style={{ marginBottom: '0.5rem' }}>A physical or electronic signature of the copyright owner or authorized representative.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the infringing material and its URL on this site.</li>
            <li style={{ marginBottom: '0.5rem' }}>Your contact information (name, address, phone, email).</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement of good faith belief that the use is not authorized by the copyright owner, its agent, or the law.</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement under penalty of perjury that the information is accurate and you are authorized to act.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Counter-Notification</h2>
          <p style={{ fontSize: '0.9rem', color: `rgba(232,224,208,0.7)`, lineHeight: 1.75, marginBottom: '1rem' }}>If you believe content was removed in error, submit a counter-notification including:</p>
          <ul style={{ paddingLeft: '1.5rem', color: `rgba(232,224,208,0.65)`, fontSize: '0.9rem', lineHeight: 1.85 }}>
            <li style={{ marginBottom: '0.5rem' }}>Your physical or electronic signature.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the removed material and its prior location.</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement under penalty of perjury that the removal was in error.</li>
            <li style={{ marginBottom: '0.5rem' }}>Your name, address, phone, email, and consent to federal court jurisdiction.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.3rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</h2>
          <p style={{ fontSize: '0.95rem', color: `rgba(232,224,208,0.7)`, lineHeight: 1.75 }}>
            Send all DMCA notices to:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: GOLD }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
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
