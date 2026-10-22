
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  Search,
  UsersRound,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Discover",
    description: "Google, Maps, social media and admission campaigns",
    icon: Search,
  },
  {
    number: "02",
    title: "Compare",
    description: "Courses, fees, eligibility, faculty and facilities",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Enquire",
    description: "Forms, calls, WhatsApp and brochure requests",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Counsel",
    description: "Timely answers, guidance and follow-ups",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Apply",
    description: "Application guidance and admission steps",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Enrol",
    description: "Confirmed admission and onboarding communication",
    icon: GraduationCap,
  },
];

export default function EducationAdmissionJourney() {
  return (
    <section
      id="education-admission-journey"
      className="relative isolate w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute -right-44 -top-56 h-[520px] w-[520px] rounded-full bg-[#EAF3FC]/70" />
      <div className="pointer-events-none absolute -left-48 bottom-[-220px] h-[420px] w-[420px] rounded-full bg-[#EAF3FC]/55" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[950px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              The Student Admission Journey
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Getting a Student Enquiry Is{" "}
            <span className="text-[#B79A72]">
              Only the Beginning.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px]">
            Students and parents often compare multiple institutions before
            making an admission decision. We help make the journey from first
            discovery to application more connected, informative and easier to
            navigate.
          </p>
        </div>

        {/* Desktop: Connected Horizontal Journey */}
        <div className="relative mt-14 hidden lg:block">
          <div className="pointer-events-none absolute left-[8.33%] right-[8.33%] top-[51px] h-px bg-[#C8D9EA]" />

          <div className="relative grid grid-cols-6 gap-3 xl:gap-5">
            {journey.map(({ number, title, description, icon: Icon }, index) => (
              <article key={number} className="relative text-center">
                <div className="relative mx-auto flex h-[102px] w-[102px] items-center justify-center rounded-full border border-[#C7DDEF] bg-white text-[#0B2A52] shadow-[0_8px_28px_rgba(11,42,82,0.045)]">
                  <Icon size={30} strokeWidth={1.55} />
                </div>

                {index < journey.length - 1 && (
                  <span className="absolute left-[calc(50%+65px)] top-[43px] z-10 flex h-[17px] w-[17px] items-center justify-center bg-[#F8FBFD] text-[#B79A72]">
                    <ArrowRight size={16} strokeWidth={1.8} />
                  </span>
                )}

                

                <h3 className="mt-2 text-[21px] font-medium tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mx-auto mt-3 max-w-[190px] text-[12px] leading-6 text-[#0B2A52]/65 xl:text-[13px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Connected Vertical Journey */}
        <div className="relative mx-auto mt-10 max-w-[650px] lg:hidden">
          <div className="pointer-events-none absolute bottom-12 left-[27px] top-8 w-px bg-[#C8D9EA]" />

          <div className="space-y-7">
            {journey.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="relative flex items-start gap-5">
                <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#C7DDEF] bg-white text-[#0B2A52] shadow-[0_6px_20px_rgba(11,42,82,0.04)]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <div className="min-w-0 flex-1 border-b border-[#0B2A52]/[0.08] pb-6">
                  <span className="text-[10px] font-medium tracking-[0.16em] text-[#B79A72]">
                    {number}
                  </span>
                  <h3 className="mt-1 text-[21px] font-medium">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#0B2A52]/65">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sharp Rays Strategy Summary */}
        <div className="mx-auto mt-14 max-w-[1120px] overflow-hidden rounded-[24px] border border-[#0B2A52]/[0.08] bg-white shadow-[0_15px_45px_rgba(11,42,82,0.035)]">
          <div className="grid lg:grid-cols-[0.33fr_0.67fr]">
            <div className="flex flex-col justify-center bg-[#0B2A52] px-6 py-7 text-white sm:px-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#D7BD98]">
                <CheckCircle2 size={22} strokeWidth={1.6} />
              </div>

              <h3 className="mt-5 text-[22px] font-medium leading-[1.2]">
                How Sharp Rays Helps
              </h3>

              <p className="mt-2 text-[12px] leading-6 text-white/65">
                A connected approach to student acquisition.
              </p>
            </div>

            <div className="px-6 py-7 sm:px-8 lg:px-9">
              <p className="text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px]">
                We connect SEO, paid campaigns, course pages, enquiry forms,
                WhatsApp communication and follow-up workflows so your team can
                understand where interested students need more information or
                support.
              </p>

              <div className="mt-5 border-t border-[#0B2A52]/[0.08] pt-5">
                <p className="text-[14px] font-medium leading-7 sm:text-[15px]">
                  The goal is not simply more leads. It is{" "}
                  <span className="text-[#B79A72]">
                    more relevant enquiries
                  </span>{" "}
                  and a stronger journey towards applications and admissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
