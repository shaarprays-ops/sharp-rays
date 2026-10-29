
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileVideo2,
  MessageCircle,
  Scissors,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    question: "What footage do I need to provide for video editing?",
    answer:
      "You can share your recorded video clips, brand assets, logos, preferred music, reference videos and any instructions you have. We'll review the available material and discuss anything else needed before editing begins.",
  },
  {
    question: "Can Sharp Rays edit videos for Instagram, YouTube and ads?",
    answer:
      "Yes. We edit Reels, YouTube videos, Shorts, promotional ads, corporate videos, interviews and other branded content. The editing style and final dimensions are planned around the platform where your video will be used.",
  },
  {
    question: "Can you follow a specific editing style or reference video?",
    answer:
      "Yes. Share examples of videos you like, your brand guidelines and any preferences for pacing, captions, transitions or visual treatment. We'll use them to understand your direction and discuss what's suitable for your footage.",
  },
  {
    question: "Do you provide revisions after the first edit?",
    answer:
      "Yes. You can review the edited version and provide consolidated feedback. The number and scope of revision rounds are agreed before the project starts so expectations remain clear.",
  },
  {
    question: "How long does professional video editing take?",
    answer:
      "Turnaround depends on the footage length, video complexity, required graphics, project volume and revision scope. We'll discuss an estimated delivery timeline after reviewing your requirements.",
  },
  {
    question: "Will I receive videos in different formats?",
    answer:
      "We can prepare videos in formats such as 9:16 for vertical content, 16:9 for widescreen videos and 1:1 for square placements. The formats and exports included depend on the agreed project scope.",
  },
  {
    question: "How much do your video editing services cost?",
    answer:
      "Pricing depends on the video length, editing complexity, motion graphics, captions, number of videos, revisions and required deliverables. Share your project details with Sharp Rays to receive a quote based on your needs.",
  },
  {
    question: "Can you edit footage recorded on a phone?",
    answer:
      "Yes. Smartphone footage can be edited professionally when the source material is suitable. We'll assess the video quality, lighting, audio and resolution before recommending an editing approach.",
  },
];

