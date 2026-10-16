import Image from "next/image";
import {
  BarChart3,
  Check,
  FileText,
  Camera,
  MapPin,
  MessageCircleMore,
  Search,
} from "lucide-react";

const localSearches = [
  "salon near me",
  "beauty salon near me",
  "spa near me",
  "hair salon in [location]",
  "bridal makeup in [city]",
];

const adSearches = [
  "keratin treatment near me",
  "bridal makeup artist in [city]",
  "spa near me",
  "hair treatment near me",
];

const landingPagePoints = [
  "Service",
  "Benefits",
  "Pricing / Offer",
  "Results / Proof",
  "Location",
  "Booking Action",
];

const automationPoints = [
  "Instant enquiry replies",
  "Appointment reminders",
  "Follow-ups",
  "Missed enquiry follow-up",
  "Review requests",
  "Repeat booking reminders",
  "Offer campaigns",
];

export default function BeautyServicesSystem() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop Background */}
      <Image
        src="/industries/wellness-beauty/beauty-hero.webp"
        alt="Luxury salon and wellness interior representing digital marketing services for salons, spas and beauty businesses"
        title="Digital Marketing Services for Salons, Spas and Beauty Businesses"
        fill
        sizes="100vw"
        className="hidden object-cover object-center lg:block"
      />

      {/* Mobile Background */}
      <Image
        src="/industries/wellness-beauty/beauty-hero2.webp"
        alt="Premium salon and spa setting representing beauty business marketing services"
        title="Salon Spa and Beauty Business Digital Marketing Services"
        fill
        sizes="100vw"
        className="object-cover object-center lg:hidden"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/26 sm:bg-white/24 lg:bg-white/24" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* Heading */}
        <div className="max-w-[900px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              What Sharp Rays Can Actually Do for You
            </p>
          </div>

          <h2 className="max-w-[860px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            What We Can Build for Your{" "}
            <span className="text-[#B79A72]">
              Salon, Spa or Beauty Business.
            </span>
          </h2>
        </div>

        {/* Top Row */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* Local SEO */}
          <article className="rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/95 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                <MapPin size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  Local SEO & Google Maps
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65">
                  We improve your visibility when nearby customers search for
                  salons, spas, treatments and beauty services on Google and
                  Maps.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {localSearches.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-[#F8F3EA] px-3 py-1.5 text-[10px] font-medium text-[#0B2A52]/70"
                    >
                      <Search size={11} className="text-[#B79A72]" />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65">
                  This can include local SEO, treatment and service pages,
                  location pages and Google Business Profile optimisation.
                </p>
              </div>
            </div>
          </article>

          {/* Google Ads */}
          <article className="rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/95 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                <BarChart3 size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  Google Ads
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65">
                  We target people already searching for the treatments, beauty
                  services and appointments your business offers.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {adSearches.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-[#F8F3EA] px-3 py-1.5 text-[10px] font-medium text-[#0B2A52]/70"
                    >
                      <Search size={11} className="text-[#B79A72]" />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65">
                  The goal is qualified enquiries and appointment opportunities
                  — not just clicks.
                </p>
              </div>
            </div>
          </article>

          {/* Social Media */}
          <article className="rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/95 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                <Camera size={19} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  Social Media Marketing
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65">
                  We create content around transformations, treatments, client
                  results, stylist expertise, offers, education, reels and
                  behind-the-scenes moments.
                </p>

                <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65">
                  The goal is to make social media a discovery and trust channel
                  — not just a posting routine.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Row */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* Website & Landing Pages */}
          <article className="rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/95 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                <FileText size={19} strokeWidth={1.8} />
              </div>

              <div className="w-full">
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  Website & Landing Pages
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65">
                  For important services, treatments and campaigns, we create
                  pages that clearly explain:
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {landingPagePoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full bg-[#F8F3EA] px-3 py-2"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#B79A72]/40 text-[#B79A72]">
                        <Check size={11} strokeWidth={2} />
                      </span>

                      <span className="text-[10px] font-medium text-[#0B2A52]/70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[13px] leading-6 text-[#0B2A52]/65">
                  So visitors know what you offer and what they should do next.
                </p>
              </div>
            </div>
          </article>

          {/* WhatsApp & AI Automation */}
          <article className="rounded-[24px] border border-[#0B2A52]/[0.08] bg-white/95 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                <MessageCircleMore size={19} strokeWidth={1.8} />
              </div>

              <div className="w-full">
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  WhatsApp & AI Automation
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65">
                  We can create workflows for:
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {automationPoints.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-[#F8F3EA] px-3 py-2 text-[10px] font-medium text-[#0B2A52]/70"
                    >
                      <Check size={11} className="text-[#B79A72]" />
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[13px] leading-6 text-[#0B2A52]/65">
                  This helps create a smoother system from enquiry to
                  appointment, follow-up and repeat booking.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}