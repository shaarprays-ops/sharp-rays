import {
  ArrowRight,
  CalendarDays,
  ImageIcon,
  List,
  MapPin,
  Megaphone,
  MessageCircleMore,
  Phone,
  RefreshCw,
  Search,
  Star,
} from "lucide-react";

const journeySteps = [
  {
    title: "Google / Maps / Instagram / Ads",
    icon: Search,
    extraIcons: [MapPin, Megaphone],
  },
  {
    title: "Checks Your Work",
    icon: ImageIcon,
  },
  {
    title: "Reads Reviews",
    icon: Star,
  },
  {
    title: "Looks at Services",
    icon: List,
  },
  {
    title: "Calls / WhatsApps / Books",
    icon: Phone,
    extraIcons: [MessageCircleMore, CalendarDays],
  },
  {
    title: "Visits",
    icon: MapPin,
  },
  {
    title: "Returns Again",
    icon: RefreshCw,
  },
];

export default function BeautyCustomerJourney() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Soft Background */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-[#DDEBF4]/50 blur-[40px]" />
      <div className="pointer-events-none absolute -right-28 top-10 h-[360px] w-[360px] rounded-full bg-[#E8F1F7]/55 blur-[40px]" />
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[240px] w-[620px] -translate-x-1/2 rounded-full bg-white/70 blur-[55px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              How Customers Actually Choose
            </p>

            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Your Customer Journey Is Bigger Than One Instagram Post or One
            Google Search.
          </h2>
        </div>

        {/* Full Journey Frame */}
        <div className="mt-12 rounded-[30px] border border-white/60 bg-white/30 p-4 shadow-[0_24px_70px_rgba(11,42,82,0.07)] backdrop-blur-[18px] sm:p-5 lg:p-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  <article className="group flex h-full min-h-[190px] flex-col items-center justify-center rounded-[22px] border border-white/70 bg-white/38 px-3 py-5 text-center shadow-[0_10px_30px_rgba(11,42,82,0.05)] backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/30 hover:bg-white/55">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/45 text-[#8E672F] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    {step.extraIcons && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-[#B79A72]">
                        {step.extraIcons.map((ExtraIcon, iconIndex) => (
                          <ExtraIcon key={iconIndex} size={14} strokeWidth={1.7} />
                        ))}
                      </div>
                    )}

                    <h3 className="mt-4 max-w-[145px] text-[14px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0B2A52] xl:text-[15px]">
                      {step.title}
                    </h3>
                  </article>

                  {index < journeySteps.length - 1 && (
                    <div className="pointer-events-none absolute -right-[9px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#B79A72]/20 bg-white/70 text-[#B79A72] backdrop-blur-md lg:flex">
                      <ArrowRight size={11} strokeWidth={1.8} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-[20px] border border-white/60 bg-white/28 px-5 py-4 text-center backdrop-blur-[14px] sm:flex-row sm:text-left">
            <p className="max-w-[760px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
              We help improve the complete journey — from discovery and trust
              to booking, experience and repeat business.
            </p>

            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B79A72]">
              Discover → Trust → Book → Return
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}