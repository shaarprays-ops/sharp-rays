
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Film,
  Play,
  Scissors,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
};

export default function VideoEditingFinalCTA() {
  return (
    <section
      id="video-editing-final-cta"
      aria-labelledby="video-editing-final-cta-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24 xl:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-0 h-[470px] w-[470px] rounded-full bg-[#EAF2F8]/70 blur-[135px]" />
        <div className="absolute -bottom-40 -left-36 h-[420px] w-[420px] rounded-full bg-[#F7F0E7]/60 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* TOP SECTION INDICATOR */}

        <div className="flex items-center justify-between gap-4 border-b border-[#DCE5ED] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              Ready to Start Your Project?
            </span>
          </div>

          <span className="hidden text-[9px] font-medium uppercase tracking-[0.15em] text-[#9CACBA] sm:block">
            Sharp Rays / Professional Video Editing
          </span>
        </div>

        {/* MAIN EDITORIAL CONTENT */}

        <div className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          {/* LEFT — MAIN MESSAGE */}

          <div className="max-w-[690px]">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">
              Let's Make Something Worth Watching
            </span>

            <h2
              id="video-editing-final-cta-heading"
              style={newYorkFont}
              className="mt-5 max-w-[690px] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em] text-[#0B2A52] min-[375px]:text-[2.3rem] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              You've Got the Footage.
              <span className="mt-2 block text-[#B79A72]">
                We'll Bring It All Together.
              </span>
            </h2>

            <p className="mt-6 max-w-[530px] text-[12px] leading-[1.85] text-[#60778B] min-[375px]:text-[13px] sm:text-[14px] sm:leading-7 md:text-[15px]">
              Whether it's a Reel, YouTube video, promotional ad or brand
              story, Sharp Rays helps turn your footage into polished,
              professionally edited content ready for your audience.
            </p>

            {/* MAIN ACTION */}

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contact?service=video-editing#contact-form"
                title="Request a Professional Video Editing Quote"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[14px] border border-[#0B2A52] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white shadow-[0_12px_30px_rgba(11,42,82,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17436F] hover:!text-white sm:text-[13px]"
              >
                <span className="!text-white">
                  Get My Editing Quote
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="!text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="text-[11px] text-[#8296A7]">
                Share your footage details and project requirements.
              </span>
            </div>

            {/* SIMPLE PROJECT REQUIREMENTS */}

            <div className="mt-11 max-w-[590px] border-t border-[#DCE5ED] pt-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#B79A72]">
                What You Can Share With Us
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-5">
                {[
                  {
                    number: "01",
                    title: "Your Footage",
                    description: "Recorded clips and assets",
                  },
                  {
                    number: "02",
                    title: "Your References",
                    description: "Preferred editing style",
                  },
                  {
                    number: "03",
                    title: "Your Requirements",
                    description: "Platform and final format",
                  },
                ].map((item) => (
                  <div key={item.number}>
                    <span
                      style={newYorkFont}
                      className="text-[18px] italic text-[#B79A72]"
                    >
                      {item.number}
                    </span>

                    <p className="mt-2 text-[12px] font-medium text-[#0B2A52]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-[1.6] text-[#8396A7]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — CINEMATIC FINISH VISUAL */}

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            {/* OUTER FRAME */}

            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-[90%] w-[90%] rounded-[25px] border border-[#B79A72]/25"
            />

            {/* MAIN PREVIEW */}

            <div className="relative overflow-hidden rounded-[22px] border-[7px] border-white bg-[#0B2A52] shadow-[0_25px_65px_rgba(11,42,82,0.17)]">
              <div className="relative aspect-[4/4.3] overflow-hidden sm:aspect-[4/3.9]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_28%,#B39A7D_0%,#7796AA_30%,#315977_57%,#0B2A52_100%)]" />

                <div className="absolute -right-[30%] -top-[24%] h-[88%] w-[105%] -rotate-[28deg] rounded-full border-[40px] border-white/[0.07]" />

                <div className="absolute -bottom-[52%] -left-[30%] h-[95%] w-[100%] rounded-full border-[42px] border-[#B79A72]/15" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/95 via-transparent to-[#071A2F]/10" />

                {/* TOP INFO */}

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3 sm:left-7 sm:right-7 sm:top-7">
                  <span className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9BC91]" />
                    Sharp Rays / Final Cut
                  </span>

                  <Film size={16} className="text-[#D9BC91]" />
                </div>

                {/* CENTRE SYMBOL */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </span>
                </div>

                {/* BOTTOM CAPTION */}

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#DABB91]">
                    Your Vision. Professionally Edited.
                  </span>

                  <p
                    style={newYorkFont}
                    className="mt-3 text-[25px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[30px]"
                  >
                    From Raw Clips
                    <span className="block italic text-[#E1C59F]">
                      to a Finished Story.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING NOTE */}

            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-[13px] border border-[#DFE8EF] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(11,42,82,0.1)] sm:-left-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F5F9] text-[#B79A72]">
                <Scissors size={17} strokeWidth={1.5} />
              </span>

              <div>
                <p className="text-[10px] font-semibold text-[#0B2A52]">
                  Professional Video Editing
                </p>

                <p className="mt-1 text-[9px] text-[#8799A9]">
                  Crafted for Your Content
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLOSING STRIP */}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-[#DCE5ED] pt-6 sm:mt-10">
          <p className="text-[10px] text-[#8598A9]">
            Sharp Rays — Professional Video Editing Services
          </p>

          <Link
            href="/services"
            title="Explore All Sharp Rays Services"
            className="group inline-flex items-center gap-2 text-[11px] font-medium text-[#0B2A52] transition-colors hover:text-[#6285AD]"
          >
            Explore All Services

            <ArrowUpRight
              size={14}
              className="text-[#B79A72] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
