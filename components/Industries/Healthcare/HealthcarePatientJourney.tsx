
import {
  ArrowRight,
  CalendarCheck2,
  ClipboardList,
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Patients find your practice through Google, Maps or other appropriate channels.",
    icon: Search,
  },
  {
    number: "02",
    title: "Explore",
    description:
      "They review specialties, available services, doctor qualifications and clinic information.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Understand & Trust",
    description:
      "Clear, accurate information helps people evaluate whether your practice meets their needs.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Contact",
    description:
      "Accessible phone numbers, directions and appointment request options make communication easier.",
    icon: MessageCircle,
  },
  {
    number: "05",
    title: "Schedule",
    description:
      "Confirmations and reminders help patients and staff manage appointments.",
    icon: CalendarCheck2,
  },
];

export default function HealthcarePatientJourney() {
  return (
    <section
      id="healthcare-patient-journey"
      className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* Soft background */}
      <div className="pointer-events-none absolute -left-48 top-[20%] h-[380px] w-[380px] rounded-full bg-[#EEF6FC]/75 blur-[50px]" />
      <div className="pointer-events-none absolute -right-48 bottom-[-150px] h-[450px] w-[450px] rounded-full bg-[#EAF3FC]/60 blur-[60px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-[980px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              From Search to Appointment
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Make It Easier for Patients to Find Information{" "}
            <span className="text-[#B79A72]">
              and Take the Next Step.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
            Choosing a healthcare provider often involves more than one
            search. People may compare services, check doctor qualifications,
            review locations and look for reliable information before
            contacting a practice.
          </p>
        </div>

        {/* Desktop Horizontal Journey */}
        <div className="relative mt-14 hidden lg:block">
          {/* Connecting line behind stages */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[54px] h-px bg-[#C9DBEB]" />

          <div className="relative grid grid-cols-5 gap-5 xl:gap-7">
            {journeySteps.map(
              ({ number, title, description, icon: Icon }, index) => (
                <article key={number} className="relative text-center">
                  {/* Step Icon */}
                  <div className="relative z-10 mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full border border-[#C8DDEC] bg-white text-[#0B2A52] shadow-[0_10px_30px_rgba(11,42,82,0.055)]">
                    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#EEF5FB]">
                      <Icon size={31} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Connecting arrow */}
                  {index < journeySteps.length - 1 && (
                    <span className="absolute left-[calc(50%+73px)] top-[45px] z-20 flex h-[18px] w-[18px] items-center justify-center bg-white text-[#B79A72]">
                      <ArrowRight size={16} strokeWidth={1.8} />
                    </span>
                  )}

                  {/* Step Details */}
                  <p className="mt-6 text-[10px] font-medium tracking-[0.17em] text-[#B79A72]">
                    STEP {number}
                  </p>

                  <h3 className="mt-2 text-[20px] font-medium leading-[1.15] tracking-[-0.025em] xl:text-[22px]">
                    {title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[215px] text-[12px] leading-6 text-[#0B2A52]/65 xl:text-[13px]">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="relative mx-auto mt-11 max-w-[680px] lg:hidden">
          <div className="pointer-events-none absolute bottom-12 left-[27px] top-9 w-px bg-[#C9DBEB]" />

          <div className="space-y-6">
            {journeySteps.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="relative flex items-start gap-5"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#C8DDEC] bg-white text-[#0B2A52] shadow-[0_8px_25px_rgba(11,42,82,0.05)]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                {/* Step Text */}
                <div className="min-w-0 flex-1 border-b border-[#0B2A52]/[0.08] pb-6">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B79A72]">
                    Step {number}
                  </span>

                  <h3 className="mt-1 text-[20px] font-medium leading-[1.2] tracking-[-0.02em]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* How Sharp Rays Helps */}
        <div className="mx-auto mt-14 max-w-[1160px] overflow-hidden rounded-[23px] border border-[#0B2A52]/[0.08] bg-[#F8FBFD]">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            {/* Left */}
            <div className="flex flex-col justify-center bg-[#0B2A52] px-6 py-8 text-white sm:px-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#D7BD98]">
                <HeartHandshake size={22} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 text-[22px] font-medium leading-[1.2] tracking-[-0.02em]">
                How Sharp Rays Helps
              </h3>

              <p className="mt-2 text-[12px] leading-6 text-white/60">
                Clearer information. Easier patient communication.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-10">
              <p className="text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px]">
                We connect local SEO, specialty pages, useful healthcare
                content, website navigation, appointment requests and
                administrative communication to make this journey easier for
                patients and healthcare teams.
              </p>

              {/* Supporting service tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Local SEO",
                  "Specialty Pages",
                  "Healthcare Content",
                  "Website Navigation",
                  "Appointment Requests",
                  "Patient Communication",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0B2A52]/[0.08] bg-white px-3.5 py-2 text-[11px] font-medium text-[#0B2A52]/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
