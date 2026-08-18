import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../data";

// ---------------------------------------------------------------------
// Small scroll-reveal hook — mirrors the IntersectionObserver behavior
// from the original HTML (reveal once, then stop observing).
// ---------------------------------------------------------------------
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const TICK = (
  <svg viewBox="0 0 24 24">
    <path d="M5 12l5 5L19 7" />
  </svg>
);

// ---------------------------------------------------------------------
// PLAN DATA — copy carried over verbatim from the shared mockup.
// ---------------------------------------------------------------------
const PLANS = [
  {
    key: "basic",
    kicker: "Foundation",
    name: "Basic Plan",
    tagline: "For creators who want consistent, professional content without hiring in-house.",
    priceAmt: "Custom pricing",
    priceNote: "tailored to your channel",
    sections: [
      {
        label: "What you get",
        items: [
          "4 long-form videos every month, published every Saturday",
          "30 YouTube Shorts, cut for retention",
          "30 Reels for Instagram & Facebook",
          "Every long video cross-posted to Facebook",
          "8 social posts, plus a thumbnail for your Saturday upload",
          "Monthly content calendar, planned in advance",
        ],
      },
      {
        label: "Your dedicated team",
        team: true,
        items: ["Social Media Manager & Researcher", "1 Video Editor", "1 Graphic Designer"],
      },
    ],
    cta: "Get a proposal",
    foot: "No lock-in — scale up whenever you're ready.",
  },
  {
    key: "pro",
    popular: true,
    kicker: "Growth",
    name: "Pro Plan",
    tagline: "For channels ready to post twice a week and turn output into real momentum.",
    priceAmt: "Custom pricing",
    priceNote: "tailored to your channel",
    sections: [
      {
        label: "Everything in Basic, plus",
        items: [
          "8 long-form videos every month — every Wednesday & Saturday",
          "30 YouTube Shorts",
          "30 Reels for Instagram & Facebook",
          "All 8 long videos cross-posted to Facebook",
          "16 social posts, plus a thumbnail for your Saturday upload",
          "Dedicated scriptwriter on every video",
          "Priority turnaround on every deliverable",
        ],
      },
      {
        label: "Your dedicated team",
        team: true,
        items: ["Social Media Manager & Researcher", "1 Writer", "2 Video Editors", "1 Graphic Designer"],
      },
    ],
    cta: "Get a proposal",
    foot: "Our most-booked plan for scaling channels.",
  },
  {
    key: "custom",
    custom: true,
    kicker: "Signature",
    name: "Custom Plan",
    tagline: "For brands and creators with a specific vision — you set the scope, we build the team around it.",
    priceAmt: "Quoted after a call",
    priceNote: "priced to exactly what you need",
    sections: [
      {
        label: "You choose",
        items: [
          "Upload volume & frequency — as light or aggressive as you need",
          "Which platforms we manage: YouTube, Instagram, Facebook, LinkedIn & more",
          "Full social media handling, from captions to community replies",
          "A digital marketing strategy built around your growth goals",
          "A dedicated account manager as your single point of contact",
          "Team size that scales up or down with your workload",
        ],
      },
    ],
    chips: ["SEO", "On-location shoots", "Web development", "PR & press outreach", "Podcast editing", "Paid ad creatives"],
    cta: "Build my plan",
    foot: "Start with a 20-minute scoping call — no obligation.",
  },
];

