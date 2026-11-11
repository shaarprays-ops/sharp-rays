
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MessageCircle,
  Star,
  ShoppingBag,
  HeartHandshake,
  MapPin,
  CalendarCheck2,
  ReceiptText,
  Users,
  Globe2,
  MousePointerClick,
  Sparkles,
  Check,
  CornerDownRight,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

const retentionStrategies = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Customer Communication",
    description:
      "Stay connected with customers who have opted in to receive relevant restaurant updates, special menus and announcements.",
    label: "STAY CONNECTED",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Occasion-Based Campaigns",
    description:
      "Promote festive menus, seasonal dishes, weekend dining experiences, celebrations and suitable restaurant offers.",
    label: "CREATE OCCASIONS",
  },
  {
    number: "03",
    icon: Star,
    title: "Feedback & Reviews",
    description:
      "Encourage genuine feedback, help organise review requests and support professional responses to customer experiences.",
    label: "BUILD TRUST",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Direct Ordering Opportunities",
    description:
      "Where operationally supported, provide convenient ways for returning customers to place orders directly through your restaurant's website or ordering system.",
    label: "SIMPLIFY ORDERING",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Customer Retention & Loyalty",
    description:
      "Build relevant follow-up, loyalty, reminder and re-engagement campaigns based on your restaurant's audience and capabilities.",
    label: "ENCOURAGE LOYALTY",
  },
];

const loyaltyJourney = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "First Visit or Order",
    description:
      "A customer discovers your restaurant and experiences your food or service.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Stay Connected",
    description:
      "Offer appropriate opportunities for customers to opt in to updates and communications.",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Relevant Updates",
    description:
      "Share suitable menu launches, offers, events and loyalty benefits.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Return Visit or Order",
    description:
      "Make it convenient for returning customers to dine, reserve or order again.",
  },
];

const measurementGroups = [
  {
    number: "01",
    label: "Discovery",
    caption: "How customers find you",
    icon: MapPin,
    metrics: [
      {
        icon: MapPin,
        title: "Google Maps Actions",
        description: "Calls, directions and menu interest",
      },
      {
        icon: Globe2,
        title: "Website Conversions",
        description: "Visits that produce meaningful actions",
      },
    ],
  },
  {
    number: "02",
    label: "Customer Actions",
    caption: "What customers do next",
    icon: MousePointerClick,
    metrics: [
      {
        icon: CalendarCheck2,
        title: "Reservation Enquiries",
        description: "Table-booking interest",
      },
      {
        icon: ReceiptText,
        title: "Online Orders",
        description: "Measurable ordering activity",
      },
    ],
  },
  {
    number: "03",
    label: "Performance & Loyalty",
    caption: "How relationships develop",
    icon: TrendingUp,
    metrics: [
      {
        icon: MousePointerClick,
        title: "Cost per Enquiry or Order",
        description: "Campaign acquisition efficiency",
      },
      {
        icon: Users,
        title: "Repeat Customer Rate",
        description: "Returning-customer behaviour",
      },
    ],
  },
];

