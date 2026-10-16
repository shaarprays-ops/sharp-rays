import Image from "next/image";
import {
  Bot,
  Clapperboard,
  Globe2,
  Camera,
  Megaphone,
  Search,
} from "lucide-react";

const services = [
  {
    title: "SEO & Local Search",
    description: "Get discovered on Google and Maps.",
    icon: Search,
  },
  {
    title: "Google Ads",
    description: "Capture people already searching for services.",
    icon: Megaphone,
  },
  {
    title: "Social Media Marketing",
    description: "Build visibility, trust and demand.",
    icon: Camera,
  },
  {
    title: "Landing Pages & Website Development",
    description: "Convert interest into enquiries.",
    icon: Globe2,
  },
  {
    title: "WhatsApp & AI Automation",
    description: "Follow up faster and improve rebooking.",
    icon: Bot,
  },
  {
    title: "AI Video & Creative",
    description: "Create high-converting visuals and campaign assets.",
    icon: Clapperboard,
  },
];

export default function BeautyGrowthStack() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop Background */}
      <Image
        src="/industries/wellness-beauty/beauty-hero.webp"
        alt="Luxury beauty and wellness interior representing digital marketing services for salons and spas"
        title="Beauty and Wellness Digital Marketing Growth Stack"
        fill
        sizes="(min-width: 1024px) 100vw, 0px"
        className="hidden object-cover object-center lg:block"
      />

      {/* Mobile Background */}
      <Image
        src="/industries/wellness-beauty/beauty-hero2.webp"
        alt="Premium beauty and wellness setting for salon and spa marketing services"
        title="Digital Marketing Services for Beauty and Wellness Businesses"
        fill
        sizes="(max-width: 1023px) 100vw, 0px"
        className="object-cover object-center lg:hidden"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/20 sm:bg-white/20 lg:bg-white/20" />

      {/* Soft left fade for readability */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/75 to-white/15 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* Heading */}
        <div className="max-w-[900px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Digital Marketing for Beauty & Wellness
            </p>
          </div>

          <h2 className="max-w-[820px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Your Beauty & Wellness{" "}
            <span className="text-[#B79A72]">
              Growth Stack.
            </span>
          </h2>
        </div>

        {/* Service Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group min-h-[210px] rounded-[24px] border border-white/70 bg-white/72 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.06)] backdrop-blur-[16px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/30 hover:bg-white/82 hover:shadow-[0_22px_55px_rgba(11,42,82,0.09)] sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B79A72]/15 bg-[#F8F1E7]/90 text-[#B77A20]">
                <Icon size={23} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 max-w-[340px] text-[20px] font-medium leading-[1.18] tracking-[-0.025em] text-[#0B2A52] sm:text-[21px]">
                {title}
              </h3>

              <p className="mt-3 max-w-[330px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}