"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "01",
    type: "intro",
    title: "Why isn't your Brand Growing?",
    subtitle: "",
    description: "",
    image: "/hook/hook.png",
    imageAlt: "Business owner analyzing why their brand is not growing",
    imageTitle: "Why Your Brand Isn't Growing",
  },
  {
    number: "02",
    type: "problem",
    title: "People see you.",
    subtitle: "But don't remember you.",
    description:
      "Your brand gets attention, but it doesn't stay in people's minds.",
    image: "/hook/hook1.png",
    imageAlt:
      "Brand struggling to create recognition and stay memorable to customers",
    imageTitle: "Brand Recognition and Customer Recall",
  },
  {
    number: "03",
    type: "problem",
    title: "People visit you.",
    subtitle: "But don't convert.",
    description:
      "People land on your website, explore your brand, and then disappear.",
    image: "/hook/hook2.png",
    imageAlt:
      "Website visitors leaving without converting into customers",
    imageTitle: "Website Visitors Not Converting",
  },
  {
    number: "04",
    type: "problem",
    title: "You post content.",
    subtitle: "But nothing really happens.",
    description:
      "You keep posting, but the content isn't creating the attention or momentum you expected.",
    image: "/hook/hook3.png",
    imageAlt:
      "Social media content receiving attention but not generating meaningful business growth",
    imageTitle: "Social Media Content Without Business Growth",
  },
  {
    number: "05",
    type: "problem",
    title: "You spend on ads.",
    subtitle: "But the numbers don't make sense.",
    description:
      "You're spending money, getting clicks, and still wondering where the real growth is.",
    image: "/hook/hook4.png",
    imageAlt:
      "Digital advertising campaign generating clicks without clear business growth",
    imageTitle: "Digital Ads Without Clear ROI",
  },
];

