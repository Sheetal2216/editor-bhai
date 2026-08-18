import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { OTHER_BRANDS } from "../data";

// ---------------------------------------------------------------------
// MAIN CLIENTS — carousel content, in your exact order.
// No stats/metrics — just name + role, matching the shared mockup.
// Swap in real photos via the `image` field whenever you have them.
// ---------------------------------------------------------------------
const MAIN_CLIENTS = [
  { name: "Astro Arun Pandit", category: "Astrology · India", image: "/images/arun-pandit.png" },
  { name: "Astrotalk", category: "Astrology Platform", image: "/images/astrotalk.png" },
  { name: "Astro Anand Sharma", category: "Astrology", image: "/images/anand-sharma.jpeg" },
  { name: "Jaya Kishori", category: "Spiritual · India", image: "/images/jaya-kishori.png" },
  { name: "Devi Chitralekha", category: "Spiritual · Kathavachak", image: "/images/devi-chitralekha.jpeg" },
  { name: "Pundrik Goswami", category: "Spiritual · Kathavachak", image: "/images/pundrik-goswami.jpeg" },
  { name: "Indresh Upadhyay", category: "Spiritual · Kathavachak", image: "/images/indresh-upadhyay.jpeg" },
  { name: "Astro Ankit Sharma", category: "Astrology", image: "/images/astro-ankit-sharma.jpg" },
  { name: "Awara Musafir", category: "Podcast · India", image: "/images/awara-musafir.png" },
  { name: "The Ravya Sharda Show", category: "Podcast / Talk Show", image: "/images/ravya-sharda.jpeg" },
  { name: "Akshat Gupta", category: "Author / Spiritual", image: "/images/akshat-gupta.jpg" },
  { name: "Abhishek Kar", category: "Content Creator", image: "/images/abhishek-kar.webp" },
  { name: "Amit Bhadana", category: "Comedy / YouTuber", image: "/images/amit-bhadana.jpeg" },
  { name: "Sadguru Shri Riteswar Maharaj", category: "Spiritual Guru", image: "/images/sadguru-riteshwar.jpeg" },
  { name: "Shri Shri Ravi Shankar", category: "Spiritual Guru", image: "/images/sri-ravi-shankar.jpg" },
  { name: "Rasraj Ji Maharaj", category: "Spiritual Guru", image: "/images/rasrak-maharaj.jpeg" },
];

