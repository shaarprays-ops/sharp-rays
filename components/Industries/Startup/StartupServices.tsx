
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MonitorSmartphone,
  SearchCheck,
  Target,
  MessagesSquare,
  BookOpenText,
  Workflow,
  Clapperboard,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Startup Website & Landing Page Development",
    category: "DIGITAL FOUNDATION",
    description:
      "Build a clear, responsive website or landing page that explains your product, communicates its value and gives interested customers a simple next step.",
    outcomes: ["Launch-ready pages", "Clear conversion paths"],
    href: "/services/website-development",
    featured: true,
  },
  {
    icon: SearchCheck,
    title: "Startup SEO & AI Search Visibility",
    category: "ORGANIC DISCOVERY",
    description:
      "Improve your startup's discoverability through technical SEO, search-focused landing pages, useful content and clear information that can support visibility across traditional and AI-powered search experiences.",
    outcomes: ["Relevant organic visibility", "Search-friendly content"],
    href: "/services/search-engine-optimization",
  },
  {
    icon: Target,
    title: "Performance Marketing & Customer Acquisition",
    category: "PAID ACQUISITION",
    description:
      "Test suitable audiences, offers and messages through focused Google and Meta advertising. Refine campaigns using available conversion and acquisition data.",
    outcomes: ["Focused campaign testing", "Acquisition measurement"],
    href: "/services/performance-marketing",
  },
  {
    icon: MessagesSquare,
    title: "Social Media & Startup Brand Building",
    category: "BRAND PRESENCE",
    description:
      "Introduce your product, communicate your startup's story and build a consistent social presence through relevant creative content and community-focused communication.",
    outcomes: ["Consistent brand messaging", "Audience engagement"],
    href: "/services/social-media-marketing",
  },
  {
    icon: BookOpenText,
    title: "Content Marketing for Startups",
    category: "CONTENT & EDUCATION",
    description:
      "Create useful articles, product explainers, comparison content and educational resources that help potential customers understand their problems and evaluate your offering.",
    outcomes: ["Useful customer education", "Content-led discovery"],
    href: "/services/content-marketing",
  },
  {
    icon: Workflow,
    title: "AI Automation & Lead Nurturing",
    category: "WORKFLOW EFFICIENCY",
    description:
      "Support routine lead capture, enquiry routing, follow-up reminders and administrative communication through appropriately designed automation, with relevant privacy safeguards and human oversight.",
    outcomes: ["Organised lead follow-ups", "Routine workflow support"],
    href: "/services/ai-automation",
  },
  {
    icon: Clapperboard,
    title: "AI Video, Product Explainers & Creative",
    category: "PRODUCT COMMUNICATION",
    description:
      "Help customers understand your offering through suitable AI-assisted creative production, product explainers, short-form videos and campaign assets.",
    outcomes: ["Product storytelling", "Marketing-ready creative"],
    href: "/services/video-and-creative",
  },
];

const featured = services[0];
const supportingServices = services.slice(1);
const FeaturedIcon = featured.icon;

