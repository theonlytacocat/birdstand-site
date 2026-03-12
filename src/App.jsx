import { useState, useEffect } from "react";

const BIRDS = [
  { name: "Sweet Pea", species: "Male Eclectus Parrot", emoji: "🦜", color: "#2d7a2d", note: "A guest favorite — you'll know why the moment you meet her." },
  { name: "Bomber", species: "Female Blue & Gold Macaw", emoji: "🦜", color: "#1a5fa8", note: "Bold, beautiful, and loves a good pose." },
  { name: "Mai Tai", species: "Catalina Macaw", emoji: "🦜", color: "#c45c1a", note: "Vibrant colors that stop people in their tracks." },
  { name: "AJ", species: "Male Scarlet Macaw", emoji: "🦜", color: "#b52020", note: "Striking red — the one that ends up in the center of every shot." },
  { name: "Petey", species: "Moluccan Cockatoo", emoji: "🐦", color: "#c8856b", note: "Gentle and social. Great with kids." },
  { name: "Lani", species: "Blue Hyacinth Macaw", emoji: "🦜", color: "#2a3a9a", note: "One of the largest parrots in the world — and surprisingly calm." },
  { name: "Lizzy", species: "Cockatoo", emoji: "🐦", color: "#b0a070", note: "Sweet-natured and endlessly photogenic." },
  { name: "Dozer", species: "Sulcata Tortoise · Born 2004", emoji: "🐢", color: "#8a6a2a", note: "Presumed dead after the Lahaina fire — found alive a month later with burns on his face and legs. Fully recovered. The definition of a survivor." },
];

const REVIEWS = [
  { name: "Teresa F.", loc: "Santa Barbara, CA · Aug 2025", text: "The birds are rescues. The owners are kind and professional. The pictures are our favorite souvenirs. Highly recommend." },
  { name: "Julie D.", loc: "TripAdvisor · Apr 2025", text: "We spent 45 minutes getting to hold them. It was truly a highlight of our trip in Kihei. An absolute must." },
  { name: "Sa F.", loc: "Annual visitor since 1996", text: "Visiting has been an almost annual tradition since 1996. So happy to see they saved the birds and are still going strong." },
  { name: "Steve Z.", loc: "50-year Maui visitor", text: "Always a picture at the Bird Stand. These pictures always bring back the memory of that special time. The best value you'll find on the island." },
  { name: "Mary G.", loc: "Dallas, TX · 10-year tradition", text: "We've had our pictures taken for the past 10 years. It's been a fun way to chronicle our growing family — the parrot photo is always the best of the trip." },
  { name: "Claire P.", loc: "10–12 sessions over the years", text: "My family has had maybe 10–12 sessions. We always have wonderful experiences with gorgeous pictures that bring us back to our time together on the island." },
];

