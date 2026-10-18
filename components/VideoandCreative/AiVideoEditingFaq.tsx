"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is AI video production?",
    answer:
      "AI video production uses generative technology together with creative direction to create scenes, environments, characters, product visuals and motion from ideas, images or briefs. The process can include concept development, scripting, visual direction, AI generation and final production for advertising, social media, websites and campaigns.",
  },
  {
    question: "Can you create AI videos from product photos?",
    answer:
      "Yes. Product photos can be used as a starting point for AI product videos, launch creative, lifestyle scenes, promotional visuals and campaign concepts. The level of visual consistency depends on the product, available reference material and the type of scene being created.",
  },
  {
    question: "Can AI video replace a traditional video shoot?",
    answer:
      "For some concepts, yes. AI video can reduce the need for locations, sets, models and physical production when the creative idea can be generated digitally. Traditional or hybrid production may still be better for testimonials, exact physical demonstrations, founder-led communication or content where real-world authenticity is essential.",
  },
  {
    question: "Can you create AI video ads for Meta and Instagram?",
    answer:
      "Yes. We can create AI video ads for Meta, Instagram and other digital advertising channels. Creative can be developed around different hooks, product benefits, offers, audience angles and campaign objectives so one brief can produce multiple advertising directions.",
  },
  {
    question: "Can you create AI UGC-style videos?",
    answer:
      "Yes. AI UGC-style creative can be developed around relatable hooks, product stories, demonstrations and social-first messaging. The goal is not simply to imitate creator content, but to build a format that feels natural for the platform while staying aligned with the brand and campaign.",
  },
  {
    question: "Can AI characters stay consistent across different scenes?",
    answer:
      "Character consistency is possible, but the level of consistency can vary depending on the concept, number of scenes and production requirements. We use references, visual direction and iterative generation to improve continuity across appearance, styling, environment and overall creative direction.",
  },
  {
    question: "What do I need to provide before starting an AI video project?",
    answer:
      "You can start with a product photo, website, campaign brief, brand guidelines, script, reference images or even a rough idea. We use the available material to understand the product, audience, message and visual direction before developing the creative concept.",
  },
  {
    question: "Can AI-generated videos be used commercially?",
    answer:
      "AI-generated video can be used commercially when the assets, tools, permissions and usage rights involved support the intended use. We consider brand assets, licensed media, voice and likeness permissions, product accuracy, platform requirements and the planned distribution of the final creative.",
  },
  {
    question: "Can you create multilingual AI videos?",
    answer:
      "Yes. Depending on the format, AI video can support different languages through scripts, voice treatment, presenters, captions or on-screen text. The creative still needs to be adapted for the intended audience rather than simply translating the same message word for word.",
  },
  {
    question: "Will my product look exactly the same in AI-generated scenes?",
    answer:
      "We aim for strong product consistency, but generative AI can introduce visual variation, especially with detailed packaging, text, proportions or complex product features. For campaigns where exact product representation is critical, we may recommend a controlled AI workflow or a hybrid approach using real product assets.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiVideoCreativeFAQs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-creative-faq"
      aria-labelledby="ai-video-creative-faq-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-260px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#EEF5FA]/70 blur-[145px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-7 md:mb-14 lg:mb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-8">
          {/* LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10" />

              <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.3em]">
                AI Video & Creative FAQs
              </span>

              <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10" />
            </div>

            <h2
              id="ai-video-creative-faq-heading"
              className="mt-5 max-w-[650px] font-[var(--font-new-york)] text-[2.6rem] font-normal leading-[0.98] tracking-[-0.05em] text-[#0B2A52] sm:mt-6 md:text-[2.95rem] lg:mt-7 lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              Questions About{" "}
              <span className="italic text-[#C6A77A]">
                AI Video Production?
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="max-w-[470px] text-[13px] leading-6 text-[#66758A] sm:text-sm sm:leading-7 md:text-[15px] lg:ml-auto lg:pb-1 lg:text-base"
          >
            Clear answers to the questions businesses usually ask about AI
            video production, product visuals, UGC-style creative, commercial
            usage, consistency and what is needed before starting.
          </motion.p>
        </div>

        {/* =====================================================
            MOBILE + TABLET
        ===================================================== */}

        <div className="block lg:hidden">
          <div className="overflow-hidden rounded-[20px] border border-[#DCE5EF] bg-white sm:rounded-[24px]">
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 18,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.035,
                  ease,
                }}
                className="relative border-b border-[#E6EBF1] px-5 py-6 last:border-b-0 sm:px-6 sm:py-7 md:px-8 md:py-8"
              >
                <div className="mb-3 flex items-center gap-2.5 sm:mb-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C6A77A] sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-7 bg-[#C6A77A]/60 sm:w-9" />
                </div>

                <h3 className="max-w-[650px] font-[var(--font-new-york)] text-[19px] font-medium leading-[1.22] tracking-[-0.025em] text-[#0B2A52] sm:text-[21px] md:text-[23px]">
                  {faq.question}
                </h3>

                <p className="mt-3 max-w-[680px] text-[13px] leading-[1.75] text-[#66758A] sm:mt-4 sm:text-sm sm:leading-7 md:text-[15px]">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 px-1 sm:mt-6">
            <span className="h-px w-6 bg-[#C6A77A]" />

            <span className="text-[8px] uppercase tracking-[0.18em] text-[#66758A]/60 sm:text-[9px]">
              Clear Questions
            </span>

            <span className="text-[#C6A77A]/50">·</span>

            <span className="text-[8px] uppercase tracking-[0.18em] text-[#66758A]/60 sm:text-[9px]">
              Clear Answers
            </span>
          </div>
        </div>

        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div className="hidden overflow-hidden rounded-[28px] border border-[#DCE5EF] bg-white shadow-[0_24px_70px_rgba(11,42,82,0.055)] lg:grid lg:grid-cols-[1fr_0.9fr]">
          {/* QUESTIONS */}

          <div className="border-r border-[#DCE5EF]">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={faq.question}
                  type="button"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.045,
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group relative block w-full border-b border-[#E6EBF1] px-8 py-5 text-left outline-none transition-all duration-500 last:border-b-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C6A77A]/60 lg:px-9 xl:px-10 xl:py-[22px] ${
                    isActive
                      ? "bg-[#F7F9FB]"
                      : "bg-white hover:bg-[#FAFBFC]"
                  }`}
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      scaleY: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                    }}
                    className="absolute left-0 top-0 h-full w-[3px] origin-top bg-[#C6A77A]"
                  />

                  <span
                    className={`mb-1.5 block text-[9px] font-semibold tracking-[0.18em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#C6A77A]"
                        : "text-[#0B2A52]/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`block max-w-[500px] font-[var(--font-new-york)] text-[18px] font-medium leading-[1.24] tracking-[-0.02em] transition-all duration-300 xl:text-[20px] ${
                      isActive
                        ? "translate-x-1 text-[#0B2A52]"
                        : "text-[#344054]"
                    }`}
                  >
                    {faq.question}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* ANSWER PANEL */}

          <div className="relative flex min-h-[690px] flex-col justify-between overflow-hidden bg-[#0B2A52] p-10 xl:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-10 font-[var(--font-new-york)] text-[180px] font-medium leading-none text-white/[0.035]"
            >
              ?
            </span>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[150px] -right-[150px] h-[360px] w-[360px] rounded-full border border-white/[0.05]"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C6A77A]">
                  Answer
                </span>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-white/30">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-10 xl:mt-12">
                <motion.div
                  key={activeIndex}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    ease,
                  }}
                >
                  <h3 className="max-w-[440px] font-[var(--font-new-york)] text-[27px] font-medium leading-[1.15] tracking-[-0.03em] text-white xl:text-[31px]">
                    {faqs[activeIndex].question}
                  </h3>

                  <div className="mt-7 h-px w-10 bg-[#C6A77A]" />

                  <p className="mt-7 max-w-[440px] text-[14px] leading-7 text-white/60 xl:text-[15px]">
                    {faqs[activeIndex].answer}
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between gap-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Clear questions.
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Clear answers.
                </p>
              </div>

              <span className="font-[var(--font-new-york)] text-5xl italic leading-none text-[#C6A77A]/70">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DETAIL
        ===================================================== */}

        <div className="mx-auto mt-10 hidden max-w-[720px] items-center gap-4 lg:flex">
          <span className="h-px flex-1 bg-[#C6A77A]/40" />

          <span className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.19em] text-[#0B2A52]/32">
            Concept · Generate · Refine · Deliver
          </span>

          <span className="h-px flex-1 bg-[#C6A77A]/40" />
        </div>
      </div>
    </section>
  );
}