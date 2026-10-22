
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  FileText,
  Megaphone,
  MonitorSmartphone,
  Search,
  Share2,
  Video,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "SEO & Local Search",
    description:
      "Improve course, programme and institution visibility on Google and Maps.",
    icon: Search,
    href: "/services/seo",
  },
  {
    number: "02",
    title: "Google Ads & Performance Marketing",
    description:
      "Reach students actively searching for admission opportunities.",
    icon: Megaphone,
    href: "/services/performance-marketing",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Build student and parent awareness, engagement and trust.",
    icon: Share2,
    href: "/services/social-media-marketing",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "Improve course discovery, enquiry forms and application paths.",
    icon: MonitorSmartphone,
    href: "/services/website-development",
  },
  {
    number: "05",
    title: "Content Marketing",
    description:
      "Answer student questions and support programme comparisons.",
    icon: FileText,
    href: "/services/content-marketing",
  },
  {
    number: "06",
    title: "AI Automation",
    description:
      "Improve initial enquiry handling, communication and follow-ups.",
    icon: Bot,
    href: "/services/ai-automation",
  },
  {
    number: "07",
    title: "AI Video & Creative",
    description:
      "Create programme promotions, admission campaigns and engaging educational content.",
    icon: Video,
    href: "/services/ai-video-editing",
  },
];

export default function EducationGrowthStack() {
  return (
    <section
      id="education-growth-stack"
      className="relative isolate overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute -right-44 -top-52 h-[470px] w-[470px] rounded-full border border-[#E5EFF9]" />
      <div className="pointer-events-none absolute -right-32 -top-44 h-[360px] w-[360px] rounded-full bg-[#F3F8FD]" />
      <div className="pointer-events-none absolute -left-48 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#EAF3FC]/55 blur-[55px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Your Education Growth Stack
            </p>
            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            The Services We Bring Together to{" "}
            <span className="text-[#B79A72]">Grow Admissions.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
            Different education businesses need different combinations of
            search, advertising, content, technology and creative services. We
            bring these channels together around your admission goals.
          </p>
        </div>

        {/* Services Directory */}
        <div className="mx-auto mt-12 max-w-[1190px] overflow-hidden rounded-[24px] border border-[#0B2A52]/[0.09] bg-white shadow-[0_18px_55px_rgba(11,42,82,0.035)]">
          {/* Table Header */}
          <div className="hidden grid-cols-[1.15fr_0.85fr] border-b border-[#0B2A52]/[0.08] bg-[#F3F8FC] px-8 py-5 md:grid">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B79A72]">
              Service
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B79A72]">
              How It Helps
            </span>
          </div>

          {services.map(({ number, title, description, icon: Icon, href }, index) => (
            <Link
              key={number}
              href={href}
              title={`Explore Sharp Rays ${title} Services`}
              className={`group grid gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#F8FBFD] sm:px-7 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-8 md:px-8 md:py-6 ${
                index !== services.length - 1
                  ? "border-b border-[#0B2A52]/[0.08]"
                  : ""
              }`}
            >
              {/* Service */}
              <div className="flex min-w-0 items-center gap-4">
               

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EEF5FB] text-[#0B2A52] transition-colors duration-300 group-hover:bg-[#E1EDF8]">
                  <Icon size={21} strokeWidth={1.65} />
                </span>

                <h3 className="text-[17px] font-medium leading-[1.25] tracking-[-0.025em] sm:text-[19px]">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex items-center justify-between gap-4 pl-16 sm:pl-20 md:pl-0">
                <p className="max-w-[420px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                  {description}
                </p>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/10 bg-white text-[#B79A72] transition-all duration-300 group-hover:border-[#B79A72]/30 group-hover:bg-[#F7F0E5]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-8 max-w-[950px] text-center">
          <p className="text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
            Together, these services create a more connected education
            marketing strategy — from first discovery to qualified admission
            enquiries and follow-up.
          </p>
        </div>
      </div>
    </section>
  );
}
