
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  GraduationCap,
  Landmark,
  Laptop,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  MousePointerClick,
  School,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),
  title: "Digital Marketing for Education Institutes | Sharp Rays",
  description:
    "Grow student admission enquiries with education SEO, Google Ads, social media, landing pages and lead automation for schools, colleges and coaching institutes.",
  keywords: [
    "digital marketing for education",
    "education digital marketing agency",
    "education SEO",
    "student admission lead generation",
    "digital marketing for schools",
    "college digital marketing",
    "university marketing",
    "coaching institute marketing",
    "education Google Ads",
    "EdTech marketing",
  ],
  alternates: { canonical: "/industries/education" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sharp Rays",
    url: "https://www.sharprays.com/industries/education",
    title: "Digital Marketing for Education Institutes | Sharp Rays",
    description:
      "Education marketing strategies built around qualified student enquiries, course visibility, counselling and admissions.",
  },
};

const problems = [
  {
    number: "01",
    icon: Search,
    title: "Your Courses Aren't Ranking on Google",
    description:
      "Students search for courses, colleges, coaching centres, fees and admission opportunities, but your website may not appear for relevant searches.",
  },
  {
    number: "02",
    icon: Target,
    title: "Getting Enquiries, But Not the Right Students",
    description:
      "Broad advertising, unclear course information and poorly targeted campaigns can attract enquiries from students who are not eligible, interested or ready to apply.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Admissions Depend Too Much on Peak Season",
    description:
      "Without early search visibility and well-planned admission campaigns, enquiry flow can become inconsistent between admission cycles.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Interested Students Don't Complete Admissions",
    description:
      "Slow counselling responses, missed follow-ups and complicated application steps can turn genuine student interest into lost opportunities.",
  },
];

const services = [
  {
    icon: Search,
    title: "Education SEO & Local Search",
    description:
      "Help your institution, programmes and admission pages become more visible for relevant Google searches.",
    detail:
      "We work on course-specific SEO, local search, technical SEO, internal linking, structured data, Google Business Profile optimisation and educational content.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & Admission Campaigns",
    description:
      "Reach prospective students and parents actively searching for schools, programmes, coaching classes and admission opportunities.",
    detail:
      "We plan campaigns around course intent, eligibility, locations and admission timelines, with landing pages designed to encourage relevant enquiries.",
  },
  {
    icon: Users,
    title: "Social Media Marketing & Meta Ads",
    description:
      "Build awareness and trust by showcasing campus life, faculty expertise, learning experiences, student achievements, events and facilities.",
    detail:
      "We create content and targeted campaigns that help prospective students and parents discover and evaluate your institution.",
  },
  {
    icon: Monitor,
    title: "Admission Landing Pages & Websites",
    description:
      "Create focused pages for courses, programmes, admission campaigns and institutional information.",
    detail:
      "We organise eligibility, curriculum, duration, fees, important dates and application steps with clear enquiry and application actions.",
  },
  {
    icon: Bot,
    title: "WhatsApp & AI Lead Automation",
    description:
      "Help admission teams respond faster and manage prospective student enquiries more efficiently.",
    detail:
      "Workflows can support automatic acknowledgements, approved course information, counsellor assignments, follow-up reminders and application updates.",
  },
  {
    icon: Video,
    title: "Content Marketing & AI Video Creative",
    description:
      "Create course guides, career-related articles, admission explainers, faculty stories and engaging promotional videos.",
    detail:
      "Help students understand your offerings, explore learning opportunities and make more informed decisions.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    text: "Google, Maps, social media and admission campaigns",
    icon: Search,
  },
  {
    number: "02",
    title: "Compare",
    text: "Courses, fees, eligibility, faculty and facilities",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Enquire",
    text: "Forms, calls, WhatsApp and brochure requests",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Counsel",
    text: "Timely answers, guidance and follow-ups",
    icon: Users,
  },
  {
    number: "05",
    title: "Apply",
    text: "Application guidance and admission steps",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Enrol",
    text: "Confirmed admission and onboarding communication",
    icon: GraduationCap,
  },
];

