import Link from "next/link";

export default function SocialMediaMarketingHero() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-white
        text-[#0B2A52]
      "
    >
      {/* =====================================================
          SOFT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-[180px]
            top-[8%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#EDF5FB]
            opacity-70
            blur-[120px]
            sm:h-[520px]
            sm:w-[520px]
          "
        />

        <div
          className="
            absolute
            -left-[170px]
            bottom-[2%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#FBF5EC]
            opacity-70
            blur-[110px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]
          items-center

          px-4
          pb-14
          pt-[100px]

          min-[375px]:px-5

          sm:px-6
          sm:pb-16
          sm:pt-[115px]

          md:px-8
          md:pb-20
          md:pt-[125px]

          lg:min-h-screen
          lg:px-10
          lg:pb-20
          lg:pt-[130px]

          xl:px-14
          xl:pb-24
          xl:pt-[140px]

          2xl:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-8

            sm:gap-10
            md:gap-12

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4

            xl:grid-cols-[0.88fr_1.12fr]
            xl:gap-6
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-20
              w-full
              max-w-[600px]

              lg:max-w-[570px]

              motion-safe:animate-[heroFadeUp_.65s_ease-out_both]
            "
          >
            {/* EYEBROW */}

            <div
              className="
                flex
                max-w-full
                items-center
                gap-2.5

                sm:gap-3
              "
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

                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#B79A72]

                  min-[360px]:text-[8px]

                  sm:text-[9px]
                  sm:tracking-[0.24em]

                  md:text-[10px]
                  md:tracking-[0.28em]
                "
              >
                Social Media Marketing Agency
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

            <h1
              className="
                mt-5
                max-w-[570px]

                font-[var(--font-new-york)]

                text-[2.15rem]
                font-medium
                leading-[1.02]
                tracking-[-0.04em]

                text-[#0B2A52]

                min-[375px]:text-[2.3rem]

                sm:mt-6
                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]
              "
            >
              Social Media Marketing That Makes Your Brand

              <span
                className="
                  mt-1.5
                  block

                  text-[1.65rem]
                  font-normal
                  leading-[1.08]
                  tracking-[-0.03em]

                  text-[#B79A72]

                  min-[375px]:text-[1.8rem]

                  sm:mt-2
                  sm:text-[2rem]

                  md:text-[2.2rem]

                  lg:text-[2.35rem]

                  xl:text-[2.55rem]
                "
              >
                Worth Remembering.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[510px]

                text-[12px]
                leading-[1.7]

                text-[#0B2A52]/60

                min-[375px]:text-[13px]

                sm:mt-6
                sm:text-sm
                sm:leading-7

                md:text-[15px]

                lg:max-w-[490px]
              "
            >
              Sharp Rays is a social media marketing agency helping businesses
              build a clearer, more consistent and more engaging presence
              across social media.

              <span
                className="
                  mt-3
                  block
                  sm:mt-4
                "
              >
                From strategy and content creation to publishing, community
                management and performance reporting, we bring every part of
                your social presence together around one clear direction.
              </span>
            </p>

            {/* CTA BUTTONS */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-3

                sm:mt-7
                sm:gap-4

                lg:mt-8
              "
            >
              {/* PRIMARY */}

              <a
                href="#social-media-process"
                title="Explore Sharp Rays social media marketing process"
                className="
                  group
                  relative

                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-4
                  py-[10px]

                  text-[12px]
                  font-medium
                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[375px]:min-h-[46px]
                  min-[375px]:px-5
                  min-[375px]:py-[11px]
                  min-[375px]:text-[13px]

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]
                    rounded-[13px]
                    border
                    border-white/60
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                <span className="relative z-10 whitespace-nowrap">
                  Explore Our Approach
                </span>
              </a>

              {/* SECONDARY */}

              <Link
                href="/contact?service=social-media-marketing#contact-form"
                title="Build your social media presence with Sharp Rays"
                className="
                  group
                  relative

                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-4
                  py-[10px]

                  text-[12px]
                  font-medium
                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[375px]:min-h-[46px]
                  min-[375px]:px-5
                  min-[375px]:py-[11px]
                  min-[375px]:text-[13px]

                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]
                    rounded-[13px]
                    border
                    border-white/60
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                <span className="relative z-10 whitespace-nowrap">
                  Build My Social Presence
                </span>
              </Link>
            </div>

            {/* MICROCOPY */}

            <div
              className="
                mt-7
                flex
                max-w-full
                items-center
                gap-3

                sm:mt-8
                sm:gap-4

                lg:mt-10
              "
            >
              <div
                className="
                  h-px
                  w-7
                  shrink-0
                  bg-[#0B2A52]/15

                  sm:w-9
                  md:w-12
                "
              />

              <span
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]/45

                  sm:text-[8px]
                  sm:tracking-[0.22em]

                  md:text-[9px]
                "
              >
                Strategy · Content · Community · Growth
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="
              relative

              mt-4

              flex
              min-h-[260px]
              w-full
              items-center
              justify-center

              min-[375px]:min-h-[300px]

              sm:mt-6
              sm:min-h-[360px]

              md:min-h-[420px]

              lg:mt-0
              lg:min-h-[520px]
              lg:justify-end

              xl:min-h-[600px]

              motion-safe:animate-[heroFadeIn_.75s_ease-out_both]
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[340px]

                min-[375px]:max-w-[390px]

                sm:max-w-[500px]
                md:max-w-[600px]
                lg:max-w-[650px]
                xl:max-w-[720px]
              "
            >
              <img
                src="/services/social/social_bg_right.webp"
                alt="Social media marketing visual showing content strategy and digital campaign planning"
                title="Social Media Marketing Strategy Visual"
                width="720"
                height="720"
                fetchPriority="high"
                decoding="async"
                className="
                  relative
                  z-10

                  mx-auto
                  block

                  h-auto
                  w-full

                  object-contain
                  object-center

                  drop-shadow-[0_30px_60px_rgba(11,42,82,0.09)]

                  transition-transform
                  duration-500
                  ease-out

                  lg:ml-auto
                  lg:mr-0

                  lg:hover:scale-[1.012]
                "
              />
            </div>

            {/* SMALL DETAILS */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[15%]
                top-[12%]

                h-1.5
                w-1.5

                rounded-full

                bg-[#B79A72]

                shadow-[0_0_22px_rgba(183,154,114,0.45)]

                sm:h-2
                sm:w-2
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-[15%]
                left-[18%]

                h-1
                w-1

                rounded-full

                bg-[#B79A72]/70

                sm:h-1.5
                sm:w-1.5
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          VERY LIGHT CSS-ONLY INITIAL ANIMATION
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroFadeUp {
              from {
                opacity: 0;
                transform: translateY(18px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes heroFadeIn {
              from {
                opacity: 0;
                transform: translateX(18px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `,
        }}
      />
    </section>
  );
}