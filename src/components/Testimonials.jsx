import Reveal from "./Reveal";

// ---------------------------------------------------------------------
// TEXT TESTIMONIALS — swap quotes/names/roles for real client feedback.
// `img` is a pravatar placeholder id — replace with real photo paths.
// ---------------------------------------------------------------------
const TESTIMONIALS = [
  {
    quote:
      "I was posting randomly with no real plan. Editor Bhai turned one shoot into a week of content and it finally started compounding.",
    name: "Rohan Malhotra",
    role: "Fitness Coach & YouTuber",
    img: 15,
  },
  {
    quote:
      "I had content going out but no positioning behind it. They helped me turn raw footage into something aligned with my brand.",
    name: "Priya Nair",
    role: "UGC Creator & Agency Owner",
    img: 47,
  },
  {
    quote:
      "The biggest shift was distribution. Same effort on my end, but everything now goes out consistently across every platform.",
    name: "Aarav Chopra",
    role: "Podcast Host",
    img: 33,
  },
  {
    quote:
      "As an astrologer, my content needed a very specific tone. This is the first team that actually got that right from day one.",
    name: "Meera Iyer",
    role: "Astrologer & Spiritual Coach",
    img: 45,
  },
  {
    quote:
      "We went from sporadic uploads to a proper content system. Watch time and inbound leads both moved in the same quarter.",
    name: "Kabir Singh",
    role: "Real Estate Business Owner",
    img: 22,
  },
  {
    quote:
      "Editing was never the bottleneck for me, planning was. Having one team handle both took that weight off completely.",
    name: "Ananya Rao",
    role: "Freelance Business Coach",
    img: 60,
  },
];

// ---------------------------------------------------------------------
// VIDEO TESTIMONIALS — mockup previews (gradient thumbnails, no real
// video yet). Swap `gradient` for a real thumbnail/poster image and
// wire the card's onClick to open or play the real video once ready.
// ---------------------------------------------------------------------
const VIDEO_TESTIMONIALS = [
  {
    name: "Rohan Malhotra",
    role: "Fitness Coach",
    duration: "1:24",
    gradient: "linear-gradient(155deg,#2F7D4F,#1F5C39)",
  },
  {
    name: "Priya Nair",
    role: "UGC Creator",
    duration: "0:58",
    gradient: "linear-gradient(155deg,#3D8F5C,#1F5C39)",
  },
  {
    name: "Aarav Chopra",
    role: "Podcast Host",
    duration: "2:10",
    gradient: "linear-gradient(155deg,#1F5C39,#0F3B24)",
  },
  {
    name: "Meera Iyer",
    role: "Astrologer",
    duration: "1:47",
    gradient: "linear-gradient(155deg,#4F9E6C,#286B48)",
  },
];