export default function RestaurantRetention() {
  return (
    <section
      id="restaurant-retention"
      aria-labelledby="restaurant-retention-heading"
      className="relative isolate overflow-hidden bg-[#F8FBFD] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* AMBIENT BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B79A72]/[0.055] blur-[100px]" />
        <div className="absolute -left-40 top-[42%] h-[480px] w-[480px] rounded-full bg-[#0B2A52]/[0.025] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ================================ */}
        {/* 01 — CENTERED INTRO               */}
        {/* ================================ */}

        <div className="mx-auto max-w-[800px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="font-serif text-[11px] uppercase tracking-[0.15em] text-[#B79A72] sm:text-[12px]">
              Repeat Visits & Customer Loyalty
            </span>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="restaurant-retention-heading"
            className="mx-auto max-w-[750px] font-serif text-[30px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[37px] lg:text-[43px]"
          >
            Your Best Customers Should Have a{" "}
            <span className="text-[#B79A72]">
              Reason to Come Back.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            Getting someone to visit your restaurant once is valuable.
            Building a relationship that encourages them to return can
            create more sustainable growth.
          </p>

          <p className="mx-auto mt-3 max-w-[670px] text-[13px] leading-[1.95] text-[#0B2A52]/60 sm:text-[14px]">
            Whether customers visit for weekend dining, discover your
            signature dishes or order through a delivery platform,
            their journey doesn&apos;t have to end after the first
            experience.
          </p>
        </div>

        {/* ================================ */}
        {/* 02 — FEATURE VISUAL               */}
        {/* ================================ */}

        <div className="mt-12 lg:mt-14">
          <div className="grid overflow-hidden rounded-[22px] border border-[#DEE6EC] bg-white shadow-[0_25px_70px_-45px_rgba(11,42,82,0.2)] lg:grid-cols-[1.05fr_0.95fr]">
            {/* Restaurant photograph */}
            <div className="group relative min-h-[300px] overflow-hidden bg-[#E6EDF2] sm:min-h-[400px] lg:min-h-[455px]">
              <Image
                src="/industries/restaurants/search-ordering.webp"
                alt="Beautifully arranged restaurant dining table in a welcoming interior ready for returning customers"
                title="Restaurant Customer Retention and Repeat Visits — Sharp Rays"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.055]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/35 via-transparent to-transparent" />

              {/* Photo label */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/35 bg-white/90 px-4 py-2 backdrop-blur-md sm:bottom-7 sm:left-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#0B2A52]">
                  Beyond the First Visit
                </span>
              </div>
            </div>

            {/* Editorial story panel */}
            <div className="relative flex flex-col justify-center overflow-hidden px-7 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#B79A72]/15"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[14px] text-[#B79A72]">
                    SR / RETENTION
                  </span>
                  <span className="h-px w-10 bg-[#B79A72]/50" />
                </div>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E7E0D7] bg-[#FAF7F2] text-[#B79A72]">
                  <HeartHandshake
                    size={26}
                    strokeWidth={1.35}
                  />
                </div>

                <h3 className="mt-7 max-w-[430px] font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[35px] lg:text-[37px]">
                  A Great First Visit Deserves{" "}
                  <span className="text-[#B79A72]">
                    a Second.
                  </span>
                </h3>

                <p className="mt-5 max-w-[420px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                  The relationship with your customers doesn&apos;t
                  have to stop at the bill. Thoughtful experiences,
                  relevant communication and convenient ways to return
                  can help make your restaurant part of their routine.
                </p>

                <div className="mt-8 flex items-start gap-3 border-t border-[#E5EAF0] pt-6">
                  <RotateCcw
                    size={18}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#B79A72]"
                  />
                  <p className="font-serif text-[17px] italic leading-[1.6] text-[#526780] sm:text-[19px]">
                    Give customers a reason to return,
                    not just a reason to visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================ */}
        {/* 03 — RETENTION STRATEGIES         */}
        {/* ================================ */}

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto max-w-[790px] text-center">
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              How We Help Restaurants Encourage Repeat Business
            </p>

            <h3 className="mt-4 font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px] lg:text-[39px]">
              Make the Next Visit{" "}
              <span className="text-[#B79A72]">
                Worth Looking Forward To.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              Thoughtful communication, relevant experiences and
              convenient next steps help restaurants build stronger
              relationships with their customers.
            </p>
          </div>

          {/* Asymmetric strategy composition */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {retentionStrategies.map((strategy, index) => {
              const Icon = strategy.icon;

              return (
                <article
                  key={strategy.number}
                  className={`group relative flex min-h-[275px] flex-col overflow-hidden rounded-[18px] border p-6 transition-all duration-500 ease-out motion-safe:hover:-translate-y-1 sm:p-7 ${
                    index === 0
                      ? "border-[#0B2A52] bg-[#0B2A52] text-white md:col-span-2 lg:col-span-2"
                      : "border-[#E0E7ED] bg-white text-[#0B2A52] hover:border-[#D4B892] hover:shadow-[0_18px_45px_-25px_rgba(11,42,82,0.18)] lg:col-span-2"
                  } ${
                    index === 3
                      ? "lg:col-span-3"
                      : ""
                  } ${
                    index === 4
                      ? "md:col-span-2 lg:col-span-3"
                      : ""
                  }`}
                >
                  {/* Decorative accent */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                      index === 0
                        ? "bg-[#D4B88E]"
                        : "bg-[#B79A72]"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[13px] border transition-all duration-300 motion-safe:group-hover:-translate-y-1 ${
                        index === 0
                          ? "border-white/20 bg-white/10 text-[#D4B88E]"
                          : "border-[#E7E9EA] bg-[#F8FAFC] text-[#0B2A52] group-hover:border-[#D8C3A6] group-hover:bg-[#FAF6F0] group-hover:text-[#B79A72]"
                      }`}
                    >
                      <Icon size={23} strokeWidth={1.45} />
                    </div>

                    <span
                      className={`font-serif text-[17px] ${
                        index === 0
                          ? "text-[#D4B88E]"
                          : "text-[#B79A72]"
                      }`}
                    >
                      {strategy.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-9">
                    <p
                      className={`mb-3 text-[9px] font-medium uppercase tracking-[0.16em] ${
                        index === 0
                          ? "text-[#D4B88E]"
                          : "text-[#B79A72]"
                      }`}
                    >
                      {strategy.label}
                    </p>

                    <h4 className="max-w-[350px] font-serif text-[23px] font-normal leading-[1.25] tracking-[-0.02em] sm:text-[25px]">
                      {strategy.title}
                    </h4>

                    <p
                      className={`mt-4 max-w-[460px] text-[12px] leading-[1.9] sm:text-[13px] ${
                        index === 0
                          ? "text-white/70"
                          : "text-[#0B2A52]/65"
                      }`}
                    >
                      {strategy.description}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Editorial statement */}
            <div className="relative flex min-h-[185px] flex-col justify-center overflow-hidden rounded-[18px] border border-[#E7E1D8] bg-[#F6F1EA] px-7 py-8 md:col-span-2 lg:col-span-6 lg:min-h-[150px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full border border-[#B79A72]/20"
              />

              <div className="relative flex items-center gap-4">
                <Sparkles
                  size={21}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#B79A72]"
                />
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#A48967]">
                  The Retention Mindset
                </p>
              </div>

              <p className="relative mt-5 max-w-[720px] font-serif text-[22px] font-normal italic leading-[1.45] text-[#0B2A52] sm:text-[27px] lg:mt-0 lg:text-[29px]">
                The best restaurant relationships are built{" "}
                <span className="text-[#B79A72]">
                  beyond the first visit.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ================================ */}
        {/* 04 — CUSTOMER JOURNEY            */}
        {/* ================================ */}

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              From First Visit to Repeat Customer
            </p>

            <h3 className="mt-4 font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px] lg:text-[39px]">
              From One Experience to{" "}
              <span className="text-[#B79A72]">
                the Next.
              </span>
            </h3>

            <p className="mt-4 text-[13px] leading-[1.9] text-[#0B2A52]/60">
              A simple way to understand how customer relationships
              can continue after the first visit.
            </p>
          </div>

          {/* Journey canvas */}
          <div className="relative mt-12 overflow-hidden rounded-[22px] border border-[#E1E8EF] bg-white px-5 py-9 shadow-[0_20px_55px_-45px_rgba(11,42,82,0.15)] sm:px-8 sm:py-11 lg:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,154,114,0.08),transparent_35%)]"
            />

            <div className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {loyaltyJourney.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex flex-col"
                  >
                    {/* Number and connector */}
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-[14px] text-[#B79A72]">
                        {step.number}
                      </span>

                      <span className="h-px flex-1 bg-[#E4E9ED]" />
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div
                        className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[15px] border transition-all duration-300 motion-safe:group-hover:-translate-y-1 ${
                          index === loyaltyJourney.length - 1
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#E1E8EE] bg-[#F7F9FB] text-[#0B2A52] group-hover:border-[#D9C4A7] group-hover:text-[#B79A72]"
                        }`}
                      >
                        <Icon size={23} strokeWidth={1.5} />
                      </div>

                      {index < loyaltyJourney.length - 1 && (
                        <ArrowRight
                          size={18}
                          strokeWidth={1.5}
                          className="ml-auto hidden text-[#B79A72]/70 lg:block"
                        />
                      )}
                    </div>

                    <h4 className="mt-7 font-serif text-[20px] font-normal leading-[1.3] sm:text-[22px]">
                      {step.title}
                    </h4>

                    <p className="mt-3 max-w-[260px] text-[12px] leading-[1.9] text-[#0B2A52]/65 sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Journey footer */}
            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E9EF] pt-6">
              <div className="flex items-center gap-2.5">
                <RotateCcw
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <p className="text-[11px] leading-5 text-[#6C7F93]">
                  Building lasting relationships takes consistency.
                </p>
              </div>

              <span className="font-serif text-[12px] italic text-[#B79A72]">
                Discover · Connect · Engage · Return
              </span>
            </div>
          </div>
        </div>

        {/* ================================ */}
        {/* 05 — MEASUREMENT DASHBOARD        */}
        {/* ================================ */}

        <div className="mt-20 lg:mt-24">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              What We Focus on Measuring
            </p>

            <h3 className="mt-4 font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px] lg:text-[39px]">
              Understand the Actions That{" "}
              <span className="text-[#B79A72]">
                Support Restaurant Growth.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-[670px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              From local search visibility to reservations, orders
              and returning customers, we look at meaningful
              marketing actions and available performance data.
            </p>
          </div>

          {/* Measurement Grid */}
          <div className="mt-12 overflow-hidden rounded-[22px] border border-[#DEE6ED] bg-white shadow-[0_20px_60px_-45px_rgba(11,42,82,0.15)]">
            {/* Dashboard header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5EBF0] bg-[#FAFBFD] px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#0B2A52] text-white">
                  <TrendingUp size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#0B2A52] sm:text-[14px]">
                    Restaurant Performance Framework
                  </h4>
                  <p className="mt-1 text-[11px] text-[#8B9AAA]">
                    What meaningful measurement can include
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-[#E5E2DD] bg-white px-3 py-2 text-[10px] text-[#A58A67]">
                Measurement Areas
              </span>
            </div>

            {/* Metric groups */}
            <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-[#E6EBF0]">
              {measurementGroups.map((group) => {
                const GroupIcon = group.icon;

                return (
                  <div
                    key={group.number}
                    className="group border-b border-[#E6EBF0] p-6 transition-colors duration-300 hover:bg-[#FCFDFE] last:border-b-0 sm:p-8 lg:border-b-0"
                  >
                    {/* Group heading */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                          {group.label}
                        </p>

                        <p className="text-[11px] text-[#8A98A8]">
                          {group.caption}
                        </p>
                      </div>

                      <span className="font-serif text-[19px] text-[#B79A72]/65">
                        {group.number}
                      </span>
                    </div>

                    <div className="mt-7 flex h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-[#E2E7ED] bg-[#F6F9FB] text-[#0B2A52] transition-colors duration-300 group-hover:border-[#DDC8AB] group-hover:bg-[#FAF5EE] group-hover:text-[#B79A72]">
                      <GroupIcon size={22} strokeWidth={1.45} />
                    </div>

                    {/* Individual metrics */}
                    <div className="mt-7 divide-y divide-[#E8EDF1] border-t border-[#E8EDF1]">
                      {group.metrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                          <div
                            key={metric.title}
                            className="flex items-start gap-3 py-5"
                          >
                            <Icon
                              size={18}
                              strokeWidth={1.5}
                              className="mt-1 shrink-0 text-[#B79A72]"
                            />

                            <div>
                              <h5 className="font-serif text-[18px] font-normal leading-[1.35] sm:text-[20px]">
                                {metric.title}
                              </h5>

                              <p className="mt-2 text-[12px] leading-[1.8] text-[#0B2A52]/60">
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Data disclaimer */}
            <div className="flex items-start gap-3 border-t border-[#E6EBF0] bg-[#FAFBFD] px-6 py-5 sm:px-8">
              <Check
                size={15}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-[#B79A72]"
              />

              <p className="text-[11px] leading-[1.8] text-[#7F8FA0]">
                Actual measurement depends on your website, booking
                systems, ordering platforms and available tracking data.
              </p>
            </div>
          </div>
        </div>

        {/* ================================ */}
        {/* 06 — CLOSING STATEMENT            */}
        {/* ================================ */}

        <div className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-[22px] bg-[#0B2A52] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Subtle navy-on-navy graphics */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full border border-white/[0.075]" />

              <div className="absolute -right-8 -top-16 h-[250px] w-[250px] rounded-full border border-[#B79A72]/20" />

              <div className="absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-[#B79A72]/10 blur-[90px]" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[820px]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D4B88E]" />

                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#D4B88E] sm:text-[11px]">
                    Beyond One-Time Campaigns
                  </span>
                </div>

                <h3 className="max-w-[760px] font-serif text-[25px] font-normal leading-[1.4] tracking-[-0.025em] sm:text-[30px] lg:text-[34px]">
                  We help restaurants develop retention strategies
                  that support{" "}
                  <span className="text-[#D4B88E]">
                    long-term customer relationships,
                  </span>{" "}
                  not just one-time promotional campaigns.
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3 border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4B88E]/50 text-[#D4B88E]">
                  <HeartHandshake size={22} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.13em] text-[#D4B88E]">
                    Customer First
                  </p>
                  <p className="mt-1 text-[12px] text-white/65">
                    Built for lasting connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