export default function StartupServices() {
  return (
    <section
      id="startup-services"
      aria-labelledby="startup-services-heading"
      className="overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* SECTION INTRODUCTION */}
        <div className="mx-auto max-w-[930px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />

            <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              What We Can Build for Your Startup
            </p>

            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />
          </div>

          <h2
            id="startup-services-heading"
            className="mx-auto max-w-[850px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            The Digital Marketing Services{" "}
            <span className="text-[#B79A72]">
              Your Startup Actually Needs.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            We connect websites, search visibility, acquisition
            campaigns, content, social media and automation around
            your startup&apos;s stage and priorities — without
            recommending every service at once.
          </p>
        </div>

        {/* FEATURED SERVICE */}
        <div className="mt-12 overflow-hidden rounded-[20px] border border-[#DFE7EE] bg-[#FAFBFC] sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#DDE6EE] bg-white text-[#0B2A52]">
                  <FeaturedIcon size={23} strokeWidth={1.6} />
                </span>

                <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                  {featured.category}
                </p>
              </div>

              <h3 className="max-w-[610px] text-[27px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[31px] lg:text-[34px]">
                {featured.title}
              </h3>

              <p className="mt-5 max-w-[610px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
                {featured.description}
              </p>

              <Link
                href={featured.href}
                title={`Explore ${featured.title}`}
                className="group mt-7 inline-flex w-fit min-h-[47px] items-center justify-center gap-3 rounded-[11px] bg-[#0B2A52] px-5 py-3 text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#123B69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[13px]"
              >
                Explore Website Development

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* RIGHT — SIMPLE VALUE EXPLANATION */}
            <div className="flex flex-col justify-center border-t border-[#E0E7ED] bg-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
              <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                Why This Matters for Your Startup
              </p>

              <h4 className="mt-3 max-w-[470px] text-[23px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[26px]">
                Give People a Clear Reason to Choose You.
              </h4>

              <p className="mt-5 max-w-[500px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                A good startup website helps visitors understand
                what your product does, who it is for and what
                they should do next.
              </p>

              <div className="mt-7 border-t border-[#E4EAF0]">
                {[
                  {
                    title: "Explain Your Offering",
                    description:
                      "Make your product and value proposition easy to understand.",
                  },
                  {
                    title: "Build Early Credibility",
                    description:
                      "Present a reliable, professional digital presence.",
                  },
                  {
                    title: "Encourage Action",
                    description:
                      "Help visitors register, enquire or take the next step.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 border-b border-[#E4EAF0] py-4"
                  >
                    <Check
                      size={17}
                      strokeWidth={1.7}
                      className="mt-1 shrink-0 text-[#B79A72]"
                    />

                    <div>
                      <h5 className="text-[15px] font-normal leading-6">
                        {item.title}
                      </h5>

                      <p className="mt-1 text-[12px] leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING SERVICES */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                Explore More Capabilities
              </p>

              <h3 className="mt-3 text-[25px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[29px] lg:text-[33px]">
                More Ways to Support Your Startup&apos;s Growth.
              </h3>
            </div>

            <p className="max-w-[390px] text-[13px] leading-6 text-[#0B2A52]/60">
              Choose the services that solve your
              current challenges and support your goals.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {supportingServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-[19px] border border-[#E3E9EF] bg-white p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-[#D7C3A7] hover:shadow-[0_14px_32px_rgba(11,42,82,0.055)] sm:p-7"
                >
                  {/* ICON */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#E4EAF0] bg-[#F9FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:bg-[#F6F0E8] group-hover:text-[#B79A72]">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                    {service.category}
                  </p>

                  <h4 className="mt-3 text-[21px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[22px]">
                    {service.title}
                  </h4>

                  <p className="mt-4 text-[13px] leading-7 text-[#0B2A52]/65">
                    {service.description}
                  </p>

                  {/* OUTCOMES */}
                  <div className="mt-6 border-t border-[#E8EDF1] pt-5">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                      What This Supports
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {service.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-center gap-2.5"
                        >
                          <Check
                            size={15}
                            strokeWidth={1.7}
                            className="shrink-0 text-[#B79A72]"
                          />

                          <span className="text-[12px] leading-5 text-[#0B2A52]/70">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LINK */}
                  <div className="mt-auto pt-7">
                    <Link
                      href={service.href}
                      title={`Explore ${service.title}`}
                      className="group/link inline-flex min-h-[36px] items-center gap-2 text-[12px] font-normal text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[13px]"
                    >
                      Explore Service

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* STRATEGY NOTE */}
        <div className="mt-12 flex items-start gap-4 border-l-[3px] border-[#B79A72] bg-[#F8FAFC] px-5 py-6 sm:mt-14 sm:px-7">
          <Lightbulb
            size={21}
            strokeWidth={1.6}
            className="mt-1 shrink-0 text-[#B79A72]"
          />

          <div>
            <h3 className="text-[20px] font-normal leading-[1.3] sm:text-[22px]">
              You Don&apos;t Need Everything at Once.
            </h3>

            <p className="mt-2 max-w-[1000px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
              A pre-launch startup may prioritise a credible
              website and clear positioning, while an early-stage
              business may focus on testing audiences and acquisition.
              We recommend a relevant mix rather than selling
              every service to every startup.
            </p>
          </div>
        </div>

        {/* CLOSING CTA */}
        <div className="mt-14 grid gap-7 border-t border-[#E2E8EF] pt-9 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              A Plan Built Around Your Stage
            </p>

            <h3 className="mt-3 max-w-[800px] text-[25px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[29px]">
              You Don&apos;t Need Every Service.{" "}
              <span className="text-[#B79A72]">
                You Need the Right Priorities.
              </span>
            </h3>
          </div>

          <Link
            href="/contact?service=startup-marketing"
            title="Build My Startup Growth Plan"
            className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#123B69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:w-auto sm:text-[13px]"
          >
            Build My Startup Growth Plan

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
