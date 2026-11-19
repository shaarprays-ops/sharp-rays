
"use client";

import { motion } from "framer-motion";

const faqs: [string, string][] = [
  [
    "How much does working with you cost?",
    "It depends on what your business actually needs. We start by understanding your goals, scope, and priorities before recommending the right approach and investment."
  ],
  [
    "How quickly can we start?",
    "Once we understand your requirements and agree on the scope, we'll define the priorities, timeline, and next steps so everyone knows exactly what happens next."
  ],
  [
    "Do you work with startups?",
    "Yes. We work with startups, small businesses, and growing brands that are serious about building a stronger digital presence and creating meaningful, sustainable growth."
  ],
  [
    "What happens after I contact you?",
    "We start with a conversation. We learn about your business, what's working, what's not, and where you want to go. Then we'll recommend the most relevant services and a practical way forward."
  ],
  [
    "Do you guarantee results?",
    "We don't promise numbers we can't control. What we do promise is thoughtful strategy, strong execution, transparency, and decisions backed by data."
  ],
  [
    "Which digital marketing services do you offer?",
    "We offer SEO, social media marketing, performance marketing, website development, content marketing, digital PR, AI automation, AI video creation, and professional video editing."
  ],
  [
    "Can I combine multiple services?",
    "Absolutely. We can combine SEO, website development, social media, content marketing, and paid advertising into a connected strategy based on your business goals."
  ],
  [
    "Will I receive regular project updates?",
    "Yes. We believe in clear communication throughout every project. You'll stay informed about progress, deliverables, important decisions, and relevant performance updates."
  ],
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function BeforeYouAskSection() {
  return (
    <section
      id="before-you-ask"
      aria-labelledby="before-you-ask-heading"
      className="
        relative
        overflow-hidden
        bg-[#FAF8F5]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-[1220px]">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-[800px] text-center"
        >

          {/* EYEBROW */}

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10" />

            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.3em]">
              Before You Ask
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10" />
          </div>

          {/* HEADING */}

          <h2
            id="before-you-ask-heading"
            className="
              mt-5
              font-[var(--font-new-york)]
              text-[2.15rem]
              font-normal
              leading-[1.05]
              tracking-[-0.055em]
              text-[#0B2A52]
              sm:mt-6
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:mt-7
              lg:text-[3.35rem]
            "
          >
            Before You{" "}
            <span className="italic text-[#B79A72]">
              Ask...
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="
            mx-auto
            mt-5
            max-w-[580px]
            text-[13px]
            leading-[1.9]
            text-[#718092]
            sm:text-sm
            sm:leading-7
          ">
            You probably have a few questions.
            <br className="hidden sm:block" />
            We'd rather answer them honestly before you even have to ask.
          </p>

        </motion.div>

        {/* =========================
            FAQ GRID
        ========================== */}

        <div className="
          mt-12
          grid
          gap-x-12
          border-t
          border-[#E4D9CC]
          sm:mt-14
          lg:mt-16
          lg:grid-cols-2
        ">

          {faqs.map(([question, answer], index) => (

            <motion.article
              key={question}
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.6,
                delay: (index % 2) * 0.08,
                ease,
              }}
              className="
                group
                flex
                h-full
                gap-4
                border-b
                border-[#E4D9CC]
                py-7
                transition-colors
                duration-300
                sm:py-8
              "
            >

              {/* NUMBER */}

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E0D2BF]
                  bg-white
                  font-[var(--font-new-york)]
                  text-[15px]
                  text-[#B79A72]
                  transition-all
                  duration-300
                  group-hover:border-[#B79A72]
                  group-hover:bg-[#B79A72]
                  group-hover:text-white
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* QUESTION + ANSWER */}

              <div className="min-w-0 flex-1">

                <h3
                  className="
                    font-[var(--font-new-york)]
                    text-[19px]
                    font-medium
                    leading-[1.4]
                    tracking-[-0.02em]
                    text-[#0B2A52]
                    sm:text-[21px]
                  "
                >
                  {question}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[490px]
                    text-[12px]
                    leading-[1.95]
                    text-[#708092]
                    sm:text-[13px]
                    sm:leading-[1.9]
                  "
                >
                  {answer}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

        {/* =========================
            BOTTOM NOTE
        ========================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-3
            gap-y-2
          "
        >

          <span className="h-px w-7 bg-[#C6A77A]" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#718092]/70">
            Honest answers
          </span>

          <span className="text-[#C6A77A]">·</span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#718092]/70">
            No agency jargon
          </span>

          <span className="h-px w-7 bg-[#C6A77A]" />

        </motion.div>

      </div>
    </section>
  );
}
