
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Search,
  Target,
  Code2,
  FileText,
  UsersRound,
  Workflow,
  Clapperboard,
} from "lucide-react";

const manufacturingServices = [
  {
    icon: Search,
    category: "Organic Search & Visibility",
    title: "Manufacturing SEO & Industrial Search",
    intro:
      "Help your manufacturing business appear for relevant product, material, process and supplier-related searches.",
    description:
      "We work on industrial keyword research, product and category SEO, capability pages, technical SEO, internal linking, structured data where appropriate, and useful content that supports organic and AI-assisted search discovery.",
    goal:
      "Improve long-term visibility among relevant industrial buyers.",
    cta: "Explore SEO Services",
    href: "/services/seo",
    featured: true,
  },
  {
    icon: Target,
    category: "Paid Search & Lead Generation",
    title: "Google Ads & B2B Performance Marketing",
    intro:
      "Reach buyers who are actively searching for industrial equipment, components, materials or manufacturing services.",
    description:
      "We build keyword-focused Google Search campaigns, targeted landing pages, negative keyword strategies and conversion tracking to support relevant enquiries and quotation requests.",
    goal:
      "Capture suitable demand and improve advertising efficiency.",
    cta: "Explore Performance Marketing",
    href: "/services/performance-marketing",
  },
  {
    icon: Code2,
    category: "Websites & Buyer Experience",
    title: "Manufacturing Website Development",
    intro:
      "Turn your website into a useful resource for industrial buyers.",
    description:
      "We develop product catalogues, capability pages, service pages, specification sections, company profiles and quotation enquiry experiences that help visitors understand your manufacturing business.",
    goal:
      "Build buyer confidence and simplify the enquiry process.",
    cta: "Explore Website Development",
    href: "/services/website-development",
  },
  {
    icon: FileText,
    category: "Technical Content & Authority",
    title: "Industrial Content Marketing",
    intro:
      "Explain complex products and technical capabilities in language your buyers can understand.",
    description:
      "We create product descriptions, manufacturing process explainers, application guides, supplier-focused content, technical articles and approved case studies.",
    goal:
      "Help buyers research your products and evaluate your capabilities.",
    cta: "Explore Content Marketing",
    href: "/services/content-marketing",
  },
  {
    icon: UsersRound,
    category: "Professional Brand Visibility",
    title: "LinkedIn & B2B Social Media Marketing",
    intro:
      "Showcase your manufacturing expertise, production capabilities and industry knowledge to professional audiences.",
    description:
      "We create content around product applications, facility updates, industry information, verified achievements and company developments.",
    goal:
      "Build professional credibility and relevant industry awareness.",
    cta: "Explore Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    icon: Workflow,
    category: "Automation & Sales Efficiency",
    title: "AI Automation & B2B Lead Management",
    intro:
      "Make it easier to manage incoming product enquiries and quotation requests.",
    description:
      "We can build workflows for enquiry acknowledgement, requirement collection, lead routing, CRM updates and follow-up reminders.",
    goal:
      "Help your sales team respond efficiently to relevant opportunities.",
    cta: "Explore AI Automation",
    href: "/services/ai-automation",
  },
  {
    icon: Clapperboard,
    category: "Creative & Product Communication",
    title: "AI Video & Industrial Creative",
    intro:
      "Present your industrial products and manufacturing capabilities through professional visuals, product explainers, process illustrations and B2B campaign creatives.",
    description:
      "We create content designed to communicate complex offerings clearly, using manufacturer-approved technical information.",
    goal:
      "Make your products and capabilities easier to understand.",
    cta: "Explore AI Video & Creative",
    href: "/services/ai-video-creative",
  },
];

