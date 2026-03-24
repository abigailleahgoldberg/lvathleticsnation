export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  emoji?: string;
  readingTime?: string;
  content: string;
};

const affiliateBlock = `
<div class="affiliate-block" style="background:#111009;border:1px solid rgba(239,178,30,0.3);border-radius:8px;padding:24px;margin-top:40px;">
  <div style="font-family:Arial,sans-serif;font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:#EFB21E;margin-bottom:12px;">Tickets &amp; Gear</div>
  <p style="font-size:0.9rem;margin-bottom:16px;opacity:0.85;">Find Las Vegas A's tickets and gear through our affiliate partners. Purchases support independent coverage at no extra cost to you.</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <a href="https://www.stubhub.com/las-vegas-athletics-tickets/" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:#EFB21E;color:#0A0800;font-family:Arial,sans-serif;font-weight:bold;font-size:0.85rem;border-radius:4px;text-decoration:none;">Find Tickets on StubHub</a>
    <a href="https://www.fanatics.com/mlb/oakland-athletics/o-2793+t-53395338" target="_blank" rel="noopener" style="display:inline-block;padding:10px 20px;background:#003831;color:#FAFAF8;font-family:Arial,sans-serif;font-weight:bold;font-size:0.85rem;border-radius:4px;text-decoration:none;border:1px solid #EFB21E;">Shop Gear on Fanatics</a>
  </div>
</div>

<div style="background:#0D1F12;border:1px solid rgba(212,168,67,0.2);border-radius:8px;padding:24px;margin-top:20px;">
  <div style="font-family:'Space Mono',monospace;font-size:0.55rem;letter-spacing:0.16em;text-transform:uppercase;color:#D4A843;margin-bottom:14px;">More From The A's Network</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <a href="https://thelvathletics.com" style="font-size:0.9rem;color:#D4A843;text-decoration:none;font-family:Arial,sans-serif;"><strong>TheLVAthletics.com</strong> — Read the full roster analysis and deep dives on the Las Vegas A's</a>
    <a href="https://thelvas.com" style="font-size:0.9rem;color:#D4A843;text-decoration:none;font-family:Arial,sans-serif;"><strong>TheLVAs.com</strong> — Breaking news and bold takes on Las Vegas Athletics baseball</a>
  </div>
</div>
`;