const institutions = [
  {
    icon: School,
    title: "Schools",
    description:
      "Reach parents researching admissions, curriculum, facilities, fees and nearby schools.",
  },
  {
    icon: Landmark,
    title: "Colleges & Universities",
    description:
      "Promote degree programmes, courses and admission opportunities to relevant prospective students.",
  },
  {
    icon: BookOpen,
    title: "Coaching Institutes",
    description:
      "Generate enquiries for competitive exam preparation, tuition programmes and upcoming batches.",
  },
  {
    icon: Laptop,
    title: "EdTech & Online Learning",
    description:
      "Reach interested learners for online courses, certifications, demos and digital training programmes.",
  },
  {
    icon: ClipboardList,
    title: "Skill Training Centres",
    description:
      "Connect with people exploring practical skills, professional certifications and career-focused training.",
  },
  {
    icon: Sparkles,
    title: "Preschools & Early Learning Centres",
    description:
      "Build visibility and trust with local parents looking for early education and preschool admission options.",
  },
];

const metrics = [
  {
    number: "01",
    title: "Qualified Student Enquiries",
    description:
      "How many enquiries match programme interest, eligibility and admission criteria.",
  },
  {
    number: "02",
    title: "Cost per Qualified Lead",
    description:
      "How efficiently campaigns generate relevant prospective student enquiries.",
  },
  {
    number: "03",
    title: "Enquiry-to-Application Rate",
    description:
      "The proportion of enquiries that progress to an application.",
  },
  {
    number: "04",
    title: "Cost per Application",
    description:
      "The marketing cost associated with generating completed applications.",
  },
  {
    number: "05",
    title: "Enquiry-to-Enrolment Rate",
    description:
      "How effectively student enquiries progress to confirmed enrolments.",
  },
  {
    number: "06",
    title: "Organic Search Visibility",
    description:
      "How relevant course, institution and admission pages perform in search.",
  },
];

const growthStack = [
  {
    icon: Search,
    title: "SEO & Local Search",
    description:
      "Improve Google visibility for institutions, courses, programmes and admission-related searches.",
    href: "/services/seo",
  },
  {
    icon: Target,
    title: "Google Ads & Performance Marketing",
    description:
      "Reach students and parents actively researching courses and admissions.",
    href: "/services/performance-marketing",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description:
      "Build visibility and trust through educational content, campus stories and student experiences.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Create useful course pages and smoother admission enquiry experiences.",
    href: "/services/website-development",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Help prospective students understand courses, eligibility, career pathways and admission decisions.",
    href: "/services/content-marketing",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Improve enquiry acknowledgement, information delivery and admission follow-ups.",
    href: "/services/ai-automation",
  },
  {
    icon: Video,
    title: "AI Video & Creative",
    description:
      "Create promotional visuals and campaign assets that communicate your educational offerings.",
    href: "/services/ai-video-editing",
  },
];

const faqs = [
  {
    question: "How can educational institutes generate more student admission leads?",
    answer:
      "Educational institutes can attract relevant student enquiries through course-specific SEO, targeted Google and Meta advertising, useful admission information, local search visibility and clear enquiry options. Campaigns should focus on matching programme eligibility, locations and student interests rather than generating the highest possible number of leads.",
  },
  {
    question: "How can a college or university rank higher on Google?",
    answer:
      "Colleges and universities can improve search visibility by optimising course and programme pages, publishing accurate admission information, improving technical SEO, creating relevant internal links and developing useful content around fees, eligibility and career opportunities. Local SEO can also support location-based searches.",
  },
  {
    question: "Are Google Ads effective for student admission lead generation?",
    answer:
      "Google Ads can help institutions reach prospective students and parents who are actively searching for courses, colleges, coaching classes and admissions. Effective campaigns require relevant keywords, accurate targeting, useful landing pages and proper conversion tracking. Success should be measured through qualified enquiries and applications rather than clicks alone.",
  },
  {
    question: "How can coaching institutes get more students?",
    answer:
      "Coaching institutes can generate enquiries through exam-specific SEO, local search optimisation, targeted advertising, faculty-led content and dedicated pages for batches and courses. Demo classes, clear information about fees and schedules, and timely enquiry follow-ups can help interested students make decisions.",
  },
  {
    question: "Is SEO or paid advertising better for educational institutions?",
    answer:
      "Both support different goals. SEO helps institutions build long-term visibility for courses, admissions and informational searches. Paid advertising can reach prospective students during important admission periods. The right combination depends on the institution's budget, programme demand, competition and admission timelines.",
  },
  {
    question: "How can WhatsApp automation improve student admission enquiries?",
    answer:
      "WhatsApp automation can help institutions acknowledge enquiries, share approved programme information, organise counselling follow-ups, send application reminders and respond to common questions. It can support the admissions team while allowing counsellors to handle questions that require personalised guidance.",
  },
  {
    question: "What should an educational institute's admission landing page include?",
    answer:
      "An effective admission landing page should clearly explain the programme, eligibility requirements, curriculum, duration, fees or fee guidance, admission process and important dates. It should also provide relevant trust information and straightforward options to enquire, request counselling or apply.",
  },
  {
    question: "How much does digital marketing for educational institutes cost?",
    answer:
      "Education digital marketing costs depend on the institution type, number of programmes, target locations, competition, services required and advertising budget. A suitable strategy should account for both acquiring relevant enquiries and the institution's ability to manage counselling and applications.",
  },
];

