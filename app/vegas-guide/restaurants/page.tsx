import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Pre-Game Spots Near A's Stadium | Las Vegas Fan Guide",
  description: "Find the top restaurants, bars, and pre-game hangout spots for Las Vegas Athletics fans near the stadium. Book your dinner reservations here.",
};

const GOLD = '#D4A843';
const G = '#1A3C2F';
const BONE = '#E8E0D0';
const DARK = '#0D0F0C';

export default function RestaurantsPage() {
  return (
    <main style={{ background: BONE, color: DARK, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ background: G, color: BONE, padding: '80px 20px', textAlign: 'center', borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '1rem', textTransform: 'uppercase' }}>
            Pre-Game <span style={{ color: GOLD }}>Restaurants</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-libre)', fontSize: '1.25rem', opacity: 0.9 }}>
            The best food, drinks, and "best pre-game spots near A's stadium" for the Athletics fan.
          </p>
        </div>
      </section>

      {/* Restaurant List */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: 'white', padding: '40px', border: `1px solid rgba(0,0,0,0.1)`, borderRadius: '4px' }}>
            <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Where to Eat Before the Athletics Game
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              When the Las Vegas Athletics take the field, the city's food scene comes alive. Whether you're looking for a world-class steakhouse or a quick bite, the "best pre-game spots near A's stadium" offer something for everyone. Using our OpenTable affiliate integration, you can book your table in advance and ensure you're in your seat by the first pitch.
            </p>

            <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>TOP PICK: THE DESERT DIAMOND STEAKHOUSE</h3>
              <p style={{ marginBottom: '15px' }}>Located just two blocks from the stadium, this spot is the ultimate destination for fans. With a dedicated "A's Fan Happy Hour" and a shuttle directly to the main gate, it's the premium way to experience Las Vegas Athletics baseball.</p>
              <a href="#OPENTABLE_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON OPENTABLE</a>
            </div>

            <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>FAN FAVORITE: NATION TACOS & TEQUILA</h3>
              <p style={{ marginBottom: '15px' }}>Looking for something more casual? This fan-owned establishment has become a de-facto clubhouse for LV Athletics Nation members. The "Rooker Rita" and "Vegas Sliders" are local legends.</p>
              <a href="#OPENTABLE_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON OPENTABLE</a>
            </div>

            <div style={{ margin: '40px 0', border: `1px solid #eee`, padding: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.5rem', marginBottom: '1rem' }}>QUICK BITE: STRIP SIDE PIZZA</h3>
              <p style={{ marginBottom: '15px' }}>The fastest "best pre-game spots near A's stadium" for those who are running late. Quick service, cold beer, and plenty of TVs to catch the pre-game show.</p>
              <a href="#OPENTABLE_AFFILIATE" style={{ background: G, color: BONE, padding: '10px 20px', display: 'inline-block', fontWeight: 600, textDecoration: 'none' }}>BOOK ON OPENTABLE</a>
            </div>

            <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.25rem' }}>BEYOND THE STADIUM: THE BEST LAS VEGAS DINING</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Las Vegas is arguably the greatest food city in the world. For fans traveling from out of town, we recommend making a night of it. Following the game, head back to the Strip for some of the most innovative dining experiences on the planet. From Gordon Ramsay's Hell's Kitchen to the local gems in Downtown Las Vegas, your culinary journey is just as important as the baseball game.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Our directory focuses on "local Las Vegas SEO" for restaurants that cater specifically to the sports fan. We look for places with high-quality big screens, balanced sound systems so you can still talk to your friends, and of course, a menu that goes beyond standard stadium fare.
            </p>
          </div>
      </section>

      {/* Promo */}
      <section style={{ background: GOLD, padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-anton)', fontSize: '2rem' }}>HUNGRY FOR MORE?</h2>
        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Get priority seating at these partner locations with your LV Athletics Nation membership.</p>
        <a href="#OPENTABLE_AFFILIATE" style={{ background: DARK, color: GOLD, padding: '15px 30px', display: 'inline-block', fontWeight: 900, textDecoration: 'none' }}>EXPLORE ALL RESTAURANTS</a>
      </section>
    </main>
  );
}
