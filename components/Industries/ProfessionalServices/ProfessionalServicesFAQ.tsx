
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is digital marketing for professional services?",
    answer:
      "Digital marketing for professional services helps consulting firms, business advisors and specialist service providers improve online visibility, communicate expertise and attract relevant client enquiries. It can include professional services SEO, website development, expert-led content, LinkedIn marketing and advertising where permitted.",
  },
  {
    question:
      "How can professional service firms attract more qualified client enquiries?",
    answer:
      "Firms can attract more relevant enquiries by targeting service-specific searches, clearly explaining their expertise, creating useful content and providing well-structured enquiry forms. The focus should be on connecting with clients whose requirements match the firm's professional services.",
  },
  {
    question: "How does SEO work for professional services?",
    answer:
      "Professional services SEO improves visibility for searches related to a firm's services, specialisations, industries and locations. It includes service-page optimisation, technical SEO, internal linking, local search improvements and useful professional content.",
  },
  {
    question: "How can a consulting firm rank higher on Google?",
    answer:
      "Consulting firms can improve their organic search visibility by creating dedicated service pages, publishing relevant industry insights, improving website structure and addressing technical SEO issues. Search performance depends on content relevance, competition and website quality, so specific rankings cannot be guaranteed.",
  },
  {
    question: "Is LinkedIn marketing effective for consulting firms?",
    answer:
      "LinkedIn can help consulting and advisory firms demonstrate expertise, share business insights and reach professional audiences. A suitable strategy may include educational posts, industry analysis, firm updates and expert-led content that builds familiarity and credibility.",
  },
  {
    question: "Should professional service firms use Google Ads?",
    answer:
      "Google Ads can support relevant client enquiries for professional services where advertising is permitted. Campaigns should focus on appropriate search intent, clear service information and suitable landing pages. Regulated professions may have additional advertising restrictions that must be reviewed first.",
  },
  {
    question: "What should a professional services website include?",
    answer:
      "A professional services website should clearly present the firm's services, specialisations, team information, accurate credentials, contact details and useful educational resources. It should also provide simple navigation and appropriate enquiry options so prospective clients can evaluate the firm confidently.",
  },
  {
    question:
      "How can content marketing help consulting and advisory firms?",
    answer:
      "Content marketing helps professional firms answer common client questions, explain complex services and demonstrate relevant knowledge. Useful guides, industry insights, service explainers and professionally reviewed articles can support search visibility and build confidence before an initial consultation.",
  },
  {
    question: "Can AI automation help professional service providers?",
    answer:
      "AI automation can support routine tasks such as enquiry acknowledgements, consultation scheduling, lead routing and administrative follow-ups. Sensitive information should be handled with appropriate safeguards, and professional advice and decisions should remain under qualified human supervision.",
  },
  {
    question: "How long does professional services SEO take to show results?",
    answer:
      "SEO results depend on website condition, competition, service specialisation, target locations and existing search visibility. Improvements can develop gradually, and performance should be assessed through relevant search visibility, organic traffic and qualified enquiries rather than guaranteed ranking timelines.",
  },
  {
    question:
      "How much does digital marketing for professional service firms cost?",
    answer:
      "Costs depend on the firm's industry, target markets, competition, website requirements and selected services. A consulting firm focused on SEO and expert-led content may require a different budget from a multi-location professional services business using websites, advertising and enquiry automation.",
  },
];

export default function ProfessionalServicesFAQ() {
  return (
    <section
      id="professional-services-faq"
      aria-labelledby="professional-faq-heading"
      className="bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
        {/* Centered introduction */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              Frequently Asked Questions
            </span>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="professional-faq-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
          >
            Questions Professional{" "}
            <span className="text-[#B79A72]">
              Service Firms Ask Us.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
            Explore common questions about professional services
            SEO, digital marketing, websites, content, advertising
            and client enquiry strategies.
          </p>
        </div>

        {/* Editorial accordion */}
        <div className="mt-12 border-t border-[#E7DED2] lg:mt-14">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-[#E7DED2] open:bg-[#FCFAF7]"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-2 py-6 transition-colors duration-300 hover:bg-[#FCFAF7] sm:gap-7 sm:px-5 sm:py-7 [&::-webkit-details-marker]:hidden">
               
                <h3 className="min-w-0 flex-1 font-serif text-[18px] font-normal leading-[1.45] text-[#0B2A52] sm:text-[21px]">
                  {faq.question}
                </h3>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E7DCCB] bg-white text-[#B79A72] transition-all duration-300 group-open:rotate-180 group-open:border-[#B79A72] group-open:bg-[#F7F0E7]">
                  <ChevronDown size={17} strokeWidth={1.5} />
                </span>
              </summary>

              <div className="pb-7 pl-[56px] pr-5 sm:pb-8 sm:pl-[88px] sm:pr-16">
                <p className="max-w-[840px] text-[13px] leading-[2] text-[#617387] sm:text-[14px]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-center">
          <HelpCircle
            size={16}
            strokeWidth={1.5}
            className="text-[#B79A72]"
          />
          <p className="text-[12px] text-[#7E8B98]">
            Your firm's strategy should reflect its actual services,
            target clients and professional requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
