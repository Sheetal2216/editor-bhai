import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const clips = [
  { width: 110, type: "green" },
  { width: 75, type: "light" },
  { width: 145, type: "green" },
  { width: 85, type: "white" },
  { width: 120, type: "dark" },
  { width: 95, type: "green" },
];

export default function EditorBhaiPreloader({ onComplete }) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        document.body.style.overflow = "";
        onComplete?.();
      }, 650);
    }, 4700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          className="eb-preloader-screen"

          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            minHeight: "100vh",
            backgroundColor: "#F6F7F1",
            zIndex: 2147483647,
            overflow: "hidden",
          }}

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >

          {/* ==================================================
              BACKGROUND
          ================================================== */}

          <div className="eb-bg-glow eb-bg-glow-left" />
          <div className="eb-bg-glow eb-bg-glow-right" />


          {/* ==================================================
              TOP STATUS
          ================================================== */}

          <motion.div
            className="eb-loading-text"

            initial={{
              opacity: 0,
              y: -12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.55,
            }}
          >
            EDITING
            <span>...</span>
          </motion.div>


          {/* ==================================================
              MAIN STAGE
          ================================================== */}

          <div className="eb-stage">


            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              className="eb-logo-wrapper"

              initial={{
                opacity: 0,
                scale: 0.65,
                y: 25,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <img
                src="/images/logo.png"
                alt="Editor Bhai"
                className="eb-logo"
              />

            </motion.div>


            {/* =================================================
                TIMELINE
            ================================================= */}

            <motion.div
              className="eb-editor-area"

              initial={{
                opacity: 0,
                y: 30,
                scale: 0.94,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              transition={{
                delay: 0.55,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="eb-timeline">


                {/* RULER */}

                <div className="eb-ruler">

                  {Array.from({
                    length: 25,
                  }).map((_, index) => (
                    <span key={index} />
                  ))}

                </div>


                {/* VIDEO TRACK */}

                <div className="eb-track">

                  {clips.map((clip, index) => (

                    <motion.div
                      key={index}

                      className={`eb-clip eb-clip-${clip.type}`}

                      style={{
                        width: clip.width,
                      }}

                      initial={{
                        opacity: 0,
                        scaleX: 0,
                      }}

                      animate={{
                        opacity: 1,
                        scaleX: 1,
                      }}

                      transition={{
                        delay:
                          0.8 +
                          index * 0.1,

                        duration: 0.42,

                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <span className="eb-clip-inner" />

                    </motion.div>

                  ))}


                  {/* PLAYHEAD */}

                  <motion.div
                    className="eb-playhead"

                    initial={{
                      left: "5%",
                    }}

                    animate={{
                      left: [
                        "5%",
                        "27%",
                        "49%",
                        "71%",
                        "94%",
                      ],
                    }}

                    transition={{
                      delay: 1.15,
                      duration: 2,
                      ease: "linear",
                    }}
                  >

                    <div className="eb-playhead-marker" />

                    <div className="eb-playhead-line" />

                    <div className="eb-playhead-dot" />

                  </motion.div>


                  {/* CUT MARKERS */}

                  <motion.span
                    className="eb-cut cut-one"

                    initial={{
                      opacity: 0,
                      scaleY: 0,
                    }}

                    animate={{
                      opacity: 1,
                      scaleY: 1,
                    }}

                    transition={{
                      delay: 1.55,
                      duration: 0.25,
                    }}
                  />

                  <motion.span
                    className="eb-cut cut-two"

                    initial={{
                      opacity: 0,
                      scaleY: 0,
                    }}

                    animate={{
                      opacity: 1,
                      scaleY: 1,
                    }}

                    transition={{
                      delay: 1.9,
                      duration: 0.25,
                    }}
                  />

                  <motion.span
                    className="eb-cut cut-three"

                    initial={{
                      opacity: 0,
                      scaleY: 0,
                    }}

                    animate={{
                      opacity: 1,
                      scaleY: 1,
                    }}

                    transition={{
                      delay: 2.2,
                      duration: 0.25,
                    }}
                  />

                </div>


                {/* AUDIO WAVEFORM */}

                <div className="eb-waveform">

                  {Array.from({
                    length: 85,
                  }).map((_, index) => (

                    <motion.span
                      key={index}

                      initial={{
                        height: 4,
                      }}

                      animate={{
                        height:
                          `${7 + ((index * 17) % 20)}px`,
                      }}

                      transition={{
                        delay:
                          1 +
                          index * 0.008,

                        duration: 0.3,
                      }}
                    />

                  ))}

                </div>

              </div>

            </motion.div>


            {/* =================================================
                BRANDING
            ================================================= */}

            <motion.div
              className="eb-branding"

              initial={{
                opacity: 0,
                y: 18,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 2.8,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="eb-brand-name">
                EDITOR <span>BHAI</span>
              </div>


              <div className="eb-tagline">

                <i />

                WE EDIT STORIES THAT CONNECT

                <i />

              </div>

            </motion.div>

          </div>


          {/* ==================================================
              PARTICLES
          ================================================== */}

          <div className="eb-particles">

            {Array.from({
              length: 26,
            }).map((_, index) => (

              <motion.span
                key={index}

                initial={{
                  opacity: 0,

                  x:
                    index % 2 === 0
                      ? -(150 + index * 8)
                      : 150 + index * 8,

                  y:
                    (index - 13) * 12,

                  scale: 0.5,
                }}

                animate={{
                  opacity: [0, 0.8, 0],

                  x: 0,

                  y: 0,

                  scale: [0.5, 1, 0],
                }}

                transition={{
                  delay:
                    2.65 +
                    index * 0.025,

                  duration: 0.8,

                  ease: "easeInOut",
                }}
              />

            ))}

          </div>


          {/* ==================================================
              FINAL TRANSITION
          ================================================== */}

          <motion.div
            className="eb-transition-line"

            initial={{
              scaleX: 0,
            }}

            animate={{
              scaleX: 1,
            }}

            transition={{
              delay: 4.05,
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>,

    document.body
  );
}