import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lvathleticsnation.com'),
  title: {
    default: 'LV Athletics Nation -- Oakland to Las Vegas A\'s Fan Coverage',
    template: '%s | LV Athletics Nation',
  },
  description: 'Coverage of the Athletics relocation saga -- honoring Oakland, surviving Sacramento, and building Las Vegas.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          background: 'var(--dark)',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '1px solid rgba(239,178,30,0.2)',
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'var(--gold)',
                letterSpacing: '0.06em',
                fontFamily: 'Arial, sans-serif',
                lineHeight: 1.1,
              }}>LV Athletics Nation</div>
              <div style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.6rem',
                color: 'var(--gray)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>Oakland &bull; Sacramento &bull; Las Vegas</div>
            </div>
          </a>
          <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
            <li>
              <a href="/blog" style={{
                color: 'var(--cream)',
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                opacity: 0.8,
              }}>All Stories</a>
            </li>
          </ul>
        </nav>
        {children}
        <footer style={{
          background: '#060806',
          padding: '36px 32px',
          borderTop: '1px solid rgba(239,178,30,0.12)',
        }}>
          <div style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              color: 'var(--gold)',
              letterSpacing: '0.06em',
            }}>LV Athletics Nation</div>
            <div style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '0.72rem',
              color: 'var(--gray)',
            }}>Independent fan coverage. Not affiliated with the Oakland Athletics or MLB. &copy; 2026 LVAthleticsNation.com</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
