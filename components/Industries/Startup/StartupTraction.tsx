
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Eye,
  UserRoundPlus,
  BadgeCheck,
  Target,
  MousePointerClick,
  Activity,
  Repeat2,
  Wallet,
  Users,
  Monitor,
  CheckCircle2,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const growthSignals = [
  {
    number: "01",
    label: "TRAFFIC",
    title: "Discovery",
    description:
      "People are finding your website, product or marketing content.",
    icon: Eye,
  },
  {
    number: "02",
    label: "SIGNUPS",
    title: "Interest",
    description:
      "Some visitors are interested enough to register, enquire or request access.",
    icon: UserRoundPlus,
  },
  {
    number: "03",
    label: "CUSTOMERS",
    title: "Acquisition",
    description:
      "People take a meaningful commercial action such as purchasing or becoming paying customers.",
    icon: BadgeCheck,
  },
];

const metrics = [
  {
    number: "01",
    title: "Qualified Signups",
    description: "Are the right people expressing interest?",
    icon: Users,
  },
  {
    number: "02",
    title: "Acquisition Cost",
    description: "What does measurable customer acquisition cost?",
    icon: Wallet,
  },
  {
    number: "03",
    title: "Conversion Rate",
    description: "How many people complete a meaningful action?",
    icon: MousePointerClick,
  },
  {
    number: "04",
    title: "Activation",
    description: "Are new users reaching an initial moment of value?",
    icon: Activity,
  },
  {
    number: "05",
    title: "Retention",
    description: "Do customers continue using or buying the offering?",
    icon: Repeat2,
  },
  {
    number: "06",
    title: "Revenue Attribution",
    description: "Which measurable activities contribute to revenue?",
    icon: Target,
  },
];