export default function ManufacturingServices() {
  const featuredService = manufacturingServices[0];
  const otherServices = manufacturingServices.slice(1);

  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id="manufacturing-services"
      aria-labelledby="manufacturing-services-heading"
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        
        {/* CENTERED SECTION INTRODUCTION */}
        <div className="mx-auto max-w-[930px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              What Sharp Rays Can Do for Your Manufacturing Business
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="manufacturing-services-heading"
            className="mx-auto max-w-[880px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            The Right Marketing Services for Your{" "}
            <span className="text-[#B79A72]">
              Products, Buyers and Business Goals.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Every manufacturing business serves a different market. We
            combine digital marketing services around your products,
            technical capabilities, target industries and B2B buyer
            requirements.
          </p>
        </div>

        {/* FEATURED SEO SERVICE */}
        <div className="mt-12 overflow-hidden rounded-[22px] border border-[#DDE6EF] bg-[#F8FAFC] sm:mt-14 lg:mt-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            
            {/* FEATURED LEFT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#0B2A52] text-white">
                  <FeaturedIcon size={21} strokeWidth={1.6} />
                </span>

                <span className="text-[10px] font-normal uppercase tracking-[0.16em] text-[#B79A72]">
                  {featuredService.category}
                </span>
              </div>

              <h3 className="max-w-[600px] text-[26px] font-normal leading-[1.18] tracking-[-0.03em] sm:text-[30px] lg:text-[34px]">
                {featuredService.title}
              </h3>

              <p className="mt-5 max-w-[620px] text-[14px] font-normal leading-7 text-[#0B2A52]/75 sm:text-[15px]">
                {featuredService.intro}
              </p>

              <p className="mt-4 max-w-[650px] text-[13px] font-normal leading-7 text-[#0B2A52]/60 sm:text-[14px]">
                {featuredService.description}
              </p>

              <Link
                href={featuredService.href}
                title={featuredService.cta}
                className="group mt-7 inline-flex w-fit min-h-[46px] items-center justify-center gap-3 rounded-[11px] bg-[#0B2A52] px-5 py-3 text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#173D69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[13px]"
              >
                {featuredService.cta}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* FEATURED RIGHT */}
            <div className="flex flex-col justify-center border-t border-[#DDE6EF] bg-white p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
              <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
                What This Service Focuses On
              </p>

              <h4 className="mt-3 text-[23px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[26px]">
                Help the Right Industrial Buyers Find You.
              </h4>

              <div className="mt-7 border-t border-[#E4EBF1]">
                {[
                  "Industrial keyword research",
                  "Product and category visibility",
                  "Manufacturing capability pages",
                  "Technical SEO and internal linking",
                  "Relevant organic search discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#E4EBF1] py-3.5"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#B79A72]"
                    />

                    <span className="text-[13px] font-normal leading-6 text-[#0B2A52]/75 sm:text-[14px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-l-2 border-[#B79A72] pl-4">
                <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#B79A72]">
                  Our Goal
                </p>

                <p className="mt-2 text-[13px] font-normal leading-6 text-[#0B2A52]/70 sm:text-[14px]">
                  {featuredService.goal}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER SERVICES HEADER */}
        <div className="mt-14 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20">
          <div>
            <p className="text-[10px] font-normal uppercase tracking-[0.17em] text-[#B79A72]">
              Supporting Your B2B Growth
            </p>

            <h3 className="mt-3 text-[25px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[30px] lg:text-[33px]">
              More Ways to Grow Your Manufacturing Business.
            </h3>
          </div>

          <p className="max-w-[390px] text-[13px] font-normal leading-6 text-[#0B2A52]/55 sm:text-[14px]">
            Choose the marketing capabilities that match your
            business priorities and target buyers.
          </p>
        </div>

        {/* SIX UNIFORM SERVICE CARDS */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
          {otherServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-[20px] border border-[#E3EAF1] bg-white p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/40 hover:shadow-[0_16px_40px_rgba(11,42,82,0.06)] sm:p-7"
              >
                {/* ICON */}
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] border border-[#E5ECF2] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:bg-[#F6F0E7] group-hover:text-[#B79A72]">
                    <Icon size={22} strokeWidth={1.65} />
                  </span>

                  <span className="h-px w-10 bg-[#DDE6EE] transition-colors group-hover:bg-[#B79A72]" />
                </div>

                {/* CATEGORY */}
                <p className="mt-7 text-[10px] font-normal uppercase leading-5 tracking-[0.14em] text-[#B79A72]">
                  {service.category}
                </p>

                {/* TITLE */}
                <h4 className="mt-3 text-[21px] font-normal leading-[1.22] tracking-[-0.025em] text-[#0B2A52] sm:text-[22px]">
                  {service.title}
                </h4>

                {/* INTRO */}
                <p className="mt-4 text-[13px] font-normal leading-6 text-[#0B2A52]/75 sm:text-[14px]">
                  {service.intro}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[13px] font-normal leading-6 text-[#0B2A52]/55">
                  {service.description}
                </p>

                {/* GOAL */}
                <div className="mt-6 border-t border-[#E7EDF2] pt-5">
                  <p className="text-[10px] font-normal uppercase tracking-[0.14em] text-[#B79A72]">
                    Our Goal
                  </p>

                  <p className="mt-2 text-[12px] font-normal leading-6 text-[#0B2A52]/65 sm:text-[13px]">
                    {service.goal}
                  </p>
                </div>

                {/* SERVICE LINK */}
                <div className="mt-auto pt-7">
                  <Link
                    href={service.href}
                    title={service.cta}
                    className="group/link inline-flex min-h-[36px] items-center gap-2 text-[12px] font-normal text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[13px]"
                  >
                    {service.cta}

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

        {/* FINAL CTA */}
        <div className="mt-14 border-t border-[#E5EBF1] pt-9 sm:mt-16 lg:mt-20 lg:pt-11">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
                  Built Around Your Manufacturing Business
                </p>
              </div>

              <h3 className="max-w-[850px] text-[25px] font-normal leading-[1.18] tracking-[-0.025em] sm:text-[30px] lg:text-[34px]">
                Your Products Are Different.{" "}
                <span className="text-[#B79A72]">
                  Your Marketing Strategy Should Be Too.
                </span>
              </h3>

              <p className="mt-4 max-w-[760px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                Whether you manufacture industrial components, machinery or
                custom-engineered products, we can help you choose digital
                marketing services aligned with your buyers, business goals
                and available resources.
              </p>
            </div>

            <div className="lg:shrink-0">
              <Link
                href="/contact"
                title="Build My B2B Marketing Strategy"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-all duration-300 hover:bg-[#173D69] hover:shadow-[0_10px_25px_rgba(11,42,82,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:w-auto sm:text-[13px]"
              >
                Build My B2B Marketing Strategy

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
