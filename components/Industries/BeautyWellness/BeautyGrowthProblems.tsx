import {
  BarChart3,
  Camera,
  MapPin,
  UsersRound,
} from "lucide-react";

const problems = [
  {
    title: "Not Showing Up Locally",
    description:
      "Your business may not appear when people search for salons, spas or treatments near them.",
    icon: MapPin,
  },
  {
    title: "Getting Attention, Not Appointments",
    description:
      "Instagram views and engagement are useful only when they eventually lead to enquiries and bookings.",
    icon: Camera,
  },
  {
    title: "Ads Bring Leads, But Not the Right Ones",
    description:
      "Poor targeting, weak offers or generic landing pages can waste budget.",
    icon: BarChart3,
  },
  {
    title: "Customers Visit Once — Then Disappear",
    description:
      "Without proper follow-up, reminders and rebooking communication, repeat revenue gets missed.",
    icon: UsersRound,
  },
];

export default function BeautyGrowthProblems() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
     
      {/* Decorative gold curves */}
      <div className="pointer-events-none absolute -right-40 -top-44 h-[380px] w-[380px] rounded-full border border-[#B79A72]/40" />
      <div className="pointer-events-none absolute -left-40 bottom-[-160px] h-[340px] w-[340px] rounded-full border border-[#B79A72]/35" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
      

            <p className="text-[10px]  uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              What May Be Stopping Your Growth?
            </p>
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            If People Are Searching,
            <br className="hidden sm:block" /> Why Aren&apos;t They{" "}
            <span className="text-[#B79A72]">Booking You?</span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="mx-auto mt-12 grid max-w-[1120px] gap-4 md:grid-cols-2 lg:gap-5">
          {problems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[24px] border border-[#0B2A52]/[0.07] bg-white/90 p-5 shadow-[0_16px_45px_rgba(11,42,82,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/30 hover:shadow-[0_20px_55px_rgba(11,42,82,0.08)] sm:p-6 lg:p-7"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72] sm:h-14 sm:w-14">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-[#0B2A52] sm:text-[21px]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[430px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}