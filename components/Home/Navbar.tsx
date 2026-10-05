"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
    linkTitle: "Explore Social Media Marketing Services",
  },
  {
    label: "Search Engine Optimization (SEO)",
    href: "/services/search-engine-optimization",
    linkTitle: "Explore Search Engine Optimization SEO Services",
  },
  {
    label: "Performance Marketing / Paid Media",
    href: "/services/performance-marketing",
    linkTitle: "Explore Performance Marketing and Paid Media Services",
  },
  {
    label: "Website Development & Management",
    href: "/services/website-development",
    linkTitle: "Explore Website Development and Management Services",
  },
  {
    label: "AI Video & Video Editing",
    href: "/services/video-and-creative",
    linkTitle: "Explore AI Video and Video Editing Services",
  },
  {
    label: "AI Automation",
    href: "/services/AI-Automation",
    linkTitle: "Explore AI Automation Services",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =======================================================
     ACTIVE STATES
  ======================================================= */

  const isHome = pathname === "/";

  const isAbout =
    pathname === "/about" ||
    pathname.startsWith("/about/");

  const isServices =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  const isWork =
    pathname === "/work" ||
    pathname.startsWith("/work/");

  const isContact =
    pathname === "/contact" ||
    pathname.startsWith("/contact/");

  /* =======================================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* =======================================================
     LOCK BODY SCROLL
  ======================================================= */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes navbarBorder {
          0% {
            stroke-dashoffset: 0;
          }

          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[100]

          border-b
          border-transparent

          bg-transparent

          transition-all
          duration-300
        "
      >
        <nav
          className="
            relative
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1760px]
            items-center
            justify-between
            px-5

            sm:h-[80px]
            sm:px-8

            lg:h-[92px]
            lg:px-12

            xl:px-16

            2xl:px-20
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            title="Sharp Rays Digital Marketing Agency Home"
            aria-label="Sharp Rays Home"
            onClick={() => {
              setMenuOpen(false);
              setServicesOpen(false);
            }}
            className="
              relative
              z-[130]
              flex
              shrink-0
              items-center
              transition-transform
              duration-300
              hover:scale-[1.015]
            "
          >
            <img
              src="/logo/sharp-rays-logo.png"
              alt="Sharp Rays Digital Marketing Agency"
              title="Sharp Rays Digital Marketing Agency"
              className="
                h-auto
                w-[150px]
                object-contain
                object-left

                min-[380px]:w-[165px]

                sm:w-[185px]

                md:w-[195px]

                lg:w-[205px]

                xl:w-[225px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-[110]
              hidden
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-8

              lg:flex

              xl:gap-11
            "
          >
            <NavLink
              href="/"
              label="Home"
              linkTitle="Sharp Rays Home"
              active={isHome}
            />

            <NavLink
              href="/about"
              label="About"
              linkTitle="Learn More About Sharp Rays"
              active={isAbout}
            />

            {/* =================================================
                SERVICES DESKTOP
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                title="Explore Sharp Rays Services"
                aria-label="Explore Sharp Rays Services"
                aria-expanded={servicesOpen}
                onClick={() =>
                  setServicesOpen((prev) => !prev)
                }
                style={{
                  ...newYorkFont,
                  color: isServices
                    ? "#6285AD"
                    : "#0B2A52",
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[15px]
                  font-medium
                  tracking-[-0.01em]
                  transition-colors
                  duration-300

                  xl:text-[17px]
                "
              >
                <span>Services</span>

                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                  className={`
                    transition-transform
                    duration-300

                    ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                >
                  <path
                    d="M2.2 4L5.5 7.2L8.8 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className={`
                    absolute
                    -bottom-[10px]
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    bg-[#B79A72]
                    transition-all
                    duration-300

                    ${
                      isServices
                        ? "w-6 opacity-100"
                        : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                    }
                  `}
                />
              </button>

              {/* =================================================
                  DESKTOP SERVICES DROPDOWN
              ================================================= */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  mt-5
                  w-[320px]
                  -translate-x-1/2
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#0B2A52]/[0.09]
                  bg-white/95
                  p-3
                  shadow-[0_24px_70px_rgba(11,42,82,0.14)]
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    mb-2
                    px-3
                    pb-2
                    pt-2
                  "
                >
                  <span
                    style={newYorkFont}
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#B79A72]
                    "
                  >
                    Our Services
                  </span>
                </div>

                <div className="flex flex-col">
                  {services.map((service) => {
                    const serviceActive =
                      pathname === service.href;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        title={service.linkTitle}
                        aria-label={service.linkTitle}
                        onClick={() =>
                          setServicesOpen(false)
                        }
                        style={newYorkFont}
                        className={`
                          group
                          flex
                          items-center
                          rounded-[12px]
                          px-3
                          py-[11px]
                          transition-all
                          duration-300

                          ${
                            serviceActive
                              ? "bg-[#6285AD]/[0.08]"
                              : "hover:bg-[#6285AD]/[0.06]"
                          }
                        `}
                      >
                        <span
                          className={`
                            text-[13px]
                            font-medium
                            leading-[1.35]
                            transition-all
                            duration-300

                            ${
                              serviceActive
                                ? "translate-x-1 text-[#6285AD]"
                                : "text-[#0B2A52] group-hover:translate-x-1 group-hover:text-[#6285AD]"
                            }
                          `}
                        >
                          {service.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="
                    mt-2
                    border-t
                    border-[#0B2A52]/[0.07]
                    pt-2
                  "
                />
              </div>
            </div>

            <NavLink
              href="/work"
              label="Work"
              linkTitle="View Sharp Rays Work and Case Studies"
              active={isWork}
            />

            <NavLink
              href="/contact"
              label="Contact"
              linkTitle="Contact Sharp Rays"
              active={isContact}
            />
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <Link
            href="/contact"
            title="Talk to Sharp Rays"
            aria-label="Talk to Sharp Rays"
            style={newYorkFont}
            className="
              group
              relative
              z-[110]
              hidden
              h-[50px]
              items-center
              gap-3
              overflow-hidden
              rounded-[14px]
              border
              border-[#6285AD]/25
              bg-white
              px-5
              text-[15px]
              font-medium
              text-[#0B2A52]
              shadow-[0_8px_30px_rgba(11,42,82,0.06)]
              transition-all
              duration-300

              hover:-translate-y-[1px]
              hover:border-[#6285AD]/40
              hover:shadow-[0_12px_35px_rgba(11,42,82,0.11)]

              lg:flex

              xl:h-[54px]
              xl:px-6
              xl:text-[16px]
            "
          >
            <svg
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="98"
                height="98"
                rx="16"
                ry="16"
                fill="none"
                stroke="#6285AD"
                strokeWidth="1.4"
                pathLength="100"
                strokeDasharray="20 80"
                strokeLinecap="round"
                className="
                  animate-[navbarBorder_2.8s_linear_infinite]
                "
              />
            </svg>

            <span className="relative z-10 whitespace-nowrap">
              Let&apos;s Talk
            </span>

            <span
              className="
                relative
                z-10
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#0B2A52]
                text-white
                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:bg-[#6285AD]
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7H11.5M7.8 3.3L11.5 7L7.8 10.7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            title={
              menuOpen
                ? "Close Navigation Menu"
                : "Open Navigation Menu"
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);

              if (menuOpen) {
                setServicesOpen(false);
              }
            }}
            className="
              relative
              z-[140]
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#0B2A52]/[0.08]
              bg-white/70
              transition-all
              duration-300

              hover:border-[#6285AD]/30
              hover:bg-[#F5F8FC]

              lg:hidden
            "
          >
            <div
              className="
                relative
                h-[16px]
                w-[21px]
              "
            >
              <span
                className={`
                  absolute
                  left-0
                  top-[4px]
                  h-[1.5px]
                  w-full
                  bg-[#0B2A52]
                  transition-all
                  duration-300

                  ${
                    menuOpen
                      ? "top-[7px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute
                  bottom-[4px]
                  left-0
                  h-[1.5px]
                  w-full
                  bg-[#0B2A52]
                  transition-all
                  duration-300

                  ${
                    menuOpen
                      ? "bottom-[7px] -rotate-45"
                      : ""
                  }
                `}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE / TABLET FULLSCREEN MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          overflow-y-auto
          bg-[linear-gradient(145deg,#FFFFFF_0%,#F7FAFD_48%,#EEF4FA_100%)]
          transition-all
          duration-500
          ease-out

          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }
        `}
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[180px]
            top-[40px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(98,133,173,0.12)_0%,rgba(98,133,173,0.03)_42%,transparent_70%)]
            blur-2xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[200px]
            -left-[180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(183,154,114,0.10)_0%,rgba(183,154,114,0.025)_42%,transparent_72%)]
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[100dvh]
            w-full
            max-w-[900px]
            flex-col
            px-5
            pb-8
            pt-[100px]

            min-[380px]:px-6

            sm:px-10
            sm:pb-10
            sm:pt-[116px]

            md:px-14
            md:pb-12
            md:pt-[124px]
          "
        >
          {/* =================================================
              MOBILE INTRO
          ================================================= */}

          <div
            className="
              mb-6
              flex
              items-center
              gap-3

              sm:mb-8
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[#B79A72]
                sm:w-9
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#6285AD]

                sm:text-[10px]
              "
            >
              Explore Sharp Rays
            </span>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="
              flex
              flex-col
              border-t
              border-[#0B2A52]/[0.08]
            "
          >
            <MobileNavLink
              label="Home"
              href="/"
              linkTitle="Sharp Rays Home"
              index={1}
              active={isHome}
              onClick={closeMobileMenu}
            />

            <MobileNavLink
              label="About"
              href="/about"
              linkTitle="Learn More About Sharp Rays"
              index={2}
              active={isAbout}
              onClick={closeMobileMenu}
            />

            {/* =================================================
                MOBILE SERVICES
            ================================================= */}

            <div
              className="
                border-b
                border-[#0B2A52]/[0.08]
              "
            >
              <button
                type="button"
                title="Explore Sharp Rays Services"
                aria-label="Explore Sharp Rays Services"
                aria-expanded={servicesOpen}
                onClick={() =>
                  setServicesOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-5
                  py-[18px]
                  text-left

                  min-[380px]:py-5

                  sm:py-[22px]

                  md:py-6
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-4

                    sm:gap-5
                  "
                >
                  <span
                    className={`
                      h-[28px]
                      w-[2px]
                      shrink-0
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        isServices
                          ? "bg-[#B79A72] opacity-100"
                          : "bg-transparent opacity-0"
                      }
                    `}
                  />

                  <span
                    style={newYorkFont}
                    className={`
                      text-[28px]
                      font-medium
                      leading-none
                      tracking-[-0.035em]
                      transition-colors
                      duration-300

                      min-[380px]:text-[30px]

                      sm:text-[35px]

                      md:text-[39px]

                      ${
                        isServices
                          ? "text-[#6285AD]"
                          : "text-[#0B2A52]"
                      }
                    `}
                  >
                    Services
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <span
                    className="
                      hidden
                      text-[9px]
                      tracking-[0.18em]
                      text-[#0B2A52]/35

                      min-[360px]:block

                      sm:text-[10px]
                    "
                  >
                    03
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#0B2A52]/[0.08]
                      bg-white/70
                      text-[#0B2A52]/65

                      sm:h-9
                      sm:w-9
                    "
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className={`
                        transition-transform
                        duration-300

                        ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      <path
                        d="M4 7L9 12L14 7"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              {/* ===============================================
                  MOBILE SERVICE LIST
              =============================================== */}

              <div
                className={`
                  grid
                  transition-all
                  duration-500
                  ease-in-out

                  ${
                    servicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div
                    className="
                      mb-5
                      ml-[18px]
                      border-l
                      border-[#B79A72]/40
                      pl-5

                      sm:mb-6
                      sm:ml-[22px]
                      sm:pl-7
                    "
                  >
                    {services.map((service, index) => {
                      const serviceActive =
                        pathname === service.href;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          title={service.linkTitle}
                          aria-label={service.linkTitle}
                          onClick={closeMobileMenu}
                          style={newYorkFont}
                          className="
                            group
                            flex
                            items-start
                            justify-between
                            gap-4
                            border-b
                            border-[#0B2A52]/[0.055]
                            py-[11px]

                            sm:py-[13px]
                          "
                        >
                          <span
                            className={`
                              max-w-[82%]
                              text-[13px]
                              font-medium
                              leading-[1.45]
                              transition-colors
                              duration-300

                              min-[380px]:text-[14px]

                              sm:text-[15px]

                              ${
                                serviceActive
                                  ? "text-[#6285AD]"
                                  : "text-[#0B2A52]/70 group-hover:text-[#6285AD]"
                              }
                            `}
                          >
                            {service.label}
                          </span>

                          <span
                            className="
                              mt-[2px]
                              shrink-0
                              text-[9px]
                              tracking-[0.15em]
                              text-[#B79A72]

                              sm:text-[10px]
                            "
                          >
                            0{index + 1}
                          </span>
                        </Link>
                      );
                    })}

                    <Link
                      href="/services"
                      title="View All Sharp Rays Services"
                      aria-label="View All Sharp Rays Services"
                      onClick={closeMobileMenu}
                      style={newYorkFont}
                      className="
                        group
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-[13px]
                        font-medium
                        text-[#6285AD]

                        sm:text-[14px]
                      "
                    >
                      <span>View All Services</span>

                      <span
                        aria-hidden="true"
                        className="
                          text-[#B79A72]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <MobileNavLink
              label="Work"
              href="/work"
              linkTitle="View Sharp Rays Work and Case Studies"
              index={4}
              active={isWork}
              onClick={closeMobileMenu}
            />

            <MobileNavLink
              label="Contact"
              href="/contact"
              linkTitle="Contact Sharp Rays"
              index={5}
              active={isContact}
              onClick={closeMobileMenu}
            />
          </div>

          {/* =================================================
              MOBILE BOTTOM CONTENT
          ================================================= */}

          <div
            className="
              mt-auto
              pt-7

              sm:pt-9
            "
          >
            <div className="flex w-full justify-center">
              <Link
                href="/contact"
                title="Talk to Sharp Rays"
                aria-label="Talk to Sharp Rays"
                onClick={closeMobileMenu}
                style={newYorkFont}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-[13px]
                  border
                  border-[#0B2A52]/10
                  bg-white
                  px-4
                  py-2.5
                  text-[#0B2A52]
                  shadow-[0_7px_22px_rgba(11,42,82,0.07)]
                  transition-all
                  duration-300

                  hover:-translate-y-[1px]
                  hover:border-[#6285AD]/30
                  hover:shadow-[0_10px_28px_rgba(11,42,82,0.10)]

                  sm:px-[18px]
                  sm:py-[11px]
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#B79A72]
                    transition-all
                    duration-300
                    group-hover:w-[68%]
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                    text-[13px]
                    font-medium
                    tracking-[-0.01em]

                    sm:text-[14px]
                  "
                >
                  Let&apos;s Talk
                </span>

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B2A52]
                    text-white
                    transition-all
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:bg-[#6285AD]
                  "
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7H11.5M7.8 3.3L11.5 7L7.8 10.7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#0B2A52]/40

                sm:mt-6
                sm:text-[10px]
              "
            >
              <span>Ideas</span>

              <span className="h-[4px] w-[4px] rounded-full bg-[#B79A72]" />

              <span>Strategy</span>

              <span className="h-[4px] w-[4px] rounded-full bg-[#B79A72]" />

              <span>Impact</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   DESKTOP NAVIGATION LINK
========================================================= */

function NavLink({
  href,
  label,
  linkTitle,
  active = false,
}: {
  href: string;
  label: string;
  linkTitle: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      title={linkTitle}
      aria-label={linkTitle}
      style={{
        ...newYorkFont,
        color: active
          ? "#6285AD"
          : "#0B2A52",
      }}
      className="
        group
        relative
        whitespace-nowrap
        text-[15px]
        font-medium
        tracking-[-0.01em]
        transition-colors
        duration-300

        hover:text-[#6285AD]

        xl:text-[17px]
      "
    >
      <span>{label}</span>

      <span
        className={`
          absolute
          -bottom-[10px]
          left-1/2
          h-[2px]
          -translate-x-1/2
          bg-[#B79A72]
          transition-all
          duration-300

          ${
            active
              ? "w-6 opacity-100"
              : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
          }
        `}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAVIGATION LINK
========================================================= */

function MobileNavLink({
  label,
  href,
  linkTitle,
  index,
  active = false,
  onClick,
}: {
  label: string;
  href: string;
  linkTitle: string;
  index: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      title={linkTitle}
      aria-label={linkTitle}
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        justify-between
        gap-5
        border-b
        border-[#0B2A52]/[0.08]
        py-[18px]

        min-[380px]:py-5

        sm:py-[22px]

        md:py-6
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-4

          sm:gap-5
        "
      >
        <span
          className={`
            h-[28px]
            w-[2px]
            shrink-0
            rounded-full
            transition-all
            duration-300

            ${
              active
                ? "bg-[#B79A72] opacity-100"
                : "bg-transparent opacity-0"
            }
          `}
        />

        <span
          style={newYorkFont}
          className={`
            text-[28px]
            font-medium
            leading-none
            tracking-[-0.035em]
            transition-all
            duration-300

            min-[380px]:text-[30px]

            sm:text-[35px]

            md:text-[39px]

            ${
              active
                ? "text-[#6285AD]"
                : "text-[#0B2A52] group-hover:text-[#6285AD]"
            }
          `}
        >
          {label}
        </span>
      </div>

      <span
        className={`
          shrink-0
          text-[9px]
          tracking-[0.18em]
          transition-colors
          duration-300

          sm:text-[10px]

          ${
            active
              ? "text-[#B79A72]"
              : "text-[#0B2A52]/30 group-hover:text-[#B79A72]"
          }
        `}
      >
        0{index}
      </span>
    </Link>
  );
}