"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const pillars = [
  {
    number: "01",
    title: "STRATEGY",
    text: "Know where you're going.",
    image: "/about/Strategy.webp",

    alt: "Sharp Rays digital marketing strategy and growth planning",
    imageTitle: "Digital Marketing Strategy at Sharp Rays",
  },
  {
    number: "02",
    title: "CREATIVE",
    text: "Give people a reason to care.",
    image: "/about/creative_about.webp",

    alt: "Sharp Rays creative marketing and brand content development",
    imageTitle: "Creative Marketing and Brand Content at Sharp Rays",
  },
  {
    number: "03",
    title: "DISTRIBUTION",
    text: "Get the right message to the right people.",
    image: "/about/distribution_about.webp",

    alt: "Sharp Rays content distribution and digital marketing channels",
    imageTitle: "Content Distribution Strategy at Sharp Rays",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Measure it. Improve it. Scale it.",
    image: "/about/Growth_about.webp",

    alt: "Sharp Rays digital growth performance measurement and scaling",
    imageTitle: "Digital Growth and Performance at Sharp Rays",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhatSharpraysIs() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const mobile = width < 600;
  const tablet = width >= 600 && width < 1024;
  const smallLaptop = width >= 1024 && width < 1280;
  const desktop = width >= 1280 && width < 1800;
  const largeDesktop = width >= 1800 && width < 2560;
  const ultraWide = width >= 2560;

  const horizontalPadding = mobile
    ? "20px"
    : tablet
    ? "40px"
    : smallLaptop
    ? "55px"
    : desktop
    ? "70px"
    : largeDesktop
    ? "90px"
    : "120px";

  const sectionPaddingTop = mobile
    ? "52px"
    : tablet
    ? "65px"
    : smallLaptop
    ? "72px"
    : desktop
    ? "78px"
    : largeDesktop
    ? "88px"
    : "98px";

  const sectionPaddingBottom = mobile
    ? "45px"
    : tablet
    ? "52px"
    : smallLaptop
    ? "60px"
    : desktop
    ? "68px"
    : largeDesktop
    ? "76px"
    : "84px";

  const pillarTitleSize = mobile
    ? "26px"
    : tablet
    ? "27px"
    : smallLaptop
    ? "28px"
    : desktop
    ? "30px"
    : largeDesktop
    ? "33px"
    : "36px";

  const descriptionSize = mobile
    ? "13px"
    : tablet
    ? "14px"
    : smallLaptop
    ? "14px"
    : desktop
    ? "15px"
    : largeDesktop
    ? "16px"
    : "17px";

  const imageHeight = mobile
    ? "145px"
    : tablet
    ? "170px"
    : smallLaptop
    ? "175px"
    : desktop
    ? "185px"
    : largeDesktop
    ? "205px"
    : "225px";

  return (
    <section
      id="what-sharprays-is"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#ffffff",
        color: "#0B2A52",
        padding: `${sectionPaddingTop} ${horizontalPadding} ${sectionPaddingBottom}`,
        boxSizing: "border-box",
      }}
    >
      {/* =========================
          SUBTLE BACKGROUND DETAIL
      ========================== */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: mobile ? "-260px" : ultraWide ? "-460px" : "-330px",
          top: mobile ? "-240px" : ultraWide ? "-350px" : "-250px",
          width: mobile ? "460px" : ultraWide ? "900px" : "700px",
          height: mobile ? "460px" : ultraWide ? "900px" : "700px",
          borderRadius: "50%",
          border: "1px solid rgba(198,167,122,0.035)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: mobile ? "-280px" : "-330px",
          bottom: mobile ? "-300px" : "-400px",
          width: mobile ? "500px" : "680px",
          height: mobile ? "500px" : "680px",
          borderRadius: "50%",
          border: "1px solid rgba(11,42,82,0.025)",
          pointerEvents: "none",
        }}
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: ultraWide ? "1650px" : "1380px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* =========================
            HEADER
        ========================== */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease }}
            style={{
              marginBottom: mobile ? "18px" : "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: mobile ? "10px" : "14px",
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
              What SHARPRAYS Actually Is
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
          </motion.div>

          {/* Heading */}

          <motion.h2
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{ duration: 0.85, ease }}
  style={{
    margin: 0,
    maxWidth: mobile
      ? "340px"
      : tablet
      ? "650px"
      : largeDesktop
      ? "1000px"
      : "900px",
    fontFamily: "var(--font-new-york)",
    fontSize: mobile
      ? "2.2rem"
      : tablet
      ? "2.6rem"
      : width >= 1800
      ? "3.35rem"
      : width >= 1440
      ? "3.1rem"
      : "2.95rem",
    fontWeight: 500,
    lineHeight: mobile ? 1 : 0.96,
    letterSpacing: "-0.055em",
    color: "#0B2A52",
  }}
>
  So, What Is{" "}
  <span
    style={{
      color: "#C6A77A",
      fontStyle: "italic",
    }}
  >
    SHARPRAYS?
  </span>
</motion.h2>
          {/* Description */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease,
            }}
            style={{
              width: "100%",
              maxWidth: ultraWide ? "1050px" : "850px",
              marginTop: mobile ? "18px" : "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: mobile ? "0" : "16px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: mobile ? "none" : "block",
                width: "1px",
                height: tablet ? "42px" : "50px",
                background: "#C6A77A",
                flexShrink: 0,
              }}
            />

            <p
              style={{
                maxWidth: mobile
                  ? "330px"
                  : tablet
                  ? "620px"
                  : "730px",
                margin: 0,
                textAlign: "center",
                fontSize: descriptionSize,
                lineHeight: mobile ? 1.65 : 1.7,
                color: "#607087",
              }}
            >
              We’re a digital growth partner combining strategy,
              creativity, technology and performance to help ambitious
              businesses build something that lasts.
            </p>

            <span
              aria-hidden="true"
              style={{
                display: mobile ? "none" : "block",
                width: "1px",
                height: tablet ? "42px" : "50px",
                background: "#C6A77A",
                flexShrink: 0,
              }}
            />
          </motion.div>
        </div>

        {/* =========================
            PILLARS
        ========================== */}

        <div
          style={{
            marginTop: mobile
              ? "42px"
              : tablet
              ? "50px"
              : smallLaptop
              ? "58px"
              : desktop
              ? "64px"
              : largeDesktop
              ? "72px"
              : "82px",

            display: "grid",

            gridTemplateColumns:
              mobile
                ? "1fr"
                : tablet
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(4, minmax(0, 1fr))",

            columnGap: mobile
              ? "0"
              : tablet
              ? "28px"
              : smallLaptop
              ? "24px"
              : desktop
              ? "28px"
              : largeDesktop
              ? "36px"
              : "44px",

            rowGap: mobile
              ? "42px"
              : tablet
              ? "52px"
              : "0",
          }}
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              style={{
                position: "relative",
                minWidth: 0,
              }}
            >
              {/* IMAGE */}

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: imageHeight,
                  overflow: "hidden",
                }}
              >
                {/* Very subtle glow */}

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: mobile ? "60%" : "55%",
                    height: mobile ? "60%" : "55%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    background: "rgba(198,167,122,0.025)",
                    filter: "blur(30px)",
                  }}
                />

                <motion.div
                  whileHover={{
                    scale: 1.045,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <Image
  src={pillar.image}
  alt={pillar.alt}
  title={pillar.imageTitle}
  fill
  sizes={
    mobile
      ? "100vw"
      : tablet
      ? "50vw"
      : ultraWide
      ? "20vw"
      : "25vw"
  }
  style={{
    objectFit: "contain",
  }}
/>
                </motion.div>

                {/* Number */}

                
                


                {/* Arrow */}

              </div>

              {/* CONTENT */}

              <div
                style={{
                  marginTop: mobile ? "15px" : "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: mobile ? "8px" : "9px",
                  }}
                >
                  

                
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-new-york)",
                    fontSize: pillarTitleSize,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    color: "#0B2A52",
                  }}
                >
                  {pillar.title}
                </h3>

                <div
                  style={{
                    marginTop: mobile ? "10px" : "11px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "9px",
                  }}
                >
                  <span
                    style={{
                      marginTop: "8px",
                      width: mobile ? "20px" : "24px",
                      height: "1px",
                      flexShrink: 0,
                      background: "rgba(198,167,122,0.65)",
                    }}
                  />

                  <p
                    style={{
                      maxWidth: mobile
                        ? "280px"
                        : tablet
                        ? "235px"
                        : ultraWide
                        ? "280px"
                        : "220px",
                      margin: 0,
                      fontSize: mobile ? "13px" : "13px",
                      lineHeight: 1.65,
                      color: "#68778A",
                    }}
                  >
                    {pillar.text}
                  </p>
                </div>
              </div>

              {/* Small hover line */}

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.45, ease }}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-1px",
                  height: "1px",
                  background: "#C6A77A",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* =========================
            CLOSING STATEMENT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          style={{
            marginTop: mobile
              ? "48px"
              : tablet
              ? "55px"
              : smallLaptop
              ? "62px"
              : desktop
              ? "68px"
              : largeDesktop
              ? "76px"
              : "84px",
            paddingTop: mobile ? "22px" : "26px",
            borderTop: "1px solid rgba(11,42,82,0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: mobile || tablet ? "column" : "row",
              alignItems: mobile || tablet ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              gap: mobile ? "18px" : "25px",
            }}
          >
            <div>
              <div
                style={{
                  width: mobile ? "28px" : "34px",
                  height: "1px",
                  background: "#C6A77A",
                  marginBottom: mobile ? "12px" : "14px",
                }}
              />

              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-new-york)",
                  fontSize: mobile
                    ? "23px"
                    : tablet
                    ? "26px"
                    : smallLaptop
                    ? "28px"
                    : desktop
                    ? "30px"
                    : largeDesktop
                    ? "34px"
                    : "38px",
                  fontWeight: 500,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  color: "#0B2A52",
                }}
              >
                Four disciplines.
                <br />

                <span
                  style={{
                    color: "#C6A77A",
                    fontStyle: "italic",
                  }}
                >
                  One growth system.
                </span>
              </p>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "8px",
                fontWeight: 500,
                textTransform: "uppercase",
                lineHeight: 1.8,
                letterSpacing: "0.17em",
                color: "rgba(11,42,82,0.28)",
                textAlign: mobile || tablet ? "left" : "right",
              }}
            >
              Strategy · Creative
              <br />
              Distribution · Growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}