export const posts: Post[] = [
  {
    slug: 'las-vegas-athletics-tailgate-guide-2026',
    title: 'The Official Unofficial Las Vegas Athletics Tailgate Guide',
    excerpt: 'Where to go before the game, what to bring, and how to do a proper Vegas sports pregame.',
    content: `Tailgating in Las Vegas hits differently than anywhere else. The weather is usually perfect, there is more food within half a mile of any stadium than most cities have in their entire downtown, and the people who show up for a Vegas A's tailgate are a mix of lifelong Oakland fans who followed the team and new Vegas fans who found something to root for. Both groups are welcome. Both groups eat.

The Allegiant Stadium complex has designated tailgate areas that open three hours before first pitch. Bring a grill or find the setup that works for you. Parking in the stadium lots runs $25-40 for premium spots — factor that into your budget. The alternative is to pregame in one of the nearby bar areas and walk or rideshare to the gate.

For food: the area around the stadium has expanded significantly since the stadium opened. There are options from casino food halls to local Vegas joints within rideshare distance. The tailgate traditionalists who want a parking lot grill are well served by the stadium facilities.

The crowd mix at A's games in Vegas is still forming its identity. You will see green and gold from Oakland next to Las Vegas-specific A's gear. You will hear debates about whether the franchise made the right move. You will also see families with kids who grew up here and have no Oakland context, just a local team to root for. Watch how those communities blend over the next five years. It is genuinely interesting.`,
    date: '2026-03-24',
    category: 'Fan Culture',
    readTime: 6
  },
  {
    slug: 'athletics-vs-dodgers-los-angeles-rivalry-explained',
    title: 'The A\'s vs. Dodgers Rivalry Explained for New Vegas Fans',
    excerpt: 'Why games against LA carry extra weight and what the history is behind this West Coast matchup.',
    content: `If you are a new Las Vegas Athletics fan who does not have context for the Oakland-Los Angeles dynamic, here is what you need to know before the first Dodgers series.

The Oakland A's and the Los Angeles Dodgers shared California as franchises for over 50 years. They rarely played — they were in different leagues before interleague play — but they existed in a quiet competition for West Coast baseball supremacy. The Giants and the A's had the NorCal identity. The Dodgers had SoCal. The Bay Area and Los Angeles relationship carries cultural weight that goes well beyond baseball.

The Dodgers are the most valuable franchise in baseball and have operated with a payroll that smaller market teams cannot match. The A's, for most of their history in Oakland, operated as a mid-to-low payroll team that competed through player development and front office innovation — the Moneyball era is the most famous expression of this. The David versus Goliath narrative was built into the matchup.

Now the A's are in Vegas and the Dodgers are the defending World Series champions and perennial powerhouses. The games mean something. They mean something because of history and they mean something because of geography — Las Vegas pulls visitors from Southern California who grew up Dodgers fans, and the A's are trying to build a fanbase in a city where those people live.

When the Dodgers come to Allegiant, it is not just a series. Show up early. Wear your green and gold.`,
    date: '2026-03-24',
    category: 'History',
    readTime: 6
  },
  {
    slug: "from-oakland-to-vegas-still-your-team",
    title: "From Oakland to Vegas: Why They're Still My Team No Matter What",
    excerpt: "The emotional journey of a lifelong A's fan through the move. Grief, anger, acceptance, cautious excitement. The identity question every Oakland fan has had to answer.",
    date: "March 23, 2026",
    category: "Community",
    emoji: "💚",
    readingTime: "7 min read",
    content: `
<h2>I Didn't Want to Follow Them</h2>
<p>Let me be honest with you. When John Fisher finally made it official — when the vote happened and the "Las Vegas Athletics" stopped being a nightmare scenario and became just, reality — I wanted to be done. I wanted to be the kind of fan who draws a line in the sand and says: this is where it ends for me. The A's are the Oakland A's. I grew up in Oakland. My dad took me to the Coliseum. I know where section 108 smells like on a cold April night. I was not interested in rooting for a franchise owned by a man who bled the organization dry for two decades and then walked away with a billion-dollar stadium deal in his pocket.</p>

<p>I told myself I was out.</p>

<p>Then April happened. Then I found myself checking the box score anyway.</p>

<h2>The Grief Was Real</h2>
<p>I don't want to skip over this part because I think it matters. The grief that Oakland fans felt — and still feel — is legitimate. It is not melodrama. Baseball is not just a game when you've spent your whole life attached to a specific team in a specific city. The Oakland A's were part of the identity of the East Bay in a way that even the Warriors, for all their success, never quite matched. The Warriors won championships and got shiny arenas and became a global brand. The A's were always just ours. Rickety and underfunded and occasionally brilliant and always somehow still there.</p>

<p>When that ended, something real ended. I know people who haven't watched a game since. I respect that. I understand it. The anger at Fisher is not going away, and it shouldn't. He deserves every bit of it.</p>

<p>But I also know that somewhere along the way, maybe during Sacramento, maybe when I watched Jacob Wilson make a play that reminded me of every reason I love this sport — I stopped being able to stay away.</p>

<h2>The Identity Question</h2>
<p>Here's the thing nobody tells you about following a relocated team: the identity question is genuinely hard. Am I an Oakland A's fan who is grudgingly tagging along to Las Vegas? Am I a Las Vegas Athletics fan now? Am I something in between — a franchise fan rather than a city fan?</p>

<p>I've landed somewhere uncomfortable and honest: I am an Athletics fan. Not an Oakland fan. Not yet a Las Vegas fan. An Athletics fan, which means I am attached to the players and the history and the green and gold and the particular organizational stubbornness that has always defined this franchise. That stubbornness — the Moneyball years, the rotation of mid-market magic, the ability to develop players that bigger organizations somehow miss — that is not something John Fisher can take away. It belongs to the game.</p>

<p>Mason Miller closing out a game in Sacramento with that slider — that is the same feeling I had watching Dennis Eckersley in my childhood. It is the same franchise. Different city. Same soul.</p>

<h2>What Las Vegas Means to Me Now</h2>
<p>I visited Las Vegas last fall. Drove by the stadium site on Tropicana. Stood there looking at the construction and tried to figure out what I felt.</p>

<p>What I felt was complicated. There was something that looked like excitement fighting with something that felt like guilt. The stadium is going to be beautiful. The location is absurd in the best possible Las Vegas way — a jewel-box ballpark at the edge of the Strip, with the neon skyline visible from the upper deck. It is going to be unlike any baseball experience in America. That is real, and I am allowed to feel something about it even while holding onto the grief about Oakland.</p>

<p>The Oakland A's played their last game in a stadium that should have been replaced twenty years earlier, in a city that deserved better ownership, in a market that loved them harder than they were ever loved back. Las Vegas is getting something Oakland earned. That is a complicated truth and I'm not going to pretend it isn't.</p>

<p>But I'm going to be there when they open that stadium. In green and gold. Angry at Fisher and excited about Wilson and trying to reconcile all of it in real time, the way actual fans do.</p>

<h2>You're Still Allowed to Feel All of It</h2>
<p>If you're reading this and you're somewhere in the same gray area — still following the team, still angry about Oakland, not sure what you are now — I want you to know that is a valid place to be. You don't have to resolve it cleanly. You don't have to pick a lane. You are allowed to love the players and hate the circumstances. You are allowed to be excited about Las Vegas and still grieve Oakland.</p>

<p>The A's are still my team. Not because I forgave anyone. Because the game got me again. It always does.</p>

<p>See you at the ballpark. Eventually. Whenever that actually happens.</p>
\${affiliateBlock}
\`,
  },
  {
    slug: "las-vegas-athletics-fan-predictions-2026-season",
    title: "Las Vegas Athletics Fan Predictions for the 2026 Season (Hot Takes Welcome)",
    excerpt: "Win totals, breakout players, biggest question marks, and the moment of the year. Community predictions for the Las Vegas Athletics 2026 season. Drop yours in the comments.",
    date: "March 23, 2026",
    category: "Community",
    emoji: "🔥",
    readingTime: "6 min read",
    content: `
<h2>It's Prediction Season and We're Here for It</h2>
<p>Spring Training is either over or almost over depending on when you're reading this, and you know what that means: it is absolutely time to make predictions that will either age beautifully or haunt us through September. This is the fun part. This is the part where the record is still 0-0 and everything feels possible and you can argue with strangers on the internet about whether your guy is about to break out without any evidence either way.</p>

<p>Here are my 2026 predictions for the Las Vegas Athletics. I'm inviting all of you to drop yours in the comments because the whole point of a fan community is that we're doing this together. Let's get into it.</p>

<h2>Win Total Prediction: 78-84</h2>
<p>I know. I know. That's not exciting. But I think that's where this team actually lands in 2026, and I'd rather be honest about it than pretend we're sneaking into the wild card hunt. The roster is young and the development is real, but the AL West is brutal. Houston is going to win the division again. Texas and Seattle are both better than us right now. We are still a year or two away from the core being ready to compete at that level.</p>

<p>The optimistic case for 84 wins is if Mason Miller stays healthy all year, Jacob Wilson takes the next developmental step, and the rotation holds together longer than anyone expects. The pessimistic case for 78 is if the bullpen falls apart and we're watching guys get stretched in roles they're not ready for by June.</p>

<p>78-84. I'm locking it in. Come at me.</p>

<h2>Breakout Player Prediction: Lawrence Butler</h2>
<p>This is my most confident prediction. Lawrence Butler has the tools that front offices get giddy about — the athleticism, the bat speed, the arm. Last year felt like he was figuring out what he was. This year feels like the year he stops figuring it out and starts just doing it.</p>

<p>I think he hits .275 with 20+ home runs and makes some noise in the AL outfielder conversation by the All-Star break. I think he's going to be the guy new Las Vegas fans point to as "their guy" — the one they discovered before the rest of the country caught on. If you're not watching Lawrence Butler closely this year, that's on you.</p>

<h2>Biggest Question Mark: The Rotation After Miller</h2>
<p>This is where I get nervous. We all know what we have at the back end with Mason Miller. That is settled. What is not settled is what the starting rotation looks like for games 2 through 5 on any given series. The A's have been stockpiling arms and the talent is there, but can they stay healthy? Can one of the young starters emerge as a genuine number two?</p>

<p>If someone in that rotation steps up and gives us 32 starts, 180 innings, and a 3.80 ERA or better, this team competes. If we're cycling guys in and out of the rotation by July, we're watching development games in August while waiting for 2027 to matter.</p>

<p>I'm cautiously optimistic. One guy is going to surprise us. I just don't know which one yet.</p>

<h2>The Moment of the Year</h2>
<p>My prediction for the single moment that defines the 2026 Las Vegas Athletics season: a walk-off win against Houston at Sutter Health Park in Sacramento, late July, in a game that keeps us in wild card contention for at least one more week. Miller on the mound in the ninth, striking out the side, the Sacramento crowd going absolutely insane.</p>

<p>Why this? Because I think this team is going to give us a moment. They always do. Even in the lean years, there's always a stretch where you remember why you signed up for this. And Houston, specifically Houston, is the team that this franchise needs to beat to prove it's building toward something real.</p>

<p>That's my moment. What's yours?</p>

<h2>Hot Take Corner: Jacob Wilson Makes an All-Star Case</h2>
<p>This is the pure hot take section where I go on record saying something that will either make me look brilliant or ridiculous. Here it is: Jacob Wilson is going to make a legitimate All-Star case in 2026. He's not going to get selected because he's a young player on a small-market team that's not in contention, but the numbers are going to be there and the baseball world is going to start paying attention.</p>

<p>He's got that controlled aggression at the plate that reminds me of players who just make contact and find holes and refuse to go away. By August, someone is going to write the article about why he should have been on the All-Star team. I'm saying it now.</p>

<h2>Drop Your Predictions</h2>
<p>Okay — your turn. What's your win total prediction? Who's your breakout player? What's the moment of the year? What's your hot take that you're willing to put on record right now before the season starts?</p>

<p>This is what the community is for. We're all going to be wrong about something. We're all going to be right about something. Let's have the argument now so we can look back at it in October and settle up.</p>

<p>Drop it in the comments. Let's go 2026. Green and gold.</p>
\${affiliateBlock}
\`,
  },
  {
      slug: "las-vegas-as-spring-training-2027-guide",
    title: "Complete Guide to Las Vegas A's Spring Training 2027",
    excerpt: "Everything Vegas fans need to know about the Athletics' 2027 Spring Training: facility locations, tickets, travel, and autograph tips.",
    date: "March 9, 2026",
    category: "Spring Training",
    emoji: "🌵",
    readingTime: "12 min read",
    content: `
<h2>The Desert Connection: From the Strip to the Cactus League</h2>
<p>As the construction of our new jewel-box stadium on the Strip reaches its final stages, Las Vegas A's fans are already looking south for their first taste of the 2027 season. Spring Training in Arizona—the legendary Cactus League—is about to become a mandatory annual pilgrimage for the 702 faithful. For those of us who have spent years watching the desert heat bake the concrete, there's something poetic about seeing our boys of summer gear up in the Arizona sun before heading up Highway 93 to the bright lights of Vegas.</p>

<p>Whether you're a die-hard who followed the team from the East Bay or a new local convert, 2027 is the year to get your desert wings. Here is the definitive guide to everything you need to know about the Vegas A's in Arizona.</p>

<h2>Location: Hohokam Stadium, Mesa</h2>
<p>The A's have called Hohokam Stadium in Mesa their spring home since 2015, and it remains one of the most fan-friendly venues in the Cactus League. Located just about 5 hours from the Las Vegas Strip, it's an easy weekend drive. The facility underwent major renovations recently, ensuring that the player development areas are top-notch while the fan experience remains intimate. You aren't just watching a game here; you're part of the morning workouts, the backfield drills, and the relaxed vibe that only Spring Training can provide.</p>

<h2>Tickets and Planning: Don't Wait</h2>
<p>In the past, you could walk up to Hohokam on a Tuesday and grab a seat behind the dugout. Those days are over. With the Vegas buzz reaching a fever pitch, 2027 tickets are expected to move fast. Season ticket holders get the first crack, but individual game tickets usually go on sale in early January. 
<ul>
  <li><strong>Pro Tip:</strong> Look for "Split-Squad" days. These are days when the roster is split between a home game in Mesa and an away game elsewhere in the valley. The Mesa games are slightly easier to get into and often feature more individual attention from the coaching staff.</li>
</ul>
</p>

<h2>Travel Packages and Where to Stay</h2>
<p>If you're making the trek from Vegas, you have options. Most fans prefer staying in the East Valley (Mesa, Tempe, or Gilbert) to stay close to the complex.
<ul>
  <li><strong>The Hilton Garden Inn Phoenix/Tempe ASU Area:</strong> A favorite for fans who want a balance of stadium proximity and evening entertainment.</li>
  <li><strong>Mesa Riverview:</strong> Plenty of hotel options within a 10-minute rideshare of Hohokam.</li>
</ul>
Multiple local Vegas travel agencies are now offering "A's in AZ" packages that include hotel, tickets, and often a "meet and greet" with a former player. It's the easiest way to ensure you're in the middle of the action without worrying about the logistics.</p>

<h2>What to Expect at the Games</h2>
<p>Spring Training baseball is different. The scores don't count, but the evaluation is everything. In 2027, the focus is squarely on the "Vegas Core"—the young players expected to lead us into the new stadium in 2028. You'll see veterans playing 3-4 innings before being swapped for the high-ceiling prospects we've been reading about. 
<br><br>
The atmosphere is laid back. You'll hear the crack of the bat and the chatter from the dugouts in a way that's impossible at a regular season game. The "Home Run Terrace" at Hohokam is the place to be—grab a blanket, a cold drink, and enjoy the sun while watching the future of Vegas baseball take shape.</p>

<h2>Roster Players to Watch</h2>
<p>Keep your eyes on the pitching staff. The A's have been stockpiling arms, and Spring Training 2027 will be the final proving ground for the rotation that opens the Strip stadium. Look for <strong>Luis Morales</strong> to show off his triple-digit heat and <strong>Jacob Wilson</strong> to continue his path toward being the face of the franchise. These games are your chance to say "I saw him when" before they're icons on Las Vegas Boulevard.</p>

<h2>The Autograph Chase: Tips for Success</h2>
<p>Hohokam is an autograph seeker's paradise if you know the rhythm. The best time isn't after the game; it's during the morning workouts on the practice fields. Fans are allowed to line the fences as players move between drills. 
<ul>
  <li><strong>Be Polite:</strong> A simple "Please" goes a long way. These guys are working, but they appreciate the Vegas support.</li>
  <li><strong>The "Green Hole":</strong> There's a specific area near the clubhouse entrance where players often stop. Arrive at 9:00 AM to stake out your spot.</li>
  <li><strong>Bring Your Own Sharpie:</strong> Don't be "that guy" asking to borrow a pen. Blue is best for baseballs!</li>
</ul>
</p>

<h2>Weather and What to Pack</h2>
<p>Arizona in February and March is beautiful, but it's deceptive. It can be 45 degrees when you head to the backfields at 9:00 AM and 85 degrees by the 7th inning. 
<ul>
  <li><strong>Layers:</strong> A light A's hoodie that you can shed by noon.</li>
  <li><strong>Sunscreen:</strong> The Arizona sun is no joke, even when it's breezy.</li>
  <li><strong>Hat:</strong> Obviously, showing the Vegas A's colors is mandatory, but it also protects your face from the glare.</li>
</ul>
</p>

<h2>The Definitive Vegas Fan Guide</h2>
<p>Spring Training 2027 isn't just a trip; it's a statement. It's Vegas claiming its team before the lights go up at the New Tropicana site. Make the drive. See the future. Let Arizona know that the Athletics Nation is here, and we're bringing the noise from the 702. We've waited a long time for this—don't miss a single pitch of the journey.</p>
${affiliateBlock}
`,
  },
  {
    slug: "every-oakland-as-hall-of-famer-complete-list",
    title: "Every Oakland A's Hall of Famer: The Complete List and Their Stories",
    excerpt: "Honoring the legends of the East Bay. A comprehensive look at every Oakland Athletics Hall of Famer and what they meant to the franchise.",
    date: "March 9, 2026",
    category: "History",
    emoji: "📜",
    readingTime: "12 min read",
    content: `
<h2>The Legacy That Built a Nation</h2>
<p>As we march toward our new era in Las Vegas, it is critical that we carry the weight of our history with us. The Athletics aren't just a expansion team arriving in the desert; we are a storied franchise with roots that run deep into the soil of Oakland. From 1968 to 2024, the East Bay was the stage for some of the greatest individual performances in the history of Major League Baseball. To know where we're going, we have to honor the men who made the Green and Gold iconic.</p>

<p>Here is the complete pantheon—the Oakland A's Hall of Famers who defined greatness and built the legacy that Las Vegas now inherits.</p>

<h2>The Icons of the 1970s Dynasty</h2>
<p>You can't talk about the Oakland A's without starting with the team that conquered the baseball world with three consecutive titles from '72 to '74. They were mustache-wearing, colorful-uniform-sporting rebels who simply refused to lose.</p>

<h3>Reggie Jackson (Class of 1993)</h3>
<p><strong>"Mr. October."</strong> While he earned that nickname in New York, Reggie became a superstar in Oakland. His swagger defined the 70s A's. He won the 1973 AL MVP and was the heartbeat of the championship run. He hit 269 of his 563 career home runs in an A's uniform. Reggie wasn't just a player; he was an event. His presence ensured that the A's were never just another team—they were the show.</p>

<h3>Catfish Hunter (Class of 1987)</h3>
<p>The first big-money free agent in baseball history, but before that, he was the ultimate A's ace. Catfish pitched a perfect game in 1968 (the team's first year in Oakland) and won 20+ games for four straight seasons during the dynasty. He was the definition of "Old School" cool—poised, tactical, and incredibly durable. He stayed with the franchise from 1965 to 1974, bridging the move from Kansas City to the glory years in Oakland.</p>

<h3>Rollie Fingers (Class of 1992)</h3>
<p>The mustache. The slider. The dominance. Rollie redefined the role of the "fireman" (what we now call a closer). He would enter in the 7th or 8th inning and simply shut the door. He was the 1974 World Series MVP and appeared in 16 World Series games for the A's, saving 6 of them. He represented the "rebel" spirit of Oakland—looking unique while playing at an elite level.</p>

<h2>The 1980s Powerhouse and Beyond</h2>
<p>After the 70s, the A's rebuilt into a powerhouse that dominated the late 80s under Tony La Russa, featuring the "Bash Brothers" and a transformed pitching staff.</p>

<h3>Rickey Henderson (Class of 2009)</h3>
<p><strong>"The Greatest of All Time."</strong> Rickey isn't just an Oakland Hall of Famer; he's arguably the greatest leadoff hitter in the history of the sport. The "Man of Steal" grew up in Oakland, played for the A's in four different stints, and holds the all-time records for stolen bases and runs scored. Watching Rickey was like watching a masterclass in disruption. He didn't just play baseball; he manipulated it. His 1990 MVP season remains one of the greatest all-around performances ever seen.</p>

<h3>Dennis Eckersley (Class of 2004)</h3>
<p>If Rollie Fingers redefined the reliever, Eckersley perfected it. Arriving in Oakland as a struggling starter, he was moved to the bullpen by Tony La Russa and became the most dominant closer of his generation. From 1988 to 1992, "The Eck" was virtually untouchable, culminating in a rare Cy Young and MVP double in 1992. His hair, his pointing finger, and his "gas" are forever etched in Oakland lore.</p>

<h3>Tony La Russa (Class of 2014)</h3>
<p>The architect. La Russa managed the A's from 1986 to 1995, leading them to three straight World Series appearances and the 1989 championship. He was a pioneer of modern bullpen management and situational baseball. He brought a professional, intense culture to the Coliseum that demanded excellence. His partnership with Sandy Alderson laid the groundwork for the analytical revolution that would follow.</p>

<h2>The Philadelphia/Kansas City Bridge</h2>
<p>While we focus on the Oakland years, many of our Hall of Famers made their impact across the franchise's journey, but their stories are inseparable from the A's identity.</p>

<h3>Connie Mack (Class of 1937)</h3>
<p>The "Grand Old Man of Baseball." He managed the A's for 50 years. While he never managed in Oakland, he owned and operated the club with a dignity that established the franchise's place in history. His commitment to the A's is the reason the team survived and eventually found its way to the West Coast.</p>

<h3>Jimmie Foxx, Lefty Grove, Mickey Cochrane</h3>
<p>The legends of the 1929-1931 Philadelphia dynasty. While those titles happened in the East, those players' numbers and stories are part of the heritage we celebrate. When we see a "Foxx" jersey at the park today, it's a reminder of a century of excellence.</p>

<h2>What They Meant to the Franchise</h2>
<p>These men provided the "Steel" in Athletics. They fought through small-market constraints, ownership changes, and relocation rumors to deliver championships. They proved that Oakland was a place where stars were born and legends were made. 
<br><br>
As we transition to Las Vegas, these Hall of Famers serve as our North Star. We aren't building from scratch; we're building on the foundation laid by Rickey's speed, Reggie's power, and Eck's precision. When the first pitch is thrown in our new Vegas home in 2028, these men will be there in spirit. They aren't just Oakland's heroes; they are the soul of the Athletics Nation.</p>

<p>If you're new to the club, take some time to watch their highlights. Learn about the mustache squad. Understand why zero people could stop Rickey on the paths. This history is your history now. Honor it.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-athletics-parking-transportation-guide-2028",
    title: "Las Vegas A's Parking and Transportation Guide 2028",
    excerpt: "Navigate the Strip like a pro. Everything you need to know about parking, monorails, and getting to the new Las Vegas Athletics stadium.",
    date: "March 9, 2026",
    category: "Game Day",
    emoji: "🚗",
    readingTime: "12 min read",
    content: `
<h2>The Logistics of a Strip Stadium</h2>
<p>Let's be real: putting a Major League ballpark at the corner of Las Vegas Blvd and Tropicana is a dream for tourism but potentially a nightmare for local logistics. If you've lived in the 702 for more than a minute, you know that "heading to the Strip" requires a plan. When 33,000 fans descend on the New Tropicana site for a Tuesday night game, the "winging it" strategy will result in you missing the first three innings while sitting in a rideshare line on Koval.</p>

<p>Fear not, Athletics Nation. We've done the deep dive into the 2028 infrastructure. Here is your ultimate guide to getting to the game without losing your mind.</p>

<h2>Where to Park: The Garage Game</h2>
<p>Because the stadium footprint is a "jewel-box" 9 acres, there is no traditional massive surface parking lot like the old Coliseum. Instead, we are utilizing the existing vertical infrastructure of the South Strip. 
<ul>
  <li><strong>MGM Grand / New York-New York Garages:</strong> These will be the primary hubs. Expect dynamic pricing here. On game days, you're looking at $30-$50 depending on the matchup. 
  <li><strong>Excalibur & Luxor:</strong> Slightly further walk (10-15 mins) but often $10 cheaper. These are great options if you want to grab a cheaper beer at a local bar before heading into the stadium's premium pricing zone.</li>
  <li><strong>The "Secret" Surface Lots:</strong> There are several private lots located east of the stadium on Tropicana and Koval. These are typically gravel lots that will spring up on game days. They're often faster to exit after the game than the massive garages.</li>
</ul>
<strong>Pro Tip:</strong> Buy your parking in advance via the A's app. If you show up to a garage without a digital pass, you're going to pay a "convenience fee" that isn't very convenient for your wallet.</p>

<h2>The Monorail: Your Secret Weapon</h2>
<p>If you live near a monorail stop or are staying at a property like Sahara, Westgate, or Harrah's, the Las Vegas Monorail is the absolute best way to reach the park. 
<ul>
  <li><strong>The Stop:</strong> Exit at the <strong>MGM Grand Station</strong>. From there, it's a dedicated, climate-controlled pedestrian bridge directly toward the stadium site.</li>
  <li><strong>The Perk:</strong> You bypass every single inch of Tropicana Ave traffic. While thousands of cars are idling, you're gliding over them with a view of the Strip.</li>
</ul>
</p>

<h2>Rideshare: Pickup and Dropoff Zones</h2>
<p>Don't tell your Uber driver to "Drop me at the home plate entrance." They won't be able to get there. The stadium has two massive dedicated rideshare hubs:
<ol>
  <li><strong>North Hub:</strong> Located behind the MGM Grand (off Koval). Ideal for those coming from downtown or the north valley.</li>
  <li><strong>South Hub:</strong> Located near the Mandalay Bay / Luxor connector. Best for those coming from Henderson or the south valley.</li>
</ol>
Expect a "Stadium Surcharge" during peak hours. If you want to save $15, have your driver drop you at a nearby property (like OYO) and walk the last 5 minutes.</p>

<h2>Walking Distance from Major Hotels</h2>
<p>One of the coolest parts of this stadium is the "Walk to the Ballpark" culture.
<ul>
  <li><strong>Luxor/Excalibur:</strong> Directly across the street. This is the heart of the "home team" walk.</li>
  <li><strong>MGM Grand:</strong> 5-minute walk across the pedestrian bridge.</li>
  <li><strong>Park MGM / New York-New York:</strong> 10-minute walk through "The Park." This is the best pre-game vibe, with plenty of outdoor bars and live music.</li>
</ul>
</p>

<h2>Public Transit: The RTC Game Day Express</h2>
<p>The RTC has confirmed they will be running "Athletics Express" buses from several suburban hubs:
<ul>
  <li><strong>Summerlin:</strong> Red Rock Casino hub.</li>
  <li><strong>Henderson:</strong> Green Valley Ranch hub.</li>
  <li><strong>Centennial:</strong> Santa Fe Station hub.</li>
</ul>
These buses drop you off directly at the stadium gates and depart 20 minutes after the final out. It's affordable, social, and saves you the stress of Strip driving.</p>

<h2>Traffic Patterns: The 4:00 PM Crunch</h2>
<p>On weeknight games (7:05 PM first pitch), remember that you are fighting both game traffic AND the late-shift worker rotation. Avoid the I-15 / Tropicana interchange if at all possible. Instead:
<br>1. Exit I-15 at <strong>Russell Rd</strong> and come up from the south.
<br>2. Use <strong>Frank Sinatra Dr</strong> to access the back side of the West-Strip properties.
<br>3. If coming from Henderson, take <strong>Paradise Rd</strong> north and cut over on Reno Ave.</p>

<h2>Final Thought: Embrace the Chaos</h2>
<p>Getting to a game on the Strip is an experience in itself. Leave early, grab a drink at The Park, and enjoy the energy. The walk over the bridge with the Vegas skyline behind you is going to be one of the most iconic sights in baseball. See you at the park!</p>
${affiliateBlock}
`,
  },
  {
    slug: "mason-miller-oakland-closer-to-vegas-ace",
    title: "The Mason Miller Story: From Oakland Closer to Vegas Ace",
    excerpt: "He is the bridge. A deep dive into Mason Miller's journey from a flamethrowing closer in Oakland to the undisputed ace of the Las Vegas Athletics.",
    date: "March 9, 2026",
    category: "Players",
    emoji: "🔥",
    readingTime: "12 min read",
    content: `
<h2>The Man with the Golden Arm</h2>
<p>Every era has its defining figure. In the 70s, it was Reggie. In the 80s, it was Rickey. As the Athletics prepare to take the field in Las Vegas, there is one name that every fan—new and old—needs to know: **Mason Miller**. He is more than just a pitcher; he is the bridge. He's the guy who took the mound in the final, emotionally charged days at the Oakland Coliseum and is now the man being counted on to lead us into the gleaming future on the Strip. This is his story, and why he's the absolute cornerstone of the 2028 era.</p>

<h2>The Oakland Development: Finding the Heat</h2>
<p>Mason Miller wasn't a household name when he first arrived. He was a skinny kid with a mid-90s heater and a lot of questions about his durability. But something clicked in the A's player development system. By the time the 2024 season rolled around, Miller wasn't just throwing hard; he was throwing historic. We're talking 103, 104 mph on a regular basis. He became the "A's closer" at a time when the team needed a hero most. Watching him walk out of the Coliseum bullpen was a religious experience for those of us in the East Bay—a moment of pure, unadulterated power in a season of transition.</p>

<h2>The Closer Stats: Why He's Different</h2>
<p>If you look at his 2024-2025 numbers, they're frankly stupid. A K/9 rate that looks like a video game glitch. A slider that doesn't just break; it disappears. He wasn't just getting saves; he was ending games before they even started. But the A's organization saw something more. They saw a pitcher with a four-pitch mix and a cerebral approach to the game. The decision to move him back into the starting rotation for the Vegas era wasn't just about utility—it was about maximizing the most talented arm this franchise has seen in decades.</p>

<h2>The Bridge from Oakland to Vegas</h2>
<p>Relocation is hard. It's hard for the fans, and it's hard for the players. Mason Miller has handled it with a level of class and poise that has earned the respect of both cities. He acknowledged the pain of the Oakland fans while embracing the energy of the Las Vegas community. When he speaks, you hear a leader. He understands that he's carrying the history of the Green and Gold into a new market. For those of us who grew up in the Coliseum, seeing #17 on the mound in Vegas provides a sense of continuity. He's *our* guy.</p>

<h2>What He Represents for 2028</h2>
<p>Our new stadium on the Strip needs a face. It needs a "Vegas Ace." Mason Miller fits the bill perfectly. He has the "Power-Vegas" energy—flashy, high-stakes, and elite. Imagine a Friday night game under the translucent roof, the lights of the Strip visible through the glass, and Mason Miller throwing 102 mph seeds against the division-rival Astros. That's the vision. He represents the "winning" phase of this relocation. We aren't just moving to be in a new building; we're moving to compete. Miller is the guy who ensures our pitching staff is feared from Day 1.</p>

<h2>The Personal Story: Evolving with the Nation</h2>
<p>Watching Mason revolve has been a journey for the fans. We've seen him handle the "cheapskate" ownership narratives, the stadium drama, and the pressure of being the only All-Star on a rebuilding roster. He never complained. He just went out and threw gas. That grit is what Athletics Nation is all about. Whether you're a third-generation fan or someone who just bought their first hat at the Henderson team store, you can get behind a guy who works this hard.</p>

<h2>The Cornerstone for 2028</h2>
<p>As we look forward to that 2028 Opening Day, Mason Miller is the first name on the scorecard. He is the ace we deserve. He's got the filthiest slider in the league, the fastest heater in the game, and the heart to lead this franchise into its next golden age. 
<br><br>
Las Vegas, meet your ace. Mason Miller isn't just a bridge—he's the destination. Keep those radar guns ready, because the show is just getting started.</p>
${affiliateBlock}
`,
  },

  {
    slug: "welcome-to-lv-athletics-nation",
    title: "Welcome to LV Athletics Nation: Your Home for Las Vegas A's Coverage",
    excerpt: "A manifesto. What this community is, what we believe, and why we built this site for the Las Vegas A's faithful.",
    date: "March 15, 2026",
    category: "Community",
    emoji: "🏟️",
    readingTime: "9 min read",
    content: `
<h2>This Is For Us</h2>
<p>Las Vegas Athletics Nation was built by fans for fans. Not for the front office. Not for the media relations department. Not for the ownership group. For the people who are going to fill the seats at the new stadium on the Strip in 2028, who are watching every pitch in Sacramento right now, and who are already counting down the days until the first pitch in Las Vegas.</p>

<p>This site is our space. The place where we talk about the team honestly, celebrate what is worth celebrating, criticize what deserves criticism, and build the community that every new baseball city needs before it can claim to be a baseball city. Other sports media will cover the A's in Las Vegas with the institutional distance that institutional media requires. This site does not have that distance. We are fans. We care about the outcome. We want this to succeed.</p>

<h2>What We Cover and How We Cover It</h2>
<p>Las Vegas Athletics Nation covers everything about the Las Vegas A's from the perspective of fans who live here and care about what this means for our city. Stadium construction updates. Roster analysis. Farm system development. The community events and outreach programs that the team runs. The sports bar culture that is forming around the franchise. The history of baseball in Las Vegas that predates the A's and informs what the big leagues mean to a city that has been waiting for this.</p>

<p>We cover it with the belief that Las Vegas deserves this team. That belief is not naive -- we understand the complicated history of the franchise's departure from Oakland, we respect the grief of Oakland fans, we are clear-eyed about the ownership situation. But we are not going to apologize for being excited about Major League Baseball coming to our city. The A's are here. That is a good thing. This community exists to make the most of it.</p>

<h2>Respecting Where the Team Came From</h2>
<p>The Oakland Athletics played 56 years in the East Bay. Four World Series championships. The Moneyball dynasty. Rickey Henderson. Reggie Jackson. Catfish Hunter. The history of the franchise in Oakland is genuine and profound, and it belongs to the Las Vegas franchise as much as it belongs to the city that was left behind.</p>

<p>We will not erase Oakland from the story we tell here. We will honor the championships and the players and the decades of baseball that built this franchise into what it is. We will acknowledge that the move hurt real people in a real community and that their grief is legitimate. What we will not do is let that grief define our experience of the Las Vegas era. We inherited something remarkable. We plan to deserve it.</p>

<h2>The Golden City and the Green and Gold</h2>
<p>Las Vegas is already a sports city in ways that were unimaginable fifteen years ago. The Golden Knights. The Raiders. The Aces. The Las Vegas Lights. A city that had no major professional sports franchises in 2016 now has teams in four major leagues. The A's complete that picture and change the scale of what is possible.</p>

<p>Baseball is different from the other sports because of the volume. One hundred sixty-two regular season games. Eighty-one home games. Six months of the schedule. Baseball becomes part of daily life in a way that hockey and football, with their compressed schedules, cannot. Las Vegas is about to have baseball become part of daily life, and Las Vegas Athletics Nation will be here for every day of it.</p>

<h2>What You Can Do Here</h2>
<p>Read the coverage. Share the articles. Argue with us about the roster. Tell us which bars in your neighborhood show the games. Send us your photos from Sacramento. Bring your kids to the community events. Get on the season ticket list. Show up in green and gold.</p>

<p>This is the beginning of something. The stadium opens in 2028. Before then, there is work to do -- community to build, culture to establish, traditions to start. Las Vegas Athletics Nation is part of that work. We are here for all of it.</p>

<p>Welcome. The A's are ours now.</p>
${affiliateBlock}
`,
  },
  {
    slug: "oakland-to-vegas-open-letter-as-fans",
    title: "Oakland to Vegas: An Open Letter to A's Fans Making the Journey With Us",
    excerpt: "For the Oakland fans who are still here, still wearing green and gold, and choosing to believe in the Las Vegas future. This one is for you.",
    date: "March 15, 2026",
    category: "Community",
    emoji: "✉️",
    readingTime: "10 min read",
    content: `
<h2>To the Fans Who Stayed</h2>
<p>This letter is for you. The Oakland fan who went to the Reverse Boycott and wore the "Sell the Team" shirt and cried when the final game ended and then, after some time, decided you were not done with the Athletics. The fan who followed the roster through Sacramento not because you forgave the ownership but because you could not stop loving the players and the game itself. The fan who looked at Las Vegas on the map and thought: maybe this is where the story continues.</p>

<p>You did not betray Oakland by staying. Oakland was betrayed by ownership, not by fans. The love you have for this franchise is yours. You earned it through decades of showing up at the Coliseum when the team was good and when the team was terrible. You earned it by knowing the prospects and following the farm system and arguing about the bullpen. Nobody can take that from you. Not the move. Not John Fisher. Not the new city.</p>

<h2>What Oakland Gave This Franchise</h2>
<p>Everything good about the Las Vegas Athletics was built in Oakland. The Moneyball philosophy that changed how every team in baseball is constructed. The championship tradition -- three consecutive World Series titles from 1972 to 1974, the 1989 title over the Giants. The farm system culture that developed players who could compete against teams spending three times the payroll. The community of fans who showed up year after year and created one of the most knowledgeable, passionate, and wrongly overlooked fan bases in the sport.</p>

<p>Las Vegas inherits all of that. We did not build it. Oakland built it. When we look at the green and gold and feel the weight of the history, that history is from the East Bay. We want to be clear about that because it matters. We are not erasing Oakland. We are carrying it forward to a new chapter that Oakland fans did not choose and many of them wanted no part of.</p>

<h2>We Understand Why Some Left for Good</h2>
<p>Many Oakland fans made the decision that the Las Vegas chapter was not their chapter. They returned the jerseys, canceled the subscriptions, refused to follow a franchise whose ownership had extracted value from their community for twenty years before finally leaving. That choice is understandable. It is more than understandable -- it is morally coherent. The people who left did not stop loving baseball. They stopped loving what this particular business did to their particular city.</p>

<p>If you are reading this and you are still not sure whether to make the journey to Las Vegas with the franchise, nobody here is going to pressure you. The community we are building in Las Vegas will welcome you if you come. We will not resent you if you do not.</p>

<h2>What the Move Means for Community</h2>
<p>The fans who followed the franchise to Las Vegas from Oakland represent something important for the new community being built here. You bring history. You know what the green and gold means at a depth that a brand-new Las Vegas fan cannot access. The casual Las Vegas convert who becomes an A's fan because the stadium is three blocks from their hotel is a valuable member of this fan base. But the fan who was at the 1989 World Series and then followed the team to Las Vegas is carrying something irreplaceable.</p>

<p>Both kinds of fans are welcome in this community. The Oakland history and the Las Vegas future are not competing narratives. They are the same story at different chapters. You can honor one without dismissing the other. This community intends to do exactly that.</p>

<h2>The Future Is Being Built Right Now</h2>
<p>The Las Vegas stadium rising on the Strip is being built partly for you. The 33,000 seats being designed with premium sight lines. The retractable roof keeping the desert heat out so baseball can be played the way it was meant to be played. The natural grass on a retractable field slab. All of it is the future that the franchise has been reaching toward for years.</p>

<p>Oakland deserved a version of this future. Oakland deserved a stadium that was not shared with the Raiders, was not falling apart, did not have sight lines blocked by a football expansion. Oakland deserved John Fisher's investment in a waterfront development that would have been transformative for the city. Oakland did not get what it deserved. Las Vegas is getting what Oakland earned.</p>

<p>The debt is real. The best way to honor it is to make the Las Vegas chapter something worth carrying the history into. Las Vegas Athletics Nation is committed to that. If you are making the journey with us, welcome. The seat is yours.</p>
${affiliateBlock}
`,
  },
  {
    slug: "best-bars-vegas-to-watch-as-games",
    title: "The Best Bars in Vegas to Watch A's Games",
    excerpt: "Where the fan community is gathering in Las Vegas to watch A's games right now -- before the stadium opens, during the Sacramento era, and into the 2028 future.",
    date: "March 15, 2026",
    category: "Fan Scene",
    emoji: "🍺",
    readingTime: "11 min read",
    content: `
<h2>Building the Unofficial Fan Hubs</h2>
<p>Every baseball fan base has its bars. The places that become, through the organic accumulation of regulars and rituals, the unofficial community centers of a sports fandom. Boston has its Fenway neighborhood pubs. Chicago has Wrigleyville. New York has any number of boroughs establishments that have been pouring drinks before Yankees or Mets games for generations.</p>

<p>Las Vegas is building that culture now, in real time, during the Sacramento years, before the stadium opens. The bars where A's fans are gathering today are the bars that will be the "original" spots when the history of Las Vegas A's fandom is written decades from now. Here is where to find them.</p>

<h2>Station Casinos Sports Books: The Backbone of Valley Baseball Watching</h2>
<p>Station Casinos operates the best sports viewing infrastructure for Las Vegas residents outside of a stadium. Red Rock Casino, Green Valley Ranch, Sunset Station, and the other Station properties all feature race and sports books with large screen arrays, comfortable seating, and the operational commitment to showing every game that matters. For A's games, the Station properties are reliable first choices.</p>

<p>Green Valley Ranch Resort in Henderson deserves particular attention. The Henderson market is home to a significant portion of the A's local fan base -- the suburban east valley residents who are building the everyday fan community that will sustain the franchise through its early Las Vegas years. Green Valley Ranch's sports book is one of the best in the valley for watching baseball, with screens sized and positioned for proper game viewing rather than the passive background entertainment that some sports books offer.</p>

<p>If you want to make one Station property your regular A's watching spot, Green Valley Ranch is the recommendation. The atmosphere is right, the screen quality is excellent, and the surrounding food and beverage options give you choices before and after the game.</p>

<h2>PT's Pub: The Neighborhood Standard</h2>
<p>PT's Gold and PT's Pubs are Las Vegas originals. The chain has operated in the valley for decades and represents the local sports bar culture that predates the major league sports era. Multiple valley locations with consistent beer prices, reliable screen coverage, and a clientele that actually watches the game rather than treating it as ambient noise.</p>

<p>The PT's on Flamingo in the central valley and the PT's on Sunset in Henderson both tend to draw baseball crowds when the A's are playing. These are not fancy establishments. They are exactly what you want from a neighborhood sports bar: cold beer, working televisions, and regulars who know the standings. The PT's culture is the backbone of local Las Vegas sports fandom and the A's community is building on top of it.</p>

<h2>Beerhaus at The Park: The Pre-Game Future</h2>
<p>Once the Las Vegas stadium opens on the Strip, the outdoor entertainment district known as The Park -- between New York-New York and the T-Mobile Arena -- will be the natural pre-game destination. Beerhaus at The Park is already a gathering spot for Knights and Raiders fans on game days, and the A's arrival will add another layer to that culture.</p>

<p>Beerhaus is an outdoor bar with an extensive tap list, a solid food menu, and the kind of open-air Las Vegas evening energy that makes a drink before a game feel like the beginning of an event rather than just killing time. It is three minutes from the stadium site. When the A's open their first season on the Strip, Beerhaus will likely be the most prominent pre-game gathering point for fans who arrive early and want to absorb the atmosphere before entering the ballpark.</p>

<h2>The Westgate Sports Book: For the Big Games</h2>
<p>The Westgate SuperBook is the largest sports betting facility in the world by square footage and features a viewing wall that makes watching a game feel like watching it in a theater. For the games that matter most -- a playoff push series, a rivalry game against the Astros or Rangers, the first nationally televised Athletics game of the Las Vegas era -- the Westgate delivers an atmosphere that no neighborhood bar can match.</p>

<p>The Strip pricing applies. A beer at the Westgate costs what a beer costs at an actual stadium. But for the games that deserve the full-scale experience, the investment is worth it. There is something genuinely different about watching a high-stakes baseball game on a screen that covers an entire wall of a 20,000-square-foot room.</p>

<h2>Building Your Regular Spot</h2>
<p>The best bar for A's games is the one where you become a regular. The bartender who knows what you drink. The stool that is yours on Tuesday night games. The group of strangers who became regulars at the same time you did and are now the people you text when something happens in the game.</p>

<p>That culture is forming right now in Las Vegas. The bars where it forms will be the places people talk about when the A's win their first Las Vegas division title. Find your spot. Show up in green and gold. Let the bartender know you are going to be there for every home game. This is how a fan community actually gets built, one bar stool at a time.</p>
${affiliateBlock}
`,
  },
  {
    slug: "las-vegas-as-tailgating-guide",
    title: "Las Vegas A's Tailgating Guide: What We Know So Far",
    excerpt: "The parking situation, the pregame culture, Vegas-style tailgating, and what to expect when the new stadium opens on the Strip in 2028.",
    date: "March 15, 2026",
    category: "Game Day",
    emoji: "🚗",
    readingTime: "10 min read",
    content: `
<h2>Tailgating in Las Vegas Is Going to Be Different</h2>
<p>Traditional baseball tailgating involves a parking lot, a portable grill, a cooler of beer, and a few hours before the gates open. It is a democratic tradition. You pull up, you find your spot, you set up your folding chairs, and you conduct the pre-game ritual that is as much a part of the game day experience as anything that happens inside the stadium.</p>

<p>The Las Vegas Athletics stadium at the former Tropicana site on the Strip is not going to have a traditional tailgating setup. The 9-acre stadium footprint does not include several thousand parking spaces surrounding it the way suburban stadiums do. The Strip location means you are not pulling a pickup truck into lot C and setting up your canopy next to fifty other families doing the same thing. Las Vegas tailgating for the A's is going to require adaptation and creativity, and that is actually fine because Las Vegas is very good at both things.</p>

<h2>What the Parking Situation Actually Looks Like</h2>
<p>The stadium authority and the team have been working on a transportation and parking plan since the site was selected. The confirmed elements so far: casino garage parking in properties adjacent to the stadium, remote lot options on the west side of I-15 with shuttle service, rideshare drop zones on the north and south sides of the stadium perimeter, and RTC bus service from suburban transit hubs in Henderson, Summerlin, and North Las Vegas.</p>

<p>The casino garage option is the closest to traditional stadium parking in terms of the experience: you drive to a structure near the stadium, park, and walk. The difference is that you are parking in a multi-purpose garage that serves the casino, not a stadium-specific lot. Pricing will be dynamic and significantly higher than what fans in other markets pay for surface lot parking at baseball games. Plan for $30 to $50 for close garage parking at popular games, less at remote lots.</p>

<p>The remote lot and shuttle option will be the right call for budget-conscious fans and for anyone who wants to avoid the Strip traffic entirely. Park at a designated lot, take the shuttle, arrive near the front gate without having fought through the intersection of Las Vegas Boulevard and Tropicana. The shuttle adds 15 to 20 minutes to your arrival time but removes the most stressful part of game day logistics.</p>

<h2>The Strip Pre-Game: Vegas-Style Tailgating</h2>
<p>Traditional tailgating involves bringing your own food and drink to the parking lot. Las Vegas pre-game culture is going to look more like the scene outside a Raiders game at Allegiant -- the hotels and bars and restaurants in the surrounding corridor become the tailgate zone. The Park entertainment district, the casino properties adjacent to the stadium, the outdoor spaces at Excalibur and New York-New York -- all of these will function as the fan gathering space that parking lot tailgating serves in other markets.</p>

<p>This is not worse than traditional tailgating. It is different and it is in some ways better. Instead of food from your own cooler, you have access to the full Las Vegas food and beverage ecosystem. Instead of a parking lot in a suburban field, you are on the most entertainment-dense stretch of real estate in the world. The pre-game experience at a Las Vegas A's game is going to feel like a Las Vegas night out with a baseball game at the end of it, which is an elevated version of the tailgate experience rather than a diminished one.</p>

<h2>What Traditional Tailgaters Should Know</h2>
<p>If you are committed to the parking lot grill experience, there are options. Private lot operators will set up tailgate-friendly spaces near the stadium in the surrounding blocks. Expect to pay for the space, expect it to be more expensive than what you pay at a suburban park, and expect the logistics to require more advance planning than showing up and finding a spot.</p>

<p>The Las Vegas Convention Center district, roughly half a mile from the stadium, has been discussed as a potential remote tailgate zone with shuttle service. This would provide a more traditional setup -- flat surface lots with space for grills and canopies -- for fans who want the classic experience and do not mind the shuttle ride.</p>

<h2>The Tailgate Scene That Does Not Exist Yet</h2>
<p>Here is the honest truth about Las Vegas A's tailgating in 2028: nobody knows exactly what it is going to look like because it has not happened yet. The culture that forms around the pregame experience at the new stadium will be determined by the fans who show up first and establish what works. If a group of regulars stakes out a section of casino property and turns it into the de facto A's pre-game spot, that spot becomes part of the culture. If the remote lot shuttle option works well and fans start treating it as a social event, that becomes a tradition.</p>

<p>Las Vegas Athletics Nation will document all of it as it develops. The first season on the Strip in 2028 is going to be a discovery process for everyone. Come prepared to be flexible, come prepared to explore, and come prepared to help build something that does not exist yet. That is what a new sports city does.</p>
${affiliateBlock}
`,
  },
  {
    slug: "rivalries-reborn-as-fit-al-west-from-las-vegas",
    title: "Rivalries Reborn: How the A's Fit Into the AL West From Las Vegas",
    excerpt: "The Astros, Angels, Mariners, and Rangers: how the AL West rivalry dynamics change when the A's are playing from Las Vegas, and what each matchup means for the fan community.",
    date: "March 15, 2026",
    category: "Rivalries",
    emoji: "⚔️",
    readingTime: "11 min read",
    content: `
<h2>The Division That Never Gets Easier</h2>
<p>The American League West is the division Las Vegas inherited when the Athletics arrived. It is not a comfortable division to inhabit if you are a rebuilding franchise. The Houston Astros have won six division titles in the last eight years and appeared in three World Series. The Texas Rangers won the 2023 championship. The Seattle Mariners have playoff talent. The Los Angeles Angels have wasted a decade of Mike Trout's career but still carry the resources to be dangerous in the right moment.</p>

<p>The A's fit into this division as the team that everybody should be able to beat and that periodically beats everybody anyway. That has been the Oakland role in the AL West for the last decade, and it is the Las Vegas role now. What changes with the relocation is the geography and the fan dynamics of each rivalry. Here is how each matchup looks from a Las Vegas community perspective.</p>

<h2>Houston Astros: The Rivalry That Defines Everything</h2>
<p>The Houston Astros are the AL West's dominant franchise. They are also the team that Las Vegas fans most need to beat to establish the Athletics as a legitimate competitor rather than a divisional doormat. The Astros' success has been built on player development, analytics, and an organizational depth that the A's have historically matched in philosophy if not in financial resources.</p>

<p>The A's have beaten Houston in individual series regularly even during their rebuilding phases. The matchup when the A's rotation lines up favorably -- particularly when Mason Miller is available out of the bullpen to close games the starting pitching keeps competitive -- is not a foregone conclusion. Houston has vulnerabilities that the A's analytical approach is well-suited to exploit.</p>

<p>For Las Vegas fans, the Astros series will be the series that matters most in terms of establishing the franchise's competitive identity. A split series against Houston in May is worth celebrating. A series win at the new Strip stadium in 2028 will be a moment that defines the early Las Vegas era.</p>

<h2>Los Angeles Angels: The California Corridor Becomes Nevada</h2>
<p>The Oakland-Angels rivalry was always a California affair -- two west coast cities separated by the Bay and the agricultural valleys between them. The Las Vegas-Angels matchup is now a Nevada-California border rivalry with genuinely different geography. Las Vegas fans heading to Anaheim for road games are making a four-hour drive through the Mojave rather than a two-hour drive down Interstate 580.</p>

<p>The Angels have been the division's most disappointing franchise for the last decade, consistently unable to build a complete team around the generational talent of Mike Trout and, for several seasons, Shohei Ohtani. With both players gone or aging, the Angels are rebuilding with young arms and thin offense. For the A's in 2026, the Angels represent a favorable matchup -- a team at roughly the same organizational stage without the draft position advantages that the A's have accumulated.</p>

<p>The Las Vegas-Anaheim series will draw California-based A's fans who make the drive. It will also draw Las Vegas fans who have historically identified with California sports teams and are now converting to local allegiance. The Angels series, more than any other, represents the competition for the identity of A's fans in Southern Nevada who grew up following California franchises.</p>

<h2>Seattle Mariners: The Northwest vs. the Desert</h2>
<p>Seattle and Oakland were always the two West Coast cities in the AL West most similar in character -- mid-sized, tech-influenced, baseball-serious in a way that Los Angeles's casual relationship with the Dodgers and Angels never quite matched. The Oakland-Seattle rivalry had a genuine Pacific Northwest vs. Bay Area quality that the Las Vegas version of this rivalry cannot replicate.</p>

<p>What replaces it is the competition between two franchises with similar organizational philosophies. Both the A's and the Mariners are building through development rather than spending. Both have invested heavily in pitching development. Both are trying to compete with the Astros and Rangers without matching their payrolls. The head-to-head results between the two organizations will be one of the clearest measures of which development approach is working better.</p>

<p>The Mariners have Julio Rodriguez as their franchise cornerstone. The A's have Jacob Wilson and Lawrence Butler developing into their Las Vegas cornerstones. Watching those players go head-to-head in a division series, starting in 2026 and developing toward the 2028 Vegas stadium era, is one of the more compelling subplot storylines in the AL West.</p>

<h2>Texas Rangers: The Champion's Target on Their Back</h2>
<p>The Texas Rangers won the 2023 World Series. They are a team that the A's and every other organization in the AL West is chasing. For Las Vegas fans, the Rangers represent something specific: the model of how a franchise that was rebuilding can arrive at a championship when the young core matures and the front office makes the right moves at the right time.</p>

<p>The A's organizational comparison to the Rangers is imperfect -- Texas has more financial resources and a more established market. But the pathway from deliberate rebuilding through development to championship contention is the one the Athletics are trying to travel, and Texas is proof that the journey can be completed. When Las Vegas beats Texas, it is a statement about where the franchise is heading. When Texas beats Las Vegas easily, it is a reminder of how much work remains.</p>

<h2>What Las Vegas Changes About All of These Rivalries</h2>
<p>The geography of the AL West now includes Nevada. Road trips to Las Vegas for the Astros, Angels, Mariners, and Rangers mean something different than road trips to Oakland. Las Vegas as a destination adds a layer to every series that visiting fans and players will feel differently than they felt arriving at the Oakland Coliseum.</p>

<p>Visiting teams will bring fans who are traveling to Las Vegas for the full experience -- the game is one piece of a weekend trip rather than the only reason to make the drive. The home atmosphere at the new Las Vegas stadium will be shaped by that tourist dynamic in ways that every other AL West park is not. These are the rivalries being built now, before the first pitch is thrown on the Strip. They will be defined by what happens on the field over the next decade.</p>
${affiliateBlock}
`,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