export default function HookSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  /* =========================================================
     REDUCED MOTION
  ========================================================= */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(media.matches);
    };

    updateMotionPreference();

    media.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      media.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  /* =========================================================
     SCROLL ENGINE
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect =
        section.getBoundingClientRect();

      const sectionHeight =
        section.offsetHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollDistance = Math.max(
        1,
        sectionHeight - viewportHeight
      );

      const distance = Math.max(
        0,
        Math.min(
          -rect.top,
          scrollDistance
        )
      );

      const value = Math.max(
        0,
        Math.min(
          1,
          distance / scrollDistance
        )
      );

      setProgress(value);

      /* =====================================================
         SLIDE TIMING
      ====================================================== */

      const introEnd = 0.12;
      const finalStart = 0.88;

      let nextIndex = 0;

      if (value <= introEnd) {
        nextIndex = 0;
      } else if (value >= finalStart) {
        nextIndex = 4;
      } else {
        const problemProgress =
          (value - introEnd) /
          (finalStart - introEnd);

        nextIndex = Math.min(
          4,
          1 +
            Math.floor(
              problemProgress * 4
            )
        );
      }

      setActiveIndex(nextIndex);

      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) return;

      frame =
        requestAnimationFrame(update);
    };

    requestUpdate();

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    window.addEventListener(
      "orientationchange",
      requestUpdate
    );

    window.addEventListener(
      "load",
      requestUpdate
    );

    const resizeObserver =
      new ResizeObserver(() => {
        requestUpdate();
      });

    resizeObserver.observe(section);

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      window.removeEventListener(
        "orientationchange",
        requestUpdate
      );

      window.removeEventListener(
        "load",
        requestUpdate
      );

      resizeObserver.disconnect();

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const isIntro =
    activeIndex === 0;

  const isFinal =
    progress >= 0.88;

  return (
    <section
      ref={sectionRef}
      id="hook"
      className="
        relative
        z-0
        isolate
        min-h-[570vh]
        bg-white
        sm:min-h-[590vh]
        md:min-h-[600vh]
        lg:min-h-[620vh]
      "
    >
      {/* =====================================================
          STICKY SCREEN
      ====================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          h-[100dvh]
          w-full
          overflow-hidden
          bg-white
        "
      >
        {/* ===================================================
            BACKGROUND DECORATION
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {/* TOP RIGHT CIRCLE */}

          <div
            className="
              absolute
              -right-[42vw]
              top-[5%]
              aspect-square
              w-[92vw]
              rounded-full
              bg-[#6285AD]/10

              sm:-right-[32vw]
              sm:w-[75vw]

              md:-right-[24vw]
              md:w-[62vw]

              lg:-right-[13vw]
              lg:top-[10%]
              lg:w-[46vw]
              lg:max-w-[700px]
              lg:bg-[#6285AD]/15
            "
          />

          {/* BOTTOM LEFT CIRCLE */}

          <div
            className="
              absolute
              -bottom-[16vw]
              -left-[40vw]
              aspect-square
              w-[78vw]
              rounded-full
              bg-[#C6A77A]/10

              sm:-left-[30vw]
              sm:w-[66vw]

              md:-left-[22vw]
              md:w-[52vw]

              lg:-bottom-[15vw]
              lg:-left-[12vw]
              lg:w-[32vw]
              lg:max-w-[480px]
            "
          />

          {/* MOBILE CENTER GLOW */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[90vw]
              w-[90vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#6285AD]/[0.025]

              lg:hidden
            "
          />
        </div>

        {/* ===================================================
            TOP PROGRESS
        ==================================================== */}

        <header
          className="
            absolute
            left-[clamp(18px,4vw,80px)]
            right-[clamp(18px,4vw,80px)]
            top-[clamp(16px,3vh,30px)]
            z-40
            flex
            items-start
            justify-end
          "
        >
          {/* DESKTOP PROGRESS */}

          <div
            className="
              hidden
              h-[2px]
              w-28
              overflow-hidden
              rounded-full
              bg-[#0B2A52]/10
              lg:block
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-[#0B2A52]
                transition-[width]
                duration-300
              "
              style={{
                width: `${progress * 100}%`,
              }}
            />
          </div>

          {/* MOBILE / TABLET PROGRESS */}

          <div
            className="
              flex
              w-[105px]
              flex-col
              gap-1.5

              min-[375px]:w-[115px]
              sm:w-[125px]

              lg:hidden
            "
          >
            <div
              className="
                h-[2px]
                w-full
                overflow-hidden
                rounded-full
                bg-[#0B2A52]/10
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#0B2A52]
                  transition-[width]
                  duration-300
                "
                style={{
                  width: `${progress * 100}%`,
                }}
              />
            </div>

            <span
              className="
                self-end
                text-[7px]
                uppercase
                tracking-[0.18em]
                text-[#344054]/45
                sm:text-[8px]
              "
            >
              {String(
                activeIndex + 1
              ).padStart(2, "0")}{" "}
              / 05
            </span>

            <div
              className="
                mt-0.5
                flex
                flex-col
                items-end
                gap-[5px]
              "
            >
              <span
                className="
                  h-[2px]
                  w-7
                  bg-[#0B2A52]
                  sm:w-8
                "
              />

              <span
                className="
                  h-[2px]
                  w-7
                  bg-[#0B2A52]
                  sm:w-8
                "
              />
            </div>
          </div>
        </header>

        {/* ===================================================
            MAIN
        ==================================================== */}

        <main
          className="
            absolute
            inset-0
            mx-auto
            w-full
            max-w-[1900px]

            px-[clamp(18px,4vw,88px)]

            pb-[clamp(48px,7vh,90px)]
            pt-[clamp(70px,10vh,105px)]
          "
        >
          <div
            className="
              grid
              h-full
              min-h-0
              grid-cols-1

              lg:grid-cols-[48%_52%]
              lg:gap-4

              xl:grid-cols-[47%_53%]
              xl:gap-8
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                flex
                h-full
                min-h-0
                items-start

                pt-[clamp(20px,8dvh,90px)]

                sm:pt-[clamp(30px,9dvh,100px)]

                lg:items-center
                lg:pr-8
                lg:pt-0

                xl:pr-12
              "
            >
              {/* =================================================
                  INTRO
              ================================================== */}

              <div
                className="
                  w-full
                  max-w-[820px]
                "
                style={{
                  opacity:
                    isIntro ? 1 : 0,

                  transform:
                    isIntro
                      ? "translateY(0)"
                      : "translateY(-35px)",

                  filter:
                    isIntro
                      ? "blur(0)"
                      : "blur(6px)",

                  pointerEvents:
                    isIntro
                      ? "auto"
                      : "none",

                  transition:
                    reducedMotion
                      ? "none"
                      : "opacity 650ms ease, transform 850ms cubic-bezier(.22,1,.36,1), filter 650ms ease",
                }}
              >
                {/* SO */}

                <div
                  className="
                    mb-2
                    font-[var(--font-editorial)]
                    text-[clamp(1.35rem,6vw,2.15rem)]
                    leading-none
                    text-[#C6A77A]

                    sm:mb-3
                    sm:text-[clamp(1.8rem,5vw,2.6rem)]

                    lg:text-[clamp(2rem,3vw,3rem)]
                  "
                >
                  So…
                </div>

                {/* INTRO HEADING */}

                <h2
                  className="
                    max-w-[720px]
                    font-[var(--font-editorial)]

                    text-[clamp(2rem,10vw,3.3rem)]
                    font-normal
                    leading-[0.91]
                    tracking-[-0.045em]
                    text-[#0B2A52]

                    sm:text-[clamp(2.5rem,8vw,4rem)]

                    lg:text-[clamp(2.7rem,4.4vw,4.8rem)]
                  "
                >
                  Why isn't your
                  <br />
                  brand growing?
                </h2>

                {/* DESCRIPTION */}

                <div
                  className="
                    mt-3
                    flex
                    items-start
                    gap-3

                    sm:mt-5
                    sm:gap-4

                    lg:mt-6
                  "
                >
                  <span
                    className="
                      mt-2
                      h-px
                      w-7
                      shrink-0
                      bg-[#C6A77A]

                      sm:w-9

                      lg:w-12
                    "
                  />

                  <p
                    className="
                      max-w-[360px]
                      text-[10px]
                      leading-[1.45]
                      text-[#344054]

                      min-[375px]:text-[11px]

                      sm:text-xs

                      lg:text-sm
                      lg:leading-5
                    "
                  >
                    You're not alone.
                    <br />
                    Here's what most businesses
                    are struggling with.
                  </p>
                </div>
              </div>

              {/* =================================================
                  PROBLEM SLIDES
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  flex
                  items-start

                  pt-[clamp(20px,8dvh,90px)]

                  sm:pt-[clamp(30px,9dvh,100px)]

                  lg:items-center
                  lg:pt-0
                "
              >
                {slides
                  .slice(1)
                  .map((slide, index) => {
                    const slideIndex =
                      index + 1;

                    const active =
                      slideIndex ===
                      activeIndex;

                    const previous =
                      slideIndex <
                      activeIndex;

                    return (
                      <div
                        key={`problem-${slide.number}`}
                        className="
                          absolute
                          left-0
                          w-full
                          max-w-[820px]
                        "
                        style={{
                          opacity:
                            active ? 1 : 0,

                          transform:
                            active
                              ? "translateY(0)"
                              : previous
                              ? "translateY(-35px)"
                              : "translateY(35px)",

                          filter:
                            active
                              ? "blur(0)"
                              : "blur(6px)",

                          transition:
                            reducedMotion
                              ? "none"
                              : "opacity 600ms ease, transform 800ms cubic-bezier(.22,1,.36,1), filter 600ms ease",
                        }}
                      >
                        {/* LINE */}

                        <div
                          className="
                            mb-2.5
                            flex
                            items-center

                            sm:mb-4

                            lg:mb-5
                          "
                        >
                          <span
                            className="
                              h-px
                              w-6
                              bg-[#C6A77A]/60

                              sm:w-8

                              lg:w-12
                            "
                          />
                        </div>

                        {/* TITLE */}

                        <h3
                          className="
                            max-w-[780px]
                            font-[var(--font-new-york)]

                            text-[clamp(2rem,9.5vw,3.3rem)]
                            font-normal
                            leading-[0.92]
                            tracking-[-0.05em]
                            text-[#0B2A52]

                            sm:text-[clamp(2.6rem,7.2vw,4.2rem)]

                            lg:text-[clamp(2.75rem,4.2vw,5rem)]
                          "
                        >
                          {slide.title}
                        </h3>

                        {/* SUBTITLE */}

                        <p
                          className="
                            mt-2.5
                            max-w-[520px]
                            font-[var(--font-editorial)]

                            text-[clamp(1.05rem,5vw,1.5rem)]
                            leading-[1.06]
                            text-[#6285AD]

                            sm:mt-4
                            sm:text-[clamp(1.3rem,4vw,1.8rem)]

                            lg:text-[clamp(1.45rem,2vw,2rem)]
                          "
                        >
                          {slide.subtitle}
                        </p>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-3.5
                            max-w-[440px]

                            text-[10px]
                            leading-[1.5]
                            text-[#344054]/80

                            min-[375px]:text-[11px]

                            sm:mt-5
                            sm:text-sm

                            lg:mt-6
                            lg:max-w-[500px]
                            lg:text-base
                            lg:leading-6
                          "
                        >
                          {slide.description}
                        </p>

                        {/* REALITY CHECK */}

                        <div
                          className="
                            mt-3.5
                            flex
                            items-center
                            gap-2

                            sm:mt-5

                            lg:mt-6
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#C6A77A]
                            "
                          />

                          <span
                            className="
                              text-[7px]
                              uppercase
                              tracking-[0.2em]
                              text-[#344054]/55

                              sm:text-[8px]

                              lg:text-[9px]
                            "
                          >
                            Reality Check
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* =================================================
                LARGE SCREEN IMAGE
            ================================================== */}

            <div
              className="
                relative
                hidden
                h-full
                min-h-0
                items-center
                justify-center
                lg:flex
              "
            >
              {slides.map(
                (slide, index) => {
                  const active =
                    index === activeIndex;

                  const previous =
                    index < activeIndex;

                  return (
                    <div
                      key={`desktop-${slide.number}`}
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        opacity:
                          active ? 1 : 0,

                        transform:
                          active
                            ? "translateY(0) scale(1)"
                            : previous
                            ? "translateY(-25px) scale(1.03)"
                            : "translateY(25px) scale(.96)",

                        filter:
                          active
                            ? "blur(0)"
                            : "blur(6px)",

                        transition:
                          reducedMotion
                            ? "none"
                            : "opacity 700ms ease, transform 900ms cubic-bezier(.22,1,.36,1), filter 700ms ease",
                      }}
                    >
                      <div
                        className="
                          relative

                          h-[clamp(260px,60dvh,600px)]
                          w-full
                          max-w-[820px]

                          xl:h-[clamp(320px,64dvh,650px)]
                        "
                      >
                       <Image
  src={slide.image}
  alt={slide.imageAlt}
  title={slide.imageTitle}
  fill
  loading={index === 0 ? "eager" : "lazy"}
  fetchPriority={index === 0 ? "high" : "auto"}
  sizes="(min-width: 1536px) 760px, (min-width: 1280px) 50vw, (min-width: 1024px) 52vw, 100vw"
  className="
    object-contain
    object-center
  "
/>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* ===================================================
              MOBILE + TABLET IMAGE

              Separate lower image area prevents text overlap.
          ==================================================== */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[clamp(42px,7dvh,75px)]
              left-1/2
              z-10

              h-[clamp(105px,24dvh,220px)]
              w-[calc(100%-20px)]
              max-w-[680px]

              -translate-x-1/2

              min-[375px]:h-[clamp(120px,25dvh,225px)]

              sm:h-[clamp(150px,27dvh,275px)]
              sm:w-[88vw]

              md:h-[clamp(180px,30dvh,320px)]
              md:w-[78vw]

              lg:hidden
            "
          >
            {slides.map(
              (slide, index) => {
                const active =
                  index === activeIndex;

                const previous =
                  index < activeIndex;

                return (
                  <div
                    key={`mobile-${slide.number}`}
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      opacity:
                        active ? 1 : 0,

                      transform:
                        active
                          ? "translateY(0) scale(1)"
                          : previous
                          ? "translateY(-15px) scale(1.02)"
                          : "translateY(15px) scale(.96)",

                      filter:
                        active
                          ? "blur(0)"
                          : "blur(5px)",

                      transition:
                        reducedMotion
                          ? "none"
                          : "opacity 600ms ease, transform 750ms cubic-bezier(.22,1,.36,1), filter 600ms ease",
                    }}
                  >
                    <div
                      className="
                        relative
                        h-full
                        w-full
                      "
                    >
                     <Image
  src={slide.image}
  alt={slide.imageAlt}
  title={slide.imageTitle}
  fill
  sizes="(max-width: 480px) 96vw, (max-width: 768px) 88vw, (max-width: 1023px) 78vw, 50vw"
  className="
    object-contain
    object-center
  "
/>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </main>

        {/* ===================================================
            BOTTOM PROGRESS
        ==================================================== */}

        <div
          className="
            absolute
            bottom-[clamp(12px,2.5vh,28px)]
            left-[clamp(18px,4vw,80px)]
            right-[clamp(18px,4vw,80px)]
            z-50
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* PROGRESS DOTS */}

            <div
              className="
                flex
                shrink-0
                items-center
              "
            >
              {slides.map(
                (slide, index) => {
                  const active =
                    index === activeIndex;

                  const completed =
                    index < activeIndex;

                  return (
                    <div
                      key={`progress-${slide.number}`}
                      className="
                        flex
                        items-center
                      "
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300

                          sm:h-2
                          sm:w-2

                          ${
                            active
                              ? "scale-125 bg-[#0B2A52]"
                              : completed
                              ? "bg-[#C6A77A]"
                              : "bg-[#0B2A52]/20"
                          }
                        `}
                      />

                      {index <
                        slides.length -
                          1 && (
                        <span
                          className={`
                            mx-1
                            h-px
                            w-2.5
                            transition-colors
                            duration-300

                            min-[375px]:mx-1.5
                            min-[375px]:w-3

                            sm:mx-2
                            sm:w-5

                            lg:mx-3
                            lg:w-7

                            ${
                              completed
                                ? "bg-[#C6A77A]"
                                : "bg-[#0B2A52]/10"
                            }
                          `}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>

            {/* DESKTOP TEXT */}

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#344054]/55

                lg:block
              "
            >
              Keep scrolling ↓
            </span>

            {/* MOBILE TEXT */}

            <span
              className="
                shrink-0
                text-[7px]
                uppercase
                tracking-[0.13em]
                text-[#344054]/40

                sm:text-[8px]

                lg:hidden
              "
            >
              Scroll
            </span>
          </div>
        </div>

        {/* ===================================================
            FINAL REVEAL
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-white
            px-[clamp(18px,5vw,80px)]
          "
          style={{
            opacity: isFinal
              ? Math.min(
                  1,
                  (progress - 0.88) /
                    0.07
                )
              : 0,

            transition: reducedMotion
              ? "none"
              : "opacity 600ms ease",
          }}
        >
          {/* FINAL BG DETAILS */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[30vw]
              top-[8%]
              h-[70vw]
              w-[70vw]
              rounded-full
              bg-[#6285AD]/[0.06]

              sm:-right-[25vw]
              sm:h-[55vw]
              sm:w-[55vw]

              lg:-right-[10vw]
              lg:h-[35vw]
              lg:w-[35vw]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[20vw]
              -left-[25vw]
              h-[60vw]
              w-[60vw]
              rounded-full
              bg-[#C6A77A]/[0.07]

              lg:-bottom-[15vw]
              lg:-left-[10vw]
              lg:h-[35vw]
              lg:w-[35vw]
            "
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-[1000px]
              text-center
            "
          >
            <p
              className="
                mb-3
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-[#C6A77A]

                sm:mb-4
                sm:text-[9px]
                sm:tracking-[0.25em]

                lg:text-xs
              "
            >
              Enough of the problems.
            </p>

            <h3
              className="
                font-[var(--font-editorial)]

                text-[clamp(2.6rem,13vw,5rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.055em]
                text-[#0B2A52]

                sm:text-[clamp(3.2rem,10vw,6rem)]

                lg:text-[clamp(4rem,7vw,7.5rem)]
              "
            >
              That's where
              <br />

              <span className="text-[#C6A77A]">
                we come in.
              </span>
            </h3>

            <div
              className="
                mx-auto
                mt-5
                h-px
                w-12
                bg-[#C6A77A]

                sm:mt-7
                sm:w-16

                lg:mt-8
                lg:w-20
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}