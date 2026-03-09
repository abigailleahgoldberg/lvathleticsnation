import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A's Game Parking: All Your Options | Las Vegas Fan Guide",
  description: "Find the best parking spots, shuttle options, and transportation tips for Las Vegas Athletics games. Book your parking spot in advance.",
};

const GOLD = '#D4A843';
const G = '#1A3C2F';
          const BONE = '#E8E0D0';
          const DARK = '#0D0F0C';

export default function ParkingPage() {
  return (
    <main style={{ background: BONE, color: DARK, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ background: G, color: BONE, padding: '80px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '1rem', textTransform: 'uppercase' }}>
            A's Game <span style={{ color: GOLD }}>Parking</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-libre)', fontSize: '1.25rem', opacity: 0.9 }}>
            Our guide to "A's game parking: all your options" and transportation tips for the Las Vegas fan.
          </p>
        </div>
      </section>

      {/* Parking List */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '40px', border: `1px solid rgba(0,0,0,0.1)`, borderRadius: '4px' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Las Vegas Athletics Parking & Transportation
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Parking in Las Vegas can be a nightmare, especially on game days. The "A's game parking: all your options" list provided here is designed to save you time and money. Use our SpotHero or ParkWhiz affiliate links to reserve your spot and avoid the stress of game-day traffic.
          </p>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>PREMIUM: STADIUM ON-SITE PARKING</h3>
            <p style={{ marginBottom: '15px' }}>The closest you can get to the Athletics' home field. While the most expensive, it's also the most convenient. We recommend booking these spots weeks in advance, as they sell out quickly.</p>
            <a href="#PARKWHIZ_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>RESERVE ON PARKWHIZ</a>
          </div>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>VALUE: STRIP CASINO PARKING</h3>
            <p style={{ marginBottom: '15px' }}>One of the most frequent "A's game parking: all your options" tips is to park at a nearby casino. Many off-strip or mid-strip casinos offer reduced parking rates for locals or loyalty members. It's often worth the 10-minute walk.</p>
            <a href="#PARKWHIZ_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>RESERVE ON PARKWHIZ</a>
          </div>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>EASY ACCESS: PARK & SHUTTLE</h3>
            <p style={{ marginBottom: '15px' }}>For the fan who doesn't want to deal with the Strip, the Park & Shuttle options are a fantastic "A's game parking" alternative. Park in a designated lot off-site and take a dedicated shuttle directly to the main gate.</p>
            <a href="#PARKWHIZ_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>RESERVE ON PARKWHIZ</a>
          </div>

          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>PUBLIC TRANSPORTATION & RIDESHARE</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Las Vegas Monorail is a great way to avoid game-day traffic. While it doesn't drop you off directly at the stadium, it gets you close enough for a short walk. For many fans, this is the most stress-free "A's game transport" option.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Rideshare options like Uber and Lyft are plentiful in Las Vegas. However, be aware of the "surge pricing" that often occurs around game time. We recommend scheduling your ride in advance or leaving a bit earlier to avoid the highest rates. Our guide to "Las Vegas Athletics transport" is built with these factors in mind.
          </p>
        </div>
      </section>

      {/* Promo */}
      <section style={{ background: GOLD, padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem' }}>READY TO RESERVE YOUR SPOT?</h2>
        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Get the best rates and support LV Athletics Nation when you book through our partners.</p>
        <a href="#PARKWHIZ_AFFILIATE" style={{ background: DARK, color: GOLD, padding: '15px 30px', display: 'inline-block', fontWeight: 900, textDecoration: 'none' }}>RESERVE PARKING NOW</a>
      </section>
    </main>
  );
}
