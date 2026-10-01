import Link from "next/link";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const services = [
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    label: "Search Engine Optimization (SEO)",
    href: "/services/search-engine-optimization",
  },
  {
    label: "Performance Marketing / Paid Media",
    href: "/services/performance-marketing",
  },
  {
    label: "Website Development & Management",
    href: "/services/website-development",
  },
  {
    label: "Content Management",
    href: "/services/content-management",
  },
  {
    label: "AI Video & Video Editing",
    href: "/services/ai-video-editing",
  },
  {
    label: "AI Automation",
    href: "/services/ai-automation",
  },
];

const exploreLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/sharp-rays/",
    icon: "linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/sharpraysdigital/",
    icon: "instagram",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61594116386615",
    icon: "facebook",
    label: "Facebook",
  },
] as const;

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#0B2A52]/[0.08]
        bg-[#FAFCFE]
        text-[#0B2A52]
      "
    >
      {/* =====================================================
          VERY SUBTLE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[160px]
            top-[-160px]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#EEF5FA]/75
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[-200px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#B79A72]/[0.04]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:px-12
          lg:py-18
          xl:px-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12
            lg:grid-cols-[1.15fr_1.15fr_0.7fr_0.9fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <Link
              href="/"
              aria-label="Sharp Rays Home"
              className="
                mt-5
                inline-flex
                items-center
              "
            >
              <img
                src="/logo/sharp-rays-logo.png"
                alt="Sharp Rays"
                className="
                  h-auto
                  w-[165px]
                  object-contain
                  object-left
                  sm:w-[180px]
                  lg:w-[195px]
                "
              />
            </Link>

            <p
              style={newYorkFont}
              className="
                mt-6
                max-w-[260px]
                text-[1.35rem]
                font-light
                leading-[1.35]
                tracking-[-0.025em]
                text-[#0B2A52]
                sm:text-[1.5rem]
              "
            >
              Digital growth,{" "}
              <span className="italic text-[#B79A72]">
                without the guesswork.
              </span>
            </p>

            {/* SOCIAL */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-x-5
                gap-y-3
              "
            >
              {socialLinks.map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Sharp Rays on ${item.label}`}
                  style={newYorkFont}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[12px]
                    font-medium
                    text-[#60758A]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:text-[#0B2A52]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#6285AD]/25
                      bg-white/80
                      text-[#0B2A52]
                      shadow-[0_5px_16px_rgba(11,42,82,0.05)]
                      transition-all
                      duration-300
                      group-hover:border-[#6285AD]/40
                      group-hover:bg-[#F5F8FC]
                      group-hover:text-[#6285AD]
                    "
                  >
                    <SocialIcon
                      name={item.icon}
                      className="h-[14px] w-[14px]"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <FooterHeading>Services</FooterHeading>

            <nav
              aria-label="Footer services"
              className="
                mt-5
                flex
                flex-col
                gap-3
              "
            >
              {services.map((service) => (
                <FooterLink
                  key={service.href}
                  href={service.href}
                >
                  {service.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>
            <FooterHeading>Explore</FooterHeading>

            <nav
              aria-label="Footer navigation"
              className="
                mt-5
                flex
                flex-col
                gap-3
              "
            >
              {exploreLinks.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONNECT
          ================================================= */}

          <div>
            <FooterHeading>Connect</FooterHeading>

            <div className="mt-5">
              <p
                style={newYorkFont}
                className="
                  text-[11px]
                  leading-[1.6]
                  text-[#8796A3]
                "
              >
                Have a project, problem or opportunity in mind?
              </p>

              <a
                href="mailto:info@sharprays.com"
                style={newYorkFont}
                className="
                  group
                  mt-4
                  inline-flex
                  items-center
                  text-[14px]
                  font-medium
                  text-[#0B2A52]
                  transition-colors
                  duration-300
                  hover:text-[#6285AD]
                  sm:text-[15px]
                "
              >
                info@sharprays.com
              </a>

              <div
                className="
                  mt-5
                  h-px
                  w-10
                  bg-[#B79A72]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-[#0B2A52]/[0.08]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            flex-col
            gap-5
            px-4
            py-5
            sm:px-6
            md:flex-row
            md:items-center
            md:justify-between
            md:gap-8
            md:px-8
            lg:px-12
            xl:px-14
          "
        >
          {/* COPYRIGHT */}

          <p
            style={newYorkFont}
            className="
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-[#60758A]
            "
          >
            © 2026 Sharp Rays
          </p>

          {/* LEGAL */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              md:justify-center
            "
          >
            <Link
              href="/privacy-policy"
              style={newYorkFont}
              className="
                text-[10px]
                text-[#60758A]
                transition-colors
                duration-300
                hover:text-[#0B2A52]
              "
            >
              Privacy Policy
            </Link>

            <span
              aria-hidden="true"
              className="
                hidden
                h-1
                w-1
                rounded-full
                bg-[#B79A72]/60
                sm:block
              "
            />

            <Link
              href="/terms-and-conditions"
              style={newYorkFont}
              className="
                text-[10px]
                text-[#60758A]
                transition-colors
                duration-300
                hover:text-[#0B2A52]
              "
            >
              Terms & Conditions
            </Link>
          </div>

          {/* SIGN-OFF */}

          <p
            style={newYorkFont}
            className="
              text-[10px]
              italic
              text-[#8A96A6]
              md:text-right
            "
          >
            Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SOCIAL BRAND ICONS
   Inline SVGs — no extra icon package required
========================================================= */

function SocialIcon({
  name,
  className = "",
}: {
  name: "linkedin" | "instagram" | "facebook";
  className?: string;
}) {
  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M5.37 3.5A1.87 1.87 0 1 1 5.36 7.24 1.87 1.87 0 0 1 5.37 3.5ZM3.75 8.65h3.23V19H3.75V8.65ZM8.95 8.65h3.1v1.41h.04c.43-.82 1.49-1.69 3.07-1.69 3.28 0 3.89 2.16 3.89 4.97V19h-3.23v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.31-1.93 2.65V19H8.95V8.65Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle
          cx="17.4"
          cy="6.6"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.01.28-1.7 1.75-1.7H17V2.42C16.7 2.38 15.67 2.3 14.47 2.3c-2.5 0-4.22 1.53-4.22 4.34V9.5H7.4V13h2.85v9h3.25Z" />
    </svg>
  );
}

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span
        style={newYorkFont}
        className="
          text-[9px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-[#B79A72]
        "
      >
        {children}
      </span>

      <span
        className="
          mt-3
          block
          h-px
          w-7
          bg-[#B79A72]/70
        "
      />
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={newYorkFont}
      className="
        group
        relative
        w-fit
        text-[13px]
        leading-[1.45]
        text-[#445D74]
        transition-colors
        duration-300
        hover:text-[#0B2A52]
        sm:text-[14px]
      "
    >
      <span>{children}</span>

      <span
        className="
          absolute
          -bottom-1
          left-0
          h-px
          w-0
          bg-[#B79A72]
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}