export default function LahainaBirdStand() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveReview(i => (i + 1) % REVIEWS.length), 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Setmore requires its script to be loaded into the DOM dynamically
    // A JSX <script> tag is ignored by React — this is the correct approach
    const script = document.createElement("script");
    script.id = "anywhere_book_now_script";
    script.src = "https://assets.setmore.com/integration/book-now/live/v1/anywhere-book-now.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existing = document.getElementById("anywhere_book_now_script");
      if (existing) existing.remove();
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const S = {
    gold: "#c8923a",
    green: "#0d1f0f",
    greenMid: "#0f240f",
    greenDark: "#050f05",
    cream: "#f5ede0",
    muted: "rgba(245,237,224,0.6)",
    faint: "rgba(245,237,224,0.35)",
    goldBorder: "rgba(200,146,58,0.25)",
    goldBg: "rgba(200,146,58,0.06)",
    serif: "'Playfair Display', serif",
    sans: "'Lato', sans-serif",
  };

  return (
    <div style={{ fontFamily: S.sans, background: S.green, color: S.cream, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }
        .btn { display: inline-block; font-family: 'Lato', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; cursor: pointer; border: none; transition: all 0.25s ease; }
        .btn-gold { background: #c8923a; color: #050f05; padding: 14px 36px; }
        .btn-gold:hover { background: #dda84a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,146,58,0.3); }
        .btn-ghost { background: transparent; color: #c8923a; border: 1.5px solid #c8923a; padding: 13px 34px; }
        .btn-ghost:hover { background: #c8923a; color: #050f05; }
        .nav-link { font-family: 'Lato', sans-serif; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(245,237,224,0.75); cursor: pointer; transition: color 0.2s; }
        .nav-link:hover { color: #c8923a; }
        .bird-card { border: 1px solid rgba(200,146,58,0.15); padding: 28px 20px; text-align: center; transition: all 0.3s; background: rgba(255,255,255,0.015); }
        .bird-card:hover { border-color: #c8923a; background: rgba(200,146,58,0.06); transform: translateY(-4px); }
        .info-pill { display: flex; align-items: flex-start; gap: 14px; padding: 16px 0; border-bottom: 1px solid rgba(245,237,224,0.06); }
        .info-pill:last-child { border-bottom: none; }
        .pkg { border: 1px solid rgba(200,146,58,0.2); padding: 36px 28px; transition: all 0.3s; }
        .pkg:hover { border-color: #c8923a; }
        .pkg-featured { border-color: #c8923a; background: rgba(200,146,58,0.06); }
        input, textarea, select { width: 100%; padding: 11px 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(200,146,58,0.25); color: #f5ede0; font-family: 'Lato', sans-serif; font-size: 14px; outline: none; transition: border-color 0.2s; appearance: none; border-radius: 0; }
        input:focus, textarea:focus, select:focus { border-color: #c8923a; }
        input::placeholder, textarea::placeholder { color: rgba(245,237,224,0.3); }
        select option { background: #0d1f0f; color: #f5ede0; }
        label { display: block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: rgba(245,237,224,0.4); margin-bottom: 6px; }
        .field { margin-bottom: 16px; }
        @keyframes heroIn { from { opacity:0; transform: translateY(28px); } to { opacity:1; transform: translateY(0); } }
        .h1 { animation: heroIn 0.9s ease forwards; }
        .h2 { animation: heroIn 0.9s 0.25s ease forwards; opacity:0; }
        .h3 { animation: heroIn 0.9s 0.5s ease forwards; opacity:0; }
        .h4 { animation: heroIn 0.9s 0.75s ease forwards; opacity:0; }
        .divider { width: 48px; height: 2px; background: #c8923a; margin: 14px auto 36px; }
        .warning-banner { background: rgba(200,146,58,0.12); border: 1px solid rgba(200,146,58,0.35); padding: 14px 20px; display: flex; align-items: center; gap: 12px; }
        @media (max-width: 700px) {
          .hide-mobile { display: none !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .hero-h { font-size: 46px !important; }
          .stats-row { gap: 24px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: "rgba(5,15,5,0.96)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${S.goldBorder}`, height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px" }}>
        <div onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
          <div style={{ fontFamily: S.serif, fontSize: 17, fontWeight: 700, color: S.gold }}>Lahaina Bird Stand</div>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: S.faint, marginTop: 2 }}>Kihei · Maui · Est. 1985</div>
        </div>
        <div className="hide-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["experience","Experience"],["birds","The Birds"],["book","Book"],["our-story","Our Story"]].map(([id, label]) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</span>
          ))}
          <button className="btn btn-gold" onClick={() => scrollTo("book")} style={{ padding: "9px 22px", fontSize: 11 }}>Book Now</button>
        </div>
        <button className="btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", color: S.cream, fontSize: 22, display: "none" }} id="hamburger">☰</button>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #071507 0%, #122812 50%, #0a1e0a 100%)" }} />
        <div style={{ position: "absolute", right: -80, top: "5%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,146,58,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -120, bottom: 0, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,100,30,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
          <div className="h1" style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 20 }}>
            ✦ &nbsp;South Maui Gardens · Kihei, Hawaii&nbsp; ✦
          </div>
          <h1 className="h2 hero-h" style={{ fontFamily: S.serif, fontSize: 68, fontWeight: 900, lineHeight: 1.06, marginBottom: 24 }}>
            40 Years of<br /><em style={{ color: S.gold }}>Aloha</em> in Every Feather
          </h1>
          <p className="h3" style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: S.muted, maxWidth: 560, margin: "0 auto 36px" }}>
            Hold, pose with, and fall in love with the most extraordinary flock in Maui. A beloved island tradition — survived the fire, rebuilt with aloha, and still going strong.
          </p>
          <div className="h4" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <button className="btn btn-gold" onClick={() => scrollTo("book")}>Book Your Experience</button>
            <button className="btn btn-ghost" onClick={() => scrollTo("our-story")}>Our Story</button>
          </div>
          <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[["40+","Years in Maui"],["14+","Rescue Birds"],["229","TripAdvisor Reviews"],["4.2★","Rated"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: S.serif, fontSize: 30, fontWeight: 700, color: S.gold }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: S.faint, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "90px 32px", background: S.greenMid }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>What to Expect</div>
            <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700 }}>The Experience</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: S.muted, marginBottom: 20 }}>
                Barrie and David have spent over four decades building real, trusting relationships with their birds. When you visit, you're not watching a performance — you're stepping into their world.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: S.muted, marginBottom: 32 }}>
                You'll hold macaws, cockatoos, and parrots while Barrie and David guide you through every pose. All photos are taken on <strong style={{ color: S.cream, fontWeight: 400 }}>your own phone or camera</strong> — no waiting, no mailing, no surprises.
              </p>

              {/* PAYMENT WARNING */}
              <div className="warning-banner" style={{ marginBottom: 28 }}>
                <span style={{ fontSize: 18 }}>💵</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, color: S.gold, marginBottom: 4 }}>Cash & Venmo Only</div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: S.muted }}>Cards are not accepted. Please plan accordingly.</div>
                </div>
              </div>

              <div>
                {[
                  ["📍","35 Auhana Rd, Kihei · South Maui Gardens"],
                  ["🕙","Mon–Fri · 10:30 AM – 2:00 PM"],
                  ["📅","Saturdays by appointment only · Closed Sundays"],
                  ["📞","(808) 385-8502"],
                  ["💵","Cash & Venmo only · No cards"],
                ].map(([icon, text]) => (
                  <div key={text} className="info-pill">
                    <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 300, color: S.muted, lineHeight: 1.6 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 24 }}>
                {[
                  ["Hold the birds", "Get them on your hands, shoulders, even your head."],
                  ["Unlimited photos", "On your own camera or phone — take as many as you want."],
                  ["Learn their stories", "Every bird has a name, a history, and a personality."],
                  ["Meet Dozer", "Our Sulcata tortoise — presumed dead after the fire, found alive a month later. Now fully recovered and thriving."],
                  ["Ethical & loving care", "All birds are rescues. They are treated like family."],
                  ["Families return for decades", "Many guests have been coming every year for 20–30 years."],
                ].map(([title, desc]) => (
                  <div key={title} style={{ padding: "18px 20px", border: `1px solid ${S.goldBorder}`, marginBottom: 10, background: S.goldBg }}>
                    <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: S.cream, marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: S.muted, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: "80px 32px", background: S.green }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>Pricing</div>
            <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700 }}>Packages</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
            {[
              { name: "Classic Experience", price: "$50", duration: "~30 min · per group", featured: false, features: ["Meet & hold the birds", "Unlimited photos on your camera", "Guided posing by Barrie & David", "Learn each bird's name and story"] },
              { name: "Extended Experience", price: "$100", duration: "~60 min · per group", featured: true, features: ["Everything in Classic", "More time with the full flock", "Ideal for families & groups", "Meet Dozer the tortoise"] },
            ].map(pkg => (
              <div key={pkg.name} className={`pkg ${pkg.featured ? "pkg-featured" : ""}`}>
                {pkg.featured && <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>Most Popular</div>}
                <div style={{ fontFamily: S.serif, fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{pkg.name}</div>
                <div style={{ fontSize: 12, color: S.faint, marginBottom: 20 }}>{pkg.duration}</div>
                <div style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700, color: S.gold, marginBottom: 22 }}>{pkg.price}</div>
                {pkg.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 13, fontWeight: 300, color: S.muted }}>
                    <span style={{ color: S.gold, flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
                <button className="btn btn-gold" onClick={() => scrollTo("book")} style={{ width: "100%", marginTop: 22, textAlign: "center" }}>Book This Package</button>
              </div>
            ))}
          </div>
          <div className="warning-banner">
            <span style={{ fontSize: 18 }}>💵</span>
            <div style={{ fontSize: 13, fontWeight: 300, color: S.muted }}>
              <strong style={{ color: S.gold, fontWeight: 700 }}>Reminder: cash and Venmo only.</strong> No card payments accepted. ATMs are available nearby.
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 12, color: S.faint, fontStyle: "italic" }}>
            All prices are <strong style={{ color: S.cream, fontWeight: 400 }}>per group, not per person</strong> — bring the whole family. Donations are always welcome as Barrie & David continue rebuilding after the 2023 Lahaina fire.
          </p>
        </div>
      </section>

      {/* MEET THE BIRDS */}
      <section id="birds" style={{ padding: "90px 32px", background: "#091409" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>The Flock</div>
            <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700 }}>Meet the Birds</h2>
            <div className="divider" />
            <p style={{ fontSize: 15, fontWeight: 300, color: S.muted, maxWidth: 480, margin: "0 auto" }}>Every bird has a name, a history, and a personality. Most are rescues who have been with Barrie and David for years.</p>
          </div>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {BIRDS.map(bird => (
              <div key={bird.name} className="bird-card">
                <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 14px", background: bird.color + "22", border: `2px solid ${bird.color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
                  {bird.emoji}
                </div>
                <div style={{ fontFamily: S.serif, fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{bird.name}</div>
                <div style={{ fontSize: 11, letterSpacing: 0.5, color: S.gold, marginBottom: 10 }}>{bird.species}</div>
                <div style={{ fontSize: 12, fontWeight: 300, color: S.muted, lineHeight: 1.6 }}>{bird.note}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, padding: "36px 40px", border: `1px solid ${S.goldBorder}`, background: S.goldBg, textAlign: "center" }}>
            <div style={{ fontFamily: S.serif, fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Meets Animal Welfare Guidelines</div>
            <p style={{ fontSize: 14, fontWeight: 300, color: S.muted, maxWidth: 560, margin: "0 auto" }}>
              These birds are family, not props. They are rescues raised with genuine love and care over four decades. Multiple bird welfare organizations have recognized their living conditions and quality of care.
            </p>
          </div>
        </div>
      </section>

      {/* ROTATING REVIEWS */}
      <section style={{ padding: "80px 32px", background: S.greenMid }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>What Guests Say</div>
          <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700, marginBottom: 0 }}>A Maui Tradition</h2>
          <div className="divider" />
          <div style={{ minHeight: 160, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: S.serif, fontSize: 20, fontStyle: "italic", lineHeight: 1.7, color: S.cream, marginBottom: 20 }}>
              "{REVIEWS[activeReview].text}"
            </p>
            <div style={{ fontSize: 12, letterSpacing: 1, color: S.gold }}>{REVIEWS[activeReview].name}</div>
            <div style={{ fontSize: 11, color: S.faint, marginTop: 4 }}>{REVIEWS[activeReview].loc}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
            {REVIEWS.map((_, i) => (
              <div key={i} onClick={() => setActiveReview(i)} style={{ width: i === activeReview ? 24 : 8, height: 8, borderRadius: 4, background: i === activeReview ? S.gold : S.goldBorder, cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" style={{ padding: "90px 32px", background: S.green }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>Reserve Your Spot</div>
            <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700 }}>Book Now</h2>
            <div className="divider" />
            <p style={{ fontSize: 14, fontWeight: 300, color: S.muted, lineHeight: 1.7 }}>
              Call us directly at <a href="tel:8083858502" style={{ color: S.gold }}>‪(808) 385-8502‬</a> or fill out the form below and we'll confirm your time within 24 hours.
            </p>
          </div>

          <div style={{ border: `1px solid ${S.goldBorder}`, padding: "48px 32px", textAlign: "center", background: S.goldBg }}>
            <div style={{ fontSize: 44, marginBottom: 20 }}>🦜</div>
            <div style={{ fontFamily: S.serif, fontSize: 26, fontWeight: 700, marginBottom: 12 }}>Ready to Meet the Flock?</div>
            <p style={{ fontSize: 14, fontWeight: 300, color: S.muted, lineHeight: 1.8, maxWidth: 420, margin: "0 auto 32px" }}>
              Click below to choose your date and time. You'll receive an instant confirmation automatically.
            </p>
            <button
               className="btn btn-gold"
               onClick={() => window.open("https://thebirdstand.setmore.com", "_blank", "width=900,height=700")}
               style={{ fontSize: 12, padding: "16px 48px", letterSpacing: "2.5px" }}
            >
              Book Now
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["📞", "Prefer to call?", "(808) 385-8502"],
                ["💵", "Payment on arrival:", "Cash & Venmo only — no cards"],
                ["📍", "Location:", "35 Auhana Rd, Kihei · South Maui Gardens"],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "center", gap: 10, fontSize: 13, fontWeight: 300, color: S.muted }}>
                  <span>{icon}</span>
                  <span><strong style={{ color: S.cream, fontWeight: 400 }}>{label}</strong> {val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="our-story" style={{ padding: "90px 32px", background: S.greenMid }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: S.gold, marginBottom: 14 }}>40 Years & Still Standing</div>
            <h2 style={{ fontFamily: S.serif, fontSize: 44, fontWeight: 700 }}>Our Story</h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 60 }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: S.muted, marginBottom: 20 }}>
                Barrie Matthews and David Vanzo started the Lahaina Bird Stand in 1985 on Front Street in Lahaina. For nearly four decades, they became a fixture of Maui — families visited year after year, and generations grew up getting their photo taken with the flock.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: S.muted }}>
                On August 8, 2023, the Lahaina wildfire destroyed their business, their home, and nearly everything they had built over a lifetime. They escaped with the clothes on their backs — and every single bird.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: S.muted, marginBottom: 20 }}>
                After a year of rebuilding — navigating Maui's devastated housing market, establishing a new aviary, and earning their way back — Barrie and David found a home at South Maui Gardens in Kihei.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: S.muted }}>
                The birds are settled. The flock is whole. The tradition that has meant so much to so many people — including families who have visited every year for 50 years — is alive again.
              </p>
            </div>
          </div>

          {/* TIMELINE */}
          <div style={{ borderLeft: `2px solid ${S.goldBorder}`, paddingLeft: 28, marginBottom: 60 }}>
            {[
              ["1985", "Lahaina Bird Stand opens on Front Street, Lahaina"],
              ["1990s–2010s", "Becomes a multigenerational tradition for thousands of Maui families"],
              ["Aug 8, 2023", "Lahaina wildfire destroys the business, their home, and most of their belongings — all birds survive"],
              ["2024", "New aviary established; Barrie and David find housing in Kihei"],
              ["2024–present", "Relocated to South Maui Gardens, 35 Auhana Rd, Kihei — open and ready for visitors"],
            ].map(([year, event]) => (
              <div key={year} style={{ marginBottom: 24, position: "relative" }}>
                <div style={{ position: "absolute", left: -36, top: 3, width: 10, height: 10, borderRadius: "50%", background: S.gold }} />
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: S.gold, marginBottom: 4 }}>{year}</div>
                <div style={{ fontSize: 14, fontWeight: 300, color: S.muted, lineHeight: 1.6 }}>{event}</div>
              </div>
            ))}
          </div>

          {/* DONATE */}
          <div style={{ padding: "44px 40px", border: `1px solid ${S.goldBorder}`, background: S.goldBg, textAlign: "center" }}>
            <div style={{ fontFamily: S.serif, fontSize: 24, fontWeight: 700, marginBottom: 14 }}>Support the Rebuild</div>
            <p style={{ fontSize: 14, fontWeight: 300, color: S.muted, maxWidth: 500, margin: "0 auto 26px", lineHeight: 1.75 }}>
              Barrie, David, and the birds lost everything in the Lahaina fire. Your visit helps. Your donation helps more. The GoFundMe has raised nearly $49,000 — every contribution makes a difference.
            </p>
            <a href="https://www.gofundme.com/f/lahaina-bird-stand" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-gold">Make a Donation</button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: S.greenDark, borderTop: `1px solid ${S.goldBorder}`, padding: "56px 32px 36px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 44 }}>
            <div>
              <div style={{ fontFamily: S.serif, fontSize: 18, fontWeight: 700, color: S.gold, marginBottom: 6 }}>Lahaina Bird Stand</div>
              <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: S.faint, marginBottom: 14 }}>Est. 1985</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: S.faint, lineHeight: 1.7 }}>A beloved Maui tradition — rebuilt with aloha at South Maui Gardens in Kihei, Hawaii.</p>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: S.faint, marginBottom: 14 }}>Visit Us</div>
              {["35 Auhana Rd, Kihei, HI 96753","South Maui Gardens","Mon–Fri · 10:30 AM – 2:00 PM","Sat · By appointment · Sun Closed","Cash & Venmo only"].map(t => (
                <div key={t} style={{ fontSize: 13, color: S.faint, marginBottom: 8, fontWeight: 300 }}>{t}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: S.faint, marginBottom: 14 }}>Contact</div>
              <a href="tel:8083858502" style={{ display: "block", fontSize: 14, color: S.gold, marginBottom: 10, fontWeight: 700 }}>(808) 385-8502</a>
              <a href="https://www.facebook.com/groups/983592019773058/" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 13, color: S.faint, marginBottom: 10 }}>Facebook Group</a>
              <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 13, color: S.faint }}>TripAdvisor · 229 Reviews · 4.2★</a>
            </div>
          </div>
          <div style={{ borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 22, textAlign: "center", fontSize: 11, color: "rgba(245,237,224,0.2)", letterSpacing: 1 }}>
            © 2026 Lahaina Bird Stand · Kihei, Maui, Hawaii
          </div>
        </div>
      </footer>
    </div>
  );
}
