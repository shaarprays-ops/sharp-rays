
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Camera,
  Megaphone,
  MonitorSmartphone,
  Clapperboard,
  MessageCircle,
  Search,
  MousePointerClick,
  UtensilsCrossed,
  Play,
  MessagesSquare,
  Check,
} from "lucide-react";

const restaurantServices = [
  {
    number: "01",
    icon: MapPin,
    VisualIcon: Search,
    label: "LOCAL SEARCH",
    title: "Restaurant SEO & Google Maps",
    description:
      "Help nearby customers discover your restaurant when they search for restaurants, cuisines, dining locations and food options.",
    details:
      "We work on Google Business Profile optimisation, restaurant website SEO, location pages, menu visibility, local search content and accurate business information.",
    focus: "Improve local visibility and relevant restaurant discovery.",
    href: "/services/seo",
    visualTitle: "Be found when",
    visualAccent: "hunger strikes.",
    visualTag: "Search & Discovery",
    tags: ["Google Maps", "Local SEO", "Restaurant Listings"],
  },
  {
    number: "02",
    icon: Camera,
    VisualIcon: Camera,
    label: "SOCIAL PRESENCE",
    title: "Restaurant Social Media Marketing",
    description:
      "Make your restaurant more memorable through content that shows its food, ambience, customer experience and personality.",
    details:
      "We develop social media content strategies around signature dishes, menu launches, offers, behind-the-scenes moments, restaurant Reels and locally relevant campaigns.",
    focus: "Build awareness, interest and reasons to visit or order.",
    href: "/services/social-media-marketing",
    visualTitle: "Turn your food",
    visualAccent: "into a story.",
    visualTag: "Content & Community",
    tags: ["Instagram", "Reels", "Local Campaigns"],
  },
  {
    number: "03",
    icon: Megaphone,
    VisualIcon: MousePointerClick,
    label: "PAID GROWTH",
    title: "Google Ads & Meta Advertising",
    description:
      "Reach nearby customers searching for dining experiences and introduce your restaurant to relevant local audiences.",
    details:
      "We plan campaigns around locations, cuisines, offers, new openings, special menus, events and customer actions. Campaign creatives and targeting can be refined based on performance.",
    focus: "Support restaurant visits, reservations, enquiries and food orders.",
    href: "/services/performance-marketing",
    visualTitle: "Reach the",
    visualAccent: "right audience.",
    visualTag: "Performance Marketing",
    tags: ["Google Ads", "Meta Ads", "Local Targeting"],
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    VisualIcon: UtensilsCrossed,
    label: "DIGITAL EXPERIENCE",
    title: "Restaurant Website & Digital Menu",
    description:
      "Your website should help visitors understand your restaurant and take the next step without difficulty.",
    details:
      "We create mobile-friendly restaurant websites, digital menus, location pages, event information, reservation enquiry paths and direct-order integrations where appropriate.",
    focus: "Make restaurant information accessible and customer actions easier.",
    href: "/services/website-development",
    visualTitle: "Make every",
    visualAccent: "visit easier.",
    visualTag: "Website Experience",
    tags: ["Restaurant Websites", "Digital Menus", "Booking Paths"],
  },
  {
    number: "05",
    icon: Clapperboard,
    VisualIcon: Play,
    label: "CREATIVE CONTENT",
    title: "Food Content, Video & Creative",
    description:
      "Show what makes your food and dining experience worth exploring.",
    details:
      "We help create food-focused promotional videos, professionally edited Reels, menu launch creatives, campaign graphics, short-form videos and approved AI-assisted creative where suitable.",
    focus:
      "Communicate food quality, atmosphere, experience and offers through appealing visuals.",
    href: "/services/ai-video-creative",
    visualTitle: "Make your",
    visualAccent: "food unforgettable.",
    visualTag: "Visual Storytelling",
    tags: ["Food Videos", "Reels", "Creative Campaigns"],
  },
  {
    number: "06",
    icon: MessageCircle,
    VisualIcon: MessagesSquare,
    label: "CUSTOMER CONNECTIONS",
    title: "WhatsApp Marketing & AI Automation",
    description:
      "Improve how your restaurant communicates with interested and returning customers.",
    details:
      "We can create consent-based workflows for routine reservation enquiries, booking confirmations, event enquiries, customer follow-ups, relevant offers and loyalty communication.",
    focus: "Improve response handling, customer communication and repeat business.",
    href: "/services/ai-automation",
    visualTitle: "Stay closer",
    visualAccent: "to your guests.",
    visualTag: "Communication & Automation",
    tags: ["WhatsApp", "Follow-ups", "AI Workflows"],
  },
];

