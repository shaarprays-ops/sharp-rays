
import {
  ArrowRight,
  BarChart3,
  CircleCheck,
  ClipboardCheck,
  GraduationCap,
  SearchCheck,
  Target,
  Wallet,
} from "lucide-react";

const metrics = [
  {
    number: "01",
    icon: Target,
    title: "Qualified Student Enquiries",
    description:
      "How many enquiries match the relevant programme, location and admission criteria.",
    label: "Lead Quality",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Cost per Qualified Lead",
    description:
      "How efficiently campaigns attract suitable prospective students.",
    label: "Campaign Efficiency",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Enquiry-to-Application Rate",
    description:
      "The proportion of enquiries that progress to an application.",
    label: "Application Progress",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Cost per Application",
    description:
      "Marketing spend relative to completed applications.",
    label: "Acquisition Efficiency",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Enquiry-to-Enrolment Rate",
    description:
      "How many enquiries eventually result in confirmed enrolments.",
    label: "Admission Outcomes",
  },
  {
    number: "06",
    icon: SearchCheck,
    title: "Organic Search Visibility",
    description:
      "How relevant course, institution and admission pages perform in search.",
    label: "Search Performance",
  },
];

export default function EducationGrowthMetrics() {
  return (
    <section
      id="education-growth-metrics"
      className="relative isolate w-full overflow-hidden bg-[#F7FAFD] text-[#0B2A52]"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute -right-36 -top-40 h-[430px] w-[430px] rounded-full bg-[#E8F2FC]/65 blur-[45px]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#EAF3FC]/55 blur-[50px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="max-w-[790px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-[#B79A72]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
                What Actually Matters
              </p>
            </div>

            <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              We Look Beyond Leads to{" "}
              <span className="text-[#B79A72]">
                Understand Admission Growth.
              </span>
            </h2>
          </div>

          <p className="max-w-[610px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:pb-2">
            A high number of student enquiries means little if most are
            irrelevant or never progress towards an application. We focus
            on understanding lead quality, campaign efficiency and the
            stages where prospective students need more support.
          </p>
        </div>

        {/* Metric Matrix */}
        <div className="mt-12 overflow-hidden rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/90 shadow-[0_18px_55px_rgba(11,42,82,0.04)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ number, icon: Icon, title, description, label }, index) => (
              <article
                key={number}
                className={`group relative flex min-h-[235px] flex-col p-6 transition-colors duration-300 hover:bg-[#F8FBFD] sm:p-8 ${
                  index !== 5
                    ? "border-b border-[#0B2A52]/[0.08]"
                    : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-[#0B2A52]/[0.08]"
                    : "md:border-r-0"
                } ${
                  index >= 4 ? "md:border-b-0" : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-[#0B2A52]/[0.08]"
                    : "lg:border-r-0"
                } ${
                  index < 3
                    ? "lg:border-b lg:border-[#0B2A52]/[0.08]"
                    : "lg:border-b-0"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#EDF5FC] text-[#0B2A52] transition-colors group-hover:bg-white">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                 
                </div>

                <div className="mt-6">
                  <h3 className="max-w-[350px] text-[20px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[21px]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[360px] text-[13px] leading-6 text-[#0B2A52]/66 sm:text-[14px]">
                    {description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-[#B79A72]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#B79A72]" />
                    {label}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Admission progression */}
        <div className="mt-8 flex flex-col gap-6 rounded-[22px] bg-[#0B2A52] px-6 py-6 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#D7BD98]">
              From Lead to Admission
            </p>

            <p className="mt-2 max-w-[560px] text-[13px] leading-6 text-white/70 sm:text-[14px]">
              Better reporting helps identify where prospective
              students need more support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[12px] font-medium sm:text-[13px]">
            <span>Enquiry</span>
            <ArrowRight size={15} className="text-[#D7BD98]" />
            <span>Application</span>
            <ArrowRight size={15} className="text-[#D7BD98]" />
            <span>Enrolment</span>
            <CircleCheck size={18} className="ml-1 text-[#D7BD98]" />
          </div>
        </div>

        {/* Reporting Note */}
        <p className="mx-auto mt-6 max-w-[900px] text-center text-[12px] leading-6 text-[#0B2A52]/50 sm:text-[13px]">
          Reporting depends on the institution&apos;s tracking setup and
          the admission-stage data it can share with us.
        </p>
      </div>
    </section>
  );
}
