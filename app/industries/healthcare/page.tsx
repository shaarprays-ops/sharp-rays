
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  CalendarCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileHeart,
  FileText,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Video,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),
  title: "Digital Marketing for Healthcare | Hospitals & Clinics | Sharp Rays",
  description:
    "Healthcare digital marketing for hospitals, doctors and clinics. Improve Google visibility, reach relevant patients and support appointments with Sharp Rays.",
  keywords: [
    "healthcare digital marketing",
    "digital marketing for hospitals",
    "digital marketing for clinics",
    "healthcare SEO",
    "hospital SEO",
    "doctor SEO",
    "medical practice marketing",
    "local SEO for doctors",
    "healthcare website development",
    "healthcare Google Ads",
  ],
  alternates: {
    canonical: "/industries/healthcare",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sharp Rays",
    url: "https://www.sharprays.com/industries/healthcare",
    title: "Digital Marketing for Healthcare | Hospitals & Clinics | Sharp Rays",
    description:
      "Build a stronger healthcare digital presence through search visibility, accurate service information and easier appointment enquiries.",
  },
};

const problems = [
  {
    number: "01",
    icon: MapPin,
    title: "Your Clinic Isn't Showing Up in Local Searches",
    description:
      "Patients search for doctors, hospitals and specialists nearby. Incomplete Google listings, inconsistent business details and weak local SEO can make your practice harder to discover.",
  },
  {
    number: "02",
    icon: Search,
    title: "Your Medical Services Aren't Easy to Find Online",
    description:
      "Without clear specialty, doctor and service pages, your website may miss relevant searches or leave visitors unsure whether you offer the care they need.",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Website Visitors Aren't Becoming Appointment Enquiries",
    description:
      "Confusing navigation, missing contact information or complicated booking steps can discourage people from reaching out to your healthcare team.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Your Team Spends Too Much Time Handling Routine Enquiries",
    description:
      "Repeated questions about consultation hours, locations, availability and appointment scheduling can create unnecessary administrative work.",
  },
];

const healthcareServices = [
  {
    number: "01",
    icon: Search,
    title: "Healthcare SEO & Local SEO",
    description:
      "Improve visibility for relevant specialties, healthcare services and location-based searches.",
    points: [
      "Specialty and medical service pages",
      "Doctor profile optimisation",
      "Google Business Profile optimisation",
      "Technical SEO and internal linking",
      "Location-specific pages",
      "Relevant structured data",
      "Medically reviewed educational content",
    ],
    footer:
      "Help people discover accurate information about the healthcare services available at your practice.",
  },
  {
    number: "02",
    icon: Target,
    title: "Google Ads & Healthcare Performance Marketing",
    description:
      "Reach people actively searching for eligible healthcare services through carefully planned, policy-compliant campaigns.",
    points: [
      "Relevant healthcare search terms",
      "Geographic targeting",
      "Eligible specialty and service campaigns",
      "Appointment-focused landing pages",
      "Privacy-conscious conversion tracking",
      "Budget and campaign performance optimisation",
    ],
    footer:
      "Focus on relevant appointment enquiries rather than unnecessary clicks or misleading claims.",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Healthcare Website Development",
    description:
      "Build professional, accessible websites that help patients understand your practice and find important information.",
    points: [
      "Doctor profiles and qualifications",
      "Specialties and services",
      "Hospital or clinic locations",
      "Consultation hours",
      "Contact information",
      "Appointment request options",
      "Mobile-friendly navigation",
      "Privacy and accessibility considerations",
    ],
  },
  {
    number: "04",
    icon: FileHeart,
    title: "Medical Content Marketing",
    description:
      "Create accurate, useful and professionally reviewed content that helps people understand available healthcare services.",
    points: [
      "Medical service explainers",
      "Healthcare awareness articles",
      "Patient preparation information",
      "Common medical questions",
      "Doctor and specialty information",
      "Facility and service updates",
    ],
    footer:
      "Medical content should be reviewed by appropriately qualified professionals before publication.",
  },
  {
    number: "05",
    icon: Video,
    title: "Healthcare Social Media & Educational Creative",
    description:
      "Maintain a professional online presence through useful information and responsible communication.",
    points: [
      "Healthcare awareness content",
      "Facility information",
      "Verified doctor qualifications",
      "Service updates",
      "Educational videos",
    ],
    footer:
      "Build familiarity without sensationalising medical conditions or making unsupported claims.",
  },
  {
    number: "06",
    icon: Bot,
    title: "Appointment & AI Automation",
    description:
      "Simplify routine administrative communication so your team can focus on patient service.",
    points: [
      "Appointment enquiry acknowledgements",
      "Scheduling requests",
      "Appointment confirmations",
      "Routine reminders",
      "Consultation-hour information",
      "Location and directions",
      "Administrative follow-ups",
    ],
    footer:
      "Automation needs appropriate consent, secure systems and privacy controls. Qualified staff should handle sensitive medical questions.",
  },
];

