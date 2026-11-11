
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

const highlights = [
  "Restaurant SEO",
  "Google Maps",
  "Social Media",
  "Food Ads",
  "Online Orders",
];

export default function RestaurantHero() {
  return (
    <section
      id="restaurant-hero"
      aria-labelledby="restaurant-hero-heading"
      className="sr-restaurant-hero relative isolate overflow-hidden  text-[#0B2A52]"
    >
      {/* SEPARATE STYLES */}
      <style>{`
        @keyframes srRestaurantReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes srRestaurantImageReveal {
          from {
            opacity: 0;
            transform: scale(1.055);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .sr-restaurant-hero .sr-restaurant-reveal {
          animation: srRestaurantReveal .8s cubic-bezier(.22,1,.36,1) both;
        }

        .sr-restaurant-hero .sr-restaurant-photo {
          animation: srRestaurantImageReveal 1.25s cubic-bezier(.22,1,.36,1) both;
          transition: transform .9s cubic-bezier(.22,1,.36,1);
        }

        .sr-restaurant-hero .sr-restaurant-visual:hover .sr-restaurant-photo {
          transform: scale(1.035);
        }

        .sr-restaurant-hero .sr-restaurant-cta-icon {
          transition: transform .3s ease;
        }

        .sr-restaurant-hero .sr-restaurant-cta:hover .sr-restaurant-cta-icon {
          transform: translate(3px,-3px);
        }

        .sr-restaurant-hero .sr-restaurant-scroll-icon {
          transition: transform .3s ease;
        }

        .sr-restaurant-hero .sr-restaurant-scroll:hover .sr-restaurant-scroll-icon {
          transform: translate(2px,2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-restaurant-hero .sr-restaurant-reveal,
          .sr-restaurant-hero .sr-restaurant-photo {
            animation: none !important;
          }

          .sr-restaurant-hero .sr-restaurant-photo,
          .sr-restaurant-hero .sr-restaurant-cta-icon,
          .sr-restaurant-hero .sr-restaurant-scroll-icon {
            transition: none !important;
          }

          .sr-restaurant-hero .sr-restaurant-visual:hover .sr-restaurant-photo,
          .sr-restaurant-hero .sr-restaurant-cta:hover .sr-restaurant-cta-icon,
          .sr-restaurant-hero .sr-restaurant-scroll:hover .sr-restaurant-scroll-icon {
            transform: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[430px] w-[430px] rounded-full "
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full "
      />

      {/* MAIN HERO */}
      <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[780px] lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-12 lg:pb-24 lg:pt-24 xl:gap-16 xl:px-16">

        {/* LEFT — CONTENT */}
        <div className="relative z-10 max-w-[710px]">

          {/* EYEBROW */}
          <div className="sr-restaurant-reveal flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-[42px] shrink-0 bg-[#B79A72]"
            />

            <span className="font-serif text-[10px] font-normal uppercase leading-relaxed tracking-[0.17em] text-[#B79A72] sm:text-[12px]">
              Digital Marketing for Restaurants &amp; Cafés
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            id="restaurant-hero-heading"
            className="sr-restaurant-reveal mt-7 max-w-[740px] text-[2.2rem] font-normal leading-[1.13] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            style={{ animationDelay: "80ms" }}
          >
            Get More Diners,{" "}
            <span className="text-[#B79A72]">
              Table Bookings
            </span>{" "}
            and Food Orders for Your Restaurant.
          </h1>

          {/* INTRO STATEMENT */}
          <p
            className="sr-restaurant-reveal mt-7 max-w-[610px] text-[15px] font-normal leading-[1.85] text-[#0B2A52]/85 sm:text-[17px]"
            style={{ animationDelay: "140ms" }}
          >
            Your food deserves to be discovered by the people looking
            for their next favourite place to eat.
          </p>

          {/* DESCRIPTION */}
          <div
            className="sr-restaurant-reveal mt-5 max-w-[625px] space-y-4"
            style={{ animationDelay: "190ms" }}
          >
            <p className="text-[13px] font-normal leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              Sharp Rays helps restaurants, cafés, cloud kitchens and food
              businesses attract local customers through restaurant SEO,
              Google Maps optimisation, social media marketing, Google Ads
              and conversion-focused websites.
            </p>

            <p className="text-[13px] font-normal leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              We build restaurant digital marketing strategies around your
              location, cuisine, customer preferences and business goals —
              whether you want more dine-in customers, table reservations
              or online food orders.
            </p>
          </div>

          {/* CTAS */}
          <div
            className="sr-restaurant-reveal mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "250ms" }}
          >
            <Link
              href="/contact"
              title="Get My Restaurant Growth Strategy"
              className="sr-restaurant-cta group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#173F6A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2A52] sm:text-[13px]"
            >
              Get My Restaurant Growth Strategy
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="sr-restaurant-cta-icon shrink-0"
              />
            </Link>

            <Link
              href="#restaurant-services"
              title="Explore How We Help Restaurants and Cafés"
              className="sr-restaurant-scroll group inline-flex min-h-[52px] items-center justify-center gap-2.5 border-b border-[#B79A72]/60 px-1 text-[12px] font-normal text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[13px]"
            >
              Explore How We Help
              <ArrowDownRight
                size={16}
                strokeWidth={1.6}
                className="sr-restaurant-scroll-icon text-[#B79A72]"
              />
            </Link>
          </div>

          {/* TRUST MESSAGE */}
          <div
            className="sr-restaurant-reveal mt-9 flex items-start gap-3"
            style={{ animationDelay: "310ms" }}
          >
            <Check
              size={17}
              strokeWidth={1.6}
              className="mt-0.5 shrink-0 text-[#B79A72]"
            />

            <p className="text-[11px] font-normal leading-[1.85] text-[#0B2A52]/60 sm:text-[12px]">
              Built around your restaurant, your local audience and
              your customer journey.
            </p>
          </div>
        </div>

        {/* RIGHT — RESTAURANT VISUAL */}
        <div className="sr-restaurant-reveal relative mx-auto w-full max-w-[610px] lg:mx-0 lg:max-w-none">

          {/* Offset decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 hidden h-[90%] w-[90%] rounded-[190px_190px_18px_18px] border border-[#B79A72]/45 sm:block lg:-right-5 lg:-top-5"
          />

          {/* MAIN IMAGE */}
          <div className="sr-restaurant-visual relative isolate h-[450px] overflow-hidden rounded-[180px_180px_18px_18px] bg-[#DAD4CB] sm:h-[570px] sm:rounded-[240px_240px_20px_20px] lg:h-[630px]">

            <Image
              src="/industries/restaurants/restaurant-hero.webp"
              alt="Beautifully plated restaurant food on a thoughtfully styled dining table inside an elegant restaurant"
              title="Restaurant and Café Digital Marketing — Sharp Rays"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="sr-restaurant-photo object-cover object-center"
            />

            {/* Subtle image treatment */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B31]/70 via-[#071B31]/5 to-transparent"
            />

            {/* EDITORIAL IMAGE LABEL */}
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-px w-9 shrink-0 bg-[#D6BF9B]" />

                <div>
                  <span className="font-serif text-[10px] font-normal uppercase tracking-[0.18em] text-[#D6BF9B] sm:text-[11px]">
                    From Discovery to Dining
                  </span>

                  <p className="mt-3 max-w-[360px] text-[22px] font-normal leading-[1.3] tracking-[-0.025em] text-white sm:text-[29px]">
                    Help More Local Customers Find Their Next Favourite Table.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ONE SUBTLE LOCATION CALLOUT */}
          <div className="absolute -bottom-5 right-3 z-10 flex items-center gap-3 rounded-[13px] border border-[#E6EBEF] bg-white px-4 py-3 shadow-[0_12px_36px_rgba(11,42,82,.10)] sm:-bottom-6 sm:right-5 sm:px-5 sm:py-4 lg:-right-4">
            <MapPin
              size={21}
              strokeWidth={1.5}
              className="shrink-0 text-[#B79A72]"
            />

            <div>
              <p className="text-[12px] font-normal text-[#0B2A52] sm:text-[13px]">
                Local Search Visibility
              </p>

              <p className="mt-1 text-[10px] font-normal text-[#0B2A52]/55 sm:text-[11px]">
                Be easier to discover nearby.
              </p>
            </div>
          </div>

          {/* Small visual marker */}
          <div className="absolute -left-4 top-[35%] hidden items-center justify-center rounded-full border border-[#E8E2D8] bg-white p-3 shadow-[0_8px_24px_rgba(11,42,82,.07)] lg:flex">
            <UtensilsCrossed
              size={22}
              strokeWidth={1.3}
              className="text-[#B79A72]"
            />
          </div>
        </div>
      </div>

      {/* SERVICE HIGHLIGHTS — FULL-WIDTH STRIP */}
      <div className="relative border-t border-[#E2EAF0] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-7 xl:px-16">

          <div className="shrink-0">
            <p className="font-serif text-[10px] font-normal uppercase tracking-[0.16em] text-[#B79A72] sm:text-[11px]">
              Restaurant Growth Focus
            </p>
          </div>

          <div
            aria-label="Restaurant marketing services"
            className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-6"
          >
            {highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-center gap-4 lg:gap-6">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-[#B79A72]/70 sm:block"
                  />
                )}

                <span className="text-[12px] font-normal text-[#0B2A52]/75 sm:text-[13px]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
