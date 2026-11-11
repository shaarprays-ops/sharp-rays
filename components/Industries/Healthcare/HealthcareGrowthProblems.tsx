
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Search,
  Stethoscope,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Your Clinic Isn't Showing Up in Local Searches",
    description:
      "Patients search for doctors, specialists, clinics and hospitals nearby. Incomplete Google Business Profiles, weak local SEO and inconsistent location details can make your practice harder to discover.",
    visual: "local",
  },
  {
    number: "02",
    title: "Your Medical Services Aren't Easy to Find Online",
    description:
      "Without useful doctor profiles, specialty pages and service information, your website may miss relevant searches or leave people unsure whether your practice offers the care they need.",
    visual: "services",
  },
  {
    number: "03",
    title: "Website Visitors Aren't Making Appointment Enquiries",
    description:
      "Complicated navigation, missing consultation details, unclear contact options or difficult appointment forms can discourage visitors from getting in touch.",
    visual: "appointment",
  },
  {
    number: "04",
    title: "Routine Enquiries Take Too Much Staff Time",
    description:
      "Repeated questions about consultation hours, clinic locations, availability and appointment scheduling can create unnecessary administrative work.",
    visual: "enquiries",
  },
] as const;

function ProblemVisual({
  type,
}: {
  type: (typeof problems)[number]["visual"];
}) {
  if (type === "local") {
    return (
      <div className="relative mx-auto flex h-[170px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute inset-5 rounded-full bg-[#E5F0FA]/55 blur-2xl" />

        <div className="relative w-[83%] max-w-[290px] overflow-hidden rounded-[16px] border border-[#D8E5F1] bg-white shadow-[0_14px_35px_rgba(11,42,82,0.09)]">
          <div className="flex items-center gap-2 border-b border-[#E9EFF5] px-3 py-2.5">
            <Search size={14} className="text-[#0B2A52]" />
            <span className="flex-1 text-[11px] text-[#0B2A52]/65">
              clinic near me
            </span>
          </div>

          <div className="grid grid-cols-[1fr_0.8fr] gap-2 p-3">
            <div className="space-y-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E8F1FA] text-[#0B2A52]">
                    <MapPin size={12} />
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-[#D4E0EB]" />
                    <div className="h-1.5 w-[65%] rounded-full bg-[#EBF0F5]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[8px] bg-[#EAF2F9]">
              <div className="absolute left-[34%] top-0 h-full w-[6px] rotate-12 bg-white/90" />
              <div className="absolute left-0 top-[45%] h-[7px] w-full -rotate-12 bg-white/90" />
              <MapPin
                size={20}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B79A72]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 right-[5%] flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-[#B79A72] shadow-[0_8px_22px_rgba(11,42,82,0.1)]">
          <AlertCircle size={20} />
        </div>
      </div>
    );
  }

  if (type === "services") {
    return (
      <div className="relative mx-auto flex h-[170px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute inset-5 rounded-full bg-[#E5F0FA]/55 blur-2xl" />

        <div className="relative w-[78%] max-w-[270px] overflow-hidden rounded-[16px] border border-[#D8E5F1] bg-white shadow-[0_14px_35px_rgba(11,42,82,0.09)]">
          <div className="flex items-center gap-1.5 border-b border-[#E9EFF5] px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9D9E7]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9D9E7]" />
            <span className="ml-auto text-[9px] text-[#0B2A52]/45">
              Medical Services
            </span>
          </div>

          <div className="flex gap-3 p-3">
            <div className="flex h-[76px] w-[72px] shrink-0 items-center justify-center rounded-[10px] bg-[#E9F2FA] text-[#0B2A52]">
              <Stethoscope size={27} strokeWidth={1.5} />
            </div>

            <div className="flex-1 space-y-2 pt-1">
              <div className="h-2 w-[90%] rounded-full bg-[#D3DFEB]" />
              <div className="h-2 w-[70%] rounded-full bg-[#E5EDF4]" />
              <div className="h-2 w-[85%] rounded-full bg-[#E5EDF4]" />
              <div className="h-5 w-[62%] rounded-md bg-[#E9F2FA]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 right-[6%] flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white text-[#B79A72] shadow-[0_8px_22px_rgba(11,42,82,0.1)]">
          <FileText size={21} />
        </div>
      </div>
    );
  }

  if (type === "appointment") {
    return (
      <div className="relative mx-auto flex h-[170px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute inset-5 rounded-full bg-[#E5F0FA]/55 blur-2xl" />

        <div className="relative w-[78%] max-w-[265px] rounded-[16px] border border-[#D8E5F1] bg-white p-4 shadow-[0_14px_35px_rgba(11,42,82,0.09)]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#0B2A52]">
              Appointment Request
            </span>
            <CalendarDays size={16} className="text-[#B79A72]" />
          </div>

          <div className="mt-4 space-y-2">
            <div className="h-7 rounded-[6px] border border-[#E2EAF2] bg-[#F8FBFD]" />
            <div className="h-7 rounded-[6px] border border-[#E2EAF2] bg-[#F8FBFD]" />
            <div className="h-7 rounded-[6px] border border-[#E2EAF2] bg-[#F8FBFD]" />
          </div>
        </div>

        <div className="absolute bottom-0 right-[7%] flex h-12 w-12 items-center justify-center rounded-full border border-white bg-[#0B2A52] text-white shadow-[0_8px_22px_rgba(11,42,82,0.14)]">
          <CalendarDays size={22} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B79A72] text-[12px]">
            ×
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex h-[170px] w-full max-w-[360px] items-center justify-center">
      <div className="absolute inset-5 rounded-full bg-[#E5F0FA]/55 blur-2xl" />

      <div className="relative w-[76%] max-w-[260px] space-y-2 rounded-[16px] border border-[#D8E5F1] bg-white p-4 shadow-[0_14px_35px_rgba(11,42,82,0.09)]">
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F1FA]">
            <MessageCircle size={13} className="text-[#0B2A52]" />
          </span>
          <div className="rounded-[9px] rounded-tl-none bg-[#EFF5FA] px-3 py-2 text-[10px] text-[#0B2A52]/80">
            Consultation hours?
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F1FA]">
            <MessageCircle size={13} className="text-[#0B2A52]" />
          </span>
          <div className="rounded-[9px] rounded-tl-none bg-[#EFF5FA] px-3 py-2 text-[10px] text-[#0B2A52]/80">
            Appointment available?
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 right-[7%] flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-[#B79A72] shadow-[0_8px_22px_rgba(11,42,82,0.1)]">
        <Clock3 size={23} />
      </div>
    </div>
  );
}

