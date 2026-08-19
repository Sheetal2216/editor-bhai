import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { OTHER_BRANDS } from "../data";

// ---------------------------------------------------------------------
// MAIN CLIENTS — carousel content
// ---------------------------------------------------------------------
const MAIN_CLIENTS = [
  {
    name: "Astro Arun Pandit",
    category: "Astrology · India",
    image: "/images/arun-pandit.png",
  },
  {
    name: "Astrotalk",
    category: "Astrology Platform",
    image: "/images/astrotalk.png",
  },
  {
    name: "Astro Anand Sharma",
    category: "Astrology",
    image: "/images/anand-sharma.jpeg",
  },
  {
    name: "Jaya Kishori",
    category: "Spiritual · India",
    image: "/images/jaya-kishori.png",
  },
  {
    name: "Devi Chitralekha",
    category: "Spiritual · Kathavachak",
    image: "/images/devi-chitralekha.jpeg",
  },
  {
    name: "Pundrik Goswami",
    category: "Spiritual · Kathavachak",
    image: "/images/pundrik-goswami.jpeg",
  },
  {
    name: "Indresh Upadhyay",
    category: "Spiritual · Kathavachak",
    image: "/images/indresh-upadhyay.jpeg",
  },
  {
    name: "Astro Ankit Sharma",
    category: "Astrology",
    image: "/images/astro-ankit-sharma.jpg",
  },
  {
    name: "Awara Musafir",
    category: "Podcast · India",
    image: "/images/awara-musafir.png",
  },
  {
    name: "The Ravya Sharda Show",
    category: "Podcast / Talk Show",
    image: "/images/ravya-sharda.jpeg",
  },
  {
    name: "Akshat Gupta",
    category: "Author / Spiritual",
    image: "/images/akshat-gupta.jpg",
  },
  {
    name: "Abhishek Kar",
    category: "Content Creator",
    image: "/images/abhishek-kar.webp",
  },
  {
    name: "Amit Bhadana",
    category: "Comedy / YouTuber",
    image: "/images/amit-bhadana.jpeg",
  },
  {
    name: "Sadguru Shri Riteswar Maharaj",
    category: "Spiritual Guru",
    image: "/images/sadguru-riteshwar.jpeg",
  },
  {
    name: "Shri Shri Ravi Shankar",
    category: "Spiritual Guru",
    image: "/images/sri-ravi-shankar.jpg",
  },
  {
    name: "Rasraj Ji Maharaj",
    category: "Spiritual Guru",
    image: "/images/rasrak-maharaj.jpeg",
  },
];

