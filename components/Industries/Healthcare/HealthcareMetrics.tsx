
import {
  ArrowRight,
  CalendarCheck2,
  Clock3,
  MapPin,
  MousePointerClick,
  PhoneCall,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "DISCOVERABILITY",
    title: "Getting Found",
    description:
      "Understand how patients discover your medical services and practice locations.",
    icon: Search,
    metrics: [
      {
        title: "Organic Search Visibility",
        description:
          "How specialty, medical service and location pages perform in relevant Google searches.",
        icon: Search,
      },
      {
        title: "Google Maps Interactions",
        description:
          "Calls, direction requests and other interactions with your business listing.",
        icon: MapPin,
      },
    ],
  },
  {
    number: "02",
    label: "PATIENT ENQUIRIES",
    title: "Making Contact",
    description:
      "Understand how easily visitors reach your practice through appropriate channels.",
    icon: PhoneCall,
    metrics: [
      {
        title: "Appointment Enquiries",
        description:
          "Requests received through approved website forms, phone calls and other contact channels.",
        icon: CalendarCheck2,
      },
      {
        title: "Cost per Relevant Enquiry",
        description:
          "How efficiently eligible paid campaigns generate appropriate enquiries.",
        icon: Target,
      },
      {
        title: "Website Contact Conversion",
        description:
          "How easily website visitors find and use consultation or contact options.",
        icon: MousePointerClick,
      },
    ],
  },
  {
    number: "03",
    label: "PRACTICE OPERATIONS",
    title: "Supporting Appointments",
    description:
      "Understand appointment attendance and how promptly administrative teams respond.",
    icon: CalendarCheck2,
    metrics: [
      {
        title: "Appointment Attendance",
        description:
          "The proportion of confirmed appointments completed, where authorised data is available.",
        icon: CalendarCheck2,
      },
      {
        title: "Enquiry Response Time",
        description:
          "How promptly administrative teams acknowledge and manage requests.",
        icon: Clock3,
      },
    ],
  },
];

export default function HealthcareMetrics() {
  return (
    <section
      id="healthcare-metrics"
      className="relative overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* SECTION INTRO */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-[#B79A72]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
                What Actually Matters
              </p>
            </div>

            <h2 className="max-w-[800px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              We Measure More Than Traffic to Understand{" "}
              <span className="text-[#B79A72]">
                Healthcare Visibility.
              </span>
            </h2>
          </div>

          <p className="max-w-[600px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:pb-1 lg:text-[16px]">
            Website traffic and advertising impressions tell only part of the
            story. We focus on how easily people discover your services,
            find useful information and reach your practice through
            appropriate contact channels.
          </p>
        </div>

        {/* PERFORMANCE JOURNEY */}
        <div className="relative mt-14 lg:mt-16">

          {/* Desktop continuous line */}
          <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[35px] hidden h-px bg-[#CADCEB] lg:block" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            {stages.map((stage, stageIndex) => {
              const StageIcon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className={`relative min-w-0 ${
                    stageIndex > 0
                      ? "lg:border-l lg:border-[#DCE7F1]"
                      : ""
                  }`}
                >
                  {/* STAGE HEADING */}
                  <div className="relative px-0 lg:px-7 xl:px-9">
                    <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-5">
                      <div className="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border border-[#D5E4F1] bg-white text-[#0B2A52] shadow-[0_6px_22px_rgba(11,42,82,0.045)]">
                        <StageIcon size={26} strokeWidth={1.5} />

                        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-[3px] border-[#F8FBFD] bg-[#B79A72]" />
                      </div>

                      <div className="min-w-0 lg:text-center">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72]">
                          {stage.label}
                        </p>

                        <h3 className="mt-2 text-[23px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[25px]">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#0B2A52]/60 lg:mx-auto lg:min-h-[72px] lg:text-center">
                      {stage.description}
                    </p>
                  </div>

                  {/* MEASUREMENTS */}
                  <div className="mt-7 border-t border-[#C9DAE9] lg:mt-9">
                    {stage.metrics.map((metric) => {
                      const MetricIcon = metric.icon;

                      return (
                        <article
                          key={metric.title}
                          className="group relative border-b border-[#DCE7F1] py-6 transition-colors duration-300 hover:bg-white/65 lg:px-7 xl:px-9"
                        >
                          <div className="flex items-start gap-4">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F2FA] text-[#0B2A52]">
                              <MetricIcon size={17} strokeWidth={1.6} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="text-[17px] font-medium leading-[1.25] tracking-[-0.02em] sm:text-[18px]">
                                {metric.title}
                              </h4>

                              <p className="mt-2 text-[13px] leading-[1.75] text-[#0B2A52]/65">
                                {metric.description}
                              </p>
                            </div>
                          </div>

                          <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-300 group-hover:w-full" />
                        </article>
                      );
                    })}
                  </div>

                  {/* Mobile stage transition */}
                  {stageIndex < stages.length - 1 && (
                    <div className="mt-6 flex items-center gap-3 text-[#B79A72] lg:hidden">
                      <span className="h-px flex-1 bg-[#C9DAE9]" />
                      <ArrowRight size={17} strokeWidth={1.5} />
                      <span className="h-px flex-1 bg-[#C9DAE9]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* REPORTING NOTE */}
        <div className="mt-14 border-t border-[#C9DAE9] pt-7 lg:mt-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex shrink-0 items-center gap-3 lg:w-[250px]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE7F1] bg-white text-[#B79A72]">
                <ShieldCheck size={21} strokeWidth={1.5} />
              </span>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#B79A72]">
                  Our Approach
                </p>
                <h3 className="mt-1 text-[15px] font-medium">
                  Responsible Reporting
                </h3>
              </div>
            </div>

            <p className="max-w-[980px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
              Reporting depends on each provider&apos;s analytics setup,
              operational systems and authorised data access. We prioritise
              privacy-conscious measurement without sending sensitive
              patient information into ordinary advertising or website
              analytics platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