export default function RestaurantServices() {
  return (
    <section
      id="restaurant-services"
      aria-labelledby="restaurant-services-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[18%] h-[380px] w-[380px] rounded-full bg-[#B79A72]/[0.035] blur-[100px]" />
        <div className="absolute -right-32 bottom-[20%] h-[420px] w-[420px] rounded-full bg-[#0B2A52]/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* CENTERED INTRO */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="font-serif text-[11px] uppercase tracking-[0.16em] text-[#B79A72] sm:text-[12px]">
              Our Restaurant Digital Marketing Services
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="restaurant-services-heading"
            className="font-serif text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[37px] lg:text-[43px]"
          >
            Marketing That Brings Your Restaurant{" "}
            <span className="text-[#B79A72]">
              Closer to Its Next Customer.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[670px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            Every restaurant has different goals. We combine local SEO,
            paid advertising, social media, websites, food content and
            customer communication based on your location, business model
            and target audience.
          </p>
        </div>

        {/* SERVICE SHOWCASE */}
        <div className="mt-14 border-t border-[#DFE7ED] sm:mt-16">
          {restaurantServices.map((service, index) => {
            const Icon = service.icon;
            const VisualIcon = service.VisualIcon;
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.number}
                className="group relative border-b border-[#DFE7ED] py-9 sm:py-12 lg:py-14"
              >
                <div
                  className={`grid items-center gap-7 lg:grid-cols-2 lg:gap-14 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* SERVICE INFORMATION */}
                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-serif text-[15px] text-[#B79A72]">
                        {service.number}
                      </span>

                      <span className="h-px w-8 bg-[#D3C0A5]" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#94A0AD]">
                        {service.label}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] border border-[#E2E8EE] bg-[#F8FAFC] text-[#0B2A52] transition-all duration-500 group-hover:border-[#D9C4A7] group-hover:bg-[#FAF6F0] group-hover:text-[#B79A72]">
                        <Icon size={22} strokeWidth={1.45} />
                      </div>

                      <h3 className="max-w-[440px] font-serif text-[25px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[31px] lg:text-[33px]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-6 max-w-[510px] text-[13px] leading-[1.95] text-[#0B2A52]/80">
                      {service.description}
                    </p>

                    <p className="mt-4 max-w-[510px] text-[12px] leading-[1.95] text-[#0B2A52]/60 sm:text-[13px]">
                      {service.details}
                    </p>

                    {/* Focus */}
                    <div className="mt-6 flex max-w-[510px] items-start gap-3 border-l-2 border-[#B79A72]/60 bg-[#FAF8F5] px-4 py-3">
                      <Check
                        size={15}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 text-[#B79A72]"
                      />

                      <p className="text-[12px] leading-[1.8] text-[#526780]">
                        {service.focus}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      title={`Explore ${service.title}`}
                      className="mt-7 inline-flex items-center gap-3 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                    >
                      Explore Service

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DFE7ED] transition-all duration-300 group-hover:border-[#B79A72] group-hover:bg-[#B79A72] group-hover:text-white">
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </Link>
                  </div>

                  {/* VISUAL PANEL */}
                  <div className="relative">
                    <div className="relative min-h-[310px] overflow-hidden rounded-[22px] border border-[#E4E9EE] bg-[#F7F9FB] p-6 transition-all duration-500 group-hover:border-[#D9C5A8] group-hover:shadow-[0_20px_60px_-35px_rgba(11,42,82,0.16)] sm:min-h-[345px] sm:p-8">
                      {/* Decorative rings */}
                      <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-[#B79A72]/20 transition-transform duration-700 group-hover:scale-110" />
                      <div className="pointer-events-none absolute -right-12 -top-12 h-[210px] w-[210px] rounded-full border border-[#B79A72]/15" />
                      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[250px] w-[250px] rounded-full bg-[#B79A72]/[0.055] blur-[45px]" />

                      {/* Large background number */}
                      <span className="pointer-events-none absolute -bottom-12 right-3 select-none font-serif text-[180px] leading-none tracking-[-0.1em] text-[#0B2A52]/[0.035] sm:text-[220px]">
                        {service.number}
                      </span>

                      <div className="relative flex min-h-[260px] flex-col sm:min-h-[280px]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full border border-[#E3E7EB] bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-[#728397]">
                            {service.visualTag}
                          </span>

                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.4}
                            className="text-[#B79A72] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>

                        {/* Central visual */}
                        <div className="relative flex flex-1 items-center justify-center py-5">
                          <div className="absolute h-[125px] w-[125px] rounded-full border border-[#D8C5A9]/40 transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute h-[94px] w-[94px] rounded-full border border-[#D8C5A9]/50" />

                          <div className="relative flex h-[70px] w-[70px] items-center justify-center rounded-[21px] bg-[#0B2A52] text-white shadow-[0_14px_35px_rgba(11,42,82,0.15)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-5deg] group-hover:bg-[#123D6B]">
                            <VisualIcon size={29} strokeWidth={1.35} />
                          </div>

                          <span className="absolute left-[calc(50%-78px)] top-[calc(50%-52px)] h-[7px] w-[7px] rounded-full bg-[#B79A72]" />
                          <span className="absolute right-[calc(50%-73px)] bottom-[calc(50%-55px)] h-[5px] w-[5px] rounded-full bg-[#0B2A52]/35" />
                        </div>

                        {/* Visual wording */}
                        <div>
                          <p className="font-serif text-[25px] font-normal leading-[1.2] tracking-[-0.03em] text-[#0B2A52] sm:text-[30px]">
                            {service.visualTitle}
                            <span className="ml-1 text-[#B79A72]">
                              {service.visualAccent}
                            </span>
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-[#E0E6EC] bg-white/75 px-3 py-1.5 text-[10px] text-[#6C7C8E]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* FINAL CTA */}
        <div className="mt-14 flex flex-col gap-7 rounded-[22px] border border-[#E3E9EF] bg-[#F8FAFC] p-7 sm:mt-16 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[720px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="font-serif text-[11px] uppercase tracking-[0.16em] text-[#B79A72]">
                Your Restaurant. Your Growth Strategy.
              </span>
            </div>

            <h3 className="font-serif text-[27px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[35px]">
              The Right Marketing Services for{" "}
              <span className="text-[#B79A72]">
                Your Restaurant&apos;s Goals.
              </span>
            </h3>

            <p className="mt-4 max-w-[650px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              From stronger local visibility to more reservations, orders
              and repeat customers, we help you choose the right marketing
              approach for your restaurant.
            </p>
          </div>

          <Link
            href="/contact?service=restaurant-marketing"
            title="Build My Restaurant Marketing Plan"
            className="group inline-flex min-h-[52px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173E6C] hover:shadow-[0_12px_28px_rgba(11,42,82,0.15)] sm:text-[13px]"
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
