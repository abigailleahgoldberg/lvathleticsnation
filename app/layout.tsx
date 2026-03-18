import type { Metadata } from 'next';
import { Anton, Libre_Baskerville, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import { NetworkBar } from '@/components/NetworkBar';

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
    canonical: 'https://lvathleticsnation.com',
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LV Athletics Nation",
          "url": "https://lvathleticsnation.com",
          "description": "The Las Vegas Athletics fan community. Oakland roots. Sacramento pit stop. Las Vegas destiny."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LV Athletics Nation",
          "url": "https://lvathleticsnation.com"
        }) }} />
      </head>
      <body>
        <NetworkBar />
        {/* NAV */}
        <nav style={{
          background: G,
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          position: 'sticky',
          top: '28px',
          zIndex: 400,
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

        {/* Footer lives in page.tsx */}
      </body>
    </html>
  );
}
