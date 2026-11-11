
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Compass,
  CheckCircle2,
} from "lucide-react";

const images = {
  resort: "/industries/travel-hospitality/resort.webp",
  homestay: "/industries/travel-hospitality/homestay.webp",
  hotel: "/industries/travel-hospitality/hotel.webp",
};

export default function TravelHospitalityHero() {
  return (
    <section
      id="travel-hospitality-hero"
      aria-labelledby="travel-hospitality-heading"
      className="relative isolate overflow-hidden bg-white pb-16 pt-24 text-[#0B2A52] sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      {/* Soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-44 -top-44 h-[570px] w-[570px] rounded-full bg-[#B79A72]/[0.055] blur-[110px]" />
        <div className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E9E2D9]/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-11 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 xl:gap-16">

        {/* LEFT — HERO COPY */}
        <div className="max-w-[660px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#B79A72] sm:text-[11px]">
              Digital Marketing for Travel & Hospitality
            </span>
          </div>

          <h1
            id="travel-hospitality-heading"
            className="font-serif text-[37px] font-normal leading-[1.15] tracking-[-0.037em] sm:text-[45px] lg:text-[48px] xl:text-[53px]"
          >
            Turn Travel Searches Into{" "}
            <span className="text-[#B79A72]">
              More Bookings and Guest Enquiries.
            </span>
          </h1>

          <div className="mt-6 max-w-[605px] space-y-4">
            <p className="text-[13px] leading-[1.95] text-[#0B2A52]/80 sm:text-[14px]">
              Whether you manage a hotel, resort, homestay or travel
              company, your next customer may already be searching
              for the stay, destination or travel experience you offer.
            </p>

            <p className="text-[13px] leading-[1.95] text-[#0B2A52]/70 sm:text-[14px]">
              Sharp Rays helps travel and hospitality businesses
              improve Google visibility, attract relevant travellers
              and turn online interest into bookings through
              hospitality SEO, Google Ads, social media marketing,
              booking-focused websites and enquiry automation.
            </p>

            <p className="text-[12px] leading-[1.9] text-[#0B2A52]/60 sm:text-[13px]">
              We build strategies around your business model,
              target destinations, audience and booking goals —
              not a one-size-fits-all marketing package.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?service=travel-hospitality-marketing"
              title="Build My Hospitality Growth Plan"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[12px] bg-[#0B2A52] px-5 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Build My Hospitality Growth Plan
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="#hospitality-opportunities"
              title="Explore How We Help Travel and Hospitality Businesses"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[12px] border border-[#E9E2D9] bg-[#FCFAF7] px-5 py-3 text-[12px] text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#F7F0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Explore How We Help
              <ArrowDown
                size={15}
                strokeWidth={1.5}
                className="text-[#B79A72] transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
          </div>

          {/* BOTTOM DETAIL */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E9E2D9] pt-5">
            <span className="inline-flex items-center gap-2 text-[11px] text-[#64778A]">
              <CheckCircle2
                size={15}
                strokeWidth={1.5}
                className="text-[#B79A72]"
              />
              Relevant Traveller Discovery
            </span>

            <span className="inline-flex items-center gap-2 text-[11px] text-[#64778A]">
              <CheckCircle2
                size={15}
                strokeWidth={1.5}
                className="text-[#B79A72]"
              />
              Booking-Focused Strategy
            </span>
          </div>
        </div>

        {/* RIGHT — EDITORIAL IMAGE COMPOSITION */}
        <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
          {/* Background framing */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[30px] border border-[#EAE3D9]/80 sm:-inset-5"
          />

          <div className="relative grid h-[375px] grid-cols-[1.35fr_0.85fr] gap-3 sm:h-[465px] sm:gap-4 lg:h-[480px]">

            {/* LARGE RESORT IMAGE */}
            <div className="group relative overflow-hidden rounded-[19px] bg-[#F1EBE3] sm:rounded-[22px]">
              <Image
                src={images.resort}
                alt="Luxury resort with pool and tropical surroundings representing hospitality marketing"
                title="Resort and Hotel Digital Marketing"
                fill
                priority
                sizes="(max-width: 1023px) 60vw, 32vw"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#122D39]/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-4 right-4 text-white sm:bottom-7 sm:left-6">
                <span className="text-[9px] uppercase tracking-[0.17em] text-white/75">
                  Explore
                </span>
                <p className="mt-1 font-serif text-[23px] leading-[1.15] sm:text-[29px]">
                  Stay.
                  <span className="block italic">Discover.</span>
                </p>
              </div>
            </div>

            {/* RIGHT STACK */}
            <div className="grid min-h-0 grid-rows-[0.9fr_1.1fr] gap-3 sm:gap-4">
              <div className="group relative overflow-hidden rounded-[19px] bg-[#F1EBE3] sm:rounded-[22px]">
                <Image
                  src={images.homestay}
                  alt="Welcoming boutique homestay surrounded by natural greenery"
                  title="Homestay Digital Marketing"
                  fill
                  sizes="(max-width: 1023px) 35vw, 17vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.06]"
                />
              </div>

              <div className="group relative overflow-hidden rounded-[19px] bg-[#F1EBE3] sm:rounded-[22px]">
                <Image
                  src={images.hotel}
                  alt="Coastal luxury hotel with a beautiful destination view"
                  title="Hospitality and Destination Marketing"
                  fill
                  sizes="(max-width: 1023px) 35vw, 17vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.06]"
                />
              </div>
            </div>
          </div>

          {/* FLOATING DESTINATION DETAIL */}
          <div className="absolute -bottom-5 left-1/2 z-10 flex w-[min(88%,330px)] -translate-x-1/2 items-center gap-3 rounded-[13px] border border-[#EAE2D8] bg-white/95 px-4 py-3.5 shadow-[0_15px_40px_-22px_rgba(11,42,82,0.25)] backdrop-blur-md sm:bottom-[-22px] sm:px-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FAF5EE] text-[#B79A72]">
              <Compass size={19} strokeWidth={1.5} />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[#B79A72]">
                From Search to Stay
              </p>
              <p className="mt-1 text-[11px] text-[#51667A]">
                Help travellers discover your experience.
              </p>
            </div>

            <MapPin
              size={16}
              strokeWidth={1.5}
              className="shrink-0 text-[#B79A72]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
