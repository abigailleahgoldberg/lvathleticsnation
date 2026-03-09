import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A's Stadium Seat Finder: Best Views for Your Budget",
  description: "Find the best seats at the Las Vegas Athletics stadium. Our seating guide helps you choose the right view and budget. Buy tickets through our fan partners.",
};

const GOLD = '#D4A843';
const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';

export default function SeatingGuidePage() {
  return (
    <main style={{ background: BONE, color: DARK, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ background: G, color: BONE, padding: '100px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            A's Stadium <span style={{ color: GOLD }}>Seat Finder</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-libre)', fontSize: '1.5rem', opacity: 0.9 }}>
            Our guide to "A's stadium seat finder: best views for your budget" and ticket-buying tips.
          </p>
        </div>
      </section>

      {/* Seating Layout Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '40px', border: `1px solid rgba(0,0,0,0.1)`, borderRadius: '4px' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            The Ultimate Guide to Las Vegas Athletics Seating
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Las Vegas Athletics stadium is a masterpiece of modern architecture. Designed to integrate with the Strip's energy, it offers a viewing experience unlike any other in baseball. Our "A's stadium seat finder" highlights the best values, the most luxurious suites, and the hidden gems in the upper deck. Using our StubHub and SeatGeek affiliate links, you can find the perfect tickets for every budget.
          </p>

          <div style={{ background: '#f9f9f9', padding: '30px', margin: '40px 0', border: '1px dashed #ccc', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', marginBottom: '1rem' }}>INTERACTIVE SEATING CHART CONCEPT</h3>
            <p style={{ fontStyle: 'italic', color: '#666' }}>
              Imagine a 3D stadium map where each section is color-coded by price and view quality. Hover over Section 105 to see a high-definition photo of the field from that angle. Click "Filter by Budget" to highlight all seats under $50. This is the future of fan engagement at LV Athletics Nation.
            </p>
            <div style={{ height: '300px', background: '#eee', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              [ RENDERING OF INTERACTIVE MAP PLACEHOLDER ]
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>LAS VEGAS ATHLETICS PRICING TIERS</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Athletics have created a multi-tiered pricing structure to ensure the "A's stadium seat finder" caters to every fan. From the most affordable "upper deck" options to the high-end "lower bowl" experiences, there's a seat for everyone.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '40px 0' }}>
            <div style={{ padding: '20px', border: `1px solid ${G}` }}>
                <h4 style={{ fontFamily: 'var(--font-anton)', color: G }}>UPPER DECK ($25 - $45)</h4>
                <p>Great for budget-conscious fans. Offers a sweeping view of the stadium and the Strip beyond the outfield. Perfect for evening games when the desert wind keeps things cool.</p>
                <a href="#STUBHUB_AFFILIATE" style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}>BUY TICKETS</a>
            </div>
            <div style={{ padding: '20px', border: `1px solid ${G}` }}>
                <h4 style={{ fontFamily: 'var(--font-anton)', color: G }}>MID-LEVEL ($50 - $125)</h4>
                <p>The "sweet spot" for many A's fans. Offers a great balance of field proximity and vantage point. Excellent for seeing plays develop and catching fly balls.</p>
                <a href="#STUBHUB_AFFILIATE" style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}>BUY TICKETS</a>
            </div>
            <div style={{ padding: '20px', border: `1px solid ${G}` }}>
                <h4 style={{ fontFamily: 'var(--font-anton)', color: G }}>LOWER BOWL ($150 - $400)</h4>
                <p>The premium Athletics experience. Get close enough to hear the catchers and see the speed of the game. Includes access to exclusive concessions and club levels.</p>
                <a href="#STUBHUB_AFFILIATE" style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}>BUY TICKETS</a>
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>BEYOND THE SEAT: THE STADIUM EXPERIENCE</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Athletics stadium is more than just a place to watch a game. It's a destination. From the world-class food options to the themed "fan zones," every corner of the ballpark offers something unique. Our seating guide highlights the areas with the best proximity to "stadium bars" and "family-friendly zones."
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            When using our "A's stadium seat finder," consider the time of day. Morning and early afternoon games in Las Vegas can be intense. We recommend seats on the third-base side for the best shade during these times. Evening games, however, are a different story. The "outfield bleachers" offer a fantastic view of the Strip's neon lights as they come to life.
          </p>
        </div>
      </section>

      {/* Promo */}
      <section style={{ background: GOLD, padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem' }}>READY TO FIND YOUR SEAT?</h2>
        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Get the best deals and support LV Athletics Nation when you buy tickets through our partners.</p>
        <a href="#STUBHUB_AFFILIATE" style={{ background: DARK, color: GOLD, padding: '15px 30px', display: 'inline-block', fontWeight: 900, textDecoration: 'none' }}>SEARCH TICKETS ON STUBHUB</a>
      </section>
    </main>
  );
}
