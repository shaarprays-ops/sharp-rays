
import {
  Award,
  BookOpenText,
  BriefcaseBusiness,
  Check,
  FileCheck2,
  FileText,
  Fingerprint,
  GraduationCap,
  ShieldCheck,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const trustElements = [
  {
    number: "01",
    icon: Award,
    title: "Clear Professional Credentials",
    description:
      "Help prospective clients understand relevant qualifications, verified certifications, professional memberships and specialisations where permitted.",
    detail: "Qualifications & Professional Standing",
  },
  {
    number: "02",
    icon: FileText,
    title: "Services Explained Clearly",
    description:
      "Present your services, areas of expertise, processes, intended clients and enquiry options in a clear and useful way.",
    detail: "Clarity & Service Understanding",
  },
  {
    number: "03",
    icon: BookOpenText,
    title: "Useful Expert-Led Content",
    description:
      "Share accurate, helpful explanations of professional topics, common business challenges and relevant considerations.",
    detail: "Knowledge & Professional Insight",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Credible Business Information",
    description:
      "Make your firm's contact details, business identity, service locations and appropriate professional information easy to find.",
    detail: "Transparency & Business Credibility",
  },
];

const proofTypes = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Verified Qualifications",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Relevant Project Experience",
  },
  {
    number: "03",
    icon: Fingerprint,
    title: "Professional Specialisations",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Professional Memberships",
  },
  {
    number: "05",
    icon: FileCheck2,
    title: "Approved Client Work",
  },
];