export default function HealthcareGrowthProblems() {
  return (
    <section
      id="healthcare-problems"
      className="relative isolate overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      <div className="pointer-events-none absolute -right-48 -top-52 h-[470px] w-[470px] rounded-full bg-[#E8F2FB]/70 blur-[50px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              What May Be Limiting Your Visibility
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Patients Are Searching for Care.{" "}
            <span className="text-[#B79A72]">
              Can They Find Your Practice?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
            Even with experienced doctors and quality facilities, your
            healthcare business may miss relevant enquiries when patients
            cannot find accurate information, understand your services or
            contact your team easily.
          </p>
        </div>

        {/* Illustrated Problems */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:gap-6">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group grid overflow-hidden rounded-[23px] border border-[#E1EAF3] bg-white shadow-[0_14px_40px_rgba(11,42,82,0.04)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(11,42,82,0.07)] sm:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex items-center justify-center bg-[#F2F7FC] px-4 py-5">
                <ProblemVisual type={problem.visual} />
              </div>

              <div className="flex flex-col justify-center px-6 py-7 sm:px-7">
                <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#B79A72]">
                  Challenge {problem.number}
                </span>

                <h3 className="mt-3 text-[20px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[21px]">
                  {problem.title}
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                  {problem.description}
                </p>

                <span className="mt-6 h-[2px] w-12 bg-[#B79A72]/65 transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