export default function Testimonials() {
  return (
    <>
      <style>{`
        .tst-section, .vtc-section{
          --cream:#FAF9F4;
          --panel:#FFFFFF;
          --ink:#15181C;
          --muted:#6B7178;
          --green:#2F7D4F;
          --green-dark:#1F5C39;
          --green-soft:#E7F2EB;
          --line:#E7E4DA;
          padding:64px 0;
          font-family:'Inter',sans-serif;
          -webkit-font-smoothing:antialiased;
        }
       .tst-section{background:var(--cream);border-top:1px solid var(--line);overflow:hidden;}
        .vtc-section{background:var(--cream);}
        .tst-wrap, .vtc-wrap{max-width:1120px;margin:0 auto;padding:0 32px;}

        .tst-eyebrow, .vtc-eyebrow{
          display:flex;align-items:center;gap:10px;
          font-family:'Space Grotesk',sans-serif;
          font-size:13px;font-weight:600;letter-spacing:.16em;
          color:var(--green);text-transform:uppercase;margin-bottom:18px;
        }
        .tst-eyebrow::before, .vtc-eyebrow::before{content:"";width:28px;height:2px;background:var(--green);display:inline-block;}

        .tst-head, .vtc-head{max-width:640px;}
        .tst-head h2, .vtc-head h2{
          font-family:'Fraunces',serif;font-weight:500;font-size:36px;
          letter-spacing:-0.01em;color:var(--ink);margin:0;
        }
        .tst-head h2 .light{color:var(--muted);font-weight:500;}
        .tst-sub, .vtc-sub{color:var(--muted);font-size:14.5px;margin-top:10px;line-height:1.65;}

        .tst-marquee{
          margin-top:48px;position:relative;
          -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
          mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
        }
        .tst-track{
          display:flex;gap:20px;width:max-content;
          animation:tst-scroll 44s linear infinite;
        }
        .tst-marquee:hover .tst-track{animation-play-state:paused;}
        @keyframes tst-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}

        .tst-card{
          width:340px;flex:none;background:var(--cream);border:1px solid var(--line);
          border-radius:18px;padding:30px 28px 26px;display:flex;flex-direction:column;
          transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;
        }
        .tst-card:hover{transform:translateY(-6px);box-shadow:0 20px 36px rgba(21,24,28,.09);border-color:var(--green);}
        .tst-quote{font-size:14px;line-height:1.7;color:var(--ink);font-style:italic;flex:1;}
        .tst-quote::before{content:"\\201C";color:var(--green);font-style:normal;}
        .tst-quote::after{content:"\\201D";color:var(--green);font-style:normal;}
        .tst-divider{height:1px;background:var(--line);margin:22px 0 18px;}
        .tst-person{display:flex;align-items:center;gap:12px;}
        .tst-avatar{width:42px;height:42px;border-radius:50%;flex:none;overflow:hidden;}
        .tst-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
        .tst-name{font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;color:var(--ink);}
        .tst-role{font-size:12px;color:var(--muted);margin-top:1px;}

        .vtc-grid{margin-top:48px;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
        .vtc-card{
          position:relative;border-radius:18px;overflow:hidden;aspect-ratio:9/13;
          cursor:pointer;box-shadow:0 16px 32px rgba(21,24,28,.1);
        }
        .vtc-thumb{
          position:absolute;inset:0;background-size:cover;background-position:center;
          transition:transform .5s ease;
        }
        .vtc-card:hover .vtc-thumb{transform:scale(1.06);}
        .vtc-card::before{
          content:"";position:absolute;inset:0;
          background:linear-gradient(0deg,rgba(21,24,28,.78) 0%,rgba(21,24,28,.05) 42%,rgba(21,24,28,.15) 100%);
        }
        .vtc-duration{
          position:absolute;top:14px;right:14px;z-index:2;
          background:rgba(21,24,28,.55);backdrop-filter:blur(4px);color:#fff;
          font-size:11px;font-weight:600;padding:4px 9px;border-radius:999px;
        }
        .vtc-play{
          position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;
          width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.92);
          display:flex;align-items:center;justify-content:center;
          transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .25s ease;
        }
        .vtc-card:hover .vtc-play{transform:translate(-50%,-50%) scale(1.12);background:#fff;}
        .vtc-play svg{width:20px;height:20px;fill:var(--green-dark);margin-left:3px;}
        .vtc-info{position:absolute;left:16px;right:16px;bottom:14px;z-index:2;}
        .vtc-name{color:#fff;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;}
        .vtc-role{color:rgba(255,255,255,.8);font-size:11.5px;margin-top:2px;}

        @media (max-width:980px){
          .vtc-grid{grid-template-columns:repeat(2,1fr);}
        }
        @media (max-width:640px){
          .tst-card{width:280px;}
          .tst-head h2, .vtc-head h2{font-size:28px;}
        }
      `}</style>

      {/* ===================== TEXT TESTIMONIALS ===================== */}
      <section id="proof" className="tst-section">
        <div className="tst-wrap">
          <Reveal>
            <div className="tst-head">
              <div className="tst-eyebrow">Proof</div>
              <h2>
                Client <span className="light">Testimonials</span>
              </h2>
              <p className="tst-sub">
                Real feedback from creators, coaches and business owners who
                rebuilt their content system with Editor Bhai.
              </p>
            </div>
          </Reveal>

          <div className="tst-marquee">
            <div className="tst-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div className="tst-card" key={i}>
                  <p className="tst-quote">{t.quote}</p>
                  <div className="tst-divider" />
                  <div className="tst-person">
                    <div className="tst-avatar">
                      <img src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.name} />
                    </div>
                    <div>
                      <div className="tst-name">{t.name}</div>
                      <div className="tst-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VIDEO TESTIMONIALS ===================== */}
      <section id="video-proof" className="vtc-section">
        <div className="vtc-wrap">
          <Reveal>
            <div className="vtc-head">
              <div className="vtc-eyebrow">Watch &amp; Believe</div>
              <h2>Hear it straight from them.</h2>
              <p className="vtc-sub">
                A few clients on camera, talking about what changed after
                working with us.
              </p>
            </div>
          </Reveal>

          <div className="vtc-grid">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <div className="vtc-card" key={i}>
                <div className="vtc-thumb" style={{ background: v.gradient }} />
                <div className="vtc-duration">{v.duration}</div>
                <div className="vtc-play">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="vtc-info">
                  <div className="vtc-name">{v.name}</div>
                  <div className="vtc-role">{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}