export default function ProfessionalServicesTrust() {
  return (
    <section
      id="professional-services-trust"
      aria-labelledby="professional-services-trust-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =================================== */}
        {/* 01 — CENTERED SECTION HEADING      */}
        {/* =================================== */}

        <div className="mx-auto max-w-[790px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              Expertise & Professional Trust
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="professional-services-trust-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[41px]"
          >
            Show Clients the Expertise{" "}
            <span className="text-[#B79A72]">
              Behind Your Professional Services.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            Professional service decisions often depend on confidence,
            clarity and credibility. We help your firm communicate
            what it does, where its expertise lies and why its
            services are relevant to prospective clients.
          </p>
        </div>

        {/* =================================== */}
        {/* 02 — TRUST ARCHITECTURE            */}
        {/* =================================== */}

        <div className="mt-14 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">

          {/* LEFT — SIGNATURE BRAND VISUAL */}

          <div className="relative flex min-h-[410px] flex-col overflow-hidden rounded-[22px] bg-[#0B2A52] px-7 py-9 text-white sm:min-h-[460px] sm:px-9 sm:py-11 lg:min-h-0">
            {/* Decorative architecture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-28 -top-28 h-[390px] w-[390px] rounded-full border border-white/10" />

              <div className="absolute -right-14 -top-14 h-[280px] w-[280px] rounded-full border border-[#B79A72]/25" />

              <div className="absolute -bottom-32 -left-32 h-[330px] w-[330px] rounded-full bg-[#B79A72]/10 blur-[75px]" />
            </div>

            <div className="relative flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#D4B88E]">
                The Foundation of Trust
              </span>

              <span className="font-serif text-[12px] text-white/45">
                SR / 03
              </span>
            </div>

            {/* Central editorial visual */}
            <div className="relative flex flex-1 flex-col items-center justify-center py-12 text-center">
              <div className="relative flex h-[140px] w-[140px] items-center justify-center sm:h-[160px] sm:w-[160px]">
                <div className="absolute inset-0 rounded-full border border-white/15 transition-transform duration-700 motion-safe:hover:scale-105" />

                <div className="absolute inset-[18px] rounded-full border border-[#D4B88E]/35" />

                <div className="absolute inset-[38px] flex items-center justify-center rounded-full bg-white/[0.08] text-[#D4B88E]">
                  <ShieldCheck
                    size={37}
                    strokeWidth={1.2}
                  />
                </div>

                <span className="absolute right-2 top-5 h-[6px] w-[6px] rounded-full bg-[#D4B88E]" />

                <span className="absolute bottom-5 left-3 h-[5px] w-[5px] rounded-full bg-white/65" />
              </div>

              <p className="mt-8 font-serif text-[29px] font-normal leading-[1.17] tracking-[-0.035em] sm:text-[36px]">
                Expertise.
                <span className="block text-[#D4B88E]">
                  Made Credible.
                </span>
              </p>

              <p className="mt-5 max-w-[310px] text-[12px] leading-[1.9] text-white/65 sm:text-[13px]">
                Give prospective clients the information they
                need to understand and evaluate your
                professional services.
              </p>
            </div>

            {/* Bottom visual statement */}
            <div className="relative flex items-center justify-between gap-4 border-t border-white/15 pt-5">
              <span className="text-[10px] uppercase tracking-[0.13em] text-white/55">
                Clarity · Evidence · Confidence
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
                className="text-[#D4B88E]"
              />
            </div>
          </div>

          {/* RIGHT — FOUR EDITORIAL PRINCIPLES */}

          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                What Builds Professional Credibility
              </p>

              <span className="font-serif text-[13px] text-[#B79A72]/70">
                01 — 04
              </span>
            </div>

            <div className="border-t border-[#DDE5EC]">
              {trustElements.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group relative border-b border-[#DDE5EC] transition-colors duration-300 hover:bg-[#F8FAFC]"
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-center scale-y-0 bg-[#B79A72] transition-transform duration-500 motion-safe:group-hover:scale-y-100" />

                    <div className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 px-2 py-6 sm:grid-cols-[55px_minmax(0,1fr)] sm:gap-5 sm:px-4 sm:py-7">
                      {/* Number */}
                      <div className="pt-1">
                        <span className="font-serif text-[20px] font-normal text-[#B79A72]/75">
                          {item.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[9px] uppercase tracking-[0.14em] text-[#A38A6A]">
                              {item.detail}
                            </p>

                            <h3 className="mt-2 font-serif text-[21px] font-normal leading-[1.3] tracking-[-0.02em] sm:text-[24px]">
                              {item.title}
                            </h3>
                          </div>

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E3E9EE] text-[#0B2A52]/60 transition-all duration-300 group-hover:border-[#DCC7AA] group-hover:bg-[#FAF5EE] group-hover:text-[#B79A72] motion-safe:group-hover:-translate-y-0.5">
                            <Icon size={19} strokeWidth={1.45} />
                          </div>
                        </div>

                        <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#0B2A52]/65 sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================== */}
        {/* 03 — GENUINE PROFESSIONAL PROOF    */}
        {/* =================================== */}

        <div className="mt-16 border-t border-[#DDE5EC] pt-11 lg:mt-20 lg:pt-14">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Editorial heading */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                  Real Expertise. Genuine Proof.
                </span>
              </div>

              <h3 className="max-w-[440px] font-serif text-[27px] font-normal leading-[1.22] tracking-[-0.03em] sm:text-[34px]">
                Credibility Should Be{" "}
                <span className="text-[#B79A72]">
                  Demonstrated, Not Claimed.
                </span>
              </h3>
            </div>

            {/* Supporting copy */}
            <div className="lg:pt-8">
              <p className="max-w-[650px] text-[13px] leading-[1.95] text-[#0B2A52]/70 sm:text-[14px]">
                We help your firm present relevant experience,
                verified credentials and useful professional
                information in a way that helps prospective clients
                evaluate your services with confidence.
              </p>

              <p className="mt-4 max-w-[650px] text-[12px] leading-[1.9] text-[#0B2A52]/55 sm:text-[13px]">
                Where permitted, firms can display verified
                qualifications, professional memberships, relevant
                specialisations and approved examples of real work.
              </p>
            </div>
          </div>

          {/* PROOF COLLECTION — NOT CARDS */}

          <div className="mt-10 grid gap-x-7 border-t border-[#DFE6EC] sm:grid-cols-2 lg:grid-cols-5">
            {proofTypes.map((proof) => {
              const Icon = proof.icon;

              return (
                <div
                  key={proof.number}
                  className="group flex items-center gap-4 border-b border-[#DFE6EC] py-5 sm:items-start sm:py-7 lg:flex-col lg:gap-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F7F3ED] text-[#B79A72] transition-colors duration-300 group-hover:bg-[#0B2A52] group-hover:text-white">
                    <Icon
                      size={20}
                      strokeWidth={1.45}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-serif text-[12px] text-[#B79A72]">
                      {proof.number}
                    </span>

                    <p className="mt-1.5 text-[12px] leading-[1.6] text-[#284660] sm:text-[13px]">
                      {proof.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Accuracy statement */}
          <div className="mt-7 flex items-start gap-3">
            <BadgeCheck
              size={17}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-[#B79A72]"
            />

            <p className="max-w-[950px] text-[11px] leading-[1.85] text-[#0B2A52]/55">
              Only genuine, verifiable and appropriately authorised
              information should be published. Qualifications,
              memberships, testimonials, project results and case
              studies must never be invented or misrepresented.
            </p>
          </div>
        </div>

        {/* =================================== */}
        {/* 04 — CLOSING EDITORIAL STATEMENT   */}
        {/* =================================== */}

        <div className="mt-14 flex flex-col gap-5 border-t border-[#DDE5EC] pt-9 lg:mt-16 lg:flex-row lg:items-start lg:gap-14">
          <div className="flex shrink-0 items-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
              Built on Credibility
            </span>
          </div>

          <p className="max-w-[870px] font-serif text-[20px] font-normal leading-[1.55] tracking-[-0.02em] sm:text-[24px]">
            A professional website should help people understand
            your expertise, assess your credibility and{" "}
            <span className="text-[#B79A72]">
              feel confident taking the next step.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
