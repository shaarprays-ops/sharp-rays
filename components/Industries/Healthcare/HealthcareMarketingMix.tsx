
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  FileText,
  Globe2,
  MapPin,
  Megaphone,
  Search,
  Video,
} from "lucide-react";

const healthcareServices = [
  {
    title: "SEO & Local Search",
    description:
      "Improve visibility for relevant medical specialties, healthcare services and practice locations. Help patients discover accurate information through Google Search and Maps.",
    href: "/services/seo",
    icon: MapPin,
    label: "Search Visibility",
    featured: true,
  },
  {
    title: "Google Ads & Performance Marketing",
    description:
      "Support eligible, compliant search campaigns that connect relevant patient enquiries with the right healthcare services.",
    href: "/services/performance-marketing",
    icon: Search,
    label: "Paid Search",
  },
  {
    title: "Website Development",
    description:
      "Build accessible healthcare websites with clear service information, practitioner profiles and appointment pathways.",
    href: "/services/website-development",
    icon: Globe2,
    label: "Digital Experience",
  },
  {
    title: "Content Marketing",
    description:
      "Create useful, accurate and professionally reviewed medical content that helps people understand your services.",
    href: "/services/content-marketing",
    icon: FileText,
    label: "Medical Content",
  },
  {
    title: "Social Media Marketing",
    description:
      "Share factual health education, service information and institutional updates through appropriate social channels.",
    href: "/services/social-media-marketing",
    icon: Megaphone,
    label: "Social Presence",
  },
  {
    title: "AI Video & Creative",
    description:
      "Develop clear, professionally approved educational videos and visual assets where appropriate and permitted.",
    href: "/services/ai-video-editing",
    icon: Video,
    label: "Visual Communication",
  },
  {
    title: "AI Automation",
    description:
      "Streamline routine enquiries, appointment communication and administrative follow-ups with privacy-conscious workflows.",
    href: "/services/ai-automation",
    icon: Bot,
    label: "Smarter Operations",
  },
];

export default function HealthcareMarketingMix() {
  return (
    <section
      id="healthcare-marketing-mix"
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Centered Heading */}
        <div className="mx-auto max-w-[920px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Your Healthcare Digital Marketing Mix
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="mx-auto max-w-[850px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            The Services We Bring Together for{" "}
            <span className="text-[#B79A72]">
              Better Patient Access.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[730px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Your practice may need stronger local visibility, clearer medical
            information, a better website or more efficient communication.
            We connect the right digital marketing services around those needs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {healthcareServices.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            const isWide = index >= 5;

            return (
              <Link
                key={service.title}
                href={service.href}
                title={`Explore ${service.title} Services at Sharp Rays`}
                className={`group relative flex min-h-[255px] flex-col overflow-hidden rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(11,42,82,0.07)] sm:p-7 ${
                  isFeatured
                    ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                    : "border-[#E2EAF2] bg-white hover:border-[#B79A72]/40"
                } ${isWide ? "lg:col-span-1" : ""} ${
                  index === 5 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Icon and Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${
                      isFeatured
                        ? "border border-white/20 bg-white/10 text-white"
                        : "border border-[#E4EBF3] bg-[#F8FAFC] text-[#0B2A52]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.65} />
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                      isFeatured
                        ? "border-white/25 text-white group-hover:bg-white group-hover:text-[#0B2A52]"
                        : "border-[#E0E8F0] text-[#0B2A52] group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto pt-9">
                  <p
                    className={`mb-3 text-[10px] font-medium uppercase tracking-[0.16em] ${
                      isFeatured ? "text-[#DCC4A2]" : "text-[#B79A72]"
                    }`}
                  >
                    {service.label}
                  </p>

                  <h3
                    className={`max-w-[460px] text-[21px] font-medium leading-[1.18] tracking-[-0.025em] sm:text-[22px] ${
                      isFeatured ? "text-white" : "text-[#0B2A52]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-3 max-w-[500px] text-[13px] leading-6 sm:text-[14px] ${
                      isFeatured
                        ? "text-white/75"
                        : "text-[#0B2A52]/65"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Minimal Hover Accent */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                    isFeatured ? "bg-[#DCC4A2]" : "bg-[#B79A72]"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-9 max-w-[950px] border-t border-[#E7EDF3] pt-7 text-center">
          <p className="text-[12px] leading-6 text-[#0B2A52]/60 sm:text-[13px]">
            The right service mix depends on your specialties, practice
            locations, operational priorities and applicable healthcare
            advertising requirements. All healthcare communication should
            remain accurate, professionally appropriate and privacy-conscious.
          </p>
        </div>
      </div>
    </section>
  );
}
