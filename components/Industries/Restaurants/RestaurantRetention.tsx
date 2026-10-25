
import Image from "next/image";
import {
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
  ArrowRight,
} from "lucide-react";

const retentionStrategies = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Customer Communication",
    description:
      "Stay connected with customers who have opted in to receive relevant restaurant updates, special menus and announcements.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Occasion-Based Campaigns",
    description:
      "Promote festive menus, seasonal dishes, weekend dining experiences, celebrations and suitable restaurant offers.",
  },
  {
    number: "03",
    icon: Star,
    title: "Feedback & Reviews",
    description:
      "Encourage genuine feedback, help organise review requests and support professional responses to customer experiences.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Direct Ordering Opportunities",
    description:
      "Where operationally supported, provide convenient ways for returning customers to place orders directly through your restaurant's website or ordering system.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Customer Retention & Loyalty",
    description:
      "Build relevant follow-up, loyalty, reminder and re-engagement campaigns based on your restaurant's audience and capabilities.",
  },
];

const loyaltyJourney = [
  {
    number: "01",
    title: "First Visit or Order",
    description:
      "A customer discovers your restaurant and experiences your food or service.",
  },
  {
    number: "02",
    title: "Stay Connected",
    description:
      "Offer appropriate opportunities for customers to opt in to updates and communications.",
  },
  {
    number: "03",
    title: "Relevant Updates",
    description:
      "Share suitable menu launches, offers, events and loyalty benefits.",
  },
  {
    number: "04",
    title: "Return Visit or Order",
    description:
      "Make it convenient for returning customers to dine, reserve or order again.",
  },
];