const patientJourney = [
  {
    number: "01",
    icon: Search,
    title: "Search",
    description:
      "Patients discover your healthcare business through Google, Maps or other appropriate channels.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Explore",
    description:
      "They review specialties, services, doctor qualifications, locations and availability.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Clear, factual information helps people assess whether your practice may meet their needs.",
  },
  {
    number: "04",
    icon: Phone,
    title: "Contact",
    description:
      "Visible phone numbers, directions and appointment request options make it easier to get in touch.",
  },
  {
    number: "05",
    icon: CalendarCheck,
    title: "Book",
    description:
      "Appointment confirmations and reminders support a smoother scheduling experience.",
  },
];

const providerTypes = [
  {
    icon: Hospital,
    title: "Hospitals",
    description:
      "Improve hospital service visibility, specialty information and location discovery.",
  },
  {
    icon: Stethoscope,
    title: "Private Clinics",
    description:
      "Support local search, practice websites and appointment enquiries.",
  },
  {
    icon: Users,
    title: "Doctors & Specialists",
    description:
      "Improve professional profiles, specialty visibility and patient information.",
  },
  {
    icon: Sparkles,
    title: "Dental Clinics",
    description:
      "Create clear dental service pages and convenient appointment paths.",
  },
  {
    icon: Activity,
    title: "Diagnostic Centres",
    description:
      "Improve access to test information, service details and locations.",
  },
  {
    icon: HeartHandshake,
    title: "Physiotherapy Centres",
    description:
      "Build local visibility and informative physiotherapy service pages.",
  },
  {
    icon: Search,
    title: "Eye Care Clinics",
    description:
      "Support relevant specialty searches and accessible clinic information.",
  },
  {
    icon: MapPin,
    title: "Multi-location Healthcare Groups",
    description:
      "Coordinate location pages, business details and healthcare search visibility.",
  },
];

const metrics = [
  {
    number: "01",
    title: "Organic Search Visibility",
    description:
      "How relevant specialty, service and location pages perform in Google Search.",
  },
  {
    number: "02",
    title: "Google Maps Interactions",
    description:
      "Calls, directions and available engagement signals from your business profile.",
  },
  {
    number: "03",
    title: "Appointment Enquiries",
    description:
      "How many appointment requests come through approved contact channels.",
  },
  {
    number: "04",
    title: "Cost per Relevant Enquiry",
    description:
      "How efficiently permitted paid campaigns generate relevant enquiries.",
  },
  {
    number: "05",
    title: "Website Contact Conversion",
    description:
      "How easily visitors find contact information and request appointments.",
  },
  {
    number: "06",
    title: "Appointment Completion Rate",
    description:
      "The proportion of confirmed appointments that take place, when authorised data is available.",
  },
  {
    number: "07",
    title: "Enquiry Response Time",
    description:
      "How efficiently routine administrative enquiries receive a response.",
  },
];

