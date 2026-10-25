
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Camera,
  Megaphone,
  MonitorSmartphone,
  Clapperboard,
  MessageCircle,
} from "lucide-react";

const restaurantServices = [
  {
    number: "01",
    icon: MapPin,
    title: "Restaurant SEO & Google Maps",
    description:
      "Help nearby customers discover your restaurant when they search for restaurants, cuisines, dining locations and food options.",
    details:
      "We work on Google Business Profile optimisation, restaurant website SEO, location pages, menu visibility, local search content and accurate business information.",
    focus: "Improve local visibility and relevant restaurant discovery.",
    href: "/services/seo",
  },
  {
    number: "02",
    icon: Camera,
    title: "Restaurant Social Media Marketing",
    description:
      "Make your restaurant more memorable through content that shows its food, ambience, customer experience and personality.",
    details:
      "We develop social media content strategies around signature dishes, menu launches, offers, behind-the-scenes moments, restaurant Reels and locally relevant campaigns.",
    focus: "Build awareness, interest and reasons to visit or order.",
    href: "/services/social-media-marketing",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Google Ads & Meta Advertising",
    description:
      "Reach nearby customers searching for dining experiences and introduce your restaurant to relevant local audiences.",
    details:
      "We plan campaigns around locations, cuisines, offers, new openings, special menus, events and customer actions. Campaign creatives and targeting can be refined based on performance.",
    focus: "Support restaurant visits, reservations, enquiries and food orders.",
    href: "/services/performance-marketing",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    title: "Restaurant Website & Digital Menu",
    description:
      "Your website should help visitors understand your restaurant and take the next step without difficulty.",
    details:
      "We create mobile-friendly restaurant websites, digital menus, location pages, event information, reservation enquiry paths and direct-order integrations where appropriate.",
    focus: "Make restaurant information accessible and customer actions easier.",
    href: "/services/website-development",
  },
  {
    number: "05",
    icon: Clapperboard,
    title: "Food Content, Video & Creative",
    description:
      "Show what makes your food and dining experience worth exploring.",
    details:
      "We help create food-focused promotional videos, professionally edited Reels, menu launch creatives, campaign graphics, short-form videos and approved AI-assisted creative where suitable.",
    focus:
      "Communicate food quality, atmosphere, experience and offers through appealing visuals.",
    href: "/services/ai-video-creative",
  },
  {
    number: "06",
    icon: MessageCircle,
    title: "WhatsApp Marketing & AI Automation",
    description:
      "Improve how your restaurant communicates with interested and returning customers.",
    details:
      "We can create consent-based workflows for routine reservation enquiries, booking confirmations, event enquiries, customer follow-ups, relevant offers and loyalty communication.",
    focus: "Improve response handling, customer communication and repeat business.",
    href: "/services/ai-automation",
  },
];

export default function RestaurantServices() {
  return (
    <section
      id="restaurant-services"
      aria-labelledby="restaurant-services-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28 xl:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* SECTION HEADING */}
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B79A72]" />
              <p className="font-serif text-[12px] uppercase tracking-[0.16em] text-[#B79A72]">
                Our Restaurant Digital Marketing Services
              </p>
            </div>

            <h2
              id="restaurant-services-heading"
              className="mt-6 font-serif text-[2.1rem] font-normal leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              Marketing That Brings Your Restaurant{" "}
              <span className="text-[#B79A72]">
                Closer to Its Next Customer.
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-[14px] leading-[1.9] text-[#0B2A52]/65 sm:text-[15px]">
            Every restaurant has different goals. We combine local SEO,
            paid advertising, social media, websites, food content and
            customer communication based on your location, business
            model and target audience.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:mt-20 xl:grid-cols-3">
          {restaurantServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E0E8EF] bg-[#FAFCFE] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#B79A72]/60 hover:bg-white hover:shadow-[0_18px_50px_rgba(11,42,82,0.07)] sm:p-8"
              >
                {/* ICON AND NUMBER */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border border-[#E0E8EF] bg-white text-[#0B2A52] transition-colors duration-300 group-hover:border-[#B79A72]/40 group-hover:text-[#B79A72]">
                    <Icon size={25} strokeWidth={1.45} />
                  </div>

                  <span className="font-serif text-[26px] font-normal text-[#B79A72]/70">
                    {service.number}
                  </span>
                </div>

                {/* SERVICE CONTENT */}
                <h3 className="mt-8 font-serif text-[24px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[27px]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[13px] leading-[1.9] text-[#0B2A52]/80">
                  {service.description}
                </p>

                <p className="mt-4 text-[12px] leading-[1.95] text-[#0B2A52]/60 sm:text-[13px]">
                  {service.details}
                </p>

                {/* SERVICE FOCUS */}
                <div className="mt-auto pt-7">
                  <div className="border-t border-[#E0E8EF] pt-5">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                      Our Focus
                    </p>

                    <p className="mt-3 text-[12px] leading-[1.75] text-[#0B2A52]/75 sm:text-[13px]">
                      {service.focus}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    title={`Explore ${service.title}`}
                    className="mt-6 inline-flex items-center gap-2 text-[12px] text-[#0B2A52] transition-colors hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                  >
                    Explore Service
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#B79A72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>

                {/* SUBTLE BOTTOM ACCENT */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 flex flex-col gap-7 border-t border-[#DFE7ED] pt-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="font-serif text-[12px] uppercase tracking-[0.16em] text-[#B79A72]">
              Your Restaurant. Your Growth Strategy.
            </p>

            <h3 className="mt-4 max-w-[750px] font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[36px]">
              The Right Marketing Services for{" "}
              <span className="text-[#B79A72]">
                Your Restaurant&apos;s Goals.
              </span>
            </h3>

            <p className="mt-4 max-w-[700px] text-[13px] leading-[1.85] text-[#0B2A52]/65 sm:text-[14px]">
              From stronger local visibility to more reservations, orders
              and repeat customers, we help you choose the right
              marketing approach for your restaurant.
            </p>
          </div>

          <Link
            href="/contact?service=restaurant-marketing"
            title="Build My Restaurant Marketing Plan"
            className="group inline-flex min-h-[52px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] text-white transition-colors duration-300 hover:bg-[#173E6C] sm:text-[13px]"
          >
            Build My Restaurant Marketing Plan
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
