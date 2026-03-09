import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Where A's Fans Should Stay on the Strip | Las Vegas Hotels",
  description: "Find the best hotels for Las Vegas Athletics fans near the stadium and on the Strip. Compare rates and book your stay through our fan partners.",
};

const GOLD = '#D4A843';
const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';

export default function HotelsPage() {
  return (
    <main style={{ background: BONE, color: DARK, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ background: G, color: BONE, padding: '80px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Where <span style={{ color: GOLD }}>A's Fans Stay</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-libre)', fontSize: '1.25rem', opacity: 0.9 }}>
            Our guide to "where A's fans should stay on the Strip" to be right in the action.
          </p>
        </div>
      </section>

      {/* Hotel List */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '40px', border: `1px solid rgba(0,0,0,0.1)`, borderRadius: '4px' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Las Vegas Athletics Fan Hotels
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Las Vegas thrives on hospitality, and the arrival of the Athletics has created a new demand for "hotels near A's stadium." While many choose the glitz of the Strip, there are also excellent boutique options closer to the ballpark. Using our Booking.com and Expedia affiliate links, you can find the perfect room for your stay.
          </p>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>LUXURY: THE GRAND BELLAGIO</h3>
            <p style={{ marginBottom: '15px' }}>If you're looking for the quintessential Las Vegas experience, the Bellagio is where you want to be. While a short Uber away from the stadium, the luxury here is unmatched. It's the ultimate base camp for the high-end Athletics fan.</p>
            <a href="#BOOKING_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON BOOKING.COM</a>
          </div>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>CONVENIENCE: MGM GRAND</h3>
            <p style={{ marginBottom: '15px' }}>One of the most frequent "where A's fans should stay on the Strip" recommendations is the MGM Grand. It's close to the stadium, has massive sportsbooks, and offers easy monorail access to the rest of the Strip.</p>
            <a href="#BOOKING_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON BOOKING.COM</a>
          </div>

          <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>BUDGET: EXCALIBUR</h3>
            <p style={{ marginBottom: '15px' }}>For the fan who wants to spend their money on seats and jerseys rather than a room, the Excalibur is a fantastic budget-friendly option. It's essentially across the street from the stadium grounds.</p>
            <a href="#BOOKING_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON BOOKING.COM</a>
          </div>

          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>BEYOND THE STRIP: THE LAS VEGAS FAN EXPERIENCE</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Don't overlook Downtown Las Vegas. With its vibrant Freemont Street Experience, Circa's world-famous Stadium Swim (the world's largest sportsbook pool), and a grittier, old-school Vegas vibe, it's a fan favorite for a reason. Many A's fans find they prefer the atmosphere of Downtown to the more polished Strip. Circa, in particular, has become a massive hub for sports fans during game weekends.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            When selecting your hotel, consider the logistics of the Athletics' new home. Traffic on the Strip can be challenging on game nights, so staying within walking distance or along the Monorail line can save you significant time and frustration. Our guide to "Las Vegas fan hotel options" accounts for these practical concerns.
          </p>
        </div>
      </section>

      {/* Promo */}
      <section style={{ background: GOLD, padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem' }}>READY TO BOOK YOUR STAY?</h2>
        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Get the best rates and support LV Athletics Nation when you book through our partners.</p>
        <a href="#BOOKING_AFFILIATE" style={{ background: DARK, color: GOLD, padding: '15px 30px', display: 'inline-block', fontWeight: 900, textDecoration: 'none' }}>SEARCH ALL HOTELS</a>
      </section>
    </main>
  );
}
