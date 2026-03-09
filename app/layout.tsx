import type { Metadata } from 'next';
import { Anton, Libre_Baskerville, Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lvathleticsnation.com'),
  title: {
    default: 'LV Athletics Nation -- The Fan Community',
    template: '%s | LV Athletics Nation',
  },
  description: 'Oakland roots. Sacramento pit stop. Las Vegas destiny. We followed our team here.',
  openGraph: {
    type: 'website',
    siteName: 'LV Athletics Nation',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
};

const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';
const GOLD = '#D4A843';
const CONCRETE = '#6B7066';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${libreBaskerville.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        {/* NAV */}
        <nav style={{
          background: G,
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          position: 'sticky',
          top: 0,
          zIndex: 500,
          borderBottom: `2px solid ${BONE}`,
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'var(--font-anton)',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: BONE,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              LV Athletics Nation
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <a href="/betting" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: BONE,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Betting
            </a>
            <a href="/vegas-guide" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: BONE,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Vegas Guide
            </a>
            <a href="/seating-guide" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: BONE,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Seating
            </a>
            <a href="/blog" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: BONE,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Blog
            </a>
            <a href="#join" style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: DARK,
              background: BONE,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.55rem 1.2rem',
              borderRadius: 0,
              display: 'inline-block',
            }}>
              Join The Nation
            </a>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer style={{
          background: DARK,
          borderTop: `1px solid rgba(212,168,67,0.15)`,
          padding: '4rem 40px 3rem',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              fontFamily: 'var(--font-anton)',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              color: BONE,
              letterSpacing: '0.04em',
              marginBottom: '0.75rem',
            }}>
              LVATHLETICSNATION.COM
            </div>
            <p style={{
              fontFamily: 'var(--font-libre)',
              fontSize: '0.9rem',
              color: BONE,
              opacity: 0.5,
              marginBottom: '2rem',
            }}>
              The fan community for Las Vegas Athletics.
            </p>
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
            }}>
              {['Blog', 'The Story', 'Join'].map(link => (
                <a key={link} href="/blog" style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8rem',
                  color: GOLD,
                  opacity: 0.75,
                  letterSpacing: '0.05em',
                }}>
                  {link}
                </a>
              ))}
            </div>
            <div style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.65rem',
              color: CONCRETE,
              letterSpacing: '0.15em',
              borderTop: `1px solid rgba(212,168,67,0.1)`,
              paddingTop: '1.5rem',
            }}>
              &copy; 2026 LVATHLETICSNATION.COM -- FAN COMMUNITY -- NOT AFFILIATED WITH THE ATHLETICS ORGANIZATION OR MLB
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