// ---------------------------------------------------------------------
// FALLBACK INITIALS
// ---------------------------------------------------------------------
function Initials({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return <span className="cp-fphoto-fallback">{initials}</span>;
}

// ---------------------------------------------------------------------
// CLIENTS SECTION
// ---------------------------------------------------------------------
export default function Clients() {
  const [index, setIndex] = useState(0);

  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const timerRef = useRef(null);

  // ---------------------------------------------------------------
  // GO TO SLIDE
  // ---------------------------------------------------------------
  const goTo = useCallback((i) => {
    setIndex(
      ((i % MAIN_CLIENTS.length) + MAIN_CLIENTS.length) %
        MAIN_CLIENTS.length
    );
  }, []);

  // ---------------------------------------------------------------
  // AUTOPLAY
  // ---------------------------------------------------------------
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

  // ---------------------------------------------------------------
  // CENTER ACTIVE CARD
  // ---------------------------------------------------------------
  const render = useCallback(() => {
    const track = trackRef.current;
    const firstCard = cardRefs.current[0];

    if (!track || !firstCard) return;

    const outerWidth = track.parentElement.clientWidth;
    const cardWidth = firstCard.offsetWidth + 24;

    const offset =
      outerWidth / 2 -
      cardWidth / 2 -
      index * cardWidth;

    track.style.transform = `translateX(${offset}px)`;
  }, [index]);

  useLayoutEffect(() => {
    render();

    window.addEventListener("resize", render);

    return () => {
      window.removeEventListener("resize", render);
    };
  }, [render]);

  // ---------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------
  const handleNav = (dir) => {
    goTo(index + dir);
    restart();
  };

  return (
    <section id="clients" className="cp-section">
      <style>{`
        /* ============================================================
           ROOT
        ============================================================ */

        .cp-section {
          --ink: #10150F;
          --ink-soft: #3C453D;
          --paper: #F6F7F1;
          --paper-raised: #FFFFFF;
          --line: #DDE2D6;
          --green: #1C6B44;
          --green-deep: #123F29;
          --green-tint: #E4EEE3;

          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(28,107,68,.07),
              transparent 34%
            ),
            var(--paper);

          color: var(--ink);

          padding: 100px 32px 80px;

          font-family: Inter, sans-serif;

          -webkit-font-smoothing: antialiased;
        }

        .cp-section::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;

          background: rgba(28,107,68,.08);

          filter: blur(80px);

          pointer-events: none;
        }

        .cp-wrap {
          position: relative;
          z-index: 1;

          max-width: 1180px;
          margin: 0 auto;
        }


        /* ============================================================
           EYEBROW
        ============================================================ */

        .cp-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: .18em;

          text-transform: uppercase;

          color: var(--green);

          margin-bottom: 22px;
        }

        .cp-eyebrow::before,
        .cp-eyebrow::after {
          content: "";

          width: 34px;
          height: 2px;

          border-radius: 999px;

          background: var(--green);

          display: block;

          opacity: .7;
        }


        /* ============================================================
           HEADER
        ============================================================ */

        .cp-header-row {
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          gap: 22px;

          margin: 0 auto 62px;

          max-width: 760px;
        }

        .cp-h1 {
          font-family: var(--font-display), sans-serif;

          font-weight: 800;

          font-size: clamp(42px, 5vw, 64px);

          line-height: 1.02;

          letter-spacing: -.045em;

          color: var(--ink);

          position: relative;

          margin: 0;
        }

        .cp-h1 em {
          font-style: normal;

          color: var(--green);

          font-weight: 800;

          position: relative;

          display: inline-block;
        }

        .cp-h1 em::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: -6px;

          height: 3px;

          border-radius: 999px;

          background: var(--green);

          opacity: .25;
        }

        .cp-lede {
          font-size: 16px;

          line-height: 1.7;

          color: var(--ink-soft);

          max-width: 48ch;

          margin: 0 auto;
        }


        /* ============================================================
           CAROUSEL LABEL
        ============================================================ */

        .cp-carousel-label {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: .16em;

          text-transform: uppercase;

          color: var(--ink-soft);

          text-align: center;

          margin-bottom: 22px;
        }


        /* ============================================================
           CAROUSEL
        ============================================================ */

        .cp-carousel-outer {
          position: relative;

          overflow: hidden;

          padding: 22px 0 48px;
        }

        .cp-carousel-track {
          display: flex;

          gap: 24px;

          transition:
            transform .65s cubic-bezier(.65,0,.35,1);

          will-change: transform;
        }


        /* ============================================================
           CLIENT CARD
        ============================================================ */

        .cp-fcard {
          position: relative;

          flex: 0 0 250px;

          background: rgba(255,255,255,.78);

          border: 1px solid rgba(221,226,214,.9);

          border-radius: 24px;

          padding: 30px 22px 26px;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          gap: 13px;

          transform:
            scale(.86)
            translateY(8px);

          opacity: .48;

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transition:
            transform .6s cubic-bezier(.65,0,.35,1),
            opacity .6s ease,
            box-shadow .6s ease,
            border-color .6s ease,
            background .6s ease;
        }

        .cp-fcard::before {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: inherit;

          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,.7) 50%,
              transparent 80%
            );

          opacity: 0;

          pointer-events: none;
        }

        .cp-fcard.active {
          transform:
            scale(1)
            translateY(-8px);

          opacity: 1;

          background: #fff;

          border-color: rgba(28,107,68,.45);

          box-shadow:
            0 30px 70px -28px rgba(16,21,15,.35),
            0 0 0 1px rgba(28,107,68,.08),
            0 0 40px rgba(28,107,68,.08);
        }

        .cp-fcard.active::before {
          opacity: 1;

          animation:
            cp-shine 3s ease-in-out infinite;
        }

        @keyframes cp-shine {
          0%,
          100% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }
        }


        /* ============================================================
           PROFILE PHOTO
        ============================================================ */

        .cp-fphoto {
          width: 92px;
          height: 92px;

          border-radius: 50%;

          overflow: hidden;

          border: 4px solid #fff;

          outline: 2px solid var(--green-tint);

          box-shadow:
            0 10px 28px rgba(16,21,15,.12),
            0 0 0 6px rgba(28,107,68,.05);

          transition:
            transform .5s ease,
            box-shadow .5s ease;
        }

        .cp-fcard.active .cp-fphoto {
          transform: scale(1.06);

          box-shadow:
            0 14px 32px rgba(16,21,15,.16),
            0 0 0 7px rgba(28,107,68,.08);
        }

        .cp-fphoto img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .cp-fphoto-fallback {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              145deg,
              var(--green-deep),
              var(--green)
            );

          color: #fff;

          font-family: var(--font-display), sans-serif;

          font-weight: 700;

          font-size: 19px;
        }


        /* ============================================================
           CLIENT TEXT
        ============================================================ */

        .cp-fname {
          font-family: var(--font-display), sans-serif;

          font-size: 19px;

          font-weight: 700;

          color: var(--ink);

          line-height: 1.25;

          letter-spacing: -.02em;

          max-width: 210px;
        }

        .cp-fcat {
          font-size: 12px;

          font-weight: 500;

          color: var(--ink-soft);

          line-height: 1.4;
        }


        /* ============================================================
           NAVIGATION
        ============================================================ */

        .cp-carousel-nav {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 20px;

          margin-top: 8px;
        }

        .cp-cbtn {
          width: 44px;
          height: 44px;

          border-radius: 50%;

          border: 1px solid var(--line);

          background: #fff;

          color: var(--ink);

          cursor: pointer;

          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 20px;

          box-shadow:
            0 8px 22px rgba(16,21,15,.06);

          transition:
            transform .25s ease,
            background .25s ease,
            color .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .cp-cbtn:hover {
          background: var(--green);

          color: #fff;

          border-color: var(--green);

          transform: translateY(-2px);

          box-shadow:
            0 12px 25px rgba(28,107,68,.22);
        }

        .cp-dots {
          display: flex;

          gap: 8px;

          flex-wrap: wrap;

          max-width: 180px;

          justify-content: center;
        }

        .cp-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--line);

          cursor: pointer;

          border: none;

          padding: 0;

          transition:
            background .2s ease,
            transform .2s ease,
            width .2s ease;
        }

        .cp-dot.active {
          width: 20px;

          border-radius: 999px;

          background: var(--green);

          transform: scale(1.05);
        }


        /* ============================================================
           ALSO TRUSTED
        ============================================================ */

        .cp-also-wrap {
          margin-top: 88px;

          padding-top: 44px;

          border-top:
            1px solid rgba(221,226,214,.8);
        }

        .cp-also-label {
          font-size: 11px;

          font-weight: 800;

          letter-spacing: .16em;

          text-transform: uppercase;

          color: var(--ink-soft);

          text-align: center;

          margin-bottom: 30px;
        }

        .cp-marquee-mask {
          position: relative;

          overflow: hidden;

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 8%,
              #000 92%,
              transparent
            );
        }

        .cp-marquee-track {
          display: flex;

          gap: 20px;

          width: max-content;

          animation:
            cp-scroll 28s linear infinite;
        }

        .cp-marquee-mask:hover
        .cp-marquee-track {
          animation-play-state: paused;
        }

        @keyframes cp-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .cp-schip {
          display: flex;

          flex-direction: column;

          align-items: center;

          gap: 8px;

          width: 104px;

          flex: 0 0 auto;
        }

        .cp-scircle {
          width: 72px;
          height: 72px;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              var(--green-deep),
              var(--green)
            );

          color: #fff;

          display: flex;

          align-items: center;
          justify-content: center;

          font-family:
            var(--font-display),
            sans-serif;

          font-weight: 700;

          font-size: 16px;

          border:
            3px solid rgba(255,255,255,.8);

          box-shadow:
            0 10px 25px rgba(18,63,41,.14);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .cp-schip:hover .cp-scircle {
          transform:
            translateY(-5px)
            scale(1.05);

          box-shadow:
            0 16px 30px rgba(18,63,41,.2);
        }

        .cp-scircle.alt {
          background: #fff;

          color: var(--ink);

          border-color: var(--line);
        }

        .cp-sname {
          font-size: 11.5px;

          font-weight: 600;

          color: var(--ink-soft);

          text-align: center;

          line-height: 1.3;
        }


        /* ============================================================
           MOBILE
        ============================================================ */

        @media (max-width: 768px) {
          .cp-section {
            padding:
              76px 18px 64px;
          }

          .cp-header-row {
            margin-bottom: 48px;
          }

          .cp-h1 {
            font-size: clamp(36px, 10vw, 48px);

            letter-spacing: -.04em;
          }

          .cp-lede {
            font-size: 15px;

            max-width: 38ch;
          }

          .cp-carousel-outer {
            padding:
              18px 0 42px;
          }

          .cp-fcard {
            flex: 0 0 220px;

            padding:
              26px 18px 24px;
          }

          .cp-fphoto {
            width: 82px;
            height: 82px;
          }

          .cp-also-wrap {
            margin-top: 68px;
          }
        }


        /* ============================================================
           SMALL PHONES
        ============================================================ */

        @media (max-width: 480px) {
          .cp-section {
            padding:
              64px 14px 56px;
          }

          .cp-eyebrow {
            font-size: 10px;
          }

          .cp-eyebrow::before,
          .cp-eyebrow::after {
            width: 24px;
          }

          .cp-h1 {
            font-size: 35px;

            line-height: 1.04;
          }

          .cp-lede {
            font-size: 14px;

            line-height: 1.65;
          }

          .cp-carousel-label {
            margin-bottom: 14px;
          }

          .cp-fcard {
            flex: 0 0 200px;

            border-radius: 22px;

            padding:
              24px 16px 22px;
          }

          .cp-fphoto {
            width: 76px;
            height: 76px;
          }

          .cp-fname {
            font-size: 17px;
          }

          .cp-cbtn {
            width: 40px;
            height: 40px;
          }

          .cp-also-wrap {
            margin-top: 58px;

            padding-top: 34px;
          }
        }

      `}</style>

      <div className="cp-wrap">

        {/* ==========================================================
            HEADER
        ========================================================== */}

        <div className="cp-eyebrow">
          Clients
        </div>

        <div className="cp-header-row">

          <h2 className="cp-h1 font-display">
            Backed by the creators
            <br />
            India already <em>trusts.</em>
          </h2>

          <p className="cp-lede">
            A few of the channels and brands whose weekly content runs
            through Editor Bhai's edit desk.
          </p>

        </div>


        {/* ==========================================================
            MAIN CLIENTS
        ========================================================== */}

        <div className="cp-carousel-label">
          Main Clients
        </div>

        <div className="cp-carousel-outer">

          <div
            className="cp-carousel-track"
            ref={trackRef}
          >

            {MAIN_CLIENTS.map((c, i) => (

              <div
                key={c.name}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`cp-fcard${
                  i === index ? " active" : ""
                }`}
              >

                <div className="cp-fphoto">

                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                    />
                  ) : (
                    <Initials name={c.name} />
                  )}

                </div>

                <div className="cp-fname">
                  {c.name}
                </div>

                <div className="cp-fcat">
                  {c.category}
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ==========================================================
            NAVIGATION
        ========================================================== */}

        <div className="cp-carousel-nav">

          <button
            className="cp-cbtn"
            aria-label="Previous client"
            onClick={() => handleNav(-1)}
          >
            ‹
          </button>

          <div className="cp-dots">

            {MAIN_CLIENTS.map((_, i) => (

              <button
                key={i}
                aria-label={`Go to client ${i + 1}`}
                className={`cp-dot${
                  i === index ? " active" : ""
                }`}
                onClick={() => {
                  goTo(i);
                  restart();
                }}
              />

            ))}

          </div>

          <button
            className="cp-cbtn"
            aria-label="Next client"
            onClick={() => handleNav(1)}
          >
            ›
          </button>

        </div>


        {/* ==========================================================
            ALSO TRUSTED BY
        ========================================================== */}

        <div className="cp-also-wrap">

          <div className="cp-also-label">
            Also Trusted By
          </div>

          <div className="cp-marquee-mask">

            <div className="cp-marquee-track">

              {[...OTHER_BRANDS, ...OTHER_BRANDS].map(
                (brand, i) => {

                  const initials = brand
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("");

                  return (
                    <div
                      className="cp-schip"
                      key={`${brand}-${i}`}
                    >

                      <div
                        className={`cp-scircle${
                          i % 2 === 1 ? " alt" : ""
                        }`}
                      >
                        {initials}
                      </div>

                      <div className="cp-sname">
                        {brand}
                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}