export default function VideoEditingFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-faqs"
      aria-labelledby="video-editing-faqs-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-16 text-[#0B2A52] sm:py-20 lg:py-24 xl:py-28"
    >
      {/* SUBTLE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-0 h-[460px] w-[460px] rounded-full bg-[#EAF2F9]/70 blur-[135px]" />

        <div className="absolute -right-48 bottom-0 h-[440px] w-[440px] rounded-full bg-[#F8F0E6]/55 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* SECTION HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              Professional Video Editing FAQs
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-faqs-heading"
            className="mt-5 font-[var(--font-new-york)] text-[2.15rem] font-normal leading-[1.07] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Your Questions,{" "}
            <span className="text-[#B79A72]">
              Clearly Answered.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[12px] leading-[1.8] text-[#60778B] sm:text-[14px] sm:leading-7 md:text-[15px]">
            Everything you should know about our professional video
            editing services, project requirements, revisions and final
            delivery before getting started.
          </p>
        </motion.div>

        {/* TWO-COLUMN EDITORIAL LAYOUT */}

        <div className="mt-12 grid items-start gap-7 sm:mt-14 lg:grid-cols-[0.37fr_0.63fr] lg:gap-9 xl:gap-12">
          {/* LEFT — ENQUIRY PANEL */}

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="relative overflow-hidden rounded-[22px] bg-[#0B2A52] px-6 py-8 text-white shadow-[0_18px_50px_rgba(11,42,82,0.13)] sm:px-8 sm:py-10 lg:sticky lg:top-[120px]"
          >
            {/* DECORATIVE DETAILS */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-28 -top-32 h-[330px] w-[330px] rounded-full border border-white/[0.085]" />

              <div className="absolute -right-14 -top-16 h-[230px] w-[230px] rounded-full border border-white/[0.085]" />

              <div className="absolute -bottom-36 -left-24 h-[270px] w-[270px] rounded-full bg-[#6285AD]/20 blur-[75px]" />
            </div>

            <div className="relative z-10">
              {/* TOP ICON */}

              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/15 bg-white/10 text-[#DABD92]">
                  <MessageCircle size={21} strokeWidth={1.5} />
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
                  Project Enquiries
                </span>
              </div>

              {/* TEXT */}

              <span className="mt-9 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#DABD92]">
                Let's Talk About Your Video
              </span>

              <h3 className="mt-4 max-w-[360px] font-[var(--font-new-york)] text-[27px] font-normal leading-[1.13] tracking-[-0.03em] text-white sm:text-[32px]">
                Have Footage Ready?
                <span className="mt-1 block text-[#DABD92]">
                  Let's Get It Edited.
                </span>
              </h3>

              <p className="mt-5 max-w-[340px] text-[12px] leading-[1.85] text-white/70 sm:text-[13px]">
                Share what you've recorded, the type of video you need
                and where you plan to publish it. We'll discuss the
                editing requirements for your project.
              </p>

              {/* WHAT TO SHARE */}

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#DABD92]">
                  Helpful Details to Share
                </p>

                <div className="mt-5 space-y-3.5">
                  {[
                    "Type and length of video",
                    "Available footage and references",
                    "Preferred editing style",
                    "Required delivery formats",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#DABD92]"
                      />

                      <span className="text-[12px] leading-[1.6] text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}

              <Link
                href="/contact?service=video-editing#contact-form"
                title="Get a Professional Video Editing Quote"
                className="group mt-9 inline-flex min-h-[49px] w-full items-center justify-center gap-3 rounded-[13px] bg-white px-5 py-3 text-[12px] font-medium !text-[#0B2A52] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8F0E5] hover:!text-[#0B2A52] sm:text-[13px]"
              >
                <span className="!text-[#0B2A52]">
                  Get My Editing Quote
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="!text-[#0B2A52] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* PANEL FOOTER */}

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/15 pt-5">
                <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">
                  Sharp Rays Creative Services
                </span>

                <Scissors
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#DABD92]"
                />
              </div>
            </div>
          </motion.aside>

          {/* RIGHT — FAQ LIST */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="overflow-hidden rounded-[22px] border border-[#DDE6ED] bg-white px-5 shadow-[0_16px_45px_rgba(11,42,82,0.035)] sm:px-7 lg:px-8"
          >
            {/* FAQ TOP BAR */}

            <div className="flex items-center justify-between gap-4 border-b border-[#E1E9EF] py-5 sm:py-6">
              <div className="flex items-center gap-2.5">
                <FileVideo2
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#8094A6]">
                  Common Questions
                </span>
              </div>

              <span className="text-[9px] font-medium tracking-[0.15em] text-[#B79A72]">
                08 FAQs
              </span>
            </div>

            {/* FAQ ACCORDION */}

            <div>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `video-editing-faq-answer-${index}`;
                const questionId = `video-editing-faq-question-${index}`;

                return (
                  <div
                    key={faq.question}
                    className="group border-b border-[#E4EBF0] last:border-b-0"
                  >
                    <h3>
                      <button
                        id={questionId}
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="flex w-full items-start gap-4 py-5 text-left sm:gap-5 sm:py-6"
                      >
                        {/* NUMBER */}

                        <span
                          className={`mt-0.5 shrink-0 font-[var(--font-new-york)] text-[15px] font-normal ${
                            isOpen
                              ? "text-[#B79A72]"
                              : "text-[#A1AFBC]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* QUESTION */}

                        <span
                          className={`min-w-0 flex-1 font-[var(--font-new-york)] text-[17px] font-normal leading-[1.35] tracking-[-0.015em] transition-colors duration-300 sm:text-[19px] ${
                            isOpen
                              ? "text-[#0B2A52]"
                              : "text-[#294661] group-hover:text-[#0B2A52]"
                          }`}
                        >
                          {faq.question}
                        </span>

                        {/* PLUS / MINUS */}

                        <span
                          className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#0B2A52] bg-[#0B2A52]"
                              : "border-[#DEE7EE] bg-[#F8FAFC]"
                          }`}
                        >
                          <ChevronDown
                            size={15}
                            strokeWidth={1.7}
                            className={`transition-transform duration-300 ${
                              isOpen
                                ? "rotate-180 text-white"
                                : "text-[#7F95A8]"
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    {/* ANSWER */}

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                    >
                      <p className="max-w-[650px] pb-6 pl-[31px] pr-10 text-[12px] leading-[1.9] text-[#60778B] sm:pl-[36px] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ FOOTER */}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E1E9EF] py-5 sm:py-6">
              <p className="text-[11px] text-[#7E92A4]">
                Have a question specific to your footage?
              </p>

              <Link
                href="/contact?service=video-editing#contact-form"
                title="Ask Sharp Rays About Your Video Editing Project"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#0B2A52] transition-colors hover:text-[#6285AD]"
              >
                Ask Us Directly

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="text-[#B79A72] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
