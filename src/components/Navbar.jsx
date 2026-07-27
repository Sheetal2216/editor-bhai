import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-100 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-[74px] px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="font-display font-black text-2xl tracking-tight"
        >
          <span className="text-charcoal">EDITOR</span>{" "}
          <span className="text-mint-500">BHAI</span>
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">

              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  active === link.href
                    ? "text-mint-600"
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {link.label}
              </a>

              {active === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-mint-500"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <a
            href={PROFILE.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-mint-600 hover:scale-105"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PROFILE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-mint-300 text-mint-700 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-mint-500 hover:text-white hover:border-mint-500"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <a
            href={PROFILE.phoneLink}
            className="inline-flex items-center gap-2 border border-gray-300 text-charcoal px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-charcoal hover:text-white"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>

        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>
            <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg"
          >
            <ul className="py-5">

              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`block px-6 py-3 transition-colors ${
                      active === link.href
                        ? "text-mint-600 font-semibold"
                        : "text-charcoal hover:text-mint-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile CTA Buttons */}

              <div className="px-6 pt-5 space-y-3">

                <a
                  href={PROFILE.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-charcoal text-white py-3 rounded-full font-semibold hover:bg-mint-600 transition-all duration-300"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 border border-mint-300 text-mint-700 py-3 rounded-full font-semibold hover:bg-mint-500 hover:text-white hover:border-mint-500 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>

                <a
                  href={PROFILE.phoneLink}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 border border-gray-300 text-charcoal py-3 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>

              </div>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}