import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Fan Guide: Best Spots Near the A's Stadium",
  description: "Your ultimate Las Vegas Athletics fan guide. Find the best pre-game restaurants, hotels on the Strip, and parking options for A's games.",
};

const GOLD = '#D4A843';
const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';

export default function VegasGuidePage() {
  const categories = [
    { title: "RESTAURANTS", desc: "Best pre-game food and drink near the stadium.", link: "/vegas-guide/restaurants", image: "/food.jpg" },
    { title: "HOTELS", desc: "Where to stay on the Strip to be close to the A's.", link: "/vegas-guide/hotels", image: "/hotel.jpg" },
    { title: "PARKING", desc: "All your parking and transportation options.", link: "/vegas-guide/parking", image: "/parking.jpg" },
  ];

  return (
    <main style={{ background: BONE, color: DARK, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ background: G, color: BONE, padding: '100px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Las Vegas <span style={{ color: GOLD }}>Fan Business Directory</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-libre)', fontSize: '1.5rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto' }}>
            The definitive guide to doing Vegas Athletics right. Where to eat, where to sleep, and how to get there.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid rgba(0,0,0,0.1)`, overflow: 'hidden' }}>
              <div style={{ height: '200px', background: DARK, opacity: 0.8 }}></div>
              <div style={{ padding: '30px' }}>
                <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginBottom: '10px' }}>{cat.title}</h2>
                <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>{cat.desc}</p>
                <a href={cat.link} style={{ display: 'inline-block', background: G, color: BONE, padding: '12px 25px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                  EXPLORE {cat.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Guide Content */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '50px', border: `1px solid rgba(0,0,0,0.1)` }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2.5rem', marginBottom: '2rem' }}>WELCOME TO THE NATION'S CITY</h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The arrival of the Athletics in Las Vegas has transformed the city into a dual-sport mecca. For the fans who have followed the team from Oakland—or those just discovering their love for Athletics baseball in Nevada—the experience is about more than just the nine innings on the field. It's about the entire Las Vegas weekend.
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Our <strong>Las Vegas Fan Business Directory</strong> is curated by fans, for fans. We've spent time in the trenches, testing the best "pre-game spots near A's stadium," finding the cleanest "A's game parking," and identifying the most convenient "where A's fans should stay on the Strip" locations.
          </p>
          
          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>BEYOND THE DIAMOND: THE VEGAS EXPERIENCE</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Las Vegas is a city built on hospitality and high-stakes entertainment. When the Athletics announced their move to the Las Vegas Strip, it signaled a new era where professional baseball would finally have a permanent home in the global entertainment capital. For the visiting fan, this means access to world-class dining, immersive stadium experiences, and a level of hospitality unseen at typical MLB venues.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            We've partnered with local businesses—from the legendary steakhouses to the boutique hotels and modern parking solutions—to ensure that your visit to an Athletics game is seamless. Use our guide to navigate the unique landscape of the Las Vegas Strip, where the proximity of the ballpark to major casinos creates a game-day atmosphere that is truly one-of-a-kind.
          </p>
          
          <div style={{ background: GOLD, padding: '40px', margin: '40px 0', border: `2px solid ${DARK}` }}>
            <h3 style={{ fontFamily: 'var(--font-anton)', color: DARK, marginBottom: '15px' }}>JOIN THE BUSINESS DIRECTORY</h3>
            <p style={{ color: DARK, fontWeight: 500, marginBottom: '20px' }}>
              Are you a local Las Vegas business owner who wants to reach the thousands of A's fans visiting the stadium every week? We offer featured listings and partner opportunities.
            </p>
            <a href="mailto:directory@lvathleticsnation.com" style={{ display: 'inline-block', background: DARK, color: GOLD, padding: '15px 30px', fontWeight: 800, textDecoration: 'none' }}>LIST YOUR BUSINESS</a>
          </div>

          <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>LOCAL SEO & COMMUNITY IMPACT</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Our focus isn't just on the big names. We highlight the small businesses that make Las Vegas unique. In our restaurant section, you'll find everything from Michelin-rated dining to the best local taco trucks that are "A's game favorites." In our hotel guide, we break down options by budget, proximity, and loyalty programs, so you always get the best value via our Booking.com and Expedia partners.
          </p>
        </div>
      </section>

      {/* Directory CTA */}
      <section style={{ background: DARK, color: BONE, padding: '60px 20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem', color: GOLD }}>PLAN YOUR TRIP TO THE NATION</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Access exclusive fan discounts and preferred booking rates.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#OPEN_TABLE_AFFILIATE" style={{ background: BONE, color: DARK, padding: '12px 25px', fontWeight: 700, textDecoration: 'none' }}>BOOK DINNER</a>
            <a href="#BOOKING_AFFILIATE" style={{ background: GOLD, color: DARK, padding: '12px 25px', fontWeight: 700, textDecoration: 'none' }}>FIND A HOTEL</a>
            <a href="#PARK_WHIZ_AFFILIATE" style={{ border: `2px solid ${BONE}`, color: BONE, padding: '12px 25px', fontWeight: 700, textDecoration: 'none' }}>RESERVE PARKING</a>
          </div>
      </section>
    </main>
  );
}
