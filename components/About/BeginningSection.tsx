"use client";

import { useEffect, useRef, useState } from "react";
import { Target } from "lucide-react";

export default function BeginningSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const image = imageRef.current;

    if (!section || !left || !image) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          left.classList.add("beginning-left-show");
          image.classList.add("beginning-image-show");

          observer.unobserve(section);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const mobile = width < 600;
  const tablet = width >= 600 && width < 1024;
  const desktop = width >= 1024;

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#ffffff",
        padding: mobile
          ? "55px 20px 65px"
          : tablet
          ? "70px 5% 80px"
          : "80px 5% 90px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto",
          display: desktop ? "grid" : "flex",
          gridTemplateColumns: desktop ? "48% 52%" : undefined,
          flexDirection: desktop ? undefined : "column",
          alignItems: "center",
          gap: mobile ? "35px" : tablet ? "45px" : "20px",
        }}
      >
        {/* LEFT */}

        <div
          ref={leftRef}
          className="beginning-left"
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: desktop ? "680px" : "100%",
            paddingTop: desktop ? "10px" : "0",
          }}
        >
          {/* EYEBROW */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: mobile ? "10px" : "14px",
              marginBottom: mobile
                ? "24px"
                : tablet
                ? "28px"
                : "32px",
            }}
          >
            <span
            className="
              h-px
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
                  
                  className="
                    whitespace-nowrap
                    text-[8px]
                  
                    uppercase
                    tracking-[0.22em]
                    text-[#B79A72]

                    sm:text-[10px]
                    sm:tracking-[0.30em]

                    md:text-xs
                  "
                >
              THE BEGINNING
            </span>
             <span
            className="
              h-px
              w-10

              bg-gradient-to-l
              from-transparent
              to-[#B79A72]
            "
          />
          </div>

          {/* HEADING */}

        <h2
  style={{
    margin: 0,
    maxWidth: desktop ? "680px" : "650px",
    color: "#0B2A52",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: mobile
      ? "2.2rem"
      : tablet
      ? "2.6rem"
      : width >= 1800
      ? "3.35rem"
      : width >= 1440
      ? "3.1rem"
      : "2.95rem",
    lineHeight: 1.08,
    fontWeight: 500,
    letterSpacing: mobile ? "-1px" : "-1.8px",
  }}
>
  It Started With a
  <br />
  Simple Question
  
</h2>

          {/* GOLD LINE */}

        

          {/* QUOTE */}

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              minHeight: mobile ? "105px" : tablet ? "120px" : "130px",
              display: "flex",
              alignItems: "center",
              padding: mobile
                ? "20px 18px"
                : tablet
                ? "22px 24px"
                : "24px 28px",
              boxSizing: "border-box",
              borderRadius: mobile ? "16px" : "20px",
              background: "#ffffff",
              boxShadow: "0 10px 30px rgba(11,42,82,0.09)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: mobile ? "20px" : "24px",
                left: mobile ? "18px" : "25px",
                color: "#B79A72",
                fontFamily: "Georgia, serif",
                fontSize: mobile ? "45px" : "55px",
                lineHeight: 0.7,
                fontWeight: 700,
              }}
            >
              “
            </span>

            <p
              style={{
                margin: mobile ? "0 0 0 45px" : "0 0 0 55px",
                color: "#0B2A52",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: mobile
                  ? "14px"
                  : tablet
                  ? "16px"
                  : width >= 1800
                  ? "18px"
                  : "17px",
                lineHeight: 1.55,
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Why does so much marketing look
              <br />
              busy—but accomplish so little?”
            </p>
          </div>

          {/* DESCRIPTION */}

          <div
            style={{
              marginTop: mobile ? "24px" : "28px",
              maxWidth: "620px",
            }}
          >
            <p
              style={{
                margin: "0 0 22px",
                color: "#333333",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: mobile
                  ? "14px"
                  : tablet
                  ? "15px"
                  : width >= 1800
                  ? "17px"
                  : "16px",
                lineHeight: mobile ? 1.65 : 1.7,
                fontWeight: 400,
              }}
            >
              We saw businesses spending time creating content, running
              campaigns and chasing numbers without always having a clear
              reason behind what they were doing.
            </p>

            <p
              style={{
                margin: "0 0 22px",
                color: "#333333",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: mobile
                  ? "14px"
                  : tablet
                  ? "15px"
                  : width >= 1800
                  ? "17px"
                  : "16px",
                lineHeight: mobile ? 1.65 : 1.7,
              }}
            >
              We believed there had to be a better way.
            </p>

            <p
              style={{
                margin: 0,
                color: "#333333",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: mobile
                  ? "14px"
                  : tablet
                  ? "15px"
                  : width >= 1800
                  ? "17px"
                  : "16px",
                lineHeight: mobile ? 1.65 : 1.7,
              }}
            >
              So we started{" "}
              <strong
                style={{
                  color: "#0B2A52",
                  fontWeight: 800,
                }}
              >
                SHARPRAYS.
              </strong>
            </p>
          </div>

          {/* GOLD DOTS */}

          <div
            style={{
              position: "absolute",
              left: mobile ? "-5px" : "0",
              bottom: mobile ? "-35px" : "-45px",
              width: mobile ? "90px" : "120px",
              height: mobile ? "45px" : "60px",
              backgroundImage:
                "radial-gradient(#B79A72 1.4px, transparent 1.4px)",
              backgroundSize: mobile ? "18px 18px" : "22px 20px",
              opacity: 0.7,
            }}
          />
        </div>

        {/* RIGHT */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: mobile ? "390px" : tablet ? "500px" : "620px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* IMAGE */}

          <img
         ref={imageRef}
src="/about/Beginning.webp"
alt="Sharp Rays creative workspace representing the beginning of our digital growth journey"
title="The Beginning of Sharp Rays"
            className="beginning-image"
            style={{
              position: "absolute",
              zIndex: 5,
              width: mobile ? "100%" : tablet ? "92%" : "88%",
              height: mobile ? "360px" : tablet ? "470px" : "590px",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* CLARITY CARD */}

          <div
            style={{
              position: "absolute",
              zIndex: 10,
              right: mobile ? "0" : tablet ? "2%" : "0",
              bottom: mobile ? "0" : "15px",
              width: mobile ? "205px" : tablet ? "240px" : "270px",
              minHeight: mobile ? "90px" : tablet ? "105px" : "115px",
              borderRadius: mobile ? "16px" : "20px",
              background: "#ffffff",
              boxShadow: "0 12px 32px rgba(11,42,82,0.13)",
              display: "flex",
              alignItems: "center",
              gap: mobile ? "12px" : "15px",
              padding: mobile ? "15px" : "18px 20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: mobile ? "42px" : "50px",
                height: mobile ? "42px" : "50px",
                flexShrink: 0,
                border: mobile ? "3px solid #0B2A52" : "3px solid #0B2A52",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Target
                size={mobile ? 24 : 29}
                color="#0B2A52"
                strokeWidth={2.1}
              />

              <span
                style={{
                  position: "absolute",
                  width: mobile ? "7px" : "8px",
                  height: mobile ? "7px" : "8px",
                  right: "-3px",
                  top: "-3px",
                  borderRadius: "50%",
                  background: "#B79A72",
                }}
              />
            </div>

            <p
              style={{
                margin: 0,
                color: "#0B2A52",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: mobile ? "14px" : tablet ? "15px" : "16px",
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Clarity over
              <br />
              chaos.
            </p>
          </div>

          {/* BLUE DOTS */}

          <div
            style={{
              position: "absolute",
              left: mobile ? "0" : "2%",
              bottom: mobile ? "5px" : "0",
              width: mobile ? "100px" : "150px",
              height: mobile ? "65px" : "90px",
              backgroundImage:
                "radial-gradient(#0B2A52 1.4px, transparent 1.4px)",
              backgroundSize: mobile ? "19px 19px" : "23px 23px",
              opacity: 0.45,
              zIndex: 0,
            }}
          />

          {/* GOLD DOTS */}

          <div
            style={{
              position: "absolute",
              right: mobile ? "0" : "3%",
              top: mobile ? "20px" : "55px",
              width: mobile ? "65px" : "85px",
              height: mobile ? "65px" : "85px",
              backgroundImage:
                "radial-gradient(#B79A72 1.4px, transparent 1.4px)",
              backgroundSize: mobile ? "18px 18px" : "20px 20px",
              opacity: 0.35,
              zIndex: 0,
            }}
          />
        </div>
      </div>

      {/* ONLY ANIMATION CSS */}

      <style>
        {`
          .beginning-left {
            opacity: 0;
            transform: translateX(-60px);
            transition:
              opacity 0.8s ease,
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .beginning-left-show {
            opacity: 1;
            transform: translateX(0);
          }

          .beginning-image {
            opacity: 0;
            transform: translateY(80px);
            transition:
              opacity 0.9s ease 0.1s,
              transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
          }

          .beginning-image-show {
            opacity: 1;
            transform: translateY(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .beginning-left,
            .beginning-image {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>
    </section>
  );
}