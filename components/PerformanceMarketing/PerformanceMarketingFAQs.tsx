"use client";

import { motion, useReducedMotion } from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a results-focused approach to digital advertising where campaigns are measured and optimized around defined outcomes such as leads, sales, enquiries, calls or other valuable actions.",
  },
  {
    question: "What does a performance marketing agency do?",
    answer:
      "A performance marketing agency can manage campaign strategy, paid search, paid social, audience targeting, advertising creative, conversion tracking, optimization and performance reporting. The exact scope depends on the business, platforms and objectives.",
  },
  {
    question:
      "What is the difference between performance marketing and digital marketing?",
    answer:
      "Digital marketing is a broad category covering channels such as SEO, social media, content, email and paid advertising. Performance marketing focuses specifically on measurable campaign activity and optimizing spend around defined outcomes.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "Depending on the strategy and agreed scope, campaigns may include Google Ads, Meta Ads and other relevant paid media platforms. We recommend platforms based on the audience, objective and available opportunity rather than trying to advertise everywhere.",
  },
  {
    question: "Do you manage Google Ads?",
    answer:
      "Yes. Google Ads management can be included within a Sharp Rays performance marketing plan, including relevant Search, Performance Max, YouTube, Display or other suitable campaign types.",
  },
  {
    question: "Do you manage Meta Ads?",
    answer:
      "Yes. Facebook and Instagram advertising can be included depending on your audience, campaign objective, creative requirements and agreed scope.",
  },
  {
    question: "How much should I spend on paid advertising?",
    answer:
      "There is no universal advertising budget. The appropriate level depends on your market, audience size, customer value, competition, conversion rate, campaign objective and available growth opportunity. Media spend is discussed separately from management fees.",
  },
  {
    question: "What is a conversion?",
    answer:
      "A conversion is a valuable action completed after someone interacts with your marketing. Depending on your business, this could be a purchase, lead form, phone call, booking, signup or another meaningful action.",
  },
  {
    question: "What is conversion tracking?",
    answer:
      "Conversion tracking measures the valuable actions generated after people interact with advertising. It helps connect campaign activity with outcomes such as leads or purchases and provides better information for optimization.",
  },
  {
    question: "What is cost per lead?",
    answer:
      "Cost per lead, or CPL, is the amount of advertising spend required on average to generate a recorded lead. Lead quality should be evaluated alongside CPL rather than judging campaign performance on cost alone.",
  },
];

export default function PerformanceMarketingFAQs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="performance-marketing-faqs"
      aria-labelledby="performance-marketing-faq-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 md:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-280px] h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-[#EAF4FC]/75 blur-[165px]" />
        <div className="absolute -right-[240px] bottom-[5%] h-[440px] w-[440px] rounded-full bg-[#C6A77A]/[0.06] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-7 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C6A77A]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#C6A77A] sm:text-[10px]">
              Performance Marketing FAQs
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />
          </div>

          <h2
            id="performance-marketing-faq-heading"
            style={newYorkFont}
            className="mx-auto mt-6 text-[2.6rem] font-medium leading-[1] tracking-[-0.045em] text-[#0B2A52] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Questions About{" "}
            <span className="text-[#C6A77A]">
              Performance Marketing.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[13px] leading-6 text-[#61778D] sm:text-[14px]">
            Clear answers about paid media, campaign strategy, Google Ads,
            Meta Ads, budgets, conversions and performance measurement.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mx-auto mt-12 max-w-[920px] sm:mt-14 md:mt-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.04,
                ease,
              }}
            >
              <details className="group border-b border-[#D8E3EC] py-5 first:border-t sm:py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <span className="mt-[5px] shrink-0 text-[9px] font-semibold tracking-[0.16em] text-[#C6A77A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      style={newYorkFont}
                      className="text-[18px] font-medium leading-[1.35] tracking-[-0.025em] text-[#0B2A52] sm:text-[20px] md:text-[21px]"
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5E2EB] bg-white transition-all duration-300 group-open:border-[#0B2A52] group-open:bg-[#0B2A52]"
                  >
                    <span className="absolute h-px w-3 bg-[#0B2A52] transition-colors duration-300 group-open:bg-white" />

                    <span className="absolute h-3 w-px bg-[#0B2A52] transition-all duration-300 group-open:rotate-90 group-open:bg-white group-open:opacity-0" />
                  </span>
                </summary>

                <div className="pl-[36px] pr-4 sm:pl-[41px] sm:pr-10">
                  <p className="mt-4 max-w-[780px] text-[13px] leading-6 text-[#61778D] sm:text-[14px] sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}