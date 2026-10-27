
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Code2,
  Network,
  ShoppingBag,
  Smartphone,
  Cpu,
  BriefcaseBusiness,
  ArrowRight,
  Target,
} from "lucide-react";

const startupTypes = [
  {
    icon: Code2,
    title: "SaaS & Software",
    audience: "Subscription platforms, SaaS products and software startups",
    description:
      "Help suitable users discover your software, understand its value and move from product interest to meaningful usage.",
    outcome: "Trials, demo requests and activation",
    highlights: ["Product-led SEO", "Trial & demo journeys"],
  },
  {
    icon: Network,
    title: "B2B & Technology",
    audience: "Technology providers, B2B platforms and emerging tech companies",
    description:
      "Reach relevant business decision-makers, explain complex offerings and build clearer pathways to sales conversations.",
    outcome: "Qualified business enquiries and demos",
    highlights: ["B2B search visibility", "Relevant lead generation"],
  },
  {
    icon: ShoppingBag,
    title: "D2C & Consumer Brands",
    audience: "Ecommerce startups and direct-to-consumer product brands",
    description:
      "Improve product discovery, communicate value and refine the buying journey to support customer acquisition and repeat purchases.",
    outcome: "Purchases and repeat revenue",
    highlights: ["Product discovery", "Conversion & retention"],
  },
  {
    icon: Smartphone,
    title: "Consumer Apps",
    audience: "Mobile apps, consumer platforms and digital-first products",
    description:
      "Introduce your app to relevant audiences and encourage meaningful first-use experiences beyond download counts.",
    outcome: "Relevant installs and meaningful activation",
    highlights: ["Audience acquisition", "Activation journeys"],
  },
  {
    icon: Cpu,
    title: "Product & Hardware",
    audience: "Physical products, consumer devices and hardware innovators",
    description:
      "Explain what makes your product useful, reach relevant customers and support purchasing or enquiry decisions.",
    outcome: "Product enquiries and sales opportunities",
    highlights: ["Product storytelling", "Commercial discovery"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Service-Based Startups",
    audience: "New service businesses and specialist service providers",
    description:
      "Help prospective clients understand your services, find your business and take an appropriate step towards a consultation.",
    outcome: "Qualified service enquiries and consultations",
    highlights: ["Service SEO", "Enquiry conversion"],
  },
] as const;

export default function StartupWhoWeHelp() {
  return (
    <section
      id="startup-who-we-help"
      aria-labelledby="startup-who-we-help-heading"
      className="overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* INTRODUCTION */}
        <div className="mx-auto max-w-[940px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Startups We Support
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="startup-who-we-help-heading"
            className="mx-auto max-w-[880px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Different Startup Models.{" "}
            <span className="text-[#B79A72]">
              Different Growth Priorities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            A SaaS startup may prioritise activation, while a D2C
            brand may focus on purchases and repeat customers.
            We shape marketing priorities around how your business
            attracts, converts and serves customers.
          </p>
        </div>

        {/* STARTUP MODELS */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#B79A72]">
                Find Your Business Model
              </p>

              <h3 className="mt-3 text-[24px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[29px] lg:text-[32px]">
                Who We Work With.
              </h3>
            </div>

            <p className="max-w-[395px] text-[13px] leading-6 text-[#0B2A52]/55 sm:text-[14px]">
              Explore the business models and marketing
              priorities we can support.
            </p>
          </div>

          {/* SIX BALANCED CARDS */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
            {startupTypes.map((startup) => {
              const Icon = startup.icon;

              return (
                <article
                  key={startup.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E1E8EF] bg-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#D4BE9F] hover:shadow-[0_15px_36px_rgba(11,42,82,0.055)]"
                >
                  {/* TOP CONTENT */}
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-7 sm:px-7 sm:pt-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[13px] border border-[#E5EBF0] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:border-[#E8D9C3] group-hover:bg-[#F8F2E9] group-hover:text-[#B79A72]">
                        <Icon size={24} strokeWidth={1.5} />
                      </span>

                      <span className="mt-2 h-px w-10 bg-[#DCE5EC] transition-colors duration-300 group-hover:bg-[#B79A72]" />
                    </div>

                    {/* TITLE */}
                    <h4 className="mt-6 text-[23px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[25px]">
                      {startup.title}
                    </h4>

                    {/* AUDIENCE */}
                    <p className="mt-3 min-h-[42px] text-[12px] leading-6 text-[#B79A72] sm:text-[13px]">
                      {startup.audience}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                      {startup.description}
                    </p>

                    {/* MARKETING FOCUS */}
                    <div className="mt-auto pt-7">
                      <div className="border-t border-[#E5EBF0] pt-5">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                          Marketing Focus
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {startup.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center rounded-full border border-[#E5EAF0] bg-[#FAFBFC] px-3 py-2 text-[11px] leading-4 text-[#0B2A52]/70"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OUTCOME STRIP */}
                  <div className="border-t border-[#E5EBF0] bg-[#FAFBFC] px-6 py-5 sm:px-7">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4ECDF] text-[#B79A72]">
                        <Target size={17} strokeWidth={1.6} />
                      </span>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                          Primary Growth Goal
                        </p>

                        <p className="mt-1.5 text-[14px] font-normal leading-6 text-[#0B2A52] sm:text-[15px]">
                          {startup.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* STRATEGY EXPLANATION */}
        <div className="mt-14 border-t border-[#E2E8EF] pt-10 sm:mt-16 lg:mt-20 lg:pt-12">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#B79A72]">
                Why Your Business Model Matters
              </p>

              <h3 className="mt-4 max-w-[530px] text-[27px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[32px] lg:text-[35px]">
                The Same Marketing Strategy{" "}
                <span className="text-[#B79A72]">
                  Won&apos;t Fit Every Startup.
                </span>
              </h3>
            </div>

            <div>
              <p className="max-w-[710px] text-[14px] leading-8 text-[#0B2A52]/65 sm:text-[15px]">
                A software company may need to turn trials into
                active users. A consumer brand may need to improve
                purchasing and repeat orders. A service startup
                may need more relevant enquiries and consultations.
              </p>

              <p className="mt-4 max-w-[710px] text-[14px] leading-8 text-[#0B2A52]/65 sm:text-[15px]">
                We evaluate the products you offer, the customers
                you serve and the stage of your business before
                recommending marketing activities.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#E5EBF0] pt-6">
                <Check
                  size={18}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-[#B79A72]"
                />

                <p className="text-[12px] leading-6 text-[#0B2A52]/55 sm:text-[13px]">
                  Growth outcomes are strategic priorities rather
                  than guaranteed results. Actual performance also
                  depends on the offer, product experience, market
                  demand and wider business execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLOSING CTA */}
        <div className="mt-12 flex flex-col gap-7 border-t border-[#E2E8EF] pt-9 sm:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              Your Business Model Matters
            </p>

            <h3 className="mt-3 max-w-[790px] text-[25px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[29px] lg:text-[32px]">
              Your Startup Is Different.{" "}
              <span className="text-[#B79A72]">
                Your Acquisition Strategy Should Be Too.
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
              strokeWidth={1.6}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
