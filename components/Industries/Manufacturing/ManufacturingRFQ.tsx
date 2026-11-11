
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  CheckCircle2,
  ClipboardList,
  FileText,
  MapPin,
  Package,
  PackageCheck,
  Ruler,
  Send,
  Users,
  Workflow,
  Route,
  ScanSearch,
} from "lucide-react";

const rfqFields = [
  {
    icon: Package,
    title: "Product Requirement",
    description: "What does the buyer need?",
  },
  {
    icon: Ruler,
    title: "Technical Details",
    description: "Materials, grades, drawings or specifications.",
  },
  {
    icon: PackageCheck,
    title: "Order Quantity",
    description: "Expected volume or quantity.",
  },
  {
    icon: MapPin,
    title: "Delivery Location",
    description: "Where the product is required.",
  },
  {
    icon: CalendarClock,
    title: "Requirement Timeline",
    description: "When the buyer needs delivery.",
  },
  {
    icon: Building2,
    title: "Business Information",
    description: "Company name and contact details.",
  },
];

const enquirySteps = [
  {
    icon: Send,
    title: "Buyer Enquiry",
    description: "A potential buyer contacts your business.",
  },
  {
    icon: ClipboardList,
    title: "RFQ Details",
    description: "Relevant requirements are collected.",
  },
  {
    icon: Users,
    title: "Sales Review",
    description: "Your team evaluates the opportunity.",
  },
  {
    icon: CheckCircle2,
    title: "Follow-Up",
    description: "The next steps are communicated.",
  },
];

const supportCapabilities = [
  {
    icon: ScanSearch,
    title: "Relevant Landing Pages",
    description:
      "Guide buyers towards the right products and services.",
  },
  {
    icon: FileText,
    title: "Quotation Forms",
    description:
      "Collect relevant product and technical requirements.",
  },
  {
    icon: Route,
    title: "Enquiry Tracking & Routing",
    description:
      "Organise enquiries and direct them to the right team.",
  },
  {
    icon: Workflow,
    title: "Follow-Up Automation",
    description:
      "Support timely acknowledgement and sales follow-ups.",
  },
];

