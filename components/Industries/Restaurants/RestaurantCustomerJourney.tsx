
import {
  Search,
  UtensilsCrossed,
  Star,
  CheckCircle2,
  MapPin,
  CalendarDays,
  ShoppingBag,
  ArrowRight,
  Check,
} from "lucide-react";

const journey = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Google, Maps, Instagram, Ads",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "Explore",
    description: "Food, menu, photos, location",
  },
  {
    number: "03",
    icon: Star,
    title: "Choose",
    description: "Reviews, prices, experience",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Take Action",
    description: "Visit, reserve or order",
  },
];

const customerActions = [
  { icon: MapPin, label: "Visit", detail: "Dine-in" },
  { icon: CalendarDays, label: "Reserve", detail: "Table booking" },
  { icon: ShoppingBag, label: "Order", detail: "Delivery / pickup" },
];

const improvements = [
  {
    title: "First Impressions",
    description:
      "Present your food, restaurant interiors, dining experience and specialities through professional photos, Reels and campaigns.",
  },
  {
    title: "Menu & Restaurant Information",
    description:
      "Make menus, pricing, opening hours, location, dining options and booking or ordering methods easy to find.",
  },
  {
    title: "Trust Before Visiting",
    description:
      "Help customers evaluate your restaurant through genuine reviews, accurate business details and professional photography.",
  },
  {
    title: "Easy Next Steps",
    description:
      "Guide interested customers towards directions, phone calls, table reservations, WhatsApp enquiries or online ordering.",
  },
];

export default function RestaurantCustomerJourney() {
  return (
    <section
      id="restaurant-customer-journey"
      aria-labelledby="restaurant-journey-heading"
      className="sr-restaurant-journey bg-[#F8FBFD] py-20 text-[#0B2A52] sm:py-24 lg:py-28 xl:py-32"
    >
      <style>{`
        .sr-restaurant-journey .sr-journey-icon {
          transition: background-color .3s ease, color .3s ease,
            transform .3s ease;
        }

        .sr-restaurant-journey .sr-journey-item:hover .sr-journey-icon {
          background-color: #0B2A52;
          color: white;
          transform: translateY(-3px);
        }

        .sr-restaurant-journey .sr-journey-action-icon {
          transition: transform .3s ease;
        }

        .sr-restaurant-journey .sr-journey-action:hover
        .sr-journey-action-icon {
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-restaurant-journey .sr-journey-icon,
          .sr-restaurant-journey .sr-journey-action-icon {
            transition: none !important;
          }

          .sr-restaurant-journey .sr-journey-item:hover .sr-journey-icon,
          .sr-restaurant-journey .sr-journey-action:hover
          .sr-journey-action-icon {
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[850px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="font-serif text-[11px] font-normal uppercase tracking-[0.16em] text-[#B79A72] sm:text-[12px]">
              From Seeing Your Food to Choosing Your Restaurant
            </span>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="restaurant-journey-heading"
            className="mt-6 font-serif text-[2.1rem] font-normal leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Great Food Gets Attention.{" "}
            <span className="text-[#B79A72]">
              The Right Experience Gets Customers Through Your Door.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-[1.9] text-[#0B2A52]/65 sm:text-[15px]">
            Someone discovers your signature dish on Instagram,
            searches for your restaurant, checks the menu, reads reviews
            and looks at the location. The next step could be visiting,
            booking a table or ordering food.
          </p>

          <p className="mt-3 text-[14px] text-[#0B2A52]/80">
            Your digital presence should make that decision easier.
          </p>
        </div>

        {/* SIMPLE 4-STEP JOURNEY */}
        <div className="mt-14 lg:mt-20">
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4 lg:gap-7">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="sr-journey-item relative text-center"
                >
                  <div className="relative mx-auto flex w-fit items-center justify-center">
                    <div className="sr-journey-icon flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#DCE5EC] bg-white text-[#B79A72]">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-5 text-[10px] tracking-[0.15em] text-[#B79A72]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-2 font-serif text-[22px] font-normal sm:text-[26px]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[220px] text-[12px] leading-[1.75] text-[#0B2A52]/60 sm:text-[13px]">
                    {step.description}
                  </p>

                  {index < journey.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={17}
                      strokeWidth={1.5}
                      className="absolute -right-5 top-[25px] hidden text-[#B79A72] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* THREE CUSTOMER ACTIONS */}
        <div className="mt-16 border-y border-[#DDE6ED] py-9 lg:mt-20 lg:py-12">
          <p className="text-center font-serif text-[13px] text-[#B79A72]">
            Different restaurant customers take different actions
          </p>

          <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-3 gap-3 sm:gap-10">
            {customerActions.map((action) => {
              const Icon = action.icon;

              return (
                <div
                  key={action.label}
                  className="sr-journey-action flex flex-col items-center text-center"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="sr-journey-action-icon text-[#B79A72]"
                  />

                  <h4 className="mt-3 font-serif text-[18px] font-normal sm:text-[23px]">
                    {action.label}
                  </h4>

                  <p className="mt-1 text-[11px] leading-[1.6] text-[#0B2A52]/60 sm:text-[13px]">
                    {action.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHAT WE HELP IMPROVE */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center">
            <p className="font-serif text-[12px] uppercase tracking-[0.16em] text-[#B79A72]">
              What We Help Improve
            </p>

            <h3 className="mt-4 font-serif text-[27px] font-normal tracking-[-0.03em] sm:text-[34px]">
              Make Every Step Easier for Your Customers.
            </h3>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {improvements.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <Check
                  size={19}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#B79A72]"
                />

                <div>
                  <h4 className="font-serif text-[19px] font-normal sm:text-[21px]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[13px] leading-[1.85] text-[#0B2A52]/65 sm:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIMPLE CLOSING */}
        <div className="mt-16 border-t border-[#DDE6ED] pt-8 text-center lg:mt-20">
          <p className="mx-auto max-w-[850px] font-serif text-[19px] font-normal leading-[1.7] text-[#0B2A52] sm:text-[23px]">
            We don&apos;t just help restaurants get noticed. We help create
            a clearer journey from online discovery to real customer actions.
          </p>
        </div>
      </div>
    </section>
  );
}
