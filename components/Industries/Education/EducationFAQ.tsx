
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How can educational institutes generate more student admission leads?",
    answer:
      "Educational institutes can attract relevant enquiries through course-specific SEO, targeted Google and Meta campaigns, useful admission content and clear enquiry forms. The strategy should also consider eligibility, course interest and how quickly the admissions team responds.",
  },
  {
    question: "How can a college or university rank higher on Google?",
    answer:
      "Improving course pages, admission information, technical SEO, internal links, relevant content and structured data can strengthen organic search visibility over time. Each programme should have useful information that answers prospective students' questions.",
  },
  {
    question: "Are Google Ads effective for student admission lead generation?",
    answer:
      "Google Ads can help institutions reach students actively searching for courses, colleges, fees and admissions. Campaign performance depends on keyword intent, geographical targeting, landing page quality, admission timelines and follow-up.",
  },
  {
    question: "How can coaching institutes get more students?",
    answer:
      "Coaching institutes can improve local search visibility, optimise exam-specific course pages, promote new batches through Google and social ads, offer demo-class enquiries and follow up promptly with interested learners.",
  },
  {
    question: "Is SEO or paid advertising better for educational institutions?",
    answer:
      "Both support different objectives. SEO helps build long-term search visibility, while paid advertising can reach relevant audiences during active admission periods. The right combination depends on competition, budgets, programmes and admission timelines.",
  },
  {
    question: "How can WhatsApp automation improve student admission enquiries?",
    answer:
      "WhatsApp workflows can acknowledge enquiries, share approved course information, organise counselling requests and send relevant reminders. They help institutions provide timely communication while admissions teams handle personalised guidance.",
  },
  {
    question: "What should an educational institute's admission landing page include?",
    answer:
      "A strong admission page should clearly explain programme details, eligibility, curriculum, duration, fees or fee guidance, admission dates, relevant faculty or facilities and application steps. It should also provide an easy way to enquire, request information or apply.",
  },
  {
    question: "How much does digital marketing for educational institutes cost?",
    answer:
      "Costs depend on institution type, number of courses, target locations, competition, services and advertising budget. A practical marketing plan should consider lead-generation costs alongside the resources available to manage counselling and admissions.",
  },
];

export default function EducationFAQ() {
  return (
    <section
      id="education-faq"
      className="relative isolate overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      {/* Soft background */}
      <div className="pointer-events-none absolute -left-40 -top-48 h-[440px] w-[440px] rounded-full bg-[#EAF3FC]/60 blur-[55px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[-200px] h-[440px] w-[440px] rounded-full bg-[#EAF3FC]/55 blur-[60px]" />

      <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Left Content */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 shrink-0 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Frequently Asked Questions
            </p>
          </div>

          <h2 className="max-w-[580px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Questions Education Businesses{" "}
            <span className="text-[#B79A72]">Ask Us.</span>
          </h2>

          <p className="mt-6 max-w-[480px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
            Find answers about student admission lead generation, education
            SEO, Google Ads, websites and marketing strategies for schools,
            colleges, coaching institutes and EdTech businesses.
          </p>

          <div className="mt-8">
            <Link
              href="/contact?service=education-marketing#contact-form"
              title="Discuss Education Marketing with Sharp Rays"
              className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72]"
            >
              Have another question? Let&apos;s talk.
              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Right FAQ Accordion */}
        <div className="overflow-hidden rounded-[23px] border border-[#0B2A52]/[0.08] bg-white px-5 shadow-[0_16px_45px_rgba(11,42,82,0.035)] sm:px-7 lg:px-8">
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              className={`group ${
                index !== faqs.length - 1
                  ? "border-b border-[#0B2A52]/[0.09]"
                  : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 marker:hidden [&::-webkit-details-marker]:hidden sm:py-6">
                <div className="flex min-w-0 items-start gap-4">
                
                  <h3 className="text-[15px] font-medium leading-6 tracking-[-0.015em] text-[#0B2A52] sm:text-[17px]">
                    {question}
                  </h3>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/[0.09] bg-[#F8FBFD] text-[#B79A72] transition-colors duration-300 group-open:bg-[#F7F0E5]">
                  <Plus
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-open:rotate-45"
                  />
                </span>
              </summary>

              <div className="pb-6 pr-10 sm:pl-9">
                <p className="max-w-[700px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                  {answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
