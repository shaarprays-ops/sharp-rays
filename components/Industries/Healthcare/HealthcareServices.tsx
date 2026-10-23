
import {
  ArrowUpRight,
  Bot,
  CalendarCheck,
  FileHeart,
  Globe2,
  HeartPulse,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Healthcare SEO & Local Search",
    description:
      "Improve visibility for relevant medical specialties, services and locations through technical SEO, specialty pages, doctor profiles, Google Business Profile optimisation, structured data and locally relevant content.",
    icon: Search,
    visual: "seo",
  },
  {
    number: "02",
    title: "Google Ads & Healthcare Performance Marketing",
    description:
      "Reach people actively searching for eligible healthcare services through carefully planned search campaigns. We focus on relevant search intent, geographic targeting, clear landing pages and measurable enquiry actions while respecting healthcare advertising requirements.",
    icon: Megaphone,
    visual: "ads",
  },
  {
    number: "03",
    title: "Healthcare Website Development",
    description:
      "Build professional, mobile-friendly healthcare websites with clear specialty information, doctor profiles, consultation details, clinic locations, accessibility features and straightforward appointment request options.",
    icon: MonitorSmartphone,
    visual: "website",
  },
  {
    number: "04",
    title: "Medical Content Marketing",
    description:
      "Create useful, medically reviewed content that explains available services, answers common patient questions and helps visitors understand when a professional assessment may be appropriate.",
    icon: FileHeart,
    visual: "content",
  },
  {
    number: "05",
    title: "Healthcare Social Media & Educational Creative",
    description:
      "Develop factual healthcare awareness content, facility updates, service information and professionally approved educational visuals that help your organisation communicate clearly and consistently.",
    icon: Video,
    visual: "social",
  },
  {
    number: "06",
    title: "Appointment & AI Automation",
    description:
      "Improve administrative communication through consent-based appointment confirmations, reminders, routine enquiry responses and follow-up workflows that respect patient privacy.",
    icon: Bot,
    visual: "automation",
  },
] as const;

