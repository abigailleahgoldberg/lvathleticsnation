import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | LV Athletics Nation',
  description: 'Disclaimer for LVAthleticsNation.com — independent Las Vegas Athletics fan community.',
};

const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';
const GOLD = '#D4A843';

export default function DisclaimerPage() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: DARK, color: BONE, fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
        <nav style={{ background: G, padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', position: 'sticky', top: 0, zIndex: 500, borderBottom: `2px solid ${BONE}` }}>
          <Link href="/" style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none' }}>LV Athletics Nation</Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/blog" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Blog</Link>
            <Link href="/contact" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: BONE, opacity: 0.7, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact</Link>
          </div>
        </nav>

        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: BONE, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Disclaimer</h1>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.15em', color: `rgba(232,224,208,0.35)`, textTransform: 'uppercase', marginBottom: '3rem' }}>Last Updated: March 2026</p>

          {[
            { title: 'Entertainment Purposes Only', body: 'All content published on LVAthleticsNation.com — including articles, analysis, commentary, and community posts — is provided for entertainment and informational purposes only. Nothing on this site constitutes professional sports advice, financial advice, or wagering advice of any kind.' },
            { title: 'No Affiliation with MLB or the Athletics', body: 'LVAthleticsNation.com is an independent fan community site. We are not affiliated with, endorsed by, or connected to Major League Baseball (MLB), the Las Vegas Athletics, the Oakland Athletics, or any other professional sports organization, team, or league. All team names, logos, and trademarks are the property of their respective owners.' },
            { title: 'Betting & Gambling Content', body: 'Any content related to sports betting, odds, or wagering on this site is provided strictly for entertainment purposes. We do not encourage or facilitate illegal gambling. Gambling involves significant financial risk. Please gamble responsibly. If you or someone you know has a gambling problem, contact the National Problem Gambling Helpline at 1-800-522-4700.' },
            { title: 'AI-Generated Content', body: 'Some content on this site may be generated or assisted by artificial intelligence tools. While we make reasonable efforts to ensure accuracy, AI-generated content may contain errors, outdated information, or inaccuracies. Always verify important information through official sources.' },
            { title: 'External Links', body: 'This site contains links to third-party websites, including ticket providers and external media outlets. We have no control over the content, privacy policies, or practices of those sites and accept no responsibility for them. External links are provided for convenience and informational purposes only.' },
            { title: 'Accuracy of Information', body: 'While we strive to provide accurate and up-to-date sports news and fan content, we make no representations or warranties about the completeness, accuracy, or reliability of any information on this site. Roster information, stadium details, and schedules may change without notice.' },
          ].map(({ title, body }) => (
            <section key={title} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.4rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</h2>
              <p style={{ fontSize: '0.95rem', color: `rgba(232,224,208,0.7)`, lineHeight: 1.75 }}>{body}</p>
            </section>
          ))}

          <section>
            <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.4rem', color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</h2>
            <p style={{ fontSize: '0.95rem', color: `rgba(232,224,208,0.7)`, lineHeight: 1.75 }}>
              Questions? Email{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: GOLD }}>thevoiceofcash@gmail.com</a>.
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
      </body>
    </html>
  );
}