const measurementGroups = [
  {
    number: "01",
    label: "Discovery",
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
      className="sr-restaurant-retention overflow-hidden bg-[#F8FBFD] py-20 text-[#0B2A52] sm:py-24 lg:py-28 xl:py-32"
    >
      <style>{`
        .sr-restaurant-retention .sr-retention-photo {
          transition: transform .85s cubic-bezier(.22,1,.36,1);
        }

        .sr-restaurant-retention .sr-retention-visual:hover
        .sr-retention-photo {
          transform: scale(1.045);
        }

        .sr-restaurant-retention .sr-retention-strategy {
          transition: background-color .3s ease;
        }

        .sr-restaurant-retention .sr-retention-strategy:hover {
          background-color: rgba(255,255,255,.65);
        }

        .sr-restaurant-retention .sr-strategy-icon {
          transition: color .3s ease, transform .3s ease;
        }

        .sr-restaurant-retention .sr-retention-strategy:hover
        .sr-strategy-icon {
          color: #B79A72;
          transform: translateY(-3px);
        }

        .sr-restaurant-retention .sr-metric-icon {
          transition: color .3s ease;
        }

        .sr-restaurant-retention .sr-metric-group:hover
        .sr-metric-icon {
          color: #B79A72;
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-restaurant-retention .sr-retention-photo,
          .sr-restaurant-retention .sr-retention-strategy,
          .sr-restaurant-retention .sr-strategy-icon,
          .sr-restaurant-retention .sr-metric-icon {
            transition: none !important;
          }

          .sr-restaurant-retention .sr-retention-visual:hover
          .sr-retention-photo,
          .sr-restaurant-retention .sr-retention-strategy:hover
          .sr-strategy-icon {
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* 01 — NEW SECTION INTRO */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* LEFT — HEADING AND DESCRIPTION */}
          <div className="max-w-[610px]">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-[#B79A72]"
              />
              <span className="font-serif text-[11px] font-normal uppercase tracking-[0.16em] text-[#B79A72] sm:text-[12px]">
                Repeat Visits & Customer Loyalty
              </span>
            </div>

            <h2
              id="restaurant-retention-heading"
              className="mt-7 font-serif text-[2.1rem] font-normal leading-[1.13] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              Your Best Customers Should Have a{" "}
              <span className="text-[#B79A72]">
                Reason to Come Back.
              </span>
            </h2>

            <p className="mt-7 max-w-[540px] text-[14px] leading-[1.9] text-[#0B2A52]/70 sm:text-[15px]">
              Getting someone to visit your restaurant once is valuable.
              Building a relationship that encourages them to return can
              create more sustainable growth.
            </p>

            <p className="mt-4 max-w-[540px] text-[14px] leading-[1.9] text-[#0B2A52]/65 sm:text-[15px]">
              Whether customers visit for weekend dining, discover your
              signature dishes or order through a delivery platform,
              their journey doesn&apos;t have to end after the first
              experience.
            </p>
          </div>

          {/* RIGHT — RETENTION IMAGE */}
          <div className="relative pb-6 sm:pb-8">
            <div className="sr-retention-visual relative aspect-[5/4] overflow-hidden rounded-[18px] bg-[#E6EDF2] lg:aspect-[1/1]">
              <Image
                src="/images/industries/restaurants/restaurant-retention.webp"
                alt="Beautifully arranged restaurant dining table in a welcoming interior ready for returning customers"
                title="Restaurant Customer Retention and Repeat Visits — Sharp Rays"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="sr-retention-photo object-cover"
              />
            </div>

            {/* WELCOME-BACK NOTE */}
            <div className="absolute bottom-0 left-5 right-5 rounded-[13px] border border-[#E0E7ED] bg-white/95 px-6 py-5 shadow-[0_12px_35px_rgba(11,42,82,0.06)] backdrop-blur-md sm:left-auto sm:right-7 sm:w-[310px]">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                Beyond the First Visit
              </p>

              <p className="mt-2 font-serif text-[21px] font-normal leading-[1.35]">
                Give Customers a Reason to Return.
              </p>
            </div>
          </div>
        </div>

        {/* 02 — RETENTION STRATEGIES */}
        <div className="mt-20 lg:mt-28">
          <div className="max-w-[850px]">
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-[#B79A72]" />
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#B79A72]">
                How We Help Restaurants Encourage Repeat Business
              </p>
            </div>

            <h3 className="mt-5 max-w-[780px] font-serif text-[28px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[37px]">
              Make the Next Visit{" "}
              <span className="text-[#B79A72]">
                Worth Looking Forward To.
              </span>
            </h3>

            <p className="mt-5 max-w-[700px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              Thoughtful communication, relevant experiences and
              convenient next steps help restaurants build stronger
              relationships with their customers.
            </p>
          </div>

          {/* ASYMMETRIC EDITORIAL STRATEGY LAYOUT */}
          <div className="mt-12 grid gap-x-14 lg:grid-cols-2">
            {retentionStrategies.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="sr-retention-strategy group flex items-start gap-5 border-t border-[#DCE5EC] px-1 py-8 sm:gap-6 sm:py-9"
                >
                  <div className="shrink-0">
                    <Icon
                      size={25}
                      strokeWidth={1.4}
                      className="sr-strategy-icon mt-1 text-[#0B2A52]/60"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-serif text-[21px] font-normal leading-[1.3] sm:text-[24px]">
                        {item.title}
                      </h4>

                      <span className="shrink-0 font-serif text-[13px] text-[#B79A72]">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 max-w-[490px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* FINAL EDITORIAL STATEMENT */}
            <div className="flex items-center border-t border-[#DCE5EC] py-9 lg:px-6">
              <p className="max-w-[450px] font-serif text-[22px] font-normal italic leading-[1.55] text-[#0B2A52]/70 sm:text-[27px]">
                The best restaurant relationships are built beyond
                the first visit.
              </p>
            </div>
          </div>
        </div>

        {/* 03 — SIMPLE CUSTOMER JOURNEY */}
        <div className="mt-20 border-t border-[#DCE5EC] pt-12 lg:mt-24 lg:pt-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#B79A72]">
                From First Visit to Repeat Customer
              </p>

              <h3 className="mt-4 font-serif text-[28px] font-normal leading-[1.25] sm:text-[36px]">
                From One Experience to{" "}
                <span className="text-[#B79A72]">
                  the Next.
                </span>
              </h3>
            </div>

            <span className="hidden font-serif text-[13px] italic text-[#0B2A52]/45 sm:block">
              Visit · Connect · Engage · Return
            </span>
          </div>

          <div className="mt-11 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {loyaltyJourney.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[33px] text-[#B79A72]">
                    {step.number}
                  </span>

                  {index < loyaltyJourney.length - 1 && (
                    <ArrowRight
                      size={18}
                      strokeWidth={1.4}
                      className="hidden text-[#B79A72]/60 lg:block"
                    />
                  )}
                </div>

                <div className="mt-5 h-px w-full bg-[#DCE5EC]" />

                <h4 className="mt-6 font-serif text-[20px] font-normal leading-[1.3] sm:text-[23px]">
                  {step.title}
                </h4>

                <p className="mt-3 max-w-[255px] text-[12px] leading-[1.9] text-[#0B2A52]/60 sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 04 — PERFORMANCE MEASUREMENT */}
        <div className="mt-20 border-t border-[#DCE5EC] pt-12 lg:mt-24 lg:pt-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#B79A72]">
                What We Focus on Measuring
              </p>

              <h3 className="mt-4 font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px]">
                Understand the Actions That{" "}
                <span className="text-[#B79A72]">
                  Support Restaurant Growth.
                </span>
              </h3>
            </div>

            <p className="max-w-[570px] text-[13px] leading-[1.9] text-[#0B2A52]/60 sm:text-[14px]">
              From local search visibility to reservations, orders and
              returning customers, we look at meaningful marketing
              actions and available performance data.
            </p>
          </div>

          {/* THREE METRIC GROUPS */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
            {measurementGroups.map((group) => (
              <div
                key={group.number}
                className="sr-metric-group border-t-2 border-[#B79A72]/65 pt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#B79A72]">
                    {group.label}
                  </p>
                  <span className="font-serif text-[14px] text-[#B79A72]/70">
                    {group.number}
                  </span>
                </div>

                <div className="mt-7 space-y-8">
                  {group.metrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.title}
                        className="flex items-start gap-4"
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.4}
                          className="sr-metric-icon mt-1 shrink-0 text-[#0B2A52]/55"
                        />

                        <div>
                          <h4 className="font-serif text-[19px] font-normal leading-[1.35] sm:text-[21px]">
                            {metric.title}
                          </h4>

                          <p className="mt-2 text-[12px] leading-[1.85] text-[#0B2A52]/60 sm:text-[13px]">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[11px] leading-[1.8] text-[#0B2A52]/50">
            Actual measurement depends on your website, booking systems,
            ordering platforms and available tracking data.
          </p>
        </div>

        {/* 05 — FINAL MESSAGE */}
        <div className="mt-16 border-t border-[#DCE5EC] pt-10 lg:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
            <span className="shrink-0 text-[11px] uppercase tracking-[0.15em] text-[#B79A72]">
              Beyond One-Time Campaigns
            </span>

            <p className="max-w-[900px] font-serif text-[20px] font-normal leading-[1.65] text-[#0B2A52] sm:text-[25px]">
              We help restaurants develop retention strategies that support
              long-term customer relationships, not just one-time
              promotional campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