function ServiceVisual({ type }: { type: string }) {
  const common =
    "flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#D6E6F4] bg-white text-[#0B2A52] shadow-[0_8px_20px_rgba(11,42,82,0.06)]";

  if (type === "seo") {
    return (
      <div className="relative flex h-[145px] items-center justify-center">
        <div className="absolute h-[115px] w-[220px] rounded-full bg-[#DFEDF9]/65 blur-xl" />
        <div className="relative flex items-center gap-3">
          <div className={common}><MapPin size={23} /></div>
          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[20px] bg-[#0B2A52] text-white shadow-[0_12px_28px_rgba(11,42,82,0.13)]">
            <Search size={30} strokeWidth={1.5} />
          </div>
          <div className={common}><Globe2 size={23} /></div>
        </div>
      </div>
    );
  }

  if (type === "ads") {
    return (
      <div className="relative flex h-[145px] items-center justify-center">
        <div className="absolute h-[110px] w-[220px] rounded-full bg-[#DFEDF9]/65 blur-xl" />
        <div className="relative flex items-end gap-3">
          {[32, 50, 70, 91].map((height, index) => (
            <div
              key={index}
              style={{ height }}
              className="w-8 rounded-t-[7px] bg-gradient-to-t from-[#0B2A52] to-[#4779AB]"
            />
          ))}
          <ArrowUpRight size={31} className="absolute -right-7 -top-5 text-[#B79A72]" />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="relative flex h-[145px] items-center justify-center">
        <div className="w-[235px] overflow-hidden rounded-[14px] border border-[#D3E3F1] bg-white shadow-[0_12px_28px_rgba(11,42,82,0.07)]">
          <div className="flex items-center gap-1 border-b border-[#E5EEF6] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7E4F0]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7E4F0]" />
          </div>
          <div className="flex gap-3 p-3">
            <div className="flex h-[65px] w-[70px] items-center justify-center rounded-[9px] bg-[#E6F1FA]">
              <Stethoscope size={27} strokeWidth={1.5} />
            </div>
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-2 w-full rounded-full bg-[#D8E5F1]" />
              <div className="h-2 w-[75%] rounded-full bg-[#EAF1F7]" />
              <div className="h-5 w-[65%] rounded-md bg-[#0B2A52]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "content") {
    return (
      <div className="relative flex h-[145px] items-center justify-center">
        <div className="absolute -rotate-8 h-[102px] w-[90px] rounded-[13px] border border-[#D4E3F0] bg-white shadow-[0_10px_20px_rgba(11,42,82,0.05)]" />
        <div className="relative flex h-[110px] w-[100px] flex-col items-center justify-center rounded-[13px] border border-[#D4E3F0] bg-white shadow-[0_12px_25px_rgba(11,42,82,0.08)]">
          <FileHeart size={33} strokeWidth={1.5} className="text-[#0B2A52]" />
          <span className="mt-3 h-1.5 w-12 rounded-full bg-[#D6E5F1]" />
          <span className="mt-2 h-1.5 w-16 rounded-full bg-[#E8F0F6]" />
        </div>
        <ShieldCheck size={24} className="absolute bottom-3 right-[30%] text-[#B79A72]" />
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="relative flex h-[145px] items-center justify-center">
        <div className="absolute h-[110px] w-[220px] rounded-full bg-[#DFEDF9]/65 blur-xl" />
        <div className="relative flex h-[115px] w-[95px] flex-col items-center justify-center rounded-[17px] border-[5px] border-[#0B2A52] bg-white shadow-[0_10px_25px_rgba(11,42,82,0.08)]">
          <HeartPulse size={30} strokeWidth={1.5} />
          <div className="mt-3 h-1.5 w-12 rounded-full bg-[#D4E3F0]" />
          <div className="mt-2 h-1.5 w-9 rounded-full bg-[#E8F0F6]" />
        </div>
        <div className="absolute right-[25%] top-[26px] flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EDE2] text-[#B79A72]">
          <Video size={20} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[145px] items-center justify-center">
      <div className="absolute h-[110px] w-[220px] rounded-full bg-[#DFEDF9]/65 blur-xl" />
      <div className="relative flex items-center gap-3">
        <div className={common}><CalendarCheck size={22} /></div>
        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[20px] bg-[#0B2A52] text-white shadow-[0_12px_28px_rgba(11,42,82,0.13)]">
          <Bot size={30} strokeWidth={1.5} />
        </div>
        <div className={common}><ShieldCheck size={22} /></div>
      </div>
    </div>
  );
}

export default function HealthcareServices() {
  return (
    <section
      id="healthcare-how-we-help"
      className="relative isolate overflow-hidden bg-white text-[#0B2A52]"
    >
      <div className="pointer-events-none absolute -right-40 -top-44 h-[430px] w-[430px] rounded-full bg-[#EAF3FC]/65 blur-[50px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Heading */}
        <div className="mx-auto max-w-[950px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Our Healthcare Marketing Services
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            What We Can Build for Your{" "}
            <span className="text-[#B79A72]">
              Hospital, Clinic or Practice.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px]">
            From search visibility to patient communication, we bring together
            digital marketing services designed around your specialties,
            locations and operational needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ number, title, description, visual }) => (
            <article
              key={number}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E0EAF3] bg-white shadow-[0_14px_40px_rgba(11,42,82,0.04)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(11,42,82,0.07)]"
            >
              <div className="relative border-b border-[#E7EEF6] bg-gradient-to-br from-[#F7FAFD] to-[#EAF3FC] px-5 py-4">
                <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.15em] text-[#B79A72]">
                  {number}
                </span>
                <ServiceVisual type={visual} />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
                <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[21px]">
                  {title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                  {description}
                </p>

                <span className="mt-auto pt-7">
                  <span className="block h-[2px] w-12 bg-[#B79A72]/70 transition-all duration-300 group-hover:w-20" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
