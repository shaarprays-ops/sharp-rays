"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Play } from "lucide-react";

/* =========================================================
   FONT
========================================================= */
const newYorkFont = { fontFamily: '"New York", "", Georgia, serif' };

/* =========================================================
   PLATFORM DATA
========================================================= */
const platforms = [
  { name: "Instagram", description: "Often useful for visually led brands, consumer discovery, brand building, short-form video and ongoing audience engagement.", image: "/services/social/instagram.png" },
  { name: "LinkedIn", description: "Often suited to B2B companies, professional audiences, expertise-led content, employer communication and industry authority.", image: "/services/social/linkedin.png" },
  { name: "Facebook", description: "Can support established consumer audiences, community communication, local visibility and selected campaign objectives.", image: "/services/social/facebook.png" },
  { name: "Other Platforms", description: "YouTube, TikTok and other social platforms may be considered where your audience, content format and objectives make them relevant.", image: null },
];

const considerations = ["Audience", "Industry", "Business model", "Content capabilities", "Marketing objectives", "Available resources"];

/* =========================================================
   ANIMATION
========================================================= */
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

/* =========================================================
   COMPONENT
========================================================= */
export default function SocialMediaPlatformStrategy() {
  return (
    <section
      id="social-media-platforms"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32 xl:py-36"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}
      {/* =====================================================
          WRAPPER
      ===================================================== */}
      <div
        className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* ===================================================
            TOP EYEBROW
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex items-center gap-4 sm:mb-14"
        >
         <span
            className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]"
          />
          <span
            className="text-[9px] uppercase tracking-[0.38em] text-[#B79A72] sm:text-[10px]"
          >
           Social Media Platforms
          </span>
          <span
            className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]"
          />
        </motion.div>
        {/* ===================================================
            MAIN LAYOUT
        =================================================== */}
        <div
          className="grid gap-16 lg:grid-cols-[minmax(0,1.17fr)_minmax(360px,0.83fr)] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,1.2fr)_minmax(390px,0.8fr)] xl:gap-24"
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div>
            {/* Small label */}
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={newYorkFont}
              className="mt-7 max-w-[830px] text-[2.6rem] font-medium leading-[0.98] tracking-[-0.045em] text-[#0B2A52] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              Which Social Media Platforms
              <span
                className="block text-[#B79061]"
              >
                Should Your Business Use?
              </span>
            </motion.h2>
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="mt-8 max-w-[760px]"
            >
              <p
                className="text-[15px] leading-[1.85] text-[#304A6B] sm:text-[16px]"
              >
                There is no single social media platform that is right for
                every business.
              </p>
              <p
                className="mt-2 text-[15px] leading-[1.85] text-[#304A6B] sm:text-[16px]"
              >
                The right platform mix depends on your audience, industry,
                business model, content capabilities and objectives.
              </p>
              <p
                style={newYorkFont}
                className="mt-3 text-[16px] font-semibold leading-[1.65] tracking-[-0.01em] text-[#0B2A52] sm:text-[17px]"
              >
                Being active everywhere is not always the strongest strategy.
              </p>
              <p
                className="mt-2 text-[15px] leading-[1.85] text-[#304A6B] sm:text-[16px]"
              >
                We focus on the channels where your business has a clear reason
                to participate.
              </p>
            </motion.div>
            {/* =================================================
                PLATFORM LIST
            ================================================= */}
            <div
              className="mt-12 border-t border-[#D8E2EC]"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid grid-cols-[56px_minmax(0,1fr)] items-center gap-5 overflow-hidden border-b border-[#D8E2EC] py-6 sm:grid-cols-[64px_minmax(0,1fr)_44px] sm:gap-6"
                >
                  {/* HOVER WASH */}
                  <span
                    className="pointer-events-none absolute inset-x-0 inset-y-[5px] origin-left scale-x-0 rounded-[18px] bg-gradient-to-r from-[#EEF6FD] via-[#F7FBFF] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  {/* GOLD ACTIVE LINE */}
                  <span
                    className="pointer-events-none absolute left-0 top-1/2 h-[42%] w-[2px] -translate-y-1/2 scale-y-0 rounded-full bg-[#B79061] transition-transform duration-300 group-hover:scale-y-100"
                  />
                  {/* PLATFORM LOGO */}
                  <div
                    className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center transition-all duration-300 group-hover:-translate-y-[2px] sm:h-[60px] sm:w-[60px]"
                  >
                    {platform.image ? (
                      <Image
                        src={platform.image}
                        alt={`${platform.name} logo`}
                        title={`${platform.name} social media platform logo`}
                        width={60}
                        height={60}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center rounded-[17px] border border-[#C9DBEC] bg-gradient-to-br from-white to-[#EDF6FF] text-[#164D87] shadow-[0_8px_24px_rgba(11,42,82,0.06)]"
                      >
                        <Play
                          className="h-[22px] w-[22px]"
                          strokeWidth={1.55}
                        />
                      </div>
                    )}
                  </div>
                  {/* CONTENT */}
                  <div
                    className="relative z-10 min-w-0"
                  >
                    <h3
                      style={newYorkFont}
                      className="text-[21px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#0B2A52] sm:text-[23px]"
                    >
                      {platform.name}
                    </h3>
                    <p
                      className="mt-[5px] max-w-[630px] text-[13px] leading-[1.7] text-[#435D7C] sm:text-[14px]"
                    >
                      {platform.description}
                    </p>
                  </div>
                  {/* ARROW */}
                  <div
                    className="relative z-10 hidden h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#D6C4AC] bg-white/40 text-[#B48B59] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-[#B79061] group-hover:bg-white group-hover:shadow-[0_8px_22px_rgba(11,42,82,0.07)] sm:flex"
                  >
                    <ArrowUpRight
                      className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* =================================================
              RIGHT SIDE
              NO PHONE / NO SOCIAL VISUAL
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:sticky lg:top-28 lg:pt-[74px]"
          >
            {/* SMALL TOP INTRO */}
            {/* ===============================================
                PLATFORM FIT PANEL
            =============================================== */}
            <div
              className="relative overflow-hidden rounded-[28px] border border-[#BCD3E8]/70 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF6FD] p-7 shadow-[0_24px_70px_rgba(11,42,82,0.07)] sm:p-9 lg:p-8 xl:p-10"
            >
              {/* TOP ACCENT */}
              <span
                className="absolute left-0 top-0 h-[3px] w-[34%] bg-gradient-to-r from-[#0B2A52] via-[#6387AD] to-transparent"
              />
              {/* BACKGROUND GLOW */}
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-[250px] w-[250px] rounded-full bg-[#DCEEFF]/70 blur-[58px]"
              />
              <div
                className="pointer-events-none absolute -bottom-28 -left-28 h-[220px] w-[220px] rounded-full bg-white/80 blur-[45px]"
              />
              <div className="relative z-10">
                {/* LABEL */}
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#153E70]"
                >
                  Platform Fit
                </p>
                <span
                  className="mt-4 block h-px w-8 bg-[#B79061]"
                />
                <p
                  className="mt-7 text-[14px] leading-7 text-[#3D5777]"
                >
                  We consider:
                </p>
                {/* CHECKLIST */}
                <div
                  className="mt-6 grid gap-x-7 gap-y-[15px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                >
                  {considerations.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#C4A06C] text-white shadow-[0_5px_14px_rgba(183,144,97,0.16)]"
                      >
                        <Check
                          className="h-[11px] w-[11px]"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span
                        style={newYorkFont}
                        className="text-[14px] leading-[1.4] text-[#203C61]"
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                {/* DIVIDER */}
                <div
                  className="my-8 h-px w-full bg-[#C8D8E7]"
                />
                {/* MAIN STATEMENT */}
                <h3
                  style={newYorkFont}
                  className="max-w-[400px] text-[27px] font-medium leading-[1.05] tracking-[-0.035em] text-[#0B2A52] sm:text-[30px] xl:text-[32px]"
                >
                  Not everywhere.
                  <span
                    className="mt-1 block text-[#B58C5B]"
                  >
                    Where it makes sense.
                  </span>
                </h3>
                <p
                  className="mt-5 max-w-[420px] text-[13px] leading-[1.8] text-[#647B99] sm:text-[14px]"
                >
                  Your recommended platform mix is agreed during strategy and
                  planning based on where your audience, content and objectives
                  align.
                </p>
                {/* ===========================================
                    CTA
                =========================================== */}
                <div className="mt-8">
                  <Link
                    href="/contact?service=social-media-marketing&need=platform-strategy"
                    title="Contact Sharp Rays to discuss your social media platform strategy"
                    style={newYorkFont}
                    className="group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px] text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] active:translate-y-0 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]"
                  >
                    {/* STATIC SOFT BORDER */}
                    <span
                      className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60"
                    />
                    {/* SUBTLE INNER LIGHT */}
                    <span
                      className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    />
                    <span
                      className="relative z-10 whitespace-nowrap text-[#0B2A52]"
                    >
                      Discuss Your Platform Strategy
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* ===============================================
                SUPPORTING NOTE
            =============================================== */}
            <div
              className="mt-7 flex items-start gap-4 px-2"
            >
              <span
                className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#B79061]"
              />
              <p
                className="max-w-[430px] text-[12px] leading-[1.8] text-[#7890AA]"
              >
                Platform selection is based on relevance, not the pressure to
                maintain a presence on every available channel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}