export default function ManufacturingRFQ() {
  return (
    <section
      id="manufacturing-rfq"
      aria-labelledby="manufacturing-rfq-heading"
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* SECTION INTRODUCTION */}
        <div className="mx-auto max-w-[920px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />

            <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
              Qualified Enquiries Matter More
            </p>

            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />
          </div>

          <h2
            id="manufacturing-rfq-heading"
            className="mx-auto max-w-[850px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            More Enquiries Mean Little If{" "}
            <span className="text-[#B79A72]">
              Buyers Aren&apos;t a Good Fit.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            For manufacturers, every enquiry is not necessarily a business
            opportunity. Your sales team needs clear product requirements,
            technical details and buyer information to evaluate whether an
            opportunity fits your production capabilities.
          </p>
        </div>

        {/* RFQ REQUIREMENTS */}
        <div className="mt-12 grid items-start gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[0.36fr_0.64fr] lg:gap-14 xl:gap-20">

          {/* LEFT INTRO */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
              Better Quotation Requests
            </p>

            <h3 className="mt-4 max-w-[430px] text-[27px] font-normal leading-[1.18] tracking-[-0.03em] sm:text-[31px] lg:text-[34px]">
              Understand the Buyer&apos;s Requirements{" "}
              <span className="text-[#B79A72]">
                Before Preparing a Quote.
              </span>
            </h3>

            <p className="mt-5 max-w-[420px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
              A well-structured request for quotation helps manufacturers
              collect the information needed to assess an enquiry and
              decide the appropriate next step.
            </p>

            <div className="mt-7 flex items-start gap-3 border-t border-[#E3EAF0] pt-6">
              <CheckCircle2
                size={19}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#B79A72]"
              />

              <p className="max-w-[380px] text-[12px] font-normal leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                Clear requirements help your team evaluate potential
                opportunities without unnecessary back-and-forth.
              </p>
            </div>
          </div>

          {/* RIGHT REQUIREMENTS LIST */}
          <div className="overflow-hidden rounded-[20px] border border-[#E1E8EF] bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-[#E1E8EF] bg-[#F8FAFC] px-5 py-5 sm:px-7">
              <div>
                <p className="text-[10px] font-normal uppercase tracking-[0.15em] text-[#B79A72]">
                  Information to Collect
                </p>

                <h4 className="mt-2 text-[19px] font-normal tracking-[-0.02em] text-[#0B2A52] sm:text-[21px]">
                  Manufacturing RFQ Essentials
                </h4>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#E1E8EF] bg-white text-[#0B2A52]">
                <ClipboardList size={20} strokeWidth={1.6} />
              </span>
            </div>

            <div className="grid md:grid-cols-2">
              {rfqFields.map((field, index) => {
                const Icon = field.icon;

                return (
                  <div
                    key={field.title}
                    className={`group flex items-start gap-4 border-b border-[#E5EBF1] px-5 py-6 transition-colors duration-300 hover:bg-[#F9FBFC] sm:px-7 ${
                      index % 2 === 0
                        ? "md:border-r md:border-[#E5EBF1]"
                        : ""
                    } ${
                      index >= rfqFields.length - 2
                        ? "md:border-b-0"
                        : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#E5EBF1] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:border-[#EADFCF] group-hover:bg-[#F8F2E9] group-hover:text-[#B79A72]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <h5 className="text-[16px] font-normal leading-[1.3] tracking-[-0.02em] text-[#0B2A52] sm:text-[17px]">
                        {field.title}
                      </h5>

                      <p className="mt-2 text-[12px] font-normal leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                        {field.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ENQUIRY PROCESS */}
        <div className="mt-16 border-t border-[#E1E8EF] pt-12 sm:mt-20 lg:mt-24 lg:pt-14">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
              From Enquiry to Sales Follow-Up
            </p>

            <h3 className="mt-4 text-[27px] font-normal leading-[1.18] tracking-[-0.03em] sm:text-[31px] lg:text-[35px]">
              A Clearer Path From{" "}
              <span className="text-[#B79A72]">
                Interest to Evaluation.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-[610px] text-[13px] font-normal leading-7 text-[#0B2A52]/60 sm:text-[14px]">
              A simple, organised process helps your team manage
              incoming quotation enquiries more effectively.
            </p>
          </div>

          {/* FOUR-STEP JOURNEY */}
          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {enquirySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#DEE7EF] bg-white text-[#0B2A52] transition-colors duration-300 hover:border-[#B79A72]/40 hover:text-[#B79A72]">
                    <Icon size={27} strokeWidth={1.55} />
                  </div>

                  {/* Connector */}
                  {index < enquirySteps.length - 1 && (
                    <div className="pointer-events-none absolute left-[calc(50%+49px)] top-[39px] hidden w-[calc(100%-78px)] items-center lg:flex">
                      <span className="h-px flex-1 bg-[#DCE5ED]" />

                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="-ml-1 shrink-0 text-[#B79A72]"
                      />
                    </div>
                  )}

                  {/* Text */}
                  <h4 className="mt-5 text-[19px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0B2A52] sm:text-[20px]">
                    {step.title}
                  </h4>

                  <p className="mt-2 max-w-[230px] text-[12px] font-normal leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* HOW SHARP RAYS HELPS */}
        <div className="mt-16 border-t border-[#E1E8EF] pt-12 sm:mt-20 lg:mt-24 lg:pt-14">
          <div className="grid items-start gap-10 lg:grid-cols-[0.43fr_0.57fr] lg:gap-16 xl:gap-20">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
                  How Sharp Rays Helps
                </p>
              </div>

              <h3 className="mt-5 max-w-[560px] text-[28px] font-normal leading-[1.15] tracking-[-0.03em] sm:text-[32px] lg:text-[36px]">
                Better Information.{" "}
                <span className="text-[#B79A72]">
                  More Useful Sales Conversations.
                </span>
              </h3>

              <p className="mt-6 max-w-[520px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                We build relevant landing pages, quotation forms,
                enquiry tracking and automation workflows to collect
                useful buyer requirements and route them to the
                right sales team.
              </p>

              <p className="mt-4 max-w-[520px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                This can help manufacturers spend less time sorting
                irrelevant enquiries and more time evaluating genuine
                business opportunities.
              </p>

              <div className="mt-7 flex items-start gap-3 border-l-2 border-[#B79A72] pl-4">
                <p className="max-w-[460px] text-[13px] font-normal leading-7 text-[#0B2A52]/70">
                  A more organised enquiry process helps your sales team
                  focus on relevant requirements.
                </p>
              </div>
            </div>

            {/* RIGHT CAPABILITIES */}
            <div className="overflow-hidden rounded-[20px] border border-[#E1E8EF] bg-white">
              <div className="border-b border-[#E1E8EF] bg-[#F8FAFC] px-6 py-5 sm:px-7">
                <p className="text-[10px] font-normal uppercase tracking-[0.17em] text-[#B79A72]">
                  What We Can Build
                </p>

                <h4 className="mt-2 text-[21px] font-normal tracking-[-0.025em] text-[#0B2A52] sm:text-[23px]">
                  A More Organised Enquiry System
                </h4>
              </div>

              <div className="divide-y divide-[#E5EBF1]">
                {supportCapabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#F9FBFC] sm:px-7 sm:py-6"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#E4EBF1] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:border-[#EADFCF] group-hover:bg-[#F8F2E9] group-hover:text-[#B79A72]">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>

                      <div>
                        <h5 className="text-[17px] font-normal leading-[1.25] tracking-[-0.02em] text-[#0B2A52] sm:text-[18px]">
                          {item.title}
                        </h5>

                        <p className="mt-2 text-[12px] font-normal leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FINAL NOTE */}
        <div className="mx-auto mt-12 max-w-[900px] border-t border-[#E5EBF1] pt-7 text-center sm:mt-14">
          <div className="flex items-start justify-center gap-3">
            <Check
              size={18}
              strokeWidth={1.6}
              className="mt-1 shrink-0 text-[#B79A72]"
            />

            <p className="max-w-[760px] text-[12px] font-normal leading-7 text-[#0B2A52]/60 sm:text-[13px]">
              The goal is not simply to increase form submissions. It is
              to help relevant industrial buyers share useful requirements
              so your team can evaluate opportunities and respond effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
