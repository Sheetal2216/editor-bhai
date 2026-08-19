import Reveal from "./Reveal";

// ---------------------------------------------------------------------
// TEXT TESTIMONIALS
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
// VIDEO TESTIMONIALS
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
        /* ============================================================
           SHARED SECTION
        ============================================================ */

        .tst-section,
        .vtc-section {
          --ink: #10150F;
          --ink-soft: #3C453D;
          --paper: #F6F7F1;
          --paper-raised: #FFFFFF;
          --line: #DDE2D6;
          --green: #1C6B44;
          --green-deep: #123F29;
          --green-tint: #E4EEE3;

          position: relative;

          padding: 100px 0 90px;

          font-family: Inter, sans-serif;

          -webkit-font-smoothing: antialiased;

          overflow: hidden;
        }


        /* ============================================================
           BACKGROUND
        ============================================================ */

        .tst-section {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(28,107,68,.07),
              transparent 36%
            ),
            var(--paper);

          border-top: 1px solid var(--line);
        }

        .vtc-section {
          background:
            linear-gradient(
              180deg,
              var(--paper) 0%,
              #F1F4EC 100%
            );
        }

        .tst-section::before,
        .vtc-section::before {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          background: rgba(28,107,68,.07);

          filter: blur(90px);

          pointer-events: none;
        }

        .tst-section::before {
          top: -250px;
          right: -100px;
        }

        .vtc-section::before {
          bottom: -250px;
          left: -100px;
        }


        /* ============================================================
           WRAPPER
        ============================================================ */

        .tst-wrap,
        .vtc-wrap {
          position: relative;

          z-index: 1;

          max-width: 1180px;

          margin: 0 auto;

          padding: 0 32px;
        }


        /* ============================================================
           EYEBROW
        ============================================================ */

        .tst-eyebrow,
        .vtc-eyebrow {
          display: flex;

          align-items: center;

          gap: 10px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .18em;

          text-transform: uppercase;

          color: var(--green);

          margin-bottom: 22px;
        }

        .tst-eyebrow::before,
        .vtc-eyebrow::before {
          content: "";

          width: 34px;

          height: 2px;

          border-radius: 999px;

          background: var(--green);

          display: inline-block;

          opacity: .75;
        }


        /* ============================================================
           HEADINGS
        ============================================================ */

        .tst-head,
        .vtc-head {
          max-width: 720px;
        }

        .tst-head h2,
        .vtc-head h2 {
          font-family: var(--font-display), sans-serif;

          font-weight: 800;

          font-size: clamp(40px, 5vw, 58px);

          line-height: 1.04;

          letter-spacing: -.045em;

          color: var(--ink);

          margin: 0;
        }

        .tst-head h2 .light {
          color: var(--green);

          font-weight: 800;

          position: relative;
        }

        .tst-head h2 .light::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: -5px;

          height: 3px;

          border-radius: 999px;

          background: var(--green);

          opacity: .22;
        }

        .tst-sub,
        .vtc-sub {
          color: var(--ink-soft);

          font-size: 15px;

          line-height: 1.7;

          margin-top: 16px;

          max-width: 52ch;
        }


        /* ============================================================
           TESTIMONIAL MARQUEE
        ============================================================ */

        .tst-marquee {
          margin-top: 58px;

          position: relative;

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 7%,
              #000 93%,
              transparent
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              #000 7%,
              #000 93%,
              transparent
            );
        }

        .tst-track {
          display: flex;

          gap: 22px;

          width: max-content;

          animation:
            tst-scroll 48s linear infinite;
        }

        .tst-marquee:hover .tst-track {
          animation-play-state: paused;
        }

        @keyframes tst-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        /* ============================================================
           TESTIMONIAL CARD
        ============================================================ */

        .tst-card {
          position: relative;

          width: 350px;

          min-height: 260px;

          flex: none;

          display: flex;

          flex-direction: column;

          padding: 30px 28px 26px;

          border-radius: 24px;

          border: 1px solid rgba(221,226,214,.95);

          background: rgba(255,255,255,.72);

          backdrop-filter: blur(12px);

          -webkit-backdrop-filter: blur(12px);

          box-shadow:
            0 15px 40px rgba(16,21,15,.045);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease,
            background .35s ease;
        }

        .tst-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 28px;
          right: 28px;

          height: 3px;

          border-radius: 0 0 999px 999px;

          background: var(--green);

          opacity: .12;

          transition: opacity .3s ease;
        }

        .tst-card:hover {
          transform: translateY(-8px);

          background: #fff;

          border-color:
            rgba(28,107,68,.35);

          box-shadow:
            0 28px 55px -25px rgba(16,21,15,.24),
            0 0 30px rgba(28,107,68,.06);
        }

        .tst-card:hover::before {
          opacity: .6;
        }


        /* ============================================================
           QUOTE
        ============================================================ */

        .tst-quote {
          position: relative;

          font-size: 14px;

          line-height: 1.75;

          color: var(--ink);

          font-style: italic;

          flex: 1;

          margin: 0;

          padding-top: 5px;
        }

        .tst-quote::before {
          content: "\\201C";

          display: block;

          font-family:
            var(--font-display),
            sans-serif;

          font-size: 48px;

          font-style: normal;

          font-weight: 800;

          line-height: .6;

          color: var(--green);

          margin-bottom: 12px;
        }

        .tst-quote::after {
          content: "\\201D";

          color: var(--green);

          font-style: normal;

          margin-left: 2px;
        }


        /* ============================================================
           DIVIDER
        ============================================================ */

        .tst-divider {
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              var(--line),
              transparent
            );

          margin: 24px 0 19px;
        }


        /* ============================================================
           PERSON
        ============================================================ */

        .tst-person {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .tst-avatar {
          width: 46px;
          height: 46px;

          flex: none;

          border-radius: 50%;

          overflow: hidden;

          border: 2px solid #fff;

          outline: 2px solid var(--green-tint);

          box-shadow:
            0 6px 18px rgba(16,21,15,.1);
        }

        .tst-avatar img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;
        }

        .tst-name {
          font-family:
            var(--font-display),
            sans-serif;

          font-size: 14px;

          font-weight: 700;

          color: var(--ink);

          letter-spacing: -.01em;
        }

        .tst-role {
          font-size: 11.5px;

          color: var(--ink-soft);

          margin-top: 2px;
        }


        /* ============================================================
           VIDEO SECTION
        ============================================================ */

        .vtc-head {
          max-width: 680px;
        }

        .vtc-grid {
          margin-top: 52px;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;
        }


        /* ============================================================
           VIDEO CARD
        ============================================================ */

        .vtc-card {
          position: relative;

          border-radius: 24px;

          overflow: hidden;

          aspect-ratio: 9 / 13;

          cursor: pointer;

          background: var(--green-deep);

          box-shadow:
            0 20px 42px rgba(16,21,15,.12);

          border: 1px solid rgba(255,255,255,.5);

          transition:
            transform .4s cubic-bezier(.34,1.56,.64,1),
            box-shadow .4s ease;
        }

        .vtc-card:hover {
          transform:
            translateY(-8px)
            scale(1.015);

          box-shadow:
            0 30px 55px rgba(16,21,15,.2);
        }


        /* ============================================================
           VIDEO THUMBNAIL
        ============================================================ */

        .vtc-thumb {
          position: absolute;

          inset: 0;

          background-size: cover;

          background-position: center;

          transition:
            transform .6s ease;
        }

        .vtc-card:hover .vtc-thumb {
          transform: scale(1.07);
        }

        .vtc-card::before {
          content: "";

          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              180deg,
              rgba(16,21,15,.08) 0%,
              rgba(16,21,15,.02) 35%,
              rgba(16,21,15,.82) 100%
            );
        }


        /* ============================================================
           VIDEO DURATION
        ============================================================ */

        .vtc-duration {
          position: absolute;

          top: 14px;

          right: 14px;

          z-index: 3;

          background:
            rgba(16,21,15,.55);

          backdrop-filter: blur(8px);

          color: #fff;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: .03em;

          padding: 5px 9px;

          border-radius: 999px;

          border:
            1px solid rgba(255,255,255,.15);
        }


        /* ============================================================
           PLAY BUTTON
        ============================================================ */

        .vtc-play {
          position: absolute;

          top: 50%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          z-index: 3;

          width: 62px;
          height: 62px;

          border-radius: 50%;

          background:
            rgba(255,255,255,.94);

          display: flex;

          align-items: center;
          justify-content: center;

          box-shadow:
            0 12px 30px rgba(16,21,15,.18);

          transition:
            transform .35s cubic-bezier(.34,1.56,.64,1),
            background .25s ease,
            box-shadow .25s ease;
        }

        .vtc-card:hover .vtc-play {
          transform:
            translate(-50%, -50%)
            scale(1.14);

          background: #fff;

          box-shadow:
            0 18px 38px rgba(16,21,15,.24);
        }

        .vtc-play svg {
          width: 21px;
          height: 21px;

          fill: var(--green-deep);

          margin-left: 3px;
        }


        /* ============================================================
           VIDEO INFO
        ============================================================ */

        .vtc-info {
          position: absolute;

          left: 18px;
          right: 18px;

          bottom: 16px;

          z-index: 3;
        }

        .vtc-name {
          color: #fff;

          font-family:
            var(--font-display),
            sans-serif;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: -.01em;
        }

        .vtc-role {
          color:
            rgba(255,255,255,.78);

          font-size: 11.5px;

          margin-top: 3px;
        }


        /* ============================================================
           RESPONSIVE
        ============================================================ */

        @media (max-width: 980px) {
          .vtc-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .tst-section,
          .vtc-section {
            padding: 82px 0 74px;
          }
        }


        @media (max-width: 640px) {
          .tst-wrap,
          .vtc-wrap {
            padding: 0 18px;
          }

          .tst-section,
          .vtc-section {
            padding: 72px 0 64px;
          }

          .tst-head h2,
          .vtc-head h2 {
            font-size: 36px;

            line-height: 1.06;
          }

          .tst-sub,
          .vtc-sub {
            font-size: 14px;

            line-height: 1.65;
          }

          .tst-marquee {
            margin-top: 44px;
          }

          .tst-card {
            width: 290px;

            min-height: 245px;

            padding:
              26px 22px 24px;

            border-radius: 22px;
          }

          .vtc-grid {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 12px;

            margin-top: 40px;
          }

          .vtc-card {
            border-radius: 20px;
          }

          .vtc-play {
            width: 52px;
            height: 52px;
          }

          .vtc-play svg {
            width: 18px;
            height: 18px;
          }

          .vtc-info {
            left: 13px;
            right: 13px;
            bottom: 12px;
          }

          .vtc-name {
            font-size: 13px;
          }

          .vtc-role {
            font-size: 10.5px;
          }
        }


        @media (max-width: 420px) {
          .tst-head h2,
          .vtc-head h2 {
            font-size: 32px;
          }

          .tst-card {
            width: 275px;
          }

          .vtc-grid {
            gap: 10px;
          }

          .vtc-card {
            border-radius: 18px;
          }

          .vtc-duration {
            top: 10px;
            right: 10px;

            font-size: 9px;

            padding: 4px 7px;
          }
        }
      `}</style>


      {/* ================================================================
          TEXT TESTIMONIALS
      ================================================================= */}

      <section id="proof" className="tst-section">

        <div className="tst-wrap">

          <Reveal>

            <div className="tst-head">

              <div className="tst-eyebrow">
                Proof
              </div>

              <h2 className="font-display">
                Client{" "}
                <span className="light">
                  Testimonials
                </span>
              </h2>

              <p className="tst-sub">
                Real feedback from creators, coaches and business owners
                who rebuilt their content system with Editor Bhai.
              </p>

            </div>

          </Reveal>


          {/* ------------------------------------------------------------
              TESTIMONIAL MARQUEE
          ------------------------------------------------------------- */}

          <div className="tst-marquee">

            <div className="tst-track">

              {[...TESTIMONIALS, ...TESTIMONIALS].map(
                (t, i) => (

                  <div
                    className="tst-card"
                    key={`${t.name}-${i}`}
                  >

                    <p className="tst-quote">
                      {t.quote}
                    </p>

                    <div className="tst-divider" />

                    <div className="tst-person">

                      <div className="tst-avatar">

                        <img
                          src={`https://i.pravatar.cc/100?img=${t.img}`}
                          alt={t.name}
                          loading="lazy"
                        />

                      </div>

                      <div>

                        <div className="tst-name">
                          {t.name}
                        </div>

                        <div className="tst-role">
                          {t.role}
                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ================================================================
          VIDEO TESTIMONIALS
      ================================================================= */}

      <section
        id="video-proof"
        className="vtc-section"
      >

        <div className="vtc-wrap">

          <Reveal>

            <div className="vtc-head">

              <div className="vtc-eyebrow">
                Watch &amp; Believe
              </div>

              <h2 className="font-display">
                Hear it straight from them.
              </h2>

              <p className="vtc-sub">
                A few clients on camera, talking about what changed
                after working with us.
              </p>

            </div>

          </Reveal>


          {/* ------------------------------------------------------------
              VIDEO GRID
          ------------------------------------------------------------- */}

          <div className="vtc-grid">

            {VIDEO_TESTIMONIALS.map(
              (v, i) => (

                <div
                  className="vtc-card"
                  key={`${v.name}-${i}`}
                >

                  <div
                    className="vtc-thumb"
                    style={{
                      background: v.gradient,
                    }}
                  />

                  <div className="vtc-duration">
                    {v.duration}
                  </div>

                  <div className="vtc-play">

                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>

                  </div>

                  <div className="vtc-info">

                    <div className="vtc-name">
                      {v.name}
                    </div>

                    <div className="vtc-role">
                      {v.role}
                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>
    </>
  );
}