export default function StartupTraction() {
  return (
    <section
      id="startup-traction-before-scale"
      aria-labelledby="startup-traction-heading"
      className="relative overflow-hidden bg-[#FCFAF7] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — INTRO */}

        <div className="mx-auto max-w-[800px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Traction Before Scale
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="startup-traction-heading"
            className="font-serif text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[38px] lg:text-[43px]"
          >
            Don&apos;t Spend More on Marketing Until You{" "}
            <span className="text-[#B79A72]">
              Understand What&apos;s Working.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            More traffic and more signups can be encouraging,
            but they are not the same as acquiring customers
            or building lasting demand. We help startups
            assess meaningful marketing signals before
            increasing acquisition spending.
          </p>
        </div>

        {/* 02 — GROWTH SIGNAL LADDER */}

        <div className="mt-14 lg:mt-16">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] uppercase tracking-[0.16em] text-[#A48761]">
                How Startup Growth Should Be Evaluated
              </span>
            </div>

            <span className="text-[11px] text-[#988877]">
              Understanding the difference
            </span>
          </div>

          <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">

            {/* Horizontal connecting line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] right-[12%] top-[51px] hidden border-t border-dashed border-[#D5BB98] md:block"
            />

            {growthSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <article
                  key={signal.number}
                  className={`group relative flex flex-col rounded-[18px] border px-6 py-7 transition-all duration-500 motion-safe:hover:-translate-y-1 sm:px-8 sm:py-9 ${
                    index === 2
                      ? "border-[#D9C19F] bg-[#F4ECE0] hover:shadow-[0_18px_40px_-30px_rgba(125,92,55,0.25)]"
                      : "border-[#E9E2D9] bg-white hover:border-[#D8BF9A] hover:shadow-[0_18px_40px_-30px_rgba(125,92,55,0.15)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E2D2BD] bg-[#FCFAF7] text-[#B79A72] transition-transform duration-300 motion-safe:group-hover:scale-105">
                      <Icon size={21} strokeWidth={1.5} />
                    </span>

                    <span className="font-serif text-[16px] text-[#B79A72]">
                      {signal.number}
                    </span>
                  </div>

                  <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A48968]">
                    {signal.label}
                  </p>

                  <h3 className="mt-2 font-serif text-[29px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[34px]">
                    {signal.title}
                  </h3>

                  <p className="mt-4 max-w-[320px] text-[13px] leading-[1.9] text-[#69788A]">
                    {signal.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>

          {/* Key interpretation */}
          <div className="mt-7 flex flex-col gap-4 border-l-[3px] border-[#B79A72] bg-white px-6 py-6 sm:flex-row sm:items-start sm:gap-5 sm:px-8">
            <Lightbulb
              size={22}
              strokeWidth={1.5}
              className="shrink-0 text-[#B79A72]"
            />

            <div>
              <p className="font-serif text-[19px] font-normal leading-[1.4] sm:text-[21px]">
                Attention is not the same as traction.
              </p>

              <p className="mt-3 max-w-[980px] text-[13px] leading-[1.95] text-[#657689]">
                A startup can attract visitors and signups
                without proving that customers find lasting
                value in its product. Even an initial purchase
                does not automatically demonstrate repeat
                demand, retention or product-market fit.
              </p>
            </div>
          </div>
        </div>

        {/* 03 — MEASUREMENT FRAMEWORK */}

        <div className="mt-20 lg:mt-24">

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                  What We Measure
                </span>
              </div>

              <h3 className="max-w-[500px] font-serif text-[28px] font-normal leading-[1.23] tracking-[-0.03em] sm:text-[35px]">
                Look Beyond the Numbers.{" "}
                <span className="text-[#B79A72]">
                  Understand What They Mean.
                </span>
              </h3>
            </div>

            <p className="max-w-[570px] text-[13px] leading-[1.95] text-[#64778A] sm:text-[14px] lg:pb-1">
              The right metrics depend on your business
              model, customer journey and stage of growth.
              We prioritise measurable indicators that
              can help inform marketing decisions rather
              than presenting every metric as equally important.
            </p>
          </div>

          {/* Six metric tiles */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-[#E8E0D5] bg-[#E8E0D5] sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.number}
                  className="group flex min-h-[194px] flex-col bg-white px-6 py-6 transition-colors duration-300 hover:bg-[#FAF6F0] sm:px-7 sm:py-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#B79A72] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5"
                    />

                    <span className="font-serif text-[14px] text-[#C2A783]">
                      {metric.number}
                    </span>
                  </div>

                  <h4 className="mt-6 font-serif text-[21px] font-normal leading-[1.25] tracking-[-0.02em] sm:text-[23px]">
                    {metric.title}
                  </h4>

                  <p className="mt-3 text-[12px] leading-[1.85] text-[#718093]">
                    {metric.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* 04 — BUSINESS MODEL INTERPRETATION */}

        <div className="mt-14 border-t border-[#E6DDD1] pt-10 lg:mt-16">
          <div className="mb-7">
            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              Different Business Models. Different Signals.
            </span>

            <h3 className="mt-3 font-serif text-[25px] font-normal leading-[1.3] sm:text-[30px]">
              Measure Growth in the Context of{" "}
              <span className="text-[#B79A72]">
                What Your Startup Sells.
              </span>
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="group border-t-2 border-[#B79A72] bg-white px-6 py-7 transition-all duration-300 hover:shadow-[0_15px_30px_-27px_rgba(98,74,43,0.2)] sm:px-8">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F1E8] text-[#B79A72]">
                  <Monitor size={21} strokeWidth={1.5} />
                </span>

                <span className="text-[10px] uppercase tracking-[0.12em] text-[#A68B66]">
                  Example 01
                </span>
              </div>

              <h4 className="mt-6 font-serif text-[24px] font-normal leading-[1.3]">
                SaaS & Digital Products
              </h4>

              <p className="mt-3 text-[13px] leading-[1.9] text-[#69798A]">
                Signups alone may not show whether users
                experience value. Activation, continued
                usage, retention and paying customer
                conversion can provide useful context.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Activation", "Retention", "Paid Conversion"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E7DDCF] bg-[#FCFAF7] px-3 py-2 text-[10px] text-[#927957]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="group border-t-2 border-[#B79A72] bg-white px-6 py-7 transition-all duration-300 hover:shadow-[0_15px_30px_-27px_rgba(98,74,43,0.2)] sm:px-8">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F1E8] text-[#B79A72]">
                  <Users size={21} strokeWidth={1.5} />
                </span>

                <span className="text-[10px] uppercase tracking-[0.12em] text-[#A68B66]">
                  Example 02
                </span>
              </div>

              <h4 className="mt-6 font-serif text-[24px] font-normal leading-[1.3]">
                Service-Based Startups
              </h4>

              <p className="mt-3 text-[13px] leading-[1.9] text-[#69798A]">
                Website visits and enquiries can be useful,
                but enquiry quality, consultation progression,
                sales conversion and customer value may
                matter more than raw lead volume.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Qualified Enquiries",
                  "Sales Conversion",
                  "Customer Value",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#E7DDCF] bg-[#FCFAF7] px-3 py-2 text-[10px] text-[#927957]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-5 text-[11px] leading-[1.8] text-[#8793A0]">
            These examples illustrate how measurement priorities
            can vary. Actual KPIs depend on each startup's
            offering, sales process and available tracking.
          </p>
        </div>

        {/* 05 — VALIDATE BEFORE EXPANDING */}

        <div className="mt-14 overflow-hidden rounded-[18px] border border-[#E5D9C8] bg-[#F5EEE4] px-6 py-8 sm:px-9 sm:py-10 lg:mt-16">
          <div className="grid gap-7 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <span className="text-[10px] uppercase tracking-[0.15em] text-[#9A7A53]">
                  Validate Before Expanding
                </span>
              </div>

              <h3 className="mt-5 font-serif text-[26px] font-normal leading-[1.25] sm:text-[32px]">
                Build on Evidence,{" "}
                <span className="text-[#B79A72]">
                  Not Just Momentum.
                </span>
              </h3>
            </div>

            <div>
              <p className="text-[13px] leading-[1.95] text-[#647589]">
                Customer feedback, meaningful usage,
                repeat purchases and retention can reveal
                whether your offering is providing real
                value. Before increasing marketing
                investment, it helps to understand
                which audiences, channels and conversion
                paths have shown encouraging evidence.
              </p>

              <div className="mt-5 flex items-start gap-3">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                />

                <p className="text-[11px] leading-[1.85] text-[#87796A]">
                  Sharp Rays helps evaluate and improve
                  marketing performance; product-market fit,
                  customer retention and commercial success
                  also depend on the product and wider business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 06 — SECTION CLOSING */}

        <div className="mt-12 flex flex-col gap-7 border-t border-[#E6DDD1] pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <p className="max-w-[760px] font-serif text-[21px] font-normal leading-[1.5] text-[#284762] sm:text-[25px]">
            Before you scale your marketing,{" "}
            <span className="text-[#B79A72]">
              know what deserves more investment.
            </span>
          </p>

          <Link
            href="/contact?service=startup-marketing"
            title="Build My Startup Growth Plan"
            className="group inline-flex min-h-[49px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.15)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
          >
            Build My Startup Growth Plan

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
