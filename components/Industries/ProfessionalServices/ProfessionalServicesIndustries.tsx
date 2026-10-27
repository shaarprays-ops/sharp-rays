
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  UsersRound,
  DraftingCompass,
  Ruler,
  Network,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Business Consultants",
    description:
      "Present your consulting expertise, explain your services and make it easier for businesses to enquire about relevant support.",
    focus: "Service Visibility & Enquiries",
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Management Advisors",
    description:
      "Communicate your advisory capabilities, areas of specialisation and approach to supporting business decisions.",
    focus: "Expertise & Credibility",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "HR Consultancies",
    description:
      "Build visibility for recruitment, HR advisory and workforce-related services through relevant digital channels.",
    focus: "Targeted Business Discovery",
  },
  {
    number: "04",
    icon: DraftingCompass,
    title: "Architecture Firms",
    description:
      "Present architectural services, approved project work, design specialisations and professional experience.",
    focus: "Portfolio & Service Presentation",
  },
  {
    number: "05",
    icon: Ruler,
    title: "Engineering Consultants",
    description:
      "Help prospective clients understand your engineering expertise, technical capabilities and project-related services.",
    focus: "Technical Search Visibility",
  },
  {
    number: "06",
    icon: Network,
    title: "Other B2B Specialists",
    description:
      "Support specialised professional firms with clear positioning, relevant content and appropriate enquiry pathways.",
    focus: "Specialist Market Positioning",
  },
] as const;

export default function ProfessionalServicesIndustries() {
  return (
    <section
      id="professional-services-industries"
      aria-labelledby="professional-industries-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* Very subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#B79A72]/[0.035] blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#D8C5AA]/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* ====================================== */}
        {/* 01 — SECTION INTRO                    */}
        {/* ====================================== */}

        <div className="mx-auto max-w-[800px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              Professional Firms We Support
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="professional-industries-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
          >
            Digital Growth for Firms{" "}
            <span className="text-[#B79A72]">
              Built on Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[690px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            We support consultants, advisors and specialist B2B firms
            with digital strategies designed around their services,
            target clients, professional credibility and enquiry goals.
          </p>
        </div>

        {/* ====================================== */}
        {/* 02 — SIX INDUSTRY CARDS               */}
        {/* ====================================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-[18px] border border-[#EAE2D8] bg-[#FFFDFB] p-6 transition-all duration-500 ease-out hover:border-[#CDB18F] hover:bg-[#FCF8F2] hover:shadow-[0_18px_45px_-32px_rgba(100,78,48,0.2)] motion-safe:hover:-translate-y-1 sm:p-8"
              >
                {/* Animated top accent */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full"
                />

                {/* Icon and number */}
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[13px] border border-[#E8DCCB] bg-[#FAF6F0] text-[#B79A72] transition-all duration-300 group-hover:border-[#D3B792] group-hover:bg-[#F4EBDD] motion-safe:group-hover:-translate-y-1">
                    <Icon size={23} strokeWidth={1.45} />
                  </span>

                 
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="font-serif text-[24px] font-normal leading-[1.25] tracking-[-0.025em] text-[#0B2A52] sm:text-[26px]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 max-w-[350px] text-[13px] leading-[1.9] text-[#63778A]">
                    {industry.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-auto pt-7">
                  <div className="flex items-center gap-3 border-t border-[#E9E0D5] pt-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B79A72]" />

                    <span className="text-[10px] uppercase tracking-[0.11em] text-[#9A8060]">
                      {industry.focus}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ====================================== */}
        {/* 03 — REGULATED PROFESSIONS NOTE       */}
        {/* ====================================== */}

        <div className="mt-12 overflow-hidden rounded-[17px] border border-[#E9DFD2] bg-[#FAF7F2] sm:mt-14">
          <div className="flex flex-col gap-5 px-6 py-7 sm:flex-row sm:items-start sm:gap-6 sm:px-8 sm:py-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] border border-[#E4D7C5] bg-white text-[#B79A72]">
              <ShieldCheck size={23} strokeWidth={1.5} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B79A72]">
                Professional Responsibility
              </p>

              <h3 className="mt-2 font-serif text-[22px] font-normal leading-[1.3] text-[#0B2A52] sm:text-[25px]">
                Marketing With Professional Responsibilities in Mind.
              </h3>

              <p className="mt-3 max-w-[950px] text-[12px] leading-[1.95] text-[#627588] sm:text-[13px]">
                For legal, accounting, regulated financial and other
                professionally regulated services, marketing
                recommendations are subject to applicable laws,
                professional codes, advertising restrictions and
                approval requirements. We assess suitable activities
                before recommending campaigns, promotional content
                or client acquisition methods.
              </p>

              <p className="mt-3 max-w-[950px] text-[11px] leading-[1.85] text-[#84919D]">
                Any planned activity should be reviewed against the
                current rules of the relevant professional body
                before publication or launch.
              </p>
            </div>
          </div>
        </div>

        {/* ====================================== */}
        {/* 04 — MINIMAL CLOSING CTA              */}
        {/* ====================================== */}

        <div className="mt-12 flex flex-col gap-7 border-t border-[#EAE3DB] pt-9 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[730px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                Built Around Your Firm
              </span>
            </div>

            <p className="font-serif text-[23px] font-normal leading-[1.4] tracking-[-0.025em] text-[#0B2A52] sm:text-[27px]">
              Your Expertise Is Different.{" "}
              <span className="text-[#B79A72]">
                Your Marketing Strategy Should Be Too.
              </span>
            </p>
          </div>

          <Link
            href="/contact?service=professional-services-marketing"
            title="Discuss Your Professional Services Strategy"
            className="group inline-flex min-h-[49px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#173E69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
          >
            Discuss Your Growth Strategy

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
