
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
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
    label: "Content Marketing",
    href: "/services/content-marketing",
  },
  {
    label: "AI Automation",
    href: "/services/ai-automation",
  },
  {
    label: "AI Video & Creative",
    href: "/services/video-and-creative",
  },
  {
    label: "Professional Video Editing",
    href: "/services/professional-video-editing",
  },
];

const industries = [
  {
    label: "Beauty & Wellness",
    href: "/industries/beauty-wellness",
  },
  {
    label: "Ecommerce",
    href: "/industries/ecommerce",
  },
  {
    label: "Education",
    href: "/industries/education",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services",
  },
  {
    label: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    label: "Restaurants",
    href: "/industries/restaurants",
  },
  {
    label: "Startups",
    href: "/industries/startup",
  },
  {
    label: "Travel & Hospitality",
    href: "/industries/travel-hospitality",
  },
];

const explore = [
  { label: "About Sharp Rays", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Pricing & Packages", href: "/pricing" },
  { label: "Free Digital Audit", href: "/free-audit" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sharp-rays/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sharpraysdigital/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594116386615",
  },
];

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3
        style={newYorkFont}
        className="text-[17px] font-medium tracking-[-0.015em] text-[#0B2A52]"
      >
        {children}
      </h3>
      <div className="mt-3 h-px w-7 bg-[#B79A72]" />
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
      title={`Explore ${String(children)} at Sharp Rays`}
      className="group inline-flex w-fit items-start gap-2 text-[12px] leading-[1.85] text-[#52677F] transition-colors duration-300 hover:text-[#0B2A52] sm:text-[13px]"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B79A72] transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight
        size={12}
        strokeWidth={1.5}
        className="mt-[5px] shrink-0 text-[#B79A72] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#E5EBF0] bg-white text-[#0B2A52]">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[430px] w-[430px] rounded-full bg-[#EEF5FB]/55 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -left-32 h-[400px] w-[400px] rounded-full bg-[#F6F0E7]/50 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* ===============================================
            01 — BRAND INTRODUCTION
        =============================================== */}

        <div className="grid gap-9 border-b border-[#E5EBF0] pb-12 pt-16 sm:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:pb-16 lg:pt-24">
          <div>
            <Link
              href="/"
              title="Sharp Rays Digital Marketing Agency Home"
              aria-label="Sharp Rays Home"
              className="inline-flex w-fit items-center"
            >
              <Image
                src="/logo/sharp-rays-logo.png"
                alt="Sharp Rays Digital Marketing Agency logo"
                title="Sharp Rays Digital Marketing Agency"
                width={225}
                height={80}
                sizes="(max-width: 640px) 180px, 225px"
                className="h-auto w-[180px] object-contain sm:w-[210px] lg:w-[225px]"
              />
            </Link>

            <h2
              style={newYorkFont}
              className="mt-8 max-w-[750px] text-[clamp(2rem,3.4vw,3.8rem)] font-normal leading-[1.15] tracking-[-0.04em] text-[#0B2A52]"
            >
              Digital growth,{" "}
              <span className="italic text-[#B79A72]">
                without the guesswork.
              </span>
            </h2>

            <p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-[#60748A] sm:text-[14px]">
              We help ambitious businesses build stronger online
              visibility, connect with the right customers and
              create meaningful growth through SEO, performance
              marketing, websites, content and AI-powered
              solutions.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72]">
              Have a growth opportunity in mind?
            </p>

            <Link
              href="/contact"
              title="Start a Conversation with Sharp Rays"
              className="group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[13px] bg-[#0B2A52] px-6 py-4 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#153B69] hover:shadow-[0_14px_30px_rgba(11,42,82,0.13)] sm:min-w-[265px]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <p className="mt-4 max-w-[320px] text-[11px] leading-[1.75] text-[#8391A0]">
              Tell us about your business, your challenges and
              what you want to achieve next.
            </p>
          </div>
        </div>

        {/* ===============================================
            02 — MAIN FOOTER COLUMNS
        =============================================== */}

        <div className="grid grid-cols-1 gap-x-9 gap-y-12 py-14 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-[1.2fr_1.1fr_0.8fr_1.1fr] lg:gap-x-12 lg:py-20 xl:gap-x-16">
          {/* SERVICES */}

          <div>
            <FooterHeading>Services</FooterHeading>

            <nav aria-label="Footer services">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <FooterLink href={service.href}>
                      {service.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/services"
              title="Explore All Sharp Rays Services"
              className="group mt-7 inline-flex items-center gap-2 border-b border-[#B79A72]/55 pb-1.5 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72]"
            >
              All Services
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* INDUSTRIES */}

          <div>
            <FooterHeading>Industries We Help</FooterHeading>

            <nav aria-label="Footer industries">
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.href}>
                    <FooterLink href={industry.href}>
                      {industry.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/industries"
              title="Explore All Industries Sharp Rays Helps"
              className="group mt-7 inline-flex items-center gap-2 border-b border-[#B79A72]/55 pb-1.5 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72]"
            >
              All Industries
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* EXPLORE */}

          <div>
            <FooterHeading>Explore</FooterHeading>

            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {explore.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>
                      {item.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-9 border-t border-[#E7EBF0] pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#B79A72]">
                Connect With Us
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    title={`Visit Sharp Rays on ${social.label}`}
                    aria-label={`Sharp Rays on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[11px] text-[#60748A] transition-colors hover:text-[#0B2A52]"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={11}
                      className="text-[#B79A72] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <FooterHeading>Connect</FooterHeading>

            <p
              style={newYorkFont}
              className="max-w-[300px] text-[21px] font-normal leading-[1.4] tracking-[-0.02em] text-[#0B2A52]"
            >
              Have a project, problem or opportunity in mind?
            </p>

            <div className="mt-7 space-y-6">
              {/* EMAIL */}

              <a
                href="mailto:info@sharprays.com"
                title="Email Sharp Rays"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#E4E9EF] bg-[#F8FAFC] text-[#B79A72]">
                  <Mail size={16} strokeWidth={1.6} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#8794A1]">
                    Email Us
                  </span>
                  <span className="mt-1 block break-all text-[12px] font-medium text-[#0B2A52] transition-colors group-hover:text-[#B79A72] sm:text-[13px]">
                    info@sharprays.com
                  </span>
                </span>
              </a>

              {/* PHONE */}

              <a
                href="tel:+919415951060"
                title="Call Sharp Rays at +91 94159 51060"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#E4E9EF] bg-[#F8FAFC] text-[#B79A72]">
                  <Phone size={16} strokeWidth={1.6} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#8794A1]">
                    Call Us
                  </span>
                  <span className="mt-1 block text-[12px] font-medium text-[#0B2A52] transition-colors group-hover:text-[#B79A72] sm:text-[13px]">
                    +91 94159 51060
                  </span>
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919415951060?text=Hello%20Sharp%20Rays%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20services."
                title="Chat with Sharp Rays on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#E4E9EF] bg-[#F8FAFC] text-[#B79A72]">
                  <MessageCircle size={16} strokeWidth={1.6} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#8794A1]">
                    WhatsApp
                  </span>
                  <span className="mt-1 inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors group-hover:text-[#B79A72] sm:text-[13px]">
                    Start a Chat
                    <ArrowUpRight size={13} />
                  </span>
                </span>
              </a>

              {/* LOCATION */}

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#E4E9EF] bg-[#F8FAFC] text-[#B79A72]">
                  <MapPin size={16} strokeWidth={1.6} />
                </span>

                <div className="min-w-0 pt-0.5">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#8794A1]">
                    Location
                  </span>

                  <address className="mt-1 text-[12px] not-italic leading-[1.9] text-[#52677F] sm:text-[13px]">
                    <span className="font-medium text-[#0B2A52]">
                      Sharp Rays
                    </span>
                    {" "}
                    Naigaon East, Vasai-Virar
                    {" "}
                    Palghar, Maharashtra 401208
                  </address>

                  <p className="mt-2 text-[11px] leading-[1.7] text-[#8794A1]">
                    Serving businesses across Maharashtra & India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================================
            03 — SECONDARY CTA STRIP
        =============================================== */}

        <div className="flex flex-col gap-6 border-y border-[#E5EBF0] py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:py-10">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#B79A72]">
              Your Next Step
            </p>

            <h3
              style={newYorkFont}
              className="mt-2 text-[21px] font-normal leading-[1.35] tracking-[-0.025em] text-[#0B2A52] sm:text-[25px]"
            >
              Not sure where your growth opportunity is?
            </h3>

            <p className="mt-2 text-[12px] leading-[1.8] text-[#758699]">
              Start with a review of your current digital presence.
            </p>
          </div>

          <Link
            href="/free-audit"
            title="Request a Free Digital Marketing Audit"
            className="group inline-flex min-h-[47px] shrink-0 items-center justify-center gap-3 rounded-[12px] border border-[#D7E1EB] bg-[#F8FAFC] px-5 py-3 text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#F8F3EC]"
          >
            Get My Free Audit
            <ArrowUpRight
              size={15}
              className="text-[#B79A72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* ===============================================
            04 — COPYRIGHT & LEGAL
        =============================================== */}

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:py-9">
          <p className="text-[11px] text-[#7B8A99]">
            © {new Date().getFullYear()} Sharp Rays. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy-policy"
              title="Sharp Rays Privacy Policy"
              className="text-[11px] text-[#7B8A99] transition-colors hover:text-[#0B2A52]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              title="Sharp Rays Terms and Conditions"
              className="text-[11px] text-[#7B8A99] transition-colors hover:text-[#0B2A52]"
            >
              Terms & Conditions
            </Link>
          </div>

          <p
            style={newYorkFont}
            className="text-[12px] italic text-[#B79A72]"
          >
            Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