const growthStack = [
  {
    icon: Search,
    title: "SEO & Local Search",
    description:
      "Help patients discover relevant healthcare services, specialties and locations.",
    href: "/services/seo",
  },
  {
    icon: Target,
    title: "Google Ads & Performance Marketing",
    description:
      "Run eligible, search-intent-focused healthcare advertising campaigns.",
    href: "/services/performance-marketing",
  },
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Provide clear medical service information and accessible appointment request options.",
    href: "/services/website-development",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Publish useful, professionally reviewed healthcare information.",
    href: "/services/content-marketing",
  },
  {
    icon: MessageCircle,
    title: "Social Media Marketing",
    description:
      "Communicate factual healthcare awareness content and practice updates.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Video,
    title: "AI Video & Creative",
    description:
      "Create responsible healthcare educational visuals and communication assets.",
    href: "/services/ai-video-editing",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Support secure, consent-based appointment communication and routine enquiries.",
    href: "/services/ai-automation",
  },
];

const faqs = [
  {
    question: "How can hospitals and clinics improve their Google rankings?",
    answer:
      "Healthcare providers can improve search visibility through relevant medical service pages, accurate Google Business Profiles, useful doctor information, technical SEO, location optimisation and reliable, professionally reviewed content. Search rankings depend on many factors and cannot be guaranteed.",
  },
  {
    question: "What is healthcare SEO?",
    answer:
      "Healthcare SEO is the process of improving a hospital, clinic or medical practice's visibility in organic search. It includes optimising medical service pages, technical website performance, local business information, doctor profiles and relevant educational content so people can find accurate information about available healthcare services.",
  },
  {
    question: "How can doctors and clinics appear on Google Maps?",
    answer:
      "Doctors and clinics can improve their Google Maps presence by maintaining an eligible, verified Google Business Profile with accurate categories, contact information, consultation hours, service details and location information. A consistent online presence and relevant local website content also support discovery.",
  },
  {
    question: "Are Google Ads suitable for hospitals and clinics?",
    answer:
      "Google Ads may be suitable for eligible healthcare services, depending on applicable regulations, professional advertising rules and Google's healthcare advertising policies. Campaigns should use factual information and appropriate targeting while avoiding misleading claims and prohibited personalised advertising based on sensitive health information.",
  },
  {
    question: "How can a healthcare website generate more appointment enquiries?",
    answer:
      "A healthcare website can make appointment requests easier by providing accurate specialty information, doctor profiles, clinic hours, locations, contact details and straightforward booking options. Mobile usability, clear navigation and accessible content help visitors find the information they need.",
  },
  {
    question: "Is social media marketing effective for healthcare?",
    answer:
      "Social media can help healthcare organisations share verified educational content, facility information, service updates and public health awareness resources. All promotional content should follow applicable professional standards, respect patient privacy and avoid misleading treatment claims.",
  },
  {
    question: "Can WhatsApp automation help hospitals and clinics?",
    answer:
      "Yes. Consent-based WhatsApp automation can support routine appointment enquiries, confirmations, administrative reminders and location information. Healthcare providers should use appropriate privacy and security safeguards and avoid sharing sensitive clinical information through unsuitable systems.",
  },
  {
    question: "What digital marketing services are most useful for healthcare businesses?",
    answer:
      "The right combination depends on the healthcare provider's specialties, locations, target audience and objectives. Local SEO, healthcare website development, trustworthy medical content, permitted search advertising and efficient appointment communication are common priorities.",
  },
  {
    question: "How long does healthcare SEO take to show results?",
    answer:
      "Healthcare SEO timelines depend on your website's current condition, local competition, service offerings, existing search visibility and the work required. Some technical and local improvements may become visible earlier, while broader organic search growth generally requires ongoing optimisation and measurement.",
  },
];

const container =
  "mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20";

const heading =
  "text-[30px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]";

const spacing = "py-16 sm:py-20 lg:py-24";

function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-7 shrink-0 bg-[#B79A72]" />
      <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
        {children}
      </p>
      {center && (
        <span className="h-px w-7 shrink-0 bg-[#B79A72]" />
      )}
    </div>
  );
}