function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-7 shrink-0 bg-[#B79A72]" />
      <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
        {children}
      </p>
      {center && <span className="h-px w-7 shrink-0 bg-[#B79A72]" />}
    </div>
  );
}

const headingStyle =
  "text-[30px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]";

const containerStyle =
  "mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20";

const sectionSpacing = "py-16 sm:py-20 lg:py-24";

export default function EducationPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">

      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-[#F6F9FC]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_35%,#D9E8F6_0%,transparent_48%)]" />
        <div className="pointer-events-none absolute -right-32 -top-28 h-[600px] w-[600px] rounded-full border border-[#0B2A52]/[0.06]" />

        <div className={`${containerStyle} relative`}>
          <div className="grid min-h-[590px] items-center gap-12 py-20 lg:min-h-[640px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:min-h-[680px]">
            <div className="max-w-[790px]">
              <Eyebrow>Digital Marketing for Education</Eyebrow>

              <h1 className={headingStyle}>
                Turn Student Searches Into{" "}
                <span className="text-[#B79A72]">
                  Qualified Enquiries and Admissions.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px]">
                We help schools, colleges, universities, coaching institutes
                and education brands attract prospective students through SEO,
                Google Ads, social media marketing, admission-focused websites
                and automated enquiry follow-ups.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact?industry=education#contact-form"
                  title="Get My Education Growth Plan"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#163E6B]"
                >
                  Get My Education Growth Plan
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="#education-services"
                  title="Explore How Sharp Rays Helps Education Institutions"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] border border-[#0B2A52]/15 bg-white/70 px-6 text-[12px] font-medium transition hover:bg-white"
                >
                  Explore How We Help
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto hidden w-full max-w-[490px] lg:block">
              <div className="absolute -inset-5 rounded-[35px] border border-[#B79A72]/15" />
              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/85 p-7 shadow-[0_24px_70px_rgba(11,42,82,0.08)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-[#0B2A52]/10 pb-5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.17em] text-[#B79A72]">
                    Student Acquisition
                  </span>
                  <GraduationCap size={23} strokeWidth={1.5} />
                </div>

                <div className="py-9 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F1FB] text-[#0B2A52]">
                    <GraduationCap size={37} strokeWidth={1.4} />
                  </div>
                  <h2 className="mt-5 text-[26px] font-medium tracking-[-0.025em]">
                    From Search to Admission
                  </h2>
                  <p className="mx-auto mt-3 max-w-[310px] text-[13px] leading-6 text-[#0B2A52]/55">
                    A more connected experience for prospective students and
                    your admission team.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-[#0B2A52]/10 pt-5">
                  {["Discover", "Enquire", "Enrol"].map((item, i) => (
                    <div key={item} className="rounded-[13px] bg-[#F2F7FC] px-2 py-4 text-center">
                      <span className="text-[10px] text-[#B79A72]">
                        0{i + 1}
                      </span>
                      <p className="mt-1 text-[12px] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — PROBLEMS */}
      <section className={`${sectionSpacing} bg-white`}>
        <div className={containerStyle}>
          <div className="mx-auto max-w-[890px] text-center">
            <Eyebrow center>What May Be Holding Back Admissions</Eyebrow>
            <h2 className={headingStyle}>
              Students Are Searching.{" "}
              <span className="text-[#B79A72]">
                Why Aren&apos;t More of Them Enquiring?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[750px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Having good courses, experienced faculty and modern facilities
              is important. But if prospective students and parents cannot
              discover your institution, find the information they need or
              receive timely responses, they may consider other options.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problems.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="group rounded-[22px] border border-[#0B2A52]/[0.08] bg-[#F8FBFE] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B79A72]/35 hover:bg-white hover:shadow-[0_18px_40px_rgba(11,42,82,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-white text-[#0B2A52]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] tracking-[0.16em] text-[#B79A72]">
                    {number}
                  </span>
                </div>
                <h3 className="mt-8 text-[19px] font-medium leading-[1.25] tracking-[-0.025em]">
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

      {/* 03 — SERVICES */}
      <section id="education-services" className={`${sectionSpacing} bg-[#F8FBFD]`}>
        <div className={containerStyle}>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>What We Can Build for Your Institution</Eyebrow>
              <h2 className={headingStyle}>
                From Better Search Rankings to{" "}
                <span className="text-[#B79A72]">
                  Better Admission Enquiries.
                </span>
              </h2>
            </div>
            <p className="max-w-[570px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:pb-2">
              We bring together digital marketing services around your
              programmes, admission goals, target locations and student
              audience to help you attract relevant enquiries and support
              the admission journey.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description, detail }, index) => (
              <article
                key={title}
                className={`rounded-[22px] border border-[#0B2A52]/[0.08] p-6 sm:p-7 ${
                  index === 0
                    ? "bg-[#0B2A52] text-white"
                    : "bg-white text-[#0B2A52]"
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${
                  index === 0
                    ? "bg-white/10 text-[#D7BD98]"
                    : "bg-[#EAF2FA] text-[#0B2A52]"
                }`}>
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 text-[20px] font-medium leading-[1.2] tracking-[-0.025em]">
                  {title}
                </h3>
                <p className={`mt-4 text-[13px] leading-6 sm:text-[14px] ${
                  index === 0 ? "text-white/75" : "text-[#0B2A52]/70"
                }`}>
                  {description}
                </p>
                <div className={`my-5 h-px ${
                  index === 0 ? "bg-white/15" : "bg-[#0B2A52]/10"
                }`} />
                <p className={`text-[13px] leading-6 ${
                  index === 0 ? "text-white/60" : "text-[#0B2A52]/60"
                }`}>
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SEARCH OPPORTUNITIES */}
      <section className={`${sectionSpacing} bg-white`}>
        <div className={containerStyle}>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow>Where Students Are Searching</Eyebrow>
              <h2 className={headingStyle}>
                Your Next Student May Already Be{" "}
                <span className="text-[#B79A72]">
                  Searching for a Course You Offer.
                </span>
              </h2>
              <p className="mt-6 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
                Students and parents search for programmes, institutions,
                fees, eligibility, locations, admissions and career
                opportunities. We help education businesses create relevant
                pages and campaigns around those searches.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Schools", "Colleges", "Coaching", "EdTech"].map((item) => (
                  <span key={item} className="rounded-full border border-[#0B2A52]/10 px-4 py-2 text-[11px] font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#0B2A52]/10 bg-[#F7FAFD] p-5 sm:p-7">
              <div className="flex items-center gap-3 rounded-[15px] border border-[#0B2A52]/10 bg-white px-4 py-4">
                <Search size={19} className="text-[#B79A72]" />
                <span className="text-[13px] text-[#0B2A52]/50">
                  What are students searching for?
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-medium">
                  College & Course Searches
                </h3>
                <span className="text-[10px] uppercase tracking-[0.13em] text-[#B79A72]">
                  Search intent
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  "BBA colleges in [city]",
                  "MBA admission 2027",
                  "BCA course fees",
                  "best colleges for BTech in [city]",
                  "[course] eligibility and admission",
                ].map((term) => (
                  <div key={term} className="flex items-center gap-3 rounded-[13px] border border-[#0B2A52]/[0.06] bg-white px-4 py-3.5">
                    <Search size={15} className="shrink-0 text-[#B79A72]" />
                    <span className="text-[13px] text-[#0B2A52]/80">{term}</span>
                    <ArrowUpRight size={14} className="ml-auto shrink-0 text-[#0B2A52]/30" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 border-l-2 border-[#B79A72] pl-5">
            <p className="text-[14px] leading-7 text-[#0B2A52]/75">
              Course-specific SEO, programme pages and admission landing pages
              can bring better-matched prospective students to your website.
            </p>
            <p className="mt-2 text-[12px] leading-6 text-[#0B2A52]/45">
              These are illustrative search patterns, not verified keyword
              volumes or ranking opportunities. Actual targeting depends on
              the institution, programme, location and search competition.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — STUDENT JOURNEY */}
      <section className={`${sectionSpacing} bg-[#F5F9FD]`}>
        <div className={containerStyle}>
          <div className="mx-auto max-w-[920px] text-center">
            <Eyebrow center>The Student Admission Journey</Eyebrow>
            <h2 className={headingStyle}>
              Getting a Student Enquiry Is{" "}
              <span className="text-[#B79A72]">
                Only the Beginning.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[750px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Students and parents often compare multiple institutions before
              making an admission decision. We help make the journey from
              first discovery to application more connected, informative and
              easier to navigate.
            </p>
          </div>

          <div className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {journey.map(({ number, title, text, icon: Icon }, index) => (
              <article
                key={number}
                className="relative rounded-[20px] border border-[#0B2A52]/[0.08] bg-white px-5 py-7 text-center"
              >
                <span className="absolute left-4 top-4 text-[10px] tracking-[0.15em] text-[#B79A72]">
                  {number}
                </span>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF2FA] text-[#0B2A52]">
                  <Icon size={23} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-[19px] font-medium">{title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-[#0B2A52]/60">
                  {text}
                </p>
                {index < journey.length - 1 && (
                  <ArrowRight
                    size={15}
                    className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 text-[#B79A72] xl:block"
                  />
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] bg-[#0B2A52] px-6 py-7 text-white sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[900px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#D7BD98]">
                How Sharp Rays Helps
              </p>
              <p className="mt-3 text-[13px] leading-7 text-white/75 sm:text-[14px]">
                We connect SEO, paid campaigns, course pages, enquiry forms,
                WhatsApp communication and follow-up workflows so your team
                can understand where interested students need more information
                or support.
              </p>
            </div>
            <p className="mt-5 max-w-[285px] shrink-0 border-l-2 border-[#D7BD98] pl-4 text-[14px] font-medium leading-6 lg:mt-0">
              More relevant enquiries. A stronger path to admissions.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — WHO WE HELP */}
      <section className={`${sectionSpacing} bg-white`}>
        <div className={containerStyle}>
          <div className="mx-auto max-w-[930px] text-center">
            <Eyebrow center>Education Businesses We Support</Eyebrow>
            <h2 className={headingStyle}>
              Different Institutions.{" "}
              <span className="text-[#B79A72]">Different Admission Goals.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[740px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              From local schools to online learning platforms, education
              marketing should reflect who you want to reach, what you offer
              and how prospective students make decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-x-7 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {institutions.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group flex gap-4 border-b border-[#0B2A52]/10 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#F0F5FA] text-[#0B2A52] transition-colors group-hover:bg-[#E3EDF8]">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-[19px] font-medium tracking-[-0.02em]">{title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — METRICS */}
      <section className={`${sectionSpacing} bg-[#F8FBFD]`}>
        <div className={containerStyle}>
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
            <div>
              <Eyebrow>What Actually Matters</Eyebrow>
              <h2 className={headingStyle}>
                We Look Beyond Leads to{" "}
                <span className="text-[#B79A72]">
                  Understand Admission Growth.
                </span>
              </h2>
            </div>
            <p className="max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Generating hundreds of enquiries means little if they do not
              match admission requirements or progress towards applications.
              We focus on metrics that help institutions understand lead
              quality and admission performance.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[24px] border border-[#0B2A52]/10 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ number, title, description }) => (
              <article key={number} className="border-b border-r border-[#0B2A52]/[0.07] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.15em] text-[#B79A72]">
                    {number}
                  </span>
                  <TrendingUp size={18} className="text-[#0B2A52]/40" />
                </div>
                <h3 className="mt-7 text-[19px] font-medium tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-7 max-w-[1000px]">
            <p className="text-[14px] font-medium leading-7">
              Our objective is to help institutions make better decisions
              using meaningful marketing and admission data, rather than
              focusing only on impressions, clicks or raw lead counts.
            </p>
            <p className="mt-3 text-[12px] leading-6 text-[#0B2A52]/50">
              Reporting depends on the institution&apos;s tracking setup and
              availability of application and enrolment data.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — GROWTH STACK */}
      <section className={`${sectionSpacing} bg-white`}>
        <div className={containerStyle}>
          <div className="mx-auto max-w-[940px] text-center">
            <Eyebrow center>Your Education Growth Stack</Eyebrow>
            <h2 className={headingStyle}>
              The Services We Bring Together to{" "}
              <span className="text-[#B79A72]">Grow Admissions.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {growthStack.map(({ icon: Icon, title, description, href }, index) => (
              <Link
                key={title}
                href={href}
                title={`Explore Sharp Rays ${title} Services`}
                className={`group flex flex-col rounded-[21px] border border-[#0B2A52]/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(11,42,82,0.06)] sm:p-7 ${
                  index === 6 ? "bg-[#0B2A52] text-white" : "bg-[#F8FBFD]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    index === 6
                      ? "bg-white/10 text-[#D7BD98]"
                      : "bg-white text-[#0B2A52]"
                  }`}>
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight
                    size={17}
                    className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      index === 6 ? "text-[#D7BD98]" : "text-[#B79A72]"
                    }`}
                  />
                </div>
                <h3 className="mt-6 text-[19px] font-medium">{title}</h3>
                <p className={`mt-3 flex-1 text-[13px] leading-6 sm:text-[14px] ${
                  index === 6 ? "text-white/65" : "text-[#0B2A52]/65"
                }`}>
                  {description}
                </p>
                <span className={`mt-6 text-[11px] font-medium ${
                  index === 6 ? "text-[#D7BD98]" : "text-[#0B2A52]"
                }`}>
                  Explore service <ArrowRight size={12} className="inline" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-9 max-w-[780px] text-center text-[14px] leading-7 text-[#0B2A52]/65">
            Together, these services support a more connected student
            acquisition system, from first discovery to admission enquiry
            and follow-up.
          </p>
        </div>
      </section>

      {/* 09 — FINAL CTA */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className={containerStyle}>
          <div className="relative overflow-hidden rounded-[25px] bg-[#0B2A52] px-6 py-12 text-white sm:px-9 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-[-220px] right-[15%] h-[350px] w-[350px] rounded-full border border-white/10" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
              <div className="max-w-[790px]">
                <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#D7BD98]">
                  Let&apos;s Grow Your Admissions
                </p>
                <h2 className={headingStyle}>
                  More Enquiries Are Good.{" "}
                  <span className="text-[#D7BD98]">
                    More Enrolments Are Better.
                  </span>
                </h2>
                <p className="mt-5 max-w-[700px] text-[14px] leading-7 text-white/65 sm:text-[15px]">
                  Your institution needs more than visibility. It needs a
                  strategy that helps the right students discover your
                  programmes, understand your offerings, trust your institution
                  and move confidently from enquiry towards admission.
                </p>
              </div>

              <div className="lg:flex lg:justify-end">
                <Link
                  href="/contact?industry=education#contact-form"
                  title="Build My Education Marketing Strategy"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition hover:bg-[#F2F5FA]"
                >
                  Build My Education Marketing Strategy
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className={`${sectionSpacing} bg-[#F8FBFD]`}>
        <div className={containerStyle}>
          <div className="mx-auto max-w-[900px] text-center">
            <Eyebrow center>Frequently Asked Questions</Eyebrow>
            <h2 className={headingStyle}>
              Questions Education Businesses{" "}
              <span className="text-[#B79A72]">Ask Us.</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-[1020px] border-t border-[#0B2A52]/10">
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
                <p className="max-w-[850px] pb-6 pr-8 text-[13px] leading-7 text-[#0B2A52]/65 sm:pl-9 sm:text-[14px]">
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
