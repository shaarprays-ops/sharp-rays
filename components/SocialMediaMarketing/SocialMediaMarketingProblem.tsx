"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Heart, MessageCircle, MoreHorizontal, Play, Plus, Send, Sparkles, Users } from "lucide-react";
/* COMMON PROBLEMS */
const commonProblems = [
  { title: "No Connected Strategy", text: "Individual posts may look good, but there is no clear system connecting one piece of content to the next." },
  { title: "Attention Without Recognition", text: "Views can increase while your brand still struggles to become familiar, distinctive or memorable." },
  { title: "Audience Without Action", text: "Follower growth means less when it does not lead to stronger engagement, enquiries or meaningful business conversations." },
  { title: "Content Without Continuity", text: "Every new post starts from zero when there is no consistent message, creative direction or content system behind it." },
];
/* POINT OF VIEW */
const pointOfView = [
  { title: "Reach", result: "creates visibility." },
  { title: "Recognition", result: "creates memory." },
  { title: "Relevance", result: "creates interest." },
  { title: "Consistency", result: "creates trust." },
];
/* PHONE HIGHLIGHTS */
const highlights = [
  { label: "Strategy", icon: <Sparkles size={15} strokeWidth={1.5} /> },
  { label: "Content", icon: <Play size={14} strokeWidth={1.5} /> },
  { label: "Clients", icon: <Users size={15} strokeWidth={1.5} /> },
  { label: "Growth", icon: <ArrowRight size={15} strokeWidth={1.5} /> },
  { label: "Behind", icon: <Heart size={15} strokeWidth={1.5} /> },
];
/* POSTS */
const posts = ["/services/insta/insta1.webp", "/services/insta/insta2.webp", "/services/insta/insta3.webp", "/services/insta/insta4.webp", "/services/insta/insta5.webp", "/services/insta/insta6.webp"];
export default function SocialMediaMarketingProblem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"grid" | "reels">("grid");
  /* ============================================================
     VIEWPORT ANIMATION
  ============================================================ */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
      }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="social-media-problem"
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -left-[180px] top-[12%] h-[420px] w-[420px] rounded-full bg-[#B79A72]/[0.04] blur-[105px] sm:h-[520px] sm:w-[520px]"
        />
        <div
          className="absolute -right-[220px] top-[42%] h-[520px] w-[520px] rounded-full bg-[#6285AD]/[0.045] blur-[120px] lg:h-[650px] lg:w-[650px]"
        />
      </div>
      {/* =========================================================
          CONTAINER
      ========================================================== */}
      <div
        className="relative z-10 mx-auto max-w-[1400px] px-4 py-16 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28 xl:px-16 xl:py-32"
      >
        {/* =======================================================
            TOP INTRO
        ======================================================== */}
        <div
          className="mx-auto max-w-[930px] text-center"
        >
          {/* LABEL */}
          <div
            className={`
              mx-auto
              flex
              w-fit
              items-center
              justify-center
              gap-3
              transition-all
              duration-1000
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <span
              className="block h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10"
            />
            <span
              className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.28em]"
            >
              THE PROBLEM
            </span>
            <span
              className="block h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10"
            />
          </div>
          {/* HEADING */}
          <h2
            className={`
              mx-auto
              mt-5
              max-w-[950px]
              font-[var(--font-new-york)]
              text-[2.15rem]
              font-normal
              leading-[1.03]
              tracking-[-0.045em]
              text-[#0B2A52]
              transition-all
              duration-[1100ms]
              min-[375px]:text-[2.3rem]
              sm:mt-6
              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }
            `}
          >
            Posting More Isn&apos;t the Same as Building a{" "}
            <span className="text-[#B79A72]">
              Stronger Brand.
            </span>
          </h2>
          {/* INTRO */}
          <p
            className={`
              mx-auto
              mt-5
              max-w-[700px]
              text-[12px]
              leading-6
              text-[#0B2A52]/50
              transition-all
              delay-150
              duration-[1100ms]
              sm:text-[14px]
              sm:leading-7
              md:text-[15px]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            Your business can publish every week, gain followers and
            generate views while still struggling to create a social
            presence people recognize, understand or remember.
          </p>
          <p
            className={`
              mx-auto
              mt-3
              text-[12px]
              font-medium
              leading-6
              text-[#0B2A52]/65
              transition-all
              delay-200
              duration-[1100ms]
              sm:text-[13px]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            The problem is rarely just a lack of content.
          </p>
        </div>
        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}
        <div
          className="mt-12 grid items-center gap-12 sm:mt-14 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:grid-cols-[0.88fr_1.12fr]"
        >
          {/* =====================================================
              LEFT — 4 COMMON PROBLEMS
          ====================================================== */}
          <div
            className={`
              relative
              z-20
              mx-auto
              w-full
              max-w-[580px]
              transition-all
              duration-[1300ms]
              lg:mx-0
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }
            `}
          >
            {/* SMALL INTRO */}
            <div
              className="mb-7 flex items-center gap-3"
            >
              <span
                className="h-px w-8 shrink-0 bg-[#B79A72]"
              />
              <p
                className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[9px]"
              >
                4 COMMON PROBLEMS
              </p>
            </div>
            {/* PROBLEMS */}
            <div
              className="border-t border-[#0B2A52]/[0.08]"
            >
              {commonProblems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`
                    group
                    relative
                    border-b
                    border-[#0B2A52]/[0.08]
                    py-5
                    transition-all
                    duration-500
                    sm:py-6
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${220 + index * 90}ms`,
                  }}
                >
                  <div
                    className="flex items-start gap-4"
                  >
                    {/* DOT */}
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B79A72] transition-transform duration-300 group-hover:scale-150"
                    />
                    {/* COPY */}
                    <div>
                      <h3
                        className="text-[14px] font-medium leading-[1.4] tracking-[-0.015em] text-[#0B2A52] sm:text-[16px]"
                      >
                        {problem.title}
                      </h3>
                      <p
                        className="mt-2 max-w-[490px] text-[11px] leading-5 text-[#0B2A52]/48 sm:text-[12px] sm:leading-6 md:text-[13px]"
                      >
                        {problem.text}
                      </p>
                    </div>
                  </div>
                  {/* HOVER ACCENT */}
                  <span
                    className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-16"
                  />
                </div>
              ))}
            </div>
            {/* SUMMARY */}
            <div
              className="mt-7 rounded-[18px] border border-[#B79A72]/15 bg-[#FBFAF7] px-5 py-4 sm:px-6"
            >
              <p
                className="text-[12px] font-medium leading-6 text-[#0B2A52]/65 sm:text-[13px]"
              >
                More content only becomes more valuable when every
                piece contributes to a clearer, more recognizable
                brand.
              </p>
            </div>
          </div>
          {/* =====================================================
              RIGHT SIDE — KEEP PHONE VISUAL
          ====================================================== */}
          <div
            className={`
              relative
              flex
              min-h-[500px]
              w-full
              items-center
              justify-center
              transition-all
              duration-[1500ms]
              sm:min-h-[610px]
              lg:min-h-[650px]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0 lg:translate-x-10"
              }
            `}
          >
            {/* SOFT BACKGROUND LIGHT */}
            <div
              className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[#F7F3EB] blur-[70px] min-[375px]:h-[370px] min-[375px]:w-[370px] sm:h-[540px] sm:w-[540px]"
            />
            {/* SUBTLE ORBITS */}
            <div
              className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-[#B79A72]/10 min-[375px]:h-[350px] min-[375px]:w-[350px] sm:h-[570px] sm:w-[570px]"
            />
            <div
              className="pointer-events-none absolute h-[245px] w-[245px] rounded-full border border-[#0B2A52]/[0.035] min-[375px]:h-[290px] min-[375px]:w-[290px] sm:h-[460px] sm:w-[460px]"
            />
            {/* TOP STATUS CARD */}
            <div
              className="absolute left-1/2 top-2 z-40 -translate-x-1/2 rounded-full border border-white bg-white/95 px-4 py-2 shadow-[0_15px_35px_rgba(11,42,82,0.08)] backdrop-blur-xl sm:px-5 sm:py-2.5"
            >
              <div
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span
                  className="relative flex h-1.5 w-1.5"
                >
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-[#B79A72]/50"
                  />
                  <span
                    className="relative h-1.5 w-1.5 rounded-full bg-[#B79A72]"
                  />
                </span>
                <span
                  className="text-[7px] font-semibold tracking-[0.14em] text-[#0B2A52]/45 sm:text-[8px] sm:tracking-[0.16em]"
                >
                  SOCIAL PRESENCE IN MOTION
                </span>
              </div>
            </div>
            {/* =================================================
                PHONE
            ================================================== */}
            <div
              className="relative z-30 w-[250px] min-[375px]:w-[280px] sm:w-[330px]"
            >
              <div
                className="relative rounded-[38px] border-[6px] border-[#0B2A52] bg-[#0B2A52] p-1 shadow-[0_45px_100px_rgba(11,42,82,0.18)] sm:rounded-[42px] sm:border-[7px]"
              >
                {/* SIDE BUTTON */}
                <div
                  className="absolute -right-[11px] top-[145px] h-16 w-[5px] rounded-r-full bg-[#0B2A52]"
                />
                <div
                  className="overflow-hidden rounded-[29px] bg-white sm:rounded-[32px]"
                >
                  {/* STATUS */}
                  <div
                    className="relative h-8 bg-white"
                  >
                    <div
                      className="absolute left-1/2 top-1.5 h-5 w-[78px] -translate-x-1/2 rounded-full bg-[#0B2A52] sm:w-[86px]"
                    />
                    <span
                      className="absolute left-4 top-2 text-[7px] font-semibold text-[#0B2A52]"
                    >
                      9:41
                    </span>
                    <div
                      className="absolute right-4 top-2 flex gap-1"
                    >
                      <span
                        className="h-2 w-2 rounded-full bg-[#0B2A52]"
                      />
                      <span
                        className="h-2 w-3 rounded-full bg-[#0B2A52]/60"
                      />
                    </div>
                  </div>
                  {/* INSTAGRAM HEADER */}
                  <div
                    className="flex items-center justify-between px-4 pb-3"
                  >
                    <div
                      className="flex items-center gap-1"
                    >
                      <span
                        className="text-[12px] font-semibold text-[#0B2A52]"
                      >
                        yourbrand
                      </span>
                      <span
                        className="text-[8px] text-[#B79A72]"
                      >
                        ✓
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-4"
                    >
                      <Plus
                        size={17}
                        strokeWidth={1.7}
                        className="text-[#0B2A52]"
                      />
                      <MoreHorizontal
                        size={17}
                        className="text-[#0B2A52]"
                      />
                    </div>
                  </div>
                  {/* PROFILE */}
                  <div className="px-4">
                    <div
                      className="flex items-center gap-4"
                    >
                      {/* PROFILE IMAGE */}
                      <div
                        className="relative h-[58px] w-[58px] shrink-0 rounded-full bg-gradient-to-tr from-[#B79A72] via-[#E7D4B4] to-[#0B2A52] p-[2px] sm:h-[63px] sm:w-[63px]"
                      >
                        <div
                          className="h-full w-full rounded-full bg-white p-[2px]"
                        >
                          <img
                            src="/services/insta/instadp.webp"
                            alt="Sharp Rays social media brand profile visual"
                            title="Sharp Rays Social Media Brand Profile"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div
                          className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#0B2A52] text-white"
                        >
                          <Plus size={9} />
                        </div>
                      </div>
                      {/* STATS */}
                      <div
                        className="grid flex-1 grid-cols-3 text-center"
                      >
                        <div>
                          <p
                            className="text-[12px] font-semibold text-[#0B2A52] sm:text-[13px]"
                          >
                            48
                          </p>
                          <p
                            className="text-[7px] text-[#0B2A52]/40"
                          >
                            posts
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-[12px] font-semibold text-[#0B2A52] sm:text-[13px]"
                          >
                            12.8K
                          </p>
                          <p
                            className="text-[7px] text-[#0B2A52]/40"
                          >
                            followers
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-[12px] font-semibold text-[#0B2A52] sm:text-[13px]"
                          >
                            184
                          </p>
                          <p
                            className="text-[7px] text-[#0B2A52]/40"
                          >
                            following
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* BIO */}
                    <div className="mt-3">
                      <p
                        className="text-[10px] font-semibold text-[#0B2A52]"
                      >
                        Your Brand
                      </p>
                      <p
                        className="mt-1 text-[8px] leading-4 text-[#0B2A52]/50"
                      >
                        Social Media Marketing
                        <br />
                        Strategy · Content · Community · Growth
                        <br />
                        Building a clearer, more intentional social
                        presence.
                      </p>
                    </div>
                    {/* PROFILE BUTTONS */}
                    <div
                      className="mt-3 flex gap-2"
                    >
                      <button
                        type="button"
                        className="flex-1 rounded-lg bg-[#0B2A52] py-2 text-[8px] font-semibold text-white"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-lg bg-[#0B2A52]/[0.05] py-2 text-[8px] font-semibold text-[#0B2A52]"
                      >
                        Message
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-lg bg-[#0B2A52]/[0.05] py-2 text-[8px] font-semibold text-[#0B2A52]"
                      >
                        Email
                      </button>
                    </div>
                    {/* HIGHLIGHTS */}
                    <div
                      className="mt-4 flex gap-3 overflow-hidden sm:gap-4"
                    >
                      {highlights.map((highlight) => (
                        <button
                          key={highlight.label}
                          type="button"
                          className="group shrink-0 text-center"
                        >
                          <div
                            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#B79A72]/25 bg-[#F8F5EF] transition-all duration-300 group-hover:scale-105 group-hover:border-[#B79A72]/60 group-hover:bg-white sm:h-[46px] sm:w-[46px]"
                          >
                            <span
                              className="text-[#B79A72] transition-transform duration-300 group-hover:scale-110"
                            >
                              {highlight.icon}
                            </span>
                          </div>
                          <p
                            className="mt-1.5 text-[7px] text-[#0B2A52]/50"
                          >
                            {highlight.label}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* TABS */}
                  <div
                    className="mt-4 flex border-b border-[#0B2A52]/8"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveTab("grid")}
                      className="relative flex flex-1 items-center justify-center py-3"
                    >
                      {activeTab === "grid" && (
                        <span
                          className="absolute bottom-0 h-[1.5px] w-12 bg-[#0B2A52]"
                        />
                      )}
                      <div
                        className="grid grid-cols-3 gap-1"
                      >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <span
                            key={item}
                            className="h-1.5 w-1.5 rounded-[1px] bg-[#0B2A52]"
                          />
                        ))}
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("reels")}
                      className="relative flex flex-1 items-center justify-center py-3"
                    >
                      {activeTab === "reels" && (
                        <span
                          className="absolute bottom-0 h-[1.5px] w-12 bg-[#0B2A52]"
                        />
                      )}
                      <Play
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#0B2A52]/40"
                      />
                    </button>
                    <button
                      type="button"
                      className="flex flex-1 items-center justify-center py-3"
                    >
                      <Sparkles
                        size={12}
                        strokeWidth={1.5}
                        className="text-[#0B2A52]/40"
                      />
                    </button>
                  </div>
                  {/* =================================================
                      IMAGE GRID
                  ================================================== */}
                  {activeTab === "grid" ? (
                    <div
                      className="grid grid-cols-3 gap-[2px] bg-white"
                    >
                      {posts.map((post, index) => (
                        <button
                          key={post}
                          type="button"
                          className="group relative aspect-square overflow-hidden bg-[#ECE8E0]"
                        >
                          <img
                            src={post}
                            alt={`Sharp Rays social media content example ${index + 1}`}
                            title={`Sharp Rays Social Media Content Example ${index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div
                            className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0B2A52]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0B2A52]/45 group-hover:opacity-100"
                          >
                            <span
                              className="flex items-center gap-1 text-[7px] font-semibold text-white"
                            >
                              <Heart
                                size={10}
                                fill="currentColor"
                              />
                              1.2K
                            </span>
                            <span
                              className="flex items-center gap-1 text-[7px] font-semibold text-white"
                            >
                              <MessageCircle size={10} />
                              48
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="grid grid-cols-3 gap-[2px]"
                    >
                      {posts.map((post, index) => (
                        <div
                          key={`reel-${index}`}
                          className="relative aspect-square overflow-hidden"
                        >
                          <img
                            src={post}
                            alt={`Sharp Rays social media reel example ${index + 1}`}
                            title={`Sharp Rays Social Media Reel Example ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          <div
                            className="absolute right-2 top-2 rounded-full bg-black/40 p-1"
                          >
                            <Play
                              size={8}
                              fill="white"
                              className="text-white"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* BOTTOM NAV */}
                  <div
                    className="flex items-center justify-between px-5 py-3"
                  >
                    <div
                      className="h-3 w-3 rounded-[3px] bg-[#0B2A52]"
                    />
                    <Heart
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />
                    <Plus
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />
                    <Send
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#0B2A52]/50"
                    />
                    <div
                      className="h-4 w-4 overflow-hidden rounded-full border border-[#0B2A52]/20"
                    >
                      <img
                        src="/services/insta/instadp.webp"
                        alt="Sharp Rays social media profile thumbnail"
                        title="Sharp Rays Social Media Profile Thumbnail"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* =================================================
                  LEFT FLOATING CARD
              ================================================== */}
              <div
                className={`
                  absolute
                  -left-20
                  top-[39%]
                  z-40
                  hidden
                  w-[155px]
                  rounded-2xl
                  border
                  border-[#0B2A52]/[0.06]
                  bg-white
                  p-4
                  shadow-[0_25px_60px_rgba(11,42,82,0.09)]
                  transition-all
                  duration-700
                  sm:block
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }
                `}
              >
                <div
                  className="flex items-center justify-between"
                >
                  <p
                    className="text-[7px] font-semibold tracking-[0.15em] text-[#0B2A52]/35"
                  >
                    BRAND SYSTEM
                  </p>
                  <Sparkles
                    size={11}
                    className="text-[#B79A72]"
                  />
                </div>
                <p
                  className="mt-2 text-[19px] font-medium text-[#0B2A52]"
                >
                  Connected
                </p>
                <div
                  className="mt-3 h-[3px] overflow-hidden rounded-full bg-[#0B2A52]/[0.07]"
                >
                  <div
                    className="h-full w-[68%] rounded-full bg-[#B79A72]"
                  />
                </div>
              </div>
              {/* =================================================
                  RIGHT FLOATING CARD
              ================================================== */}
              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className="absolute -right-16 bottom-[22%] z-40 hidden w-[158px] rounded-2xl bg-[#0B2A52] p-4 text-left shadow-[0_25px_60px_rgba(11,42,82,0.17)] transition-all duration-500 hover:-translate-y-2 sm:block"
              >
                <div
                  className="flex items-center justify-between"
                >
                  <span
                    className="text-[7px] font-semibold tracking-[0.15em] text-white/40"
                  >
                    ENGAGEMENT
                  </span>
                  <Heart
                    size={12}
                    fill={liked ? "currentColor" : "none"}
                    className={`
                      transition-all
                      duration-300
                      ${
                        liked
                          ? "scale-125 text-[#B79A72]"
                          : "text-white/40"
                      }
                    `}
                  />
                </div>
                <p
                  className="mt-2 text-[20px] font-medium text-white"
                >
                  48.7K
                </p>
                <p
                  className="mt-1 text-[8px] text-white/40"
                >
                  audience interactions
                </p>
                <div
                  className="mt-4 flex items-end gap-1"
                >
                  {[20, 28, 24, 38, 33, 49, 43, 66].map(
                    (height, index) => (
                      <span
                        key={index}
                        className={`
                          flex-1
                          rounded-sm
                          ${
                            index === 7
                              ? "bg-[#B79A72]"
                              : "bg-white/15"
                          }
                        `}
                        style={{
                          height: `${height * 0.45}px`,
                        }}
                      />
                    )
                  )}
                </div>
              </button>
            </div>
            {/* DECORATIVE DOTS */}
            <span
              className="absolute right-[9%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-[#B79A72]"
            />
            <span
              className="absolute bottom-[12%] left-[10%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#B79A72]/70"
            />
          </div>
        </div>
        {/* =========================================================
            OUR POINT OF VIEW
        ========================================================== */}
        <div
          className={`
            mx-auto
            mt-16
            max-w-[1120px]
            transition-all
            delay-300
            duration-[1200ms]
            sm:mt-20
            lg:mt-24
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }
          `}
        >
          {/* LABEL */}
          <div
            className="mx-auto flex w-fit items-center justify-center gap-3"
          >
            <span
              className="block h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10"
            />
            <span
              className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.28em]"
            >
              OUR POINT OF VIEW
            </span>
            <span
              className="block h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10"
            />
          </div>
          {/* POV INTRO */}
          <p
            className="mx-auto mt-5 max-w-[620px] text-center text-[12px] leading-6 text-[#0B2A52]/45 sm:mt-6 sm:text-[13px] sm:leading-7"
          >
            Strong social media is not only about being seen. Each
            interaction should help move your brand toward greater
            familiarity, relevance and trust.
          </p>
          {/* =====================================================
              POV GRID
          ====================================================== */}
          <div
            className="mt-9 grid border-y border-[#0B2A52]/[0.08] sm:mt-11 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
          >
            {pointOfView.map((item, index) => (
              <div
                key={item.title}
                className={`
                  group
                  relative
                  px-3
                  py-7
                  text-center
                  sm:px-5
                  sm:py-8
                  lg:px-6
                  lg:py-10
                  ${
                    index < pointOfView.length - 1
                      ? "border-b border-[#0B2A52]/[0.08] sm:border-b-0"
                      : ""
                  }
                  ${
                    index === 0 || index === 2
                      ? "sm:border-r sm:border-[#0B2A52]/[0.08]"
                      : ""
                  }
                  ${
                    index < 3
                      ? "lg:border-r lg:border-[#0B2A52]/[0.08]"
                      : ""
                  }
                `}
              >
                {/* TOP DOT */}
                <span
                  className="mx-auto block h-1.5 w-1.5 rounded-full bg-[#B79A72] transition-all duration-300 group-hover:scale-150"
                />
                {/* TITLE */}
                <p
                  className="mt-4 font-[var(--font-new-york)] text-[1.3rem] font-normal tracking-[-0.025em] text-[#0B2A52] sm:text-[1.45rem] lg:text-[1.5rem]"
                >
                  {item.title}
                </p>
                {/* RESULT */}
                <p
                  className="mt-1 text-[12px] font-medium text-[#B79A72] sm:text-[13px]"
                >
                  {item.result}
                </p>
                {/* ACCENT */}
                <span
                  className="mx-auto mt-5 block h-px w-7 bg-[#0B2A52]/15 transition-all duration-300 group-hover:w-12 group-hover:bg-[#B79A72]/60"
                />
              </div>
            ))}
          </div>
          {/* FINAL MESSAGE */}
          <div
            className="mx-auto mt-8 max-w-[780px] text-center sm:mt-10"
          >
            <p
              className="font-[var(--font-new-york)] text-[1.35rem] font-normal leading-[1.35] tracking-[-0.025em] text-[#0B2A52] sm:text-[1.55rem] md:text-[1.7rem]"
            >
              Social media should help your brand become{" "}
              <span className="text-[#B79A72]">
                clearer, recognizable and easier to remember.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