export default function HealthcarePage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">

      {/* SECTION 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-[#F7FAFC]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_35%,#E1ECF5_0%,transparent_55%)]" />

        <div className={`${container} relative`}>
          <div className="grid min-h-[570px] items-center gap-12 py-16 lg:min-h-[640px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:min-h-[680px]">
            <div className="max-w-[770px]">
              <Eyebrow>Digital Marketing for Healthcare</Eyebrow>

              <h1 className={heading}>
                Help More Patients{" "}
                <span className="text-[#B79A72]">
                  Find and Trust
                </span>{" "}
                Your Healthcare Business.
              </h1>

              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px]">
                We help hospitals, clinics, doctors and healthcare
                providers improve Google visibility, reach people
                searching for relevant medical services, and make
                appointment enquiries easier through healthcare SEO,
                local search, Google Ads, websites and patient
                communication solutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?service=healthcare-marketing#contact-form"
                  title="Get My Healthcare Growth Strategy"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#17416D]"
                >
                  Get My Healthcare Growth Strategy
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="#healthcare-services"
                  title="Explore Our Healthcare Marketing Services"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] border border-[#0B2A52]/15 bg-white px-6 text-[12px] font-medium transition hover:border-[#B79A72]"
                >
                  Explore How We Help
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Editorial healthcare visual */}
            <div className="relative mx-auto hidden w-full max-w-[470px] lg:block">
              <div className="absolute -inset-5 rounded-[35px] border border-[#0B2A52]/[0.06]" />

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/90 p-7 shadow-[0_25px_65px_rgba(11,42,82,0.07)]">
                <div className="flex items-center justify-between border-b border-[#0B2A52]/10 pb-5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#B79A72]">
                    Healthcare Digital Presence
                  </span>
                  <HeartPulse size={21} strokeWidth={1.5} />
                </div>

                <div className="py-9 text-center">
                  <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#EDF4FA]">
                    <Stethoscope
                      size={44}
                      strokeWidth={1.3}
                      className="text-[#0B2A52]"
                    />
                  </div>

                  <h2 className="mt-6 text-[25px] font-medium tracking-[-0.025em]">
                    Better Patient Access
                  </h2>

                  <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-6 text-[#0B2A52]/55">
                    Clear healthcare information, trustworthy
                    presentation and easier appointment enquiries.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-[#0B2A52]/10 pt-5">
                  {[
                    ["01", "Discover"],
                    ["02", "Understand"],
                    ["03", "Contact"],
                  ].map(([number, title]) => (
                    <div
                      key={title}
                      className="rounded-[12px] bg-[#F3F7FB] px-2 py-4 text-center"
                    >
                      <p className="text-[10px] text-[#B79A72]">
                        {number}
                      </p>
                      <p className="mt-1 text-[12px] font-medium">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROBLEMS */}
      <section className={`${spacing} bg-white`}>
        <div className={container}>
          <div className="mx-auto max-w-[920px] text-center">
            <Eyebrow center>
              What May Be Limiting Your Visibility
            </Eyebrow>

            <h2 className={heading}>
              Patients Are Searching for Care.{" "}
              <span className="text-[#B79A72]">
                Can They Find Your Practice?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Even with experienced doctors and quality facilities,
              your healthcare business may miss relevant enquiries
              if patients cannot find accurate information, understand
              your services or contact your team easily.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problems.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="group rounded-[22px] border border-[#0B2A52]/[0.07] bg-[#F8FBFD] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B79A72]/30 hover:bg-white hover:shadow-[0_15px_35px_rgba(11,42,82,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#0B2A52]">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <span className="text-[10px] tracking-[0.17em] text-[#B79A72]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-[19px] font-medium leading-[1.24] tracking-[-0.02em]">
                  {title}
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — HEALTHCARE SERVICES */}
      <section
        id="healthcare-services"
        className={`${spacing} bg-[#F8FBFD]`}
      >
        <div className={container}>
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-14">
            <div>
              <Eyebrow>Our Healthcare Marketing Services</Eyebrow>

              <h2 className={heading}>
                What We Can Build for Your{" "}
                <span className="text-[#B79A72]">
                  Hospital, Clinic or Practice.
                </span>
              </h2>
            </div>

            <p className="max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              We combine healthcare search visibility, accurate
              information, responsible advertising and efficient
              patient communication to create a stronger digital
              presence around your medical services.
            </p>
          </div>

          {/* Service Matrix */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {healthcareServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="flex flex-col rounded-[23px] border border-[#0B2A52]/[0.08] bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EDF4FA] text-[#0B2A52]">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>

                    <span className="text-[11px] tracking-[0.15em] text-[#B79A72]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[20px] font-medium leading-[1.2] tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    {service.description}
                  </p>

                  <div className="my-5 h-px bg-[#0B2A52]/[0.08]" />

                  <ul className="flex-1 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          strokeWidth={1.8}
                          className="mt-1 shrink-0 text-[#B79A72]"
                        />
                        <span className="text-[12px] leading-6 text-[#0B2A52]/75 sm:text-[13px]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {service.footer && (
                    <p className="mt-6 border-t border-[#0B2A52]/[0.08] pt-5 text-[12px] leading-6 text-[#0B2A52]/60">
                      {service.footer}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — SEARCH OPPORTUNITIES */}
      <section className={`${spacing} bg-white`}>
        <div className={container}>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="max-w-[690px]">
              <Eyebrow>How Patients Search Online</Eyebrow>

              <h2 className={heading}>
                Help Patients Find the Right Care{" "}
                <span className="text-[#B79A72]">
                  When They&apos;re Looking for It.
                </span>
              </h2>

              <p className="mt-6 text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
                Patients do not all search in the same way. Some look
                for a specialist, others search for nearby hospitals,
                diagnostic services or information about medical care.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
                We build healthcare SEO strategies around these
                different search needs.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Doctors", "Clinics", "Services", "Research"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0B2A52]/10 bg-[#F7FAFC] px-4 py-2 text-[11px] font-medium"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Search Intent Visual */}
            <div className="rounded-[25px] border border-[#0B2A52]/[0.08] bg-[#F6F9FC] p-5 sm:p-7">
              <div className="flex items-center gap-3 rounded-[15px] bg-white px-4 py-4 shadow-[0_6px_22px_rgba(11,42,82,0.035)]">
                <Search
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#B79A72]"
                />

                <span className="text-[13px] text-[#0B2A52]/50">
                  Find a doctor or medical service
                </span>
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-medium">
                  Doctor & Specialist Searches
                </h3>

                <span className="text-[9px] uppercase tracking-[0.15em] text-[#B79A72]">
                  Local Intent
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  "cardiologist near me",
                  "dermatologist in [city]",
                  "orthopaedic doctor in [location]",
                  "pediatrician near me",
                  "ENT specialist in [city]",
                ].map((term) => (
                  <div
                    key={term}
                    className="flex items-center gap-3 rounded-[13px] border border-[#0B2A52]/[0.06] bg-white px-4 py-3.5"
                  >
                    <Search
                      size={15}
                      className="shrink-0 text-[#B79A72]"
                    />

                    <span className="min-w-0 flex-1 text-[13px] text-[#0B2A52]/80">
                      {term}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[#0B2A52]/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-[#B79A72] pl-5">
            <p className="text-[14px] leading-7 text-[#0B2A52]/75">
              Doctor profiles, specialty pages and local search
              optimisation help people find appropriate provider
              information.
            </p>

            <p className="mt-2 text-[12px] leading-6 text-[#0B2A52]/50">
              These are illustrative search patterns, not verified
              search-volume data or guaranteed ranking opportunities.
              Actual keywords should be selected based on the
              provider&apos;s services, locations and competitive
              search results.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — PATIENT JOURNEY */}
      <section className={`${spacing} bg-[#F5F9FC]`}>
        <div className={container}>
          <div className="mx-auto max-w-[940px] text-center">
            <Eyebrow center>From Search to Appointment</Eyebrow>

            <h2 className={heading}>
              Make It Easier for Patients to Find Information{" "}
              <span className="text-[#B79A72]">
                and Take the Next Step.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Choosing a healthcare provider involves more than
              finding a website. People often need clear service
              information, professional qualifications, convenient
              locations and straightforward ways to contact the practice.
            </p>
          </div>

          {/* Five Stage Journey */}
          <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {patientJourney.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-[21px] border border-[#0B2A52]/[0.08] bg-white px-5 py-7 text-center"
                >
                  <span className="absolute left-4 top-4 text-[10px] tracking-[0.15em] text-[#B79A72]">
                    {step.number}
                  </span>

                  <div className="mx-auto flex h-15 w-15 items-center justify-center rounded-full bg-[#EDF4FA] text-[#0B2A52]">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-5 text-[20px] font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                    {step.description}
                  </p>

                  {index < patientJourney.length - 1 && (
                    <span className="absolute -right-[12px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#B79A72] lg:flex">
                      <ArrowRight size={15} />
                    </span>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#0B2A52]/10 bg-white px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                  A More Connected Patient Journey
                </p>

                <p className="mt-3 max-w-[930px] text-[13px] leading-7 text-[#0B2A52]/70 sm:text-[14px]">
                  Sharp Rays helps improve this journey through search
                  optimisation, helpful information, clear website
                  experiences and secure appointment communication.
                </p>
              </div>

              <span className="shrink-0 text-[11px] font-medium text-[#0B2A52]">
                Search → Explore → Trust → Contact → Book
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHO WE HELP */}
      <section className={`${spacing} bg-white`}>
        <div className={container}>
          <div className="mx-auto max-w-[940px] text-center">
            <Eyebrow center>Healthcare Businesses We Support</Eyebrow>

            <h2 className={heading}>
              Digital Marketing Built Around{" "}
              <span className="text-[#B79A72]">
                Different Healthcare Services.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[750px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Every healthcare business has different specialties,
              audiences and communication needs. We adapt our digital
              marketing approach to the services you provide and the
              communities you serve.
            </p>
          </div>

          {/* Open Editorial Grid */}
          <div className="mt-12 grid gap-x-7 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {providerTypes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group flex items-start gap-4 border-b border-[#0B2A52]/10 py-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#EDF4FA] text-[#0B2A52] transition-colors group-hover:bg-[#E2EDF7]">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="text-[17px] font-medium leading-[1.25] tracking-[-0.02em]">
                    {title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#0B2A52]/65 sm:text-[13px]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — PERFORMANCE METRICS */}
      <section className={`${spacing} bg-[#F8FBFD]`}>
        <div className={container}>
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>Measuring Healthcare Marketing</Eyebrow>

              <h2 className={heading}>
                We Focus on Visibility, Enquiries{" "}
                <span className="text-[#B79A72]">
                  and Appointment Access.
                </span>
              </h2>
            </div>

            <p className="max-w-[640px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Healthcare marketing should not be judged by reach or
              impressions alone. We look at meaningful signals that
              help providers understand whether people can discover
              their services and contact their teams.
            </p>
          </div>

          {/* Metrics Matrix */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric, index) => (
              <article
                key={metric.number}
                className={`rounded-[20px] border border-[#0B2A52]/[0.07] p-6 sm:p-7 ${
                  index === 6
                    ? "bg-[#0B2A52] text-white"
                    : "bg-white text-[#0B2A52]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] tracking-[0.15em] ${
                    index === 6 ? "text-[#D7BD98]" : "text-[#B79A72]"
                  }`}>
                    {metric.number}
                  </span>

                  <TrendingUp
                    size={18}
                    className={index === 6 ? "text-white/40" : "text-[#0B2A52]/35"}
                  />
                </div>

                <h3 className="mt-7 text-[19px] font-medium tracking-[-0.02em]">
                  {metric.title}
                </h3>

                <p className={`mt-3 text-[13px] leading-6 sm:text-[14px] ${
                  index === 6 ? "text-white/65" : "text-[#0B2A52]/65"
                }`}>
                  {metric.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-[#B79A72] pl-5">
            <p className="max-w-[1080px] text-[14px] leading-7 text-[#0B2A52]/75">
              We focus on actionable reporting without exposing sensitive
              patient information. Clinical details, diagnoses and treatment
              records should not be sent into ordinary advertising or
              marketing analytics platforms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08 — HEALTHCARE GROWTH STACK */}
      <section className={`${spacing} bg-white`}>
        <div className={container}>
          <div className="mx-auto max-w-[950px] text-center">
            <Eyebrow center>
              Your Healthcare Digital Marketing Mix
            </Eyebrow>

            <h2 className={heading}>
              The Services We Bring Together for{" "}
              <span className="text-[#B79A72]">
                Better Patient Access.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {growthStack.map(({ icon: Icon, title, description, href }, index) => (
              <Link
                key={title}
                href={href}
                title={`Explore Sharp Rays ${title} Services`}
                className={`group flex flex-col rounded-[21px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(11,42,82,0.06)] sm:p-7 ${
                  index === 6
                    ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                    : "border-[#0B2A52]/[0.08] bg-[#F8FBFD]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    index === 6
                      ? "bg-white/10 text-[#D7BD98]"
                      : "bg-white text-[#0B2A52]"
                  }`}>
                    <Icon size={22} strokeWidth={1.6} />
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      index === 6 ? "text-[#D7BD98]" : "text-[#B79A72]"
                    }`}
                  />
                </div>

                <h3 className="mt-6 text-[19px] font-medium">
                  {title}
                </h3>

                <p className={`mt-3 flex-1 text-[13px] leading-6 sm:text-[14px] ${
                  index === 6 ? "text-white/65" : "text-[#0B2A52]/65"
                }`}>
                  {description}
                </p>

                <span className={`mt-6 text-[11px] font-medium ${
                  index === 6 ? "text-[#D7BD98]" : "text-[#0B2A52]"
                }`}>
                  Explore Service{" "}
                  <ArrowRight size={12} className="inline" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-9 max-w-[800px] text-center text-[14px] leading-7 text-[#0B2A52]/65">
            Together, these services help healthcare businesses create
            a more informative, accessible and connected digital presence.
          </p>
        </div>
      </section>

      {/* SECTION 09 — FINAL CTA */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className={container}>
          <div className="relative overflow-hidden rounded-[26px] bg-[#0B2A52] px-6 py-11 text-white sm:px-9 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full border border-white/[0.08]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
              <div className="max-w-[790px]">
                <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#D7BD98] sm:text-[11px]">
                  Build a Stronger Healthcare Digital Presence
                </p>

                <h2 className={heading}>
                  Better Visibility. Clearer Information.{" "}
                  <span className="text-[#D7BD98]">
                    Easier Appointments.
                  </span>
                </h2>

                <p className="mt-5 max-w-[690px] text-[14px] leading-7 text-white/70 sm:text-[15px]">
                  Your healthcare business needs a digital presence
                  that helps people find reliable information,
                  understand your services and connect with the right team.
                </p>

                <p className="mt-3 max-w-[690px] text-[14px] leading-7 text-white/65 sm:text-[15px]">
                  We build healthcare marketing strategies around
                  your specialties, locations, audience needs and
                  operational goals.
                </p>
              </div>

              <div className="lg:flex lg:justify-end">
                <Link
                  href="/contact?service=healthcare-marketing#contact-form"
                  title="Build My Healthcare Growth Strategy"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition hover:bg-[#F0F5FA]"
                >
                  Build My Healthcare Growth Strategy

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQs */}
      <section className={`${spacing} bg-[#F8FBFD]`}>
        <div className={container}>
          <div className="mx-auto max-w-[900px] text-center">
            <Eyebrow center>
              Frequently Asked Questions
            </Eyebrow>

            <h2 className={heading}>
              Questions Healthcare Businesses{" "}
              <span className="text-[#B79A72]">
                Ask Us.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-[1050px] border-t border-[#0B2A52]/10">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={question}
                className="group border-b border-[#0B2A52]/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 marker:hidden [&::-webkit-details-marker]:hidden sm:py-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 hidden text-[10px] tracking-[0.15em] text-[#B79A72] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[16px] font-medium leading-6 sm:text-[18px]">
                      {question}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/10 bg-white">
                    <ChevronDown
                      size={17}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </span>
                </summary>

                <p className="max-w-[870px] pb-6 pr-8 text-[13px] leading-7 text-[#0B2A52]/65 sm:pl-9 sm:text-[14px]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