const PROCESS_STEPS = [
  {
    title: "1. Discovery",
    desc: "Understand your channel, audience and goals.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="20" y1="20" x2="15.5" y2="15.5" />
      </svg>
    ),
  },
  {
    title: "2. Research & Strategy",
    desc: "Competitor scan, trends and content pillars for your niche.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "3. Planning",
    desc: "Content calendar, scripts and delivery schedule locked in.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z" />
        <path d="M8.5 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "4. Editing & Design",
    desc: "Cut, grade and design with weekly check-ins.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="6.5" cy="6.5" r="2" />
        <circle cx="6.5" cy="18" r="2" />
        <path d="M20 4L8.5 15.5" />
        <path d="M20 20L8.5 8.5" />
      </svg>
    ),
  },
  {
    title: "5. Review",
    desc: "You approve every deliverable before it ships.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "6. Delivery",
    desc: "Polished, ready-to-publish files, on time.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z" />
        <circle cx="12" cy="9" r="2" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

function PlanCard({ plan, index }) {
  const [ref, inView] = useInView();
  const cardClass = `pln-card${plan.popular ? " popular" : ""}${plan.custom ? " custom" : ""}${inView ? " in-view" : ""}`;

  return (
    <div ref={ref} className={cardClass} style={{ transitionDelay: `${(index + 1) * 0.12}s` }}>
      {plan.popular && (
        <div className="pln-badge">
          <span className="spark" /> Most popular
        </div>
      )}
      {plan.custom && (
        <div className="pln-badge alt">
          <span className="spark" /> Build your own
        </div>
      )}

      <div className="pln-kicker">{plan.kicker}</div>
      <div className="pln-name">{plan.name}</div>
      <p className="pln-tagline">{plan.tagline}</p>

      <div className="pln-price">
        <span className="amt">{plan.priceAmt}</span>
        <span className="note">{plan.priceNote}</span>
      </div>

      {plan.sections.map((section) => (
        <div key={section.label}>
          <div className="pln-section-label">{section.label}</div>
          <ul className="pln-list">
            {section.items.map((item, i) => (
              <li
                key={item}
                className={section.team ? "team" : ""}
                style={{ transitionDelay: `${0.55 + i * 0.05}s` }}
              >
                {!section.team && <span className="tick">{TICK}</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {plan.chips && (
        <div className="pln-chips">
          {plan.chips.map((chip, i) => (
            <span className="pln-chip" key={chip} style={{ transitionDelay: `${0.6 + i * 0.04}s` }}>
              {chip}
            </span>
          ))}
        </div>
      )}

      <a href={PROFILE.googleFormUrl || "#contact"} target="_blank" rel="noopener noreferrer" className="pln-cta">
        {plan.cta}
      </a>
      <div className="pln-foot">{plan.foot}</div>
    </div>
  );
}

export default function Pricing() {
  const [headRef, headInView] = useInView();
  const [processHeadRef, processHeadInView] = useInView(0.2);
  const [processRowRef, processRowInView] = useInView(0.2);

  return (
    <>
      <style>{`
        .pln-section, .prc-section{
          --cream:#FAF9F4;
          --panel:#FFFFFF;
          --ink:#15181C;
          --muted:#6B7178;
          --green:#2F7D4F;
          --green-dark:#1F5C39;
          --green-soft:#E7F2EB;
          --line:#E7E4DA;
          font-family:'Inter',sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .pln-wrap, .prc-wrap{max-width:1160px;margin:0 auto;padding:0 32px;}
        .pln-eyebrow, .prc-eyebrow{
          display:flex;align-items:center;gap:10px;
          font-family:'Space Grotesk',sans-serif;
          font-size:13px;font-weight:600;letter-spacing:.16em;
          color:var(--green);text-transform:uppercase;margin-bottom:18px;
        }
        .pln-eyebrow::before, .prc-eyebrow::before{content:"";width:28px;height:2px;background:var(--green);display:inline-block;}

        /* ---------- PLANS ---------- */
        .pln-section{
          background:linear-gradient(180deg,var(--cream) 0%,#F2F5EF 100%);
          position:relative;overflow:hidden;padding:100px 0 120px;
        }
        .pln-section::before{
          content:"";position:absolute;top:-180px;right:-160px;width:480px;height:480px;
          border-radius:50%;background:radial-gradient(circle,rgba(47,125,79,.14),transparent 70%);
          pointer-events:none;animation:pln-float-blob 9s ease-in-out infinite;
        }
        .pln-section::after{
          content:"";position:absolute;bottom:-200px;left:-140px;width:420px;height:420px;
          border-radius:50%;background:radial-gradient(circle,rgba(47,125,79,.10),transparent 70%);
          pointer-events:none;animation:pln-float-blob 11s ease-in-out infinite reverse;
        }
        @keyframes pln-float-blob{
          0%,100%{transform:translate(0,0) scale(1);}
          50%{transform:translate(-20px,26px) scale(1.08);}
        }
        .pln-wrap{position:relative;z-index:1;}

        .pln-head{max-width:660px;opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
        .pln-head.in-view{opacity:1;transform:translateY(0);}
        .pln-head h2{font-family:'Space Grotesk',sans-serif;font-size:42px;font-weight:700;line-height:1.16;letter-spacing:-.015em;margin:0;color:var(--ink);}
        .pln-head p{color:var(--muted);font-size:16px;line-height:1.7;margin:16px 0 0;max-width:560px;}

        .pln-grid{margin-top:54px;display:flex;flex-wrap:nowrap;gap:26px;align-items:stretch;}

        .pln-card{
          flex:1 1 0;min-width:0;
          background:var(--panel);border:1px solid var(--line);border-radius:24px;
          padding:38px 34px 34px;display:flex;flex-direction:column;
          position:relative;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s ease,
            opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1);
          box-shadow:0 18px 40px rgba(21,24,28,.05);
          opacity:0;transform:translateY(34px) scale(.97);
          color:var(--ink);
        }
        .pln-card.in-view{opacity:1;transform:translateY(0) scale(1);}
        .pln-card:hover{transform:translateY(-6px);box-shadow:0 26px 50px rgba(21,24,28,.10);}

        .pln-card.popular{
          background:linear-gradient(180deg,#FFFFFF 0%,var(--green-soft) 240%);
          border:2px solid var(--green);
          box-shadow:0 26px 54px rgba(47,125,79,.20);
        }
        @media (min-width:981px){
          .pln-card.popular.in-view{transform:translateY(-10px) scale(1);}
        }
        .pln-card.popular:hover{transform:translateY(-14px);box-shadow:0 32px 60px rgba(47,125,79,.26);}
        .pln-card.popular.in-view{animation:pln-breathe 3.6s ease-in-out .8s infinite;}
        @keyframes pln-breathe{
          0%,100%{box-shadow:0 26px 54px rgba(47,125,79,.20);}
          50%{box-shadow:0 30px 64px rgba(47,125,79,.34);}
        }
        .pln-card.popular:hover{animation-play-state:paused;}

        .pln-card.custom{
          border:1.5px dashed #B9C7BC;
          background:linear-gradient(180deg,#FFFFFF 0%,#FBFBF8 100%);
        }

        .pln-badge{
          position:absolute;top:-14px;left:34px;
          display:inline-flex;align-items:center;gap:6px;
          background:var(--green);color:#fff;font-family:'Space Grotesk',sans-serif;
          font-size:12px;font-weight:700;letter-spacing:.04em;
          padding:7px 16px;border-radius:999px;
          box-shadow:0 8px 16px rgba(47,125,79,.30);
          opacity:0;transform:translateY(6px) scale(.9);
          transition:opacity .4s ease .5s,transform .4s cubic-bezier(.34,1.56,.64,1) .5s;
        }
        .pln-card.in-view .pln-badge{opacity:1;transform:translateY(0) scale(1);}
        .pln-badge.alt{background:var(--ink);}
        .pln-badge .spark{width:6px;height:6px;border-radius:50%;background:#fff;display:inline-block;animation:pln-badge-pulse 1.7s ease-in-out infinite;}
        @keyframes pln-badge-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.7);}}

        .pln-kicker{font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--green);}
        .pln-name{font-family:'Space Grotesk',sans-serif;font-size:27px;font-weight:700;margin-top:6px;}
        .pln-tagline{color:var(--muted);font-size:14px;line-height:1.6;margin-top:8px;min-height:40px;}

        .pln-price{display:flex;align-items:baseline;gap:8px;margin-top:22px;padding-top:22px;border-top:1px solid var(--line);}
        .pln-price .amt{font-family:'Space Grotesk',sans-serif;font-size:15px;font-weight:600;color:var(--ink);}
        .pln-price .note{font-size:12.5px;color:var(--muted);}

        .pln-section-label{font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);margin-top:24px;}

        .pln-list{list-style:none;margin:14px 0 0;padding:0;flex:1;}
        .pln-list li{
          display:flex;align-items:flex-start;gap:10px;
          font-size:14px;line-height:1.55;color:var(--ink);padding:7px 0;
          opacity:0;transform:translateX(-8px);
          transition:opacity .4s ease,transform .4s ease;
        }
        .pln-card.in-view .pln-list li{opacity:1;transform:translateX(0);}
        .pln-list li .tick{
          flex:none;width:18px;height:18px;border-radius:50%;background:var(--green-soft);
          display:flex;align-items:center;justify-content:center;margin-top:1px;
          transform:scale(0);transition:transform .3s cubic-bezier(.34,1.56,.64,1);
        }
        .pln-card.in-view .pln-list li .tick{transform:scale(1);}
        .pln-list li .tick svg{width:11px;height:11px;stroke:var(--green-dark);stroke-width:3;fill:none;}
        .pln-list li.team{color:var(--muted);}

        .pln-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;}
        .pln-chip{
          font-size:11.5px;font-weight:600;color:var(--green-dark);background:var(--green-soft);
          padding:6px 12px;border-radius:999px;
          opacity:0;transform:scale(.85);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);
        }
        .pln-card.in-view .pln-chip{opacity:1;transform:scale(1);}

        .pln-cta{
          margin-top:28px;display:block;width:100%;text-align:center;
          padding:15px 20px;border-radius:999px;text-decoration:none;
          font-family:'Space Grotesk',sans-serif;font-size:14.5px;font-weight:700;
          background:var(--ink);color:#fff;border:none;cursor:pointer;
          transition:transform .2s ease,background .2s ease,box-shadow .2s ease;
        }
        .pln-cta:hover{transform:translateY(-2px);background:var(--green-dark);}
        .pln-card.popular .pln-cta{background:var(--green);box-shadow:0 12px 24px rgba(47,125,79,.30);}
        .pln-card.popular .pln-cta:hover{background:var(--green-dark);}
        .pln-card.custom .pln-cta{background:transparent;color:var(--ink);border:1.5px solid var(--ink);}
        .pln-card.custom .pln-cta:hover{background:var(--ink);color:#fff;}

        .pln-foot{margin-top:12px;font-size:11.5px;color:var(--muted);text-align:center;}

        .pln-note{margin-top:40px;display:flex;align-items:center;gap:10px;font-size:13.5px;color:var(--muted);justify-content:center;}
        .pln-note .dot{width:6px;height:6px;border-radius:50%;background:var(--green);display:inline-block;}

        @media (max-width:980px){
          .pln-grid{flex-wrap:wrap;}
          .pln-card{flex:1 1 100%;}
          .pln-card.popular{transform:none;}
          .pln-card.popular:hover{transform:translateY(-6px);}
          .pln-head h2{font-size:32px;}
        }
        @media (max-width:480px){
          .pln-wrap{padding:0 20px;}
          .pln-card{padding:30px 24px 28px;}
        }

        /* ---------- PROCESS ---------- */
        .prc-section{background:var(--panel);border-top:1px solid var(--line);padding:100px 0 110px;}
        .prc-head{max-width:640px;opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
        .prc-head.in-view{opacity:1;transform:translateY(0);}
        .prc-head h2{font-family:'Space Grotesk',sans-serif;font-size:38px;font-weight:700;line-height:1.18;letter-spacing:-.015em;margin:0;color:var(--ink);}
        .prc-head p{color:var(--muted);font-size:15.5px;line-height:1.7;margin:16px 0 0;max-width:520px;}

        .prc-row{position:relative;margin-top:64px;display:flex;flex-wrap:nowrap;gap:8px;}
        .prc-step{flex:1 1 0;min-width:0;}
        .prc-line{
          position:absolute;top:32px;left:calc(100%/12);right:calc(100%/12);height:2px;
          background:linear-gradient(90deg,var(--green) 0%,var(--green-dark) 100%);
          transform-origin:left center;transform:scaleX(0);
          transition:transform 1.3s cubic-bezier(.2,.8,.2,1);z-index:0;
        }
        .prc-row.in-view .prc-line{transform:scaleX(1);}

        .prc-step{
          position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;
          text-align:center;padding:0 8px;
          opacity:0;transform:translateY(22px);
          transition:opacity .55s ease,transform .55s cubic-bezier(.2,.8,.2,1);
        }
        .prc-row.in-view .prc-step{opacity:1;transform:translateY(0);}

        .prc-icon{
          width:64px;height:64px;border-radius:17px;background:var(--ink);flex:none;
          display:flex;align-items:center;justify-content:center;margin-bottom:22px;
          box-shadow:0 12px 24px rgba(21,24,28,.20);
          transform:scale(0);transition:transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .prc-row.in-view .prc-icon{transform:scale(1);}
        .prc-icon svg{width:25px;height:25px;stroke:#fff;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;}

        .prc-step-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;color:var(--ink);}
        .prc-step-desc{color:var(--muted);font-size:13.5px;line-height:1.6;margin-top:7px;max-width:190px;}

        @media (max-width:980px){
          .prc-row{flex-wrap:wrap;row-gap:44px;}
          .prc-step{flex:1 1 30%;}
          .prc-line{display:none;}
          .prc-head h2{font-size:30px;}
        }
        @media (max-width:640px){
          .prc-row{flex-direction:column;row-gap:0;}
          .prc-step{flex:1 1 auto;flex-direction:row;text-align:left;align-items:flex-start;padding:22px 0;gap:18px;border-bottom:1px solid var(--line);}
          .prc-step:last-child{border-bottom:none;}
          .prc-icon{margin-bottom:0;}
          .prc-step-desc{max-width:none;}
        }
      `}</style>

      {/* ===================== PLANS ===================== */}
      <section className="pln-section" id="plans">
        <div className="pln-wrap">
          <div ref={headRef} className={`pln-head${headInView ? " in-view" : ""}`}>
            <div className="pln-eyebrow">Plans</div>
            <h2>Three ways to work together.</h2>
            <p>
              Every plan comes with a dedicated team, not a ticketing queue — from
              your first upload to a fully managed content engine. Pick a starting
              point below, or build one around exactly what your channel needs.
            </p>
          </div>

          <div className="pln-grid">
            {PLANS.map((plan, i) => (
              <PlanCard plan={plan} index={i} key={plan.key} />
            ))}
          </div>

          <div className="pln-note">
            <span className="dot" /> All plans include a monthly performance
            review and full ownership of every asset we create for you.
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="prc-section" id="process">
        <div className="prc-wrap">
          <div ref={processHeadRef} className={`prc-head${processHeadInView ? " in-view" : ""}`}>
            <div className="prc-eyebrow">Process</div>
            <h2>From first message to your next upload.</h2>
            <p>
              Every plan runs on the same six-step system — so nothing gets
              missed between your first message and the moment your video goes
              live.
            </p>
          </div>

          <div ref={processRowRef} className={`prc-row${processRowInView ? " in-view" : ""}`}>
            <div className="prc-line" />
            {PROCESS_STEPS.map((step) => (
              <div className="prc-step" key={step.title}>
                <div className="prc-icon">{step.icon}</div>
                <div className="prc-step-title">{step.title}</div>
                <div className="prc-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}