import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Las Vegas Athletics Fan Gear Guide 2026: Where to Buy | LV Athletics Nation",
  description: "The complete guide to Las Vegas Athletics fan gear in 2026. Official stores, best jerseys, vintage Oakland gear, and where to find it all.",
};
export default function FanGearPage() {
  const G = "#EFB21E";
  return (
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"#F0F0F0",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #1a1a1a",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#F0F0F0",textDecoration:"none"}}> LV Athletics Nation</Link>
        <Link href="/blog" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>FAN GEAR GUIDE 2026</div>
        <h1 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Las Vegas Athletics Fan Gear: The Complete Guide</h1>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.6)",lineHeight:1.8,marginBottom:40}}>From official Las Vegas jerseys to vintage Oakland throwbacks — where to find the gear that fits who you are as a fan.</p>
        {[
          {h:"Official Las Vegas A's Gear",b:"The Athletics team store at Allegiant Stadium carries the official Las Vegas-specific merchandise — hats, jerseys, and apparel with the LV logo and the Las Vegas wordmark. The online team store ships nationwide. These are the pieces that signal you are here for the new chapter, the Las Vegas era. The gold and green looks sharp in the Nevada light."},
          {h:"The Oakland Throwback Market",b:"A significant portion of the A's fanbase came to Las Vegas carrying decades of Oakland history. The vintage and throwback market for Oakland A's gear — the Rickey Henderson era, the Bash Brothers era, the Moneyball era — is active and growing. Platforms like eBay and StockX carry authenticated vintage pieces. Some fans wear both: Oakland throwback at home, Las Vegas hat at the stadium. Both are valid."},
          {h:"Best Jerseys to Own in 2026",b:"For the current roster: pick a player who is going to be here for the next three to five years, not a rental. Jersey investing in a franchise rebuilding year means betting on development. The safest picks are the core rotation arms and the young positional players the organization has committed to. Their names will be on the back of winning jerseys eventually."},
          {h:"Gear for Kids",b:"The team has a solid kids line — smaller sizes of the official jerseys, hats that actually fit young heads, and a few game-day experience items. Bringing a kid to their first game in their team gear is a memory that sticks. The team store at the stadium has options same-day if you forgot."},
          {h:"Customization",b:"The official team store allows jersey customization with your name or a player name and number. Turnaround is typically two to three weeks. Order before opening day if you want it for the first homestand. A customized jersey with your own name is absurd and great and deeply on brand for Las Vegas."},
        ].map(s => (
          <div key={s.h} style={{marginBottom:36,paddingBottom:36,borderBottom:"1px solid #1a1a1a"}}>
            <h2 style={{fontSize:20,fontWeight:800,marginBottom:10}}>{s.h}</h2>
            <p style={{color:"rgba(255,255,255,0.65)",lineHeight:1.8,fontSize:16,margin:0}}>{s.b}</p>
          </div>
        ))}
        <div style={{marginTop:24}}><Link href="/blog" style={{color:G,fontWeight:700,textDecoration:"none"}}>← More from LV Athletics Nation</Link></div>
      </div>
    </div>
  );
}