function Initials({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return <span className="cp-fphoto-fallback">{initials}</span>;
}

export default function Clients() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % MAIN_CLIENTS.length) + MAIN_CLIENTS.length) % MAIN_CLIENTS.length);
  }, []);

  const restart = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % MAIN_CLIENTS.length);
    }, 4000);
  }, []);

  useEffect(() => {
    restart();
    return () => clearInterval(timerRef.current);
  }, [restart]);

  const render = useCallback(() => {
    const track = trackRef.current;
    const firstCard = cardRefs.current[0];
    if (!track || !firstCard) return;
    const outerWidth = track.parentElement.clientWidth;
    const cardWidth = firstCard.offsetWidth + 24; // gap
    const offset = outerWidth / 2 - cardWidth / 2 - index * cardWidth;
    track.style.transform = `translateX(${offset}px)`;
  }, [index]);

  useLayoutEffect(() => {
    render();
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [render]);

  const handleNav = (dir) => {
    goTo(index + dir);
    restart();
  };

  return (
    <section id="clients" className="cp-section">
      <style>{`
        .cp-section{
          --ink:#10150F;
          --ink-soft:#3C453D;
          --paper:#F6F7F1;
          --paper-raised:#FFFFFF;
          --line:#DDE2D6;
          --green:#1C6B44;
          --green-deep:#123F29;
          --green-tint:#E4EEE3;
          background:var(--paper);
          color:var(--ink);
          padding:80px 32px 64px;
          font-family:'Inter',sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .cp-wrap{max-width:1180px;margin:0 auto;}
        .cp-eyebrow{
          display:flex;align-items:center;justify-content:center;gap:10px;
          font-size:13px;font-weight:700;letter-spacing:.14em;
          text-transform:uppercase;color:var(--green);margin-bottom:22px;
        }
        .cp-eyebrow::before, .cp-eyebrow::after{content:"";width:28px;height:2px;background:var(--green);display:block;}
        .cp-header-row{
          display:flex;flex-direction:column;align-items:center;
          text-align:center;gap:20px;margin:0 auto 56px;max-width:680px;
        }
        .cp-h1{
          font-family:'Fraunces',serif;
          font-weight:500;
          font-size:44px;
          line-height:1.1;
          letter-spacing:-0.01em;
          color:var(--ink);
        }
        .cp-h1 em{font-style:italic;color:var(--green);font-weight:500;}
        .cp-lede{font-size:17px;line-height:1.6;color:var(--ink-soft);max-width:42ch;margin:0 auto;}
        .cp-carousel-label{
          font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--ink-soft);text-align:center;margin-bottom:24px;
        }
        .cp-carousel-outer{position:relative;overflow:hidden;padding:16px 0 40px;}
        .cp-carousel-track{
          display:flex;gap:24px;transition:transform .6s cubic-bezier(.65,0,.35,1);
          will-change:transform;
        }
        .cp-fcard{
          flex:0 0 240px;
          background:var(--paper-raised);
          border:1px solid var(--line);
          border-radius:18px;
          padding:28px 20px 24px;
          display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;
          transform:scale(.86);
          opacity:.55;
          transition:transform .6s cubic-bezier(.65,0,.35,1), opacity .6s ease, box-shadow .6s ease, border-color .6s ease;
        }
        .cp-fcard.active{
          transform:scale(1);
          opacity:1;
          box-shadow:0 24px 48px -20px rgba(16,21,15,.25);
          border-color:var(--green);
        }
        .cp-fphoto{
          width:84px;height:84px;border-radius:50%;overflow:hidden;
          border:3px solid var(--green-tint);
        }
        .cp-fphoto img{width:100%;height:100%;object-fit:cover;display:block;}
        .cp-fphoto-fallback{
          width:100%;height:100%;display:flex;align-items:center;justify-content:center;
          background:var(--green-deep);color:#fff;font-family:'Fraunces',serif;font-weight:600;font-size:17px;
        }
        .cp-fname{font-family:'Fraunces',serif;font-size:18px;font-weight:600;color:var(--ink);line-height:1.3;}
        .cp-fcat{font-size:12.5px;color:var(--ink-soft);}
        .cp-carousel-nav{display:flex;align-items:center;justify-content:center;gap:22px;margin-top:4px;}
        .cp-cbtn{
          width:38px;height:38px;border-radius:50%;border:1px solid var(--line);
          background:var(--paper-raised);color:var(--ink);cursor:pointer;
          display:flex;align-items:center;justify-content:center;font-size:18px;
          transition:background .2s ease, color .2s ease, border-color .2s ease;
        }
        .cp-cbtn:hover{background:var(--green);color:#fff;border-color:var(--green);}
        .cp-dots{display:flex;gap:8px;flex-wrap:wrap;max-width:180px;justify-content:center;}
        .cp-dot{width:7px;height:7px;border-radius:50%;background:var(--line);cursor:pointer;border:none;padding:0;transition:background .2s ease, transform .2s ease;}
        .cp-dot.active{background:var(--green);transform:scale(1.3);}
        .cp-also-wrap{margin-top:72px;}
        .cp-also-label{
          font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--ink-soft);text-align:center;margin-bottom:24px;
        }
        .cp-marquee-mask{
          position:relative;overflow:hidden;
          -webkit-mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image:linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .cp-marquee-track{display:flex;gap:20px;width:max-content;animation:cp-scroll 28s linear infinite;}
        .cp-marquee-mask:hover .cp-marquee-track{animation-play-state:paused;}
        @keyframes cp-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        .cp-schip{display:flex;flex-direction:column;align-items:center;gap:8px;width:104px;flex:0 0 auto;}
        .cp-scircle{
          width:68px;height:68px;border-radius:50%;background:var(--green-deep);color:#fff;
          display:flex;align-items:center;justify-content:center;
          font-family:'Fraunces',serif;font-weight:600;font-size:15px;border:1px solid var(--line);
        }
        .cp-scircle.alt{background:var(--paper-raised);color:var(--ink);}
        .cp-sname{font-size:11.5px;font-weight:600;color:var(--ink-soft);text-align:center;line-height:1.3;}
        @media (max-width:640px){
          .cp-h1{font-size:32px;}
          .cp-fcard{flex:0 0 200px;}
        }
      `}</style>

      <div className="cp-wrap">
        <div className="cp-eyebrow">Clients</div>

        <div className="cp-header-row">
          <h2 className="cp-h1">
            Backed by the creators
            <br />
            India already <em>trusts.</em>
          </h2>
          <p className="cp-lede">
            A few of the channels and brands whose weekly content runs through
            Editor Bhai's edit desk.
          </p>
        </div>

        <div className="cp-carousel-label">Main Clients</div>
        <div className="cp-carousel-outer">
          <div className="cp-carousel-track" ref={trackRef}>
            {MAIN_CLIENTS.map((c, i) => (
              <div
                key={c.name}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`cp-fcard${i === index ? " active" : ""}`}
              >
                <div className="cp-fphoto">
                  {c.image ? (
                    <img src={c.image} alt={c.name} />
                  ) : (
                    <Initials name={c.name} />
                  )}
                </div>
                <div className="cp-fname">{c.name}</div>
                <div className="cp-fcat">{c.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-carousel-nav">
          <button className="cp-cbtn" aria-label="Previous client" onClick={() => handleNav(-1)}>
            ‹
          </button>
          <div className="cp-dots">
            {MAIN_CLIENTS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to client ${i + 1}`}
                className={`cp-dot${i === index ? " active" : ""}`}
                onClick={() => {
                  goTo(i);
                  restart();
                }}
              />
            ))}
          </div>
          <button className="cp-cbtn" aria-label="Next client" onClick={() => handleNav(1)}>
            ›
          </button>
        </div>

        <div className="cp-also-wrap">
          <div className="cp-also-label">Also Trusted By</div>
          <div className="cp-marquee-mask">
            <div className="cp-marquee-track">
              {[...OTHER_BRANDS, ...OTHER_BRANDS].map((brand, i) => {
                const initials = brand
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("");
                return (
                  <div className="cp-schip" key={i}>
                    <div className={`cp-scircle${i % 2 === 1 ? " alt" : ""}`}>{initials}</div>
                    <div className="cp-sname">{brand}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}